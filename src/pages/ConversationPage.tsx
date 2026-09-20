import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { CONVERSATION_DATA } from '@/data/conversations';
import { getThemedConversations } from '@/data/convGenerate';
import { getLangConfig } from '@/data/languages';
import { translateLessonText } from '@/utils/lessonI18n';
import { speakText } from '@/utils/helpers';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { supabase } from '@/integrations/supabase/client';
import VoiceOrb from '@/components/VoiceOrb';

type Correction = { wrong: string; right: string; why: string };
type CoachReply = {
  score: number; better: string; corrections: Correction[];
  reply: string; replyMeaning: string; tip: string;
};
type Turn = { role: 'user' | 'coach'; text: string; meaning?: string };

const UI: Record<string, Record<string, string>> = {
  es: { prompt: 'Habla sobre este tema, yo te respondo y te corrijo', speak: 'Hablar', stop: 'Terminar', thinking: 'Escuchando y corrigiendo…', corrections: 'Correcciones', none: '¡Sin errores! Muy bien', better: 'Mejor así', tip: 'Consejo', write: 'Escribir', send: 'Enviar', nomic: 'Tu navegador no permite el micrófono', you: 'Tú', coach: 'Coach', retry: 'Reintentar' },
  en: { prompt: 'Talk about this topic — I reply and correct you', speak: 'Speak', stop: 'Finish', thinking: 'Listening and correcting…', corrections: 'Corrections', none: 'No mistakes! Great', better: 'Better like this', tip: 'Tip', write: 'Write', send: 'Send', nomic: 'Your browser does not allow the microphone', you: 'You', coach: 'Coach', retry: 'Retry' },
  fr: { prompt: 'Parle de ce thème — je réponds et je te corrige', speak: 'Parler', stop: 'Terminer', thinking: 'J’écoute et je corrige…', corrections: 'Corrections', none: 'Aucune erreur ! Bravo', better: 'Mieux ainsi', tip: 'Conseil', write: 'Écrire', send: 'Envoyer', nomic: 'Ton navigateur ne permet pas le micro', you: 'Toi', coach: 'Coach', retry: 'Réessayer' },
  pt: { prompt: 'Fale sobre este tema — eu respondo e corrijo', speak: 'Falar', stop: 'Terminar', thinking: 'Ouvindo e corrigindo…', corrections: 'Correções', none: 'Sem erros! Muito bem', better: 'Melhor assim', tip: 'Dica', write: 'Escrever', send: 'Enviar', nomic: 'Seu navegador não permite o microfone', you: 'Você', coach: 'Coach', retry: 'Tentar de novo' },
  zh: { prompt: '就这个话题聊聊，我会回应并纠正你', speak: '说话', stop: '结束', thinking: '正在听并纠正…', corrections: '纠正', none: '没有错误！很好', better: '更自然的说法', tip: '建议', write: '打字', send: '发送', nomic: '你的浏览器不支持麦克风', you: '你', coach: '教练', retry: '重试' },
  jp: { prompt: 'このトピックで話してください。返事と訂正をします', speak: '話す', stop: '終わる', thinking: '聞いて直しています…', corrections: '訂正', none: '間違いなし！すばらしい', better: 'こう言うと自然', tip: 'アドバイス', write: '書く', send: '送る', nomic: 'このブラウザはマイクを使えません', you: 'あなた', coach: 'コーチ', retry: 'もう一度' },
  ko: { prompt: '이 주제로 말해 보세요 — 대답하고 교정해 줘요', speak: '말하기', stop: '끝내기', thinking: '듣고 교정 중…', corrections: '교정', none: '실수 없음! 잘했어요', better: '이렇게가 더 자연스러워요', tip: '팁', write: '쓰기', send: '보내기', nomic: '이 브라우저는 마이크를 지원하지 않아요', you: '나', coach: '코치', retry: '다시' },
  ru: { prompt: 'Говори на эту тему — я отвечу и исправлю', speak: 'Говорить', stop: 'Закончить', thinking: 'Слушаю и исправляю…', corrections: 'Исправления', none: 'Ошибок нет! Отлично', better: 'Лучше так', tip: 'Совет', write: 'Написать', send: 'Отправить', nomic: 'Браузер не поддерживает микрофон', you: 'Ты', coach: 'Тренер', retry: 'Повторить' },
  ar: { prompt: 'تحدث عن هذا الموضوع — سأرد وأصحح لك', speak: 'تحدث', stop: 'إنهاء', thinking: 'أستمع وأصحح…', corrections: 'التصحيحات', none: 'لا أخطاء! رائع', better: 'الأفضل هكذا', tip: 'نصيحة', write: 'اكتب', send: 'إرسال', nomic: 'متصفحك لا يدعم الميكروفون', you: 'أنت', coach: 'المدرب', retry: 'أعد' },
  hi: { prompt: 'इस विषय पर बोलें — मैं जवाब दूँगा और सुधार करूँगा', speak: 'बोलें', stop: 'समाप्त', thinking: 'सुन रहा हूँ और सुधार रहा हूँ…', corrections: 'सुधार', none: 'कोई गलती नहीं! बहुत अच्छा', better: 'ऐसे बेहतर है', tip: 'सुझाव', write: 'लिखें', send: 'भेजें', nomic: 'आपका ब्राउज़र माइक्रोफ़ोन नहीं देता', you: 'आप', coach: 'कोच', retry: 'फिर से' },
  ro: { prompt: 'Vorbește despre această temă — răspund și te corectez', speak: 'Vorbește', stop: 'Termină', thinking: 'Ascult și corectez…', corrections: 'Corecturi', none: 'Fără greșeli! Bravo', better: 'Mai bine așa', tip: 'Sfat', write: 'Scrie', send: 'Trimite', nomic: 'Browserul tău nu permite microfonul', you: 'Tu', coach: 'Antrenor', retry: 'Reîncearcă' },
};

