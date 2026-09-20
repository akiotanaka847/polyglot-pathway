import { useState, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

type RecorderState = {
  recorder: MediaRecorder;
  stream: MediaStream;
  chunks: Blob[];
  mimeType: string;
  stopped: Promise<void>;
};

const CANDIDATE_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg;codecs=opus',
  'audio/ogg',
];

function pickMimeType(): string {
  if (typeof MediaRecorder === 'undefined') return '';
  for (const type of CANDIDATE_TYPES) {
    try {
      if (MediaRecorder.isTypeSupported(type)) return type;
    } catch { /* older browsers throw */ }
  }
  return '';
}

function extensionFor(mimeType: string): string {
  if (mimeType.includes('webm')) return 'webm';
  if (mimeType.includes('mp4')) return 'mp4';
  if (mimeType.includes('mpeg')) return 'mp3';
  if (mimeType.includes('ogg')) return 'ogg';
  return 'webm';
}

export function useSpeechRecognition(lang: string) {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const recorderRef = useRef<RecorderState | null>(null);

  const isSupported = typeof window !== 'undefined'
    && !!navigator.mediaDevices?.getUserMedia
    && typeof MediaRecorder !== 'undefined';

  const start = useCallback(async () => {
    if (!isSupported || recorderRef.current) return;
    setTranscript('');
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      const mimeType = pickMimeType();
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      const chunks: Blob[] = [];
      recorder.ondataavailable = event => { if (event.data.size > 0) chunks.push(event.data); };
      const stopped = new Promise<void>(resolve => {
        recorder.onstop = () => resolve();
      });
      recorder.start(250);
      recorderRef.current = { recorder, stream, chunks, mimeType: recorder.mimeType || mimeType, stopped };
      setIsListening(true);
    } catch (err) {
      console.warn('Audio recording start failed:', err);
      setMicError(err instanceof DOMException && err.name === 'NotAllowedError'
        ? 'Permiso del micrófono denegado. Actívalo en tu navegador.'
        : 'No pude abrir el micrófono. Revisa los permisos.');
      setIsListening(false);
    }
  }, [isSupported]);

  const stop = useCallback(async () => {
    const recording = recorderRef.current;
    if (!recording) return '';
    recorderRef.current = null;
    setIsListening(false);

    try {
      if (recording.recorder.state !== 'inactive') recording.recorder.stop();
      await recording.stopped;
    } catch { /* already stopped */ }
    recording.stream.getTracks().forEach(track => track.stop());

    const mimeType = recording.mimeType || 'audio/webm';
    const audio = new Blob(recording.chunks, { type: mimeType });
    if (audio.size < 1200) {
      setMicError('No escuché nada. Habla un poco más cerca del micrófono.');
      return '';
    }

    try {
      const form = new FormData();
      form.append('file', audio, `recording.${extensionFor(mimeType)}`);
      form.append('language', lang);
      const { data, error } = await supabase.functions.invoke('transcribe-audio', { body: form });
      if (error) throw new Error(error.message);
      const payload = data as { text?: string; error?: string } | null;
      if (payload?.error) throw new Error(payload.error);
      const text = typeof payload?.text === 'string' ? payload.text.trim() : '';
      if (!text) throw new Error('No pude entender el audio. Inténtalo otra vez.');
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
