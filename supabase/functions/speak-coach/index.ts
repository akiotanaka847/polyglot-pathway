// Free-talk speaking coach: takes what the learner said (any topic), returns
// corrections explained in their native language plus a spoken reply that keeps
// the conversation going.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LANG_NAMES: Record<string, string> = {
  es: "Spanish", en: "English", fr: "French", pt: "Portuguese", zh: "Simplified Chinese",
  jp: "Japanese", ja: "Japanese", ko: "Korean", ru: "Russian", ar: "Arabic", hi: "Hindi", ro: "Romanian",
};

type Turn = { role: "user" | "coach"; text: string };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json() as {
      said?: string; lang?: string; native?: string; topic?: string;
      level?: string; history?: Turn[];
    };
    const said = (body.said || "").trim();
    const target = LANG_NAMES[body.lang || ""] || "English";
    const native = LANG_NAMES[body.native || ""] || "Spanish";
    if (!said) {
      return new Response(JSON.stringify({ error: "said is required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!aiKey) throw new Error("LOVABLE_API_KEY missing");

    const history = (body.history || []).slice(-8)
      .map(t => `${t.role === "user" ? "Learner" : "Coach"}: ${t.text}`).join("\n");

    const prompt = `You are a warm, patient speaking coach for a language app.
The learner is practising SPEAKING in ${target}. Their native language is ${native}.
Topic of the conversation: ${body.topic || "free talk"}. Approximate level: ${body.level || "beginner"}.

${history ? `Conversation so far:\n${history}\n` : ""}
The learner just said (transcribed from speech, so ignore punctuation/casing issues):
"${said}"

Do all of this:
1. Judge the sentence as a spoken utterance in ${target}.
2. List the real mistakes only (grammar, word choice, word order, missing particles, wrong verb form). Never invent mistakes. Skip transcription noise.
3. Rewrite the whole utterance naturally in ${target}.
4. Reply naturally in ${target} in 1-2 short sentences and ask one follow-up question to keep them talking about the topic.
5. Give one short encouragement plus a tip, written in ${native}.

Reply ONLY with JSON in exactly this shape, no markdown:
{
  "score": 0-100,
  "better": "natural rewrite in ${target}",
  "corrections": [
    { "wrong": "what they said", "right": "correct form in ${target}", "why": "short explanation in ${native}" }
  ],
  "reply": "your answer + follow-up question, in ${target}",
  "replyMeaning": "the reply translated into ${native}",
  "tip": "encouragement and tip in ${native}"
}`;

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
    let content: string = json.choices?.[0]?.message?.content ?? "{}";
    content = content.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();

    let out: Record<string, unknown> = {};
    try { out = JSON.parse(content); } catch { out = {}; }

    return new Response(JSON.stringify({
      score: typeof out.score === "number" ? out.score : 70,
      better: typeof out.better === "string" ? out.better : said,
      corrections: Array.isArray(out.corrections) ? out.corrections.slice(0, 5) : [],
      reply: typeof out.reply === "string" ? out.reply : "",
      replyMeaning: typeof out.replyMeaning === "string" ? out.replyMeaning : "",
      tip: typeof out.tip === "string" ? out.tip : "",
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("speak-coach error", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