const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md';

export default function ConversationPage() {
  const navigate = useNavigate();
  const { state, addXP, markConvDone, tt, recordAnswer, getAbility } = useApp();
  const nativeLang = state.nativeLang || 'es';
  const u = (k: string) => UI[nativeLang]?.[k] || UI.es[k];
  const activeLangs = useMemo(() => [...new Set(state.activeLangs || [])], [state.activeLangs]);
  const convLangs = activeLangs.length ? activeLangs : Object.keys(CONVERSATION_DATA);
  // Language being learned = active one with most XP (same rule as "Continuar" on Home)
  const [lang, setLang] = useState<string>(() => {
    const ls = activeLangs.length ? activeLangs : Object.keys(CONVERSATION_DATA);
    return [...ls].sort((a, b) => (state.xp?.[b] || 0) - (state.xp?.[a] || 0))[0] || 'en';
  });
  const [activeConv, setActiveConv] = useState<string | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [coach, setCoach] = useState<CoachReply | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMeaning, setShowMeaning] = useState(true);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');

  const config = getLangConfig(lang);
  const tl = (s: string) => translateLessonText(s, nativeLang) || s;

  const convs = useMemo(
    () => getThemedConversations(lang, CONVERSATION_DATA[lang] || []),
    [lang]
  );
  const conv = convs.find(c => c.id === activeConv);

  const { transcript, isListening, isTranscribing, isSupported, start, stop, setTranscript, micError, micBlock, seconds, level: micLevel } = useSpeechRecognition(lang, send);
  const spokenRef = useRef('');

  // Speak the coach reply once
  useEffect(() => {
    if (!coach?.reply || spokenRef.current === coach.reply) return;
    spokenRef.current = coach.reply;
    speakText(coach.reply, lang);
  }, [coach, lang]);

  const level = (() => {
    const a = getAbility(lang);
    return a > 0.75 ? 'advanced' : a > 0.45 ? 'intermediate' : 'beginner';
  })();

  async function send(said: string) {
    const text = said.trim();
    if (!text || !conv) return;
    setLoading(true); setError(null); setCoach(null); setInput('');
    const history = turns.slice(-8);
    setTurns(t => [...t, { role: 'user', text }]);
    try {
      const { data, error: err } = await supabase.functions.invoke('speak-coach', {
        body: { said: text, lang, native: nativeLang, topic: `${conv.title} — ${conv.scenario}`, level, history },
      });
      if (err || (data as { error?: string })?.error) throw new Error(err?.message || (data as { error?: string }).error);
      const r = data as CoachReply;
      setCoach(r);
      setTurns(t => [...t, { role: 'coach', text: r.reply, meaning: r.replyMeaning }]);
      const clean = !r.corrections?.length;
      recordAnswer(lang, clean);
      addXP(lang, clean ? 40 : 25);
      if (turns.length >= 5) markConvDone(conv.id);
    } catch (e) {
      setError(String((e as Error).message || e));
    } finally {
      setLoading(false);
      setTranscript('');
    }
  }

  const reset = () => {
    setActiveConv(null); setTurns([]); setCoach(null); setInput('');
    setTranscript(''); setError(null); spokenRef.current = '';
  };

  // ---------- Live conversation (AI coach, free speaking) ----------
  if (conv) {
    return (
      <div
        className="flex-1 flex flex-col animate-fade-in text-white relative overflow-hidden"
        style={{ background: `radial-gradient(circle at 50% 10%, hsl(${config.hue} 40% 18%), hsl(${config.hue} 35% 8%) 70%)` }}
      >
        {/* Ambient neon glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-25" style={{ background: 'hsl(var(--neon-violet))' }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[110px] opacity-20" style={{ background: 'hsl(var(--neon-cyan))' }} />

        <div className="max-w-[560px] w-full mx-auto px-4 py-4 flex-1 flex flex-col relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <button onClick={reset} className={`px-3 py-1 rounded-full text-sm ${glass}`}>←</button>
            <span className="flex-1 text-center text-sm opacity-80">{conv.emoji} {tl(conv.title)}</span>
            <button
              onClick={() => setShowMeaning(v => !v)}
              className={`px-3 py-1 rounded-full text-[0.7rem] ${glass}`}
            >
              {showMeaning ? '👁️' : '🙈'}
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <VoiceOrb
              mode={isListening ? 'listening' : (loading || isTranscribing) ? 'speaking' : 'idle'}
              hue={config.hue}
              onClick={() => coach?.reply && speakText(coach.reply, lang)}
              label={tt('listen') || 'Escuchar'}
            />

            {isListening && (
              <div className={`flex items-center gap-3 px-4 py-2 ${glass}`}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
                <span className="text-sm font-mono tabular-nums">
                  {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
                </span>
                <div className="flex items-end gap-[3px] h-5" aria-hidden>
                  {[0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25].map((th, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full transition-all duration-100"
                      style={{
                        height: `${6 + i % 3 * 5}px`,
                        background: micLevel >= th * 0.6 ? 'hsl(var(--neon-cyan))' : 'hsl(0 0% 100% / 0.2)',
                        boxShadow: micLevel >= th * 0.6 ? '0 0 8px hsl(var(--neon-cyan) / 0.7)' : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {isTranscribing && <p className="text-sm opacity-70 animate-pulse">🎙️ Transcribiendo…</p>}

            {!turns.length && !loading && (
              <p className={`text-sm text-center px-4 py-2 ${glass}`}>💬 {u('prompt')}</p>
            )}

            {loading && !isTranscribing && <p className="text-sm opacity-70 animate-pulse">💬 Preparando respuesta…</p>}

            {coach && !loading && (
              <div className="w-full space-y-2">
                <div className={`text-center px-4 py-3 ${glass}`}>
                  <p className="text-lg leading-relaxed">{coach.reply}</p>
                  {showMeaning && coach.replyMeaning && (
                    <p className="text-[0.8rem] opacity-60 mt-1 italic">{coach.replyMeaning}</p>
                  )}
                </div>
                <div
                  className={`${glass} px-3 py-2 text-[0.8rem] space-y-1`}
                  style={{ boxShadow: coach.corrections?.length ? '0 0 18px hsl(var(--neon-pink) / 0.15)' : '0 0 18px hsl(var(--neon-cyan) / 0.18)' }}
                >
                  <div className="opacity-80">⭐ {coach.score}/100</div>
                  {coach.corrections?.length ? (
                    <>
                      <div className="font-semibold">🛠 {u('corrections')}</div>
                      {coach.corrections.map((c, i) => (
                        <div key={i} className="opacity-90">
                          <s className="opacity-60">{c.wrong}</s> → <strong style={{ color: 'hsl(var(--neon-cyan))' }}>{c.right}</strong>
                          {c.why && <span className="opacity-70"> — {c.why}</span>}
                        </div>
                      ))}
                    </>
                  ) : (
                    <div>✅ {u('none')}</div>
                  )}
                  {coach.better && <div className="opacity-90">✨ {u('better')}: <em>{coach.better}</em></div>}
                  {coach.tip && <div className="opacity-70">💡 {u('tip')}: {coach.tip}</div>}
                </div>
              </div>
            )}

            {error && (
              <div className="text-[0.8rem] text-center px-4 py-2 rounded-xl bg-red-500/20 border border-red-400/30">
                ⚠️ {error}
              </div>
            )}
            {micError && <p className="text-[0.75rem] opacity-70">🎤 {micError}</p>}
          </div>

          {/* Reply controls */}
          <div className="pb-5 pt-3">
            {typing ? (
              <div className="flex gap-2 items-center">
                <input
                  autoFocus
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send(input)}
                  placeholder={tt('write_in_language') || u('write')}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm outline-none placeholder:text-white/40 ${glass}`}
                />
                <button
                  onClick={() => send(input)}
                  disabled={loading}
                  className="px-4 py-2 rounded-full text-sm font-bold disabled:opacity-50 text-background"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-violet)))', boxShadow: '0 0 18px hsl(var(--neon-cyan) / 0.4)' }}
                >{u('send')}</button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                {transcript && <p className={`text-sm px-3 py-1.5 ${glass}`}>“{transcript}”</p>}
                {isSupported ? (
                  <button
                    onClick={() => { if (isListening) void stop(); else { setTranscript(''); void start(); } }}
                    disabled={loading || isTranscribing}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-transform active:scale-95 disabled:opacity-50 ${isListening ? 'animate-pulse' : ''}`}
                    style={isListening
                      ? { background: 'hsl(var(--destructive))', color: 'hsl(var(--destructive-foreground))', boxShadow: '0 0 26px hsl(var(--destructive) / 0.5)' }
                      : { background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-violet)))', color: 'hsl(var(--background))', boxShadow: '0 0 26px hsl(var(--neon-cyan) / 0.45)' }}
                  >
                    {isListening ? `⏹ ${u('stop')}` : `🎤 ${u('speak')}`}
                  </button>
                ) : (
                  <span className="text-[0.7rem] opacity-60">🎤 {u('nomic')}</span>
                )}
              </div>
            )}
            <button
              onClick={() => { setTyping(v => !v); setInput(''); setTranscript(''); }}
              className="mt-3 w-full text-center text-[0.7rem] opacity-60 underline"
            >
              {typing ? `🎤 ${u('speak')}` : `⌨️ ${u('write')}`}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Theme catalogue ----------
  return (
    <div className="animate-fade-in flex-1 overflow-y-auto relative">
      {/* Ambient neon glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-20" style={{ background: 'hsl(var(--neon-violet))' }} />
      <div className="pointer-events-none absolute top-1/2 -right-24 w-72 h-72 rounded-full blur-[110px] opacity-15" style={{ background: 'hsl(var(--neon-pink))' }} />

      <div className="max-w-[580px] mx-auto px-4 py-5 relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className={`px-3 py-1 rounded-full text-sm ${glass}`}>← {tt('go_home')}</button>
          <span className="flex-1 text-center font-display font-bold">💬 {tt('conversation')}</span>
          <div className="flex gap-1">
            {convLangs.map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded-full text-sm font-semibold transition-all ${glass}`}
                style={lang === l ? { boxShadow: '0 0 14px hsl(var(--neon-violet) / 0.5)', borderColor: 'hsl(var(--neon-violet))' } : undefined}
              >
                {getLangConfig(l).flag}
              </button>
            ))}
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold mb-1 bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-violet))] bg-clip-text text-transparent">
          {tt('practice_conv')}
        </h2>
        <p className="text-sm text-foreground-secondary mb-4">{u('prompt')}</p>

        {convs.length === 0 ? (
          <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
        ) : convs.map(c => {
          const isDone = state.convDone.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => { setActiveConv(c.id); setTurns([]); setCoach(null); setInput(''); setTranscript(''); setError(null); spokenRef.current = ''; }}
              className={`w-full overflow-hidden mb-3 text-left transition-all hover:-translate-y-0.5 ${glass}`}
              style={{ boxShadow: '0 6px 24px hsl(var(--neon-violet) / 0.08)' }}
            >
              <div className="p-4 flex items-center gap-3.5">
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--neon-violet) / 0.25), hsl(var(--neon-cyan) / 0.2))', border: '1px solid hsl(var(--neon-violet) / 0.3)' }}
                >
                  {c.emoji}
                </span>
                <div>
                  <div className="text-[0.7rem] font-semibold" style={{ color: 'hsl(var(--neon-cyan))' }}>{c.level} {isDone && '✅'}</div>
                  <div className="text-sm font-bold">{tl(c.title)}</div>
                </div>
              </div>
              <div className="px-4 pb-3 text-[0.77rem] text-foreground-secondary">{tl(c.scenario)}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
