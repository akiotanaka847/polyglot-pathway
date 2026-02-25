import { getLangConfig } from '@/data/languages';

export function speakText(text: string, lang: string) {
  if (!window.speechSynthesis) return;
  const clean = text.replace(/<[^>]*>/g, '').replace(/[()（）]/g, '');
  if (!clean) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  const config = getLangConfig(lang);
  u.lang = config.ttsCode;
  u.rate = 0.72;
  u.pitch = 1.05;
  window.speechSynthesis.speak(u);
}

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function normalizeAnswer(s: string): string {
  return (s || '').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s\u3000-\u9fff\uff00-\uffef\uac00-\ud7af\u0400-\u04ff\u0600-\u06ff\u0900-\u097f\u0e00-\u0e7f]/g, '')
    .replace(/\s+/g, ' ').trim();
}

// Audio feedback for correct/incorrect answers using Web Audio API
const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

export function playCorrectSound() {
  if (!audioCtx) return;
  audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
  // Pleasant ascending two-tone
  osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
  osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.12); // E5
  osc.type = 'sine';
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.4);
}

export function playIncorrectSound() {
  if (!audioCtx) return;
  audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
  // Descending buzz
  osc.frequency.setValueAtTime(349.23, audioCtx.currentTime); // F4
  osc.frequency.setValueAtTime(261.63, audioCtx.currentTime + 0.12); // C4
  osc.type = 'square';
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.35);
}
