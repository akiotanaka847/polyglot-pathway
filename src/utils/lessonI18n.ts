// Runtime translation layer for hardcoded Spanish content across the app
// All handcrafted content (lessons, exams, reference) is in Spanish base
// This module translates at display time to the user's native language

// ==================== QUESTION PATTERN TRANSLATIONS ====================

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
    '¿Cuál es el': 'Which is the',
    '¿Cuál es la': 'Which is the',
    '¿Cuál usa': 'Which uses',
    '¿Orden correcto': 'Correct order',
    '¿Qué es': 'What is',
    '¿Qué día es': 'What day is',
    '¿Qué color es': 'What color is',
    '¿Qué número es': 'What number is',
    '¿Qué tipo': 'What type',
    '¿Qué partícula': 'What particle',
    '¿Qué tiempo': 'What weather',
    '¿Qué estación': 'What season',
    '¿Dónde': 'Where',
    '¿Con quién': 'With whom',
    '¿Con qué frecuencia': 'How often',
    '¿Cuánto': 'How much',
    '¿Cuántos años': 'How old',
    '¿Por qué': 'Why',
    '¿Qué hicieron': 'What did they do',
    '¿Qué hará': 'What will he/she do',
    '¿Qué cocinó': 'What did he/she cook',
    '¿Qué bebe': 'What does he/she drink',
    '¿Qué extraña': 'What does he/she miss',
    '¿Dónde vive': 'Where does ... live',
    '¿Dónde trabaja': 'Where does ... work',
    '¿Dónde cenaron': 'Where did they have dinner',
    '¿Cómo va': 'How does ... go',
    '¿Cómo le quedó': 'How did it turn out',
    '¿Cómo haces': 'How do you make',
    '¿Cómo negar': 'How to negate',
    'Escribe la lectura de': 'Write the reading of',
    'Escribe en romaji': 'Write in romaji',
    'Escribe la traducción': 'Write the translation',
    'Ordena las sílabas': 'Order the syllables',
    'Selecciona': 'Select',
    'Traduce': 'Translate',
    'Completa': 'Complete',
    'Conjugación de': 'Conjugation of',
    'Forma potencial de': 'Potential form of',
    'Forma volitiva de': 'Volitional form of',
    'Pasiva de': 'Passive of',
    'Causativa de': 'Causative of',
    'Pasado de': 'Past tense of',
    'Negativo de': 'Negative of',
    'Condicional con': 'Conditional with',
    'Comparativo de': 'Comparative of',
    'Imperfeito de': 'Imperfect of',
    'Pretérito perfeito de': 'Preterite of',
    'Preséntate': 'Introduce yourself',
    'Pide': 'Order/Ask for',
    'Di ': 'Say ',
    'Dites': 'Say',
    'en romaji': 'in romaji',
    '(romaji)': '(romaji)',
    'en japonés': 'in Japanese',
    'en francés': 'in French',
    'en portugués': 'in Portuguese',
    'en coreano': 'in Korean',
    'en chino': 'in Chinese',
    '¿"También" en japonés?': '"Also" in Japanese?',
    '¿"Demasiado"': '"Too much"',
    '¿"Parece que"': '"It seems"',
    '¿"Sin hacer"': '"Without doing"',
    '¿"Mientras"': '"While"',
    '¿"Quiero ir"': '"I want to go"',
    '¿"Nosotros somos"?': '"We are"?',
    '¿"Yo soy" en francés?': '"I am" in French?',
    '¿"Yo tengo"?': '"I have"?',
    '¿"Seguro"': '"Safe"',
    // Answer options
    'Adiós': 'Goodbye', 'Hola': 'Hello', 'Gracias': 'Thank you', 'Perdón': 'Sorry',
    'Por favor': 'Please', 'De nada': "You're welcome",
    'Perro': 'Dog', 'Gato': 'Cat', 'Pez': 'Fish', 'Pájaro': 'Bird',
    'Montaña': 'Mountain', 'Río': 'River', 'Mar': 'Sea', 'Lago': 'Lake',
    'Beber': 'To drink', 'Comer': 'To eat', 'Dormir': 'To sleep', 'Caminar': 'To walk',
    'Estudiante': 'Student', 'Profesor': 'Teacher', 'Médico': 'Doctor', 'Policía': 'Police',
    'Azul': 'Blue', 'Verde': 'Green', 'Rojo': 'Red', 'Blanco': 'White', 'Negro': 'Black',
    'Coche': 'Car', 'Avión': 'Airplane', 'Tren': 'Train', 'Barco': 'Ship',
    'Martes': 'Tuesday', 'Lunes': 'Monday', 'Miércoles': 'Wednesday', 'Domingo': 'Sunday',
    'Jueves': 'Thursday', 'Viernes': 'Friday', 'Sábado': 'Saturday',
    'Barato': 'Cheap', 'Bajo': 'Low/Short', 'Caro/Alto': 'Expensive/Tall', 'Pequeño': 'Small',
    'Futuro': 'Future', 'Experiencia': 'Experience', 'Opinión': 'Opinion', 'Resultado': 'Result',
    'Viaje': 'Trip', 'Preparación': 'Preparation', 'Examen': 'Exam', 'Reunión': 'Meeting',
    'Normal': 'Normal', 'Especial': 'Special', 'Simple': 'Simple', 'Difícil': 'Difficult',
    'Feliz': 'Happy', 'Enojado': 'Angry', 'Lástima': 'Pity', 'Sorpresa': 'Surprise',
    'Alegría': 'Joy', 'Preocupación': 'Worry', 'Tranquilidad': 'Calm', 'Esperanza': 'Hope',
    'Historia': 'History', 'Ciencia': 'Science', 'Cultura': 'Culture', 'Economía': 'Economy',
    'Pasado': 'Past', 'Presente': 'Present', 'Siempre': 'Always',
    'Pregunta': 'Question', 'Explicación': 'Explanation', 'Respuesta': 'Answer',
    'Plan': 'Plan', 'Recuerdo': 'Memory', 'Sueño': 'Dream',
    'Correcto': 'Correct', 'Incorrecto': 'Incorrect', 'Solo formal': 'Formal only', 'Solo escrito': 'Written only',
    'Comer poco': 'Eat little', 'Comer mucho': 'Eat a lot', 'Comer rápido': 'Eat fast', 'Comer demasiado': 'Eat too much',
    'Comer mientras': 'Eat while', 'Antes de comer': 'Before eating', 'Después de comer': 'After eating', 'Sin comer': 'Without eating',
    'Trabajo': 'Work', 'Turismo': 'Tourism', 'Estudiar inglés': 'Study English', 'Familia': 'Family',
    'Fiesta de despedida': 'Farewell party', 'Compras': 'Shopping', 'Viajar': 'Travel',
    'Rico pero picante': 'Tasty but spicy', 'Mal': 'Bad', 'No lo probó': "Didn't try it",
    'Todos los días': 'Every day', 'Cada sábado': 'Every Saturday', 'Cada mes': 'Every month', 'A veces': 'Sometimes',
    'España': 'Spain', 'Osaka': 'Osaka', 'Tokio': 'Tokyo', 'Kioto': 'Kyoto',
    'En autobús': 'By bus', 'Caminando': 'Walking', 'En tren': 'By train', 'En bicicleta': 'By bicycle',
    'Sol': 'Sun', 'Lluvia': 'Rain', 'Nieve': 'Snow', 'Viento': 'Wind',
    'Café': 'Coffee', 'Té': 'Tea', 'Chocolate caliente': 'Hot chocolate', 'Jugo': 'Juice',
    'Escuela': 'School', 'Hospital': 'Hospital', 'Oficina': 'Office', 'Restaurante': 'Restaurant',
    'La comida': 'Food', 'Sus amigos': 'His/her friends', 'Su trabajo': 'His/her job', 'El clima': 'The weather',
    'Drama': 'Drama', 'Horror': 'Horror', 'Comedia': 'Comedy', 'Acción': 'Action',
    'Dormitorio': 'Bedroom', 'Cocina': 'Kitchen', 'Baño': 'Bathroom', 'Sala': 'Living room',
    'Primavera': 'Spring', 'Verano': 'Summer', 'Otoño': 'Autumn', 'Invierno': 'Winter',
    'Olvidar': 'To forget', 'Recordar': 'To remember', 'Pensar': 'To think', 'Soñar': 'To dream',
    'Preocupado': 'Worried', 'Cansado': 'Tired', 'Aburrido': 'Bored',
    'Fallar': 'To fail', 'Intentar': 'To try', 'Tener éxito': 'To succeed', 'Abandonar': 'To quit',
    'Orgulloso': 'Proud', 'Triste': 'Sad',
    'Aproximadamente': 'Approximately', 'Exactamente': 'Exactly', 'Totalmente': 'Totally', 'Nunca': 'Never',
    'Una semana': 'One week', 'Dos semanas': 'Two weeks', 'Un mes': 'One month', 'Tres días': 'Three days',
    'Agregar': 'Add',
    'Vocabulario': 'Vocabulary', 'Gramática': 'Grammar', 'Comprensión lectora': 'Reading comprehension',
    'Expresión oral': 'Speaking', 'Lectura': 'Reading', 'Texto': 'Text',
    'Simulacro': 'Mock exam',
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
    '¿Cuál es el': 'Quel est le',
    '¿Cuál es la': 'Quelle est la',
    '¿Cuál usa': 'Lequel utilise',
    '¿Orden correcto': 'Ordre correct',
    '¿Qué es': "Qu'est-ce que",
    '¿Qué día es': 'Quel jour est',
    '¿Qué color es': 'Quelle couleur est',
    '¿Qué número es': 'Quel nombre est',
    '¿Qué partícula': 'Quelle particule',
    '¿Qué tiempo': 'Quel temps',
    '¿Qué estación': 'Quelle saison',
    '¿Dónde vive': 'Où habite',
    '¿Dónde trabaja': 'Où travaille',
    '¿Dónde cenaron': 'Où ont-ils dîné',
    '¿Dónde': 'Où',
    '¿Con quién': 'Avec qui',
    '¿Con qué frecuencia': 'À quelle fréquence',
    '¿Cuánto': 'Combien',
    '¿Cuántos años': 'Quel âge',
    '¿Por qué': 'Pourquoi',
    '¿Qué hicieron': "Qu'ont-ils fait",
    '¿Qué hará': 'Que fera-t-il/elle',
    '¿Qué cocinó': "Qu'a-t-il/elle cuisiné",
    '¿Qué bebe': 'Que boit-il/elle',
    '¿Qué extraña': 'Que regrette-t-il/elle',
    '¿Cómo va': 'Comment va',
    '¿Cómo le quedó': 'Comment était le résultat',
    '¿Cómo haces': 'Comment fait-on',
    '¿Cómo negar': 'Comment nier',
    'Escribe la lectura de': 'Écrivez la lecture de',
    'Escribe en romaji': 'Écrivez en romaji',
    'Escribe la traducción': 'Écrivez la traduction',
    'Ordena las sílabas': 'Ordonnez les syllabes',
    'Selecciona': 'Sélectionnez',
    'Traduce': 'Traduisez',
    'Completa': 'Complétez',
    'Conjugación de': 'Conjugaison de',
    'Forma potencial de': 'Forme potentielle de',
    'Forma volitiva de': 'Forme volitive de',
    'Pasiva de': 'Passif de',
    'Causativa de': 'Causatif de',
    'Pasado de': 'Passé de',
    'Negativo de': 'Négatif de',
    'Condicional con': 'Conditionnel avec',
    'Comparativo de': 'Comparatif de',
    'Preséntate': 'Présentez-vous',
    'Pide': 'Commandez',
    'Di ': 'Dites ',
    'en romaji': 'en romaji',
    '(romaji)': '(romaji)',
    'en japonés': 'en japonais',
    'en francés': 'en français',
    'en portugués': 'en portugais',
    'Adiós': 'Au revoir', 'Hola': 'Bonjour', 'Gracias': 'Merci', 'Perdón': 'Pardon',
    'Por favor': "S'il vous plaît",
    'Perro': 'Chien', 'Gato': 'Chat', 'Pez': 'Poisson', 'Pájaro': 'Oiseau',
    'Montaña': 'Montagne', 'Río': 'Rivière', 'Mar': 'Mer', 'Lago': 'Lac',
    'Beber': 'Boire', 'Comer': 'Manger', 'Dormir': 'Dormir', 'Caminar': 'Marcher',
    'Estudiante': 'Étudiant', 'Profesor': 'Professeur', 'Médico': 'Médecin', 'Policía': 'Police',
    'Azul': 'Bleu', 'Verde': 'Vert', 'Rojo': 'Rouge', 'Blanco': 'Blanc', 'Negro': 'Noir',
    'Coche': 'Voiture', 'Avión': 'Avion', 'Tren': 'Train', 'Barco': 'Bateau',
    'Martes': 'Mardi', 'Lunes': 'Lundi', 'Miércoles': 'Mercredi', 'Domingo': 'Dimanche',
    'Jueves': 'Jeudi', 'Viernes': 'Vendredi', 'Sábado': 'Samedi',
    'Barato': 'Bon marché', 'Bajo': 'Bas', 'Caro/Alto': 'Cher/Grand', 'Pequeño': 'Petit',
    'Futuro': 'Futur', 'Experiencia': 'Expérience', 'Opinión': 'Opinion', 'Resultado': 'Résultat',
    'Viaje': 'Voyage', 'Preparación': 'Préparation', 'Examen': 'Examen', 'Reunión': 'Réunion',
    'Normal': 'Normal', 'Especial': 'Spécial', 'Simple': 'Simple', 'Difícil': 'Difficile',
    'Feliz': 'Heureux', 'Enojado': 'En colère', 'Lástima': 'Dommage', 'Sorpresa': 'Surprise',
    'Preocupación': 'Inquiétude', 'Tranquilidad': 'Tranquillité', 'Esperanza': 'Espoir',
    'Historia': 'Histoire', 'Ciencia': 'Science', 'Cultura': 'Culture', 'Economía': 'Économie',
    'Pasado': 'Passé', 'Presente': 'Présent', 'Siempre': 'Toujours',
    'Explicación': 'Explication', 'Respuesta': 'Réponse', 'Pregunta': 'Question',
    'Plan': 'Plan', 'Recuerdo': 'Souvenir', 'Sueño': 'Rêve',
    'Correcto': 'Correct', 'Incorrecto': 'Incorrect',
    'Comer demasiado': 'Manger trop', 'Comer mientras': 'Manger en même temps',
    'Antes de comer': 'Avant de manger', 'Después de comer': 'Après avoir mangé', 'Sin comer': 'Sans manger',
    'Trabajo': 'Travail', 'Turismo': 'Tourisme', 'Estudiar inglés': "Étudier l'anglais", 'Familia': 'Famille',
    'Fiesta de despedida': "Fête d'adieu", 'Compras': 'Courses', 'Viajar': 'Voyager',
    'Rico pero picante': 'Bon mais épicé',
    'Todos los días': 'Tous les jours', 'Cada sábado': 'Chaque samedi', 'Cada mes': 'Chaque mois', 'A veces': 'Parfois',
    'España': 'Espagne', 'Tokio': 'Tokyo', 'Kioto': 'Kyoto',
    'En autobús': 'En bus', 'Caminando': 'À pied', 'En tren': 'En train', 'En bicicleta': 'À vélo',
    'Sol': 'Soleil', 'Lluvia': 'Pluie', 'Nieve': 'Neige', 'Viento': 'Vent',
    'Café': 'Café', 'Té': 'Thé', 'Chocolate caliente': 'Chocolat chaud', 'Jugo': 'Jus',
    'Escuela': 'École', 'Hospital': 'Hôpital', 'Oficina': 'Bureau', 'Restaurante': 'Restaurant',
    'La comida': 'La nourriture', 'Sus amigos': 'Ses amis', 'Su trabajo': 'Son travail', 'El clima': 'Le climat',
    'Drama': 'Drame', 'Comedia': 'Comédie', 'Acción': 'Action',
    'Dormitorio': 'Chambre', 'Cocina': 'Cuisine', 'Baño': 'Salle de bain', 'Sala': 'Salon',
    'Primavera': 'Printemps', 'Verano': 'Été', 'Otoño': 'Automne', 'Invierno': 'Hiver',
    'Olvidar': 'Oublier', 'Recordar': 'Se souvenir', 'Pensar': 'Penser', 'Soñar': 'Rêver',
    'Preocupado': 'Inquiet', 'Cansado': 'Fatigué', 'Aburrido': 'Ennuyé',
    'Fallar': 'Échouer', 'Intentar': 'Essayer', 'Tener éxito': 'Réussir', 'Abandonar': 'Abandonner',
    'Orgulloso': 'Fier', 'Triste': 'Triste',
    'Aproximadamente': 'Environ', 'Exactamente': 'Exactement', 'Totalmente': 'Totalement', 'Nunca': 'Jamais',
    'Una semana': 'Une semaine', 'Dos semanas': 'Deux semaines', 'Un mes': 'Un mois', 'Tres días': 'Trois jours',
    'Vocabulario': 'Vocabulaire', 'Gramática': 'Grammaire', 'Comprensión lectora': 'Compréhension écrite',
    'Expresión oral': 'Expression orale', 'Lectura': 'Lecture', 'Texto': 'Texte',
    'Simulacro': 'Examen blanc',
    'Agregar': 'Ajouter',
  },
  pt: {
    '¿Cómo se lee': 'Como se lê',
    '¿Cómo se dice': 'Como se diz',
    '¿Qué significa': 'O que significa',
    '¿Qué es': 'O que é',
    '¿Cuál es': 'Qual é',
    '¿Dónde': 'Onde',
    '¿Cuánto': 'Quanto',
    '¿Por qué': 'Por que',
    'Escribe la lectura de': 'Escreva a leitura de',
    'Escribe en romaji': 'Escreva em romaji',
    'Selecciona': 'Selecione',
    'Traduce': 'Traduza',
    'Completa': 'Complete',
    'en japonés': 'em japonês',
    'en francés': 'em francês',
    'Adiós': 'Adeus', 'Hola': 'Olá', 'Gracias': 'Obrigado',
    'Perro': 'Cão', 'Gato': 'Gato', 'Pez': 'Peixe',
    'Comer': 'Comer', 'Beber': 'Beber', 'Dormir': 'Dormir',
    'Vocabulario': 'Vocabulário', 'Gramática': 'Gramática', 'Comprensión lectora': 'Compreensão de leitura',
    'Expresión oral': 'Expressão oral', 'Simulacro': 'Simulado',
  },
  ko: {
    '¿Qué significa': '무슨 뜻인가요',
    '¿Cómo se lee': '어떻게 읽나요',
    '¿Qué es': '무엇인가요',
    '¿Cuál es': '어떤 것인가요',
    'Selecciona': '선택하세요',
    'Completa': '완성하세요',
    'Vocabulario': '어휘', 'Gramática': '문법', 'Simulacro': '모의시험',
  },
  zh: {
    '¿Qué significa': '什么意思',
    '¿Cómo se lee': '怎么读',
    '¿Qué es': '什么是',
    '¿Cuál es': '哪个是',
    'Selecciona': '选择',
    'Completa': '完成',
    'Vocabulario': '词汇', 'Gramática': '语法', 'Simulacro': '模拟考试',
  },
  jp: {
    '¿Qué significa': 'どういう意味ですか',
    '¿Cómo se lee': 'どう読みますか',
    '¿Qué es': '何ですか',
    '¿Cuál es': 'どれですか',
    'Selecciona': '選んでください',
    'Completa': '完成してください',
    'Vocabulario': '語彙', 'Gramática': '文法', 'Simulacro': '模擬試験',
  },
  ru: {
    '¿Qué significa': 'Что означает',
    '¿Cómo se lee': 'Как читается',
    '¿Qué es': 'Что такое',
    '¿Cuál es': 'Какой',
    'Selecciona': 'Выберите',
    'Completa': 'Завершите',
    'Vocabulario': 'Словарный запас', 'Gramática': 'Грамматика', 'Simulacro': 'Пробный экзамен',
  },
  ar: {
    '¿Qué significa': 'ماذا تعني',
    '¿Cómo se lee': 'كيف تُقرأ',
    '¿Qué es': 'ما هو',
    'Selecciona': 'اختر',
    'Completa': 'أكمل',
    'Vocabulario': 'مفردات', 'Gramática': 'قواعد', 'Simulacro': 'اختبار تجريبي',
  },
  hi: {
    '¿Qué significa': 'इसका क्या अर्थ है',
    '¿Cómo se lee': 'कैसे पढ़ा जाता है',
    '¿Qué es': 'यह क्या है',
    'Selecciona': 'चुनें',
    'Completa': 'पूरा करें',
    'Vocabulario': 'शब्दावली', 'Gramática': 'व्याकरण', 'Simulacro': 'मॉक टेस्ट',
  },
};

