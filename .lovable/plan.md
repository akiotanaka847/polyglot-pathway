# Plan: auto-parada a los 5 s sin voz + ayuda del coach

## Lo que pide el usuario
En "escuchar y hablar" (Solo hablar, Conversación y ejercicios de habla en lecciones): si la persona no dice nada en ~5 segundos, la app debe parar sola, responderle y ayudarle con lo que intentaba decir.

## Estado actual (verificado)
- `src/hooks/useSpeechRecognition.ts` controla el micro en las 3 pantallas (`SpeakingPage`, `ConversationPage`, `LessonPage` paso `sp`).
- Hoy: si no detecta voz espera **12 s** (`NO_SPEECH_MS = 12_000`) y luego solo muestra un error en español ("No detecté voz…"). El coach no responde ni ayuda.
- Tras hablar, el silencio que corta es 1,6 s (eso ya funciona bien y no se toca).
- Los mensajes de error del micro están fijos en español aunque el nativo sea otro.

## Cambios

### 1. Parada automática a los 5 segundos
- `useSpeechRecognition.ts`: bajar `NO_SPEECH_MS` de 12 000 a **5 000**. Si en 5 s no se oye voz, la grabación se detiene sola (igual que hoy, pero rápido).

### 2. El coach responde y ayuda aunque no oyera nada
- El hook expondrá un resultado claro: `lastOutcome: 'ok' | 'no-speech' | 'too-short' | 'error'` (además de los mensajes actuales).
- `supabase/functions/speak-coach`: aceptar `noSpeech: true`. En ese caso responde con:
  - un mensaje amable en el idioma nativo ("no te escuché, no pasa nada…"),
  - **una frase de ejemplo fácil en el idioma que aprende, relacionada con el tema**, con su significado en el nativo, para que la repita (ayuda directa con su expresión/dialéctica).
- `SpeakingPage`, `ConversationPage` y el paso `sp` de `LessonPage`: cuando `lastOutcome === 'no-speech'`, llamar al coach con `noSpeech: true` y mostrar su respuesta como un turno más (con audio 🔊 para que oiga el ejemplo), en vez de solo el error.

### 3. Mensajes del micro en el idioma nativo
- Los textos fijos en español del hook ("No detecté voz…", "No pude entender el audio…") pasan a códigos; las páginas los traducen con sus diccionarios `UI` (11 idiomas) igual que el resto de la interfaz.

## Verificación
- `tsgo --noEmit` sin errores.
- Prueba en navegador (Playwright) sin voz simulada: al pulsar Hablar y no decir nada, a los ~5 s para solo, aparece la ayuda del coach con una frase de ejemplo y se puede reintentar.
- Prueba con voz simulada: el flujo normal (hablar → transcribir → coach corrige) sigue igual.

## No se toca
- Diseño neón, temas, memoria, dificultad adaptativa, ni el tiempo de silencio tras hablar (1,6 s).
