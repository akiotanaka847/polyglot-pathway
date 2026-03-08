import { Lesson } from '../types';
import { LANGUAGES } from '../languages';
import { jpN5Lessons, jpN4Lessons } from './jp';
import { frA1Lessons, frA2Lessons } from './fr';
import { zhHSK1Lessons } from './zh';
import { enA1Lessons } from './en';
import { ptA1Lessons, koTOPIK1Lessons, ruA1Lessons, arA1Lessons, hiA1Lessons, esA1Lessons, roA1Lessons } from './remaining';
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
import { getHigherLevelBank } from './wordbanks/universal';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

// Cache for lazy-generated lesson data per native language
const lessonCache = new Map<string, Record<string, Record<string, Lesson[]>>>();

// Merge handcrafted lessons with generated ones to always hit 120+
function ensureMinLessons(
  handcrafted: Lesson[], code: string, level: string, lang: string, nativeLang: string, bank: any
): Lesson[] {
  const MIN = 120;
  if (handcrafted.length >= MIN) return handcrafted;
  
  // Generate extra lessons to fill the gap
  if (bank) {
    const generated = generateLessons(code, level, lang, bank, nativeLang);
    // Merge: handcrafted first, then generated (avoid duplicate IDs)
    const existingIds = new Set(handcrafted.map(l => l.id));
    const extra = generated.filter(l => !existingIds.has(l.id));
    const merged = [...handcrafted, ...extra];
    return merged;
  }
  return handcrafted;
}

