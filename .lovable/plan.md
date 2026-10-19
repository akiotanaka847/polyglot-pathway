# Arreglar lecciones que cambian de idioma y mejorar los botones

## Qué encontré (causa confirmada)
Revisé las lecciones de los 11 idiomas, nivel por nivel:

- **Inglés, ruso, árabe, hindi y rumano enseñan palabras en español** a partir de la lección 8 a 25 de cada nivel. Ejemplo real: en Inglés B1 aparece "Blanco" presentado como palabra en inglés. Pasa porque las primeras lecciones de cada nivel están hechas a mano, y las siguientes (hasta llegar a ~200) se completan con una lista de palabras en español. En rumano pasa desde A2, porque A2 a C2 no tienen ninguna lección hecha a mano.
- **Las traducciones salen en español aunque tu idioma sea otro.** Ejemplo: alguien que habla francés y aprende portugués ve "feio = Feo" en vez de "feio = Laid". El diccionario de significados solo está completo en español, y cuando falta una palabra muestra la versión en español.
- **Los niveles altos repiten vocabulario básico.** Ejemplo: coreano TOPIK 3 vuelve a enseñar los días de la semana, igual que en TOPIK 1.

## 1. Cada lección en el idioma correcto
- Crear listas de vocabulario propias para inglés, ruso, árabe, hindi y rumano, con las mismas 18 categorías que ya tienen japonés, chino, coreano y portugués (saludos, números, familia, comida, transporte, verbos, etc.), con su pronunciación.
- Agregar vocabulario propio de cada nivel (A2 a C2) para todos los idiomas, con temas más avanzados según el nivel: trabajo, salud, viajes, opinión, sociedad, ciencia. Así los niveles altos dejan de repetir lo básico.
- Hacer que las lecciones de relleno usen siempre la lista de su propio idioma, nunca la de otro.

## 2. Traducciones en tu idioma
- Completar los significados de todo el vocabulario en los 11 idiomas de la interfaz.
- Si falta alguna traducción, mostrar el significado en inglés de forma neutral, pero nunca en español. Se marca para traducirlo con la traducción automática que ya tiene la app.

## 3. Botones más claros y cómodos
- Usar el mismo estilo de botón en toda la app: principal (relleno), secundario (borde) y suave. Hoy cada pantalla tiene su propio estilo.
- Tamaño mínimo cómodo para el dedo (44 px de alto) y distancia suficiente entre botones.
- En Lecciones, Quizzes y Simulacros: botón "Comprobar/Continuar" fijo abajo y a todo el ancho, con colores claros de correcto o incorrecto, estado desactivado visible y una pequeña animación al tocarlo.
- Opciones de respuesta como tarjetas grandes: se ve cuál elegiste, cuál era la correcta y cuál estaba mal.
- Reemplazar la ventana del navegador al salir de una lección por una ventana propia de la app, traducida.
- Botones de audio y micrófono con icono, texto y estados claros (escuchando, procesando).
- Revisar en celular y en PC que nada se corte ni se superponga con el menú inferior.

## 4. Comprobación
- Prueba automática: recorre todas las lecciones de los 11 idiomas aprendidos con cada idioma nativo y falla si aparece una palabra de otro idioma, o un significado en español cuando la persona no habla español.
- Recorrer en el navegador, en celular y en PC, una lección avanzada (por ejemplo, Inglés B1 lección 40 con francés como idioma nativo) y comparar capturas antes y después.

## Detalles técnicos
- `src/data/lessons/index.ts`: `en/ru/ar/hi/ro` usan `esA1Bank` en `boost()`. Crear `wordbanks/{en,ru,ar,hi,ro}.ts` (A1) y extender `wordbanks/universal.ts` con bancos por nivel para todos los códigos (hoy solo `jp` y `fr`); `getBankFor(code, level)` elige el banco de ese idioma y nivel.
- `generator.ts` `translateMeaning`: `MEANING_DICT` solo tiene `es`; añadir los 11 nativos para todas las claves `mn` de los bancos, y cambiar el último recurso de español a `mn` en inglés.
- Nueva prueba `src/test/lesson-language.test.ts`: por cada `getLessonData(native)` × idioma × nivel, comprobar que los `char`/`opts` de destino no pertenezcan a bancos de otros idiomas y que los `mn` no salgan de `MEANING_DICT.es` cuando native ≠ es.
- Botones: variantes de `components/ui/button` (`primary`, `outline`, `soft`, tamaños `lg` con `min-h-11`) aplicadas a LessonPage, QuizPage, ExamPage, LevelMapPage, StoryPage, ReferencePage, CulturePage, ConversationPage y HomePage; barra de acción fija con `safe-area`; `confirm()` reemplazado por `AlertDialog`; `window.location.href` reemplazado por `navigate`.
