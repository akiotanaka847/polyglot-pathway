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

// ==================== LESSON CONTENT PATTERNS ====================
// Translates notes, meanings, hints and other lesson body text from Spanish
// IMPORTANT: Use COMPLETE sentences/phrases to avoid partial replacements

const LESSON_CONTENT_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    // === COMPLETE NOTE SENTENCES (from jp.ts) ===
    'Primera letra del hiragana. Abre la boca ampliamente.': 'First letter of hiragana. Open your mouth wide.',
    'Se pronuncia como la "i" en español. Dos trazos.': 'Pronounced like "i" in English. Two strokes.',
    'Más cerrada que la "u" española, sin redondear los labios.': 'More closed than English "u", without rounding the lips.',
    'Como la "e" española.': 'Like the English "e".',
    'Como la "o" española.': 'Like the English "o".',
    'Consonante K + vocal. が ぎ ぐ げ ご son sus versiones sonoras (dakuten).': 'Consonant K + vowel. が ぎ ぐ げ ご are their voiced versions (dakuten).',
    '⚠️ し se lee "shi", no "si". ざ じ ず ぜ ぞ son sonoras.': '⚠️ し is read as "shi", not "si". ざ じ ず ぜ ぞ are voiced.',
    '⚠️ ち="chi" (no "ti"), つ="tsu" (no "tu"). だ ぢ づ で ど son sonoras.': '⚠️ ち="chi" (not "ti"), つ="tsu" (not "tu"). だ ぢ づ で ど are voiced.',
    'Sin variantes sonoras. の es la partícula posesiva más común.': 'No voiced variants. の is the most common possessive particle.',
    '⚠️ ふ="fu" (no "hu"). は como partícula se lee "wa". へ como partícula se lee "e".': '⚠️ ふ="fu" (not "hu"). は as a particle is read "wa". へ as a particle is read "e".',
    'Sílabas nasales con M.': 'Nasal syllables with M.',
    'Solo 3 sílabas. Se usan en combinaciones: きゃ(kya), しゅ(shu), etc.': 'Only 3 syllables. Used in combinations: きゃ(kya), しゅ(shu), etc.',
    'La R japonesa es entre R y L española.': 'The Japanese R is between R and L.',
    'を se usa como partícula de objeto directo. ん es la única consonante sola.': 'を is used as a direct object particle. ん is the only standalone consonant.',
    'は行 es la única fila con 3 variantes: は(ha), ば(ba), ぱ(pa).': 'は行 is the only row with 3 variants: は(ha), ば(ba), ぱ(pa).',
    'Consonante + ya/yu/yo pequeño: きゃ(kya), しゅ(shu), ちょ(cho), にゅ(nyu). El ya/yu/yo se escribe pequeño.': 'Consonant + small ya/yu/yo: きゃ(kya), しゅ(shu), ちょ(cho), にゅ(nyu). The ya/yu/yo is written small.',
    'Katakana se usa para palabras extranjeras, onomatopeyas y nombres extranjeros.': 'Katakana is used for foreign words, onomatopoeia, and foreign names.',
    'Mismos sonidos que hiragana, diferente forma.': 'Same sounds as hiragana, different shape.',
    'ー (chōon) alarga la vocal anterior: コーヒー(koohii).': 'ー (chōon) lengthens the previous vowel: コーヒー(koohii).',
    // === MEANINGS (mn field) ===
    'Fila ka': 'Row ka', 'Fila sa': 'Row sa', 'Fila ta': 'Row ta', 'Fila na': 'Row na',
    'Fila ha': 'Row ha', 'Fila ma': 'Row ma', 'Fila ya': 'Row ya', 'Fila ra': 'Row ra',
    'Fila wa + N': 'Row wa + N',
    'Vocal /a/': 'Vowel /a/', 'Vocal /i/': 'Vowel /i/', 'Vocal /u/': 'Vowel /u/',
    'Vocal /e/': 'Vowel /e/', 'Vocal /o/': 'Vowel /o/',
    'Dakuten y Handakuten de は行': 'Dakuten and Handakuten of は行',
    'Vocales en katakana': 'Vowels in katakana',
    'Fila ka (katakana)': 'Row ka (katakana)', 'Fila sa (katakana)': 'Row sa (katakana)',
    'Yōon (拗音)': 'Yōon (拗音)',
    // === EXAMPLE MEANINGS (ex.m field) ===
    'lluvia': 'rain', 'mañana': 'morning', 'azul': 'blue',
    'perro': 'dog', 'casa': 'house', 'mar': 'sea', 'arriba': 'up',
    'estación': 'station', 'dinero': 'money', 'té': 'tea',
    'río': 'river', 'escuchar': 'to listen', 'cerezo': 'cherry blossom',
    'comer': 'to eat', 'mapa': 'map',
    'verano': 'summer', 'gato': 'cat', 'montaña': 'mountain', 'nieve': 'snow',
    'manzana': 'apple', 'agua': 'water', 'bosque': 'forest',
    'flor/nariz': 'flower/nose', 'libro': 'book',
    'América': 'America', 'Inglaterra': 'England',
    'cámera': 'camera', 'café': 'coffee',
    'fútbol': 'football/soccer', 'deportes': 'sports',
    // === MC ANSWER OPTIONS ===
    'Tema': 'Topic', 'Objeto directo': 'Direct object',
    'Dirección': 'Direction', 'Posesión': 'Possession',
    'Posesiva': 'Possessive',
    'Palabras japonesas': 'Japanese words', 'Palabras extranjeras': 'Foreign words',
    'Partículas': 'Particles', 'Verbos': 'Verbs',
    'fuego': 'fire', 'tierra': 'earth', 'aire': 'air',
    'templo': 'temple',
    'tú': 'you', 'él': 'he', 'nosotros': 'we',
    // === QUESTION FRAGMENTS ===
    '¿Cómo se pronuncia': 'How is ... pronounced',
    '¿Para qué se usa': 'What is ... used for',
    '¿Cuándo se usa katakana?': 'When is katakana used?',
    '¿Cuál es la única consonante sola en hiragana?': 'Which is the only standalone consonant in hiragana?',
    '¿Cuál es la versión sonora': 'Which is the voiced version',
    '¿Versión sonora de': 'Voiced version of',
    '¿Sonora de': 'Voiced of',
    '¿Qué partícula es': 'What particle is',
    'Ordena:': 'Order:', 'Ordena las sílabas:': 'Order the syllables:',
    'como partícula?': 'as a particle?',
    'como partícula': 'as a particle',
  },
  fr: {
    // === COMPLETE NOTE SENTENCES ===
    'Primera letra del hiragana. Abre la boca ampliamente.': 'Première lettre du hiragana. Ouvrez la bouche largement.',
    'Se pronuncia como la "i" en español. Dos trazos.': 'Se prononce comme le "i" en français. Deux traits.',
    'Más cerrada que la "u" española, sin redondear los labios.': 'Plus fermée que le "u" français, sans arrondir les lèvres.',
    'Como la "e" española.': 'Comme le "e" français.',
    'Como la "o" española.': 'Comme le "o" français.',
    'Consonante K + vocal. が ぎ ぐ げ ご son sus versiones sonoras (dakuten).': 'Consonne K + voyelle. が ぎ ぐ げ ご sont leurs versions sonores (dakuten).',
    '⚠️ し se lee "shi", no "si". ざ じ ず ぜ ぞ son sonoras.': '⚠️ し se lit "shi", pas "si". ざ じ ず ぜ ぞ sont sonores.',
    '⚠️ ち="chi" (no "ti"), つ="tsu" (no "tu"). だ ぢ づ で ど son sonoras.': '⚠️ ち="chi" (pas "ti"), つ="tsu" (pas "tu"). だ ぢ づ で ど sont sonores.',
    'Sin variantes sonoras. の es la partícula posesiva más común.': 'Pas de variantes sonores. の est la particule possessive la plus courante.',
    '⚠️ ふ="fu" (no "hu"). は como partícula se lee "wa". へ como partícula se lee "e".': '⚠️ ふ="fu" (pas "hu"). は comme particule se lit "wa". へ comme particule se lit "e".',
    'Sílabas nasales con M.': 'Syllabes nasales avec M.',
    'Solo 3 sílabas. Se usan en combinaciones: きゃ(kya), しゅ(shu), etc.': 'Seulement 3 syllabes. Utilisées en combinaisons : きゃ(kya), しゅ(shu), etc.',
    'La R japonesa es entre R y L española.': 'Le R japonais est entre le R et le L français.',
    'を se usa como partícula de objeto directo. ん es la única consonante sola.': 'を est utilisé comme particule d\'objet direct. ん est la seule consonne isolée.',
    'は行 es la única fila con 3 variantes: は(ha), ば(ba), ぱ(pa).': 'は行 est la seule rangée avec 3 variantes : は(ha), ば(ba), ぱ(pa).',
    'Consonante + ya/yu/yo pequeño: きゃ(kya), しゅ(shu), ちょ(cho), にゅ(nyu). El ya/yu/yo se escribe pequeño.': 'Consonne + petit ya/yu/yo : きゃ(kya), しゅ(shu), ちょ(cho), にゅ(nyu). Le ya/yu/yo s\'écrit en petit.',
    'Katakana se usa para palabras extranjeras, onomatopeyas y nombres extranjeros.': 'Le katakana est utilisé pour les mots étrangers, les onomatopées et les noms étrangers.',
    'Mismos sonidos que hiragana, diferente forma.': 'Mêmes sons que le hiragana, forme différente.',
    'ー (chōon) alarga la vocal anterior: コーヒー(koohii).': 'ー (chōon) allonge la voyelle précédente : コーヒー(koohii).',
    // === MEANINGS ===
    'Fila ka': 'Rangée ka', 'Fila sa': 'Rangée sa', 'Fila ta': 'Rangée ta', 'Fila na': 'Rangée na',
    'Fila ha': 'Rangée ha', 'Fila ma': 'Rangée ma', 'Fila ya': 'Rangée ya', 'Fila ra': 'Rangée ra',
    'Fila wa + N': 'Rangée wa + N',
    'Vocal /a/': 'Voyelle /a/', 'Vocal /i/': 'Voyelle /i/', 'Vocal /u/': 'Voyelle /u/',
    'Vocal /e/': 'Voyelle /e/', 'Vocal /o/': 'Voyelle /o/',
    'Dakuten y Handakuten de は行': 'Dakuten et Handakuten de は行',
    'Vocales en katakana': 'Voyelles en katakana',
    'Fila ka (katakana)': 'Rangée ka (katakana)', 'Fila sa (katakana)': 'Rangée sa (katakana)',
    // === EXAMPLE MEANINGS ===
    'lluvia': 'pluie', 'mañana': 'matin', 'azul': 'bleu',
    'perro': 'chien', 'casa': 'maison', 'mar': 'mer', 'arriba': 'en haut',
    'estación': 'gare', 'dinero': 'argent', 'té': 'thé',
    'río': 'rivière', 'escuchar': 'écouter', 'cerezo': 'cerisier',
    'comer': 'manger', 'mapa': 'carte',
    'verano': 'été', 'gato': 'chat', 'montaña': 'montagne', 'nieve': 'neige',
    'manzana': 'pomme', 'agua': 'eau', 'bosque': 'forêt',
    'flor/nariz': 'fleur/nez', 'libro': 'livre',
    'América': 'Amérique', 'Inglaterra': 'Angleterre',
    'cámera': 'caméra', 'café': 'café',
    'fútbol': 'football', 'deportes': 'sports',
    // === MC ANSWER OPTIONS ===
    'Tema': 'Thème', 'Objeto directo': 'Objet direct',
    'Dirección': 'Direction', 'Posesión': 'Possession',
    'Posesiva': 'Possessif',
    'Palabras japonesas': 'Mots japonais', 'Palabras extranjeras': 'Mots étrangers',
    'Partículas': 'Particules', 'Verbos': 'Verbes',
    'fuego': 'feu', 'tierra': 'terre', 'aire': 'air',
    'templo': 'temple',
    'tú': 'toi', 'él': 'lui', 'nosotros': 'nous',
    // === QUESTION FRAGMENTS ===
    '¿Cómo se pronuncia': 'Comment se prononce',
    '¿Para qué se usa': 'À quoi sert',
    '¿Cuándo se usa katakana?': 'Quand utilise-t-on le katakana ?',
    '¿Cuál es la única consonante sola en hiragana?': 'Quelle est la seule consonne isolée en hiragana ?',
    '¿Cuál es la versión sonora': 'Quelle est la version sonore',
    '¿Versión sonora de': 'Version sonore de',
    '¿Sonora de': 'Version sonore de',
    '¿Qué partícula es': 'Quelle particule est',
    'Ordena:': 'Ordonnez :', 'Ordena las sílabas:': 'Ordonnez les syllabes :',
    'como partícula?': 'comme particule ?',
    'como partícula': 'comme particule',
  },
  pt: {
    'Fila ka': 'Linha ka', 'Fila sa': 'Linha sa', 'Fila ta': 'Linha ta',
    'Fila ha': 'Linha ha', 'Fila ma': 'Linha ma', 'Fila na': 'Linha na',
    'Fila wa + N': 'Linha wa + N',
    'Vocal /a/': 'Vogal /a/', 'Vocal /i/': 'Vogal /i/',
    'lluvia': 'chuva', 'perro': 'cão', 'casa': 'casa', 'gato': 'gato',
    'libro': 'livro', 'agua': 'água', 'flor/nariz': 'flor/nariz',
    'montaña': 'montanha', 'verano': 'verão',
  },
};


