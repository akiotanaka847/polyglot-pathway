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
import { generateLessons, addUnitsToExisting } from './generator';
import { esA1Bank } from './wordbanks/es';
import { deA1Bank } from './wordbanks/de';
import { koA1Bank } from './wordbanks/ko';
import { zhA1Bank } from './wordbanks/zh';
import { itA1Bank } from './wordbanks/it';
import { ptA1Bank } from './wordbanks/pt';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

// Generate expanded lessons from wordbanks
const esGenA1 = generateLessons('es', 'A1', 'Español', esA1Bank);
const deGenA1 = generateLessons('de', 'A1', 'Alemán', deA1Bank);
const koGenA1 = generateLessons('ko', 'TOPIK1', 'Coreano', koA1Bank);
const zhGenA1 = generateLessons('zh', 'HSK1', 'Chino', zhA1Bank);
const itGenA1 = generateLessons('it', 'A1', 'Italiano', itA1Bank);
const ptGenA1 = generateLessons('pt', 'A1', 'Portugués', ptA1Bank);

// Add units to existing lessons
const withUnits = (lessons: Lesson[], code: string, level: string) => addUnitsToExisting(lessons, code, level);

export const LESSON_DATA: Record<string, Record<string, Lesson[]>> = {
  jp: { N5: withUnits(jpN5Lessons, 'jp', 'N5'), N4: withUnits(jpN4Lessons, 'jp', 'N4'), N3: withUnits(jpN3Lessons, 'jp', 'N3'), N2: withUnits(jpN2Lessons, 'jp', 'N2'), N1: withUnits(jpN1Lessons, 'jp', 'N1') },
  fr: { A1: withUnits(frA1Lessons, 'fr', 'A1'), A2: withUnits(frA2Lessons, 'fr', 'A2'), B1: withUnits(frB1Lessons, 'fr', 'B1'), B2: withUnits(frB2Lessons, 'fr', 'B2'), C1: withUnits(frC1Lessons, 'fr', 'C1'), C2: withUnits(frC2Lessons, 'fr', 'C2') },
  zh: { HSK1: zhGenA1, HSK2: withUnits(zhHSK2Lessons, 'zh', 'HSK2'), HSK3: withUnits(zhHSK3Lessons, 'zh', 'HSK3'), HSK4: withUnits(zhHSK4Lessons, 'zh', 'HSK4'), HSK5: withUnits(zhHSK5Lessons, 'zh', 'HSK5'), HSK6: withUnits(zhHSK6Lessons, 'zh', 'HSK6') },
  de: { A1: deGenA1, A2: withUnits(deA2Lessons, 'de', 'A2'), B1: withUnits(deB1Lessons, 'de', 'B1'), B2: withUnits(deB2Lessons, 'de', 'B2'), C1: withUnits(deC1Lessons, 'de', 'C1'), C2: withUnits(deC2Lessons, 'de', 'C2') },
  it: { A1: itGenA1, A2: withUnits(itA2Lessons, 'it', 'A2'), B1: withUnits(itB1Lessons, 'it', 'B1'), B2: withUnits(itB2Lessons, 'it', 'B2'), C1: withUnits(itC1Lessons, 'it', 'C1'), C2: withUnits(itC2Lessons, 'it', 'C2') },
  pt: { A1: ptGenA1, A2: withUnits(ptA2Lessons, 'pt', 'A2'), B1: withUnits(ptB1Lessons, 'pt', 'B1'), B2: withUnits(ptB2Lessons, 'pt', 'B2'), C1: withUnits(ptC1Lessons, 'pt', 'C1'), C2: withUnits(ptC2Lessons, 'pt', 'C2') },
  ko: { TOPIK1: koGenA1, TOPIK2: withUnits(koTOPIK2Lessons, 'ko', 'TOPIK2'), TOPIK3: withUnits(koTOPIK3Lessons, 'ko', 'TOPIK3'), TOPIK4: withUnits(koTOPIK4Lessons, 'ko', 'TOPIK4'), TOPIK5: withUnits(koTOPIK5Lessons, 'ko', 'TOPIK5'), TOPIK6: withUnits(koTOPIK6Lessons, 'ko', 'TOPIK6') },
  ru: { A1: withUnits(ruA1Lessons, 'ru', 'A1'), A2: withUnits(ruA2Lessons, 'ru', 'A2'), B1: withUnits(ruB1Lessons, 'ru', 'B1'), B2: withUnits(ruB2Lessons, 'ru', 'B2'), C1: withUnits(ruC1Lessons, 'ru', 'C1'), C2: withUnits(ruC2Lessons, 'ru', 'C2') },
  ar: { A1: withUnits(arA1Lessons, 'ar', 'A1'), A2: withUnits(arA2Lessons, 'ar', 'A2'), B1: withUnits(arB1Lessons, 'ar', 'B1'), B2: withUnits(arB2Lessons, 'ar', 'B2'), C1: withUnits(arC1Lessons, 'ar', 'C1'), C2: withUnits(arC2Lessons, 'ar', 'C2') },
  hi: { A1: withUnits(hiA1Lessons, 'hi', 'A1'), A2: withUnits(hiA2Lessons, 'hi', 'A2'), B1: withUnits(hiB1Lessons, 'hi', 'B1'), B2: withUnits(hiB2Lessons, 'hi', 'B2'), C1: withUnits(hiC1Lessons, 'hi', 'C1'), C2: withUnits(hiC2Lessons, 'hi', 'C2') },
  tr: { A1: withUnits(trA1Lessons, 'tr', 'A1'), A2: withUnits(trA2Lessons, 'tr', 'A2'), B1: withUnits(trB1Lessons, 'tr', 'B1'), B2: withUnits(trB2Lessons, 'tr', 'B2'), C1: withUnits(trC1Lessons, 'tr', 'C1'), C2: withUnits(trC2Lessons, 'tr', 'C2') },
  vi: { A1: withUnits(viA1Lessons, 'vi', 'A1'), A2: withUnits(viA2Lessons, 'vi', 'A2'), B1: withUnits(viB1Lessons, 'vi', 'B1'), B2: withUnits(viB2Lessons, 'vi', 'B2'), C1: withUnits(viC1Lessons, 'vi', 'C1'), C2: withUnits(viC2Lessons, 'vi', 'C2') },
  th: { A1: withUnits(thA1Lessons, 'th', 'A1'), A2: withUnits(thA2Lessons, 'th', 'A2'), B1: withUnits(thB1Lessons, 'th', 'B1'), B2: withUnits(thB2Lessons, 'th', 'B2'), C1: withUnits(thC1Lessons, 'th', 'C1'), C2: withUnits(thC2Lessons, 'th', 'C2') },
  nl: { A1: withUnits(nlA1Lessons, 'nl', 'A1'), A2: withUnits(nlA2Lessons, 'nl', 'A2'), B1: withUnits(nlB1Lessons, 'nl', 'B1'), B2: withUnits(nlB2Lessons, 'nl', 'B2'), C1: withUnits(nlC1Lessons, 'nl', 'C1'), C2: withUnits(nlC2Lessons, 'nl', 'C2') },
  pl: { A1: withUnits(plA1Lessons, 'pl', 'A1'), A2: withUnits(plA2Lessons, 'pl', 'A2'), B1: withUnits(plB1Lessons, 'pl', 'B1'), B2: withUnits(plB2Lessons, 'pl', 'B2'), C1: withUnits(plC1Lessons, 'pl', 'C1'), C2: withUnits(plC2Lessons, 'pl', 'C2') },
  en: { A1: withUnits(enA1Lessons, 'en', 'A1'), A2: withUnits(enA2Lessons, 'en', 'A2'), B1: withUnits(enB1Lessons, 'en', 'B1'), B2: withUnits(enB2Lessons, 'en', 'B2'), C1: withUnits(enC1Lessons, 'en', 'C1'), C2: withUnits(enC2Lessons, 'en', 'C2') },
  es: { A1: esGenA1, A2: withUnits(esA2Lessons, 'es', 'A2'), B1: withUnits(esB1Lessons, 'es', 'B1'), B2: withUnits(esB2Lessons, 'es', 'B2'), C1: withUnits(esC1Lessons, 'es', 'C1'), C2: withUnits(esC2Lessons, 'es', 'C2') },
};
