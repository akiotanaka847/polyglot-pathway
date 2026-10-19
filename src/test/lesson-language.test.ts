import { describe, it, expect } from 'vitest';
import { getLessonData } from '@/data/lessons';
import { LANGUAGES } from '@/data/languages';
import { getLevelBank } from '@/data/lessons/wordbanks/universal';
import { hasMeaning, translateMeaning } from '@/data/lessons/generator';

const codes = LANGUAGES.map(l => l.code);

function bankWords(code: string): Set<string> {
  const out = new Set<string>();
  const cfg = LANGUAGES.find(l => l.code === code)!;
  cfg.levels.forEach((_, i) => {
    const b = getLevelBank(code, i);
    if (b) Object.values(b).forEach(arr => (arr as any[] || []).forEach(e => e?.w && out.add(e.w.toLowerCase())));
  });
  return out;
}

const OWN = Object.fromEntries(codes.map(c => [c, bankWords(c)]));
// Real cognates spelled the same in several languages
const COGNATES = new Set(['doctor', 'recibo']);

describe('lessons stay in the language being learned', () => {
  it('every language has its own bank for every level', () => {
    LANGUAGES.forEach(cfg => cfg.levels.forEach((lv, i) => {
      expect(getLevelBank(cfg.code, i), `${cfg.code} ${lv}`).not.toBeNull();
    }));
  });

  for (const native of ['fr', 'en', 'ko']) {
    it(`no words from another learning language appear (native ${native})`, () => {
      const data = getLessonData(native);
      const problems: string[] = [];
      for (const target of codes) {
        if (target === native) continue;
        const foreign = new Set<string>();
        codes.filter(c => c !== target).forEach(c => OWN[c].forEach(w => { if (w.length > 3 && !OWN[target].has(w) && !COGNATES.has(w)) foreign.add(w); }));
        Object.entries(data[target]).forEach(([lv, lessons]) => lessons.forEach(l => l.steps.forEach((s: any) => {
          if (s.t === 'th' && foreign.has(String(s.char).toLowerCase())) problems.push(`${target} ${lv} ${l.id}: ${s.char}`);
        })));
      }
      expect(problems.slice(0, 10)).toEqual([]);
    });
  }
});

describe('meanings are shown in the native language', () => {
  it('every vocabulary meaning has a translation for every native language', () => {
    const missing: string[] = [];
    for (const native of codes) {
      if (native === 'en') continue;
      for (const target of codes) {
        LANGUAGES.find(l => l.code === target)!.levels.forEach((_, i) => {
          const b = getLevelBank(target, i);
          Object.values(b || {}).forEach(arr => (arr as any[]).forEach(e => { if (!hasMeaning(e.mn, native)) missing.push(`${native}: ${e.mn}`); }));
        });
      }
    }
    expect([...new Set(missing)].slice(0, 10)).toEqual([]);
  });

  it('a French speaker learning Portuguese sees French, not Spanish', () => {
    expect(translateMeaning('Ugly', 'fr')).not.toBe('Feo');
    expect(translateMeaning('White', 'fr')).toMatch(/blanc/i);
  });

  it('English B1 never teaches Spanish words to a French speaker', () => {
    const chars = getLessonData('fr').en.B1.flatMap(l => l.steps).filter((s: any) => s.t === 'th').map((s: any) => s.char);
    expect(chars).not.toContain('Blanco');
    expect(chars).not.toContain('Gris');
  });
});
