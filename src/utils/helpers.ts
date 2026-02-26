import { getLangConfig } from '@/data/languages';

// Cache of best available voices per language
let voiceCache: Record<string, SpeechSynthesisVoice | null> = {};
let voicesLoaded = false;

function loadVoices() {
  if (!window.speechSynthesis) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return;
  voicesLoaded = true;
  voiceCache = {};
}

// Preferred voice names that sound natural (not robotic)
const PREFERRED_VOICES: Record<string, string[]> = {
  'ja-JP': ['Google 日本語', 'Kyoko', 'O-Ren', 'Otoya', 'Hattori', 'Microsoft Nanami', 'Nanami'],
  'fr-FR': ['Google français', 'Thomas', 'Amélie', 'Marie', 'Microsoft Denise', 'Denise'],
  'zh-CN': ['Google 普通话', 'Ting-Ting', 'Lili', 'Microsoft Xiaoxiao', 'Xiaoxiao'],
  'pt-BR': ['Google português do Brasil', 'Luciana', 'Microsoft Francisca', 'Francisca'],
  'ko-KR': ['Google 한국의', 'Yuna', 'Microsoft SunHi', 'SunHi'],
  'ru-RU': ['Google русский', 'Milena', 'Yuri', 'Microsoft Svetlana', 'Svetlana'],
  'ar-SA': ['Google العربية', 'Maged', 'Laila', 'Microsoft Hoda', 'Hoda'],
  'hi-IN': ['Google हिन्दी', 'Lekha', 'Microsoft Swara', 'Swara'],
  'en-US': ['Google US English', 'Samantha', 'Alex', 'Karen', 'Microsoft Aria', 'Aria', 'Microsoft Jenny'],
  'es-ES': ['Google español', 'Mónica', 'Jorge', 'Paulina', 'Microsoft Elvira', 'Elvira'],
};

function getBestVoice(langCode: string): SpeechSynthesisVoice | null {
  if (voiceCache[langCode] !== undefined) return voiceCache[langCode];
  
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  const preferred = PREFERRED_VOICES[langCode] || [];
  
  // 1. Try preferred voices first (these are known natural-sounding ones)
  for (const name of preferred) {
    const v = voices.find(v => v.name.includes(name));
    if (v) { voiceCache[langCode] = v; return v; }
  }

  // 2. Try premium/enhanced voices (non-compact, non-default system voices)
  const langVoices = voices.filter(v => v.lang.startsWith(langCode.split('-')[0]));
  const premium = langVoices.find(v => 
    !v.name.toLowerCase().includes('compact') && 
    !v.name.toLowerCase().includes('espeak') &&
    (v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Apple') || v.localService === false)
  );
  if (premium) { voiceCache[langCode] = premium; return premium; }

  // 3. Any non-espeak voice for this language
  const nonRobotic = langVoices.find(v => !v.name.toLowerCase().includes('espeak'));
  if (nonRobotic) { voiceCache[langCode] = nonRobotic; return nonRobotic; }

  // 4. Any voice for this language
  const any = langVoices[0] || null;
  voiceCache[langCode] = any;
  return any;
}

export function speakText(text: string, lang: string) {
  if (!window.speechSynthesis) return;
  const clean = text.replace(/<[^>]*>/g, '').replace(/[()（）]/g, '');
  if (!clean) return;
  window.speechSynthesis.cancel();

  // Ensure voices are loaded
  if (!voicesLoaded) loadVoices();

  const u = new SpeechSynthesisUtterance(clean);
  const config = getLangConfig(lang);
  u.lang = config.ttsCode;
  
  // Select best available voice
  const voice = getBestVoice(config.ttsCode);
  if (voice) u.voice = voice;
  
  // Warmer, friendlier settings
  u.rate = 0.78;
  u.pitch = 1.1;
  u.volume = 0.9;
  
  window.speechSynthesis.speak(u);
}

// Load voices when they become available (async on some browsers)
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoices();
  };
  loadVoices();
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
  playTone(523.25, 0.25, 'sine', 0.12, 0);
  playTone(659.25, 0.25, 'sine', 0.10, 0.08);
  playTone(783.99, 0.25, 'sine', 0.08, 0.16);
  playTone(1046.50, 0.35, 'sine', 0.06, 0.24);
}

export function playIncorrectSound() {
  if (!audioCtx) return;
  audioCtx.resume();
  playTone(311.13, 0.3, 'triangle', 0.10, 0);
  playTone(261.63, 0.4, 'triangle', 0.08, 0.15);
}

export function playLevelUpSound() {
  if (!audioCtx) return;
  audioCtx.resume();
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
