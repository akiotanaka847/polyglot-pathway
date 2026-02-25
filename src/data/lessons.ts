import { Lesson } from './types';

export const LEVELS: Record<string, string[]> = {
  jp: ['N5', 'N4', 'N3', 'N2', 'N1'],
  fr: ['A1', 'A2', 'B1', 'B2', 'C1'],
};

// Japanese Lessons
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
  {
    id: 'jp-n5-4', title: 'Presentarse 自己紹介', type: 'grammar',
    steps: [
      { t: 'th', char: 'わたしは___です', rd: 'watashi wa ___ desu', mn: 'Yo soy ___', note: 'Estructura básica para presentarse. は (wa) es la partícula de tema.' },
      { t: 'th', char: 'はじめまして', rd: 'hajimemashite', mn: 'Mucho gusto (encantado)', note: 'Se dice al conocer a alguien por primera vez.' },
      { t: 'th', char: 'よろしくおねがいします', rd: 'yoroshiku onegaishimasu', mn: 'Encantado / Por favor cuide de mí', note: 'Frase de cierre en la presentación. Muy importante en la cultura japonesa.' },
      { t: 'mc', q: '¿Qué partícula se usa después del tema?', opts: ['が', 'を', 'は', 'に'], ans: 2 },
      { t: 'or', q: 'Ordena: "Yo soy María"', words: ['わたし', 'は', 'マリア', 'です'], ans: [0, 1, 2, 3] },
      { t: 'tx', q: 'Completa: はじめまして。わたしは田中___。', ans: 'です', hint: 'Verbo copulativo' },
      { t: 'mc', q: '¿Qué dices al final de una presentación?', opts: ['さようなら', 'よろしくおねがいします', 'すみません', 'ありがとう'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-5', title: 'Katakana ア行', type: 'writing',
    steps: [
      { t: 'th', char: 'ア', rd: 'a', mn: 'Katakana A', note: 'Katakana se usa para palabras extranjeras, onomatopeyas y énfasis.', ex: [{ j: 'アメリカ', m: 'América' }] },
      { t: 'th', char: 'イ', rd: 'i', mn: 'Katakana I', note: 'Similar al hiragana い pero más angular.', ex: [{ j: 'イギリス', m: 'Inglaterra' }] },
      { t: 'th', char: 'ウ', rd: 'u', mn: 'Katakana U', note: 'Se usa en muchas palabras prestadas del inglés.', ex: [{ j: 'ウイスキー', m: 'whisky' }] },
      { t: 'mc', q: '¿Para qué se usa el katakana?', opts: ['Palabras nativas', 'Palabras extranjeras', 'Verbos', 'Gramática'], ans: 1 },
      { t: 'th', char: 'エ', rd: 'e', mn: 'Katakana E', note: 'Parece una I mayúscula.', ex: [{ j: 'エレベーター', m: 'elevador' }] },
      { t: 'th', char: 'オ', rd: 'o', mn: 'Katakana O', note: 'Tiene forma de cruz parcial.', ex: [{ j: 'オレンジ', m: 'naranja' }] },
      { t: 'mc', q: '¿Cuál es la katakana de "e"?', opts: ['ア', 'イ', 'ウ', 'エ'], ans: 3 },
      { t: 'tx', q: '¿Cómo se escribe "América" en katakana? (romaji)', ans: 'amerika' },
    ]
  },
  {
    id: 'jp-n5-6', title: 'Partículas básicas は・が・を', type: 'grammar',
    steps: [
      { t: 'th', char: 'は (wa)', rd: 'wa', mn: 'Partícula de tema', note: 'Marca el tema de la oración. Se escribe は pero se pronuncia "wa".', ex: [{ j: 'わたしは学生です', m: 'Yo soy estudiante' }] },
      { t: 'th', char: 'が (ga)', rd: 'ga', mn: 'Partícula de sujeto', note: 'Marca el sujeto. Indica algo nuevo o enfatizado.', ex: [{ j: 'ねこがいます', m: 'Hay un gato' }] },
      { t: 'th', char: 'を (o)', rd: 'o', mn: 'Partícula de objeto directo', note: 'Marca lo que recibe la acción del verbo.', ex: [{ j: 'パンをたべます', m: 'Como pan' }] },
      { t: 'mc', q: '¿Qué partícula marca el objeto directo?', opts: ['は', 'が', 'を', 'に'], ans: 2 },
      { t: 'mc', q: 'En "ねこがいます", ¿qué marca が?', opts: ['El tema', 'El sujeto', 'El objeto', 'El lugar'], ans: 1 },
      { t: 'or', q: 'Ordena: "Como arroz"', words: ['ごはん', 'を', 'たべます'], ans: [0, 1, 2] },
      { t: 'tx', q: 'Completa: わたし___学生です', ans: 'は', hint: 'Partícula de tema' },
    ]
  },
  {
    id: 'jp-n5-7', title: 'Familia 家族', type: 'vocab',
    steps: [
      { t: 'th', char: 'おかあさん', rd: 'okaasan', mn: 'Madre (de otros)', note: 'Para hablar de tu propia madre, di はは (haha).' },
      { t: 'th', char: 'おとうさん', rd: 'otousan', mn: 'Padre (de otros)', note: 'Para tu propio padre, di ちち (chichi).' },
      { t: 'th', char: 'おにいさん', rd: 'oniisan', mn: 'Hermano mayor (de otros)', note: 'Para tu propio hermano mayor: あに (ani).' },
      { t: 'mc', q: '¿Cómo dices "mi madre" hablando con otros?', opts: ['おかあさん', 'はは', 'おねえさん', 'あね'], ans: 1 },
      { t: 'th', char: 'おねえさん', rd: 'oneesan', mn: 'Hermana mayor (de otros)', note: 'Para tu propia hermana mayor: あね (ane).' },
      { t: 'mc', q: '¿Por qué hay dos formas para "madre"?', opts: ['No hay razón', 'Formal vs informal', 'Tu familia vs familia ajena', 'Masculino vs femenino'], ans: 2 },
      { t: 'tx', q: '¿Cómo dices "padre" formalmente?', ans: 'otousan' },
    ]
  },
  {
    id: 'jp-n5-8', title: 'Días de la semana 曜日', type: 'vocab',
    steps: [
      { t: 'th', char: '月曜日', rd: 'getsuyoubi', mn: 'Lunes', note: '月 = luna. El lunes es el día de la luna.' },
      { t: 'th', char: '火曜日', rd: 'kayoubi', mn: 'Martes', note: '火 = fuego. El martes es el día del fuego.' },
      { t: 'th', char: '水曜日', rd: 'suiyoubi', mn: 'Miércoles', note: '水 = agua. El miércoles es el día del agua.' },
      { t: 'mc', q: '¿Qué día de la semana es 火曜日?', opts: ['Lunes', 'Martes', 'Miércoles', 'Jueves'], ans: 1 },
      { t: 'th', char: '木曜日', rd: 'mokuyoubi', mn: 'Jueves', note: '木 = árbol/madera. El jueves es el día del árbol.' },
      { t: 'th', char: '金曜日', rd: 'kinyoubi', mn: 'Viernes', note: '金 = oro/metal. El viernes es el día del oro.' },
      { t: 'tx', q: '¿Qué elemento representa 水?', ans: 'agua' },
      { t: 'mc', q: '¿Qué kanji tiene el lunes?', opts: ['火', '水', '月', '金'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-9', title: 'Verbos esenciales ます形', type: 'grammar',
    steps: [
      { t: 'th', char: 'たべます', rd: 'tabemasu', mn: 'Comer (formal)', note: 'Forma ます = forma educada. Negativo: たべません.', ex: [{ j: 'パンをたべます', m: 'Como pan' }] },
      { t: 'th', char: 'のみます', rd: 'nomimasu', mn: 'Beber (formal)', note: 'Negativo: のみません. Pasado: のみました.', ex: [{ j: 'みずをのみます', m: 'Bebo agua' }] },
      { t: 'th', char: 'いきます', rd: 'ikimasu', mn: 'Ir (formal)', note: 'Se usa con la partícula に para indicar destino.', ex: [{ j: 'がっこうにいきます', m: 'Voy a la escuela' }] },
      { t: 'mc', q: '¿Cuál es el negativo de たべます?', opts: ['たべません', 'たべました', 'たべる', 'たべない'], ans: 0 },
      { t: 'or', q: 'Ordena: "Voy a la escuela"', words: ['がっこう', 'に', 'いきます'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿Cómo se dice "beber" en forma ます?', ans: 'のみます', hint: 'のみ + ます' },
      { t: 'mc', q: '¿Qué partícula se usa con いきます para el destino?', opts: ['を', 'は', 'に', 'で'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-10', title: 'Colores 色', type: 'vocab',
    steps: [
      { t: 'th', char: '赤い (あかい)', rd: 'akai', mn: 'Rojo', note: 'Es un adjetivo-い. Se puede usar directamente antes de un sustantivo: 赤い花 = flor roja.' },
      { t: 'th', char: '青い (あおい)', rd: 'aoi', mn: 'Azul', note: 'En japonés, 青 puede referirse tanto a azul como a verde (semáforos verdes se llaman 青).' },
      { t: 'th', char: '白い (しろい)', rd: 'shiroi', mn: 'Blanco', note: 'Símbolo de pureza en la cultura japonesa.', ex: [{ j: '白い雪', m: 'nieve blanca' }] },
      { t: 'mc', q: '¿Qué color es 赤い?', opts: ['Azul', 'Rojo', 'Verde', 'Blanco'], ans: 1 },
      { t: 'th', char: '黒い (くろい)', rd: 'kuroi', mn: 'Negro', note: 'Se asocia con elegancia y formalidad.' },
      { t: 'mc', q: '¿Qué tiene de especial 青 en japonés?', opts: ['Solo es azul', 'Puede ser azul o verde', 'Es un verbo', 'Es un nombre'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "blanco" en japonés?', ans: 'shiroi' },
    ]
  },
  {
    id: 'jp-n5-11', title: 'Comida 食べ物', type: 'vocab',
    steps: [
      { t: 'th', char: 'ごはん', rd: 'gohan', mn: 'Arroz / Comida', note: 'ごはん puede significar "arroz cocido" o "comida" en general.' },
      { t: 'th', char: 'すし', rd: 'sushi', mn: 'Sushi', note: 'Originalmente era una forma de conservar el pescado con arroz fermentado.' },
      { t: 'th', char: 'みず', rd: 'mizu', mn: 'Agua', note: 'En restaurantes japoneses, el agua (おみず) es gratis.' },
      { t: 'mc', q: '¿Qué puede significar ごはん?', opts: ['Solo arroz', 'Solo comida', 'Arroz o comida', 'Pescado'], ans: 2 },
      { t: 'th', char: 'ラーメン', rd: 'raamen', mn: 'Ramen', note: 'Escrito en katakana porque originalmente viene del chino.' },
      { t: 'or', q: 'Ordena: "Bebo agua"', words: ['みず', 'を', 'のみます'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿Cómo se dice "agua" en japonés?', ans: 'mizu' },
    ]
  },
  {
    id: 'jp-n5-12', title: 'Lectura: Un día en Tokio', type: 'reading',
    steps: [
      { t: 'th', char: '読む (よむ)', rd: 'yomu', mn: 'Leer', note: 'Vamos a practicar la comprensión lectora con un texto sencillo.' },
      { t: 'rd', title: 'わたしの一日', passage: 'わたしは田中です。まいにち、あさ七時におきます。パンをたべて、みずをのみます。八時にがっこうにいきます。', q: '¿A qué hora se despierta Tanaka?', opts: ['6時', '7時', '8時', '9時'], ans: 1 },
      { t: 'rd', title: 'わたしの一日', passage: 'わたしは田中です。まいにち、あさ七時におきます。パンをたべて、みずをのみます。八時にがっこうにいきます。', q: '¿Qué desayuna?', opts: ['ごはん', 'パン', 'すし', 'ラーメン'], ans: 1 },
      { t: 'mc', q: '¿Qué significa まいにち?', opts: ['A veces', 'Todos los días', 'Los fines de semana', 'Nunca'], ans: 1 },
      { t: 'tx', q: 'Escribe en romaji: がっこう', ans: 'gakkou', hint: 'Lugar de estudio' },
    ]
  },
];

const jpN4Lessons: Lesson[] = [
  {
    id: 'jp-n4-1', title: 'Forma て (te-form)', type: 'grammar',
    steps: [
      { t: 'th', char: 'て形', rd: 'te-kei', mn: 'Forma -te', note: 'Una de las formas más importantes. Conecta verbos, pide permiso, y más.', ex: [{ j: 'たべて', m: 'comer (te-form)' }, { j: 'のんで', m: 'beber (te-form)' }] },
      { t: 'th', char: 'たべて', rd: 'tabete', mn: 'Comer → te-form', note: 'Verbos Grupo 2 (-iru/-eru): quita ます y agrega て.' },
      { t: 'mc', q: '¿Cuál es la forma て de のみます?', opts: ['のんで', 'のみて', 'のんだ', 'のみで'], ans: 0 },
      { t: 'th', char: '〜てください', rd: '~te kudasai', mn: 'Por favor haga ~', note: 'Forma て + ください = petición educada.', ex: [{ j: 'たべてください', m: 'Por favor coma' }] },
      { t: 'or', q: 'Ordena: "Por favor espere"', words: ['まって', 'ください'], ans: [0, 1] },
      { t: 'tx', q: '¿Cómo pides "por favor lea" en japonés? (romaji)', ans: 'yonde kudasai', hint: 'よむ → よんで + ください' },
    ]
  },
  {
    id: 'jp-n4-2', title: 'Adjetivos な y い', type: 'grammar',
    steps: [
      { t: 'th', char: 'い-adjetivos', rd: 'i-keiyoushi', mn: 'Adjetivos terminados en い', note: 'Se conjugan directamente. Negativo: quita い y agrega くない.', ex: [{ j: 'たかい → たかくない', m: 'caro → no caro' }] },
      { t: 'th', char: 'な-adjetivos', rd: 'na-keiyoushi', mn: 'Adjetivos que usan な', note: 'Funcionan como sustantivos. Negativo: じゃない.', ex: [{ j: 'しずか → しずかじゃない', m: 'tranquilo → no tranquilo' }] },
      { t: 'mc', q: '¿Cómo se niega おおきい (grande)?', opts: ['おおきくない', 'おおきじゃない', 'おおきいない', 'おおきません'], ans: 0 },
      { t: 'mc', q: '¿Cómo se niega きれい(な) (bonito)?', opts: ['きれくない', 'きれいくない', 'きれいじゃない', 'きれいません'], ans: 2 },
      { t: 'tx', q: 'Niega el adjetivo: あつい (caliente)', ans: 'あつくない', hint: 'Quita い, agrega くない' },
    ]
  },
  {
    id: 'jp-n4-3', title: 'Direcciones 方向', type: 'vocab',
    steps: [
      { t: 'th', char: '右 (みぎ)', rd: 'migi', mn: 'Derecha', note: 'Dirección fundamental para navegar en Japón.' },
      { t: 'th', char: '左 (ひだり)', rd: 'hidari', mn: 'Izquierda', note: 'Los japoneses conducen por la izquierda.' },
      { t: 'th', char: 'まっすぐ', rd: 'massugu', mn: 'Recto / Derecho', note: 'Se usa mucho al dar indicaciones.' },
      { t: 'mc', q: '¿Cómo se dice "derecha" en japonés?', opts: ['ひだり', 'みぎ', 'うえ', 'した'], ans: 1 },
      { t: 'or', q: 'Ordena: "Gire a la derecha"', words: ['みぎ', 'に', 'まがって', 'ください'], ans: [0, 1, 2, 3] },
      { t: 'tx', q: '¿Cómo se dice "recto"?', ans: 'massugu' },
    ]
  },
];

// French Lessons
const frA1Lessons: Lesson[] = [
  {
    id: 'fr-a1-1', title: 'Salutations', type: 'vocab',
    steps: [
      { t: 'th', char: 'Bonjour', rd: 'bon-ZHOOR', mn: 'Hola / Buenos días', note: 'El saludo universal en francés. Se usa desde la mañana hasta el atardecer.' },
      { t: 'th', char: 'Bonsoir', rd: 'bon-SWAHR', mn: 'Buenas noches', note: 'Se usa a partir del atardecer como saludo.' },
      { t: 'th', char: 'Au revoir', rd: 'oh ruh-VWAHR', mn: 'Adiós', note: 'La despedida formal estándar.' },
      { t: 'mc', q: '¿Cómo saludas por la mañana en francés?', opts: ['Bonsoir', 'Bonjour', 'Au revoir', 'Salut'], ans: 1 },
      { t: 'th', char: 'Merci', rd: 'mehr-SEE', mn: 'Gracias', note: 'Merci beaucoup = Muchas gracias.' },
      { t: 'th', char: "S'il vous plaît", rd: 'seel voo PLEH', mn: 'Por favor (formal)', note: 'Indispensable para la cortesía francesa.' },
      { t: 'tx', q: '¿Cómo se dice "gracias" en francés?', ans: 'merci' },
      { t: 'or', q: 'Ordena: "Adiós, gracias"', words: ['Au', 'revoir', ',', 'merci'], ans: [0, 1, 2, 3] },
      { t: 'mc', q: '¿Cuándo usas "Bonsoir"?', opts: ['Por la mañana', 'Al mediodía', 'Al atardecer/noche', 'Para despedirte'], ans: 2 },
    ]
  },
  {
    id: 'fr-a1-2', title: 'Se présenter', type: 'grammar',
    steps: [
      { t: 'th', char: 'Je suis...', rd: 'zhuh SWEE', mn: 'Yo soy...', note: 'Estructura básica de presentación. "Je" = yo, "suis" = soy/estoy.' },
      { t: 'th', char: "Je m'appelle...", rd: "zhuh ma-PEL", mn: 'Me llamo...', note: "Literalmente 'me llamo'. Es la forma más natural de presentarse." },
      { t: 'th', char: 'Enchanté(e)', rd: 'on-shon-TAY', mn: 'Encantado/a', note: 'Se agrega una -e al final si eres mujer: enchantée.' },
      { t: 'mc', q: '¿Cómo dices "me llamo María"?', opts: ["Je suis María", "Je m'appelle María", "Je me María", "Mon nom María"], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo soy estudiante"', words: ['Je', 'suis', 'étudiant'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿Cómo dices "encantado" en francés?', ans: 'enchanté' },
      { t: 'mc', q: '¿Qué significa "Je suis"?', opts: ['Tú eres', 'Yo soy', 'Él es', 'Nosotros somos'], ans: 1 },
    ]
  },
  {
    id: 'fr-a1-3', title: 'Les nombres 1-20', type: 'vocab',
    steps: [
      { t: 'th', char: 'un, deux, trois', rd: 'uhn, duh, trwah', mn: '1, 2, 3', note: 'Los tres primeros números. "Trois" se pronuncia con la R francesa.' },
      { t: 'th', char: 'quatre, cinq, six', rd: 'katr, sank, sees', mn: '4, 5, 6', note: 'La "q" en quatre suena como /k/. Cinq = sank.' },
      { t: 'th', char: 'sept, huit, neuf, dix', rd: 'set, weet, nuhf, dees', mn: '7, 8, 9, 10', note: 'Huit empieza con el sonido /w/. Dix = dies.' },
      { t: 'mc', q: '¿Cómo se dice "cinco" en francés?', opts: ['quatre', 'cinq', 'six', 'sept'], ans: 1 },
      { t: 'tx', q: 'Escribe el número "tres" en francés:', ans: 'trois' },
      { t: 'mc', q: '¿Cuál es el número "huit"?', opts: ['6', '7', '8', '9'], ans: 2 },
      { t: 'or', q: 'Ordena de menor a mayor:', words: ['trois', 'un', 'deux'], ans: [1, 2, 0] },
    ]
  },
  {
    id: 'fr-a1-4', title: 'Articles définis et indéfinis', type: 'grammar',
    steps: [
      { t: 'th', char: 'le / la / les', rd: 'luh / lah / lay', mn: 'El / La / Los (artículos definidos)', note: 'Le = masculino, La = femenino, Les = plural. Ante vocal: l\'.', ex: [{ f: "le chat", m: 'el gato' }, { f: "la maison", m: 'la casa' }] },
      { t: 'th', char: 'un / une / des', rd: 'uhn / oon / day', mn: 'Un / Una / Unos (artículos indefinidos)', note: 'Un = masculino, Une = femenino, Des = plural.', ex: [{ f: 'un livre', m: 'un libro' }, { f: 'une fleur', m: 'una flor' }] },
      { t: 'mc', q: '¿Qué artículo va con "maison" (femenino)?', opts: ['le', 'la', 'les', 'un'], ans: 1 },
      { t: 'mc', q: '¿Cuál es el plural de "le"?', opts: ['la', 'un', 'les', 'des'], ans: 2 },
      { t: 'tx', q: 'Completa: ___ chat (el gato)', ans: 'le', hint: 'Chat es masculino' },
      { t: 'or', q: 'Ordena: "Una flor bonita"', words: ['une', 'jolie', 'fleur'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'fr-a1-5', title: 'Être et Avoir', type: 'grammar',
    steps: [
      { t: 'th', char: 'être', rd: 'etr', mn: 'Ser / Estar', note: 'Je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.' },
      { t: 'th', char: 'avoir', rd: 'a-vwahr', mn: 'Tener / Haber', note: "J'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont." },
      { t: 'mc', q: '¿Cuál es "tú eres" en francés?', opts: ['je suis', 'tu es', 'il est', 'nous sommes'], ans: 1 },
      { t: 'mc', q: '¿Cómo se dice "yo tengo"?', opts: ["j'ai", 'tu as', 'il a', 'nous avons'], ans: 0 },
      { t: 'tx', q: 'Conjuga "être" para "nosotros":', ans: 'nous sommes', hint: 'nous ___' },
      { t: 'or', q: 'Ordena: "Ella tiene un gato"', words: ['Elle', 'a', 'un', 'chat'], ans: [0, 1, 2, 3] },
    ]
  },
  {
    id: 'fr-a1-6', title: 'La famille', type: 'vocab',
    steps: [
      { t: 'th', char: 'la mère / le père', rd: 'lah mehr / luh pehr', mn: 'La madre / El padre', note: 'Maman y papa son las formas informales.' },
      { t: 'th', char: 'le frère / la sœur', rd: 'luh frehr / lah suhr', mn: 'El hermano / La hermana', note: 'Frère se pronuncia con la R francesa.' },
      { t: 'mc', q: '¿Cómo se dice "hermana" en francés?', opts: ['frère', 'sœur', 'mère', 'père'], ans: 1 },
      { t: 'th', char: 'les grands-parents', rd: 'lay gron-pa-RON', mn: 'Los abuelos', note: 'Grand-mère = abuela, Grand-père = abuelo.' },
      { t: 'tx', q: '¿Cómo se dice "madre" en francés?', ans: 'mère', hint: 'la ___' },
      { t: 'mc', q: '¿Qué significa "le frère"?', opts: ['La hermana', 'El hermano', 'El padre', 'El primo'], ans: 1 },
    ]
  },
  {
    id: 'fr-a1-7', title: 'Les couleurs', type: 'vocab',
    steps: [
      { t: 'th', char: 'rouge, bleu, vert', rd: 'roozh, bluh, vehr', mn: 'Rojo, azul, verde', note: 'Los colores concuerdan con el género del sustantivo.' },
      { t: 'th', char: 'blanc, noir, jaune', rd: 'blon, nwahr, zhohn', mn: 'Blanco, negro, amarillo', note: 'Blanche = femenino de blanc. Noire = femenino de noir.' },
      { t: 'mc', q: '¿Cómo se dice "rojo" en francés?', opts: ['bleu', 'vert', 'rouge', 'jaune'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "negro" en francés?', ans: 'noir' },
      { t: 'mc', q: '¿Cuál es el femenino de "blanc"?', opts: ['blanche', 'blance', 'blanche', 'blanque'], ans: 0 },
      { t: 'or', q: 'Ordena: "Un gato negro"', words: ['un', 'chat', 'noir'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'fr-a1-8', title: 'Les jours de la semaine', type: 'vocab',
    steps: [
      { t: 'th', char: 'lundi, mardi, mercredi', rd: 'luhn-dee, mar-dee, mehr-kruh-dee', mn: 'Lunes, martes, miércoles', note: 'En francés los días NO se escriben con mayúscula.' },
      { t: 'th', char: 'jeudi, vendredi', rd: 'zhuh-dee, von-druh-dee', mn: 'Jueves, viernes', note: 'Jeudi viene de Jupiter. Vendredi de Venus.' },
      { t: 'th', char: 'samedi, dimanche', rd: 'sam-dee, dee-monsh', mn: 'Sábado, domingo', note: 'El fin de semana = le week-end (palabra prestada del inglés).' },
      { t: 'mc', q: '¿Cómo se dice "martes" en francés?', opts: ['lundi', 'mardi', 'mercredi', 'jeudi'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "domingo"?', ans: 'dimanche' },
      { t: 'mc', q: '¿Los días de la semana se escriben con mayúscula en francés?', opts: ['Sí, siempre', 'No, nunca', 'Solo el lunes', 'Solo el domingo'], ans: 1 },
    ]
  },
  {
    id: 'fr-a1-9', title: 'Les verbes du 1er groupe (-er)', type: 'grammar',
    steps: [
      { t: 'th', char: 'parler', rd: 'par-LAY', mn: 'Hablar', note: 'Je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.', ex: [{ f: 'Je parle français', m: 'Hablo francés' }] },
      { t: 'th', char: 'manger', rd: 'mon-ZHAY', mn: 'Comer', note: 'Sigue el mismo patrón: je mange, tu manges...', ex: [{ f: 'Je mange une pomme', m: 'Como una manzana' }] },
      { t: 'mc', q: '¿Cómo se conjuga "parler" para "nosotros"?', opts: ['nous parle', 'nous parlons', 'nous parlez', 'nous parlent'], ans: 1 },
      { t: 'or', q: 'Ordena: "Hablo francés"', words: ['Je', 'parle', 'français'], ans: [0, 1, 2] },
      { t: 'tx', q: 'Conjuga "manger" para "yo":', ans: 'je mange', hint: 'je ___' },
      { t: 'mc', q: '¿Qué terminación tiene "vous" para verbos -er?', opts: ['-e', '-es', '-ons', '-ez'], ans: 3 },
    ]
  },
  {
    id: 'fr-a1-10', title: 'La nourriture', type: 'vocab',
    steps: [
      { t: 'th', char: 'le pain', rd: 'luh pan', mn: 'El pan', note: 'El pan es sagrado en la cultura francesa. La baguette es el símbolo.' },
      { t: 'th', char: 'le fromage', rd: 'luh fro-MAZH', mn: 'El queso', note: 'Francia tiene más de 400 tipos de queso.' },
      { t: 'th', char: "l'eau", rd: 'loh', mn: 'El agua', note: "Usa el artículo contraído l' porque empieza con vocal." },
      { t: 'mc', q: '¿Cómo se dice "pan" en francés?', opts: ['fromage', 'pain', 'eau', 'vin'], ans: 1 },
      { t: 'th', char: 'le vin / le café', rd: 'luh van / luh ka-FAY', mn: 'El vino / El café', note: 'Dos elementos centrales de la cultura francesa.' },
      { t: 'tx', q: '¿Cómo se dice "queso" en francés?', ans: 'fromage' },
      { t: 'or', q: 'Ordena: "Yo como pan"', words: ['Je', 'mange', 'du', 'pain'], ans: [0, 1, 2, 3] },
    ]
  },
  {
    id: 'fr-a1-11', title: 'La négation', type: 'grammar',
    steps: [
      { t: 'th', char: 'ne...pas', rd: 'nuh...pah', mn: 'No (negación)', note: 'La negación rodea al verbo: ne + verbo + pas.', ex: [{ f: 'Je ne parle pas', m: 'Yo no hablo' }] },
      { t: 'mc', q: '¿Cómo se niega "Je mange"?', opts: ['Je pas mange', 'Je ne mange pas', 'Je mange ne pas', 'Ne je mange pas'], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo no hablo francés"', words: ['Je', 'ne', 'parle', 'pas', 'français'], ans: [0, 1, 2, 3, 4] },
      { t: 'tx', q: 'Niega: "Il mange" (él come)', ans: 'il ne mange pas' },
      { t: 'mc', q: '¿Dónde va "ne" en la negación?', opts: ['Después del verbo', 'Antes del verbo', 'Al final', 'No se usa'], ans: 1 },
    ]
  },
  {
    id: 'fr-a1-12', title: 'Lectura: Une journée à Paris', type: 'reading',
    steps: [
      { t: 'rd', title: 'Ma journée', passage: "Je m'appelle Léa. Le matin, je mange du pain avec du café. À midi, je mange au restaurant. Le soir, je regarde la télévision.", q: '¿Qué desayuna Léa?', opts: ['Fromage', 'Pain et café', 'Vin', 'Rien'], ans: 1 },
      { t: 'rd', title: 'Ma journée', passage: "Je m'appelle Léa. Le matin, je mange du pain avec du café. À midi, je mange au restaurant. Le soir, je regarde la télévision.", q: '¿Qué hace Léa por la noche?', opts: ['Mange au restaurant', 'Écoute de la musique', 'Regarde la télévision', 'Lit un livre'], ans: 2 },
      { t: 'mc', q: '¿Qué significa "le matin"?', opts: ['La noche', 'La mañana', 'La tarde', 'El mediodía'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "restaurante" en francés?', ans: 'restaurant' },
    ]
  },
];

const frA2Lessons: Lesson[] = [
  {
    id: 'fr-a2-1', title: 'Le passé composé', type: 'grammar',
    steps: [
      { t: 'th', char: "J'ai mangé", rd: "zhay mon-ZHAY", mn: 'Yo comí / He comido', note: 'Passé composé = avoir/être + participio pasado. La mayoría usa avoir.', ex: [{ f: "J'ai parlé", m: 'Hablé' }, { f: "J'ai fini", m: 'Terminé' }] },
      { t: 'th', char: 'Je suis allé(e)', rd: "zhuh swee ah-LAY", mn: 'Yo fui / He ido', note: 'Verbos de movimiento usan être. El participio concuerda con el sujeto.' },
      { t: 'mc', q: '¿Qué auxiliar usa "aller" en passé composé?', opts: ['avoir', 'être', 'faire', 'aller'], ans: 1 },
      { t: 'or', q: 'Ordena: "Yo comí una manzana"', words: ["J'ai", 'mangé', 'une', 'pomme'], ans: [0, 1, 2, 3] },
      { t: 'tx', q: 'Forma el passé composé: parler (yo)', ans: "j'ai parlé", hint: 'avoir + participio' },
    ]
  },
];

export const LESSON_DATA: Record<string, Record<string, Lesson[]>> = {
  jp: { N5: jpN5Lessons, N4: jpN4Lessons, N3: [], N2: [], N1: [] },
  fr: { A1: frA1Lessons, A2: frA2Lessons, B1: [], B2: [], C1: [] },
};
