// Free-talk topics for speaking-only practice. Titles are stored in Spanish
// (the base content language) and translated at runtime like the rest of the app.
export type SpeakTopic = { id: string; emoji: string; title: string; prompt: string; level: 1 | 2 | 3 };

export const SPEAK_TOPICS: SpeakTopic[] = [
  { id: 'self', emoji: '🙋', title: 'Presentarte', prompt: 'Cuéntame quién eres, de dónde vienes y qué haces.', level: 1 },
  { id: 'day', emoji: '🌅', title: 'Tu día', prompt: '¿Qué hiciste hoy? Cuéntame tu rutina.', level: 1 },
  { id: 'family', emoji: '👨‍👩‍👧', title: 'Familia', prompt: 'Háblame de tu familia y de las personas cercanas a ti.', level: 1 },
  { id: 'food', emoji: '🍜', title: 'Comida', prompt: '¿Cuál es tu comida favorita y cómo se prepara?', level: 1 },
  { id: 'travel', emoji: '✈️', title: 'Viajes', prompt: 'Cuéntame un viaje que hiciste o uno que sueñas hacer.', level: 2 },
  { id: 'work', emoji: '💼', title: 'Trabajo y estudios', prompt: 'Describe tu trabajo o tus estudios y qué te gusta de ellos.', level: 2 },
  { id: 'hobbies', emoji: '🎨', title: 'Pasatiempos', prompt: '¿Qué haces en tu tiempo libre? ¿Por qué te gusta?', level: 1 },
  { id: 'health', emoji: '🏃', title: 'Salud y deporte', prompt: 'Habla sobre cómo cuidas tu salud y qué deporte practicas.', level: 2 },
  { id: 'city', emoji: '🏙️', title: 'Tu ciudad', prompt: 'Describe tu ciudad: lo mejor, lo peor y qué cambiarías.', level: 2 },
  { id: 'tech', emoji: '📱', title: 'Tecnología', prompt: '¿Cómo usas la tecnología cada día? ¿Te ayuda o te distrae?', level: 2 },
  { id: 'movies', emoji: '🎬', title: 'Cine y series', prompt: 'Recomiéndame una película o serie y explica por qué.', level: 2 },
  { id: 'music', emoji: '🎵', title: 'Música', prompt: '¿Qué música escuchas y qué sientes al escucharla?', level: 1 },
  { id: 'shopping', emoji: '🛒', title: 'Compras', prompt: 'Cuenta una compra reciente: qué, dónde y por qué.', level: 1 },
  { id: 'weather', emoji: '🌦️', title: 'Clima y estaciones', prompt: '¿Qué clima prefieres y cómo cambia tu vida con las estaciones?', level: 1 },
  { id: 'friends', emoji: '🤝', title: 'Amistades', prompt: 'Háblame de un buen amigo y de cómo se conocieron.', level: 2 },
  { id: 'dreams', emoji: '🌟', title: 'Metas y sueños', prompt: '¿Qué quieres lograr en los próximos cinco años?', level: 2 },
  { id: 'culture', emoji: '🎎', title: 'Cultura y tradiciones', prompt: 'Compara una tradición de tu país con otra que te interese.', level: 3 },
  { id: 'news', emoji: '📰', title: 'Noticias', prompt: 'Comenta una noticia reciente y da tu opinión.', level: 3 },
  { id: 'environment', emoji: '🌍', title: 'Medio ambiente', prompt: '¿Qué problema ambiental te preocupa más y qué harías?', level: 3 },
  { id: 'education', emoji: '📚', title: 'Educación', prompt: '¿Cómo mejorarías el sistema educativo de tu país?', level: 3 },
  { id: 'money', emoji: '💰', title: 'Dinero y ahorro', prompt: 'Explica cómo organizas tu dinero y tus prioridades.', level: 3 },
  { id: 'debate', emoji: '⚖️', title: 'Debate libre', prompt: 'Defiende una opinión polémica con argumentos claros.', level: 3 },
  { id: 'story', emoji: '📖', title: 'Contar una historia', prompt: 'Narra algo divertido o extraño que te haya pasado.', level: 2 },
  { id: 'interview', emoji: '🎤', title: 'Entrevista de trabajo', prompt: 'Responde como en una entrevista: fortalezas y debilidades.', level: 3 },
];
