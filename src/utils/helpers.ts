import { useApp } from '@/contexts/AppContext';
import { Lang } from '@/data/types';

export function speakText(text: string, lang: Lang | 'ja-JP' | 'fr-FR') {
  if (!window.speechSynthesis) return;
  const clean = text.replace(/<[^>]*>/g, '').replace(/[()（）]/g, '');
  if (!clean) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = (lang === 'jp' || lang === 'ja-JP') ? 'ja-JP' : 'fr-FR';
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
    .replace(/[^a-z0-9\s\u3000-\u9fff\uff00-\uffef]/g, '')
    .replace(/\s+/g, ' ').trim();
}
