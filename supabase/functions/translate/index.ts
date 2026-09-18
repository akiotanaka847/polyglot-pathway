// Translates batches of learning content (story narration, advanced lesson notes)
// into the learner's native language using Lovable AI, with a shared DB cache.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LANG_NAMES: Record<string, string> = {
  es: "Spanish", en: "English", fr: "French", pt: "Portuguese", zh: "Simplified Chinese",
  jp: "Japanese", ja: "Japanese", ko: "Korean", ru: "Russian", ar: "Arabic", hi: "Hindi", ro: "Romanian",
};

async function sha(text: string) {
  const buf = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { texts, lang } = await req.json() as { texts: string[]; lang: string };
    if (!Array.isArray(texts) || !lang) {
      return new Response(JSON.stringify({ error: "texts[] and lang are required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const target = LANG_NAMES[lang];
    if (!target || lang === "es") {
      return new Response(JSON.stringify({ translations: texts }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const clean = [...new Set(texts.filter(t => typeof t === "string" && t.trim().length > 0))];
    const keys = await Promise.all(clean.map(async t => `${lang}:${await sha(t)}`));
    const keyOf = new Map(clean.map((t, i) => [t, keys[i]]));

    const cached = new Map<string, string>();
    const { data: rows } = await supabase
      .from("translation_cache").select("key, translated").in("key", keys);
    for (const r of rows ?? []) cached.set(r.key, r.translated);

    const missing = clean.filter(t => !cached.has(keyOf.get(t)!));

    if (missing.length > 0) {
      const aiKey = Deno.env.get("LOVABLE_API_KEY");
      if (!aiKey) throw new Error("LOVABLE_API_KEY missing");

      const prompt = `Translate each numbered line from Spanish into ${target}.
Rules:
- Keep words written in the language being taught (Japanese, Chinese, Korean, Arabic, etc.) EXACTLY as they are, untranslated.
- Keep emojis, names, punctuation and numbering.
- Natural, friendly tone for a language-learning app.
- Reply ONLY with a JSON array of strings, same order and length as the input.

${missing.map((t, i) => `${i + 1}. ${t}`).join("\n")}`;

      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${aiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "google/gemini-3.8-flash",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (res.status === 429 || res.status === 402) {
        return new Response(JSON.stringify({ error: "rate_limited" }), {
          status: res.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (!res.ok) throw new Error(`AI gateway ${res.status}: ${await res.text()}`);

      const json = await res.json();
      let content: string = json.choices?.[0]?.message?.content ?? "[]";
      content = content.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();

      let out: string[] = [];
      try { out = JSON.parse(content); } catch { out = []; }

      const inserts: { key: string; lang: string; source: string; translated: string }[] = [];
      missing.forEach((src, i) => {
        const tr = typeof out[i] === "string" && out[i].trim() ? out[i] : src;
        cached.set(keyOf.get(src)!, tr);
        if (tr !== src) inserts.push({ key: keyOf.get(src)!, lang, source: src, translated: tr });
      });
      if (inserts.length) await supabase.from("translation_cache").upsert(inserts, { onConflict: "key" });
    }

    const translations = texts.map(t => {
      const k = keyOf.get(t);
      return (k && cached.get(k)) || t;
    });

    return new Response(JSON.stringify({ translations }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("translate error", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
