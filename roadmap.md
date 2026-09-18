# Roadmap Voxia

## En curso
- [ ] Auditoría de idioma: módulos avanzados (niveles 3-5, exámenes, referencia, cultura, slang, historias) muestran texto en español aunque el nativo sea otro. Ampliar cobertura de traducción y verificar consistencia en toda la app.

## Actualización inspirada en Mural
- [x] Catálogo de 24 temas de conversación (`src/data/convThemes.ts` + generación por idioma)
- [x] Orbe animado de voz + subtítulos ocultables + toque en palabra
- [x] Barras de memoria 1-3 (evidencia espaciada por días)
- [x] Dificultad adaptativa (habilidad por idioma)
- [ ] Barras de memoria visibles en lecciones y repositorio
- [ ] App nativa iOS/Android con Capacitor

## Actualizaciones PWA
- [x] Confirmado: la PWA se actualiza al abrirla y el progreso local (localStorage) se conserva.
- [ ] Verificar que el service worker no sirva versiones viejas en caché tras publicar.
- [ ] Bug: en los quizzes respuestas correctas se marcan como incorrectas (revisar normalizeAnswer y opciones mezcladas).

## Auditoría de idioma (resultado)
- [x] level3/4/5: plantillas en inglés convertidas a español base + nombre del idioma en su propia escritura.
- [x] CORE_PATTERNS: cabeceras de preguntas traducidas en los 11 idiomas (fin de "¿Cuál es el kanji..." mitad inglés).
- [x] Eliminado el fallback al inglés: ya no se mezclan idiomas en una misma frase.
- [x] Modo Historia: overlay inglés solo para nativos en inglés.
- [ ] Pendiente: narrativas largas de Story Mode y textos C1/C2 siguen en español base para nativos distintos de ES/EN (requiere traducción con IA).
