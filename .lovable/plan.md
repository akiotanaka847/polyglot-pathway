# Hablar con la IA como con una persona

## Qué cambia para el usuario
1. **Elegís tu nivel antes de empezar**: Principiante, Intermedio o Avanzado (fichas grandes). Se recuerda por idioma. Ya no se adivina por XP.
2. **Un solo botón: "Hablar con la IA"**. Sin elegir temas ni pestañas al inicio (las prácticas "Libre 60 s" y "Prueba diaria" quedan abajo en "Otras prácticas").
3. **Conversación manos libres, por turnos, como una llamada**:
   - La IA saluda en voz alta, se presenta y te propone un tema adecuado a tu nivel con una pregunta.
   - Cuando termina de hablar, el micrófono se abre solo. Hablás; al callarte 1,6 s se envía solo.
   - La IA reacciona a lo que dijiste (como un amigo: comenta, cuenta algo suyo, repregunta) y sigue la charla. Si el tema se agota, cambia de tema ella sola de forma natural.
   - Si no hablás en 5 s, te ayuda con una frase de ejemplo para que la repitas.
4. **Correcciones según el nivel**:
   - Principiante: frases cortas y lentas, solo 1 corrección importante por turno, explicación en tu idioma, traducción visible.
   - Intermedio: hasta 2 correcciones, traducción oculta (tocar para ver).
   - Avanzado: habla natural, todas las correcciones relevantes y forma más natural, sin traducción.
   - Las correcciones aparecen en una tarjeta suave bajo tu mensaje, sin cortar la charla; la IA no las lee en voz alta (solo tu frase corregida si tocás el altavoz).
5. **Controles en pantalla de llamada**: orbe grande animado (hablando IA / escuchándote / pensando), botones Pausar, "No entendí, repetí más lento", "Cambiar tema", Terminar → resumen con nota 1-9 y errores a practicar.

## Detalles técnicos
- `SpeakingPage.tsx`: estado `level` elegido por el usuario (persistido por idioma en localStorage), pantalla inicial simplificada, bucle `coach habla → onEnd TTS → start()` del micrófono; pausa detiene el bucle.
- `speakText` necesita callback `onEnd` (en `utils/helpers.ts`) para abrir el micrófono al terminar la voz.
- `speak-coach`: modo opener elige tema según nivel sin que el cliente lo mande; nuevas reglas por nivel (largo de frase, cantidad de correcciones, vocabulario), acción `slower` para repetir simplificado, cambio de tema autónomo tras ~6 turnos.
- Reglas de nivel (máx. correcciones, mostrar traducción) en helper puro en `speakEval.ts` con test en `speak-eval.test.ts`.
- Se mantiene estilo Playful Glassmorphism, idioma actual (`currentLearningLang`) y guardas de TTS.
