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
  mn: string;   // meaning in English (universal key)
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

// ==================== I18N SYSTEM ====================

// Meaning translations: English -> native language
const MEANING_DICT: Record<string, Record<string, string>> = {
  es: {
    'Hello': 'Hola', 'Good morning': 'Buenos días', 'Good afternoon': 'Buenas tardes', 'Good evening': 'Buenas noches',
    'Thank you': 'Gracias', "You're welcome": 'De nada', 'Please': 'Por favor', "I'm sorry": 'Lo siento',
    'Excuse me': 'Perdón', 'Goodbye': 'Adiós', 'See you later': 'Hasta luego', 'Nice to meet you': 'Mucho gusto',
    'One': 'Uno', 'Two': 'Dos', 'Three': 'Tres', 'Four': 'Cuatro', 'Five': 'Cinco', 'Six': 'Seis',
    'Seven': 'Siete', 'Eight': 'Ocho', 'Nine': 'Nueve', 'Ten': 'Diez', 'Twenty': 'Veinte', 'One hundred': 'Cien',
    'Father': 'Padre', 'Mother': 'Madre', 'Brother': 'Hermano', 'Sister': 'Hermana', 'Son': 'Hijo', 'Daughter': 'Hija',
    'Grandfather': 'Abuelo', 'Grandmother': 'Abuela', 'Uncle': 'Tío', 'Aunt': 'Tía', 'Cousin': 'Primo', 'Husband': 'Esposo',
    'Red': 'Rojo', 'Blue': 'Azul', 'Green': 'Verde', 'Yellow': 'Amarillo', 'Black': 'Negro', 'White': 'Blanco',
    'Orange': 'Naranja', 'Pink': 'Rosa', 'Purple': 'Morado', 'Gray': 'Gris',
    'Monday': 'Lunes', 'Tuesday': 'Martes', 'Wednesday': 'Miércoles', 'Thursday': 'Jueves', 'Friday': 'Viernes',
    'Saturday': 'Sábado', 'Sunday': 'Domingo', 'January': 'Enero', 'Spring': 'Primavera', 'Summer': 'Verano',
    'Water': 'Agua', 'Bread': 'Pan', 'Milk': 'Leche', 'Coffee': 'Café', 'Rice': 'Arroz', 'Meat': 'Carne',
    'Chicken': 'Pollo', 'Fish': 'Pescado', 'Fruit': 'Fruta', 'Salad': 'Ensalada', 'Soup': 'Sopa', 'Dessert': 'Postre',
    'Beer': 'Cerveza', 'Wine': 'Vino',
    'Head': 'Cabeza', 'Hand': 'Mano', 'Foot': 'Pie', 'Eye': 'Ojo', 'Mouth': 'Boca', 'Nose': 'Nariz',
    'Ear': 'Oreja', 'Arm': 'Brazo', 'Leg': 'Pierna', 'Finger': 'Dedo',
    'Shirt': 'Camisa', 'Pants': 'Pantalón', 'Shoes': 'Zapatos', 'Dress': 'Vestido', 'Jacket': 'Chaqueta',
    'Hat': 'Sombrero', 'Skirt': 'Falda', 'Socks': 'Calcetines', 'Belt': 'Cinturón', 'Scarf': 'Bufanda',
    'House': 'Casa', 'Kitchen': 'Cocina', 'Bathroom': 'Baño', 'Bedroom': 'Dormitorio', 'Living room': 'Sala',
    'Garden': 'Jardín', 'Door': 'Puerta', 'Window': 'Ventana', 'Table': 'Mesa', 'Chair': 'Silla', 'Bed': 'Cama', 'Stairs': 'Escalera',
    'Bus': 'Autobús', 'Train': 'Tren', 'Airplane': 'Avión', 'Car': 'Coche', 'Bicycle': 'Bicicleta',
    'Subway': 'Metro', 'Taxi': 'Taxi', 'Boat': 'Barco', 'Station': 'Estación', 'Airport': 'Aeropuerto',
    'Sun': 'Sol', 'Rain': 'Lluvia', 'Snow': 'Nieve', 'Wind': 'Viento', 'Cloudy': 'Nublado',
    'Hot': 'Calor', 'Cold': 'Frío', 'Storm': 'Tormenta', 'Rainbow': 'Arcoíris', 'Fog': 'Niebla',
    'Teacher': 'Profesor', 'Doctor': 'Doctor', 'Engineer': 'Ingeniero', 'Lawyer': 'Abogado', 'Chef': 'Cocinero',
    'Police': 'Policía', 'Firefighter': 'Bombero', 'Nurse': 'Enfermero', 'Artist': 'Artista', 'Musician': 'Músico',
    'How much?': '¿Cuánto cuesta?', 'Expensive': 'Caro', 'Cheap': 'Barato', 'Store': 'Tienda', 'Market': 'Mercado',
    'Money': 'Dinero', 'Card': 'Tarjeta', 'Cash': 'Efectivo', 'Discount': 'Descuento', 'Receipt': 'Recibo',
    'To eat': 'Comer', 'To drink': 'Beber', 'To go': 'Ir', 'To be': 'Ser', 'To be (temp.)': 'Estar',
    'To have': 'Tener', 'To do/make': 'Hacer', 'Can/To be able': 'Poder', 'To want': 'Querer', 'To know': 'Saber',
    'To speak': 'Hablar', 'To live': 'Vivir', 'To work': 'Trabajar', 'To study': 'Estudiar',
    'Big': 'Grande', 'Small': 'Pequeño', 'Beautiful': 'Bonito', 'Ugly': 'Feo', 'New': 'Nuevo', 'Old': 'Viejo',
    'Good': 'Bueno', 'Bad': 'Malo', 'Fast': 'Rápido', 'Slow': 'Lento',
    'What?': '¿Qué?', 'Where?': '¿Dónde?', 'Who?': '¿Quién?', 'When?': '¿Cuándo?', 'How?': '¿Cómo?',
    'Why?': '¿Por qué?', 'How many?': '¿Cuánto?', 'Which?': '¿Cuál?', 'I': 'Yo', 'You': 'Tú',
    'Help!': '¡Ayuda!', "I don't understand": 'No entiendo', 'Do you speak English?': '¿Habla inglés?',
    'Where is the bathroom?': '¿Dónde está el baño?', 'I need a doctor': 'Necesito un doctor',
    "I'm lost": 'Estoy perdido', 'The check, please': 'La cuenta, por favor',
    'How much is this?': '¿Cuánto cuesta esto?', 'My name is...': 'Me llamo...', "I'm from...": 'Soy de...',
    'Dog': 'Perro', 'Cat': 'Gato', 'Bird': 'Pájaro', 'Horse': 'Caballo', 'Cow': 'Vaca',
    'Pig': 'Cerdo', 'Sheep': 'Oveja', 'Rabbit': 'Conejo', 'Turtle': 'Tortuga',
  },
  // For other languages, fall back to English if not found
};

