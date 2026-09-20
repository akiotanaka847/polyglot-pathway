import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

type RecorderState = {
  recorder: MediaRecorder;
  stream: MediaStream;
  chunks: Blob[];
  mimeType: string;
  stopped: Promise<void>;
  audioCtx: AudioContext | null;
};

const CANDIDATE_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg;codecs=opus',
  'audio/ogg',
];

// Generous ceiling: transcription of long clips can take a while; only a true hang should surface an error.
const TRANSCRIBE_TIMEOUT_MS = 120_000;

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
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [level, setLevel] = useState(0); // 0..1 live mic volume
  const recorderRef = useRef<RecorderState | null>(null);
  const timerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const isSupported = typeof window !== 'undefined'
    && !!navigator.mediaDevices?.getUserMedia
    && typeof MediaRecorder !== 'undefined';

  const cleanupMeters = useCallback(() => {
    if (timerRef.current !== null) { window.clearInterval(timerRef.current); timerRef.current = null; }
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    setLevel(0);
    setSeconds(0);
  }, []);

  useEffect(() => () => {
    cleanupMeters();
    const rec = recorderRef.current;
    if (rec) {
      try { if (rec.recorder.state !== 'inactive') rec.recorder.stop(); } catch { /* ignore */ }
      rec.stream.getTracks().forEach(t => t.stop());
      rec.audioCtx?.close().catch(() => undefined);
    }
  }, [cleanupMeters]);

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

      // Live volume meter so the user can see the mic is picking up their voice.
      let audioCtx: AudioContext | null = null;
      try {
        audioCtx = new AudioContext();
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;
        source.connect(analyser);
        const buf = new Uint8Array(analyser.frequencyBinCount);
        const tick = () => {
          analyser.getByteTimeDomainData(buf);
          let sum = 0;
          for (let i = 0; i < buf.length; i++) {
            const v = (buf[i] - 128) / 128;
            sum += v * v;
          }
          const rms = Math.sqrt(sum / buf.length);
          setLevel(Math.min(1, rms * 3.2));
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      } catch { audioCtx = null; /* meter is optional */ }

      recorderRef.current = { recorder, stream, chunks, mimeType: recorder.mimeType || mimeType, stopped, audioCtx };
      setSeconds(0);
      timerRef.current = window.setInterval(() => setSeconds(s => s + 1), 1000);
      setIsListening(true);
    } catch (err) {
      console.warn('Audio recording start failed:', err);
      setMicError(err instanceof DOMException && err.name === 'NotAllowedError'
        ? 'Permiso del micrófono denegado. Actívalo en tu navegador.'
        : 'No pude abrir el micrófono. Revisa los permisos.');
      setIsListening(false);
      cleanupMeters();
    }
  }, [isSupported, cleanupMeters]);

  const stop = useCallback(async () => {
    const recording = recorderRef.current;
    if (!recording) return '';
    recorderRef.current = null;
    setIsListening(false);
    cleanupMeters();

    try {
      if (recording.recorder.state !== 'inactive') recording.recorder.stop();
      await recording.stopped;
    } catch { /* already stopped */ }
    recording.stream.getTracks().forEach(track => track.stop());
    recording.audioCtx?.close().catch(() => undefined);

    const mimeType = recording.mimeType || 'audio/webm';
    const audio = new Blob(recording.chunks, { type: mimeType });
    if (audio.size < 1200) {
      setMicError('No escuché nada. Habla un poco más cerca del micrófono.');
      return '';
    }

    setIsTranscribing(true);
    try {
      const form = new FormData();
      form.append('file', audio, `recording.${extensionFor(mimeType)}`);
      form.append('language', lang);

      let timedOut = false;
      const timeout = new Promise<never>((_, reject) => {
        window.setTimeout(() => { timedOut = true; reject(new Error('La conexión está lenta. Inténtalo de nuevo.')); }, TRANSCRIBE_TIMEOUT_MS);
      });
      const result = await Promise.race([
        supabase.functions.invoke('transcribe-audio', { body: form }),
        timeout,
      ]);
      if (timedOut) return '';
      const { data, error } = result;
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
    } finally {
      setIsTranscribing(false);
    }
  }, [lang, cleanupMeters]);

  return { transcript, isListening, isTranscribing, isSupported, start, stop, setTranscript, micError, seconds, level };
}
