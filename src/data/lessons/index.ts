import { Lesson } from '../types';
import { LANGUAGES } from '../languages';
import { jpN5Lessons, jpN4Lessons } from './jp';
import { frA1Lessons, frA2Lessons } from './fr';
import { zhHSK1Lessons } from './zh';
import { enA1Lessons } from './en';
import { ptA1Lessons, koTOPIK1Lessons, ruA1Lessons, arA1Lessons, hiA1Lessons, esA1Lessons } from './remaining';
import {
  jpN3Lessons, frB1Lessons, zhHSK2Lessons, enA2Lessons,
  ptA2Lessons, koTOPIK2Lessons, ruA2Lessons, arA2Lessons,
  hiA2Lessons, esA2Lessons,
} from './level2';
import {
  jpN2Lessons, frB2Lessons, zhHSK3Lessons, enB1Lessons,
  ptB1Lessons, koTOPIK3Lessons, ruB1Lessons, arB1Lessons,
  hiB1Lessons, esB1Lessons,
} from './level3';
import {
  jpN1Lessons, frC1Lessons, zhHSK4Lessons, zhHSK5Lessons, enB2Lessons,
  ptB2Lessons, koTOPIK4Lessons, koTOPIK5Lessons, ruB2Lessons, arB2Lessons,
  hiB2Lessons, esB2Lessons,
} from './level4';
import {
  frC2Lessons, enC1Lessons, enC2Lessons,
  ptC1Lessons, ptC2Lessons,
  koTOPIK6Lessons, zhHSK6Lessons,
  ruC1Lessons, ruC2Lessons, arC1Lessons, arC2Lessons,
  hiC1Lessons, hiC2Lessons,
  esC1Lessons, esC2Lessons,
} from './level5';
import { generateLessons, addUnitsToExisting } from './generator';
import { esA1Bank } from './wordbanks/es';
import { koA1Bank } from './wordbanks/ko';
import { zhA1Bank } from './wordbanks/zh';
import { ptA1Bank } from './wordbanks/pt';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

// Cache for lazy-generated lesson data per native language
const lessonCache = new Map<string, Record<string, Record<string, Lesson[]>>>();

export function getLessonData(nativeLang: string): Record<string, Record<string, Lesson[]>> {
  if (lessonCache.has(nativeLang)) return lessonCache.get(nativeLang)!;

  const wu = (lessons: Lesson[], code: string, level: string) => addUnitsToExisting(lessons, code, level, nativeLang);

  // Generate expanded lessons from wordbanks with i18n
  const esGenA1 = generateLessons('es', 'A1', 'Español', esA1Bank, nativeLang);
  const koGenA1 = generateLessons('ko', 'TOPIK1', 'Korean', koA1Bank, nativeLang);
  const zhGenA1 = generateLessons('zh', 'HSK1', 'Chinese', zhA1Bank, nativeLang);
  const ptGenA1 = generateLessons('pt', 'A1', 'Português', ptA1Bank, nativeLang);

  const data: Record<string, Record<string, Lesson[]>> = {
    jp: { N5: wu(jpN5Lessons, 'jp', 'N5'), N4: wu(jpN4Lessons, 'jp', 'N4'), N3: wu(jpN3Lessons, 'jp', 'N3'), N2: wu(jpN2Lessons, 'jp', 'N2'), N1: wu(jpN1Lessons, 'jp', 'N1') },
    fr: { A1: wu(frA1Lessons, 'fr', 'A1'), A2: wu(frA2Lessons, 'fr', 'A2'), B1: wu(frB1Lessons, 'fr', 'B1'), B2: wu(frB2Lessons, 'fr', 'B2'), C1: wu(frC1Lessons, 'fr', 'C1'), C2: wu(frC2Lessons, 'fr', 'C2') },
    zh: { HSK1: zhGenA1, HSK2: wu(zhHSK2Lessons, 'zh', 'HSK2'), HSK3: wu(zhHSK3Lessons, 'zh', 'HSK3'), HSK4: wu(zhHSK4Lessons, 'zh', 'HSK4'), HSK5: wu(zhHSK5Lessons, 'zh', 'HSK5'), HSK6: wu(zhHSK6Lessons, 'zh', 'HSK6') },
    pt: { A1: ptGenA1, A2: wu(ptA2Lessons, 'pt', 'A2'), B1: wu(ptB1Lessons, 'pt', 'B1'), B2: wu(ptB2Lessons, 'pt', 'B2'), C1: wu(ptC1Lessons, 'pt', 'C1'), C2: wu(ptC2Lessons, 'pt', 'C2') },
    ko: { TOPIK1: koGenA1, TOPIK2: wu(koTOPIK2Lessons, 'ko', 'TOPIK2'), TOPIK3: wu(koTOPIK3Lessons, 'ko', 'TOPIK3'), TOPIK4: wu(koTOPIK4Lessons, 'ko', 'TOPIK4'), TOPIK5: wu(koTOPIK5Lessons, 'ko', 'TOPIK5'), TOPIK6: wu(koTOPIK6Lessons, 'ko', 'TOPIK6') },
    ru: { A1: wu(ruA1Lessons, 'ru', 'A1'), A2: wu(ruA2Lessons, 'ru', 'A2'), B1: wu(ruB1Lessons, 'ru', 'B1'), B2: wu(ruB2Lessons, 'ru', 'B2'), C1: wu(ruC1Lessons, 'ru', 'C1'), C2: wu(ruC2Lessons, 'ru', 'C2') },
    ar: { A1: wu(arA1Lessons, 'ar', 'A1'), A2: wu(arA2Lessons, 'ar', 'A2'), B1: wu(arB1Lessons, 'ar', 'B1'), B2: wu(arB2Lessons, 'ar', 'B2'), C1: wu(arC1Lessons, 'ar', 'C1'), C2: wu(arC2Lessons, 'ar', 'C2') },
    hi: { A1: wu(hiA1Lessons, 'hi', 'A1'), A2: wu(hiA2Lessons, 'hi', 'A2'), B1: wu(hiB1Lessons, 'hi', 'B1'), B2: wu(hiB2Lessons, 'hi', 'B2'), C1: wu(hiC1Lessons, 'hi', 'C1'), C2: wu(hiC2Lessons, 'hi', 'C2') },
    en: { A1: wu(enA1Lessons, 'en', 'A1'), A2: wu(enA2Lessons, 'en', 'A2'), B1: wu(enB1Lessons, 'en', 'B1'), B2: wu(enB2Lessons, 'en', 'B2'), C1: wu(enC1Lessons, 'en', 'C1'), C2: wu(enC2Lessons, 'en', 'C2') },
    es: { A1: esGenA1, A2: wu(esA2Lessons, 'es', 'A2'), B1: wu(esB1Lessons, 'es', 'B1'), B2: wu(esB2Lessons, 'es', 'B2'), C1: wu(esC1Lessons, 'es', 'C1'), C2: wu(esC2Lessons, 'es', 'C2') },
  };

  lessonCache.set(nativeLang, data);
  return data;
}

// Backward compatibility - static export using English as default
export const LESSON_DATA = getLessonData('en');
