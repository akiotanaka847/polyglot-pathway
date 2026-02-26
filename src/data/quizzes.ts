import { QuizQuestion } from './types';

export const QUIZ_DATA: Record<string, Record<string, QuizQuestion[]>> = {
  jp: {
    N5: [
      { t: 'mc', q: '¿Cómo se lee あ?', opts: ['a', 'i', 'u', 'e'], ans: 0 },
      { t: 'mc', q: '¿Qué significa こんにちは?', opts: ['Adiós', 'Hola', 'Gracias', 'Perdón'], ans: 1 },
      { t: 'mc', q: '¿Cuál es el kanji de "tres"?', opts: ['一', '二', '三', '四'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en japonés? (romaji)', ans: 'arigatou' },
      { t: 'mc', q: '¿Qué partícula marca el objeto directo?', opts: ['は', 'が', 'を', 'に'], ans: 2 },
      { t: 'mc', q: '¿Para qué se usa el katakana?', opts: ['Verbos', 'Palabras extranjeras', 'Solo nombres', 'Gramática'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee 五?', ans: 'go' },
      { t: 'mc', q: '¿Qué significa みず?', opts: ['Fuego', 'Agua', 'Arroz', 'Pan'], ans: 1 },
      { t: 'mc', q: '¿Cuál es el negativo de たべます?', opts: ['たべません', 'たべました', 'たべない', 'たべる'], ans: 0 },
      { t: 'mc', q: '¿Qué color es 赤い?', opts: ['Azul', 'Verde', 'Rojo', 'Negro'], ans: 2 },
    ],
    N4: [
      { t: 'mc', q: '¿Cuál es la forma て de のみます?', opts: ['のんで', 'のみて', 'のめて', 'のって'], ans: 0 },
      { t: 'tx', q: '¿Cómo se dice "derecha" en japonés?', ans: 'migi' },
      { t: 'mc', q: '¿Qué significa まっすぐ?', opts: ['Izquierda', 'Derecha', 'Recto', 'Atrás'], ans: 2 },
    ],
  },
  fr: {
    A1: [
      { t: 'mc', q: '¿Cómo se dice "hola" en francés?', opts: ['Bonsoir', 'Bonjour', 'Au revoir', 'Salut'], ans: 1 },
      { t: 'mc', q: '¿Qué significa "merci"?', opts: ['Hola', 'Adiós', 'Gracias', 'Por favor'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "adiós" en francés?', ans: 'au revoir' },
      { t: 'mc', q: '¿Cómo se dice "yo soy"?', opts: ['tu es', 'je suis', 'il est', 'je ai'], ans: 1 },
      { t: 'mc', q: '¿Qué número es "cinq"?', opts: ['3', '4', '5', '6'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "pan" en francés?', ans: 'pain' },
    ],
    A2: [
      { t: 'mc', q: '¿Cómo se forma el passé composé?', opts: ['Verbo + ment', 'avoir/être + participio', 'ne + verbo + pas', 'je + infinitivo'], ans: 1 },
      { t: 'tx', q: 'Forma el passé composé de "parler" (yo):', ans: "j'ai parlé" },
    ],
  },
  zh: {
    HSK1: [
      { t: 'mc', q: '¿Cómo se dice "hola" en chino?', opts: ['谢谢', '你好', '再见', '对不起'], ans: 1 },
      { t: 'mc', q: '¿Qué significa 谢谢?', opts: ['Hola', 'Adiós', 'Gracias', 'Por favor'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "adiós" en chino? (pinyin)', ans: 'zai jian' },
      { t: 'mc', q: '¿Qué significa 我?', opts: ['Tú', 'Yo', 'Él', 'Nosotros'], ans: 1 },
    ],
  },
  pt: {
    A1: [
      { t: 'mc', q: '¿Cómo se dice "hola" en portugués?', opts: ['Tchau', 'Olá', 'Obrigado', 'Bom dia'], ans: 1 },
      { t: 'tx', q: '¿Cómo dice "gracias" un hombre en portugués?', ans: 'obrigado' },
      { t: 'mc', q: '¿Cómo dices "Yo soy" en portugués?', opts: ['Eu sou', 'Eu tenho', 'Eu falo', 'Eu vivo'], ans: 0 },
    ],
  },
  ko: {
    TOPIK1: [
      { t: 'mc', q: '¿Cómo saludas en coreano?', opts: ['감사합니다', '안녕하세요', '안녕히 가세요', '죄송합니다'], ans: 1 },
      { t: 'tx', q: '¿Cómo dices "gracias" en coreano? (romanización)', ans: 'gamsahamnida' },
      { t: 'mc', q: '¿Qué partícula marca el tema en coreano?', opts: ['을', '는', '이', '에'], ans: 1 },
    ],
  },
  ru: {
    A1: [
      { t: 'mc', q: '¿Cómo se dice "gracias" en ruso?', opts: ['Привет', 'Спасибо', 'Пожалуйста', 'До свидания'], ans: 1 },
      { t: 'tx', q: '¿Cómo saludas informalmente en ruso?', ans: 'privet' },
    ],
  },
  en: {
    A1: [
      { t: 'mc', q: '¿Cómo se dice "hola" en inglés?', opts: ['Goodbye', 'Hello', 'Thank you', 'Please'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "gracias" en inglés?', ans: 'thank you' },
      { t: 'mc', q: '¿Cómo dices "Yo soy" en inglés?', opts: ['I am', 'I have', 'I do', 'I go'], ans: 0 },
    ],
  },
};
