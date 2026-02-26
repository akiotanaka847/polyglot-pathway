// Runtime translation layer for hardcrafted lesson content
// Hardcrafted lessons have Spanish text; this translates question prompts to native lang

const QUESTION_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    '¿Cómo se lee': 'How do you read',
    '¿Cómo se dice': 'How do you say',
    '¿Cómo se escribe': 'How do you write',
    '¿Qué significa': 'What does ... mean',
    '¿Qué hiragana es': 'Which hiragana is',
    '¿Qué katakana es': 'Which katakana is',
    '¿Qué kanji es': 'Which kanji is',
    '¿Cuál es': 'Which is',
    '¿Orden correcto': 'Correct order',
    'Escribe la lectura de': 'Write the reading of',
    'Escribe en romaji': 'Write in romaji',
    'Escribe la traducción': 'Write the translation',
    'Ordena las sílabas': 'Order the syllables',
    'Selecciona': 'Select',
    'Traduce': 'Translate',
    'Completa': 'Complete',
    'en romaji': 'in romaji',
  },
  fr: {
    '¿Cómo se lee': 'Comment se lit',
    '¿Cómo se dice': 'Comment dit-on',
    '¿Cómo se escribe': 'Comment écrit-on',
    '¿Qué significa': 'Que signifie',
    '¿Qué hiragana es': 'Quel hiragana est',
    '¿Qué katakana es': 'Quel katakana est',
    '¿Qué kanji es': 'Quel kanji est',
    '¿Cuál es': 'Quel est',
    '¿Orden correcto': 'Ordre correct',
    'Escribe la lectura de': 'Écrivez la lecture de',
    'Escribe en romaji': 'Écrivez en romaji',
    'Escribe la traducción': 'Écrivez la traduction',
    'Ordena las sílabas': 'Ordonnez les syllabes',
    'Selecciona': 'Sélectionnez',
    'Traduce': 'Traduisez',
    'Completa': 'Complétez',
    'en romaji': 'en romaji',
  },
  pt: {
    '¿Cómo se lee': 'Como se lê',
    '¿Cómo se dice': 'Como se diz',
    '¿Cómo se escribe': 'Como se escreve',
    '¿Qué significa': 'O que significa',
    '¿Qué hiragana es': 'Qual hiragana é',
    '¿Qué katakana es': 'Qual katakana é',
    '¿Qué kanji es': 'Qual kanji é',
    '¿Cuál es': 'Qual é',
    '¿Orden correcto': 'Ordem correta',
    'Escribe la lectura de': 'Escreva a leitura de',
    'Escribe en romaji': 'Escreva em romaji',
    'Escribe la traducción': 'Escreva a tradução',
    'Ordena las sílabas': 'Ordene as sílabas',
    'Selecciona': 'Selecione',
    'Traduce': 'Traduza',
    'Completa': 'Complete',
    'en romaji': 'em romaji',
  },
  ko: {
    '¿Cómo se lee': '어떻게 읽나요',
    '¿Cómo se dice': '어떻게 말하나요',
    '¿Qué significa': '무슨 뜻인가요',
    '¿Cuál es': '어떤 것이',
    'Escribe la lectura de': '읽기를 쓰세요',
    'Escribe en romaji': '로마자로 쓰세요',
    'Ordena las sílabas': '음절을 정리하세요',
    'Selecciona': '선택하세요',
    'Traduce': '번역하세요',
    'Completa': '완성하세요',
  },
  zh: {
    '¿Cómo se lee': '怎么读',
    '¿Cómo se dice': '怎么说',
    '¿Qué significa': '什么意思',
    '¿Cuál es': '哪个是',
    'Escribe la lectura de': '写出读音',
    'Escribe en romaji': '用罗马字写',
    'Ordena las sílabas': '排列音节',
    'Selecciona': '选择',
    'Traduce': '翻译',
    'Completa': '完成',
  },
  jp: {
    '¿Cómo se lee': 'どう読みますか',
    '¿Cómo se dice': 'どう言いますか',
    '¿Qué significa': 'どういう意味ですか',
    '¿Cuál es': 'どれが',
    'Escribe la lectura de': '読み方を書いてください',
    'Ordena las sílabas': '音節を並べ替えてください',
    'Selecciona': '選んでください',
    'Traduce': '翻訳してください',
    'Completa': '完成してください',
  },
  ru: {
    '¿Cómo se lee': 'Как читается',
    '¿Cómo se dice': 'Как сказать',
    '¿Qué significa': 'Что означает',
    '¿Cuál es': 'Какой',
    'Escribe la lectura de': 'Напишите чтение',
    'Ordena las sílabas': 'Расположите слоги',
    'Selecciona': 'Выберите',
    'Traduce': 'Переведите',
    'Completa': 'Завершите',
  },
  ar: {
    '¿Cómo se lee': 'كيف تُقرأ',
    '¿Cómo se dice': 'كيف تقول',
    '¿Qué significa': 'ماذا تعني',
    '¿Cuál es': 'ما هو',
    'Escribe la lectura de': 'اكتب قراءة',
    'Ordena las sílabas': 'رتب المقاطع',
    'Selecciona': 'اختر',
    'Traduce': 'ترجم',
    'Completa': 'أكمل',
  },
  hi: {
    '¿Cómo se lee': 'कैसे पढ़ा जाता है',
    '¿Cómo se dice': 'कैसे कहते हैं',
    '¿Qué significa': 'इसका क्या अर्थ है',
    '¿Cuál es': 'कौन सा है',
    'Escribe la lectura de': 'पढ़ने का तरीका लिखें',
    'Ordena las sílabas': 'अक्षरों को क्रम में लगाएँ',
    'Selecciona': 'चुनें',
    'Traduce': 'अनुवाद करें',
    'Completa': 'पूरा करें',
  },
};

