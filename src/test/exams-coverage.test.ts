import { describe, it, expect } from 'vitest';
import { EXAM_DATA } from '@/data/exams';
import { LANGUAGES } from '@/data/languages';

describe('mock exams', () => {
  it('exist for every level of every learnable language', () => {
    for (const l of LANGUAGES) {
      for (const level of l.levels) {
        expect(EXAM_DATA[l.code]?.[level], `${l.code} ${level}`).toBeDefined();
      }
    }
  });
});
