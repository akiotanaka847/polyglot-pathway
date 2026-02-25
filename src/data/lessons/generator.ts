import { Lesson, LessonStep } from '../types';

// Unit template definitions
export interface UnitDef {
  id: string;
  name: string;
  emoji: string;
}

// Wordbank entry
export interface WordEntry {
  w: string;    // word in target language
  rd: string;   // romanization/reading
  mn: string;   // meaning in Spanish
  ex?: string;  // example sentence
  exM?: string; // example meaning
}

// Grammar entry for generator
export interface GrammarEntry {
  pattern: string;
  rd: string;
  mn: string;
  note: string;
  ex: string;
  exM: string;
}

export interface LevelWordbank {
  greetings: WordEntry[];
  numbers: WordEntry[];
  family: WordEntry[];
  colors: WordEntry[];
  days: WordEntry[];
  food: WordEntry[];
  body: WordEntry[];
  clothes: WordEntry[];
  house: WordEntry[];
  transport: WordEntry[];
  weather: WordEntry[];
  jobs: WordEntry[];
  shopping: WordEntry[];
  verbs: WordEntry[];
  adjectives: WordEntry[];
  questions: WordEntry[];
  survival: WordEntry[];
  animals: WordEntry[];
  grammar?: GrammarEntry[];
}

// 18 unit templates for A1-style levels
const A1_UNITS: UnitDef[] = [
  { id: 'u01', name: 'Los Cimientos', emoji: '🧱' },
  { id: 'u02', name: 'Saludos y Cortesía', emoji: '👋' },
  { id: 'u03', name: 'Números y Tiempo', emoji: '🔢' },
  { id: 'u04', name: 'Presentarse', emoji: '🙋' },
  { id: 'u05', name: 'Colores y Adjetivos', emoji: '🎨' },
  { id: 'u06', name: 'Días y Meses', emoji: '📅' },
  { id: 'u07', name: 'Comida y Bebida', emoji: '🍽️' },
  { id: 'u08', name: 'El Cuerpo', emoji: '🦴' },
  { id: 'u09', name: 'Ropa y Moda', emoji: '👕' },
  { id: 'u10', name: 'La Casa', emoji: '🏠' },
  { id: 'u11', name: 'Transporte', emoji: '🚌' },
  { id: 'u12', name: 'Clima y Naturaleza', emoji: '🌤️' },
  { id: 'u13', name: 'Profesiones', emoji: '👨‍⚕️' },
  { id: 'u14', name: 'Compras y Dinero', emoji: '💰' },
  { id: 'u15', name: 'Verbos Esenciales', emoji: '🏃' },
  { id: 'u16', name: 'Gramática Básica', emoji: '📖' },
  { id: 'u17', name: 'Supervivencia', emoji: '🆘' },
  { id: 'u18', name: 'Animales y Repaso', emoji: '🐾' },
];

