import { GrammarEntry, VocabEntry } from './types';

export const GRAMMAR_REF: Record<string, GrammarEntry[]> = {
  jp: [
    { title: 'Partícula は (wa) — Tema', explanation: 'は marca el tema de la oración. Se escribe は pero se pronuncia "wa". Ejemplo: わたしは学生です (Yo soy estudiante).', examples: [{ text: 'わたしは学生です', translation: 'Yo soy estudiante' }, { text: 'これはペンです', translation: 'Esto es un bolígrafo' }] },
    { title: 'Partícula を (o) — Objeto directo', explanation: 'を marca el objeto que recibe la acción del verbo.', examples: [{ text: 'パンをたべます', translation: 'Como pan' }, { text: 'みずをのみます', translation: 'Bebo agua' }] },
    { title: 'Partícula に (ni) — Destino/Tiempo', explanation: 'に indica destino, ubicación o tiempo específico.', examples: [{ text: 'がっこうにいきます', translation: 'Voy a la escuela' }, { text: '三時に会いましょう', translation: 'Encontrémonos a las 3' }] },
    { title: 'Forma ます (masu) — Cortesía', explanation: 'La forma ます es la forma educada de los verbos. Negativo: ません. Pasado: ました.', examples: [{ text: 'たべます → たべません', translation: 'Como → No como' }, { text: 'のみます → のみました', translation: 'Bebo → Bebí' }] },
    { title: 'Adjetivos い (i-adjectives)', explanation: 'Los adjetivos terminados en い se conjugan directamente. Para negar: quita い y agrega くない.', examples: [{ text: 'たかい → たかくない', translation: 'Caro → No caro' }, { text: 'おおきい → おおきくない', translation: 'Grande → No grande' }] },
  ],
  fr: [
    { title: 'Articles définis (le, la, les)', explanation: 'En francés todo sustantivo tiene género. le = masculino singular, la = femenino singular, les = plural.', examples: [{ text: 'le chat', translation: 'El gato' }, { text: 'la maison', translation: 'La casa' }] },
    { title: 'Verbes en -er (primer grupo)', explanation: 'Los verbos regulares en -er son el grupo más grande. Conjugación: je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent.', examples: [{ text: 'Je parle français', translation: 'Yo hablo francés' }, { text: 'Nous mangeons', translation: 'Nosotros comemos' }] },
    { title: 'Négation (ne...pas)', explanation: 'Para negar: ne + verbo + pas. En el habla oral a menudo se omite "ne".', examples: [{ text: 'Je ne parle pas anglais', translation: 'No hablo inglés' }, { text: "Il n'est pas ici", translation: 'Él no está aquí' }] },
    { title: 'Passé composé', explanation: 'Se forma con avoir/être + participio pasado. La mayoría usa avoir. Verbos de movimiento usan être.', examples: [{ text: "J'ai mangé", translation: 'Yo comí' }, { text: 'Je suis allé(e)', translation: 'Yo fui' }] },
  ],
  zh: [
    { title: '是 (shì) — Ser/Estar', explanation: '是 funciona como el verbo "ser". Estructura: Sujeto + 是 + Complemento.', examples: [{ text: '我是学生', translation: 'Yo soy estudiante' }, { text: '他是老师', translation: 'Él es profesor' }] },
    { title: '的 (de) — Posesión/Modificador', explanation: '的 indica posesión o modifica sustantivos. Similar a "de" en español.', examples: [{ text: '我的书', translation: 'Mi libro' }, { text: '红色的花', translation: 'Flor roja' }] },
    { title: 'Orden de la oración', explanation: 'El orden básico es Sujeto + Verbo + Objeto, igual que en español.', examples: [{ text: '我吃饭', translation: 'Yo como comida' }, { text: '他喝水', translation: 'Él bebe agua' }] },
  ],
  de: [
    { title: 'Artículos (der, die, das)', explanation: 'Alemán tiene tres géneros: masculino (der), femenino (die), neutro (das). Plural siempre usa "die".', examples: [{ text: 'der Mann', translation: 'El hombre' }, { text: 'die Frau', translation: 'La mujer' }, { text: 'das Kind', translation: 'El niño' }] },
    { title: 'Orden del verbo', explanation: 'En oraciones principales, el verbo conjugado va siempre en segunda posición.', examples: [{ text: 'Ich spreche Deutsch', translation: 'Yo hablo alemán' }, { text: 'Morgen gehe ich', translation: 'Mañana voy yo' }] },
  ],
  it: [
    { title: 'Articoli (il, la, lo)', explanation: 'Los artículos varían según el género y la primera letra de la palabra siguiente.', examples: [{ text: 'il gatto', translation: 'El gato' }, { text: 'la casa', translation: 'La casa' }, { text: "l'acqua", translation: 'El agua' }] },
    { title: 'Presente indicativo (-are, -ere, -ire)', explanation: 'Los verbos regulares se dividen en tres conjugaciones.', examples: [{ text: 'Io parlo', translation: 'Yo hablo' }, { text: 'Lui scrive', translation: 'Él escribe' }] },
  ],
  pt: [
    { title: 'Artigos (o, a, os, as)', explanation: 'Portugués tiene artículos definidos según género y número.', examples: [{ text: 'o gato', translation: 'El gato' }, { text: 'a casa', translation: 'La casa' }] },
    { title: 'Verbos regulares (-ar, -er, -ir)', explanation: 'Similar al español, con tres conjugaciones principales.', examples: [{ text: 'Eu falo português', translation: 'Yo hablo portugués' }, { text: 'Nós comemos', translation: 'Nosotros comemos' }] },
  ],
  ko: [
    { title: '는/은 — Partícula de tema', explanation: 'Marca el tema de la oración. 는 después de vocal, 은 después de consonante.', examples: [{ text: '저는 학생입니다', translation: 'Yo soy estudiante' }] },
    { title: '입니다 — Ser (formal)', explanation: 'Forma formal de "ser". Se coloca al final de la oración.', examples: [{ text: '저는 한국 사람입니다', translation: 'Yo soy coreano' }] },
  ],
  en: [
    { title: 'Subject + Verb + Object', explanation: 'English follows SVO word order. The verb always comes after the subject.', examples: [{ text: 'I eat breakfast', translation: 'Yo como desayuno' }, { text: 'She reads books', translation: 'Ella lee libros' }] },
    { title: 'Present Simple', explanation: 'Add -s/-es for third person singular (he, she, it).', examples: [{ text: 'I work / He works', translation: 'Yo trabajo / Él trabaja' }] },
  ],
};

