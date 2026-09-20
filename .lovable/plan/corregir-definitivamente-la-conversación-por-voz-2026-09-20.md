# Corregir definitivamente la conversación por voz

## Objetivo
Hacer que la conversación funcione como una charla natural: la persona habla, la app detecta cuándo terminó, transcribe y responde automáticamente, sin quedarse indefinidamente en “escuchando”.

## Cambios
1. **Final automático de la grabación**
   - Detectar voz real mediante el nivel del micrófono.
   - Detener y enviar automáticamente después de un breve silencio posterior al habla.
   - Añadir un límite máximo de grabación como protección.
   - Mantener “Terminar” como control manual.

2. **Entrega fiable de la transcripción al coach**
   - Unificar grabar → cerrar archivo → transcribir → enviar al coach en una sola operación protegida contra dobles pulsaciones.
   - Asegurar que el texto devuelto se entregue directamente al coach, sin depender de una actualización tardía de pantalla.
   - Mostrar etapas claras: “Escuchando”, “Transcribiendo” y “Preparando respuesta”.

3. **Recuperación ante fallos móviles**
   - Manejar cierre tardío o fallido de `MediaRecorder`, pistas interrumpidas y formatos móviles.
   - Liberar siempre el micrófono y restaurar los controles tras éxito o error.
   - Mostrar “No detecté voz” cuando nunca hubo señal, en lugar de aparentar que sigue procesando.

4. **Validación completa**
   - Probar conversación y práctica libre con audio real decodificable.
   - Confirmar en móvil simulado que el silencio dispara el envío automático.
   - Verificar en los registros la secuencia completa: transcripción exitosa seguida por respuesta del coach.

## Evidencia actual
Los registros recientes muestran transcripciones exitosas, pero ninguna llamada posterior al coach. Esto confirma que el corte está entre la transcripción y el envío de la respuesta, no en el reconocimiento del audio.
