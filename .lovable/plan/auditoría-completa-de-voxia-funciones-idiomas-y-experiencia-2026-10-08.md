# Auditoría completa de Voxia: funciones, idiomas y experiencia

## Objetivo
Probar cada pantalla como lo haría un usuario real, en varias combinaciones de idiomas, y corregir todo lo que falle o mezcle idiomas. Los registros actuales no muestran errores, así que los fallos se buscarán probando cada pantalla directamente.

## 1. Recorrido de pruebas (antes de cambiar nada)
Tres perfiles de prueba:
- Idioma nativo español, aprendiendo francés + inglés + japonés
- Idioma nativo francés, aprendiendo inglés + español
- Idioma nativo inglés, aprendiendo coreano (un solo idioma)

En cada perfil se revisan, con capturas en móvil y en PC:
- Inicio: banderas sin repetir, elegir y añadir idioma
- Lecciones: mapa de niveles, abrir una lección, cada tipo de ejercicio (teoría, opciones, escribir, ordenar, lectura, escuchar, hablar), corazones, XP y final
- Quizzes y Simulacros: corrección de respuestas, temporizador, secciones oral/escrita
- Hablar y Conversación: selector de idiomas, temas, micrófono, escribir, respuesta del coach en el idioma correcto
- Historias, Cultura/Slang, Repositorio, Progreso, Rangos
- Menú inferior: cada botón lleva al idioma elegido

Se apuntará cada fallo: pantalla rota, botón que no responde, texto en un idioma que no toca, desbordes en móvil.

## 2. Correcciones
- **Mezcla de idiomas**: todo texto de la interfaz e instrucciones en el idioma nativo; todo el contenido practicado en el idioma que se aprende. Se buscan textos fijos en español sin traducir y se completan.
- **Un solo idioma actual**: Lecciones, Hablar, Conversación, Historias y Simulacros usan siempre el idioma elegido, nunca el de más puntos.
- **Funciones rotas**: se corrigen una por una según lo encontrado.
- **Experiencia**: botones claros, estados de carga y error visibles, nada cortado en móvil, poco desplazamiento vertical, estilo visual coherente entre pantallas.

## 3. Comprobación final
- Repetir el recorrido completo con los tres perfiles y comparar capturas.
- Añadir pruebas pequeñas para las reglas clave: idioma actual elegido, sin banderas repetidas, respuestas correctas aceptadas, opciones mezcladas al reintentar.
- Entregar una lista de lo que se arregló y lo que quede pendiente (si algo depende del micrófono real del usuario).

## Detalles técnicos
- Playwright con estado reconstruido en `localStorage` (`kotoba_state`) por perfil; viewport 390x844 y 1280x1800.
- Detector automático: recorrer el texto visible de cada página y marcar palabras de diccionarios del idioma equivocado (p. ej. palabras españolas comunes con nativo francés).
- Revisar `lessonI18n.ts`, `languages.ts` (`t()`), `StoryPage`, `ExamPage`, `QuizPage`, `CulturePage`, `ReferencePage` buscando cadenas sin pasar por traducción.
- Reemplazar cualquier selección de idioma por XP restante por `currentLearningLang`.
- Pruebas con vitest junto a `src/test/`.
