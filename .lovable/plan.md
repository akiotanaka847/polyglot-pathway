

## Plan: Limpieza de idiomas eliminados, Aleatorización de respuestas, 100+ lecciones por nivel, Rediseño UI/UX competitivo

### Problemas identificados

**1. Los 7 idiomas eliminados siguen en culture.ts, stories.ts, reference.ts, exams-advanced.ts, conversations.ts**
- `culture.ts`: DE, IT, TR, NL, PL todavía presentes (líneas 25-123 aprox)
- `stories.ts`: DE, IT, TR, NL, PL todavía presentes
- `reference.ts`: DE, IT, TR, NL, PL todavía presentes  
- `exams-advanced.ts`: probablemente tiene entradas para idiomas eliminados
- `conversations.ts`: solo tiene JP y FR, está limpio

**2. Respuestas NO aleatorias al repetir lecciones**
- En `generator.ts`, `makeMCStep` usa `Math.random()` para mezclar opciones, PERO esto solo se ejecuta al generar (una vez y se cachea). Al repetir la lección, las opciones están en el mismo orden.
- En `LessonPage.tsx`, no hay aleatorización de opciones MC al iniciar/repetir una lección.

**3. Textos hardcoded en español en ExamPage.tsx y exams.ts**
- ExamPage: "Examen no disponible", "preguntas", "secciones", "Instrucciones", "Cada sección tiene un tiempo límite", "Iniciar examen", "¡Aprobado!", "Sigue practicando", "respuestas correctas", "Otros exámenes", "Reintentar", "Confirmar", "Escribe tu respuesta...", "Pregunta X de Y", "Volver"
- exams.ts: Todas las preguntas y secciones están en español ("¿Qué significa...?", "Vocabulario", "Gramática", "Comprensión lectora")

**4. Niveles 2-5 (level2.ts-level5.ts) y remaining.ts siguen con contenido hardcoded en español**
- `remaining.ts`: `makeLessons()` produce ~20-25 lecciones con texto en español ("Saludos", "¿Hola en...", "Gracias")
- `level2.ts`-`level5.ts`: `makeL2Lessons()` etc. producen ~25 lecciones con texto en español ("Pasado", "Futuro", "¿Cuál expresa pasado?")
- Esto afecta a TODOS los niveles excepto el primer nivel de ES, KO, ZH, PT (que usan wordbanks+generador)

**5. Solo el primer nivel de 4 idiomas tiene 100+ lecciones**
- ES A1, KO TOPIK1, ZH HSK1, PT A1 usan el generador con wordbanks → ~100 lecciones
- JP N5/N4 tienen ~26 lecciones manuales
- FR A1/A2 tienen ~26 lecciones manuales
- Todos los demás niveles (A2-C2 para todos) tienen ~20-25 lecciones genéricas
- Se necesitan wordbanks para CADA nivel de CADA idioma, o un generador más inteligente

**6. UI/UX puede ser mucho más competitiva**

Benchmarking de las mejores apps:
- **Duolingo**: Camino visual con nodos, personajes, animaciones de celebración, streaks gamificados
- **Babbel**: Lecciones temáticas con diálogos reales, repaso inteligente, feedback visual claro
- **Busuu**: Interfaz limpia, progreso visual claro, correcciones de nativos
- **Lingodeer**: Árbol de habilidades visual, gramática interactiva, mini-juegos

### Cambios propuestos

#### Fase 1: Limpieza y correcciones críticas

**1a. Eliminar idiomas de culture.ts, stories.ts, reference.ts, exams-advanced.ts**
- Borrar entradas de DE, IT, TR, VI, TH, NL, PL de cada archivo
- Solo mantener: JP, FR, ZH, PT, KO, RU, AR, HI, EN, ES

**1b. Aleatorización de respuestas al repetir**
- En `LessonPage.tsx`: al cargar cada paso MC, crear una copia con opciones shuffleadas y ajustar el índice `ans` acorde
- Crear función `randomizeStep(step: LessonStep): LessonStep` que devuelve una copia del step con opciones mezcladas aleatoriamente
- Aplicar al montar cada step (en el efecto de cambio de stepIdx)

**1c. Internacionalizar ExamPage.tsx**
- Reemplazar todos los strings hardcoded por llamadas a `tt()` 
- Añadir las claves necesarias a `languages.ts` UI

#### Fase 2: 100+ lecciones en TODOS los niveles

**2a. Crear wordbanks por nivel**
- Estructura: `src/data/lessons/wordbanks/{lang}-{level}.ts`
- Nivel 2 (A2/N4/HSK2/TOPIK2): vocabulario intermedio (~200 palabras) — viajes, emociones, pasado/futuro, trabajo
- Nivel 3 (B1/N3/HSK3/TOPIK3): vocabulario avanzado (~200) — opiniones, noticias, cultura, salud
- Nivel 4+ (B2-C2/N2-N1/HSK4-6): vocabulario experto (~200) — negocios, política, ciencia, arte
- En total: 10 idiomas × ~5 niveles = ~50 wordbanks, cada uno con ~200 entradas

**2b. Extender el generador para niveles superiores**
- Crear variantes de unidades por nivel: `getA2Units()`, `getB1Units()`, `getB2Units()`, etc.
- Nivel A2: Pasado/Futuro, Emociones, Viajes, Hobbies, Trabajo, Salud, Tecnología, Descripciones, Deportes, Ciudad
- Nivel B1: Opiniones, Medios, Política, Economía, Arte, Ciencia, Filosofía, Historia
- Los niveles C1-C2: Expresiones idiomáticas, Registro formal, Debate, Escritura académica

