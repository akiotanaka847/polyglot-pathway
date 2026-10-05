# Corregir el idioma y renovar la práctica oral

## Objetivo
Hacer que Speaking y Conversación usen siempre el idioma que la persona eligió para aprender, sin mezclarlo con el idioma nativo, y convertir Speaking en una experiencia más cálida, clara e interactiva con la dirección **Playful Glassmorphism**.

## Cambios
1. **Idioma elegido como fuente única**
   - Guardar explícitamente el último idioma de aprendizaje seleccionado.
   - Actualizarlo al elegir un idioma o entrar en su recorrido de lecciones.
   - Abrir Speaking y Conversación con ese idioma, sin deducirlo por XP.
   - Mantener el idioma nativo únicamente para instrucciones, traducciones y explicaciones de correcciones.
   - Migrar el progreso existente con una alternativa segura basada en el idioma activo más reciente.

2. **Temas correctamente localizados**
   - Sustituir los títulos y consignas españolas de los 24 temas por contenido localizado para los 11 idiomas de interfaz.
   - Mostrar los temas en el idioma nativo de la interfaz y enviar al coach el contexto del tema sin mezclar idiomas.
   - Confirmar que bandera, nombre, transcripción, respuesta hablada y corrección pertenecen al idioma aprendido.

3. **Speaking Playful Glassmorphism**
   - Crear una cabecera clara con el idioma aprendido y una indicación separada del idioma de ayuda.
   - Reorganizar el catálogo en tarjetas visuales más grandes, agrupadas por dificultad y con selección táctil evidente.
   - Añadir un estado de sesión vivo: coach reconocible, historial breve de conversación, orbe y barras reactivas, estados claros de escuchar/transcribir/responder.
   - Presentar las correcciones como ayuda amable: frase entendida, forma natural, explicación, escucha y repetición.
   - Mantener micrófono, escritura alternativa, ayuda de permisos y auto-parada por silencio.

4. **Conversación consistente**
   - Aplicar la misma fuente de idioma elegido en Conversación.
   - Conservar su catálogo y flujo actuales, corrigiendo únicamente selección y mezcla de idiomas.

5. **Validación**
   - Probar con idioma nativo inglés y francés y distintos idiomas aprendidos.
   - Verificar en móvil y escritorio la selección de tema, grabación, transcripción, respuesta, traducción y corrección.
   - Confirmar que no haya errores de compilación ni desbordes visuales.

## Detalles técnicos
- Extender el estado persistente con un idioma de aprendizaje actual y migrarlo sin borrar XP, lecciones ni correcciones.
- Centralizar la resolución del idioma para que navegación, Speaking y Conversación compartan la misma regla.
- Usar los tokens visuales existentes y añadir solo tokens semánticos necesarios para las superficies glass, evitando colores aislados en la pantalla.
- Reutilizar los controles y componentes de diseño ya disponibles; el flujo de voz y el servicio del coach permanecen intactos.
