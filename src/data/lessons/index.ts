import { Lesson } from '../types';
import { LANGUAGES } from '../languages';
import { jpN5Lessons, jpN4Lessons } from './jp';
import { frA1Lessons, frA2Lessons } from './fr';
import { zhHSK1Lessons } from './zh';
import { enA1Lessons } from './en';
import { deA1Lessons } from './de';
import { itA1Lessons, ptA1Lessons, koTOPIK1Lessons, ruA1Lessons, arA1Lessons, hiA1Lessons, trA1Lessons, viA1Lessons, thA1Lessons, nlA1Lessons, plA1Lessons, esA1Lessons } from './remaining';
import {
  jpN3Lessons, frB1Lessons, zhHSK2Lessons, deA2Lessons, enA2Lessons,
  itA2Lessons, ptA2Lessons, koTOPIK2Lessons, ruA2Lessons, arA2Lessons,
  hiA2Lessons, trA2Lessons, viA2Lessons, thA2Lessons, nlA2Lessons, plA2Lessons, esA2Lessons,
} from './level2';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

export const LESSON_DATA: Record<string, Record<string, Lesson[]>> = {
  jp: { N5: jpN5Lessons, N4: jpN4Lessons, N3: jpN3Lessons },
  fr: { A1: frA1Lessons, A2: frA2Lessons, B1: frB1Lessons },
  zh: { HSK1: zhHSK1Lessons, HSK2: zhHSK2Lessons },
  de: { A1: deA1Lessons, A2: deA2Lessons },
  it: { A1: itA1Lessons, A2: itA2Lessons },
  pt: { A1: ptA1Lessons, A2: ptA2Lessons },
  ko: { TOPIK1: koTOPIK1Lessons, TOPIK2: koTOPIK2Lessons },
  ru: { A1: ruA1Lessons, A2: ruA2Lessons },
  ar: { A1: arA1Lessons, A2: arA2Lessons },
  hi: { A1: hiA1Lessons, A2: hiA2Lessons },
  tr: { A1: trA1Lessons, A2: trA2Lessons },
  vi: { A1: viA1Lessons, A2: viA2Lessons },
  th: { A1: thA1Lessons, A2: thA2Lessons },
  nl: { A1: nlA1Lessons, A2: nlA2Lessons },
  pl: { A1: plA1Lessons, A2: plA2Lessons },
  en: { A1: enA1Lessons, A2: enA2Lessons },
  es: { A1: esA1Lessons, A2: esA2Lessons },
};