// ==================== CORE QUESTION HEADS ====================
// These fragments appear in almost every generated question. Without a full
// set per language, the English fallback used to mix languages in one sentence.
const CORE_PATTERNS: Record<string, Record<string, string>> = {
  en: {
    '¿Cómo se lee': 'How do you read', '¿Cómo se dice': 'How do you say', '¿Cómo se escribe': 'How do you write',
    '¿Qué significa': 'What does ... mean', '¿Cuál es el negativo de': 'What is the negative of',
    '¿Cuál es la forma': 'What is the form', '¿Cuál es el kanji de': 'Which is the kanji for',
    '¿Cuál es el': 'Which is', '¿Cuál es la': 'Which is', '¿Cuál es': 'Which is',
    '¿Qué es': 'What is', '¿Para qué se usa': 'What is it used for', '¿Qué partícula': 'Which particle',
    '¿Qué color es': 'What colour is', '¿Qué número es': 'What number is',
    '¿Cuál expresa': 'Which expresses', '¿Cuál representa': 'Which represents',
    'Lectura de': 'Reading of', 'Vocabulario de': 'Vocabulary of', 'Gramática avanzada': 'Advanced grammar',
    '¿Cómo se forma': 'How is it formed', '¿Palabra relacionada con': 'Word related to', '¿Término de': 'Term from',
  },
  fr: {
    '¿Cómo se lee': 'Comment se lit', '¿Cómo se dice': 'Comment dit-on', '¿Cómo se escribe': "Comment s'écrit",
    '¿Qué significa': 'Que signifie', '¿Cuál es el negativo de': 'Quelle est la forme négative de',
    '¿Cuál es la forma': 'Quelle est la forme', '¿Cuál es el kanji de': 'Quel est le kanji de',
    '¿Cuál es el': 'Quel est', '¿Cuál es la': 'Quelle est', '¿Cuál es': 'Quel est',
    '¿Qué es': "Qu'est-ce que", '¿Para qué se usa': 'À quoi sert', '¿Qué partícula': 'Quelle particule',
    '¿Qué color es': 'Quelle couleur est', '¿Qué número es': 'Quel nombre est',
    '¿Cuál expresa': 'Lequel exprime', '¿Cuál representa': 'Lequel représente',
    'Lectura de': 'Lecture de', 'Vocabulario de': 'Vocabulaire de', 'Gramática avanzada': 'Grammaire avancée',
    '¿Cómo se forma': 'Comment se forme', '¿Palabra relacionada con': 'Mot lié à', '¿Término de': 'Terme de',
  },
  pt: {
    '¿Cómo se lee': 'Como se lê', '¿Cómo se dice': 'Como se diz', '¿Cómo se escribe': 'Como se escreve',
    '¿Qué significa': 'O que significa', '¿Cuál es el negativo de': 'Qual é a forma negativa de',
    '¿Cuál es la forma': 'Qual é a forma', '¿Cuál es el kanji de': 'Qual é o kanji de',
    '¿Cuál es el': 'Qual é', '¿Cuál es la': 'Qual é', '¿Cuál es': 'Qual é',
    '¿Qué es': 'O que é', '¿Para qué se usa': 'Para que serve', '¿Qué partícula': 'Qual partícula',
    '¿Qué color es': 'Que cor é', '¿Qué número es': 'Que número é',
    '¿Cuál expresa': 'Qual expressa', '¿Cuál representa': 'Qual representa',
    'Lectura de': 'Leitura de', 'Vocabulario de': 'Vocabulário de', 'Gramática avanzada': 'Gramática avançada',
    '¿Cómo se forma': 'Como se forma', '¿Palabra relacionada con': 'Palavra relacionada a', '¿Término de': 'Termo de',
  },
  zh: {
    '¿Cómo se lee': '怎么读', '¿Cómo se dice': '怎么说', '¿Cómo se escribe': '怎么写',
    '¿Qué significa': '是什么意思', '¿Cuál es el negativo de': '否定形式是什么',
    '¿Cuál es la forma': '形式是什么', '¿Cuál es el kanji de': '汉字是什么',
    '¿Cuál es el': '哪个是', '¿Cuál es la': '哪个是', '¿Cuál es': '哪个是',
    '¿Qué es': '这是什么', '¿Para qué se usa': '用于什么', '¿Qué partícula': '哪个助词',
    '¿Qué color es': '这是什么颜色', '¿Qué número es': '这是哪个数字',
    '¿Cuál expresa': '哪个表达', '¿Cuál representa': '哪个代表',
    'Lectura de': '读音', 'Vocabulario de': '词汇', 'Gramática avanzada': '高级语法',
    '¿Cómo se forma': '如何构成', '¿Palabra relacionada con': '相关词语', '¿Término de': '术语',
  },
  jp: {
    '¿Cómo se lee': 'の読み方は', '¿Cómo se dice': 'はどう言いますか', '¿Cómo se escribe': 'はどう書きますか',
    '¿Qué significa': 'の意味は', '¿Cuál es el negativo de': 'の否定形は',
    '¿Cuál es la forma': 'の形は', '¿Cuál es el kanji de': 'の漢字は',
    '¿Cuál es el': 'どれですか', '¿Cuál es la': 'どれですか', '¿Cuál es': 'どれですか',
    '¿Qué es': 'とは何ですか', '¿Para qué se usa': 'は何に使いますか', '¿Qué partícula': 'どの助詞',
    '¿Qué color es': 'は何色ですか', '¿Qué número es': 'はどの数字ですか',
    '¿Cuál expresa': 'どれが表しますか', '¿Cuál representa': 'どれを表しますか',
    'Lectura de': 'の読み', 'Vocabulario de': 'の語彙', 'Gramática avanzada': '上級文法',
    '¿Cómo se forma': 'はどう作りますか', '¿Palabra relacionada con': 'に関する語', '¿Término de': 'の用語',
  },
  ko: {
    '¿Cómo se lee': '어떻게 읽나요', '¿Cómo se dice': '어떻게 말하나요', '¿Cómo se escribe': '어떻게 쓰나요',
    '¿Qué significa': '무슨 뜻인가요', '¿Cuál es el negativo de': '부정형은 무엇인가요',
    '¿Cuál es la forma': '형태는 무엇인가요', '¿Cuál es el kanji de': '한자는 무엇인가요',
    '¿Cuál es el': '어느 것인가요', '¿Cuál es la': '어느 것인가요', '¿Cuál es': '어느 것인가요',
    '¿Qué es': '무엇인가요', '¿Para qué se usa': '무엇에 쓰나요', '¿Qué partícula': '어떤 조사',
    '¿Qué color es': '무슨 색인가요', '¿Qué número es': '어떤 숫자인가요',
    '¿Cuál expresa': '어느 것이 표현하나요', '¿Cuál representa': '어느 것을 나타내나요',
    'Lectura de': '읽기', 'Vocabulario de': '어휘', 'Gramática avanzada': '고급 문법',
    '¿Cómo se forma': '어떻게 만드나요', '¿Palabra relacionada con': '관련 단어', '¿Término de': '용어',
  },
  ru: {
    '¿Cómo se lee': 'Как читается', '¿Cómo se dice': 'Как сказать', '¿Cómo se escribe': 'Как пишется',
    '¿Qué significa': 'Что значит', '¿Cuál es el negativo de': 'Какая отрицательная форма у',
    '¿Cuál es la forma': 'Какая форма', '¿Cuál es el kanji de': 'Какой кандзи у',
    '¿Cuál es el': 'Какой', '¿Cuál es la': 'Какая', '¿Cuál es': 'Какой',
    '¿Qué es': 'Что это', '¿Para qué se usa': 'Для чего используется', '¿Qué partícula': 'Какая частица',
    '¿Qué color es': 'Какой это цвет', '¿Qué número es': 'Какое это число',
    '¿Cuál expresa': 'Что выражает', '¿Cuál representa': 'Что представляет',
    'Lectura de': 'Чтение', 'Vocabulario de': 'Лексика', 'Gramática avanzada': 'Продвинутая грамматика',
    '¿Cómo se forma': 'Как образуется', '¿Palabra relacionada con': 'Слово, связанное с', '¿Término de': 'Термин из',
  },
  ar: {
    '¿Cómo se lee': 'كيف تُقرأ', '¿Cómo se dice': 'كيف تقول', '¿Cómo se escribe': 'كيف تُكتب',
    '¿Qué significa': 'ما معنى', '¿Cuál es el negativo de': 'ما صيغة النفي لـ',
    '¿Cuál es la forma': 'ما هي صيغة', '¿Cuál es el kanji de': 'ما هو الكانجي لـ',
    '¿Cuál es el': 'أي واحد', '¿Cuál es la': 'أي واحدة', '¿Cuál es': 'أي واحد',
    '¿Qué es': 'ما هو', '¿Para qué se usa': 'فيم يُستخدم', '¿Qué partícula': 'أي أداة',
    '¿Qué color es': 'ما هذا اللون', '¿Qué número es': 'ما هذا الرقم',
    '¿Cuál expresa': 'أي منها يعبر عن', '¿Cuál representa': 'أي منها يمثل',
    'Lectura de': 'قراءة', 'Vocabulario de': 'مفردات', 'Gramática avanzada': 'قواعد متقدمة',
    '¿Cómo se forma': 'كيف تتكون', '¿Palabra relacionada con': 'كلمة مرتبطة بـ', '¿Término de': 'مصطلح من',
  },
  hi: {
    '¿Cómo se lee': 'कैसे पढ़ा जाता है', '¿Cómo se dice': 'कैसे कहते हैं', '¿Cómo se escribe': 'कैसे लिखते हैं',
    '¿Qué significa': 'का अर्थ क्या है', '¿Cuál es el negativo de': 'का नकारात्मक रूप क्या है',
    '¿Cuál es la forma': 'रूप क्या है', '¿Cuál es el kanji de': 'का कांजी क्या है',
    '¿Cuál es el': 'कौन सा है', '¿Cuál es la': 'कौन सी है', '¿Cuál es': 'कौन सा है',
    '¿Qué es': 'क्या है', '¿Para qué se usa': 'किसके लिए उपयोग होता है', '¿Qué partícula': 'कौन सा कारक',
    '¿Qué color es': 'यह कौन सा रंग है', '¿Qué número es': 'यह कौन सी संख्या है',
    '¿Cuál expresa': 'कौन सा व्यक्त करता है', '¿Cuál representa': 'कौन सा दर्शाता है',
    'Lectura de': 'का उच्चारण', 'Vocabulario de': 'की शब्दावली', 'Gramática avanzada': 'उन्नत व्याकरण',
    '¿Cómo se forma': 'कैसे बनता है', '¿Palabra relacionada con': 'से संबंधित शब्द', '¿Término de': 'का शब्द',
  },
  ro: {
    '¿Cómo se lee': 'Cum se citește', '¿Cómo se dice': 'Cum se spune', '¿Cómo se escribe': 'Cum se scrie',
    '¿Qué significa': 'Ce înseamnă', '¿Cuál es el negativo de': 'Care este forma negativă a',
    '¿Cuál es la forma': 'Care este forma', '¿Cuál es el kanji de': 'Care este kanji pentru',
    '¿Cuál es el': 'Care este', '¿Cuál es la': 'Care este', '¿Cuál es': 'Care este',
    '¿Qué es': 'Ce este', '¿Para qué se usa': 'La ce se folosește', '¿Qué partícula': 'Care particulă',
    '¿Qué color es': 'Ce culoare este', '¿Qué número es': 'Ce număr este',
    '¿Cuál expresa': 'Care exprimă', '¿Cuál representa': 'Care reprezintă',
    'Lectura de': 'Citirea', 'Vocabulario de': 'Vocabular de', 'Gramática avanzada': 'Gramatică avansată',
    '¿Cómo se forma': 'Cum se formează', '¿Palabra relacionada con': 'Cuvânt legat de', '¿Término de': 'Termen din',
  },
};

