# Elegir entre todos tus idiomas en Hablar y Conversación

## Problema
Hablar y Conversación solo muestran el último idioma elegido (por ejemplo, francés). No hay forma de cambiar a otro idioma que también estás aprendiendo.

## Cambios
1. **Selector de idiomas en la cabecera de Hablar**
   - Mostrar como fichas con bandera todos los idiomas que estás aprendiendo.
   - El idioma actual aparece resaltado y se elige por defecto.
   - Al tocar otro idioma, cambia al momento: temas, coach, voz y correcciones pasan a ese idioma.
   - Si hay una sesión abierta, se cierra y vuelves a la lista de temas del nuevo idioma.
   - Ficha "+" para añadir un idioma nuevo (lleva a la pantalla de elegir idioma).
2. **Mismo selector en Conversación**, con el mismo comportamiento.
3. **Recordar la elección**: el idioma elegido aquí pasa a ser también el de Lecciones y el menú inferior.
4. Con un solo idioma, se muestra solo esa ficha más el "+".

## Validación
- Con francés, inglés y japonés activos: cambiar entre ellos en Hablar y Conversación y comprobar temas, respuestas del coach y voz en el idioma correcto.
- Revisar en móvil que las fichas no se desborden (desplazamiento horizontal).

## Detalles técnicos
- Componente compartido `LearningLangSwitcher` que lista `state.activeLangs` (deduplicados, sin el idioma nativo) y llama a `setCurrentLearningLang`.
- `SpeakingPage` y `ConversationPage` ya derivan `lang` de `currentLearningLang`; al cambiar, reiniciar el estado de sesión/tema.
