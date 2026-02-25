import { Lesson } from './types';
import { LANGUAGES } from './languages';

export const LEVELS: Record<string, string[]> = {};
LANGUAGES.forEach(l => { LEVELS[l.code] = l.levels; });

// ===== JAPANESE =====
const jpN5Lessons: Lesson[] = [
  {
    id: 'jp-n5-1', title: 'Hiragana あ行', type: 'writing',
    steps: [
      { t: 'th', char: 'あ', rd: 'a', mn: 'Vocal /a/', note: 'Primera letra del hiragana. Se pronuncia como la "a" en español.', ex: [{ j: 'あめ', m: 'lluvia' }, { j: 'あさ', m: 'mañana' }] },
      { t: 'th', char: 'い', rd: 'i', mn: 'Vocal /i/', note: 'Se pronuncia como la "i" en español.', ex: [{ j: 'いぬ', m: 'perro' }, { j: 'いえ', m: 'casa' }] },
      { t: 'th', char: 'う', rd: 'u', mn: 'Vocal /u/', note: 'Se pronuncia más cerrada que la "u" española.', ex: [{ j: 'うみ', m: 'mar' }, { j: 'うた', m: 'canción' }] },
      { t: 'mc', q: '¿Cómo se lee <span class="font-serif-jp text-jp text-xl">あ</span>?', opts: ['a', 'i', 'u', 'e'], ans: 0 },
      { t: 'mc', q: '¿Qué hiragana corresponde al sonido "i"?', opts: ['あ', 'い', 'う', 'え'], ans: 1 },
      { t: 'tx', q: 'Escribe la lectura de <span class="font-serif-jp text-jp text-xl">うみ</span> en romaji:', ans: 'umi', hint: 'う = u, み = mi' },
      { t: 'th', char: 'え', rd: 'e', mn: 'Vocal /e/', note: 'Se pronuncia como la "e" en español.', ex: [{ j: 'えき', m: 'estación' }] },
      { t: 'th', char: 'お', rd: 'o', mn: 'Vocal /o/', note: 'Se pronuncia como la "o" en español.', ex: [{ j: 'おかね', m: 'dinero' }] },
      { t: 'mc', q: '¿Cuál es el orden correcto de las vocales en japonés?', opts: ['a, i, u, e, o', 'a, e, i, o, u', 'i, a, u, e, o', 'a, i, e, u, o'], ans: 0 },
    ]
  },
  {
    id: 'jp-n5-2', title: 'Saludos básicos', type: 'vocab',
    steps: [
      { t: 'th', char: 'こんにちは', rd: 'konnichiwa', mn: 'Hola / Buenas tardes', note: 'El saludo más común. Se usa desde mediodía hasta el atardecer.' },
      { t: 'th', char: 'おはようございます', rd: 'ohayou gozaimasu', mn: 'Buenos días (formal)', note: 'Saludo matutino formal. おはよう es la versión informal.' },
      { t: 'th', char: 'こんばんは', rd: 'konbanwa', mn: 'Buenas noches (saludo)', note: 'Para saludar por la noche, no para despedirse.' },
      { t: 'mc', q: '¿Cómo dices "buenos días" formalmente?', opts: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら'], ans: 1 },
      { t: 'th', char: 'ありがとうございます', rd: 'arigatou gozaimasu', mn: 'Muchas gracias (formal)', note: 'La forma más educada de dar las gracias. ありがとう es informal.' },
      { t: 'th', char: 'すみません', rd: 'sumimasen', mn: 'Disculpe / Perdón', note: 'Se usa para pedir permiso, disculparse o llamar la atención.' },
      { t: 'tx', q: '¿Cómo se dice "gracias" en japonés? (escribe en romaji)', ans: 'arigatou', hint: 'あ り が と う' },
      { t: 'or', q: 'Ordena para formar "buenas noches":', words: ['は', 'ん', 'こ', 'ば', 'ん'], ans: [2, 0, 3, 1, 4] },
      { t: 'mc', q: '¿Cuándo usas こんばんは?', opts: ['Por la mañana', 'Al mediodía', 'Por la noche', 'Para despedirte'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-3', title: 'Números 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: '一 (いち)', rd: 'ichi', mn: 'Uno (1)', note: 'El kanji 一 es una línea horizontal.' },
      { t: 'th', char: '二 (に)', rd: 'ni', mn: 'Dos (2)', note: 'El kanji 二 son dos líneas horizontales.' },
      { t: 'th', char: '三 (さん)', rd: 'san', mn: 'Tres (3)', note: 'El kanji 三 son tres líneas horizontales.' },
      { t: 'mc', q: '¿Cómo se lee 三?', opts: ['ichi', 'ni', 'san', 'shi'], ans: 2 },
      { t: 'th', char: '四 (し/よん)', rd: 'shi / yon', mn: 'Cuatro (4)', note: 'Tiene dos lecturas. よん es más común en la vida diaria.' },
      { t: 'th', char: '五 (ご)', rd: 'go', mn: 'Cinco (5)', note: 'Se pronuncia como "go" en inglés.' },
      { t: 'tx', q: '¿Cómo se dice "cinco" en japonés?', ans: 'go', hint: '五' },
      { t: 'mc', q: '¿Cuál es el kanji de 2?', opts: ['一', '二', '三', '四'], ans: 1 },
      { t: 'mc', q: '¿Cuántas líneas tiene el kanji 三?', opts: ['1', '2', '3', '4'], ans: 2 },
    ]
  },
];

const jpN4Lessons: Lesson[] = [
  {
    id: 'jp-n4-1', title: 'Forma て (te-form)', type: 'grammar',
    steps: [
      { t: 'th', char: 'て形', rd: 'te-kei', mn: 'Forma -te', note: 'Una de las formas más importantes. Conecta verbos, pide permiso, y más.', ex: [{ j: 'たべて', m: 'comer (te-form)' }, { j: 'のんで', m: 'beber (te-form)' }] },
      { t: 'mc', q: '¿Cuál es la forma て de のみます?', opts: ['のんで', 'のみて', 'のんだ', 'のみで'], ans: 0 },
      { t: 'th', char: '〜てください', rd: '~te kudasai', mn: 'Por favor haga ~', note: 'Forma て + ください = petición educada.', ex: [{ j: 'たべてください', m: 'Por favor coma' }] },
      { t: 'or', q: 'Ordena: "Por favor espere"', words: ['まって', 'ください'], ans: [0, 1] },
      { t: 'tx', q: '¿Cómo pides "por favor lea" en japonés? (romaji)', ans: 'yonde kudasai', hint: 'よむ → よんで + ください' },
    ]
  },
];

// ===== FRENCH =====
const frA1Lessons: Lesson[] = [
  {
    id: 'fr-a1-1', title: 'Salutations', type: 'vocab',
    steps: [
      { t: 'th', char: 'Bonjour', rd: 'bon-ZHOOR', mn: 'Hola / Buenos días', note: 'El saludo universal en francés.' },
      { t: 'th', char: 'Bonsoir', rd: 'bon-SWAHR', mn: 'Buenas noches', note: 'Se usa a partir del atardecer.' },
      { t: 'th', char: 'Merci', rd: 'mehr-SEE', mn: 'Gracias', note: 'Merci beaucoup = Muchas gracias.' },
      { t: 'mc', q: '¿Cómo saludas por la mañana en francés?', opts: ['Bonsoir', 'Bonjour', 'Au revoir', 'Salut'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en francés?', ans: 'merci' },
      { t: 'or', q: 'Ordena: "Adiós, gracias"', words: ['Au', 'revoir', ',', 'merci'], ans: [0, 1, 2, 3] },
    ]
  },
  {
    id: 'fr-a1-2', title: 'Se présenter', type: 'grammar',
    steps: [
      { t: 'th', char: 'Je suis...', rd: 'zhuh SWEE', mn: 'Yo soy...', note: 'Estructura básica de presentación.' },
      { t: 'th', char: "Je m'appelle...", rd: "zhuh ma-PEL", mn: 'Me llamo...', note: 'Forma más natural de presentarse.' },
      { t: 'mc', q: '¿Cómo dices "Me llamo" en francés?', opts: ['Je suis', "Je m'appelle", 'Je parle', "J'habite"], ans: 1 },
      { t: 'tx', q: 'Completa: Je ___ français. (Yo soy francés)', ans: 'suis' },
    ]
  },
  {
    id: 'fr-a1-3', title: 'Les nombres 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: 'un, deux, trois', rd: 'uhn, duh, twah', mn: '1, 2, 3', note: 'Los primeros tres números en francés.' },
      { t: 'th', char: 'quatre, cinq, six', rd: 'katr, sank, sees', mn: '4, 5, 6', note: 'Cuatro, cinco, seis.' },
      { t: 'mc', q: '¿Qué número es "cinq"?', opts: ['3', '4', '5', '6'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "tres" en francés?', ans: 'trois' },
    ]
  },
];

const frA2Lessons: Lesson[] = [
  {
    id: 'fr-a2-1', title: 'Passé composé', type: 'grammar',
    steps: [
      { t: 'th', char: "J'ai mangé", rd: "zhay mon-ZHAY", mn: 'Yo comí / He comido', note: 'Se forma con avoir/être + participio pasado.' },
      { t: 'mc', q: '¿Cuál usa "être" como auxiliar?', opts: ['manger', 'parler', 'aller', 'boire'], ans: 2 },
      { t: 'tx', q: 'Forma el passé composé de "parler" (yo):', ans: "j'ai parlé" },
    ]
  },
];

// ===== CHINESE =====
const zhHSK1Lessons: Lesson[] = [
  {
    id: 'zh-hsk1-1', title: '你好 - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: '你好', rd: 'nǐ hǎo', mn: 'Hola', note: 'El saludo más básico y universal en chino mandarín. 你 = tú, 好 = bien.' },
      { t: 'th', char: '谢谢', rd: 'xiè xie', mn: 'Gracias', note: 'Esencial en la comunicación diaria.' },
      { t: 'th', char: '再见', rd: 'zài jiàn', mn: 'Adiós', note: '再 = otra vez, 见 = ver. Literalmente "vernos de nuevo".' },
      { t: 'mc', q: '¿Cómo se dice "hola" en chino?', opts: ['谢谢', '你好', '再见', '对不起'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en chino? (pinyin)', ans: 'xie xie', hint: '谢谢' },
      { t: 'mc', q: '¿Qué significa 再见?', opts: ['Hola', 'Gracias', 'Adiós', 'Por favor'], ans: 2 },
    ]
  },
  {
    id: 'zh-hsk1-2', title: '数字 - Números 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: '一 二 三', rd: 'yī èr sān', mn: '1, 2, 3', note: '一 tiene un trazo, 二 dos trazos, 三 tres trazos.' },
      { t: 'th', char: '四 五 六', rd: 'sì wǔ liù', mn: '4, 5, 6', note: 'Los números del 4 al 6.' },
      { t: 'mc', q: '¿Cómo se dice "cinco" en chino?', opts: ['sì', 'wǔ', 'liù', 'qī'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee 三? (pinyin)', ans: 'san', hint: 'Tiene tres trazos horizontales' },
    ]
  },
  {
    id: 'zh-hsk1-3', title: '自我介绍 - Presentarse', type: 'grammar',
    steps: [
      { t: 'th', char: '我是...', rd: 'wǒ shì...', mn: 'Yo soy...', note: '我 = yo, 是 = ser/estar. Estructura básica de presentación.' },
      { t: 'th', char: '我叫...', rd: 'wǒ jiào...', mn: 'Me llamo...', note: '叫 = llamarse. Forma natural de decir tu nombre.' },
      { t: 'mc', q: '¿Qué significa 我?', opts: ['Tú', 'Yo', 'Él', 'Nosotros'], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo soy estudiante"', words: ['我', '是', '学生'], ans: [0, 1, 2] },
    ]
  },
];

// ===== GERMAN =====
const deA1Lessons: Lesson[] = [
  {
    id: 'de-a1-1', title: 'Begrüßungen', type: 'vocab',
    steps: [
      { t: 'th', char: 'Guten Tag', rd: 'GOO-ten tahk', mn: 'Buenos días / Hola', note: 'El saludo estándar formal en alemán.' },
      { t: 'th', char: 'Danke', rd: 'DAHN-keh', mn: 'Gracias', note: 'Danke schön = Muchas gracias.' },
      { t: 'th', char: 'Auf Wiedersehen', rd: 'owf VEE-dehr-zay-en', mn: 'Adiós', note: 'Despedida formal. Tschüss es informal.' },
      { t: 'mc', q: '¿Cómo se dice "gracias" en alemán?', opts: ['Bitte', 'Danke', 'Hallo', 'Tschüss'], ans: 1 },
      { t: 'tx', q: '¿Cómo saludas formalmente en alemán?', ans: 'guten tag' },
    ]
  },
  {
    id: 'de-a1-2', title: 'Zahlen 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: 'eins, zwei, drei', rd: 'ayns, tsvay, dray', mn: '1, 2, 3', note: 'Los primeros tres números en alemán.' },
      { t: 'th', char: 'vier, fünf, sechs', rd: 'feer, fewnf, zeks', mn: '4, 5, 6', note: 'Números del 4 al 6.' },
      { t: 'mc', q: '¿Qué número es "fünf"?', opts: ['3', '4', '5', '6'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "dos" en alemán?', ans: 'zwei' },
    ]
  },
  {
    id: 'de-a1-3', title: 'Sich vorstellen', type: 'grammar',
    steps: [
      { t: 'th', char: 'Ich bin...', rd: 'ikh bin', mn: 'Yo soy...', note: 'La forma más directa de presentarse.' },
      { t: 'th', char: 'Ich heiße...', rd: 'ikh HY-seh', mn: 'Me llamo...', note: 'heißen = llamarse. Forma estándar de dar tu nombre.' },
      { t: 'mc', q: '¿Cómo dices "Me llamo" en alemán?', opts: ['Ich bin', 'Ich heiße', 'Ich spreche', 'Ich komme'], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo soy estudiante"', words: ['Ich', 'bin', 'Student'], ans: [0, 1, 2] },
    ]
  },
];

// ===== ITALIAN =====
const itA1Lessons: Lesson[] = [
  {
    id: 'it-a1-1', title: 'Saluti', type: 'vocab',
    steps: [
      { t: 'th', char: 'Ciao', rd: 'CHOW', mn: 'Hola / Adiós', note: 'El saludo más versátil del italiano. Se usa para saludar y despedirse.' },
      { t: 'th', char: 'Grazie', rd: 'GRAH-tsee-eh', mn: 'Gracias', note: 'Grazie mille = Mil gracias.' },
      { t: 'th', char: 'Arrivederci', rd: 'ah-ree-veh-DEHR-chee', mn: 'Adiós (formal)', note: 'Despedida formal. Ciao es para amigos.' },
      { t: 'mc', q: '¿Cuál es el saludo informal italiano?', opts: ['Buongiorno', 'Arrivederci', 'Ciao', 'Grazie'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en italiano?', ans: 'grazie' },
    ]
  },
  {
    id: 'it-a1-2', title: 'Numeri 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: 'uno, due, tre', rd: 'OO-no, DOO-eh, treh', mn: '1, 2, 3', note: 'Los primeros tres números italianos. Muy similares al español.' },
      { t: 'th', char: 'quattro, cinque, sei', rd: 'KWAT-tro, CHIN-kweh, say', mn: '4, 5, 6', note: 'Números del 4 al 6.' },
      { t: 'mc', q: '¿Cómo se dice "cinco" en italiano?', opts: ['quattro', 'cinque', 'sei', 'sette'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "tres" en italiano?', ans: 'tre' },
    ]
  },
  {
    id: 'it-a1-3', title: 'Presentarsi', type: 'grammar',
    steps: [
      { t: 'th', char: 'Io sono...', rd: 'ee-oh SO-no', mn: 'Yo soy...', note: 'Io = yo, sono = soy. Estructura básica de presentación.' },
      { t: 'th', char: 'Mi chiamo...', rd: 'mee KYAH-mo', mn: 'Me llamo...', note: 'Forma natural de presentarse en italiano.' },
      { t: 'mc', q: '¿Cómo dices "Me llamo" en italiano?', opts: ['Io sono', 'Mi chiamo', 'Io parlo', 'Io vivo'], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo soy italiano"', words: ['Io', 'sono', 'italiano'], ans: [0, 1, 2] },
    ]
  },
];

// ===== PORTUGUESE =====
const ptA1Lessons: Lesson[] = [
  {
    id: 'pt-a1-1', title: 'Saudações', type: 'vocab',
    steps: [
      { t: 'th', char: 'Olá', rd: 'oh-LAH', mn: 'Hola', note: 'El saludo más común en portugués.' },
      { t: 'th', char: 'Obrigado/a', rd: 'oh-bree-GAH-doo', mn: 'Gracias', note: 'Obrigado (masculino) / Obrigada (femenino).' },
      { t: 'th', char: 'Tchau', rd: 'CHOW', mn: 'Adiós', note: 'Despedida informal. Viene del italiano "ciao".' },
      { t: 'mc', q: '¿Cómo se dice "hola" en portugués?', opts: ['Tchau', 'Olá', 'Obrigado', 'Bom dia'], ans: 1 },
      { t: 'tx', q: '¿Cómo dice "gracias" un hombre en portugués?', ans: 'obrigado' },
    ]
  },
  {
    id: 'pt-a1-2', title: 'Números 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: 'um, dois, três', rd: 'oom, doys, treys', mn: '1, 2, 3', note: 'Los primeros tres números en portugués.' },
      { t: 'mc', q: '¿Cómo se dice "dos" en portugués?', opts: ['um', 'dois', 'três', 'quatro'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "tres" en portugués?', ans: 'tres', hint: 'Muy similar al español con acento' },
    ]
  },
  {
    id: 'pt-a1-3', title: 'Apresentação', type: 'grammar',
    steps: [
      { t: 'th', char: 'Eu sou...', rd: 'ew soh', mn: 'Yo soy...', note: 'Eu = yo, sou = soy. Muy similar al español.' },
      { t: 'th', char: 'Meu nome é...', rd: 'mew NO-mee eh', mn: 'Mi nombre es...', note: 'Forma natural de presentarse.' },
      { t: 'mc', q: '¿Cómo dices "Yo soy" en portugués?', opts: ['Eu sou', 'Eu tenho', 'Eu falo', 'Eu vivo'], ans: 0 },
    ]
  },
];

// ===== KOREAN =====
const koTOPIK1Lessons: Lesson[] = [
  {
    id: 'ko-topik1-1', title: '인사 - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: '안녕하세요', rd: 'annyeonghaseyo', mn: 'Hola (formal)', note: 'El saludo más usado en coreano. Se usa en cualquier momento del día.' },
      { t: 'th', char: '감사합니다', rd: 'gamsahamnida', mn: 'Gracias (formal)', note: 'La forma más educada de dar las gracias.' },
      { t: 'th', char: '안녕히 가세요', rd: 'annyeonghi gaseyo', mn: 'Adiós (a quien se va)', note: 'Se usa cuando la otra persona se va y tú te quedas.' },
      { t: 'mc', q: '¿Cómo saludas en coreano?', opts: ['감사합니다', '안녕하세요', '안녕히 가세요', '죄송합니다'], ans: 1 },
      { t: 'tx', q: '¿Cómo dices "gracias" en coreano? (romanización)', ans: 'gamsahamnida' },
    ]
  },
  {
    id: 'ko-topik1-2', title: '숫자 - Números', type: 'vocab',
    steps: [
      { t: 'th', char: '일, 이, 삼', rd: 'il, i, sam', mn: '1, 2, 3', note: 'Sistema sino-coreano de números. Se usa para fechas, dinero, teléfonos.' },
      { t: 'mc', q: '¿Cómo se dice "dos" en coreano sino?', opts: ['일', '이', '삼', '사'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee 삼? (romanización)', ans: 'sam' },
    ]
  },
  {
    id: 'ko-topik1-3', title: '자기소개 - Presentarse', type: 'grammar',
    steps: [
      { t: 'th', char: '저는 ___입니다', rd: 'jeoneun ___ imnida', mn: 'Yo soy ___', note: '저 = yo (formal), 는 = partícula de tema, 입니다 = ser (formal).' },
      { t: 'mc', q: '¿Qué partícula marca el tema en coreano?', opts: ['을', '는', '이', '에'], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo soy estudiante"', words: ['저는', '학생', '입니다'], ans: [0, 1, 2] },
    ]
  },
];

// ===== RUSSIAN =====
const ruA1Lessons: Lesson[] = [
  {
    id: 'ru-a1-1', title: 'Приветствия - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'Здравствуйте', rd: 'zdravstvuyte', mn: 'Hola (formal)', note: 'Saludo formal. Привет (privet) es informal.' },
      { t: 'th', char: 'Спасибо', rd: 'spasibo', mn: 'Gracias', note: 'Большое спасибо = Muchas gracias.' },
      { t: 'th', char: 'До свидания', rd: 'do svidaniya', mn: 'Adiós', note: 'Despedida formal. Пока (poka) es informal.' },
      { t: 'mc', q: '¿Cómo se dice "gracias" en ruso?', opts: ['Привет', 'Спасибо', 'Пожалуйста', 'До свидания'], ans: 1 },
      { t: 'tx', q: '¿Cómo saludas informalmente en ruso? (transliteración)', ans: 'privet' },
    ]
  },
  {
    id: 'ru-a1-2', title: 'Числа - Números', type: 'vocab',
    steps: [
      { t: 'th', char: 'один, два, три', rd: 'odin, dva, tri', mn: '1, 2, 3', note: 'Los primeros tres números en ruso.' },
      { t: 'mc', q: '¿Cómo se dice "tres" en ruso?', opts: ['один', 'два', 'три', 'четыре'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "dos" en ruso? (transliteración)', ans: 'dva' },
    ]
  },
];

// ===== ARABIC =====
const arA1Lessons: Lesson[] = [
  {
    id: 'ar-a1-1', title: 'تحيات - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'مرحبا', rd: 'marhaba', mn: 'Hola', note: 'Saludo universal en árabe. Funciona en cualquier contexto.' },
      { t: 'th', char: 'شكرا', rd: 'shukran', mn: 'Gracias', note: 'شكرا جزيلا (shukran jazilan) = Muchas gracias.' },
      { t: 'th', char: 'مع السلامة', rd: "ma'a as-salama", mn: 'Adiós', note: 'Literalmente "con la paz".' },
      { t: 'mc', q: '¿Cómo se dice "hola" en árabe?', opts: ['شكرا', 'مرحبا', 'مع السلامة', 'من فضلك'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en árabe? (transliteración)', ans: 'shukran' },
    ]
  },
  {
    id: 'ar-a1-2', title: 'أرقام - Números', type: 'vocab',
    steps: [
      { t: 'th', char: 'واحد اثنان ثلاثة', rd: 'wahid, ithnan, thalatha', mn: '1, 2, 3', note: 'Los primeros tres números en árabe.' },
      { t: 'mc', q: '¿Cómo se dice "uno" en árabe?', opts: ['واحد', 'اثنان', 'ثلاثة', 'أربعة'], ans: 0 },
    ]
  },
];

// ===== HINDI =====
const hiA1Lessons: Lesson[] = [
  {
    id: 'hi-a1-1', title: 'अभिवादन - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'नमस्ते', rd: 'namaste', mn: 'Hola / Adiós', note: 'El saludo más universal en hindi. Se usa para saludar y despedirse.' },
      { t: 'th', char: 'धन्यवाद', rd: 'dhanyavaad', mn: 'Gracias', note: 'बहुत धन्यवाद = Muchas gracias.' },
      { t: 'mc', q: '¿Cómo se saluda en hindi?', opts: ['धन्यवाद', 'नमस्ते', 'अलविदा', 'कृपया'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en hindi? (transliteración)', ans: 'dhanyavaad' },
    ]
  },
  {
    id: 'hi-a1-2', title: 'संख्या - Números', type: 'vocab',
    steps: [
      { t: 'th', char: 'एक, दो, तीन', rd: 'ek, do, teen', mn: '1, 2, 3', note: 'Los primeros tres números en hindi.' },
      { t: 'mc', q: '¿Cómo se dice "dos" en hindi?', opts: ['एक', 'दो', 'तीन', 'चार'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "uno" en hindi? (transliteración)', ans: 'ek' },
    ]
  },
];

// ===== TURKISH =====
const trA1Lessons: Lesson[] = [
  {
    id: 'tr-a1-1', title: 'Selamlaşma - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'Merhaba', rd: 'mer-HA-ba', mn: 'Hola', note: 'El saludo más común en turco.' },
      { t: 'th', char: 'Teşekkür ederim', rd: 'teh-shek-KEUR eh-deh-REEM', mn: 'Gracias', note: 'La forma completa de dar las gracias. Teşekkürler es más casual.' },
      { t: 'th', char: 'Hoşça kal', rd: 'HOSH-cha kal', mn: 'Adiós (a quien se queda)', note: 'Se dice a la persona que se queda.' },
      { t: 'mc', q: '¿Cómo se dice "hola" en turco?', opts: ['Teşekkürler', 'Merhaba', 'Günaydın', 'Hoşça kal'], ans: 1 },
      { t: 'tx', q: '¿Cómo dices "gracias" en turco? (simplificado)', ans: 'tesekkurler' },
    ]
  },
  {
    id: 'tr-a1-2', title: 'Sayılar - Números', type: 'vocab',
    steps: [
      { t: 'th', char: 'bir, iki, üç', rd: 'beer, ee-KEE, ewch', mn: '1, 2, 3', note: 'Los primeros tres números en turco.' },
      { t: 'mc', q: '¿Cómo se dice "tres" en turco?', opts: ['bir', 'iki', 'üç', 'dört'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "uno" en turco?', ans: 'bir' },
    ]
  },
];

// ===== VIETNAMESE =====
const viA1Lessons: Lesson[] = [
  {
    id: 'vi-a1-1', title: 'Chào hỏi - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'Xin chào', rd: 'sin CHOW', mn: 'Hola', note: 'El saludo formal más común en vietnamita.' },
      { t: 'th', char: 'Cảm ơn', rd: 'kahm UHN', mn: 'Gracias', note: 'Cảm ơn rất nhiều = Muchas gracias.' },
      { t: 'mc', q: '¿Cómo se dice "hola" en vietnamita?', opts: ['Cảm ơn', 'Xin chào', 'Tạm biệt', 'Xin lỗi'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en vietnamita? (simplificado)', ans: 'cam on' },
    ]
  },
];

// ===== THAI =====
const thA1Lessons: Lesson[] = [
  {
    id: 'th-a1-1', title: 'ทักทาย - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'สวัสดี', rd: 'sawatdee', mn: 'Hola / Adiós', note: 'El saludo universal en tailandés. Se agrega ครับ (khrap) o ค่ะ (kha) por cortesía.' },
      { t: 'th', char: 'ขอบคุณ', rd: 'khop khun', mn: 'Gracias', note: 'ขอบคุณมาก (khop khun maak) = Muchas gracias.' },
      { t: 'mc', q: '¿Cómo se dice "hola" en tailandés?', opts: ['ขอบคุณ', 'สวัสดี', 'ลาก่อน', 'ขอโทษ'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en tailandés? (transliteración)', ans: 'khop khun' },
    ]
  },
];

// ===== DUTCH =====
const nlA1Lessons: Lesson[] = [
  {
    id: 'nl-a1-1', title: 'Begroetingen - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'Hallo', rd: 'HAH-loh', mn: 'Hola', note: 'El saludo más común en neerlandés.' },
      { t: 'th', char: 'Dank u wel', rd: 'dahnk ew vel', mn: 'Gracias', note: 'Dankjewel es la versión informal.' },
      { t: 'th', char: 'Tot ziens', rd: 'tot zeens', mn: 'Adiós', note: 'Despedida estándar. Doei es informal.' },
      { t: 'mc', q: '¿Cómo se dice "gracias" formalmente en neerlandés?', opts: ['Hallo', 'Dank u wel', 'Tot ziens', 'Alsjeblieft'], ans: 1 },
      { t: 'tx', q: '¿Cómo dices "adiós" en neerlandés?', ans: 'tot ziens' },
    ]
  },
  {
    id: 'nl-a1-2', title: 'Nummers 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: 'een, twee, drie', rd: 'ayn, tvay, dree', mn: '1, 2, 3', note: 'Los primeros tres números en neerlandés. Similar al alemán.' },
      { t: 'mc', q: '¿Cómo se dice "dos" en neerlandés?', opts: ['een', 'twee', 'drie', 'vier'], ans: 1 },
    ]
  },
];

// ===== POLISH =====
const plA1Lessons: Lesson[] = [
  {
    id: 'pl-a1-1', title: 'Powitania - Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'Cześć', rd: 'cheshch', mn: 'Hola / Adiós (informal)', note: 'El saludo informal más común en polaco.' },
      { t: 'th', char: 'Dziękuję', rd: 'jen-KOO-yeh', mn: 'Gracias', note: 'Bardzo dziękuję = Muchas gracias.' },
      { t: 'th', char: 'Do widzenia', rd: 'do vee-DZEH-nyah', mn: 'Adiós (formal)', note: 'Despedida formal estándar.' },
      { t: 'mc', q: '¿Cómo se dice "gracias" en polaco?', opts: ['Cześć', 'Dziękuję', 'Proszę', 'Do widzenia'], ans: 1 },
      { t: 'tx', q: '¿Cómo saludas informalmente en polaco?', ans: 'czesc' },
    ]
  },
];

// ===== ENGLISH =====
const enA1Lessons: Lesson[] = [
  {
    id: 'en-a1-1', title: 'Greetings', type: 'vocab',
    steps: [
      { t: 'th', char: 'Hello', rd: 'heh-LOH', mn: 'Hola', note: 'The most common greeting in English.' },
      { t: 'th', char: 'Thank you', rd: 'THANK yoo', mn: 'Gracias', note: 'Thanks is more informal.' },
      { t: 'th', char: 'Goodbye', rd: 'good-BYE', mn: 'Adiós', note: 'Bye is more casual.' },
      { t: 'mc', q: '¿Cómo se dice "hola" en inglés?', opts: ['Goodbye', 'Hello', 'Thank you', 'Please'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en inglés?', ans: 'thank you' },
    ]
  },
  {
    id: 'en-a1-2', title: 'Numbers 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: 'one, two, three', rd: 'wun, too, three', mn: '1, 2, 3', note: 'The first three numbers in English.' },
      { t: 'mc', q: '¿Cómo se dice "dos" en inglés?', opts: ['one', 'two', 'three', 'four'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "cinco" en inglés?', ans: 'five' },
    ]
  },
  {
    id: 'en-a1-3', title: 'Introductions', type: 'grammar',
    steps: [
      { t: 'th', char: 'I am...', rd: 'eye am', mn: 'Yo soy...', note: 'Basic introduction structure.' },
      { t: 'th', char: 'My name is...', rd: 'my naym iz', mn: 'Mi nombre es...', note: 'Standard way to introduce yourself.' },
      { t: 'mc', q: '¿Cómo dices "Yo soy" en inglés?', opts: ['I am', 'I have', 'I do', 'I go'], ans: 0 },
    ]
  },
];

// ===== SPANISH =====
const esA1Lessons: Lesson[] = [
  {
    id: 'es-a1-1', title: 'Saludos', type: 'vocab',
    steps: [
      { t: 'th', char: 'Hola', rd: 'OH-lah', mn: 'Hello', note: 'The most common greeting in Spanish.' },
      { t: 'th', char: 'Gracias', rd: 'GRAH-see-ahs', mn: 'Thank you', note: 'Muchas gracias = Thank you very much.' },
      { t: 'th', char: 'Adiós', rd: 'ah-dee-OHS', mn: 'Goodbye', note: 'Standard farewell.' },
      { t: 'mc', q: 'How do you say "hello" in Spanish?', opts: ['Adiós', 'Hola', 'Gracias', 'Por favor'], ans: 1 },
      { t: 'tx', q: 'How do you say "thank you" in Spanish?', ans: 'gracias' },
    ]
  },
];

// ===== LESSON DATA REGISTRY =====
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
