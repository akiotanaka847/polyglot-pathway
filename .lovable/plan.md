

## Plan: 100+ Lecciones por Nivel, UI Amigable con Unidades, y Fondos Culturales

### Problema actual

1. **Contenido insuficiente**: JP tiene ~26 lecciones/nivel, los otros 15 idiomas usan generadores genéricos con ~25 lecciones de 2-5 pasos cada una. Necesitamos ~100 por nivel.
2. **UI abrumadora**: Si se muestran 100 lecciones en una lista plana, los estudiantes se sentirán abrumados y abandonarán.
3. **Sin identidad visual por idioma**: Las lecciones no tienen elementos visuales que conecten al estudiante con la cultura del país.

### Solución

#### 1. Sistema de "Unidades" para agrupar lecciones (anti-churn)

En lugar de mostrar 100 lecciones en una lista, se organizan en **Unidades temáticas** (como Duolingo). Cada unidad agrupa 5-8 lecciones bajo un tema con un emoji y nombre descriptivo.

```text
┌─────────────────────────────┐
│  🗺 N5 — Ruta de aprendizaje │
│                             │
│  📦 Unidad 1: Los cimientos  │ ← Colapsable
│  ├── 1. Hiragana あ行        │
│  ├── 2. Hiragana か〜さ行     │
│  ├── 3. Hiragana た〜な行     │
│  ├── 4. Hiragana は〜ま行     │
│  └── 5. Hiragana や〜わ行     │
│  ✅ 5/5 completadas          │
│                             │
│  📦 Unidad 2: Katakana       │ ← Siguiente unidad
│  ├── 6. Katakana ア〜サ行     │
│  ├── 7. Katakana タ〜ワ行     │
│  └── ...                    │
│  🔒 0/5 completadas          │
│                             │
│  📦 Unidad 3: Primeras       │
│      palabras               │
│  ...                        │
└─────────────────────────────┘
```

**Beneficios anti-churn:**
- El estudiante solo ve 1-2 unidades a la vez (la actual y la siguiente)
- Progreso visible por micro-metas (completar una unidad de 5-8 lecciones)
- Sensación de logro frecuente
- No se siente abrumado al ver "100 lecciones pendientes"

**Cambios técnicos:**
- Añadir campo `unit` a la interfaz `Lesson` en `types.ts`: `unit?: { id: string; name: string; emoji: string }`
- Modificar `LevelMapPage.tsx` para agrupar lecciones por unidad y renderizar secciones colapsables
- Las unidades se desbloquean progresivamente (completar 80% de la unidad anterior)

#### 2. Generador de lecciones masivo y de alta calidad

Crear un nuevo sistema generador (`src/data/lessons/generator.ts`) que produzca ~100 lecciones por nivel con contenido auténtico y variado:

**Estructura del generador:**
- Diccionario de datos por idioma con ~500+ palabras, frases, gramática, lecturas por nivel
- Cada lección generada tiene 6-10 pasos con variedad de tipos (th, mc, tx, or, rd)
- Las unidades temáticas están predefinidas por nivel

**Unidades por nivel A1 (ejemplo - aplicable a todos los idiomas):**
1. Sistema de escritura / Fonética (5-8 lecciones)
2. Saludos y cortesía (5-6 lecciones)
3. Números y tiempo (5-6 lecciones)
4. Presentarse y familia (5-6 lecciones)
5. Colores y adjetivos básicos (5 lecciones)
6. Días, meses, estaciones (5 lecciones)
7. Comida y bebida (6-8 lecciones)
8. Partes del cuerpo y ropa (5 lecciones)
9. La casa y la ciudad (5-6 lecciones)
10. Transporte y direcciones (5 lecciones)
11. Clima y naturaleza (5 lecciones)
12. Profesiones y trabajo (5 lecciones)
13. Compras y dinero (5 lecciones)
14. Verbos esenciales (6-8 lecciones)
15. Gramática básica (5-6 lecciones)
16. Preguntas y pronombres (5 lecciones)
17. Frases de supervivencia (5 lecciones)
18. Repaso y lectura (3-5 lecciones)

= ~95-105 lecciones por nivel

**Archivos nuevos:**
- `src/data/lessons/generator.ts` — Motor de generación con plantillas de unidades
- `src/data/lessons/wordbanks/` — Directorio con bancos de palabras por idioma:
  - `src/data/lessons/wordbanks/es.ts`, `ko.ts`, `zh.ts`, `de.ts`, `it.ts`, `pt.ts`, `ru.ts`, `ar.ts`, `hi.ts`, `tr.ts`, `vi.ts`, `th.ts`, `nl.ts`, `pl.ts`
  - Cada archivo contiene ~500+ entradas organizadas por categoría temática con la palabra, lectura, significado, y ejemplos

