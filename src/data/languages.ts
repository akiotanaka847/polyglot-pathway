export interface LangConfig {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  hue: number;
  ttsCode: string;
  levels: string[];
  levelSystem: string;
  script?: string;
  fontClass?: string;
}

export const LANGUAGES: LangConfig[] = [
  { code: 'jp', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', hue: 4, ttsCode: 'ja-JP', levels: ['N5','N4','N3','N2','N1'], levelSystem: 'JLPT', script: 'Japanese', fontClass: 'font-serif-jp' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', hue: 212, ttsCode: 'fr-FR', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', hue: 0, ttsCode: 'zh-CN', levels: ['HSK1','HSK2','HSK3','HSK4','HSK5','HSK6'], levelSystem: 'HSK', script: 'Chinese' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', hue: 45, ttsCode: 'de-DE', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', hue: 140, ttsCode: 'it-IT', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', hue: 120, ttsCode: 'pt-BR', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', hue: 220, ttsCode: 'ko-KR', levels: ['TOPIK1','TOPIK2','TOPIK3','TOPIK4','TOPIK5','TOPIK6'], levelSystem: 'TOPIK', script: 'Korean' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', hue: 230, ttsCode: 'ru-RU', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR', script: 'Cyrillic' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', hue: 160, ttsCode: 'ar-SA', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR', script: 'Arabic' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', hue: 30, ttsCode: 'hi-IN', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR', script: 'Devanagari' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', hue: 350, ttsCode: 'tr-TR', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', hue: 15, ttsCode: 'vi-VN', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', hue: 270, ttsCode: 'th-TH', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR', script: 'Thai' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', hue: 25, ttsCode: 'nl-NL', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', hue: 340, ttsCode: 'pl-PL', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', hue: 200, ttsCode: 'en-US', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', hue: 38, ttsCode: 'es-ES', levels: ['A1','A2','B1','B2','C1','C2'], levelSystem: 'CEFR' },
];

// Languages that can be used as native (for instructions/tips)
export const NATIVE_LANGUAGES = LANGUAGES.map(l => ({ code: l.code, name: l.name, nativeName: l.nativeName, flag: l.flag }));

// Languages available as learning targets (exclude the user's native)
export function getTargetLanguages(nativeCode: string) {
  return LANGUAGES.filter(l => l.code !== nativeCode);
}

export function getLangConfig(code: string): LangConfig {
  return LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
}

export function getLangColor(code: string): string {
  const hue = getLangConfig(code).hue;
  return `hsl(${hue}, 70%, 46%)`;
}

export function getLangColorLight(code: string): string {
  const hue = getLangConfig(code).hue;
  return `hsl(${hue}, 80%, 96%)`;
}

// UI translations for each native language
export const UI: Record<string, Record<string, string>> = {
  es: {
    home: 'Inicio', lessons: 'Lecciones', progress: 'Progreso', practice: 'Práctica', achievements: 'Logros',
    start: 'Empezar', continue: 'Continuar', next: 'Siguiente', check: 'Verificar', skip: 'Saltar',
    correct: '¡Correcto!', incorrect: 'Incorrecto', answer_was: 'La respuesta correcta era',
    lesson_complete: '¡Lección completada!', quiz_passed: '¡Quiz superado!', keep_practicing: 'Sigue practicando',
    excellent: 'Excelente trabajo', perfect: '¡Perfecto!', accuracy: 'Precisión', time: 'Tiempo',
    streak: 'racha', total_xp: 'XP total', flashcards: 'Flashcards', cards: 'tarjetas',
    easy: 'Fácil', medium: 'Regular', hard: 'Difícil', review_complete: '¡Repaso completo!',
    all_cards_reviewed: 'Has repasado todas las tarjetas pendientes.',
    select_language: 'Selecciona tu idioma nativo', choose_to_learn: '¿Qué idioma quieres aprender?',
    learning_path: 'Ruta de aprendizaje', complete_lessons: 'Completa las lecciones de cada nivel',
    unlock_quiz: 'y supera el quiz final (≥70%) para desbloquear el siguiente.',
    steps: 'pasos', completed: 'completadas', final_quiz: 'Quiz Final',
    passed: 'Superado', complete_all: 'Completa las', questions: 'preguntas',
    back: 'Volver', go_home: 'Inicio', view_map: 'Ver mapa', next_lesson: 'Siguiente lección',
    story_mode: 'Modo Historia', culture: 'Cultura', conversation: 'Conversación',
    reference: 'Repositorio', grammar: 'Gramática', vocabulary: 'Vocabulario',
    greeting: 'Saludos', numbers: 'Números', intro: 'Presentación',
    conversation_complete: '¡Conversación completada!', xp_earned: 'XP ganados',
    write_answer: 'Escribe tu respuesta...', hint: 'Pista', listen: 'Escuchar',
    multiple_choice: 'Opción múltiple', write_response: 'Escribe la respuesta',
    order_words: 'Ordena las palabras', reading_comp: 'Comprensión lectora',
    step_of: 'Paso {0} de {1}', question_of: 'Pregunta {0} de {1}',
    free: 'Gratis', no_signup: 'Sin registro', pending: 'pendientes',
    exit_confirm: '¿Seguro que quieres salir?', send: 'Enviar',
    try_again: 'Inténtalo de nuevo', repeat: 'Repetir',
    another_level: 'Otro nivel', other: 'Otro',
    need_70: 'Necesitas 70%', you_got: 'Obtuviste',
    unlocked_next: '¡Has desbloqueado el siguiente nivel!',
    go_to_level: 'Ir al nivel', max_level: '¡Nivel máximo!', repeat_quiz: 'Repetir quiz',
    simulation: 'Simulacros', real_situations: 'Situaciones reales interactivas',
    learn_stories: 'Aprende con narrativas', real_context: 'Contexto real de cada idioma',
    ranks_xp: 'Rangos, XP y mapa de progreso', spaced_rep: 'Repaso con memoria espaciada',
    vocab_flash: 'Vocabulario', correct_count: 'Correctas', total: 'Total',
    back_to_map: 'Volver al mapa', confirm: 'Confirmar',
    see_result: 'Ver resultado', coming_soon: 'Próximamente...',
    select_lang_level: 'Selecciona idioma y nivel para repasar con repetición espaciada.',
    change_native: 'Cambiar idioma nativo', your_languages: 'Tus idiomas',
    add_language: 'Agregar idioma', world_progress: 'Tu progreso en el mundo',
    days_streak: 'días de racha', rank: 'Rango',
    culture_context: 'Cultura & Contexto', language_lives_in: 'El idioma vive dentro de su cultura.',
    read: 'Leído', fun_fact: 'Dato curioso',
    practice_conv: 'Práctica conversacional', simulate_real: 'Simula situaciones reales.',
    write_in_language: 'Escribe en el idioma...', model_answer: 'Respuesta modelo',
    turn_of: 'Turno {0} de {1}', card_of: 'Carta {0}/{1}',
    front_tap: 'Anverso — toca para ver la respuesta', back_did_know: 'Reverso — ¿Lo sabías?',
    chapter: 'Capítulo', grammar_ref: 'Referencia gramatical',
    vocab_ref: 'Glosario de vocabulario', search: 'Buscar...',
    polyglot_app: 'App Políglota', learn: 'Aprende', and: 'y', more_langs: 'más idiomas',
    change_language: 'Cambiar idioma',
  },
  en: {
    home: 'Home', lessons: 'Lessons', progress: 'Progress', practice: 'Practice', achievements: 'Achievements',
    start: 'Start', continue: 'Continue', next: 'Next', check: 'Check', skip: 'Skip',
    correct: 'Correct!', incorrect: 'Incorrect', answer_was: 'The correct answer was',
    lesson_complete: 'Lesson completed!', quiz_passed: 'Quiz passed!', keep_practicing: 'Keep practicing',
    excellent: 'Excellent work', perfect: 'Perfect!', accuracy: 'Accuracy', time: 'Time',
    streak: 'streak', total_xp: 'Total XP', flashcards: 'Flashcards', cards: 'cards',
    easy: 'Easy', medium: 'Medium', hard: 'Hard', review_complete: 'Review complete!',
    all_cards_reviewed: 'You have reviewed all pending cards.',
    select_language: 'Select your native language', choose_to_learn: 'Which language do you want to learn?',
    learning_path: 'Learning path', complete_lessons: 'Complete the lessons at each level',
    unlock_quiz: 'and pass the final quiz (≥70%) to unlock the next.',
    steps: 'steps', completed: 'completed', final_quiz: 'Final Quiz',
    passed: 'Passed', complete_all: 'Complete all', questions: 'questions',
    back: 'Back', go_home: 'Home', view_map: 'View map', next_lesson: 'Next lesson',
    story_mode: 'Story Mode', culture: 'Culture', conversation: 'Conversation',
    reference: 'Reference', grammar: 'Grammar', vocabulary: 'Vocabulary',
    greeting: 'Greetings', numbers: 'Numbers', intro: 'Introduction',
    conversation_complete: 'Conversation completed!', xp_earned: 'XP earned',
    write_answer: 'Write your answer...', hint: 'Hint', listen: 'Listen',
    multiple_choice: 'Multiple choice', write_response: 'Write the answer',
    order_words: 'Order the words', reading_comp: 'Reading comprehension',
    step_of: 'Step {0} of {1}', question_of: 'Question {0} of {1}',
    free: 'Free', no_signup: 'No signup', pending: 'pending',
    exit_confirm: 'Are you sure you want to exit?', send: 'Send',
    try_again: 'Try again', repeat: 'Repeat',
    another_level: 'Another level', other: 'Other',
    need_70: 'You need 70%', you_got: 'You got',
    unlocked_next: 'You unlocked the next level!',
    go_to_level: 'Go to level', max_level: 'Max level!', repeat_quiz: 'Repeat quiz',
    simulation: 'Mock exams', real_situations: 'Real interactive situations',
    learn_stories: 'Learn with stories', real_context: 'Real context for each language',
    ranks_xp: 'Ranks, XP and progress map', spaced_rep: 'Spaced repetition review',
    vocab_flash: 'Vocabulary', correct_count: 'Correct', total: 'Total',
    back_to_map: 'Back to map', confirm: 'Confirm',
    see_result: 'See result', coming_soon: 'Coming soon...',
    select_lang_level: 'Select language and level to review with spaced repetition.',
    change_native: 'Change native language', your_languages: 'Your languages',
    add_language: 'Add language', world_progress: 'Your progress in the world',
    days_streak: 'day streak', rank: 'Rank',
    culture_context: 'Culture & Context', language_lives_in: 'Language lives within its culture.',
    read: 'Read', fun_fact: 'Fun fact',
    practice_conv: 'Conversation practice', simulate_real: 'Simulate real situations.',
    write_in_language: 'Write in the language...', model_answer: 'Model answer',
    turn_of: 'Turn {0} of {1}', card_of: 'Card {0}/{1}',
    front_tap: 'Front — tap to see the answer', back_did_know: 'Back — Did you know it?',
    chapter: 'Chapter', grammar_ref: 'Grammar reference',
    vocab_ref: 'Vocabulary glossary', search: 'Search...',
    polyglot_app: 'Polyglot App', learn: 'Learn', and: 'and', more_langs: 'more languages',
    change_language: 'Change language',
  },
  pt: {
    home: 'Início', lessons: 'Lições', progress: 'Progresso', practice: 'Prática', achievements: 'Conquistas',
    start: 'Começar', continue: 'Continuar', next: 'Próximo', check: 'Verificar', skip: 'Pular',
    correct: 'Correto!', incorrect: 'Incorreto', answer_was: 'A resposta correta era',
    lesson_complete: 'Lição concluída!', quiz_passed: 'Quiz aprovado!', keep_practicing: 'Continue praticando',
    excellent: 'Excelente trabalho', perfect: 'Perfeito!', accuracy: 'Precisão', time: 'Tempo',
    streak: 'sequência', total_xp: 'XP total', flashcards: 'Flashcards', cards: 'cartões',
    easy: 'Fácil', medium: 'Médio', hard: 'Difícil', review_complete: 'Revisão completa!',
    all_cards_reviewed: 'Você revisou todos os cartões pendentes.',
    select_language: 'Selecione seu idioma nativo', choose_to_learn: 'Qual idioma você quer aprender?',
    learning_path: 'Caminho de aprendizado', complete_lessons: 'Complete as lições de cada nível',
    unlock_quiz: 'e passe no quiz final (≥70%) para desbloquear o próximo.',
    steps: 'passos', completed: 'concluídas', final_quiz: 'Quiz Final',
    passed: 'Aprovado', complete_all: 'Complete todas', questions: 'perguntas',
    back: 'Voltar', go_home: 'Início', view_map: 'Ver mapa', next_lesson: 'Próxima lição',
    story_mode: 'Modo História', culture: 'Cultura', conversation: 'Conversação',
    reference: 'Referência', grammar: 'Gramática', vocabulary: 'Vocabulário',
    greeting: 'Saudações', numbers: 'Números', intro: 'Apresentação',
    conversation_complete: 'Conversação concluída!', xp_earned: 'XP ganhos',
    write_answer: 'Escreva sua resposta...', hint: 'Dica', listen: 'Ouvir',
    multiple_choice: 'Múltipla escolha', write_response: 'Escreva a resposta',
    order_words: 'Ordene as palavras', reading_comp: 'Compreensão de leitura',
    step_of: 'Passo {0} de {1}', question_of: 'Pergunta {0} de {1}',
    free: 'Grátis', no_signup: 'Sem cadastro', pending: 'pendentes',
    exit_confirm: 'Tem certeza que deseja sair?', send: 'Enviar',
    try_again: 'Tente novamente', repeat: 'Repetir',
    another_level: 'Outro nível', other: 'Outro',
    need_70: 'Você precisa de 70%', you_got: 'Você obteve',
    unlocked_next: 'Você desbloqueou o próximo nível!',
    go_to_level: 'Ir para o nível', max_level: 'Nível máximo!', repeat_quiz: 'Repetir quiz',
    simulation: 'Simulados', real_situations: 'Situações reais interativas',
    learn_stories: 'Aprenda com histórias', real_context: 'Contexto real de cada idioma',
    ranks_xp: 'Ranks, XP e mapa de progresso', spaced_rep: 'Revisão com repetição espaçada',
    vocab_flash: 'Vocabulário', correct_count: 'Corretas', total: 'Total',
    back_to_map: 'Voltar ao mapa', confirm: 'Confirmar',
    see_result: 'Ver resultado', coming_soon: 'Em breve...',
    select_lang_level: 'Selecione idioma e nível para revisar com repetição espaçada.',
    change_native: 'Mudar idioma nativo', your_languages: 'Seus idiomas',
    add_language: 'Adicionar idioma', world_progress: 'Seu progresso no mundo',
    days_streak: 'dias de sequência', rank: 'Rank',
    culture_context: 'Cultura & Contexto', language_lives_in: 'O idioma vive dentro da sua cultura.',
    read: 'Lido', fun_fact: 'Curiosidade',
    practice_conv: 'Prática de conversação', simulate_real: 'Simule situações reais.',
    write_in_language: 'Escreva no idioma...', model_answer: 'Resposta modelo',
    turn_of: 'Turno {0} de {1}', card_of: 'Cartão {0}/{1}',
    front_tap: 'Frente — toque para ver a resposta', back_did_know: 'Verso — Você sabia?',
    chapter: 'Capítulo', grammar_ref: 'Referência gramatical',
    vocab_ref: 'Glossário de vocabulário', search: 'Buscar...',
    polyglot_app: 'App Poliglota', learn: 'Aprenda', and: 'e', more_langs: 'mais idiomas',
    change_language: 'Mudar idioma',
  },
  fr: {
    home: 'Accueil', lessons: 'Leçons', progress: 'Progrès', practice: 'Pratique', achievements: 'Succès',
    start: 'Commencer', continue: 'Continuer', next: 'Suivant', check: 'Vérifier', skip: 'Passer',
    correct: 'Correct !', incorrect: 'Incorrect', answer_was: 'La bonne réponse était',
    lesson_complete: 'Leçon terminée !', quiz_passed: 'Quiz réussi !', keep_practicing: 'Continue à pratiquer',
    excellent: 'Excellent travail', perfect: 'Parfait !', accuracy: 'Précision', time: 'Temps',
    streak: 'série', total_xp: 'XP total', flashcards: 'Flashcards', cards: 'cartes',
    easy: 'Facile', medium: 'Moyen', hard: 'Difficile', review_complete: 'Révision terminée !',
    all_cards_reviewed: 'Vous avez révisé toutes les cartes en attente.',
    select_language: 'Sélectionnez votre langue maternelle', choose_to_learn: 'Quelle langue voulez-vous apprendre ?',
    learning_path: "Parcours d'apprentissage", complete_lessons: 'Complétez les leçons de chaque niveau',
    unlock_quiz: 'et réussissez le quiz final (≥70%) pour débloquer le suivant.',
    steps: 'étapes', completed: 'terminées', final_quiz: 'Quiz Final',
    passed: 'Réussi', complete_all: 'Complétez toutes les', questions: 'questions',
    back: 'Retour', go_home: 'Accueil', view_map: 'Voir la carte', next_lesson: 'Leçon suivante',
    story_mode: 'Mode Histoire', culture: 'Culture', conversation: 'Conversation',
    reference: 'Référence', grammar: 'Grammaire', vocabulary: 'Vocabulaire',
    greeting: 'Salutations', numbers: 'Nombres', intro: 'Présentation',
    conversation_complete: 'Conversation terminée !', xp_earned: 'XP gagnés',
    write_answer: 'Écrivez votre réponse...', hint: 'Indice', listen: 'Écouter',
    multiple_choice: 'Choix multiple', write_response: 'Écrivez la réponse',
    order_words: 'Ordonnez les mots', reading_comp: 'Compréhension écrite',
    step_of: 'Étape {0} sur {1}', question_of: 'Question {0} sur {1}',
    free: 'Gratuit', no_signup: 'Sans inscription', pending: 'en attente',
    exit_confirm: 'Êtes-vous sûr de vouloir quitter ?', send: 'Envoyer',
    try_again: 'Réessayer', repeat: 'Répéter',
    another_level: 'Autre niveau', other: 'Autre',
    need_70: 'Il faut 70%', you_got: 'Vous avez obtenu',
    unlocked_next: 'Vous avez débloqué le niveau suivant !',
    go_to_level: 'Aller au niveau', max_level: 'Niveau maximum !', repeat_quiz: 'Refaire le quiz',
    simulation: 'Examens blancs', real_situations: 'Situations réelles interactives',
    learn_stories: 'Apprenez avec des histoires', real_context: 'Contexte réel de chaque langue',
    ranks_xp: 'Rangs, XP et carte de progrès', spaced_rep: 'Révision avec répétition espacée',
    vocab_flash: 'Vocabulaire', correct_count: 'Correctes', total: 'Total',
    back_to_map: 'Retour à la carte', confirm: 'Confirmer',
    see_result: 'Voir le résultat', coming_soon: 'Bientôt...',
    select_lang_level: 'Sélectionnez la langue et le niveau pour réviser.',
    change_native: 'Changer de langue maternelle', your_languages: 'Vos langues',
    add_language: 'Ajouter une langue', world_progress: 'Votre progrès dans le monde',
    days_streak: 'jours de série', rank: 'Rang',
    culture_context: 'Culture & Contexte', language_lives_in: 'La langue vit au sein de sa culture.',
    read: 'Lu', fun_fact: 'Le saviez-vous',
    practice_conv: 'Pratique conversationnelle', simulate_real: 'Simulez des situations réelles.',
    write_in_language: 'Écrivez dans la langue...', model_answer: 'Réponse modèle',
    turn_of: 'Tour {0} sur {1}', card_of: 'Carte {0}/{1}',
    front_tap: 'Recto — touchez pour voir la réponse', back_did_know: 'Verso — Le saviez-vous ?',
    chapter: 'Chapitre', grammar_ref: 'Référence grammaticale',
    vocab_ref: 'Glossaire de vocabulaire', search: 'Rechercher...',
    polyglot_app: 'App Polyglotte', learn: 'Apprenez', and: 'et', more_langs: 'langues supplémentaires',
    change_language: 'Changer de langue',
  },
};

// Fallback: if user's native language has no UI translations, fall back to English, then Spanish
export function t(key: string, nativeLang: string): string {
  return UI[nativeLang]?.[key] || UI.en?.[key] || UI.es?.[key] || key;
}

// Format template strings like "Step {0} of {1}"
export function tf(key: string, nativeLang: string, ...args: (string | number)[]): string {
  let str = t(key, nativeLang);
  args.forEach((a, i) => { str = str.replace(`{${i}}`, String(a)); });
  return str;
}
