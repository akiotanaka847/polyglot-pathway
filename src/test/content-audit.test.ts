import { describe, it, expect } from 'vitest';
import { LANGUAGES } from '@/data/languages';
import { getLevelQuiz, QUIZ_SIZE } from '@/data/levelQuiz';
import { GRAMMAR_REF, VOCAB_REF } from '@/data/reference';
import { STORIES } from '@/data/stories';
import { CULTURE_DATA } from '@/data/culture';
import { SLANG_DATA } from '@/data/slang';
import { SPEAK_TOPICS, getSpeakTopicTitle } from '@/data/speakTopics';

const SCRIPT: Record<string, RegExp> = {
  jp: /[\u3040-\u30ff\u4e00-\u9fff]/, zh: /[\u4e00-\u9fff]/, ko: /[\uac00-\ud7af]/,
  ru: /[\u0400-\u04ff]/, ar: /[\u0600-\u06ff]/, hi: /[\u0900-\u097f]/,
};

describe('every level has a full final quiz (so the next level can be unlocked)', () => {
  for (const native of ['fr', 'en', 'es']) {
    it(`native ${native}`, () => {
      const problems: string[] = [];
      LANGUAGES.forEach(cfg => cfg.levels.forEach(lv => {
        const qs = getLevelQuiz(cfg.code, lv, native);
        if (qs.length < QUIZ_SIZE) problems.push(`${cfg.code} ${lv}: ${qs.length} questions`);
        qs.forEach(q => {
          if (q.t === 'mc' && (!q.opts || typeof q.ans !== 'number' || q.opts[q.ans] === undefined)) problems.push(`${cfg.code} ${lv}: bad answer "${q.q}"`);
          if (q.t === 'mc' && q.opts && new Set(q.opts).size !== q.opts.length) problems.push(`${cfg.code} ${lv}: repeated options "${q.q}"`);
        });
      }));
      expect(problems.slice(0, 10)).toEqual([]);
    });
  }
});

describe('reference has content in every level', () => {
  it('grammar and vocabulary per level', () => {
    const problems: string[] = [];
    LANGUAGES.forEach(cfg => cfg.levels.forEach(lv => {
      const g = (GRAMMAR_REF[cfg.code] || []).filter(x => x.level === lv).length;
      const v = (VOCAB_REF[cfg.code]?.[lv] || []).length;
      if (g < 1) problems.push(`${cfg.code} ${lv}: no grammar`);
      if (v < 12) problems.push(`${cfg.code} ${lv}: ${v} words`);
    }));
    expect(problems).toEqual([]);
  });

  it('examples are written in the language being learned', () => {
    const problems: string[] = [];
    Object.entries(SCRIPT).forEach(([code, re]) => (GRAMMAR_REF[code] || []).forEach(g => (g.examples || []).forEach(e => {
      if (e.text && !re.test(e.text)) problems.push(`${code} ${g.level} ${g.title}: ${e.text}`);
    })));
    expect(problems.slice(0, 10)).toEqual([]);
  });
});

describe('stories, culture and slang exist for every language', () => {
  it('content present', () => {
    LANGUAGES.forEach(cfg => {
      expect(STORIES[cfg.code]?.chapters?.length, `${cfg.code} story`).toBeGreaterThan(0);
      expect(CULTURE_DATA[cfg.code]?.length, `${cfg.code} culture`).toBeGreaterThan(0);
      expect(SLANG_DATA[cfg.code]?.length, `${cfg.code} slang`).toBeGreaterThan(0);
    });
  });

  it('story dialogue is in the language being learned', () => {
    const problems: string[] = [];
    Object.entries(SCRIPT).forEach(([code, re]) => STORIES[code]?.chapters.forEach(ch => ch.scenes.forEach(sc => sc.dialogue.forEach(d => {
      if (d.speaker !== 'narrador' && d.text && !re.test(d.text)) problems.push(`${code} ${sc.id}: ${d.text}`);
    }))));
    expect(problems.slice(0, 10)).toEqual([]);
  });
});

describe('speaking topics are named in every native language', () => {
  it('24 titles per language, not left in Spanish', () => {
    LANGUAGES.forEach(cfg => {
      const titles = SPEAK_TOPICS.map(t => getSpeakTopicTitle(t.id, cfg.code));
      expect(new Set(titles).size, cfg.code).toBe(SPEAK_TOPICS.length);
      if (cfg.code !== 'es') {
        const same = SPEAK_TOPICS.filter(t => getSpeakTopicTitle(t.id, cfg.code) === getSpeakTopicTitle(t.id, 'es'));
        expect(same.length, cfg.code).toBeLessThan(5); // a few names are spelled the same (Música, Cultura)
      }
    });
  });
});

import { CONVERSATION_DATA } from '@/data/conversations';
import { getThemedConversations } from '@/data/convGenerate';
import CONV_I18N from '@/data/content-fill/conv-i18n.json';

describe('conversation topics are translated for every native language', () => {
  it('every title and scenario has a translation', () => {
    const missing: string[] = [];
    LANGUAGES.forEach(l => getThemedConversations(l.code, (CONVERSATION_DATA as any)[l.code] || []).forEach((c: any) => {
      LANGUAGES.filter(n => n.code !== 'es').forEach(n => [c.title, c.scenario].forEach(s => {
        if (s && !(CONV_I18N as any)[n.code]?.[s]) missing.push(`${n.code}: ${s}`);
      }));
    }));
    expect(missing.slice(0, 10)).toEqual([]);
  });
});
