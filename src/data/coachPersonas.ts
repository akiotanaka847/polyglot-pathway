// A named practice partner per learning language (Stimuler's "Sarah" idea).
export type Persona = { name: string; avatar: string };

export const COACH_PERSONAS: Record<string, Persona> = {
  en: { name: 'Sarah', avatar: '👩🏼' },
  es: { name: 'Lucía', avatar: '👩🏽' },
  fr: { name: 'Sophie', avatar: '👩🏻‍🦰' },
  pt: { name: 'Ana', avatar: '👩🏽‍🦱' },
  zh: { name: 'Lìli', avatar: '👩🏻' },
  jp: { name: 'Yuki', avatar: '👧🏻' },
  ko: { name: 'Jiwoo', avatar: '🧑🏻' },
  ru: { name: 'Katya', avatar: '👱🏻‍♀️' },
  ar: { name: 'Layla', avatar: '🧕🏽' },
  hi: { name: 'Priya', avatar: '👩🏾' },
  ro: { name: 'Ioana', avatar: '👩🏼‍🦰' },
};

export const getPersona = (lang: string): Persona => COACH_PERSONAS[lang] || COACH_PERSONAS.en;
