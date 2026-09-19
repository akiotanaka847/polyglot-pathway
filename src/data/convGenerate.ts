import { Conversation, ConvTurn } from './types';
import { VOCAB_REF } from './reference';
import { CONV_THEMES, ConvTheme } from './convThemes';
import { getLangConfig } from './languages';

// Splits an NPC line like "こんにちは (Hola)" into the target-language text
// and its meaning, so meaning subtitles can be hidden.
export function splitNpc(npc: string): { text: string; meaning: string } {
  const m = npc.match(/^(.*?)[（(]([^)）]*)[)）]\s*$/);
  if (m && m[2]) return { text: m[1].trim(), meaning: m[2].trim() };
  return { text: npc.trim(), meaning: '' };
}

function poolFor(lang: string): { word: string; reading?: string; meaning: string; example?: string; level: string }[] {
  const byLevel = VOCAB_REF[lang] || {};
  const out: { word: string; reading?: string; meaning: string; example?: string; level: string }[] = [];
  Object.keys(byLevel).forEach(level => {
    (byLevel[level] || []).forEach(e => out.push({ ...e, level }));
  });
  return out;
}

function matches(entry: { meaning: string; example?: string }, theme: ConvTheme): boolean {
  const hay = `${entry.meaning} ${entry.example || ''}`.toLowerCase();
  return theme.keywords.some(k => hay.includes(k.toLowerCase()));
}

// Builds a vocabulary role-play for a theme using real sentences from the
// language reference. Used for themes without a handcrafted dialogue.
function buildThemeConv(lang: string, theme: ConvTheme, index: number): Conversation | null {
  const pool = poolFor(lang);
  if (pool.length < 4) return null;
  const config = getLangConfig(lang);

  let picked = pool.filter(e => matches(e, theme));
  if (picked.length < 4) {
    // Deterministic fallback slice so themes stay stable between renders
    const start = (index * 7) % Math.max(1, pool.length - 6);
    picked = [...picked, ...pool.slice(start, start + 8)];
  }
  const seen = new Set<string>();
  picked = picked.filter(e => (seen.has(e.word) ? false : (seen.add(e.word), true))).slice(0, 5);
  if (picked.length < 3) return null;

  const turns: ConvTurn[] = [];
  for (let i = 0; i < picked.length - 1; i++) {
    const cue = picked[i];
    const reply = picked[i + 1];
    turns.push({
      npc: cue.example || cue.word,
      npcMn: cue.meaning,
      hint: `Responde usando "${reply.meaning}"`,
      expected: reply.example || reply.word,
      accept: [reply.word, reply.reading || reply.word, reply.meaning].filter(Boolean) as string[],
    });
  }

  return {
    id: `${lang}-theme-${theme.id}`,
    emoji: theme.emoji,
    title: theme.name,
    scenario: theme.scenario,
    level: config.levels[Math.min(theme.difficulty - 1, config.levels.length - 1)],
    theme: theme.id,
    turns: turns.slice(0, 4),
  };
}

const cache = new Map<string, Conversation[]>();

// All 24 themes for a language: handcrafted dialogues first, then generated
// role-plays for the themes that have no handcrafted version yet.
export function getThemedConversations(lang: string, handcrafted: Conversation[]): Conversation[] {
  const key = lang;
  if (cache.has(key)) return cache.get(key)!;

  const assigned = new Map<string, Conversation[]>();
  handcrafted.forEach(c => {
    const theme = c.theme || guessTheme(c);
    const list = assigned.get(theme) || [];
    list.push({ ...c, theme });
    assigned.set(theme, list);
  });

  const result: Conversation[] = [];
  CONV_THEMES.forEach((theme, i) => {
    const existing = assigned.get(theme.id);
    if (existing?.length) { result.push(...existing); return; }
    const gen = buildThemeConv(lang, theme, i);
    if (gen) result.push(gen);
  });
  // Any handcrafted dialogue whose theme is not in the catalogue
  handcrafted.forEach(c => {
    if (!result.some(r => r.id === c.id)) result.push(c);
  });

  cache.set(key, result);
  return result;
}

function guessTheme(c: Conversation): string {
  const hay = `${c.title} ${c.scenario}`.toLowerCase();
  // Prefer an exact/near name match over keyword overlap so a handcrafted
  // dialogue titled like a theme (e.g. "En la farmacia") claims that theme
  // and the generated duplicate is suppressed.
  const byName = CONV_THEMES.find(t => {
    const n = t.name.toLowerCase();
    return hay.includes(n) || n.includes(c.title.toLowerCase().trim());
  });
  if (byName) return byName.id;
  const found = CONV_THEMES.find(t =>
    t.keywords.some(k => hay.includes(k.toLowerCase())) || hay.includes(t.name.toLowerCase().slice(0, 8))
  );
  return found?.id || 'smalltalk';
}
