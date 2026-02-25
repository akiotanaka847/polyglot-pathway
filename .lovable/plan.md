

## Plan: Fix i18n for Lessons, Reduce to 10 Languages, Improve UX

### Problems Found

**1. Lesson content is hardcoded in Spanish regardless of native language**

The generator (`generator.ts`) hardcodes all instructional text in Spanish:
- Question templates: `¿"${entry.mn}" en ${lang}?`, `Escribe "${entry.mn}" en ${lang}:`, `¿Qué significa "${entry.w}"?`
- Theory notes: `${entry.mn} en ${lang}.`
- Lesson titles: `${unitDef.name} ${i + 1} — ${lang}`, `Repaso: ${unitDef.name} — ${lang}`
- Unit names: "Los Cimientos", "Saludos y Cortesía", "Números y Tiempo", etc.
- The `makeLessons` helper in `remaining.ts` has the same problem with hardcoded `"Saludos"`, `"¿Hola en..."`, etc.

The `mn` (meaning) field in wordbanks is in English for DE, IT, PT, KO, ZH banks but displayed raw — so a Spanish-native user sees English meanings.

**2. 17 languages is excessive — several have minimal content**

TR, VI, TH, NL, PL, IT, DE have skeletal generator-based content. User wants top 10 most spoken.

**3. UX can be more welcoming**

Unit names, lesson flow, and general polish need improvement for a friendlier student experience.

### Changes

#### 1. Reduce to 10 languages

