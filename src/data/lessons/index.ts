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
import { getLevelBank } from './wordbanks/universal';

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

  // Helper to boost level with generated content from THAT language's own bank for THAT level
  const boost = (lessons: Lesson[], code: string, level: string, lang: string) => {
    const idx = Math.max(0, (LEVELS[code] || []).indexOf(level));
    return ensureMinLessons(wu(lessons, code, level), code, level, lang, nativeLang, getLevelBank(code, idx));
  };

  const HANDCRAFTED: Record<string, Record<string, Lesson[]>> = {
    jp: { N5: jpN5Lessons, N4: jpN4Lessons, N3: jpN3Lessons, N2: jpN2Lessons, N1: jpN1Lessons },
    fr: { A1: frA1Lessons, A2: frA2Lessons, B1: frB1Lessons, B2: frB2Lessons, C1: frC1Lessons, C2: frC2Lessons },
    zh: { HSK2: zhHSK2Lessons, HSK3: zhHSK3Lessons, HSK4: zhHSK4Lessons, HSK5: zhHSK5Lessons, HSK6: zhHSK6Lessons },
    pt: { A2: ptA2Lessons, B1: ptB1Lessons, B2: ptB2Lessons, C1: ptC1Lessons, C2: ptC2Lessons },
    ko: { TOPIK2: koTOPIK2Lessons, TOPIK3: koTOPIK3Lessons, TOPIK4: koTOPIK4Lessons, TOPIK5: koTOPIK5Lessons, TOPIK6: koTOPIK6Lessons },
    ru: { A1: ruA1Lessons, A2: ruA2Lessons, B1: ruB1Lessons, B2: ruB2Lessons, C1: ruC1Lessons, C2: ruC2Lessons },
    ar: { A1: arA1Lessons, A2: arA2Lessons, B1: arB1Lessons, B2: arB2Lessons, C1: arC1Lessons, C2: arC2Lessons },
    hi: { A1: hiA1Lessons, A2: hiA2Lessons, B1: hiB1Lessons, B2: hiB2Lessons, C1: hiC1Lessons, C2: hiC2Lessons },
    en: { A1: enA1Lessons, A2: enA2Lessons, B1: enB1Lessons, B2: enB2Lessons, C1: enC1Lessons, C2: enC2Lessons },
    es: { A2: esA2Lessons, B1: esB1Lessons, B2: esB2Lessons, C1: esC1Lessons, C2: esC2Lessons },
    ro: { A1: roA1Lessons },
  };
  // First levels that already have a full handcrafted wordbank course
  const FIRST_LEVEL: Record<string, Lesson[]> = { es: esGenA1, ko: koGenA1, zh: zhGenA1, pt: ptGenA1 };

  const data: Record<string, Record<string, Lesson[]>> = {};
  LANGUAGES.forEach(cfg => {
    const code = cfg.code;
    data[code] = {};
    cfg.levels.forEach((level, i) => {
      if (i === 0 && FIRST_LEVEL[code]) {
        const base = FIRST_LEVEL[code];
        data[code][level] = base.length >= 120 ? base : boost(base, code, level, cfg.nativeName);
      } else {
        data[code][level] = boost(HANDCRAFTED[code]?.[level] || [], code, level, cfg.nativeName);
      }
    });
  });

  lessonCache.set(nativeLang, data);
  return data;
}

// Backward compatibility - static export using English as default
export const LESSON_DATA = getLessonData('en');
