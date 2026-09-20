import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { getLangConfig } from '@/data/languages';
import { SPEAK_TOPICS } from '@/data/speakTopics';
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

const STORE = 'voxia-speak-corrections';

const UI: Record<string, Record<string, string>> = {
  es: { title: 'Solo hablar', sub: 'Habla de lo que quieras y te corrijo', pick: 'Elige un tema', own: 'Escribe tu propio tema…', speak: 'Hablar', stop: 'Terminar', thinking: 'Escuchando y corrigiendo…', corrections: 'Correcciones', none: '¡Sin errores! Muy bien', better: 'Mejor así', mine: 'Mis correcciones', clear: 'Borrar', back: 'Inicio', start: 'Empezar', change: 'Cambiar tema', nomic: 'Tu navegador no permite el micrófono', retry: 'Repetir', tip: 'Consejo' },
  en: { title: 'Speaking only', sub: 'Talk about anything and I correct you', pick: 'Pick a topic', own: 'Type your own topic…', speak: 'Speak', stop: 'Finish', thinking: 'Listening and correcting…', corrections: 'Corrections', none: 'No mistakes! Great', better: 'Better like this', mine: 'My corrections', clear: 'Clear', back: 'Home', start: 'Start', change: 'Change topic', nomic: 'Your browser does not allow the microphone', retry: 'Repeat', tip: 'Tip' },
  fr: { title: 'Parler seulement', sub: 'Parle de ce que tu veux, je te corrige', pick: 'Choisis un thème', own: 'Écris ton propre thème…', speak: 'Parler', stop: 'Terminer', thinking: 'J’écoute et je corrige…', corrections: 'Corrections', none: 'Aucune erreur ! Bravo', better: 'Mieux ainsi', mine: 'Mes corrections', clear: 'Effacer', back: 'Accueil', start: 'Commencer', change: 'Changer de thème', nomic: 'Ton navigateur ne permet pas le micro', retry: 'Répéter', tip: 'Conseil' },
  pt: { title: 'Só falar', sub: 'Fale do que quiser e eu corrijo', pick: 'Escolha um tema', own: 'Escreva seu próprio tema…', speak: 'Falar', stop: 'Terminar', thinking: 'Ouvindo e corrigindo…', corrections: 'Correções', none: 'Sem erros! Muito bem', better: 'Melhor assim', mine: 'Minhas correções', clear: 'Apagar', back: 'Início', start: 'Começar', change: 'Mudar tema', nomic: 'Seu navegador não permite o microfone', retry: 'Repetir', tip: 'Dica' },
  zh: { title: '只练口语', sub: '随便聊，我来纠正你', pick: '选择话题', own: '输入你的话题…', speak: '说话', stop: '结束', thinking: '正在听并纠正…', corrections: '纠正', none: '没有错误！很好', better: '更自然的说法', mine: '我的纠正', clear: '清空', back: '首页', start: '开始', change: '换话题', nomic: '你的浏览器不支持麦克风', retry: '再说一次', tip: '建议' },
  jp: { title: '会話だけ', sub: '好きな話題で話して、直します', pick: 'トピックを選ぶ', own: '自分のトピックを書く…', speak: '話す', stop: '終わる', thinking: '聞いて直しています…', corrections: '訂正', none: '間違いなし！すばらしい', better: 'こう言うと自然', mine: '私の訂正', clear: '消す', back: 'ホーム', start: 'はじめる', change: 'トピック変更', nomic: 'このブラウザはマイクを使えません', retry: 'もう一度', tip: 'アドバイス' },
  ko: { title: '말하기만', sub: '무엇이든 말하면 교정해 줘요', pick: '주제 선택', own: '직접 주제 입력…', speak: '말하기', stop: '끝내기', thinking: '듣고 교정 중…', corrections: '교정', none: '실수 없음! 잘했어요', better: '이렇게가 더 자연스러워요', mine: '내 교정', clear: '지우기', back: '홈', start: '시작', change: '주제 변경', nomic: '이 브라우저는 마이크를 지원하지 않아요', retry: '다시', tip: '팁' },
  ru: { title: 'Только говорение', sub: 'Говори о чём хочешь — я исправлю', pick: 'Выбери тему', own: 'Напиши свою тему…', speak: 'Говорить', stop: 'Закончить', thinking: 'Слушаю и исправляю…', corrections: 'Исправления', none: 'Ошибок нет! Отлично', better: 'Лучше так', mine: 'Мои исправления', clear: 'Очистить', back: 'Главная', start: 'Начать', change: 'Сменить тему', nomic: 'Браузер не поддерживает микрофон', retry: 'Повторить', tip: 'Совет' },
  ar: { title: 'التحدث فقط', sub: 'تحدث عن أي شيء وسأصحح لك', pick: 'اختر موضوعًا', own: 'اكتب موضوعك…', speak: 'تحدث', stop: 'إنهاء', thinking: 'أستمع وأصحح…', corrections: 'التصحيحات', none: 'لا أخطاء! رائع', better: 'الأفضل هكذا', mine: 'تصحيحاتي', clear: 'حذف', back: 'الرئيسية', start: 'ابدأ', change: 'تغيير الموضوع', nomic: 'متصفحك لا يدعم الميكروفون', retry: 'أعد', tip: 'نصيحة' },
  hi: { title: 'केवल बोलना', sub: 'कुछ भी बोलें, मैं सुधार करूँगा', pick: 'विषय चुनें', own: 'अपना विषय लिखें…', speak: 'बोलें', stop: 'समाप्त', thinking: 'सुन रहा हूँ और सुधार रहा हूँ…', corrections: 'सुधार', none: 'कोई गलती नहीं! बहुत अच्छा', better: 'ऐसे बेहतर है', mine: 'मेरे सुधार', clear: 'मिटाएँ', back: 'होम', start: 'शुरू करें', change: 'विषय बदलें', nomic: 'आपका ब्राउज़र माइक्रोफ़ोन नहीं देता', retry: 'फिर से', tip: 'सुझाव' },
  ro: { title: 'Doar vorbit', sub: 'Vorbește despre orice și te corectez', pick: 'Alege o temă', own: 'Scrie tema ta…', speak: 'Vorbește', stop: 'Termină', thinking: 'Ascult și corectez…', corrections: 'Corecturi', none: 'Fără greșeli! Bravo', better: 'Mai bine așa', mine: 'Corecturile mele', clear: 'Șterge', back: 'Acasă', start: 'Începe', change: 'Schimbă tema', nomic: 'Browserul tău nu permite microfonul', retry: 'Repetă', tip: 'Sfat' },
};

