# Architecture Rules

- Treat `currentLearningLang` as the single persisted source for the user's current learning language; XP never selects navigation context.
- Keep speaking topic ids stable and resolve visible labels through audited localization data so coach context and UI copy cannot drift.- Generated lesson filler must come only from the target language's own per-level bank (`wordbanks/levels/<code>.json` via `getLevelBank`); never borrow another language's bank, because it teaches the wrong language.
- Vocabulary meanings resolve through `src/data/lessons/meanings/<native>.json` keyed by the English gloss, with English (never Spanish) as the last fallback; `src/test/lesson-language.test.ts` guards both rules.
- Lesson, quiz and exam answer UI uses the shared `components/lesson/LessonControls` (ChoiceButton, ActionBar, ExitButton) so touch sizes and feedback stay consistent.
