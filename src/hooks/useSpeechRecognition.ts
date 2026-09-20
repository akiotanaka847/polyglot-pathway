import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

type RecorderState = {
  recorder: MediaRecorder;
  stream: MediaStream;
  chunks: Blob[];
  mimeType: string;
  stopped: Promise<void>;
  audioCtx: AudioContext | null;
  heardVoice: boolean;
  lastVoiceAt: number;
};

const CANDIDATE_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg;codecs=opus',
  'audio/ogg',
];

const SILENCE_AFTER_SPEECH_MS = 1_600;
const NO_SPEECH_MS = 5_000;
const MAX_RECORDING_MS = 45_000;

export type MicOutcome = 'ok' | 'no-speech' | 'too-short' | 'error';

export type MicMessages = {
  noVoice: string;      // nothing heard within NO_SPEECH_MS
  tooShort: string;     // recording too small / silent
  notUnderstood: string; // transcription came back empty
};

const DEFAULT_MESSAGES: MicMessages = {
  noVoice: 'No detecté voz. Acércate al micrófono e inténtalo otra vez.',
  tooShort: 'No escuché nada. Habla un poco más cerca del micrófono.',
  notUnderstood: 'No pude entender el audio. Inténtalo otra vez.',
};

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

export function useSpeechRecognition(
  lang: string,
  onTranscript?: (text: string) => void | Promise<void>,
  messages?: Partial<MicMessages>,
) {
  const msgsRef = useRef<MicMessages>({ ...DEFAULT_MESSAGES, ...messages });
  useEffect(() => { msgsRef.current = { ...DEFAULT_MESSAGES, ...messages }; }, [messages]);
  const [transcript, setTranscript] = useState('');
  const [lastOutcome, setLastOutcome] = useState<MicOutcome | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const [micBlock, setMicBlock] = useState<'insecure' | 'denied' | 'nodevice' | 'busy' | 'unsupported' | null>(
    typeof window !== 'undefined' && window.isSecureContext === false ? 'insecure' : null,
  );
  const [seconds, setSeconds] = useState(0);
  const [level, setLevel] = useState(0); // 0..1 live mic volume
  const recorderRef = useRef<RecorderState | null>(null);
  const timerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const stopRef = useRef<() => Promise<string>>(async () => '');
  const stoppingRef = useRef(false);
  const onTranscriptRef = useRef(onTranscript);

  useEffect(() => { onTranscriptRef.current = onTranscript; }, [onTranscript]);

  const isSupported = typeof window !== 'undefined'
    && window.isSecureContext !== false
    && !!navigator.mediaDevices?.getUserMedia
    && typeof MediaRecorder !== 'undefined';

  // Pre-check the permission where the browser supports it (Chrome/Edge on Windows do),
  // so a previously denied mic shows actionable help before the user even tries.
  useEffect(() => {
    if (!isSupported) {
      setMicBlock(window.isSecureContext === false ? 'insecure' : 'unsupported');
      return;
    }
    let cancelled = false;
    try {
      navigator.permissions?.query({ name: 'microphone' as PermissionName }).then(status => {
        if (cancelled) return;
        if (status.state === 'denied') setMicBlock('denied');
        status.onchange = () => {
          if (!cancelled) setMicBlock(status.state === 'denied' ? 'denied' : null);
        };
      }).catch(() => undefined);
    } catch { /* permissions API optional */ }
    return () => { cancelled = true; };
  }, [isSupported]);

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
    setMicBlock(null);
    setLastOutcome(null);
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
      // A single complete container is more reliable than timed fragments on iOS Safari.
      recorder.start();

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
          const normalized = Math.min(1, rms * 3.2);
          setLevel(normalized);
          const active = recorderRef.current;
          if (active && normalized > 0.045) {
            active.heardVoice = true;
            active.lastVoiceAt = Date.now();
          }
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      } catch { audioCtx = null; /* meter is optional */ }

      recorderRef.current = {
        recorder,
        stream,
        chunks,
        mimeType: recorder.mimeType || mimeType,
        stopped,
        audioCtx,
        heardVoice: false,
        lastVoiceAt: Date.now(),
      };
      const startedAt = Date.now();
      setSeconds(0);
      timerRef.current = window.setInterval(() => {
        setSeconds(s => s + 1);
        const active = recorderRef.current;
        if (!active || stoppingRef.current) return;
        const now = Date.now();
        if ((active.heardVoice && now - active.lastVoiceAt >= SILENCE_AFTER_SPEECH_MS)
          || now - startedAt >= MAX_RECORDING_MS) {
          void stopRef.current();
        } else if (!active.heardVoice && now - startedAt >= NO_SPEECH_MS) {
          void stopRef.current();
        }
      }, 250);
      setIsListening(true);
    } catch (err) {
      console.warn('Audio recording start failed:', err);
      const name = err instanceof DOMException ? err.name : '';
      if (name === 'NotAllowedError' || name === 'SecurityError') {
        setMicBlock('denied');
      } else if (name === 'NotFoundError' || name === 'OverconstrainedError') {
        setMicBlock('nodevice');
      } else if (name === 'NotReadableError' || name === 'AbortError') {
        setMicBlock('busy');
      } else {
        setMicError(`No pude abrir el micrófono (${name || 'error desconocido'}).`);
      }
      setIsListening(false);
      cleanupMeters();
    }
  }, [isSupported, cleanupMeters]);

  const stop = useCallback(async () => {
    const recording = recorderRef.current;
    if (!recording || stoppingRef.current) return '';
    stoppingRef.current = true;
    recorderRef.current = null;
    setIsListening(false);
    cleanupMeters();

    try {
      if (recording.recorder.state !== 'inactive') recording.recorder.stop();
      await Promise.race([
        recording.stopped,
        new Promise<void>(resolve => window.setTimeout(resolve, 3_000)),
      ]);
    } catch { /* already stopped */ }
    recording.stream.getTracks().forEach(track => track.stop());
    recording.audioCtx?.close().catch(() => undefined);

    const mimeType = recording.mimeType || 'audio/webm';
    const audio = new Blob(recording.chunks, { type: mimeType });
    if (!recording.heardVoice) {
      setLastOutcome('no-speech');
      setMicError(msgsRef.current.noVoice);
      stoppingRef.current = false;
      return '';
    }
    if (audio.size < 1200) {
      setLastOutcome('too-short');
      setMicError(msgsRef.current.tooShort);
      stoppingRef.current = false;
      return '';
    }

    setIsTranscribing(true);
    try {
      const form = new FormData();
      form.append('file', audio, `recording.${extensionFor(mimeType)}`);
      form.append('language', lang);

      const result = await supabase.functions.invoke('transcribe-audio', { body: form });
      const { data, error } = result;
      if (error) {
        // Surface the server's real message (supabase-js hides the body behind a generic one)
        let serverMsg = '';
        try {
          const ctx = (error as { context?: Response }).context;
          if (ctx) serverMsg = (await ctx.json() as { error?: string })?.error || '';
        } catch { /* body unreadable */ }
        throw new Error(serverMsg || error.message);
      }
      const payload = data as { text?: string; error?: string } | null;
      if (payload?.error) throw new Error(payload.error);
      const text = typeof payload?.text === 'string' ? payload.text.trim() : '';
      if (!text) throw new Error(msgsRef.current.notUnderstood);
      setTranscript(text);
      setLastOutcome('ok');
      await onTranscriptRef.current?.(text);
      return text;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setLastOutcome('error');
      setMicError(message);
      return '';
    } finally {
      setIsTranscribing(false);
      stoppingRef.current = false;
    }
  }, [lang, cleanupMeters]);

  stopRef.current = stop;

  return { transcript, isListening, isTranscribing, isSupported, start, stop, setTranscript, micError, micBlock, lastOutcome, seconds, level };
}