export function getLessonData(nativeLang: string): Record<string, Record<string, Lesson[]>> {
  if (lessonCache.has(nativeLang)) return lessonCache.get(nativeLang)!;

  const wu = (lessons: Lesson[], code: string, level: string) => addUnitsToExisting(lessons, code, level, nativeLang);

  // Generate expanded lessons from wordbanks with i18n
  const esGenA1 = generateLessons('es', 'A1', 'Español', esA1Bank, nativeLang);
  const koGenA1 = generateLessons('ko', 'TOPIK1', 'Korean', koA1Bank, nativeLang);
  const zhGenA1 = generateLessons('zh', 'HSK1', 'Chinese', zhA1Bank, nativeLang);
  const ptGenA1 = generateLessons('pt', 'A1', 'Português', ptA1Bank, nativeLang);

  // Get A2+ wordbanks for jp and fr
  const jpA2Bank = getHigherLevelBank('jp');
  const frA2Bank = getHigherLevelBank('fr');

  // Helper to boost level with generated content
  const boost = (lessons: Lesson[], code: string, level: string, lang: string, bank: any) =>
    ensureMinLessons(wu(lessons, code, level), code, level, lang, nativeLang, bank);

  const data: Record<string, Record<string, Lesson[]>> = {
    jp: {
      N5: boost(jpN5Lessons, 'jp', 'N5', 'Japanese', jpA2Bank),
      N4: boost(jpN4Lessons, 'jp', 'N4', 'Japanese', jpA2Bank),
      N3: boost(jpN3Lessons, 'jp', 'N3', 'Japanese', jpA2Bank),
      N2: boost(jpN2Lessons, 'jp', 'N2', 'Japanese', jpA2Bank),
      N1: boost(jpN1Lessons, 'jp', 'N1', 'Japanese', jpA2Bank),
    },
    fr: {
      A1: boost(frA1Lessons, 'fr', 'A1', 'Français', frA2Bank),
      A2: boost(frA2Lessons, 'fr', 'A2', 'Français', frA2Bank),
      B1: boost(frB1Lessons, 'fr', 'B1', 'Français', frA2Bank),
      B2: boost(frB2Lessons, 'fr', 'B2', 'Français', frA2Bank),
      C1: boost(frC1Lessons, 'fr', 'C1', 'Français', frA2Bank),
      C2: boost(frC2Lessons, 'fr', 'C2', 'Français', frA2Bank),
    },
    zh: {
      HSK1: zhGenA1.length >= 120 ? zhGenA1 : ensureMinLessons(zhGenA1, 'zh', 'HSK1', 'Chinese', nativeLang, zhA1Bank),
      HSK2: boost(zhHSK2Lessons, 'zh', 'HSK2', 'Chinese', zhA1Bank),
      HSK3: boost(zhHSK3Lessons, 'zh', 'HSK3', 'Chinese', zhA1Bank),
      HSK4: boost(zhHSK4Lessons, 'zh', 'HSK4', 'Chinese', zhA1Bank),
      HSK5: boost(zhHSK5Lessons, 'zh', 'HSK5', 'Chinese', zhA1Bank),
      HSK6: boost(zhHSK6Lessons, 'zh', 'HSK6', 'Chinese', zhA1Bank),
    },
    pt: {
      A1: ptGenA1.length >= 120 ? ptGenA1 : ensureMinLessons(ptGenA1, 'pt', 'A1', 'Português', nativeLang, ptA1Bank),
      A2: boost(ptA2Lessons, 'pt', 'A2', 'Português', ptA1Bank),
      B1: boost(ptB1Lessons, 'pt', 'B1', 'Português', ptA1Bank),
      B2: boost(ptB2Lessons, 'pt', 'B2', 'Português', ptA1Bank),
      C1: boost(ptC1Lessons, 'pt', 'C1', 'Português', ptA1Bank),
      C2: boost(ptC2Lessons, 'pt', 'C2', 'Português', ptA1Bank),
    },
    ko: {
      TOPIK1: koGenA1.length >= 120 ? koGenA1 : ensureMinLessons(koGenA1, 'ko', 'TOPIK1', 'Korean', nativeLang, koA1Bank),
      TOPIK2: boost(koTOPIK2Lessons, 'ko', 'TOPIK2', 'Korean', koA1Bank),
      TOPIK3: boost(koTOPIK3Lessons, 'ko', 'TOPIK3', 'Korean', koA1Bank),
      TOPIK4: boost(koTOPIK4Lessons, 'ko', 'TOPIK4', 'Korean', koA1Bank),
      TOPIK5: boost(koTOPIK5Lessons, 'ko', 'TOPIK5', 'Korean', koA1Bank),
      TOPIK6: boost(koTOPIK6Lessons, 'ko', 'TOPIK6', 'Korean', koA1Bank),
    },
    ru: {
      A1: boost(ruA1Lessons, 'ru', 'A1', 'Russian', esA1Bank),
      A2: boost(ruA2Lessons, 'ru', 'A2', 'Russian', esA1Bank),
      B1: boost(ruB1Lessons, 'ru', 'B1', 'Russian', esA1Bank),
      B2: boost(ruB2Lessons, 'ru', 'B2', 'Russian', esA1Bank),
      C1: boost(ruC1Lessons, 'ru', 'C1', 'Russian', esA1Bank),
      C2: boost(ruC2Lessons, 'ru', 'C2', 'Russian', esA1Bank),
    },
    ar: {
      A1: boost(arA1Lessons, 'ar', 'A1', 'Arabic', esA1Bank),
      A2: boost(arA2Lessons, 'ar', 'A2', 'Arabic', esA1Bank),
      B1: boost(arB1Lessons, 'ar', 'B1', 'Arabic', esA1Bank),
      B2: boost(arB2Lessons, 'ar', 'B2', 'Arabic', esA1Bank),
      C1: boost(arC1Lessons, 'ar', 'C1', 'Arabic', esA1Bank),
      C2: boost(arC2Lessons, 'ar', 'C2', 'Arabic', esA1Bank),
    },
    hi: {
      A1: boost(hiA1Lessons, 'hi', 'A1', 'Hindi', esA1Bank),
      A2: boost(hiA2Lessons, 'hi', 'A2', 'Hindi', esA1Bank),
      B1: boost(hiB1Lessons, 'hi', 'B1', 'Hindi', esA1Bank),
      B2: boost(hiB2Lessons, 'hi', 'B2', 'Hindi', esA1Bank),
      C1: boost(hiC1Lessons, 'hi', 'C1', 'Hindi', esA1Bank),
      C2: boost(hiC2Lessons, 'hi', 'C2', 'Hindi', esA1Bank),
    },
    en: {
      A1: boost(enA1Lessons, 'en', 'A1', 'English', esA1Bank),
      A2: boost(enA2Lessons, 'en', 'A2', 'English', esA1Bank),
      B1: boost(enB1Lessons, 'en', 'B1', 'English', esA1Bank),
      B2: boost(enB2Lessons, 'en', 'B2', 'English', esA1Bank),
      C1: boost(enC1Lessons, 'en', 'C1', 'English', esA1Bank),
      C2: boost(enC2Lessons, 'en', 'C2', 'English', esA1Bank),
    },
    es: {
      A1: esGenA1.length >= 120 ? esGenA1 : ensureMinLessons(esGenA1, 'es', 'A1', 'Español', nativeLang, esA1Bank),
      A2: boost(esA2Lessons, 'es', 'A2', 'Español', esA1Bank),
      B1: boost(esB1Lessons, 'es', 'B1', 'Español', esA1Bank),
      B2: boost(esB2Lessons, 'es', 'B2', 'Español', esA1Bank),
      C1: boost(esC1Lessons, 'es', 'C1', 'Español', esA1Bank),
      C2: boost(esC2Lessons, 'es', 'C2', 'Español', esA1Bank),
    },
    ro: {
      A1: boost(roA1Lessons, 'ro', 'A1', 'Română', esA1Bank),
      A2: boost([], 'ro', 'A2', 'Română', esA1Bank),
      B1: boost([], 'ro', 'B1', 'Română', esA1Bank),
      B2: boost([], 'ro', 'B2', 'Română', esA1Bank),
      C1: boost([], 'ro', 'C1', 'Română', esA1Bank),
      C2: boost([], 'ro', 'C2', 'Română', esA1Bank),
    },
  };

  lessonCache.set(nativeLang, data);
  return data;
}

// Backward compatibility - static export using English as default
export const LESSON_DATA = getLessonData('en');
