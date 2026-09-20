const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const LANGUAGE_CODES: Record<string, string> = {
  en: "en", es: "es", fr: "fr", pt: "pt-BR", zh: "zh", jp: "ja",
  ja: "ja", ko: "ko", ru: "ru", ar: "ar", hi: "hi", ro: "ro",
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...corsHeaders, "Content-Type": "application/json" },
});

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const form = await req.formData();
    const file = form.get("file");
    const language = String(form.get("language") || "");
    if (!(file instanceof File) || file.size === 0) return json({ error: "La grabación está vacía. Inténtalo de nuevo." }, 400);
    if (file.size > 20 * 1024 * 1024) return json({ error: "La grabación es demasiado larga. Inténtalo en partes más cortas." }, 413);

    const aiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!aiKey) return json({ error: "La transcripción no está configurada." }, 500);

    const upstream = new FormData();
    upstream.append("model", "google/gemini-3.5-transcribe");
    upstream.append("file", file, file.name || "recording.webm");
    upstream.append("stream", "true");
    const code = LANGUAGE_CODES[language];
    if (code) upstream.append("language", code);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${aiKey}` },
      body: upstream,
    });
    if (!response.ok) {
      const message = await response.text().catch(() => "No se pudo transcribir el audio.");
      return json({ error: message || "No se pudo transcribir el audio." }, response.status);
    }

    const stream = await response.text();
    let transcript = "";
    let deltas = "";
    for (const line of stream.split("\n")) {
      if (!line.startsWith("data:")) continue;
      try {
        const event = JSON.parse(line.slice(5).trim()) as { type?: string; delta?: string; text?: string };
        if (event.type === "transcript.text.done" && event.text) transcript = event.text;
        else if (event.type === "transcript.text.delta" && event.delta) deltas += event.delta;
      } catch { /* ignore non-JSON SSE control lines */ }
    }
    const text = (transcript || deltas).trim();
    if (!text) return json({ error: "No pude oír palabras claras. Acércate al micrófono e inténtalo otra vez." }, 400);
    return json({ text });
  } catch (error) {
    console.error("transcribe-audio error", error);
    return json({ error: "No se pudo procesar la grabación." }, 500);
  }
});