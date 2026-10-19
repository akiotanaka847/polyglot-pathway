import { useEffect, useState, useMemo } from 'react';
import { getCachedTranslation, translateBatch } from '@/utils/aiTranslate';

/**
 * Translates long-form content with AI (once per sentence, then cached).
 * Returns a `tr()` helper plus a `loading` flag for the first pass.
 */
export function useAiTranslate(texts: string[], nativeLang: string) {
  const [version, setVersion] = useState(0);
  const [loading, setLoading] = useState(false);
  const signature = useMemo(() => nativeLang + '|' + texts.join('¶'), [nativeLang, texts]);

  useEffect(() => {
    if (nativeLang === 'es' || !texts.length) return;
    const missing = texts.filter(t => t && !getCachedTranslation(t, nativeLang));
    if (!missing.length) return;
    let alive = true;
    setLoading(true);
    // Split into manageable batches so one request is never too large.
    const batches: string[][] = [];
    for (let i = 0; i < missing.length; i += 25) batches.push(missing.slice(i, i + 25));
    (async () => {
      for (const batch of batches) {
        await translateBatch(batch, nativeLang);
        if (!alive) return;
        setVersion(v => v + 1);
      }
      if (alive) setLoading(false);
    })();
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  const tr = (text: string | undefined) => {
    if (!text) return '';
    if (nativeLang === 'es') return text;
    return getCachedTranslation(text, nativeLang) ?? text;
  };

  return { tr, loading, version };
}