// ==================== CORE FUNCTIONS ====================

function applyPatterns(text: string, patterns: Record<string, string>): string {
  let result = text;
  // Sort by length descending to match longer patterns first
  const sorted = Object.entries(patterns).sort((a, b) => b[0].length - a[0].length);
  for (const [source, translated] of sorted) {
    if (result.includes(source)) {
      // For short patterns (<=3 chars), only replace if it's a standalone word
      if (source.length <= 3) {
        const regex = new RegExp(`(?<![a-záéíóúàèùâêîôûäëïöüñ])${source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-záéíóúàèùâêîôûäëïöüñ])`, 'gi');
        result = result.replace(regex, translated);
      } else {
        result = result.split(source).join(translated);
      }
    }
  }
  return result;
}

// Pattern matching is expensive; memoise per language + string.
const translationCache = new Map<string, string>();

export function translateLessonText(text: string | undefined, nativeLang: string): string {
  if (!text) return '';
  if (nativeLang === 'es') return text;

  const cacheKey = nativeLang + '\u0000' + text;
  const cached = translationCache.get(cacheKey);
  if (cached !== undefined) return cached;

  let result = text;
  
  // Apply all pattern dictionaries for the native language
  const corePatterns = CORE_PATTERNS[nativeLang];
  const qPatterns = QUESTION_PATTERNS[nativeLang];
  const ePatterns = EXPLANATION_PATTERNS[nativeLang];
  const cPatterns = LESSON_CONTENT_PATTERNS[nativeLang];
  if (cPatterns) result = applyPatterns(result, cPatterns); // longest sentences first
  if (corePatterns) result = applyPatterns(result, corePatterns); // question heads before any fallback
  if (ePatterns) result = applyPatterns(result, ePatterns);
  if (qPatterns) result = applyPatterns(result, qPatterns);

  // If native lang is not en/es, also try English as fallback for anything still in Spanish
  if (nativeLang !== 'en' && nativeLang !== 'es') {
    const enC = LESSON_CONTENT_PATTERNS['en'];
    const enE = EXPLANATION_PATTERNS['en'];
    const enQ = QUESTION_PATTERNS['en'];
    if (enC) result = applyPatterns(result, enC);
    if (enE) result = applyPatterns(result, enE);
    if (enQ) result = applyPatterns(result, enQ);
  }

  if (translationCache.size > 20000) translationCache.clear();
  translationCache.set(cacheKey, result);
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
