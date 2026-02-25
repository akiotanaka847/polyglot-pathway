import { FlashCard } from './types';

export const FLASHCARD_DATA: Record<string, Record<string, FlashCard[]>> = {
  jp: {
    N5: [
      { f: 'こんにちは', b: 'Hola / Buenas tardes', ex: 'こんにちは、元気ですか？' },
      { f: 'ありがとう', b: 'Gracias', ex: 'ありがとうございます' },
      { f: 'すみません', b: 'Disculpe / Perdón', ex: 'すみません、トイレはどこですか？' },
      { f: 'おはよう', b: 'Buenos días', ex: 'おはようございます' },
      { f: 'さようなら', b: 'Adiós', ex: 'では、さようなら' },
      { f: '一 (いち)', b: 'Uno', ex: '一つください' },
      { f: '二 (に)', b: 'Dos', ex: '二人です' },
      { f: '三 (さん)', b: 'Tres', ex: '三時に会いましょう' },
      { f: 'ねこ', b: 'Gato', ex: 'ねこがいます' },
      { f: 'いぬ', b: 'Perro', ex: 'いぬが好きです' },
      { f: 'みず', b: 'Agua', ex: 'みずをください' },
      { f: 'ごはん', b: 'Arroz / Comida', ex: 'ごはんをたべます' },
      { f: 'たべます', b: 'Comer', ex: 'パンをたべます' },
      { f: 'のみます', b: 'Beber', ex: 'みずをのみます' },
      { f: 'いきます', b: 'Ir', ex: 'えきにいきます' },
    ],
  },
  fr: {
    A1: [
      { f: 'Bonjour', b: 'Hola / Buenos días', ex: 'Bonjour, comment allez-vous ?' },
      { f: 'Merci', b: 'Gracias', ex: 'Merci beaucoup' },
      { f: 'Au revoir', b: 'Adiós', ex: 'Au revoir, à bientôt !' },
      { f: "S'il vous plaît", b: 'Por favor', ex: "Un café, s'il vous plaît" },
      { f: 'le chat', b: 'El gato', ex: 'Le chat est noir' },
      { f: 'le chien', b: 'El perro', ex: "J'ai un chien" },
      { f: "l'eau", b: 'El agua', ex: "Je bois de l'eau" },
      { f: 'manger', b: 'Comer', ex: 'Je mange une pomme' },
      { f: 'boire', b: 'Beber', ex: 'Je bois du café' },
      { f: 'parler', b: 'Hablar', ex: 'Je parle français' },
    ],
  },
  zh: {
    HSK1: [
      { f: '你好', b: 'Hola', ex: '你好，你叫什么名字？' },
      { f: '谢谢', b: 'Gracias', ex: '谢谢你的帮助' },
      { f: '再见', b: 'Adiós', ex: '明天再见' },
      { f: '一', b: 'Uno', ex: '一个苹果' },
      { f: '二', b: 'Dos', ex: '两个人' },
      { f: '三', b: 'Tres', ex: '三本书' },
      { f: '水', b: 'Agua', ex: '我要喝水' },
      { f: '吃', b: 'Comer', ex: '我吃饭' },
    ],
  },
  de: {
    A1: [
      { f: 'Guten Tag', b: 'Buenos días', ex: 'Guten Tag, wie geht es Ihnen?' },
      { f: 'Danke', b: 'Gracias', ex: 'Danke schön!' },
      { f: 'Auf Wiedersehen', b: 'Adiós', ex: 'Auf Wiedersehen, bis morgen!' },
      { f: 'Wasser', b: 'Agua', ex: 'Ich trinke Wasser.' },
      { f: 'essen', b: 'Comer', ex: 'Ich esse Brot.' },
      { f: 'sprechen', b: 'Hablar', ex: 'Ich spreche Deutsch.' },
    ],
  },
  it: {
    A1: [
      { f: 'Ciao', b: 'Hola / Adiós', ex: 'Ciao, come stai?' },
      { f: 'Grazie', b: 'Gracias', ex: 'Grazie mille!' },
      { f: 'Arrivederci', b: 'Adiós (formal)', ex: 'Arrivederci, a domani!' },
      { f: 'acqua', b: 'Agua', ex: "Vorrei dell'acqua, per favore." },
      { f: 'mangiare', b: 'Comer', ex: 'Io mangio la pizza.' },
      { f: 'parlare', b: 'Hablar', ex: 'Io parlo italiano.' },
    ],
  },
  pt: {
    A1: [
      { f: 'Olá', b: 'Hola', ex: 'Olá, como vai?' },
      { f: 'Obrigado', b: 'Gracias', ex: 'Muito obrigado!' },
      { f: 'Tchau', b: 'Adiós', ex: 'Tchau, até amanhã!' },
      { f: 'água', b: 'Agua', ex: 'Eu bebo água.' },
      { f: 'comer', b: 'Comer', ex: 'Eu como arroz.' },
    ],
  },
  ko: {
    TOPIK1: [
      { f: '안녕하세요', b: 'Hola (formal)', ex: '안녕하세요, 잘 지내세요?' },
      { f: '감사합니다', b: 'Gracias', ex: '감사합니다, 선생님.' },
      { f: '네', b: 'Sí', ex: '네, 맞습니다.' },
      { f: '물', b: 'Agua', ex: '물 주세요.' },
    ],
  },
  ru: {
    A1: [
      { f: 'Привет', b: 'Hola', ex: 'Привет, как дела?' },
      { f: 'Спасибо', b: 'Gracias', ex: 'Большое спасибо!' },
      { f: 'До свидания', b: 'Adiós', ex: 'До свидания, до завтра!' },
      { f: 'вода', b: 'Agua', ex: 'Я пью воду.' },
    ],
  },
  ar: {
    A1: [
      { f: 'مرحبا', b: 'Hola', ex: 'مرحبا، كيف حالك؟' },
      { f: 'شكرا', b: 'Gracias', ex: 'شكرا جزيلا' },
      { f: 'ماء', b: 'Agua', ex: 'أريد ماء من فضلك' },
    ],
  },
  hi: {
    A1: [
      { f: 'नमस्ते', b: 'Hola', ex: 'नमस्ते, आप कैसे हैं?' },
      { f: 'धन्यवाद', b: 'Gracias', ex: 'बहुत धन्यवाद!' },
      { f: 'पानी', b: 'Agua', ex: 'मुझे पानी चाहिए।' },
    ],
  },
  tr: {
    A1: [
      { f: 'Merhaba', b: 'Hola', ex: 'Merhaba, nasılsınız?' },
      { f: 'Teşekkürler', b: 'Gracias', ex: 'Çok teşekkürler!' },
      { f: 'su', b: 'Agua', ex: 'Su istiyorum, lütfen.' },
    ],
  },
  en: {
    A1: [
      { f: 'Hello', b: 'Hola', ex: 'Hello, how are you?' },
      { f: 'Thank you', b: 'Gracias', ex: 'Thank you very much!' },
      { f: 'Goodbye', b: 'Adiós', ex: 'Goodbye, see you tomorrow!' },
      { f: 'water', b: 'Agua', ex: 'I drink water.' },
      { f: 'eat', b: 'Comer', ex: 'I eat breakfast.' },
    ],
  },
};