// ==================== REFERENCE EXPLANATION TRANSLATIONS ====================
// For grammar explanations and vocab meanings - translate common Spanish phrases

const EXPLANATION_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    'marca el tema': 'marks the topic',
    'Se pronuncia': 'It is pronounced',
    'partícula': 'particle',
    'No confundir': 'Do not confuse',
    'marca el sujeto': 'marks the subject',
    'información nueva': 'new information',
    'Se usa con': 'Used with',
    'objeto que recibe': 'object that receives',
    'la acción del verbo': 'the action of the verb',
    'Indica': 'Indicates',
    'Conecta sustantivos': 'Connects nouns',
    'Forma educada': 'Polite form',
    'Se conjuga': 'It conjugates',
    'Expresa': 'Expresses',
    'Similar a': 'Similar to',
    'se omite': 'is omitted',
    'Generalmente': 'Generally',
    'Excepciones': 'Exceptions',
    'Concuerdan': 'They agree',
    'Yo soy estudiante': 'I am a student',
    'Esto es un bolígrafo': 'This is a pen',
    'Hay un gato': 'There is a cat',
    'Como pan': 'I eat bread',
    'Bebo agua': 'I drink water',
    'Voy a la escuela': 'I go to school',
    'Como en el restaurante': 'I eat at the restaurant',
    'Voy en autobús': 'I go by bus',
    'Mi libro': 'My book',
    'Yo hablo francés': 'I speak French',
    'Soy estudiante': 'I am a student',
    'Tienen hambre': 'They are hungry',
    'No hablo inglés': 'I do not speak English',
    'Nunca come carne': 'He never eats meat',
    'una casa grande blanca': 'a big white house',
    'Vivo en': 'I live in',
    'Comí una manzana': 'I ate an apple',
    'Fui a París': 'I went to Paris',
    'Cuando era pequeño': 'When I was little',
    'Hacía buen tiempo ayer': 'The weather was nice yesterday',
    'Quiero ir a Japón': 'I want to go to Japan',
    'Estoy estudiando ahora': 'I am studying now',
    'Vivo en Tokio': 'I live in Tokyo',
    'por favor': 'please',
    'Tener que': 'To have to',
    'Forma fundamental': 'Fundamental form',
  },
  fr: {
    'marca el tema': 'marque le thème',
    'Se pronuncia': 'Se prononce',
    'partícula': 'particule',
    'No confundir': 'Ne pas confondre',
    'marca el sujeto': 'marque le sujet',
    'información nueva': 'information nouvelle',
    'Se usa con': 'Utilisé avec',
    'objeto que recibe': 'objet qui reçoit',
    'la acción del verbo': "l'action du verbe",
    'Indica': 'Indique',
    'Conecta sustantivos': 'Connecte des noms',
    'Forma educada': 'Forme polie',
    'Se conjuga': 'Se conjugue',
    'Expresa': 'Exprime',
    'Similar a': 'Similaire à',
    'se omite': 'est omis',
    'Generalmente': 'Généralement',
    'Excepciones': 'Exceptions',
    'Concuerdan': 'Ils s\'accordent',
    'Yo soy estudiante': 'Je suis étudiant',
    'Esto es un bolígrafo': "C'est un stylo",
    'Hay un gato': 'Il y a un chat',
    'Como pan': 'Je mange du pain',
    'Bebo agua': "Je bois de l'eau",
    'Voy a la escuela': "Je vais à l'école",
    'Como en el restaurante': 'Je mange au restaurant',
    'Voy en autobús': 'Je prends le bus',
    'Mi libro': 'Mon livre',
    'Yo hablo francés': 'Je parle français',
    'Soy estudiante': 'Je suis étudiant',
    'Tienen hambre': 'Ils ont faim',
    'No hablo inglés': 'Je ne parle pas anglais',
    'Nunca come carne': 'Il ne mange jamais de viande',
    'una casa grande blanca': 'une grande maison blanche',
    'Vivo en': "J'habite à",
    'Comí una manzana': "J'ai mangé une pomme",
    'Fui a París': 'Je suis allé(e) à Paris',
    'Cuando era pequeño': "Quand j'étais petit",
    'Quiero ir a Japón': 'Je veux aller au Japon',
    'Estoy estudiando ahora': "J'étudie en ce moment",
    'por favor': "s'il vous plaît",
  },
  pt: {
    'marca el tema': 'marca o tema',
    'Se pronuncia': 'Pronuncia-se',
    'partícula': 'partícula',
    'marca el sujeto': 'marca o sujeito',
    'Se usa con': 'Usado com',
    'Indica': 'Indica',
    'Expresa': 'Expressa',
    'Similar a': 'Similar a',
    'Generalmente': 'Geralmente',
    'Excepciones': 'Exceções',
    'por favor': 'por favor',
  },
};

