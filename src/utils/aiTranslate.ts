import { supabase } from '@/integrations/supabase/client';

/**
 * AI translation for long-form content (story narration, advanced notes) that the
 * offline pattern dictionary cannot cover. Results are cached in the backend and
 * in localStorage so each sentence is translated only once, ever.
 */

const LS_KEY = 'voxia_ai_tr';
const memory = new Map<string, string>();
let loaded = false;

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) for (const [k, v] of Object.entries(JSON.parse(raw) as Record<string, string>)) memory.set(k, v);
  } catch { /* ignore */ }
}

function persist() {
  try {
    const obj: Record<string, string> = {};
    // keep the cache bounded
    const entries = [...memory.entries()].slice(-4000);
    for (const [k, v] of entries) obj[k] = v;
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
  } catch { /* ignore */ }
}

const k = (lang: string, text: string) => lang + '\u0000' + text;

export function getCachedTranslation(text: string, lang: string): string | null {
  if (!text || lang === 'es') return text || '';
  load();
  return memory.get(k(lang, text)) ?? null;
}

const inFlight = new Map<string, Promise<void>>();

/** Translates the given texts (batched) and resolves once they are cached. */
export async function translateBatch(texts: string[], lang: string): Promise<void> {
  if (lang === 'es') return;
  load();
  const pending = [...new Set(texts.filter(t => t && t.trim() && !memory.has(k(lang, t))))];
  if (!pending.length) return;

  const batchKey = lang + '|' + pending.length + '|' + pending[0].slice(0, 40);
  const existing = inFlight.get(batchKey);
  if (existing) return existing;

  const job = (async () => {
    try {
      const { data, error } = await supabase.functions.invoke('translate', {
        body: { texts: pending, lang },
      });
      if (error) throw error;
      const out: string[] = data?.translations ?? [];
      pending.forEach((src, i) => {
        const tr = typeof out[i] === 'string' && out[i].trim() ? out[i] : src;
        memory.set(k(lang, src), tr);
      });
      persist();
    } catch (e) {
      console.error('AI translation failed', e);
      // Cache nothing on failure so a later attempt can retry.
    } finally {
      inFlight.delete(batchKey);
    }
  })();

  inFlight.set(batchKey, job);
  return job;
}
