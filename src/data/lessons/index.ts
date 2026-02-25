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
import {
  jpN2Lessons, frB2Lessons, zhHSK3Lessons, deB1Lessons, enB1Lessons,
  itB1Lessons, ptB1Lessons, koTOPIK3Lessons, ruB1Lessons, arB1Lessons,
  hiB1Lessons, trB1Lessons, viB1Lessons, thB1Lessons, nlB1Lessons, plB1Lessons, esB1Lessons,
} from './level3';
import {
  jpN1Lessons, frC1Lessons, zhHSK4Lessons, zhHSK5Lessons, deB2Lessons, enB2Lessons,
  itB2Lessons, ptB2Lessons, koTOPIK4Lessons, koTOPIK5Lessons, ruB2Lessons, arB2Lessons,
  hiB2Lessons, trB2Lessons, viB2Lessons, thB2Lessons, nlB2Lessons, plB2Lessons, esB2Lessons,
} from './level4';
import {
  frC2Lessons, deC1Lessons, deC2Lessons, enC1Lessons, enC2Lessons,
  itC1Lessons, itC2Lessons, ptC1Lessons, ptC2Lessons,
  koTOPIK6Lessons, zhHSK6Lessons,
  ruC1Lessons, ruC2Lessons, arC1Lessons, arC2Lessons,
  hiC1Lessons, hiC2Lessons, trC1Lessons, trC2Lessons,
  viC1Lessons, viC2Lessons, thC1Lessons, thC2Lessons,
  nlC1Lessons, nlC2Lessons, plC1Lessons, plC2Lessons,
  esC1Lessons, esC2Lessons,
} from './level5';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

export const LESSON_DATA: Record<string, Record<string, Lesson[]>> = {
  jp: { N5: jpN5Lessons, N4: jpN4Lessons, N3: jpN3Lessons, N2: jpN2Lessons, N1: jpN1Lessons },
  fr: { A1: frA1Lessons, A2: frA2Lessons, B1: frB1Lessons, B2: frB2Lessons, C1: frC1Lessons, C2: frC2Lessons },
  zh: { HSK1: zhHSK1Lessons, HSK2: zhHSK2Lessons, HSK3: zhHSK3Lessons, HSK4: zhHSK4Lessons, HSK5: zhHSK5Lessons, HSK6: zhHSK6Lessons },
  de: { A1: deA1Lessons, A2: deA2Lessons, B1: deB1Lessons, B2: deB2Lessons, C1: deC1Lessons, C2: deC2Lessons },
  it: { A1: itA1Lessons, A2: itA2Lessons, B1: itB1Lessons, B2: itB2Lessons, C1: itC1Lessons, C2: itC2Lessons },
  pt: { A1: ptA1Lessons, A2: ptA2Lessons, B1: ptB1Lessons, B2: ptB2Lessons, C1: ptC1Lessons, C2: ptC2Lessons },
  ko: { TOPIK1: koTOPIK1Lessons, TOPIK2: koTOPIK2Lessons, TOPIK3: koTOPIK3Lessons, TOPIK4: koTOPIK4Lessons, TOPIK5: koTOPIK5Lessons, TOPIK6: koTOPIK6Lessons },
  ru: { A1: ruA1Lessons, A2: ruA2Lessons, B1: ruB1Lessons, B2: ruB2Lessons, C1: ruC1Lessons, C2: ruC2Lessons },
  ar: { A1: arA1Lessons, A2: arA2Lessons, B1: arB1Lessons, B2: arB2Lessons, C1: arC1Lessons, C2: arC2Lessons },
  hi: { A1: hiA1Lessons, A2: hiA2Lessons, B1: hiB1Lessons, B2: hiB2Lessons, C1: hiC1Lessons, C2: hiC2Lessons },
  tr: { A1: trA1Lessons, A2: trA2Lessons, B1: trB1Lessons, B2: trB2Lessons, C1: trC1Lessons, C2: trC2Lessons },
  vi: { A1: viA1Lessons, A2: viA2Lessons, B1: viB1Lessons, B2: viB2Lessons, C1: viC1Lessons, C2: viC2Lessons },
  th: { A1: thA1Lessons, A2: thA2Lessons, B1: thB1Lessons, B2: thB2Lessons, C1: thC1Lessons, C2: thC2Lessons },
  nl: { A1: nlA1Lessons, A2: nlA2Lessons, B1: nlB1Lessons, B2: nlB2Lessons, C1: nlC1Lessons, C2: nlC2Lessons },
  pl: { A1: plA1Lessons, A2: plA2Lessons, B1: plB1Lessons, B2: plB2Lessons, C1: plC1Lessons, C2: plC2Lessons },
  en: { A1: enA1Lessons, A2: enA2Lessons, B1: enB1Lessons, B2: enB2Lessons, C1: enC1Lessons, C2: enC2Lessons },
  es: { A1: esA1Lessons, A2: esA2Lessons, B1: esB1Lessons, B2: esB2Lessons, C1: esC1Lessons, C2: esC2Lessons },
};
