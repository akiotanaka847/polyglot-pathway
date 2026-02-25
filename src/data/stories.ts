import { StoryData } from './types';

export const STORIES: Record<string, StoryData> = {
  jp: {
    avatar: '🧑‍💼',
    protagonist: 'Kenji (けんじ)',
    subtitle: 'Un joven mexicano descubriendo Japón',
    chapters: [
      {
        title: 'Llegada a Tokio',
        level: 'N5',
        scenes: [
          {
            id: 'jp-s1-1',
            title: 'En el aeropuerto',
            setting: 'Kenji acaba de aterrizar en Narita. Es su primer día en Japón.',
            image_emoji: '✈️',
            color: 'hsl(4, 80%, 96%)',
            dialogue: [
              { speaker: 'narrador', avatar: '📖', text: 'Kenji sale del avión y busca la salida.', tr: '' },
              { speaker: 'Staff', avatar: '👩‍✈️', text: 'こんにちは！ようこそ！', tr: '¡Hola! ¡Bienvenido!' },
              { speaker: 'Kenji', avatar: '🧑‍💼', text: 'こんにちは。すみません、えきはどこですか？', tr: 'Hola. Disculpe, ¿dónde está la estación?' },
              { speaker: 'Staff', avatar: '👩‍✈️', text: 'まっすぐいってください。', tr: 'Siga recto, por favor.' },
              { speaker: 'Kenji', avatar: '🧑‍💼', text: 'ありがとうございます！', tr: '¡Muchas gracias!' },
            ],
            lesson: 'すみません se usa para llamar la atención educadamente. まっすぐ significa "recto/derecho".',
            vocab: ['こんにちは', 'すみません', 'えき', 'どこ', 'まっすぐ', 'ありがとう'],
            quiz: { q: '¿Qué le pregunta Kenji al staff?', opts: ['Dónde está el baño', 'Dónde está la estación', 'Cómo se llama', 'Qué hora es'], ans: 1 },
          },
          {
            id: 'jp-s1-2',
            title: 'Primera comida',
            setting: 'Kenji entra a un pequeño restaurante de ramen cerca de la estación.',
            image_emoji: '🍜',
            color: 'hsl(36, 90%, 95%)',
            dialogue: [
              { speaker: 'narrador', avatar: '📖', text: 'Kenji tiene hambre y ve un restaurante.', tr: '' },
              { speaker: 'Chef', avatar: '👨‍🍳', text: 'いらっしゃいませ！', tr: '¡Bienvenido!' },
              { speaker: 'Kenji', avatar: '🧑‍💼', text: 'ラーメンをください。', tr: 'Ramen, por favor.' },
              { speaker: 'Chef', avatar: '👨‍🍳', text: 'おみずもいりますか？', tr: '¿También quiere agua?' },
              { speaker: 'Kenji', avatar: '🧑‍💼', text: 'はい、おねがいします。', tr: 'Sí, por favor.' },
            ],
            lesson: 'いらっしゃいませ es el saludo de bienvenida en tiendas y restaurantes. ください = por favor (dame).',
            vocab: ['いらっしゃいませ', 'ラーメン', 'ください', 'おみず', 'おねがいします'],
            quiz: { q: '¿Qué pide Kenji?', opts: ['Sushi', 'Ramen', 'Tempura', 'Udon'], ans: 1 },
          },
        ],
      },
    ],
  },
  fr: {
    avatar: '👩',
    protagonist: 'Léa',
    subtitle: 'Una joven descubriendo Francia',
    chapters: [
      {
        title: 'Arrivée à Paris',
        level: 'A1',
        scenes: [
          {
            id: 'fr-s1-1',
            title: "À l'aéroport",
            setting: "Léa arrive à l'aéroport Charles de Gaulle. C'est son premier jour à Paris.",
            image_emoji: '✈️',
            color: 'hsl(212, 50%, 94%)',
            dialogue: [
              { speaker: 'narrador', avatar: '📖', text: "Léa sort de l'avion et cherche la sortie.", tr: 'Léa sale del avión y busca la salida.' },
              { speaker: 'Agent', avatar: '👮', text: 'Bonjour ! Bienvenue à Paris !', tr: '¡Hola! ¡Bienvenida a París!' },
              { speaker: 'Léa', avatar: '👩', text: "Bonjour ! Excusez-moi, où est le métro ?", tr: 'Hola. Disculpe, ¿dónde está el metro?' },
              { speaker: 'Agent', avatar: '👮', text: "Allez tout droit, puis à gauche.", tr: 'Siga recto, luego a la izquierda.' },
              { speaker: 'Léa', avatar: '👩', text: 'Merci beaucoup !', tr: '¡Muchas gracias!' },
            ],
            lesson: '"Excusez-moi" es la forma educada de llamar la atención. "Tout droit" significa recto.',
            vocab: ['Bonjour', 'Excusez-moi', 'le métro', 'tout droit', 'à gauche', 'Merci'],
            quiz: { q: '¿Qué busca Léa?', opts: ['Un taxi', 'El metro', 'Un hotel', 'Un café'], ans: 1 },
          },
          {
            id: 'fr-s1-2',
            title: 'Au café',
            setting: 'Léa se sienta en un café parisino.',
            image_emoji: '☕',
            color: 'hsl(36, 90%, 95%)',
            dialogue: [
              { speaker: 'narrador', avatar: '📖', text: 'Léa entre dans un café typiquement parisien.', tr: 'Léa entra en un café típicamente parisino.' },
              { speaker: 'Serveur', avatar: '🧑‍🍳', text: "Bonjour ! Qu'est-ce que vous désirez ?", tr: '¡Hola! ¿Qué desea?' },
              { speaker: 'Léa', avatar: '👩', text: "Un café et un croissant, s'il vous plaît.", tr: 'Un café y un croissant, por favor.' },
              { speaker: 'Serveur', avatar: '🧑‍🍳', text: "Tout de suite !", tr: '¡Enseguida!' },
              { speaker: 'Léa', avatar: '👩', text: "C'est combien ?", tr: '¿Cuánto cuesta?' },
            ],
            lesson: '"S\'il vous plaît" es indispensable en francés. "C\'est combien" se usa para preguntar el precio.',
            vocab: ['café', 'croissant', "s'il vous plaît", "C'est combien", 'Tout de suite'],
            quiz: { q: '¿Qué pide Léa?', opts: ['Thé et pain', 'Café et croissant', 'Vin et fromage', 'Eau et salade'], ans: 1 },
          },
        ],
      },
    ],
  },
};
