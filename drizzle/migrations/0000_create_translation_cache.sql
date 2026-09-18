CREATE TABLE public.translation_cache (
  key text PRIMARY KEY,
  lang text NOT NULL,
  source text NOT NULL,
  translated text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.translation_cache TO anon;
GRANT SELECT ON public.translation_cache TO authenticated;
GRANT ALL ON public.translation_cache TO service_role;

ALTER TABLE public.translation_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Translations are readable by everyone"
ON public.translation_cache
FOR SELECT
USING (true);