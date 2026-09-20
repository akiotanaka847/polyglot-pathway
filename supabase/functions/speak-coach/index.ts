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
      level?: string; history?: Turn[]; noSpeech?: boolean;
      mistakes?: { wrong?: string; right?: string }[];
    };
    const said = (body.said || "").trim();
    const target = LANG_NAMES[body.lang || ""] || "English";
    const native = LANG_NAMES[body.native || ""] || "Spanish";
    if (!said && !body.noSpeech) {
      return new Response(JSON.stringify({ error: "said is required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!aiKey) throw new Error("LOVABLE_API_KEY missing");

    const history = (body.history || []).slice(-14)
      .map(t => `${t.role === "user" ? "Learner" : "You"}: ${t.text}`).join("\n");

    const pastMistakes = (body.mistakes || []).slice(-8)
      .map(m => `- said "${m.wrong}" instead of "${m.right}"`).join("\n");

    const prompt = body.noSpeech
      ? `You are a warm human friend helping someone practice speaking ${target}.
Their native language is ${native}. Level: ${body.level || "beginner"}.
Conversation topic: ${body.topic || "anything they want to talk about"}.
${history ? `What you two have said so far:\n${history}\n` : ""}
You could not hear them at all (silence or microphone issue). Help them kindly:
- Write ONE short, easy, useful example sentence in ${target} related to the topic that they can repeat out loud right now. Put it in "reply" (it will be read aloud to them) and "better".
- "replyMeaning": that sentence translated into ${native}.
- "tip": a short, warm message in ${native} saying you couldn't hear them, no worries, and inviting them to repeat the example sentence. Friendly, like a buddy, max 2 sentences.
- "corrections": empty list. "score": 0.

Reply ONLY with JSON in exactly this shape, no markdown:
{
  "score": 0,
  "better": "example sentence in ${target}",
  "corrections": [],
  "reply": "example sentence in ${target}",
  "replyMeaning": "translation into ${native}",
  "tip": "warm encouragement in ${native}"
}`
      : `You are a real human friend chatting with someone who is learning ${target}.
You are NOT a robot, NOT a quiz, NOT a teacher reading a script. You are a friendly person around their age
having a genuine conversation. Their native language is ${native}. Level: ${body.level || "beginner"}.
Conversation topic: ${body.topic || "anything they want to talk about"}.

${history ? `What you two have said so far:\n${history}\n` : ""}${pastMistakes ? `Mistakes this learner has made before (gently reuse the right forms so they hear them again):\n${pastMistakes}\n` : ""}
The learner just said out loud (speech transcription — ignore punctuation, casing and small transcription noise):
"${said}"

How to answer, as a human friend:
- REACT to the actual content of what they said: show interest, agree, joke lightly, share a tiny personal detail, or be surprised. Never answer something they did not say.
- Then keep the chat alive with ONE natural follow-up question about what they just told you. Never repeat a question you already asked.
- Speak in ${target} at their level: short, everyday, contracted spoken language a friend really uses. 2-4 short sentences total including the question.
- If what they said was unclear or off-topic, ask them warmly to say more instead of inventing meaning.
- Correct ONLY real mistakes in ${target} (grammar, word order, verb form, particles, unnatural word choice). Never invent mistakes, never correct accent or punctuation. If it was fine, return an empty corrections list and say so warmly in the tip.
- Explanations and the tip go in ${native}, warm and short, like a friend explaining, not a grammar book.
- Score honestly: 90-100 natural, 70-89 understandable with small errors, below 70 hard to understand.

Reply ONLY with JSON in exactly this shape, no markdown:
{
  "score": 0-100,
  "better": "the most natural way to say their sentence in ${target} (keep their meaning)",
  "corrections": [
    { "wrong": "exact part they said wrong", "right": "correct form in ${target}", "why": "short friendly explanation in ${native}" }
  ],
  "reply": "your human reaction + one follow-up question, in ${target}",
  "replyMeaning": "your reply translated into ${native}",
  "tip": "encouragement and one concrete tip, in ${native}"
}`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${aiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        reasoning_effort: "low",
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