function translateMeaning(mn: string, nativeLang: string): string {
  if (nativeLang === 'en') return mn;
  const dict = MEANING_DICT[nativeLang];
  if (dict && dict[mn]) return dict[mn];
  // Try lowercase match
  if (dict) {
    const key = Object.keys(dict).find(k => k.toLowerCase() === mn.toLowerCase());
    if (key) return dict[key];
  }
  return mn; // fallback to English
}

// Question template translations
interface LessonTemplates {
  whatIsInLang: string;   // "$1" in $2?
  writeInLang: string;    // Write "$1" in $2:
  whatMeans: string;       // What does "$1" mean?
  noteTemplate: string;    // $1 in $2.
  review: string;          // Review
  unitNames: string[];     // 18 unit name translations
}

const LESSON_I18N: Record<string, LessonTemplates> = {
  es: {
    whatIsInLang: '¿"$1" en $2?',
    writeInLang: 'Escribe "$1" en $2:',
    whatMeans: '¿Qué significa "$1"?',
    noteTemplate: '$1 en $2.',
    review: 'Repaso',
    unitNames: ['Los Cimientos','Saludos y Cortesía','Números y Tiempo','Presentarse','Colores y Adjetivos','Días y Meses','Comida y Bebida','El Cuerpo','Ropa y Moda','La Casa','Transporte','Clima y Naturaleza','Profesiones','Compras y Dinero','Verbos Esenciales','Gramática Básica','Supervivencia','Animales y Repaso'],
  },
  en: {
    whatIsInLang: '"$1" in $2?',
    writeInLang: 'Write "$1" in $2:',
    whatMeans: 'What does "$1" mean?',
    noteTemplate: '$1 in $2.',
    review: 'Review',
    unitNames: ['Foundations','Greetings & Courtesy','Numbers & Time','Introductions','Colors & Adjectives','Days & Months','Food & Drink','The Body','Clothing & Fashion','The Home','Transport','Weather & Nature','Professions','Shopping & Money','Essential Verbs','Basic Grammar','Survival','Animals & Review'],
  },
  pt: {
    whatIsInLang: '"$1" em $2?',
    writeInLang: 'Escreva "$1" em $2:',
    whatMeans: 'O que significa "$1"?',
    noteTemplate: '$1 em $2.',
    review: 'Revisão',
    unitNames: ['Fundamentos','Saudações e Cortesia','Números e Tempo','Apresentar-se','Cores e Adjetivos','Dias e Meses','Comida e Bebida','O Corpo','Roupas e Moda','A Casa','Transporte','Clima e Natureza','Profissões','Compras e Dinheiro','Verbos Essenciais','Gramática Básica','Sobrevivência','Animais e Revisão'],
  },
  fr: {
    whatIsInLang: '"$1" en $2 ?',
    writeInLang: 'Écrivez "$1" en $2 :',
    whatMeans: 'Que signifie "$1" ?',
    noteTemplate: '$1 en $2.',
    review: 'Révision',
    unitNames: ['Les Fondations','Salutations et Politesse','Nombres et Temps','Se Présenter','Couleurs et Adjectifs','Jours et Mois','Nourriture et Boisson','Le Corps','Vêtements et Mode','La Maison','Transport','Météo et Nature','Professions','Courses et Argent','Verbes Essentiels','Grammaire de Base','Survie','Animaux et Révision'],
  },
  jp: {
    whatIsInLang: '「$1」は$2で？',
    writeInLang: '「$1」を$2で書いてください：',
    whatMeans: '「$1」の意味は？',
    noteTemplate: '$2での$1。',
    review: '復習',
    unitNames: ['基礎','挨拶とマナー','数字と時間','自己紹介','色と形容詞','曜日と月','食べ物と飲み物','体','服とファッション','家','交通','天気と自然','職業','買い物とお金','基本動詞','基本文法','サバイバル','動物と復習'],
  },
  zh: {
    whatIsInLang: '"$1"用$2怎么说？',
    writeInLang: '请写"$1"的$2：',
    whatMeans: '"$1"是什么意思？',
    noteTemplate: '$2中的$1。',
    review: '复习',
    unitNames: ['基础','问候与礼貌','数字与时间','自我介绍','颜色与形容词','日期与月份','食物与饮料','身体','服装与时尚','家居','交通','天气与自然','职业','购物与金钱','基本动词','基础语法','生存用语','动物与复习'],
  },
  ko: {
    whatIsInLang: '"$1"을 $2로?',
    writeInLang: '"$1"을 $2로 쓰세요:',
    whatMeans: '"$1"의 뜻은?',
    noteTemplate: '$2에서 $1.',
    review: '복습',
    unitNames: ['기초','인사와 예절','숫자와 시간','자기소개','색깔과 형용사','요일과 월','음식과 음료','신체','옷과 패션','집','교통','날씨와 자연','직업','쇼핑과 돈','필수 동사','기본 문법','생존 표현','동물과 복습'],
  },
  ru: {
    whatIsInLang: '«$1» на $2?',
    writeInLang: 'Напишите «$1» на $2:',
    whatMeans: 'Что означает «$1»?',
    noteTemplate: '$1 на $2.',
    review: 'Повторение',
    unitNames: ['Основы','Приветствия и вежливость','Числа и время','Знакомство','Цвета и прилагательные','Дни и месяцы','Еда и напитки','Тело','Одежда и мода','Дом','Транспорт','Погода и природа','Профессии','Покупки и деньги','Основные глаголы','Базовая грамматика','Выживание','Животные и повторение'],
  },
  ar: {
    whatIsInLang: '"$1" بال$2؟',
    writeInLang: 'اكتب "$1" بال$2:',
    whatMeans: 'ماذا تعني "$1"؟',
    noteTemplate: '$1 بال$2.',
    review: 'مراجعة',
    unitNames: ['الأساسيات','التحيات والآداب','الأرقام والوقت','التقديم','الألوان والصفات','الأيام والأشهر','الطعام والشراب','الجسم','الملابس والموضة','المنزل','النقل','الطقس والطبيعة','المهن','التسوق والمال','الأفعال الأساسية','القواعد الأساسية','البقاء','الحيوانات والمراجعة'],
  },
  hi: {
    whatIsInLang: '"$1" $2 में?',
    writeInLang: '"$1" $2 में लिखें:',
    whatMeans: '"$1" का क्या अर्थ है?',
    noteTemplate: '$2 में $1।',
    review: 'दोहराई',
    unitNames: ['आधार','अभिवादन और शिष्टाचार','संख्या और समय','परिचय','रंग और विशेषण','दिन और महीने','खाना और पीना','शरीर','कपड़े और फैशन','घर','परिवहन','मौसम और प्रकृति','पेशे','खरीदारी और पैसा','आवश्यक क्रियाएँ','बुनियादी व्याकरण','जीवन रक्षा','जानवर और दोहराई'],
  },
};

