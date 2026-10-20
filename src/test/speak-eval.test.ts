import { describe, it, expect } from 'vitest';
import { buildDailySet, clampBand, MONOLOGUE_MS, nextStreak, similarity } from '@/utils/speakEval';

describe('speaking evaluation rules', () => {
  it('bands always stay between 1 and 9', () => {
    expect(clampBand(12)).toBe(9);
    expect(clampBand(-3)).toBe(1);
    expect(clampBand('x')).toBe(5);
    expect(clampBand(6.3)).toBe(6.5);
  });
  it('free talk lasts 60 seconds', () => { expect(MONOLOGUE_MS).toBe(60_000); });
  it('daily test only reuses corrections from the chosen language', () => {
    const set = buildDailySet('fr', [{ lang: 'en', right: 'I went' }, { lang: 'fr', right: 'je suis allé' }], [{ id: 'a', prompt: 'p' }, { id: 'b', prompt: 'q' }, { id: 'c', prompt: 'r' }, { id: 'd', prompt: 's' }, { id: 'e', prompt: 't' }], 20261020);
    const repeats = set.filter(i => i.kind === 'repeat').map(i => (i as { text: string }).text);
    expect(repeats).toEqual(['je suis allé']);
    expect(set).toHaveLength(5);
  });
  it('retry passes on near match and fails on a different word', () => {
    expect(similarity('Mesmerize!', 'mesmerize')).toBe(1);
    expect(similarity('table', 'mesmerize')).toBeLessThan(0.8);
  });
  it('streak grows on consecutive days and resets after a gap', () => {
    expect(nextStreak({ last: '2026-10-19', streak: 3 }, '2026-10-20')).toBe(4);
    expect(nextStreak({ last: '2026-10-15', streak: 3 }, '2026-10-20')).toBe(1);
  });
});
