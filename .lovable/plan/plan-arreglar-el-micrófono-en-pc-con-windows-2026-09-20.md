# Plan: arreglar el micrófono en PC con Windows

## Problema
En Windows el botón de hablar no aparece o no funciona. Causas detectadas en el código:

1. `isSupported` exige `navigator.mediaDevices.getUserMedia` + `MediaRecorder`. Si el navegador no las expone (contexto no seguro `http://`, webview dentro de otra app, navegador antiguo), el botón se oculta y solo queda un texto pequeño "sin micrófono", sin explicación ni solución.
2. Cuando Windows bloquea el micrófono (Configuración > Privacidad > Micrófono) o el navegador niega el permiso, se muestra un mensaje genérico que no dice cómo arreglarlo.
3. No se distingue entre: sin micrófono físico (`NotFoundError`), micrófono ocupado por otra app (`NotReadableError`), permiso denegado (`NotAllowedError`), o contexto inseguro.

## Cambios

### 1. Diagnóstico claro del micrófono (`src/hooks/useSpeechRecognition.ts`)
- Detectar `window.isSecureContext === false` y reportar: "Abre la app desde el enlace seguro (https)".
- Mapear errores de `getUserMedia` a mensajes accionables:
  - `NotAllowedError` → "Permiso denegado: pulsa el candado de la barra de direcciones y permite el micrófono; en Windows revisa Configuración > Privacidad > Micrófono".
  - `NotFoundError` / `OverconstrainedError` → "No se encontró micrófono. Conecta uno o revisa el dispositivo de entrada de Windows".
  - `NotReadableError` → "El micrófono está ocupado por otra aplicación (Zoom, Teams…). Ciérrala e inténtalo de nuevo".
  - Otros → mensaje con el nombre del error para poder diagnosticar.
- Consulta previa opcional con `navigator.permissions.query({ name: 'microphone' })` (donde exista) para avisar antes de grabar si el permiso está denegado.

### 2. Interfaz que siempre ofrece camino (`SpeakingPage.tsx`, `ConversationPage.tsx`)
- Cuando el micrófono no esté disponible, mostrar una tarjeta visible (no un textito) con el motivo detectado y los pasos para activarlo, más el campo de escritura como alternativa inmediata.
- En Conversación, el campo de escribir queda visible siempre que el micrófono falle (hoy está escondido tras el botón "Escribir").
- Mantener intacto el diseño neón actual.

### 3. Traducciones
- Añadir los nuevos mensajes al sistema de traducción existente (`u()`/lessonI18n) para que salgan en el idioma nativo del usuario, no solo en español.

## Verificación
- Typecheck.
- Playwright en Chromium: simular permiso denegado y contexto sin micrófono para confirmar que aparece la tarjeta de ayuda con el motivo correcto y que escribir sigue funcionando.
- Grabación normal con micrófono simulado para confirmar que el flujo bueno no se rompe.