// Also translate common Spanish words in notes/meanings
const NOTE_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    'Primera letra': 'First letter', 'Se pronuncia como': 'Pronounced as', 'Abre la boca': 'Open your mouth',
    'Consonante': 'Consonant', 'vocal': 'vowel', 'Vocal': 'Vowel', 'Fila': 'Row',
    'se lee': 'is read as', 'versión sonora': 'voiced version', 'lluvia': 'rain', 'mañana': 'morning',
    'azul': 'blue', 'perro': 'dog', 'casa': 'house', 'mar': 'sea', 'arriba': 'above',
    'estación': 'station', 'dinero': 'money', 'té': 'tea', 'río': 'river', 'cerezo': 'cherry tree',
    'montaña': 'mountain', 'lago': 'lake', 'templo': 'temple', 'escuchar': 'to listen',
  },
  fr: {
    'Primera letra': 'Première lettre', 'Se pronuncia como': 'Se prononce comme', 'Abre la boca': 'Ouvrez la bouche',
    'Consonante': 'Consonne', 'vocal': 'voyelle', 'Vocal': 'Voyelle', 'Fila': 'Rangée',
    'se lee': 'se lit', 'versión sonora': 'version sonore', 'lluvia': 'pluie', 'mañana': 'matin',
    'azul': 'bleu', 'perro': 'chien', 'casa': 'maison', 'mar': 'mer', 'arriba': 'en haut',
    'estación': 'gare', 'dinero': 'argent', 'té': 'thé', 'río': 'rivière', 'cerezo': 'cerisier',
    'montaña': 'montagne', 'lago': 'lac', 'templo': 'temple', 'escuchar': 'écouter',
  },
  pt: {
    'Primera letra': 'Primeira letra', 'Se pronuncia como': 'Pronuncia-se como', 'Abre la boca': 'Abra a boca',
    'Consonante': 'Consoante', 'vocal': 'vogal', 'Vocal': 'Vogal', 'Fila': 'Fila',
    'se lee': 'lê-se', 'versión sonora': 'versão sonora', 'lluvia': 'chuva', 'mañana': 'manhã',
    'azul': 'azul', 'perro': 'cão', 'casa': 'casa', 'mar': 'mar', 'arriba': 'acima',
    'estación': 'estação', 'dinero': 'dinheiro', 'té': 'chá', 'río': 'rio', 'cerezo': 'cerejeira',
  },
};

