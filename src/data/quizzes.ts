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
      { t: 'mc', q: '¿Qué día es 月曜日?', opts: ['Martes', 'Lunes', 'Miércoles', 'Jueves'], ans: 1 },
      { t: 'tx', q: '¿Cómo se dice "perro" en japonés?', ans: 'inu' },
      { t: 'mc', q: '¿Cómo dices "Yo soy estudiante"?', opts: ['わたしを学生です', 'わたしは学生です', 'わたしが学生です', 'わたしに学生です'], ans: 1 },
      { t: 'mc', q: '¿Qué significa おかあさん?', opts: ['Padre', 'Madre (de otros)', 'Hermana', 'Abuela'], ans: 1 },
      { t: 'mc', q: '¿Qué partícula se usa con いきます para destino?', opts: ['を', 'は', 'に', 'で'], ans: 2 },
    ],
    N4: [
      { t: 'mc', q: '¿Cuál es la forma て de のみます?', opts: ['のんで', 'のみて', 'のめて', 'のって'], ans: 0 },
      { t: 'mc', q: '¿Cómo se niega おおきい?', opts: ['おおきくない', 'おおきじゃない', 'おおきいない', 'おおきません'], ans: 0 },
      { t: 'tx', q: '¿Cómo se dice "derecha" en japonés?', ans: 'migi' },
      { t: 'mc', q: '¿Qué significa まっすぐ?', opts: ['Izquierda', 'Derecha', 'Recto', 'Atrás'], ans: 2 },
      { t: 'mc', q: '¿Cómo se niega きれい(な)?', opts: ['きれくない', 'きれいくない', 'きれいじゃない', 'きれいません'], ans: 2 },
    ],
  },
  fr: {
    A1: [
      { t: 'mc', q: '¿Cómo se dice "hola" en francés?', opts: ['Bonsoir', 'Bonjour', 'Au revoir', 'Salut'], ans: 1 },
      { t: 'mc', q: '¿Qué significa "merci"?', opts: ['Hola', 'Adiós', 'Gracias', 'Por favor'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "adiós" en francés?', ans: 'au revoir' },
      { t: 'mc', q: '¿Cuál es el artículo femenino definido?', opts: ['le', 'la', 'les', 'un'], ans: 1 },
      { t: 'mc', q: '¿Cómo se dice "yo soy"?', opts: ['tu es', 'je suis', 'il est', 'je ai'], ans: 1 },
      { t: 'mc', q: '¿Qué número es "cinq"?', opts: ['3', '4', '5', '6'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "pan" en francés?', ans: 'pain' },
      { t: 'mc', q: '¿Cómo se niega "je mange"?', opts: ['je pas mange', 'je ne mange pas', 'je mange ne pas', 'ne mange pas je'], ans: 1 },
      { t: 'mc', q: '¿Qué día es "mardi"?', opts: ['Lunes', 'Martes', 'Miércoles', 'Jueves'], ans: 1 },
      { t: 'mc', q: '¿Cómo se dice "rojo"?', opts: ['bleu', 'vert', 'rouge', 'noir'], ans: 2 },
      { t: 'tx', q: '¿Cómo se dice "hermana" en francés?', ans: 'soeur' },
      { t: 'mc', q: '¿Qué auxiliar usa "aller" en passé composé?', opts: ['avoir', 'être', 'faire', 'pouvoir'], ans: 1 },
      { t: 'mc', q: '¿Qué terminación tiene "vous" para verbos -er?', opts: ['-e', '-es', '-ons', '-ez'], ans: 3 },
      { t: 'mc', q: '¿Qué significa "le fromage"?', opts: ['El pan', 'El queso', 'El vino', 'El café'], ans: 1 },
      { t: 'mc', q: '¿Cuándo se usa "bonsoir"?', opts: ['Mañana', 'Mediodía', 'Atardecer/noche', 'Despedida'], ans: 2 },
    ],
    A2: [
      { t: 'mc', q: '¿Cómo se forma el passé composé?', opts: ['Verbo + ment', 'avoir/être + participio', 'ne + verbo + pas', 'je + infinitivo'], ans: 1 },
      { t: 'tx', q: 'Forma el passé composé de "parler" (yo):', ans: "j'ai parlé" },
      { t: 'mc', q: '¿Cuál usa "être" como auxiliar?', opts: ['manger', 'parler', 'aller', 'boire'], ans: 2 },
    ],
  },
};