const glass = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md';

export default function SpeakingPage() {
  const navigate = useNavigate();
  const { state, addXP, recordAnswer, getAbility } = useApp();
  const nativeLang = state.nativeLang || 'es';
  const u = (k: string) => UI[nativeLang]?.[k] || UI.es[k];
  const tl = (s: string) => translateLessonText(s, nativeLang) || s;

  const activeLangs = useMemo(() => [...new Set(state.activeLangs || [])], [state.activeLangs]);
  // The language you're learning = the active one with most XP (same as "Continuar" en Home)
  const lang = useMemo(() => {
    if (!activeLangs.length) return 'en';
    return [...activeLangs].sort((a, b) => (state.xp?.[b] || 0) - (state.xp?.[a] || 0))[0];
  }, [activeLangs, state.xp]);
  const config = getLangConfig(lang);

  const [topic, setTopic] = useState<string | null>(null);
  const [customTopic, setCustomTopic] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [coach, setCoach] = useState<CoachReply | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<(Correction & { lang: string })[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORE) || '[]'); } catch { return []; }
  });
  const [showSaved, setShowSaved] = useState(false);
  const { transcript, isListening, isTranscribing, isSupported, start, stop, setTranscript, micError, seconds, level: micLevel } = useSpeechRecognition(lang);
  const spokenRef = useRef('');
  const [typed, setTyped] = useState('');

  useEffect(() => {
    try { localStorage.setItem(STORE, JSON.stringify(saved.slice(-120))); } catch { /* ignore */ }
  }, [saved]);

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
    if (!said.trim()) return;
    setLoading(true); setError(null); setCoach(null);
    const history = turns.slice(-8);
    setTurns(t => [...t, { role: 'user', text: said }]);
    try {
      const { data, error: err } = await supabase.functions.invoke('speak-coach', {
        body: { said, lang, native: nativeLang, topic: topic || customTopic, level, history, mistakes: saved.slice(-8) },
      });
      if (err || (data as any)?.error) throw new Error(err?.message || (data as any).error);
      const r = data as CoachReply;
      setCoach(r);
      setTurns(t => [...t, { role: 'coach', text: r.reply, meaning: r.replyMeaning }]);
      const clean = !r.corrections?.length;
      recordAnswer(lang, clean);
      addXP(lang, clean ? 40 : 25);
      if (r.corrections?.length) setSaved(s => [...s, ...r.corrections.map(c => ({ ...c, lang }))]);
    } catch (e) {
      setError(String((e as Error).message || e));
    } finally {
      setLoading(false);
      setTranscript('');
    }
  }

  // ---------- Saved corrections review ----------
  if (showSaved) {
    const mine = saved.filter(c => c.lang === lang).slice().reverse();
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto relative">
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-20" style={{ background: 'hsl(var(--neon-violet))' }} />
        <div className="max-w-[560px] mx-auto px-4 py-5 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => setShowSaved(false)} className={`px-3 py-1 rounded-full text-sm ${glass}`}>←</button>
            <span className="flex-1 text-center font-display font-bold">📝 {u('mine')}</span>
            <button onClick={() => setSaved(s => s.filter(c => c.lang !== lang))} className={`px-3 py-1 rounded-full text-[0.7rem] ${glass}`}>{u('clear')}</button>
          </div>
          {mine.length === 0 && <p className="text-sm text-foreground-muted text-center py-10">{u('none')}</p>}
          {mine.map((c, i) => (
            <div key={i} className={`mb-3 p-3 ${glass}`}>
              <div className="text-sm line-through opacity-60">{c.wrong}</div>
              <button onClick={() => speakText(c.right, lang)} className="text-sm font-bold mt-0.5 text-left" style={{ color: 'hsl(var(--neon-cyan))' }}>
                🔊 {c.right}
              </button>
              <div className="text-[0.75rem] text-foreground-secondary mt-1">{c.why}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---------- Topic picker ----------
  if (!topic && !customTopic.trim()) {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto relative">
        {/* Ambient neon glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-20" style={{ background: 'hsl(var(--neon-violet))' }} />
        <div className="pointer-events-none absolute top-1/2 -right-24 w-72 h-72 rounded-full blur-[110px] opacity-15" style={{ background: 'hsl(var(--neon-cyan))' }} />

        <div className="max-w-[560px] mx-auto px-4 py-5 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => navigate('/')} className={`px-3 py-1 rounded-full text-sm ${glass}`}>← {u('back')}</button>
            <span className="flex-1 text-center font-display font-bold">🗣️ {u('title')}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${glass}`} title={config.nativeName}
              style={{ boxShadow: '0 0 14px hsl(var(--neon-violet) / 0.4)' }}>
              {config.flag}
            </span>
          </div>

          <h2 className="font-display text-2xl font-bold mb-1 bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-violet))] bg-clip-text text-transparent">
            {u('title')}
          </h2>
          <p className="text-sm text-foreground-secondary mb-4">{u('sub')} · {config.flag} {config.nativeName}</p>

          <div className="flex gap-2 mb-5">
            <input value={customTopic} onChange={e => setCustomTopic(e.target.value)}
              placeholder={u('own')}
              className={`flex-1 rounded-2xl px-4 py-3 text-sm outline-none focus:border-[hsl(var(--neon-cyan))] ${glass}`} />
            <button onClick={() => setTurns([])} className="px-4 py-3 rounded-2xl font-bold text-sm text-background transition-transform active:scale-95"
              style={{ background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-violet)))', boxShadow: '0 0 22px hsl(var(--neon-cyan) / 0.45)' }}>{u('start')}</button>
          </div>

          <button onClick={() => setShowSaved(true)} className={`w-full mb-5 p-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${glass}`}>
            📝 {u('mine')} · {saved.filter(c => c.lang === lang).length}
          </button>

          <div className="text-[0.7rem] font-bold uppercase tracking-widest text-foreground-muted mb-2">{u('pick')}</div>
          <div className="grid grid-cols-2 gap-2.5">
            {SPEAK_TOPICS.map(t => (
              <button key={t.id} onClick={() => { setTopic(t.prompt); setTurns([]); setCoach(null); }}
                className={`p-3 text-left transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--neon-violet))] ${glass}`}
                style={{ boxShadow: '0 6px 20px hsl(var(--neon-violet) / 0.08)' }}>
                <div className="text-2xl mb-1">{t.emoji}</div>
                <div className="text-sm font-bold">{tl(t.title)}</div>
                <div className="text-[0.65rem] text-foreground-muted mt-0.5">{'🌱🌿🌳'.slice(0, t.level * 2)}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---------- Talking view ----------
  const activeTopic = topic || customTopic;
  return (
    <div className="flex-1 flex flex-col animate-fade-in relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-[110px] opacity-25" style={{ background: 'hsl(var(--neon-violet))' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[110px] opacity-20" style={{ background: 'hsl(var(--neon-cyan))' }} />
      <div className="max-w-[560px] w-full mx-auto px-4 py-4 flex-1 flex flex-col relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <button onClick={() => { setTopic(null); setCustomTopic(''); setTurns([]); setCoach(null); }}
            className={`px-3 py-1 rounded-full text-sm ${glass}`}>←</button>
          <span className="flex-1 text-center text-sm text-foreground-secondary">{tl(activeTopic)}</span>
          <button onClick={() => setShowSaved(true)} className={`px-3 py-1 rounded-full text-[0.7rem] ${glass}`}>📝</button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <VoiceOrb mode={isListening ? 'listening' : (loading || isTranscribing) ? 'speaking' : 'idle'} hue={config.hue}
            onClick={() => coach?.reply && speakText(coach.reply, lang)} label={u('speak')} />

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

          {turns.length === 0 && !loading && !isListening && (
            <p className={`text-sm text-center px-4 py-2 max-w-[320px] ${glass}`}>{tl(activeTopic)}</p>
          )}

          {transcript && <p className="text-sm text-center opacity-80">“{transcript}”</p>}
          {(loading || isTranscribing) && <p className="text-sm text-foreground-muted animate-pulse">🎙️ {u('thinking')}</p>}
          {error && <p className="text-sm text-destructive text-center">{error}</p>}

          {coach && !loading && (
            <div className="w-full space-y-3">
              <div className={`p-3 ${glass}`} style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.12)' }}>
                <button onClick={() => speakText(coach.reply, lang)} className="text-left text-[0.95rem] font-semibold">
                  🔊 {coach.reply}
                </button>
                {coach.replyMeaning && <div className="text-[0.75rem] italic text-foreground-muted mt-1">{coach.replyMeaning}</div>}
              </div>

              <div className="p-3 rounded-2xl border" style={{
                borderColor: coach.corrections.length ? 'hsl(var(--gold))' : 'hsl(var(--success))',
                background: coach.corrections.length ? 'hsl(45 45% 16%)' : 'hsl(165 45% 14%)',
              }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider">
                    {coach.corrections.length ? `✏️ ${u('corrections')}` : `✅ ${u('none')}`}
                  </span>
                  <span className="text-sm font-black">{coach.score}%</span>
                </div>
                {coach.corrections.map((c, i) => (
                  <div key={i} className="text-[0.8rem] mb-2">
                    <span className="line-through opacity-60">{c.wrong}</span>{' → '}
                    <button onClick={() => speakText(c.right, lang)} className="font-bold">🔊 {c.right}</button>
                    <div className="text-[0.72rem] text-foreground-secondary">{c.why}</div>
                  </div>
                ))}
                {coach.better && (
                  <div className="text-[0.8rem] mt-1">
                    <span className="text-foreground-muted">{u('better')}: </span>
                    <button onClick={() => speakText(coach.better, lang)} className="font-semibold">🔊 {coach.better}</button>
                  </div>
                )}
                {coach.tip && <div className="text-[0.72rem] mt-2 text-foreground-secondary">💡 {u('tip')}: {coach.tip}</div>}
              </div>
            </div>
          )}
        </div>

        <div className="pb-6 pt-3 flex flex-col items-center gap-2">
          {isSupported ? (
            <button
              disabled={loading}
               onClick={async () => {
                if (isListening) {
                   const heard = await stop();
                   if (heard) await send(heard);
                 } else { setCoach(null); await start(); }
              }}
              className={`px-8 py-3.5 rounded-full text-sm font-bold transition-transform active:scale-95 ${isListening ? 'animate-pulse' : ''}`}
              style={{
                background: isListening ? 'hsl(var(--destructive))' : 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-violet)))',
                color: isListening ? 'hsl(var(--destructive-foreground))' : 'hsl(var(--background))',
                boxShadow: '0 0 28px hsl(var(--neon-cyan) / 0.45)',
              }}>
              {isListening ? `⏹ ${u('stop')}` : `🎤 ${u('speak')}`}
            </button>
          ) : (
            <p className="text-[0.75rem] text-foreground-muted text-center">🎤 {u('nomic')}</p>
          )}
          {transcript && !isListening && !loading && (
            <button onClick={() => send(transcript)} className="text-[0.75rem] underline text-foreground-muted">{u('retry')}</button>
          )}
          {micError && (
            <p className="text-[0.72rem] text-destructive text-center max-w-[300px]">🎤 {u('nomic')} ({micError})</p>
          )}
          <div className="w-full flex items-center gap-2 mt-1">
            <input
              value={typed}
              onChange={e => setTyped(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && typed.trim()) { send(typed); setTyped(''); } }}
              placeholder="⌨️ …"
              className={`flex-1 px-3 py-2 rounded-full text-sm outline-none ${glass}`} />
            <button
              disabled={loading || !typed.trim()}
              onClick={() => { setCoach(null); send(typed); setTyped(''); }}
              className="px-4 py-2 rounded-full text-sm font-bold text-background disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-violet)))' }}>↑</button>
          </div>
        </div>
      </div>
    </div>
  );
}