// ==================== TITLE TRANSLATIONS ====================

const TITLE_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    'Vocales': 'Vowels', 'Saludos básicos': 'Basic greetings', 'Números': 'Numbers',
    'Familia': 'Family', 'Colores': 'Colors', 'Días': 'Days', 'Comida': 'Food',
    'Cuerpo': 'Body', 'Ropa': 'Clothing', 'Casa': 'Home', 'Transporte': 'Transport',
    'Clima': 'Weather', 'Profesiones': 'Professions', 'Compras': 'Shopping',
    'Verbos': 'Verbs', 'Gramática': 'Grammar', 'Repaso': 'Review',
    'Presentaciones': 'Introductions', 'Partículas': 'Particles', 'Adjetivos': 'Adjectives',
    'Vocabulaire': 'Vocabulary', 'Grammaire': 'Grammar',
    'Comprensión lectora': 'Reading comprehension', 'Expresión oral': 'Speaking',
    'Compréhension écrite': 'Reading comprehension', 'Expression orale': 'Speaking',
    'Vocabulário': 'Vocabulary', 'Compreensão': 'Comprehension',
    'Simulacro': 'Mock exam',
    'Tema': 'Topic', 'Sujeto': 'Subject', 'Objeto directo': 'Direct object',
    'Destino': 'Destination', 'Tiempo': 'Time', 'Ubicación': 'Location',
    'Posesión': 'Possession', 'Modificación': 'Modification',
    'Cortesía': 'Courtesy', 'Deseo': 'Desire',
    'Conexión': 'Connection', 'Negación informal': 'Informal negation',
    'Permiso': 'Permission', 'Obligación': 'Obligation',
    'Apariencia': 'Appearance', 'Rumor': 'Hearsay',
    'Condicionales': 'Conditionals', 'Propósito': 'Purpose',
    'A pesar de': 'Despite', 'Por otro lado': 'On the other hand',
    'Lenguaje honorífico': 'Honorific language',
    'No poder evitar': 'Cannot help but',
    'Verbos esenciales': 'Essential verbs',
    'Acción continua': 'Continuous action',
  },
  fr: {
    'Vocales': 'Voyelles', 'Saludos básicos': 'Salutations de base', 'Números': 'Nombres',
    'Familia': 'Famille', 'Colores': 'Couleurs', 'Días': 'Jours', 'Comida': 'Nourriture',
    'Cuerpo': 'Corps', 'Ropa': 'Vêtements', 'Casa': 'Maison', 'Transporte': 'Transport',
    'Clima': 'Météo', 'Profesiones': 'Professions', 'Compras': 'Courses',
    'Verbos': 'Verbes', 'Gramática': 'Grammaire', 'Repaso': 'Révision',
    'Presentaciones': 'Présentations', 'Partículas': 'Particules', 'Adjetivos': 'Adjectifs',
    'Comprensión lectora': 'Compréhension écrite', 'Expresión oral': 'Expression orale',
    'Vocabulario': 'Vocabulaire',
    'Simulacro': 'Examen blanc',
    'Tema': 'Thème', 'Sujeto': 'Sujet', 'Objeto directo': 'Objet direct',
    'Destino': 'Destination', 'Tiempo': 'Temps', 'Ubicación': 'Emplacement',
    'Posesión': 'Possession', 'Modificación': 'Modification',
    'Cortesía': 'Politesse', 'Deseo': 'Désir',
    'Conexión': 'Connexion', 'Negación informal': 'Négation informelle',
    'Permiso': 'Permission', 'Obligación': 'Obligation',
    'Apariencia': 'Apparence', 'Rumor': 'Ouï-dire',
    'Condicionales': 'Conditionnels', 'Propósito': 'But',
    'A pesar de': 'Malgré', 'Por otro lado': "D'autre part",
    'Lenguaje honorífico': 'Langage honorifique',
    'Verbos esenciales': 'Verbes essentiels',
    'Acción continua': 'Action continue',
  },
  pt: {
    'Vocales': 'Vogais', 'Números': 'Números', 'Familia': 'Família', 'Colores': 'Cores',
    'Gramática': 'Gramática', 'Repaso': 'Revisão', 'Vocabulario': 'Vocabulário',
    'Comprensión lectora': 'Compreensão de leitura', 'Expresión oral': 'Expressão oral',
    'Simulacro': 'Simulado',
    'Tema': 'Tema', 'Sujeto': 'Sujeito', 'Objeto directo': 'Objeto direto',
  },
};

