// Decides what a "listen" button may read aloud so a voice never reads text in
// another language (e.g. a Spanish explanation with a Japanese voice).
type Script = 'kana' | 'han' | 'hangul' | 'cyrillic' | 'arabic' | 'devanagari' | 'latin';

const RANGES: Record<Script, RegExp> = {
  kana: /[\u3040-\u30ff\u31f0-\u31ff]/,
  han: /[\u3400-\u9fff\uf900-\ufaff]/,
  hangul: /[\uac00-\ud7af\u1100-\u11ff\u3130-\u318f]/,
  cyrillic: /[\u0400-\u04ff]/,
  arabic: /[\u0600-\u06ff\u0750-\u077f]/,
  devanagari: /[\u0900-\u097f]/,
  latin: /[A-Za-z\u00c0-\u024f]/,
};

const TARGET_SCRIPTS: Record<string, Script[]> = {
  jp: ['kana', 'han'], ja: ['kana', 'han'], zh: ['han'], ko: ['hangul'],
  ru: ['cyrillic'], ar: ['arabic'], hi: ['devanagari'],
};

export function scriptsFor(lang: string): Script[] {
  return TARGET_SCRIPTS[lang] || ['latin'];
}

function scriptOf(ch: string): Script | null {
  for (const s of Object.keys(RANGES) as Script[]) if (RANGES[s].test(ch)) return s;
  return null;
}

/** Keeps only the parts of `text` written in the target language's script. */
export function extractTarget(text: string, lang: string): string {
  const allowed = scriptsFor(lang);
  const clean = text.replace(/<[^>]*>/g, '').replace(/[()（）]/g, ' ');
  if (allowed.includes('latin')) {
    // Latin targets: refuse only if there is no latin text at all.
    return RANGES.latin.test(clean) ? clean.trim() : '';
  }
  // Non-latin targets: keep runs of the target script, joined by spaces.
  const runs: string[] = [];
  let cur = '';
  for (const ch of clean) {
    const s = scriptOf(ch);
    if (s && allowed.includes(s)) cur += ch;
    else if (cur && !s && /[\s、。！？!?ー〜・0-9]/.test(ch)) cur += ch;
    else { if (cur.trim()) runs.push(cur.trim()); cur = ''; }
  }
  if (cur.trim()) runs.push(cur.trim());
  return runs.join('、').trim();
}