function getTemplates(nativeLang: string): LessonTemplates {
  return LESSON_I18N[nativeLang] || LESSON_I18N.en;
}

// 18 unit templates
function getA1Units(nativeLang: string): UnitDef[] {
  const names = getTemplates(nativeLang).unitNames;
  const emojis = ['🧱','👋','🔢','🙋','🎨','📅','🍽️','🦴','👕','🏠','🚌','🌤️','👨‍⚕️','💰','🏃','📖','🆘','🐾'];
  return names.map((name, i) => ({ id: `u${String(i+1).padStart(2,'0')}`, name, emoji: emojis[i] }));
}

// ==================== LESSON GENERATION ====================

function pickDistractors(correct: string, pool: WordEntry[], count: number): string[] {
  const others = pool.filter(w => w.w !== correct).map(w => w.w);
  const shuffled = others.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function makeTheoryStep(entry: WordEntry, lang: string, nativeLang: string): LessonStep {
  const t = getTemplates(nativeLang);
  const mn = translateMeaning(entry.mn, nativeLang);
  return { t: 'th', char: entry.w, rd: entry.rd, mn, note: t.noteTemplate.replace('$1', mn).replace('$2', lang) };
}

function makeMCStep(entry: WordEntry, pool: WordEntry[], lang: string, nativeLang: string): LessonStep {
  const t = getTemplates(nativeLang);
  const mn = translateMeaning(entry.mn, nativeLang);
  const distractors = pickDistractors(entry.w, pool, 3);
  const opts = [entry.w, ...distractors].sort(() => Math.random() - 0.5);
  const ans = opts.indexOf(entry.w);
  return { t: 'mc', q: t.whatIsInLang.replace('$1', mn).replace('$2', lang), opts, ans };
}

function makeTextStep(entry: WordEntry, lang: string, nativeLang: string): LessonStep {
  const t = getTemplates(nativeLang);
  const mn = translateMeaning(entry.mn, nativeLang);
  const clean = entry.rd.toLowerCase().replace(/[^a-záéíóúüñàèìòùâêîôûäëïöü\s]/g, '').trim();
  return { t: 'tx', q: t.writeInLang.replace('$1', mn).replace('$2', lang), ans: clean, hint: entry.rd };
}

function makeMCMeaningStep(entry: WordEntry, pool: WordEntry[], nativeLang: string): LessonStep {
  const t = getTemplates(nativeLang);
  const mn = translateMeaning(entry.mn, nativeLang);
  const distractors = pool.filter(w => w.mn !== entry.mn).map(w => translateMeaning(w.mn, nativeLang)).sort(() => Math.random() - 0.5).slice(0, 3);
  const opts = [mn, ...distractors].sort(() => Math.random() - 0.5);
  return { t: 'mc', q: t.whatMeans.replace('$1', entry.w), opts, ans: opts.indexOf(mn) };
}

function generateCategoryLessons(
  code: string, level: string, lang: string, nativeLang: string,
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
    batch.forEach(entry => steps.push(makeTheoryStep(entry, lang, nativeLang)));
    batch.forEach(entry => steps.push(makeMCStep(entry, category, lang, nativeLang)));
    if (batch[0]) steps.push(makeTextStep(batch[0], lang, nativeLang));
    if (batch.length > 1) steps.push(makeMCMeaningStep(batch[1], category, nativeLang));

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

function generateReviewLesson(
  code: string, level: string, lang: string, nativeLang: string,
  allWords: WordEntry[], unitDef: UnitDef, num: number
): Lesson {
  const t = getTemplates(nativeLang);
  const steps: LessonStep[] = [];
  const sample = allWords.sort(() => Math.random() - 0.5).slice(0, 6);
  sample.forEach(entry => steps.push(makeMCStep(entry, allWords, lang, nativeLang)));
  if (sample[0]) steps.push(makeTextStep(sample[0], lang, nativeLang));
  return {
    id: `${code}-${level.toLowerCase()}-${num}`,
    title: `${t.review}: ${unitDef.name} — ${lang}`,
    type: 'reading',
    steps,
    unit: unitDef,
  };
}

// Main generator: produces ~100 lessons from a wordbank
export function generateLessons(
  code: string, level: string, lang: string,
  bank: LevelWordbank,
  nativeLang: string = 'en'
): Lesson[] {
  const lessons: Lesson[] = [];
  let num = 1;
  const units = getA1Units(nativeLang);

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
    const unit = units[cat.unitIdx];
    const catLessons = generateCategoryLessons(
      code, level, lang, nativeLang,
      words as WordEntry[], unit, cat.type,
      num, cat.count
    );
    lessons.push(...catLessons);
    num += catLessons.length;
    lessons.push(generateReviewLesson(code, level, lang, nativeLang, words as WordEntry[], unit, num));
    num++;
  });

  return lessons;
}

