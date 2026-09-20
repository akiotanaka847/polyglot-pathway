# Arreglo: el micrófono "escucha" pero no pasa nada

## Diagnóstico

Al revisar el código y los registros del servidor:

1. **Al presionar "Terminar" no hay ninguna señal visual mientras se transcribe.** La transcripción del audio tarda varios segundos en el servidor, pero la pantalla vuelve al estado normal al instante (el orbe se apaga, el botón vuelve a "Hablar"). Para el usuario parece que "no hace nada" cuando en realidad está procesando — o falló en silencio.
2. **Los registros de `transcribe-audio` están vacíos**: si la llamada falla en el teléfono (red lenta, formato de audio del dispositivo, corte de conexión), el error no siempre se muestra de forma clara.
3. **No hay límite de espera**: si la transcripción se cuelga, la app espera para siempre sin avisar.
4. **No hay indicador de que el micrófono capta voz** mientras graba (ni nivel de volumen ni cronómetro), así que el usuario no sabe si el micrófono funciona.

## Cambios

### 1. Estado "Transcribiendo…" visible (`useSpeechRecognition.ts`, `SpeakingPage.tsx`, `ConversationPage.tsx`)
- Nuevo estado `isTranscribing` en el hook: se activa al presionar "Terminar" y se apaga cuando llega la respuesta.
- El orbe pasa a modo "thinking" y aparece el texto "Escuchando y corrigiendo…" / "Transcribiendo tu voz…" durante todo el proceso, sin volver al estado inicial antes de tiempo.
- El botón queda desactivado mientras transcribe para evitar dobles envíos.

### 2. Límite de espera y errores claros
- Tiempo máximo de 30 segundos para la transcripción; si se supera, mensaje claro: "La conexión está lenta, inténtalo de nuevo".
- Cualquier fallo (permiso, red, audio vacío, servidor) se muestra siempre en pantalla en el idioma nativo del usuario, nunca en silencio.

### 3. Confirmación de que el micrófono capta voz
- Cronómetro de grabación (00:03…) y medidor de volumen en vivo mientras graba, para que el usuario vea que su voz entra.
- Si al detener la grabación no se captó sonido real, mensaje: "No escuché nada, acércate al micrófono".

### 4. Verificación
- Prueba en el navegador del flujo completo: grabar → ver "Transcribiendo…" → recibir respuesta y corrección del coach.
- Prueba de la función `transcribe-audio` con audio real para confirmar que responde.
- Verificar que los registros del servidor muestran las llamadas.

## Nota técnica
Sin cambios de diseño ni de lógica del coach: solo estados de espera, tiempos límite y mensajes de error visibles en las dos pantallas de voz (Conversación y Speaking libre).
