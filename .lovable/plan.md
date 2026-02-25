

## Plan: Expansión masiva de contenido - Lecciones, Simulacros y Repositorio

### Problema actual

1. **Lecciones**: La mayoría de idiomas tiene solo 1-3 lecciones en el primer nivel. El usuario pide 20-25 por nivel.
2. **Simulacros/Exámenes**: Solo existe contenido de quiz básico. No hay sistema de examen de certificación para ningún idioma.
3. **Repositorio (Reference)**: Faltan gramática y vocabulario para ru, ar, hi, tr, vi, th, nl, pl, es. El vocabulario falta para it, pt, ko y otros. El contenido existente es escaso.

### Alcance del cambio

Esto es un cambio **extremadamente grande** en volumen de datos. Cada nivel con 20-25 lecciones de ~8 pasos cada una significa miles de líneas de contenido. Hay que dividirlo en archivos manejables.

### Arquitectura propuesta

**1. Dividir `lessons.ts` en archivos por idioma**

```text
src/data/lessons/
  ├── index.ts          (re-exporta LESSON_DATA y LEVELS)
  ├── jp.ts             (20-25 lecciones N5, 20+ N4, etc.)
  ├── fr.ts             (20-25 lecciones A1, A2)
  ├── zh.ts             (20-25 lecciones HSK1)
  ├── de.ts             (20-25 lecciones A1)
  ├── it.ts             (20-25 lecciones A1)
  ├── pt.ts             (20-25 lecciones A1)
  ├── ko.ts             (20-25 lecciones TOPIK1)
  ├── ru.ts             (20-25 lecciones A1)
  ├── ar.ts             (20-25 lecciones A1)
  ├── hi.ts             (20-25 lecciones A1)
  ├── en.ts             (20-25 lecciones A1)
  ├── tr.ts, vi.ts, th.ts, nl.ts, pl.ts, es.ts
```

**2. Sistema de Simulacros de Certificación** — nuevo archivo `src/data/exams.ts`

Crear exámenes que simulen las certificaciones reales:
- **JP**: JLPT N5, N4, N3 (secciones: Vocabulario, Gramática, Lectura)
- **FR**: DELF A1, A2, B1 (Comprensión escrita, Gramática, Vocabulario)
- **ZH**: HSK 1, 2, 3 (Comprensión, Vocabulario, Gramática)
- **DE**: Goethe A1, A2 (Lesen, Wortschatz, Grammatik)
- **IT**: CILS A1, A2
- **PT**: CELPE-Bras A1, A2
- **KO**: TOPIK I, II
- **RU**: TORFL A1, A2
- **EN**: Cambridge A1, A2 / TOEFL-style
- **AR, HI, TR, VI, TH, NL, PL, ES**: Exámenes tipo CEFR A1, A2

Cada examen tendrá:
- 3 secciones (vocabulario, gramática, comprensión lectora)
- 15-20 preguntas por sección
- Temporizador y puntuación mínima de 70%

**3. Expandir Repositorio** — `src/data/reference.ts`

Para TODOS los 17 idiomas:
- **Gramática**: 8-15 entradas por idioma (partículas, conjugaciones, estructura, tiempos verbales)
- **Vocabulario**: 15-30 palabras por nivel, organizadas por nivel de certificación

Idiomas que faltan completamente: ru, ar, hi, tr, vi, th, nl, pl, es

**4. Expandir Quizzes** — `src/data/quizzes.ts`

- 10-15 preguntas por nivel por idioma (actualmente 2-4)
- Cubrir todos los niveles que tienen lecciones

**5. Página de Simulacros** — nueva `src/pages/ExamPage.tsx`

- Selección de idioma y nivel de certificación
- Interfaz de examen con secciones, temporizador, y resultados detallados
- Ruta: `/exam/:lang/:level`

**6. Actualizar PracticePage.tsx**

- El botón "Simulacros" llevará a una página de selección de examen por idioma, no solo a `/levels/jp`

### Contenido de lecciones por idioma (primer nivel, 20-25 cada uno)

Temas estándar para cubrir en el primer nivel de cada idioma:
1. Saludos básicos
2. Números 1-10
3. Números 11-100
4. Presentarse
5. Familia
6. Colores
7. Días de la semana
8. Meses y estaciones
9. Comida y bebida
10. En el restaurante
11. Partes del cuerpo
12. Ropa
13. La casa / habitaciones
14. Direcciones
15. Transporte
16. Clima
17. Profesiones
18. Tiempo (horas)
19. Compras / dinero
20. Verbos esenciales
21. Adjetivos comunes
22. Preguntas básicas
23. Pronombres y posesivos
24. Frases de supervivencia
25. Repaso general

Cada lección: 7-10 pasos (teoría + ejercicios mixtos mc/tx/or)

### Archivos a crear/modificar

| Archivo | Acción |
|---|---|
| `src/data/lessons/jp.ts` | Crear — 20+ lecciones N5, 20+ N4 |
| `src/data/lessons/fr.ts` | Crear — 20+ lecciones A1, A2 |
| `src/data/lessons/zh.ts` | Crear — 20+ lecciones HSK1 |
| `src/data/lessons/de.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/it.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/pt.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/ko.ts` | Crear — 20+ lecciones TOPIK1 |
| `src/data/lessons/ru.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/ar.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/hi.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/en.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/tr.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/vi.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/th.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/nl.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/pl.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/es.ts` | Crear — 20+ lecciones A1 |
| `src/data/lessons/index.ts` | Crear — re-exportar todo |
| `src/data/exams.ts` | Crear — exámenes de certificación para todos |
| `src/data/reference.ts` | Expandir masivamente — gramática y vocabulario completo |
| `src/data/quizzes.ts` | Expandir — 10-15 preguntas por nivel |
| `src/pages/ExamPage.tsx` | Crear — interfaz de simulacro |
| `src/pages/ExamSelectPage.tsx` | Crear — selección de examen |
| `src/pages/PracticePage.tsx` | Modificar — ruta simulacros |
| `src/App.tsx` | Modificar — agregar rutas de examen |
| `src/data/lessons.ts` | Eliminar (reemplazado por carpeta) |

### Nota importante

Debido al volumen extremo (~20,000+ líneas de contenido educativo), la implementación se hará en varias iteraciones priorizando:
1. **Primera iteración**: Estructura de archivos + 5 idiomas principales completos (JP, FR, ZH, EN, DE) + sistema de exámenes + repositorio expandido
2. **Segunda iteración**: Resto de idiomas (IT, PT, KO, RU, AR, HI, TR, VI, TH, NL, PL, ES)

