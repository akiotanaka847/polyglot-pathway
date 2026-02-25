

## Plan: Remove Flashcards, Expand Culture, Fix Incomplete Lesson Levels

### Problems Found

1. **Flashcards** - To be removed entirely as requested
2. **Culture** - Only Japan (5 cards) and France (5 cards) exist in `culture.ts`. The other 15 languages have zero content.
3. **JP N4** - Only 5 hand-written lessons in `src/data/lessons/jp.ts` (lines 300-348). Needs 25.
4. **FR A2** - Only 5 hand-written lessons in `src/data/lessons/fr.ts` (lines 182-210). Needs 25.
5. **Levels 3-5** use generators (`makeL3`, `makeL4`, `makeL5`) that produce 25 lessons each - those are fine.

---

### Changes

#### 1. Remove Flashcards (6 files)

- **Delete** `src/pages/FlashcardsPage.tsx` and `src/data/flashcards.ts`
- **`src/App.tsx`**: Remove FlashcardsPage import and `/flashcards` route
- **`src/pages/PracticePage.tsx`**: Remove the flashcards menu item
- **`src/pages/DashboardPage.tsx`**: Remove the flashcards button, replace with another action (e.g., exams)
- **`src/contexts/AppContext.tsx`**: Remove `incrementFC`, `updateSRS`, `srs` state, and `fcTotal` from state (keep if other features use them, otherwise clean up)
- **`src/data/achievements.ts`**: Remove flashcard-related achievements (`fc_100`, `fc_1000`)

#### 2. Expand Culture Data (`src/data/culture.ts`)

Add 5 culture cards each for all remaining languages: Chinese, German, Italian, Portuguese, Korean, Russian, Arabic, Hindi, Turkish, Vietnamese, Thai, Dutch, Polish, English, Spanish. Each card will have an icon, title, body text, and a fun fact, covering topics like traditions, food, festivals, history, and social customs.

#### 3. Expand JP N4 to 25 Lessons (`src/data/lessons/jp.ts`)

Currently has 5 lessons (te-form, nai-form, tai-form, particles, conditionals). Will add 20 more covering: potential form, volitional, passive, causative, giving/receiving verbs, relative clauses, transitive/intransitive, honorific speech, humble speech, compound sentences, time expressions, counters advanced, directions, at the hospital, at the office, reading comprehension passages, and a review lesson.

#### 4. Expand FR A2 to 25 Lessons (`src/data/lessons/fr.ts`)

Currently has 5 lessons (passé composé, imparfait, futur proche, pronoms COD/COI, conditionnel). Will add 20 more covering: subjonctif intro, impératif, plus-que-parfait, pronoms relatifs, comparatif/superlatif, expressions de temps, la santé, le logement, les voyages, la nourriture, le travail, descriptions physiques, directions, au restaurant, à l'hôtel, la météo, les loisirs, opinions et sentiments, lecture compréhension, and a review lesson.

---

### Technical Details

- The `makeLessons` generator in `remaining.ts` already produces 25 lessons - those A1 levels are fine
- The `makeL2Lessons` generator in `level2.ts` produces 25 lessons - those are fine
- Only the hand-written levels (JP N4, FR A2) are short at 5 lessons each
- Flashcard cleanup includes removing the SRS state management from AppContext, but `fcTotal` counter will remain in state shape to avoid breaking localStorage hydration for existing users

