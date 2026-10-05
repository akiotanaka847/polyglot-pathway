# Architecture Rules

- Treat `currentLearningLang` as the single persisted source for the user's current learning language; XP never selects navigation context.
- Keep speaking topic ids stable and resolve visible labels through audited localization data so coach context and UI copy cannot drift.