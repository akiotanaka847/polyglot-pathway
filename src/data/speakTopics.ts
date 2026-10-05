// Free-talk topics. Stable ids resolve to audited interface-language labels;
// the Spanish prompt is internal context for the multilingual coach.
export type SpeakTopic = { id: string; emoji: string; title: string; prompt: string; level: 1 | 2 | 3 };

const TITLES: Record<string, string[]> = {
  es: ['Presentarte','Tu día','Familia','Comida','Viajes','Trabajo y estudios','Pasatiempos','Salud y deporte','Tu ciudad','Tecnología','Cine y series','Música','Compras','Clima y estaciones','Amistades','Metas y sueños','Cultura y tradiciones','Noticias','Medio ambiente','Educación','Dinero y ahorro','Debate libre','Contar una historia','Entrevista de trabajo'],
  en: ['Introduce yourself','Your day','Family','Food','Travel','Work and studies','Hobbies','Health and sport','Your city','Technology','Movies and series','Music','Shopping','Weather and seasons','Friends','Goals and dreams','Culture and traditions','News','Environment','Education','Money and saving','Open debate','Tell a story','Job interview'],
  fr: ['Se présenter','Ta journée','Famille','Cuisine','Voyages','Travail et études','Loisirs','Santé et sport','Ta ville','Technologie','Films et séries','Musique','Achats','Météo et saisons','Amitiés','Objectifs et rêves','Culture et traditions','Actualités','Environnement','Éducation','Argent et épargne','Débat libre','Raconter une histoire','Entretien d’embauche'],
  pt: ['Apresentar-se','Seu dia','Família','Comida','Viagens','Trabalho e estudos','Passatempos','Saúde e esporte','Sua cidade','Tecnologia','Cinema e séries','Música','Compras','Clima e estações','Amizades','Metas e sonhos','Cultura e tradições','Notícias','Meio ambiente','Educação','Dinheiro e economia','Debate livre','Contar uma história','Entrevista de emprego'],
  zh: ['自我介绍','你的一天','家庭','美食','旅行','工作和学习','兴趣爱好','健康与运动','你的城市','科技','电影和剧集','音乐','购物','天气与季节','友谊','目标与梦想','文化与传统','新闻','环境','教育','金钱与储蓄','自由辩论','讲故事','工作面试'],
  jp: ['自己紹介','今日の出来事','家族','食べ物','旅行','仕事と勉強','趣味','健康とスポーツ','あなたの街','テクノロジー','映画とドラマ','音楽','買い物','天気と季節','友達','目標と夢','文化と伝統','ニュース','環境','教育','お金と貯金','自由討論','物語を話す','就職面接'],
  ko: ['자기소개','오늘 하루','가족','음식','여행','일과 공부','취미','건강과 운동','내 도시','기술','영화와 드라마','음악','쇼핑','날씨와 계절','친구','목표와 꿈','문화와 전통','뉴스','환경','교육','돈과 저축','자유 토론','이야기하기','취업 면접'],
  ru: ['Знакомство','Твой день','Семья','Еда','Путешествия','Работа и учёба','Увлечения','Здоровье и спорт','Твой город','Технологии','Кино и сериалы','Музыка','Покупки','Погода и времена года','Друзья','Цели и мечты','Культура и традиции','Новости','Окружающая среда','Образование','Деньги и сбережения','Свободная дискуссия','Рассказать историю','Собеседование'],
  ar: ['التعريف بنفسك','يومك','العائلة','الطعام','السفر','العمل والدراسة','الهوايات','الصحة والرياضة','مدينتك','التكنولوجيا','الأفلام والمسلسلات','الموسيقى','التسوق','الطقس والفصول','الصداقات','الأهداف والأحلام','الثقافة والتقاليد','الأخبار','البيئة','التعليم','المال والادخار','نقاش حر','رواية قصة','مقابلة عمل'],
  hi: ['अपना परिचय','आपका दिन','परिवार','खाना','यात्रा','काम और पढ़ाई','शौक','स्वास्थ्य और खेल','आपका शहर','तकनीक','फ़िल्में और सीरीज़','संगीत','खरीदारी','मौसम और ऋतुएँ','दोस्ती','लक्ष्य और सपने','संस्कृति और परंपराएँ','समाचार','पर्यावरण','शिक्षा','पैसा और बचत','खुली बहस','कहानी सुनाना','नौकरी का साक्षात्कार'],
  ro: ['Prezintă-te','Ziua ta','Familie','Mâncare','Călătorii','Muncă și studii','Pasiuni','Sănătate și sport','Orașul tău','Tehnologie','Filme și seriale','Muzică','Cumpărături','Vreme și anotimpuri','Prietenii','Obiective și vise','Cultură și tradiții','Știri','Mediu','Educație','Bani și economii','Dezbatere liberă','Spune o poveste','Interviu de angajare'],
};

export function getSpeakTopicTitle(id: string, nativeLang: string): string {
  const index = SPEAK_TOPICS.findIndex(topic => topic.id === id);
  if (index < 0) return id;
  return (TITLES[nativeLang] || TITLES.es)[index] || SPEAK_TOPICS[index].title;
}

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
