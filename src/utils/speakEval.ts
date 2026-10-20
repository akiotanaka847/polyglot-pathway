// Pure helpers for the 60s monologue, pronunciation retry and daily speaking test.
export const MONOLOGUE_MS = 60_000;

export type Evaluation = {
  fluency: number; grammar: number; vocabulary: number; pronunciation: number;
  words: string[]; model: string; modelMeaning: string; tips: string[];
};

export function clampBand(value: unknown): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return 5;
  return Math.min(9, Math.max(1, Math.round(n * 2) / 2));
}

export function overallBand(e: Pick<Evaluation, 'fluency' | 'grammar' | 'vocabulary' | 'pronunciation'>): number {
  return clampBand((clampBand(e.fluency) + clampBand(e.grammar) + clampBand(e.vocabulary) + clampBand(e.pronunciation)) / 4);
}

export function medalFor(band: number): 'gold' | 'silver' | 'bronze' {
  return band >= 7.5 ? 'gold' : band >= 6 ? 'silver' : 'bronze';
}

const norm = (s: string) => s.toLowerCase().normalize('NFKC').replace(/[\p{P}\p{S}\s]+/gu, '');

function levenshtein(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]; row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

/** 0..1 similarity between what was heard and the target phrase. */
export function similarity(heard: string, target: string): number {
  const a = norm(heard), b = norm(target);
  if (!a || !b) return 0;
  if (a.includes(b)) return 1;
  return Math.max(0, 1 - levenshtein(a, b) / Math.max(a.length, b.length));
}

export const PASS_SIMILARITY = 0.8;

export type DailyItem = { kind: 'repeat'; text: string } | { kind: 'answer'; topicId: string; prompt: string };

/** Daily set: up to 3 phrases from the learner's own corrections in this language, then open questions. */
export function buildDailySet(
  lang: string,
  corrections: { lang: string; right: string }[],
  topics: { id: string; prompt: string }[],
  seed: number,
  size = 5,
): DailyItem[] {
  const pick = <T,>(arr: T[], n: number) => {
    const copy = arr.slice(); let s = seed || 1;
    for (let i = copy.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = s % (i + 1); [copy[i], copy[j]] = [copy[j], copy[i]]; }
    return copy.slice(0, n);
  };
  const own = [...new Set(corrections.filter(c => c.lang === lang && c.right).map(c => c.right))];
  const repeats: DailyItem[] = pick(own, 3).map(text => ({ kind: 'repeat', text }));
  const answers: DailyItem[] = pick(topics, size - repeats.length).map(t => ({ kind: 'answer', topicId: t.id, prompt: t.prompt }));
  return [...repeats, ...answers];
}

export function nextStreak(prev: { last?: string; streak?: number } | undefined, today: string): number {
  if (!prev?.last) return 1;
  if (prev.last === today) return prev.streak || 1;
  const diff = Math.round((Date.parse(today) - Date.parse(prev.last)) / 86_400_000);
  return diff === 1 ? (prev.streak || 0) + 1 : 1;
}
