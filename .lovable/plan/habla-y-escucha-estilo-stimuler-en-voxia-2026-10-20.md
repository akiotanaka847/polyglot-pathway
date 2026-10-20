# Habla y escucha estilo Stimuler en Voxia

## Aclaración importante
- **REA (morluto/rea)** no es una app de idiomas: es una herramienta para analizar cómo funcionan otros programas. No trae código de habla que podamos usar.
- **Stimuler** es una app privada. Copiar su código o su diseño exacto no es legal. Lo que sí podemos hacer es crear en Voxia las mismas *ideas*, con nuestro estilo neón y en los 11 idiomas.

## Qué tiene Stimuler y cómo lo traemos
1. **Habla improvisada de 60 segundos**
   - Recibes un tema al azar, un cronómetro circular de 60 s y hablas sin parar.
   - Al terminar: notas por categoría (fluidez, gramática, vocabulario, pronunciación) en escala tipo "banda" 1–9, con medalla.
   - Botón "Otro tema" para práctica ilimitada.
2. **Charla con un personaje (como "Sarah")**
   - Un coach con nombre y avatar propio por idioma (ej. Sophie en francés, Yuki en japonés).
   - En cada respuesta: "respuesta modelo" (cómo lo diría un nativo) y un consejo claro, en tu idioma de ayuda.
3. **Palabras mal pronunciadas con "Reintentar"**
   - Tras hablar, se marcan las palabras dudosas; las tocas, las escuchas y repites solo esa palabra hasta acertarla.
4. **Prueba diaria de speaking (10 min)**
   - Una serie corta armada con tus errores guardados y tus puntos débiles: repetir frases, responder preguntas y describir una situación.
   - Racha diaria y resultado final con progreso frente al día anterior.

## Dónde aparece
- En la pantalla **Hablar**: tres pestañas arriba — "Libre 60 s", "Charlar" (lo actual mejorado) y "Prueba diaria".
- Mantiene el selector de idiomas, la auto-parada por silencio, la ayuda de micrófono y la opción de escribir.

## Detalles técnicos
- Nueva función de backend `speak-evaluate`: recibe la transcripción del monólogo y devuelve notas por categoría, palabras dudosas, respuesta modelo y consejos (IA vía gateway, JSON).
- Pronunciación: comparar la transcripción con la palabra objetivo (similitud de texto) para el "Reintentar"; no hay análisis acústico real.
- `useSpeechRecognition` gana un modo "monólogo" sin auto-parada por silencio corto, límite 60 s.
- Personajes por idioma en `src/data/coachPersonas.ts`; textos de interfaz traducidos a los 11 idiomas.
- Prueba diaria usa los errores ya guardados localmente; resultados y racha en el estado local existente.
- Pruebas: notas siempre entre 1 y 9, monólogo corta a 60 s, la prueba diaria usa el idioma elegido.
