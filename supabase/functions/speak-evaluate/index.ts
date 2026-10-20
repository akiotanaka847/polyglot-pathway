// Evaluates a spoken monologue (Stimuler-style 60s talk): band scores 1-9 per
// skill, words likely mispronounced, a model answer and tips in the native language.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const LANG_NAMES: Record<string, string> = {
  es: "Spanish", en: "English", fr: "French", pt: "Portuguese", zh: "Simplified Chinese",
  jp: "Japanese", ja: "Japanese", ko: "Korean", ru: "Russian", ar: "Arabic", hi: "Hindi", ro: "Romanian",
};
const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
const band = (v: unknown) => { const n = Number(v); return Number.isFinite(n) ? Math.min(9, Math.max(1, Math.round(n * 2) / 2)) : 5; };

const schema = {
  type: "object", additionalProperties: false,
  required: ["fluency", "grammar", "vocabulary", "pronunciation", "words", "model", "modelMeaning", "tips"],
  properties: {
    fluency: { type: "number" }, grammar: { type: "number" }, vocabulary: { type: "number" }, pronunciation: { type: "number" },
    words: { type: "array", items: { type: "string" } },
    model: { type: "string" }, modelMeaning: { type: "string" },
    tips: { type: "array", items: { type: "string" } },
  },
};

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const body = await req.json() as { said?: string; lang?: string; native?: string; topic?: string; level?: string; seconds?: number };
    const said = String(body.said || "").trim().slice(0, 4000);
    if (!said) return json({ error: "said is required" }, 400);
    const target = LANG_NAMES[body.lang || ""] || "English";
    const native = LANG_NAMES[body.native || ""] || "English";
    const key = Deno.env.get("LOVABLE_API_KEY");
    if (!key) return json({ error: "AI not configured" }, 500);

    const prompt = `You are an encouraging ${target} speaking examiner. The learner (native ${native}, level ${body.level || "beginner"}) spoke for about ${body.seconds || 60} seconds on the topic "${body.topic || "free"}".
Speech transcription (ignore punctuation/casing): "${said}"
Score each skill on an IELTS-like band 1-9 (halves allowed), honestly for their level: fluency (length, flow, hesitation), grammar, vocabulary (range), pronunciation (infer from words the transcriber likely misheard or odd forms).
"words": up to 5 single words in ${target} from (or intended in) their speech that were probably mispronounced or misheard; write each correctly in ${target}. Empty if none.
"model": a short natural model answer (3-5 sentences) in ${target} on the same topic at a slightly higher level than theirs.
"modelMeaning": translation of the model answer into ${native}.
"tips": 2-3 short, warm, concrete tips in ${native}.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra", reasoning_effort: "low",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_schema", json_schema: { name: "evaluation", strict: true, schema } },
      }),
    });
    if (res.status === 429 || res.status === 402 || res.status === 403) return json({ error: "rate_limited" }, res.status);
    if (!res.ok) throw new Error(`AI gateway ${res.status}: ${await res.text()}`);
    const data = await res.json();
    let out: Record<string, unknown> = {};
    try { out = JSON.parse(String(data.choices?.[0]?.message?.content || "{}").replace(/^```(?:json)?/i, "").replace(/```$/, "")); } catch { out = {}; }
    return json({
      fluency: band(out.fluency), grammar: band(out.grammar), vocabulary: band(out.vocabulary), pronunciation: band(out.pronunciation),
      words: Array.isArray(out.words) ? out.words.filter(w => typeof w === "string").slice(0, 5) : [],
      model: typeof out.model === "string" ? out.model : "",
      modelMeaning: typeof out.modelMeaning === "string" ? out.modelMeaning : "",
      tips: Array.isArray(out.tips) ? out.tips.filter(t => typeof t === "string").slice(0, 3) : [],
    });
  } catch (e) {
    console.error("speak-evaluate error", e);
    return json({ error: String(e) }, 500);
  }
});
