# Roadmap Voxia

## En curso
- [x] Auditoría de idioma con traducción IA (historias, lecciones, cultura, slang, quiz, exámenes, repositorio). Restante: módulos avanzados (niveles 3-5, exámenes, referencia, cultura, slang, historias) muestran texto en español aunque el nativo sea otro. Ampliar cobertura de traducción y verificar consistencia en toda la app.

## Actualización inspirada en Mural
- [x] Catálogo de 24 temas de conversación (`src/data/convThemes.ts` + generación por idioma)
- [x] Orbe animado de voz + subtítulos ocultables + toque en palabra
- [x] Barras de memoria 1-3 (evidencia espaciada por días)
- [x] Dificultad adaptativa (habilidad por idioma)
- [x] Barras de memoria visibles en lecciones y repositorio
- [x] Capacitor configurado (appId/appName Voxia, webDir dist, hot-reload). Faltan pasos locales del usuario: `npx cap add ios/android`, `npm run build`, `npx cap sync`, `npx cap run`.

## Actualizaciones PWA
- [x] Confirmado: la PWA se actualiza al abrirla y el progreso local (localStorage) se conserva.
- [x] No hay service worker: la PWA carga siempre la versión publicada (sin caché vieja) y el progreso en localStorage se conserva.
- [x] Bug quiz verificado en navegador (texto y opción múltiple marcan bien; se acepta respuesta base, nativa e IA).

## Auditoría de idioma (resultado)
- [x] level3/4/5: plantillas en inglés convertidas a español base + nombre del idioma en su propia escritura.
- [x] CORE_PATTERNS: cabeceras de preguntas traducidas en los 11 idiomas (fin de "¿Cuál es el kanji..." mitad inglés).
- [x] Eliminado el fallback al inglés: ya no se mezclan idiomas en una misma frase.
- [x] Modo Historia: overlay inglés solo para nativos en inglés.
- [x] Narrativas largas y textos C1/C2 traducidos con IA y cacheados.
- [x] Traducción con IA (Lovable Cloud) para narrativas largas y explicaciones avanzadas, con caché compartida en la base de datos + teléfono.