export const VOCAB_REF: Record<string, Record<string, VocabEntry[]>> = {
  jp: {
    N5: [
      { word: 'こんにちは', reading: 'konnichiwa', meaning: 'Hola', example: 'こんにちは、元気ですか？' },
      { word: 'ありがとう', reading: 'arigatou', meaning: 'Gracias', example: 'ありがとうございます' },
      { word: 'すみません', reading: 'sumimasen', meaning: 'Disculpe', example: 'すみません、えきはどこですか？' },
      { word: 'みず', reading: 'mizu', meaning: 'Agua', example: 'みずをください' },
      { word: 'ごはん', reading: 'gohan', meaning: 'Arroz/Comida', example: 'ごはんをたべます' },
      { word: 'がっこう', reading: 'gakkou', meaning: 'Escuela', example: 'がっこうにいきます' },
      { word: 'ねこ', reading: 'neko', meaning: 'Gato', example: 'ねこがいます' },
      { word: 'いぬ', reading: 'inu', meaning: 'Perro', example: 'いぬが好きです' },
      { word: '大きい', reading: 'ookii', meaning: 'Grande', example: '大きい木' },
      { word: '小さい', reading: 'chiisai', meaning: 'Pequeño', example: '小さいねこ' },
    ],
  },
  fr: {
    A1: [
      { word: 'Bonjour', meaning: 'Hola / Buenos días', example: 'Bonjour, comment allez-vous ?' },
      { word: 'Merci', meaning: 'Gracias', example: 'Merci beaucoup' },
      { word: 'le chat', meaning: 'El gato', example: 'Le chat est noir' },
      { word: 'la maison', meaning: 'La casa', example: 'La maison est grande' },
      { word: 'manger', meaning: 'Comer', example: 'Je mange une pomme' },
      { word: 'boire', meaning: 'Beber', example: 'Je bois du café' },
      { word: 'parler', meaning: 'Hablar', example: 'Je parle français' },
      { word: 'le livre', meaning: 'El libro', example: 'Je lis un livre' },
    ],
  },
  zh: {
    HSK1: [
      { word: '你好', reading: 'nǐ hǎo', meaning: 'Hola', example: '你好，你叫什么名字？' },
      { word: '谢谢', reading: 'xiè xie', meaning: 'Gracias', example: '谢谢你的帮助' },
      { word: '水', reading: 'shuǐ', meaning: 'Agua', example: '我要喝水' },
      { word: '吃', reading: 'chī', meaning: 'Comer', example: '我吃饭' },
      { word: '学生', reading: 'xué shēng', meaning: 'Estudiante', example: '我是学生' },
    ],
  },
  de: {
    A1: [
      { word: 'Guten Tag', meaning: 'Buenos días', example: 'Guten Tag, wie geht es Ihnen?' },
      { word: 'Danke', meaning: 'Gracias', example: 'Danke schön!' },
      { word: 'Wasser', meaning: 'Agua', example: 'Ich trinke Wasser.' },
      { word: 'Brot', meaning: 'Pan', example: 'Ich esse Brot.' },
    ],
  },
  en: {
    A1: [
      { word: 'Hello', meaning: 'Hola', example: 'Hello, how are you?' },
      { word: 'Thank you', meaning: 'Gracias', example: 'Thank you very much!' },
      { word: 'water', meaning: 'Agua', example: 'I drink water.' },
      { word: 'food', meaning: 'Comida', example: 'The food is delicious.' },
    ],
  },
};
