# Revisión completa: cada nivel y cada sección en el idioma correcto

## Objetivo
Comprobar los 11 idiomas, nivel por nivel y sección por sección, y corregir todo lo que salga en un idioma equivocado o no funcione. Primero se revisa todo y se anota cada fallo; después se corrige.

## 1. Revisión automática (todos los idiomas, todos los niveles)
Una prueba recorre cada combinación de "idioma que hablas" × "idioma que aprendes" × nivel en:
- **Lecciones**: las palabras que se enseñan están en el idioma que se aprende, y las explicaciones y preguntas en tu idioma.
- **Quizzes de fin de nivel**: hay preguntas, cada una tiene su respuesta correcta y las opciones no se repiten.
- **Simulacros**: hay simulacro en cada nivel, con sus secciones (escuchar, leer, escribir, hablar) y textos en el idioma correcto.
- **Repositorio** (gramática y vocabulario): hay contenido en cada nivel y está en el idioma que corresponde.
- **Historias, Cultura y Slang**: el texto que se practica está en el idioma que se aprende y las ayudas en tu idioma.
- **Hablar y Conversación**: los temas tienen nombre en los 11 idiomas.

Para cada fallo se anota el idioma, el nivel, la sección y un ejemplo.

## 2. Revisión en pantalla
Se recorre la app como un usuario real, en celular y en computadora, con tres perfiles:
- Habla francés, aprende inglés, japonés y español
- Habla inglés, aprende coreano y ruso
- Habla español, aprende portugués y árabe

En cada perfil se abre el primer nivel, uno intermedio y el último, y en cada uno una lección, el quiz y el simulacro. También se revisan Repositorio, Historias, Cultura, Hablar y Conversación. Se toman capturas y se buscan textos en el idioma equivocado, botones que no responden y partes que se cortan.

## 3. Correcciones
- Completar o traducir cualquier texto que salga en el idioma equivocado.
- Agregar contenido donde un nivel esté vacío o tenga muy poco.
- Arreglar respuestas mal marcadas, opciones repetidas o pantallas rotas.
- Mantener el mismo estilo de botones en las secciones que todavía usan el estilo viejo (Historias, Cultura, Repositorio, Inicio).

## 4. Resultado
- Las pruebas automáticas quedan guardadas para detectar este tipo de error en futuras actualizaciones.
- Te entrego una lista corta: qué estaba mal, qué se arregló y qué queda pendiente (por ejemplo, lo que dependa de un micrófono real).

## Detalles técnicos
- Nueva prueba `src/test/content-audit.test.ts` que itera `LANGUAGES` × natives sobre `getLessonData`, `QUIZ_DATA`, `EXAM_DATA`/`buildExamFromLessons`, `reference.ts`, `stories.ts`/`storyI18n.ts`, `culture.ts`/`cultureI18n.ts`, `slang.ts` y `speakTopics.ts`.
- Detector de idioma por escritura (kana/hangul/han/cirílico/árabe/devanagari) y por palabras frecuentes del español/inglés para los idiomas con alfabeto latino; cognados permitidos en una lista explícita.
- Los textos del lado nativo que no cubra `lessonI18n` pasan por `useAiTranslate` (ya en Lecciones) también en Quiz, Simulacro, Repositorio, Historias y Cultura donde falte.
- Playwright con `kotoba_state` por perfil, viewports 390x844 y 1280x1800.
- Botones restantes migrados a `components/lesson/LessonControls` o a las variantes de `ui/button`.
