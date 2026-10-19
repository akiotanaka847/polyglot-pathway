import { it } from 'vitest';
import { LANGUAGES } from '@/data/languages';
import { QUIZ_DATA } from '@/data/quizzes';
import { EXAM_DATA } from '@/data/exams';
import { GRAMMAR_REF, VOCAB_REF } from '@/data/reference';
import { STORIES } from '@/data/stories';
import { CULTURE_DATA } from '@/data/culture';
import { SLANG_DATA } from '@/data/slang';
import { SPEAK_TOPICS, getSpeakTopicTitle } from '@/data/speakTopics';
it('audit', () => {
  const rows: string[] = [];
  for (const L of LANGUAGES) {
    const c = L.code;
    const q = L.levels.map(lv => `${lv}:${(QUIZ_DATA as any)[c]?.[lv]?.length ?? 0}`).join(' ');
    const e = L.levels.map(lv => { const x = (EXAM_DATA as any)[c]?.[lv]; return `${lv}:${x ? (x.sections?.reduce((a: number, s: any) => a + (s.questions?.length || 0), 0)) : 0}`; }).join(' ');
    const g = (GRAMMAR_REF as any)[c]; const v = (VOCAB_REF as any)[c];
    const gr = L.levels.map(lv => `${lv}:${Array.isArray(g) ? g.filter((x: any) => x.level === lv).length : g?.[lv]?.length ?? 0}`).join(' ');
    const vr = L.levels.map(lv => `${lv}:${Array.isArray(v) ? v.filter((x: any) => x.level === lv).length : v?.[lv]?.length ?? 0}`).join(' ');
    const st = Array.isArray((STORIES as any)[c]) ? (STORIES as any)[c].length : Object.keys((STORIES as any)[c] || {}).length;
    const cu = Array.isArray((CULTURE_DATA as any)[c]) ? (CULTURE_DATA as any)[c].length : Object.keys((CULTURE_DATA as any)[c] || {}).length;
    const sl = ((SLANG_DATA as any)[c] || []).length;
    rows.push(`${c}\n  quiz ${q}\n  exam ${e}\n  gram ${gr}\n  vocab ${vr}\n  stories ${st} culture ${cu} slang ${sl}`);
  }
  console.log(rows.join('\n'));
  const nat = LANGUAGES.map(l => l.code);
  const miss = SPEAK_TOPICS.flatMap((t: any) => nat.filter(n => !getSpeakTopicTitle(t, n) || (n !== 'es' && getSpeakTopicTitle(t, n) === getSpeakTopicTitle(t, 'es'))).map(n => `${t.id}:${n}`));
  console.log('speak missing', miss.slice(0, 20), miss.length);
  console.log('shapes', typeof (GRAMMAR_REF as any).jp, Array.isArray((GRAMMAR_REF as any).jp), JSON.stringify((GRAMMAR_REF as any).jp)?.slice(0, 300));
  console.log('story shape', JSON.stringify((STORIES as any).en ?? Object.keys(STORIES)).slice(0, 300));
});
