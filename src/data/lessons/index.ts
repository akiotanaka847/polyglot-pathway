import { Lesson } from '../types';
import { LANGUAGES } from '../languages';
import { jpN5Lessons, jpN4Lessons } from './jp';
import { frA1Lessons, frA2Lessons } from './fr';
import { zhHSK1Lessons } from './zh';
import { enA1Lessons } from './en';
import { deA1Lessons } from './de';
import { itA1Lessons, ptA1Lessons, koTOPIK1Lessons, ruA1Lessons, arA1Lessons, hiA1Lessons, trA1Lessons, viA1Lessons, thA1Lessons, nlA1Lessons, plA1Lessons, esA1Lessons } from './remaining';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

export const LESSON_DATA: Record<string, Record<string, Lesson[]>> = {
  jp: { N5: jpN5Lessons, N4: jpN4Lessons },
  fr: { A1: frA1Lessons, A2: frA2Lessons },
  zh: { HSK1: zhHSK1Lessons },
  de: { A1: deA1Lessons },
  it: { A1: itA1Lessons },
  pt: { A1: ptA1Lessons },
  ko: { TOPIK1: koTOPIK1Lessons },
  ru: { A1: ruA1Lessons },
  ar: { A1: arA1Lessons },
  hi: { A1: hiA1Lessons },
  tr: { A1: trA1Lessons },
  vi: { A1: viA1Lessons },
  th: { A1: thA1Lessons },
  nl: { A1: nlA1Lessons },
  pl: { A1: plA1Lessons },
  en: { A1: enA1Lessons },
  es: { A1: esA1Lessons },
};