Keep: **EN, ZH, HI, ES, FR, AR, PT, RU, JP, KO** (the 10 most spoken languages globally, with Korean replacing Bengali which isn't available).

Remove from `LANGUAGES` array and all data files: `de`, `it`, `tr`, `vi`, `th`, `nl`, `pl`.

**Files affected:**
- `src/data/languages.ts` — Remove 7 language entries from `LANGUAGES` array and their UI translation blocks
- `src/data/lessons/index.ts` — Remove imports and LESSON_DATA entries for removed languages
- `src/data/lessons/remaining.ts` — Remove lesson generators for removed languages
- `src/data/lessons/level2.ts` through `level5.ts` — Remove exports for removed languages
- `src/data/lessons/wordbanks/de.ts`, `it.ts`, `pt.ts` — PT stays, remove DE and IT wordbanks
- `src/data/quizzes.ts` — Remove quiz entries for removed languages
- `src/data/exams.ts`, `exams-a2.ts`, `exams-advanced.ts`, `exams-upper.ts` — Remove exam data for removed languages
- `src/data/achievements.ts` — Remove rank data for removed languages
- `src/data/conversations.ts`, `src/data/stories.ts`, `src/data/culture.ts` — Remove entries for removed languages
- `src/data/reference.ts` — Remove reference data for removed languages

#### 2. Make generator i18n-aware

**Add translation templates to `generator.ts`:**

Create a `LESSON_I18N` record keyed by native language code with all instructional strings:

```text
{
  en: {
    whatIs: '"${mn}" in ${lang}?',
    writeMeaning: 'Write "${mn}" in ${lang}:',
    whatMeans: 'What does "${word}" mean?',
    noteTemplate: '${mn} in ${lang}.',
    review: 'Review',
    ...unitNames (18 translated unit names)
  },
  es: {
    whatIs: '¿"${mn}" en ${lang}?',
    writeMeaning: 'Escribe "${mn}" en ${lang}:',
    ...
  },
  // ... for all 10 native languages
}
```

**Modify `generateLessons()` signature** to accept `nativeLang: string` parameter and use the i18n templates.

**Problem:** The generator runs at import time (module-level in `index.ts`), before we know the user's native language. This is the root cause — lessons are generated once at build/import time.

**Solution:** Make `LESSON_DATA` lazy. Instead of generating at import, wrap in a function `getLessons(langCode, level, nativeLang)` that generates on first access and caches. Or simpler: store the wordbank `mn` field in English as a universal language, and translate the *question templates and UI chrome* at render time in `LessonPage.tsx` rather than baking them into the data.

**Chosen approach — translate at render time:**
- Keep wordbank `mn` in English (already is for most banks; fix `es` bank to use English too)
- Add i18n question/note template strings to `UI` in `languages.ts` (e.g., `what_is_in_lang`, `write_in_lang`, `what_does_mean`, `review_of`)
- In `LessonPage.tsx`, when rendering a step, detect template placeholders and replace with translated versions using `tt()`. Specifically:
  - Theory step `note` field: if it matches the pattern `"X in Y."`, replace with `tt('note_template').replace(...)` 
  - MC step `q` field: detect `¿"..."` pattern and re-render using `tt('what_is_in_lang')`
  - Text step `q`: detect `Escribe` and replace with `tt('write_in_lang')`
- Unit names in `generator.ts`: add a `UNIT_I18N` lookup with translations for each of the 18 unit names in all 10 languages
- Lesson titles: since they contain the unit name + language name, translate at render time in `LevelMapPage.tsx`

**Actually, cleanest approach:** Since the generator runs once at module load, we can't know native lang. So:

1. Store structured data in steps instead of pre-formatted strings:
   - Change generator to produce `q: { type: 'whatIs', mn: 'Hello', lang: 'Korean' }` instead of `q: '¿"Hola" en Coreano?'`
   
   This is too invasive. Better:

2. **Use placeholder tokens** in generated content that get replaced at render time:
   - Generator produces: `q: '{{what_is}} "Hello" {{in_lang}} Korean?'`
   - `LessonPage.tsx` replaces `{{what_is}}` with `tt('what_is')` etc.

   Still messy. **Simplest viable approach:**

3. **Add `_mn` field and use `nativeLang` to pick translation at render time:**
   - Keep `mn` in English in all wordbanks (standardize)
   - Add UI keys: `q_what_is` = `"$1" in $2?` / `"$1" en $2?`, `q_write` = `Write "$1" in $2:`, `q_what_means` = `What does "$1" mean?`
   - In `generator.ts`, encode question type metadata in the `q` field using a simple prefix convention: `q: 'QWHAT|Hello|Korean'` or store in a separate field
   - At render time in `LessonPage.tsx`, detect these encoded questions and format with `tt()`

**Final chosen approach (minimal changes, maximum impact):**

- Add new UI translation keys to `languages.ts` for question templates
- Modify `generator.ts` to use **English** as the base for `mn` fields and encode questions with a marker prefix like `##MC##Hello##Korean` 
- Actually, even simpler: the generator already has `lang` parameter. Just make it produce questions using template markers:
  - `q: '##WHATIS##Hello##Coreano'`  → at render → `tt('q_what_is').replace('$1','Hello').replace('$2','Coreano')`

No — the absolute simplest: **regenerate lessons lazily with the user's native language.** Change `LESSON_DATA` from a static object to a function that caches per nativeLang.

**Final decision:** Regenerate lazily. 

- In `index.ts`, change `LESSON_DATA` to `getLessonData(nativeLang: string)` 
- Cache results in a `Map<string, Record<string, Record<string, Lesson[]>>>`
- Pass `nativeLang` to `generateLessons()` which uses translated templates
- Existing hand-written JP/FR lessons: add a translation function that swaps Spanish strings for the native language equivalents
- `LevelMapPage.tsx` and `LessonPage.tsx` call `getLessonData(state.nativeLang)` instead of importing `LESSON_DATA`

#### 3. Standardize wordbank meanings to English

All wordbank `mn` fields should be in English. The `es` wordbank already has Spanish meanings — convert to English. The generator will then translate to the user's native language at generation time using a simple lookup.

Add a `MEANING_I18N` record with translations of common meanings (Hello, Thank you, Goodbye, etc.) for each native language. Since we have ~200 unique meanings per wordbank, this is a lookup table of ~200 entries × 10 languages.

Actually, simpler: just keep `mn` in English and add a `translateMeaning(mn: string, nativeLang: string): string` utility that uses a dictionary. For languages without a translation, fall back to English.

#### 4. UX improvements

**Unit names translation:** Create `UNIT_NAMES_I18N` with the 18 unit names in all 10 native languages.

**Lesson titles:** Format as `"{UnitName} {n}"` using translated unit names.

**LevelMapPage.tsx:**
- Show a friendly welcome message at the top: "Hi! Let's learn {language} today" (translated)
- Add small cultural emoji next to the language flag
- Progress celebration: when a unit is 100% done, show a subtle confetti/star animation

**LessonPage.tsx:**
- Already has cultural watermarks — keep those
- Ensure all button text, labels, feedback messages use `tt()` (already mostly done)

### Files to modify

| File | Change |
|------|--------|
| `src/data/languages.ts` | Remove 7 languages, add question template UI keys, add meaning translations |
| `src/data/lessons/generator.ts` | Accept `nativeLang`, use translated templates for questions/notes/titles/units |
| `src/data/lessons/index.ts` | Change `LESSON_DATA` to lazy `getLessonData(nativeLang)`, remove 7 languages |
| `src/data/lessons/wordbanks/es.ts` | Standardize `mn` to English |
| `src/data/lessons/wordbanks/de.ts` | Delete (language removed) |
| `src/data/lessons/wordbanks/it.ts` | Delete (language removed) |
| `src/data/lessons/remaining.ts` | Remove 7 languages, use generator instead of `makeLessons` |
| `src/data/lessons/level2.ts` - `level5.ts` | Remove 7 languages |
| `src/data/quizzes.ts` | Remove 7 languages |
| `src/data/exams.ts` + exam files | Remove 7 languages |
| `src/pages/LevelMapPage.tsx` | Use `getLessonData(nativeLang)`, translate unit names |
| `src/pages/LessonPage.tsx` | Use `getLessonData(nativeLang)` |
| `src/pages/QuizPage.tsx` | Use `getLessonData(nativeLang)` |
| `src/pages/HomePage.tsx` | Filter to 10 languages |
| `src/contexts/AppContext.tsx` | No changes needed |
| Various data files | Remove references to deleted languages |

### Implementation order

1. Remove 7 languages from all files (biggest cleanup)
2. Standardize wordbank `mn` to English  
3. Add i18n templates to `languages.ts` and `generator.ts`
4. Make `LESSON_DATA` lazy with `nativeLang` parameter
5. Update all pages that import `LESSON_DATA` to use the new function
6. Test that switching native language properly translates lesson content

