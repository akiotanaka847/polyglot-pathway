import { it } from 'vitest';
import { GRAMMAR_REF, VOCAB_REF } from '@/data/reference';
import { STORIES } from '@/data/stories';
import { CULTURE_DATA } from '@/data/culture';
import { SLANG_DATA } from '@/data/slang';
it('a', () => {
  console.log('G', JSON.stringify(GRAMMAR_REF.pt[0]));
  console.log('V', JSON.stringify(Object.entries(VOCAB_REF.pt)[0]).slice(0, 400));
  console.log('S', JSON.stringify((SLANG_DATA as any).pt[0]));
  console.log('C', JSON.stringify((CULTURE_DATA as any).pt[0]));
  const s: any = (STORIES as any).pt; console.log('ST', s.chapters.map((c: any) => c.level + ':' + c.scenes.length).join(','), JSON.stringify(s.chapters[0].scenes[0]).slice(0, 900));
});
