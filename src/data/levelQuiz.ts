import { QUIZ_DATA } from './quizzes';
import { getLessonData } from './lessons';
import { QuizQuestion } from './types';

export const QUIZ_SIZE = 15;

/** Quiz question already written in the learner's native language (no further translation). */
export type LevelQuizQuestion = QuizQuestion & { ready?: boolean };

/**
 * Final quiz for one level. Uses the handcrafted quiz first and tops it up with
 * multiple-choice and writing questions from that level's own lessons, so every
 * level always has a full quiz and the next level can always be unlocked.
 */
export function getLevelQuiz(lang: string, level: string, nativeLang: string): LevelQuizQuestion[] {
  const base: LevelQuizQuestion[] = [...(QUIZ_DATA[lang]?.[level] || [])];
  if (base.length >= QUIZ_SIZE) return base;
  const lessons = getLessonData(nativeLang)[lang]?.[level] || [];
  const seen = new Set(base.map(q => q.q));
  // Handcrafted lessons are written in a Spanish base; only questions already in the learner's language skip translation.
  const SPANISH = /[¿¡ñ]|\b(de|el|la|los|las|que|una|con|por|para|del|cuál|qué|significa|escribe)\b/i;
  const ready = (q: string) => nativeLang === 'es' || !SPANISH.test(q);
  const pool: LevelQuizQuestion[] = [];
  lessons.forEach(l => l.steps.forEach((s: any) => {
    if (s.t === 'mc' && Array.isArray(s.opts) && s.opts.length >= 2 && new Set(s.opts).size === s.opts.length && typeof s.ans === 'number' && s.opts[s.ans] !== undefined) {
      if (!seen.has(s.q)) { seen.add(s.q); pool.push({ t: 'mc', q: s.q, opts: s.opts, ans: s.ans, ready: ready(s.q) }); }
    } else if (s.t === 'tx' && typeof s.ans === 'string' && s.ans.trim()) {
      if (!seen.has(s.q)) { seen.add(s.q); pool.push({ t: 'tx', q: s.q, ans: s.ans, ready: ready(s.q) }); }
    }
  }));
  // Prefer mostly multiple choice, spread across the whole level
  const mc = pool.filter(q => q.t === 'mc');
  const tx = pool.filter(q => q.t === 'tx');
  const need = QUIZ_SIZE - base.length;
  const pick = (arr: LevelQuizQuestion[], n: number) => {
    if (arr.length <= n) return arr;
    const step = arr.length / n;
    return Array.from({ length: n }, (_, i) => arr[Math.floor(i * step)]);
  };
  const txN = Math.min(tx.length, Math.floor(need / 4));
  return [...base, ...pick(mc, need - txN), ...pick(tx, txN)].slice(0, Math.max(QUIZ_SIZE, base.length));
}