// ==================== CORE FUNCTIONS ====================

function applyPatterns(text: string, patterns: Record<string, string>): string {
  let result = text;
  // Sort by length descending to match longer patterns first
  const sorted = Object.entries(patterns).sort((a, b) => b[0].length - a[0].length);
  for (const [source, translated] of sorted) {
    if (result.includes(source)) {
      result = result.split(source).join(translated);
    }
  }
  return result;
}

export function translateLessonText(text: string | undefined, nativeLang: string): string {
  if (!text) return '';
  if (nativeLang === 'es') return text;
  
  let result = text;
  const qPatterns = QUESTION_PATTERNS[nativeLang];
  if (qPatterns) result = applyPatterns(result, qPatterns);
  
  return result;
}

export function translateLessonTitle(title: string, nativeLang: string): string {
  if (nativeLang === 'es') return title;
  const patterns = TITLE_PATTERNS[nativeLang];
  if (patterns) return applyPatterns(title, patterns);
  if (nativeLang !== 'en') {
    const enPatterns = TITLE_PATTERNS['en'];
    if (enPatterns) return applyPatterns(title, enPatterns);
  }
  return title;
}

export function translateExplanation(text: string, nativeLang: string): string {
  if (!text || nativeLang === 'es') return text;
  const patterns = EXPLANATION_PATTERNS[nativeLang];
  if (patterns) return applyPatterns(text, patterns);
  if (nativeLang !== 'en') {
    const enPatterns = EXPLANATION_PATTERNS['en'];
    if (enPatterns) return applyPatterns(text, enPatterns);
  }
  return text;
}

// Translate exam section names
export function translateSectionName(name: string, nativeLang: string): string {
  if (nativeLang === 'es') return name;
  const patterns = QUESTION_PATTERNS[nativeLang];
  if (patterns) return applyPatterns(name, patterns);
  if (nativeLang !== 'en') {
    const enPatterns = QUESTION_PATTERNS['en'];
    if (enPatterns) return applyPatterns(name, enPatterns);
  }
  return name;
}

// Translate exam title
export function translateExamTitle(title: string, nativeLang: string): string {
  if (nativeLang === 'es') return title;
  // Keep certification name (JLPT N5, DELF A1...) but translate "Simulacro"
  const patterns = TITLE_PATTERNS[nativeLang] || TITLE_PATTERNS['en'];
  if (patterns) return applyPatterns(title, patterns);
  return title;
}

// Translate answer option
export function translateOption(opt: string, nativeLang: string): string {
  if (nativeLang === 'es') return opt;
  const patterns = QUESTION_PATTERNS[nativeLang];
  if (patterns && patterns[opt]) return patterns[opt];
  if (nativeLang !== 'en') {
    const enPatterns = QUESTION_PATTERNS['en'];
    if (enPatterns && enPatterns[opt]) return enPatterns[opt];
  }
  return opt;
}