// Title translations
const TITLE_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    'Vocales': 'Vowels', 'Saludos básicos': 'Basic greetings', 'Números': 'Numbers',
    'Familia': 'Family', 'Colores': 'Colors', 'Días': 'Days', 'Comida': 'Food',
    'Cuerpo': 'Body', 'Ropa': 'Clothing', 'Casa': 'Home', 'Transporte': 'Transport',
    'Clima': 'Weather', 'Profesiones': 'Professions', 'Compras': 'Shopping',
    'Verbos': 'Verbs', 'Gramática': 'Grammar', 'Repaso': 'Review',
    'Presentaciones': 'Introductions', 'Partículas': 'Particles', 'Adjetivos': 'Adjectives',
  },
  fr: {
    'Vocales': 'Voyelles', 'Saludos básicos': 'Salutations de base', 'Números': 'Nombres',
    'Familia': 'Famille', 'Colores': 'Couleurs', 'Días': 'Jours', 'Comida': 'Nourriture',
    'Cuerpo': 'Corps', 'Ropa': 'Vêtements', 'Casa': 'Maison', 'Transporte': 'Transport',
    'Clima': 'Météo', 'Profesiones': 'Professions', 'Compras': 'Courses',
    'Verbos': 'Verbes', 'Gramática': 'Grammaire', 'Repaso': 'Révision',
    'Presentaciones': 'Présentations', 'Partículas': 'Particules', 'Adjetivos': 'Adjectifs',
  },
  pt: {
    'Vocales': 'Vogais', 'Saludos básicos': 'Saudações básicas', 'Números': 'Números',
    'Familia': 'Família', 'Colores': 'Cores', 'Días': 'Dias', 'Comida': 'Comida',
    'Cuerpo': 'Corpo', 'Ropa': 'Roupas', 'Casa': 'Casa', 'Transporte': 'Transporte',
    'Clima': 'Clima', 'Profesiones': 'Profissões', 'Compras': 'Compras',
    'Verbos': 'Verbos', 'Gramática': 'Gramática', 'Repaso': 'Revisão',
    'Presentaciones': 'Apresentações', 'Partículas': 'Partículas', 'Adjetivos': 'Adjetivos',
  },
};

function applyPatterns(text: string, patterns: Record<string, string>): string {
  let result = text;
  // Sort by length descending to match longer patterns first
  const sorted = Object.entries(patterns).sort((a, b) => b[0].length - a[0].length);
  for (const [es, translated] of sorted) {
    if (result.includes(es)) {
      result = result.split(es).join(translated);
    }
  }
  return result;
}

export function translateLessonText(text: string | undefined, nativeLang: string): string {
  if (!text) return '';
  if (nativeLang === 'es') return text; // Already in Spanish
  
  // Apply question patterns
  let result = text;
  const qPatterns = QUESTION_PATTERNS[nativeLang];
  if (qPatterns) result = applyPatterns(result, qPatterns);
  
  // Apply note patterns
  const nPatterns = NOTE_PATTERNS[nativeLang];
  if (nPatterns) result = applyPatterns(result, nPatterns);
  
  return result;
}

export function translateLessonTitle(title: string, nativeLang: string): string {
  if (nativeLang === 'es') return title;
  const patterns = TITLE_PATTERNS[nativeLang];
  if (patterns) return applyPatterns(title, patterns);
  // Fallback to English
  if (nativeLang !== 'en') {
    const enPatterns = TITLE_PATTERNS['en'];
    if (enPatterns) return applyPatterns(title, enPatterns);
  }
  return title;
}
