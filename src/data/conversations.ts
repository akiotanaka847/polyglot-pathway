import { Conversation } from './types';

export const CONVERSATION_DATA: Record<string, Conversation[]> = {
  jp: [
    {
      id: 'jp-conv-1', emoji: '☕', title: 'En el café', scenario: 'Estás en un café japonés y quieres pedir algo de beber.',
      level: 'N5',
      turns: [
        { npc: 'いらっしゃいませ！なにをのみますか？ (¡Bienvenido! ¿Qué va a tomar?)', hint: 'Pide un café', expected: 'コーヒーをください', accept: ['コーヒー', 'こーひー', 'coffee', 'koohii'] },
        { npc: 'ホットですか、アイスですか？ (¿Caliente o frío?)', hint: 'Di "caliente"', expected: 'ホットをおねがいします', accept: ['ホット', 'ほっと', 'hotto', 'hot'] },
        { npc: 'かしこまりました。300えんです。 (Entendido. Son 300 yenes.)', hint: 'Da las gracias', expected: 'ありがとうございます', accept: ['ありがとう', 'arigatou', 'gracias'] },
      ],
    },
    {
      id: 'jp-conv-2', emoji: '🚃', title: 'En la estación', scenario: 'Estás perdido en una estación de tren y necesitas llegar a Shibuya.',
      level: 'N5',
      turns: [
        { npc: 'はい？ (¿Sí?)', hint: 'Pregunta cómo llegar a Shibuya', expected: 'すみません、しぶやはどうやっていきますか？', accept: ['しぶや', 'shibuya', 'すみません'] },
        { npc: 'やまのてせんにのってください。 (Tome la línea Yamanote.)', hint: 'Pregunta dónde está el andén', expected: 'ホームはどこですか？', accept: ['どこ', 'ホーム', 'doko', 'hoomu'] },
        { npc: '3ばんホームです。 (Es el andén 3.)', hint: 'Agradece', expected: 'ありがとうございます！', accept: ['ありがとう', 'arigatou'] },
      ],
    },
  ],
  fr: [
    {
      id: 'fr-conv-1', emoji: '🥐', title: 'À la boulangerie', scenario: 'Estás en una panadería francesa comprando pan.',
      level: 'A1',
      turns: [
        { npc: "Bonjour ! Qu'est-ce que je vous sers ? (¡Hola! ¿Qué le sirvo?)", hint: 'Pide una baguette', expected: "Une baguette, s'il vous plaît", accept: ['baguette', "s'il vous plaît", 'svp'] },
        { npc: 'Avec ceci ? (¿Algo más?)', hint: 'Pide un croissant', expected: "Et un croissant, s'il vous plaît", accept: ['croissant'] },
        { npc: "C'est tout ? Ça fait 3 euros 50. (¿Es todo? Son 3,50€.)", hint: 'Da las gracias', expected: 'Merci beaucoup !', accept: ['merci', 'gracias'] },
      ],
    },
    {
      id: 'fr-conv-2', emoji: '🗺️', title: 'Demander son chemin', scenario: 'Estás perdido en París y necesitas llegar al Louvre.',
      level: 'A1',
      turns: [
        { npc: '(Un passant vous regarde)', hint: 'Llama la atención y pregunta por el Louvre', expected: 'Excusez-moi, où est le Louvre ?', accept: ['excusez', 'louvre', 'où'] },
        { npc: "Allez tout droit, puis tournez à droite. (Siga recto, luego gire a la derecha.)", hint: 'Pregunta si está lejos', expected: "C'est loin ?", accept: ['loin', 'lejos', 'far'] },
        { npc: "Non, c'est à 5 minutes. (No, está a 5 minutos.)", hint: 'Da las gracias', expected: 'Merci beaucoup !', accept: ['merci'] },
      ],
    },
  ],
};
