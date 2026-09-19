import { useState, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

type RecorderState = {
  context: AudioContext;
  source: MediaStreamAudioSourceNode;
  processor: ScriptProcessorNode;
  stream: MediaStream;
  chunks: Float32Array[];
  sampleRate: number;
};

function encodeWav(chunks: Float32Array[], inputRate: number, outputRate = 16000) {
  const inputLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const input = new Float32Array(inputLength);
  let offset = 0;
  chunks.forEach(chunk => { input.set(chunk, offset); offset += chunk.length; });

  const ratio = inputRate / outputRate;
  const outputLength = Math.max(0, Math.floor(input.length / ratio));
  const output = new Float32Array(outputLength);
  for (let i = 0; i < outputLength; i += 1) {
    const start = Math.floor(i * ratio);
    const end = Math.min(input.length, Math.floor((i + 1) * ratio));
    let sum = 0;
    for (let j = start; j < end; j += 1) sum += input[j];
    output[i] = sum / Math.max(1, end - start);
  }

  const buffer = new ArrayBuffer(44 + output.length * 2);
  const view = new DataView(buffer);
  const write = (position: number, value: string) => {
    for (let i = 0; i < value.length; i += 1) view.setUint8(position + i, value.charCodeAt(i));
  };
  write(0, 'RIFF');
  view.setUint32(4, 36 + output.length * 2, true);
  write(8, 'WAVE');
  write(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, outputRate, true);
  view.setUint32(28, outputRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  write(36, 'data');
  view.setUint32(40, output.length * 2, true);
  output.forEach((sample, index) => {
    const clamped = Math.max(-1, Math.min(1, sample));
    view.setInt16(44 + index * 2, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
  });
  return new Blob([buffer], { type: 'audio/wav' });
}

export function useSpeechRecognition(lang: string) {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const recorderRef = useRef<RecorderState | null>(null);

  const isSupported = typeof window !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && !!window.AudioContext;

  const start = useCallback(async () => {
    if (!isSupported || recorderRef.current) return;
    setTranscript('');
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      const context = new AudioContext();
      const source = context.createMediaStreamSource(stream);
      const processor = context.createScriptProcessor(4096, 1, 1);
      const chunks: Float32Array[] = [];
      processor.onaudioprocess = event => chunks.push(new Float32Array(event.inputBuffer.getChannelData(0)));
      source.connect(processor);
      processor.connect(context.destination);
      recorderRef.current = { context, source, processor, stream, chunks, sampleRate: context.sampleRate };
      setIsListening(true);
    } catch (err) {
      console.warn('Audio recording start failed:', err);
      setMicError(err instanceof DOMException && err.name === 'NotAllowedError' ? 'permission-denied' : 'start-failed');
      setIsListening(false);
    }
  }, [isSupported]);

  const stop = useCallback(async () => {
    const recorder = recorderRef.current;
    if (!recorder) return '';
    recorderRef.current = null;
    setIsListening(false);
    recorder.stream.getTracks().forEach(track => track.stop());
    recorder.processor.disconnect();
    recorder.source.disconnect();
    await recorder.context.close();

    const audio = encodeWav(recorder.chunks, recorder.sampleRate);
    if (audio.size < 2048) {
      setMicError('empty-recording');
      return '';
    }

    try {
      const form = new FormData();
      form.append('file', audio, 'recording.wav');
      form.append('language', lang);
      const { data, error } = await supabase.functions.invoke('transcribe-audio', { body: form });
      if (error) {
        const detail = await error.context?.json().catch(() => null) as { error?: string } | null;
        throw new Error(detail?.error || error.message);
      }
      const text = typeof data?.text === 'string' ? data.text.trim() : '';
      if (!text) throw new Error('empty-transcript');
      setTranscript(text);
      return text;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setMicError(message);
      return '';
    }
  }, [lang]);

  return { transcript, isListening, isSupported, start, stop, setTranscript, micError };
}