function pickDistractors(correct: string, pool: WordEntry[], count: number): string[] {
  const others = pool.filter(w => w.w !== correct).map(w => w.w);
  const shuffled = others.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function makeTheoryStep(entry: WordEntry, lang: string): LessonStep {
  return { t: 'th', char: entry.w, rd: entry.rd, mn: entry.mn, note: `${entry.mn} en ${lang}.` };
}

function makeMCStep(entry: WordEntry, pool: WordEntry[], lang: string): LessonStep {
  const distractors = pickDistractors(entry.w, pool, 3);
  const opts = [entry.w, ...distractors].sort(() => Math.random() - 0.5);
  const ans = opts.indexOf(entry.w);
  return { t: 'mc', q: `¿"${entry.mn}" en ${lang}?`, opts, ans };
}

function makeTextStep(entry: WordEntry, lang: string): LessonStep {
  const clean = entry.rd.toLowerCase().replace(/[^a-záéíóúüñ\s]/g, '').trim();
  return { t: 'tx', q: `Escribe "${entry.mn}" en ${lang}:`, ans: clean, hint: entry.rd };
}

function makeMCMeaningStep(entry: WordEntry, pool: WordEntry[]): LessonStep {
  const distractors = pool.filter(w => w.mn !== entry.mn).map(w => w.mn).sort(() => Math.random() - 0.5).slice(0, 3);
  const opts = [entry.mn, ...distractors].sort(() => Math.random() - 0.5);
  return { t: 'mc', q: `¿Qué significa "${entry.w}"?`, opts, ans: opts.indexOf(entry.mn) };
}

// Generate lessons for a category
function generateCategoryLessons(
  code: string, level: string, lang: string,
  category: WordEntry[], unitDef: UnitDef,
  lessonType: 'vocab' | 'grammar',
  startNum: number, lessonsCount: number
): Lesson[] {
  const lessons: Lesson[] = [];
  const wordsPerLesson = Math.max(2, Math.ceil(category.length / lessonsCount));

  for (let i = 0; i < lessonsCount && i * wordsPerLesson < category.length; i++) {
    const batch = category.slice(i * wordsPerLesson, (i + 1) * wordsPerLesson);
    if (batch.length === 0) break;

    const steps: LessonStep[] = [];
    // Theory steps for each word
    batch.forEach(entry => steps.push(makeTheoryStep(entry, lang)));
    // MC steps
    batch.forEach(entry => steps.push(makeMCStep(entry, category, lang)));
    // Text input for first word
    if (batch[0]) steps.push(makeTextStep(batch[0], lang));
    // Meaning check for second word if available
    if (batch.length > 1) steps.push(makeMCMeaningStep(batch[1], category));

    const num = startNum + i;
    lessons.push({
      id: `${code}-${level.toLowerCase()}-${num}`,
      title: `${unitDef.name} ${i + 1} — ${lang}`,
      type: lessonType,
      steps,
      unit: unitDef,
    });
  }
  return lessons;
}

// Generate a review lesson for a unit
function generateReviewLesson(
  code: string, level: string, lang: string,
  allWords: WordEntry[], unitDef: UnitDef, num: number
): Lesson {
  const steps: LessonStep[] = [];
  const sample = allWords.sort(() => Math.random() - 0.5).slice(0, 6);
  sample.forEach(entry => steps.push(makeMCStep(entry, allWords, lang)));
  if (sample[0]) steps.push(makeTextStep(sample[0], lang));
  return {
    id: `${code}-${level.toLowerCase()}-${num}`,
    title: `Repaso: ${unitDef.name} — ${lang}`,
    type: 'reading',
    steps,
    unit: unitDef,
  };
}

// Main generator: produces ~100 lessons from a wordbank
export function generateLessons(
  code: string, level: string, lang: string,
  bank: LevelWordbank
): Lesson[] {
  const lessons: Lesson[] = [];
  let num = 1;

  const categories: { key: keyof LevelWordbank; unitIdx: number; count: number; type: 'vocab' | 'grammar' }[] = [
    { key: 'greetings', unitIdx: 1, count: 6, type: 'vocab' },
    { key: 'numbers', unitIdx: 2, count: 6, type: 'vocab' },
    { key: 'family', unitIdx: 3, count: 6, type: 'vocab' },
    { key: 'colors', unitIdx: 4, count: 5, type: 'vocab' },
    { key: 'adjectives', unitIdx: 4, count: 5, type: 'vocab' },
    { key: 'days', unitIdx: 5, count: 5, type: 'vocab' },
    { key: 'food', unitIdx: 6, count: 7, type: 'vocab' },
    { key: 'body', unitIdx: 7, count: 5, type: 'vocab' },
    { key: 'clothes', unitIdx: 8, count: 5, type: 'vocab' },
    { key: 'house', unitIdx: 9, count: 6, type: 'vocab' },
    { key: 'transport', unitIdx: 10, count: 5, type: 'vocab' },
    { key: 'weather', unitIdx: 11, count: 5, type: 'vocab' },
    { key: 'jobs', unitIdx: 12, count: 5, type: 'vocab' },
    { key: 'shopping', unitIdx: 13, count: 5, type: 'vocab' },
    { key: 'verbs', unitIdx: 14, count: 7, type: 'grammar' },
    { key: 'questions', unitIdx: 15, count: 5, type: 'grammar' },
    { key: 'survival', unitIdx: 16, count: 5, type: 'vocab' },
    { key: 'animals', unitIdx: 17, count: 5, type: 'vocab' },
  ];

  categories.forEach(cat => {
    const words = bank[cat.key] as WordEntry[] | GrammarEntry[] | undefined;
    if (!words || !Array.isArray(words)) return;
    const unit = A1_UNITS[cat.unitIdx];
    const catLessons = generateCategoryLessons(
      code, level, lang,
      words as WordEntry[], unit, cat.type,
      num, cat.count
    );
    lessons.push(...catLessons);
    num += catLessons.length;
    // Add review lesson after each unit
    lessons.push(generateReviewLesson(code, level, lang, words as WordEntry[], unit, num));
    num++;
  });

  return lessons;
}

// Generate intermediate/advanced lessons with units from existing data
export function addUnitsToExisting(lessons: Lesson[], code: string, level: string): Lesson[] {
  // Group into units of ~6 lessons
  const unitSize = 6;
  const unitNames = [
    { id: 'u01', name: 'Fundamentos', emoji: '🧱' },
    { id: 'u02', name: 'Gramática', emoji: '📖' },
    { id: 'u03', name: 'Vocabulario I', emoji: '📝' },
    { id: 'u04', name: 'Vocabulario II', emoji: '📚' },
    { id: 'u05', name: 'Práctica', emoji: '🎯' },
    { id: 'u06', name: 'Cultura', emoji: '🌍' },
    { id: 'u07', name: 'Profesional', emoji: '💼' },
    { id: 'u08', name: 'Avanzado', emoji: '🚀' },
    { id: 'u09', name: 'Expresiones', emoji: '💬' },
    { id: 'u10', name: 'Repaso Final', emoji: '🏆' },
  ];

  return lessons.map((lesson, i) => {
    const unitIdx = Math.min(Math.floor(i / unitSize), unitNames.length - 1);
    return {
      ...lesson,
      unit: lesson.unit || unitNames[unitIdx],
    };
  });
}