**Para JP y FR** (que ya tienen contenido manual): se mantiene el contenido existente y se **expande** con lecciones generadas adicionales hasta llegar a 100.

#### 3. Fondos con marcas de agua culturales por idioma

Añadir imágenes SVG/emoji sutiles como fondo en `LessonPage.tsx` que reflejen el país:

**Mapeo de emojis por idioma (en `languages.ts`):**
```
jp: ['🏯', '🗻', '🌸', '⛩️', '🎌']
fr: ['🗼', '🥐', '🍷', '🏰', '⚜️']
zh: ['🏮', '🐉', '🧧', '🏯', '🎋']
de: ['🏰', '🍺', '🎄', '⚙️', '🦅']
ko: ['🎎', '🏯', '🌸', '🍜', '🎵']
es: ['💃', '🏟️', '🌻', '🎸', '🐂']
it: ['🏛️', '🍕', '🎭', '⛵', '🍝']
pt: ['⚽', '🏖️', '🎶', '🌴', '🦜']
ru: ['❄️', '🏰', '🎻', '🐻', '⭐']
ar: ['🕌', '🏜️', '🌙', '☕', '🐪']
hi: ['🕉️', '🏛️', '🌺', '🐘', '🪷']
tr: ['🕌', '🧿', '☕', '🌷', '🏺']
vi: ['🏮', '🌾', '🍜', '⛵', '🌸']
th: ['🏯', '🐘', '🌺', '🍜', '⛵']
nl: ['🌷', '🚲', '🧀', '⚓', '🎨']
pl: ['🏰', '❄️', '🦅', '🍎', '⛪']
en: ['🗽', '🏰', '☕', '🎭', '🦁']
```

**Implementación en LessonPage.tsx:**
- Añadir un `<div>` absoluto detrás del contenido con emojis rotados, en opacidad ~5-8%, tamaño grande (~80-120px), posicionados aleatoriamente
- Los emojis rotan lentamente con `animation: float` para dar sutileza
- Se seleccionan 3-4 emojis del array del idioma actual
- Solo se muestran en la zona de contenido, no interfieren con la interacción

```text
┌──────────────────────────────┐
│ ✕  [████████░░] ❤️❤️❤️      │
│──────────────────────────────│
│                     🏯       │  ← opacity: 0.05
│  Paso 1 de 10      (rotado) │
│  ┌──────────────┐           │
│  │ あ            │    🌸     │  ← opacity: 0.06
│  │ a - Vocal /a/ │  (rotado) │
│  └──────────────┘           │
│            ⛩️               │  ← opacity: 0.04
│──────────────────────────────│
│              [Continuar →]   │
└──────────────────────────────┘
```

### Archivos a modificar/crear

| Archivo | Acción |
|---------|--------|
| `src/data/types.ts` | Añadir campo `unit` a `Lesson` |
| `src/data/languages.ts` | Añadir campo `culturalEmojis` a `LangConfig` |
| `src/data/lessons/generator.ts` | **NUEVO** — Motor generador de 100 lecciones/nivel |
| `src/data/lessons/wordbanks/*.ts` | **NUEVOS** — Bancos de palabras por idioma (14 archivos) |
| `src/data/lessons/index.ts` | Integrar lecciones generadas para todos los idiomas |
| `src/data/lessons/jp.ts` | Añadir campo `unit` a lecciones existentes, expandir a ~100 |
| `src/data/lessons/fr.ts` | Igual que JP |
| `src/data/lessons/remaining.ts` | Reemplazar `makeLessons` con generador rico |
| `src/data/lessons/level2.ts` - `level5.ts` | Reemplazar generadores genéricos |
| `src/pages/LevelMapPage.tsx` | Agrupar por unidades con secciones colapsables |
| `src/pages/LessonPage.tsx` | Añadir fondo de emojis culturales como watermark |

### Nota sobre escala

100 lecciones × 8 pasos × 17 idiomas × 5-6 niveles = ~680,000-816,000 pasos de contenido. Esto se logra mediante:
- **Bancos de datos ricos** (~500 palabras/idioma/nivel) como materia prima
- **Plantillas de unidad** que generan lecciones variadas automáticamente
- **Contenido manual** para JP y FR como modelo de calidad
- Los generadores producen contenido real y específico del idioma, no genérico

La implementación se hará en fases, empezando por el sistema de unidades + UI + fondos culturales, luego los bancos de palabras idioma por idioma.

