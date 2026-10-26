# Una sola sala de práctica oral con IA, y audio sin mezcla de idiomas

## Qué cambia para el usuario

### 1. "Conversación" y "Hablar" se juntan en una sola opción: **Hablar con Voxia**
- Una pantalla y un botón en el menú. Se acaban las dos opciones que parecían iguales.
- **La IA empieza la conversación.** No hay que elegir ni inventar un tema. Al entrar, Voxia saluda en el idioma que estás aprendiendo (por ejemplo japonés) y hace una primera pregunta sencilla sobre tu día, tus gustos o tu trabajo.
- **Funciona como hablar con una persona:** escucha lo que dices, contesta de forma natural, hace preguntas para seguir la charla y cambia de tema sola cuando el tema se agota. Hay un botón **"Otro tema"** por si quieres cambiar antes.
- **Nota en cada respuesta, como en Stimuler:** debajo de cada cosa que dices sale una tarjeta pequeña con la nota de gramática, vocabulario, fluidez y pronunciación (de 1 a 9), una o dos correcciones amables y la frase dicha de forma más natural, con botón para escucharla.
- **Resumen al terminar:** la nota media, tus 3 errores más frecuentes, palabras nuevas y cuántos minutos hablaste. Esto suma XP y días seguidos.
- La dificultad se adapta a tu nivel (N5 a N1, A1 a C2): frases cortas si eres principiante y temas de opinión si estás en un nivel alto.
- La **Prueba diaria** y el **Libre 60 s** quedan como opciones secundarias dentro de la misma pantalla, no como pantallas aparte.
- Se mantienen el selector de idioma, el modo escribir, la ayuda para dar permiso al micrófono y la parada automática tras 5 segundos de silencio.

### 2. El audio usa la voz de cada idioma
- Hoy, al tocar "escuchar" en algunas actividades, la app lee la explicación o la pregunta en español con voz japonesa. Ese es el sonido raro que oíste.
- Ahora el botón de escuchar lee **solo el texto en el idioma que aprendes**, con la voz de ese idioma.
- La explicación en tu idioma (español) no se lee con voz extranjera. Si se lee, usa una voz española.
- Si una frase mezcla los dos idiomas (por ejemplo "猫 significa gato"), solo se lee la parte en japonés.
- Esto se arregla en Lecciones, Hablar, Historias, Repositorio y Simulacros.

### 3. Una pantalla de práctica oral más clara
- Arriba está el orbe de voz grande con el estado ("Voxia habla…", "Te escucho…", "Pensando…") y un botón grande de micrófono.
- La charla se ve como un chat. Los mensajes de Voxia tienen botón de escuchar y botón para mostrar la traducción, que viene oculta para que practiques el oído.
- Se usan los colores neón actuales de Voxia y la pantalla está pensada para celular.

## Detalles técnicos
- Página nueva unificada (se reutiliza `SpeakingPage`). `/conversation` redirige a `/speaking`. Se quita la entrada duplicada del menú y de Home.
- `speak-coach` gana el modo "dirige la charla": con un `opener` inicia el saludo y propone el tema, devuelve `{reply, translation, nextTopicHint, scores{grammar,vocab,fluency,pron}, corrections, better}`. Los temas vienen de `speakTopics` y se eligen según el nivel. Las notas se calculan en el servidor con los helpers de `speakEval.ts`. Se mantiene el modelo actual.
- En `speakText` se añade una protección de idioma: detecta la escritura del texto (kana, hangul, cirílico, árabe, devanagari, han; o palabras latinas típicas). Si no coincide con el idioma de la voz, usa la voz del idioma nativo o no lee el texto. Se añade el helper `extractTarget(text, lang)` para leer solo la parte en el idioma aprendido.
- En `LessonPage` (líneas 340, 530 y 548) ya no se leen `step.q` ni `hint` en el idioma nativo con la voz del idioma aprendido. Se hace lo mismo en `ExamPage`, que usa `speechSynthesis` directo.
- Pruebas: una prueba de la protección de idioma (texto en español con voz japonesa → voz española o sin lectura; texto japonés → voz japonesa) y una prueba de los rangos de nota.
- Se verifica con Playwright en japonés con español como idioma nativo, en celular y en PC.