**2c. Reemplazar remaining.ts y level2-5.ts**
- Eliminar `makeLessons()` y `makeL2Lessons()` etc.
- Reemplazar cada exportación con llamadas a `generateLessons()` usando el wordbank apropiado
- Mantener contenido manual de JP y FR, complementar con generado hasta llegar a 100

#### Fase 3: Rediseño UI/UX competitivo

**3a. LevelMapPage — Camino de aprendizaje visual**
- Reemplazar la lista colapsable por un **camino visual estilo "skill tree"** con nodos conectados
- Cada nodo = unidad, con progreso circular (ej: 4/5 ✓)
- Línea conectora entre nodos con gradiente del color del idioma
- Nodo actual pulsante/brillante
- Nodos completados con checkmark verde y celebración sutil
- Vista scrollable vertical con patrón zigzag (izq-der-izq)

```text
    [🧱 Fundamentos ✅]
          |
    [👋 Saludos 3/5]  ← Actual (pulsante)
          |
    [🔢 Números 🔒]
          |
    [🙋 Presentarse 🔒]
```

**3b. LessonPage — Experiencia interactiva mejorada**
- Añadir **barra de progreso animada** con color del idioma
- **Animaciones de transición** entre pasos (slide-in)
- **Feedback visual mejorado**: confetti en respuesta correcta, shake en incorrecta
- **Indicador de corazones** más visual (no solo emoji)
- **Sonido** ya implementado — mantener
- Pantalla de resumen mejorada con **medallas** (bronce/plata/oro según accuracy)

**3c. ExamPage — Experiencia de simulacro profesional**
- Timer circular visual en vez de texto plano
- Barra de progreso por sección
- Indicador visual de preguntas contestadas vs pendientes
- Pantalla de resultados con breakdown por sección
- Badge de certificación al aprobar

**3d. HomePage — Onboarding mejorado**
- Diseño hero más limpio con ilustración/emoji grande
- Cards de idioma con progreso visual (barra dentro del card)
- Sección "Continuar donde lo dejaste" destacada
- Quick stats más visuales

**3e. Bottom Navigation mejorada**
- Tab "Lessons" debería navegar al último idioma activo
- Indicadores de actividad (punto rojo si hay lección pendiente)

#### Fase 4: Exámenes de certificación completos

**4a. Asegurar exámenes para todos los niveles de los 10 idiomas**
- JP: JLPT N5, N4, N3, N2, N1 ← verificar que todos existen
- FR: DELF A1, A2, B1, B2, DALF C1, C2
- ZH: HSK 1-6
- KO: TOPIK 1-6
- EN: Cambridge A1-C2
- PT: CELPE-BRAS A1-B2
- RU: TORFL A1-C2
- AR: ALPT A1-B2
- HI: Hindi Proficiency A1-B2
- ES: DELE A1-C2

**4b. Más preguntas por examen**
- Mínimo 30 preguntas por nivel
- 3 secciones: Vocabulario, Gramática, Comprensión lectora
- Preguntas aleatorias de un pool mayor (para que no se repitan al reintentar)

### Archivos a crear/modificar

| Archivo | Acción |
|---------|--------|
| `src/data/culture.ts` | Eliminar DE, IT, TR, VI, TH, NL, PL |
| `src/data/stories.ts` | Eliminar DE, IT, TR, VI, TH, NL, PL |
| `src/data/reference.ts` | Eliminar DE, IT, TR, VI, TH, NL, PL |
| `src/data/exams-advanced.ts` | Eliminar idiomas removidos |
| `src/data/exams.ts` | Eliminar idiomas removidos, añadir `tt()` keys |
| `src/pages/ExamPage.tsx` | Internacionalizar, rediseñar con timer visual |
| `src/pages/ExamSelectPage.tsx` | Rediseñar cards |
| `src/pages/LessonPage.tsx` | Aleatorizar opciones MC al cargar, mejorar animaciones |
| `src/pages/LevelMapPage.tsx` | Rediseño con skill tree visual |
| `src/pages/HomePage.tsx` | Rediseño hero + continuar aprendizaje |
| `src/data/lessons/generator.ts` | Añadir unidades A2-C2 |
| `src/data/lessons/remaining.ts` | Reemplazar con generador |
| `src/data/lessons/level2-5.ts` | Reemplazar con generador |
| `src/data/lessons/wordbanks/*` | Crear banks por nivel |
| `src/data/lessons/index.ts` | Conectar nuevos wordbanks |
| `src/data/languages.ts` | Nuevas claves UI para ExamPage |
| `src/App.tsx` | Ajustar bottom nav |

### Orden de implementación

1. **Limpieza**: Eliminar 7 idiomas de culture/stories/reference/exams-advanced
2. **Aleatorización**: Implementar shuffle de opciones MC en LessonPage
3. **i18n ExamPage**: Traducir strings hardcoded
4. **Wordbanks nivel 2-5**: Crear contenido para los 10 idiomas
5. **Generador extendido**: Unidades A2-C2 en generator.ts
6. **Reemplazar remaining.ts y level2-5.ts**: Usar generador
7. **Rediseño LevelMapPage**: Skill tree visual
8. **Rediseño LessonPage**: Animaciones y feedback
9. **Rediseño ExamPage**: Timer visual y certificaciones
10. **Rediseño HomePage**: Hero + continuar

Esto es un proyecto grande — se implementará en múltiples fases, empezando por la limpieza, aleatorización y rediseño core.

