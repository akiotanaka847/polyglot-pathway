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

// ── Audio feedback ──
const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

function playTone(freq: number, duration: number, type: OscillatorType, vol: number, delay = 0) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  const t = audioCtx.currentTime + delay;
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
  osc.frequency.setValueAtTime(freq, t);
  osc.type = type;
  osc.start(t);
  osc.stop(t + duration);
}

export function playCorrectSound() {
  if (!audioCtx) return;
  audioCtx.resume();
  // Pleasant major chord arpeggio: C5 → E5 → G5 → C6
  playTone(523.25, 0.25, 'sine', 0.12, 0);
  playTone(659.25, 0.25, 'sine', 0.10, 0.08);
  playTone(783.99, 0.25, 'sine', 0.08, 0.16);
  playTone(1046.50, 0.35, 'sine', 0.06, 0.24);
}

export function playIncorrectSound() {
  if (!audioCtx) return;
  audioCtx.resume();
  // Soft descending minor: Eb4 → C4 (gentle, not harsh)
  playTone(311.13, 0.3, 'triangle', 0.10, 0);
  playTone(261.63, 0.4, 'triangle', 0.08, 0.15);
}

export function playLevelUpSound() {
  if (!audioCtx) return;
  audioCtx.resume();
  // Celebratory fanfare
  playTone(523.25, 0.15, 'sine', 0.10, 0);
  playTone(659.25, 0.15, 'sine', 0.10, 0.1);
  playTone(783.99, 0.15, 'sine', 0.10, 0.2);
  playTone(1046.50, 0.5, 'sine', 0.12, 0.3);
}

// ── Confetti helper ──
export function spawnConfetti(container: HTMLElement) {
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: absolute;
      width: ${4 + Math.random() * 6}px;
      height: ${4 + Math.random() * 6}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      left: ${Math.random() * 100}%;
      top: -10px;
      pointer-events: none;
      z-index: 50;
      animation: confetti-fall ${1.5 + Math.random() * 1.5}s ease-out forwards;
      animation-delay: ${Math.random() * 0.3}s;
      transform: rotate(${Math.random() * 360}deg);
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}