// Add units to existing lessons
export function addUnitsToExisting(lessons: Lesson[], code: string, level: string, nativeLang: string = 'en'): Lesson[] {
  const unitSize = 6;
  const t = getTemplates(nativeLang);
  const unitDefs = [
    { id: 'u01', name: t.unitNames[0] || 'Foundations', emoji: '🧱' },
    { id: 'u02', name: t.unitNames[15] || 'Grammar', emoji: '📖' },
    { id: 'u03', name: t.unitNames[6] || 'Vocabulary I', emoji: '📝' },
    { id: 'u04', name: t.unitNames[7] || 'Vocabulary II', emoji: '📚' },
    { id: 'u05', name: t.review || 'Practice', emoji: '🎯' },
    { id: 'u06', name: t.unitNames[11] || 'Culture', emoji: '🌍' },
    { id: 'u07', name: t.unitNames[12] || 'Professional', emoji: '💼' },
    { id: 'u08', name: t.unitNames[14] || 'Advanced', emoji: '🚀' },
    { id: 'u09', name: t.unitNames[16] || 'Expressions', emoji: '💬' },
    { id: 'u10', name: t.review || 'Final Review', emoji: '🏆' },
  ];

  return lessons.map((lesson, i) => {
    const unitIdx = Math.min(Math.floor(i / unitSize), unitDefs.length - 1);
    return { ...lesson, unit: lesson.unit || unitDefs[unitIdx] };
  });
}
