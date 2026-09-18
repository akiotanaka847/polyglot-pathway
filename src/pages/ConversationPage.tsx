import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { CONVERSATION_DATA } from '@/data/conversations';
import { getThemedConversations, splitNpc } from '@/data/convGenerate';
import { getLangConfig } from '@/data/languages';
import { translateLessonText } from '@/utils/lessonI18n';
import { speakText, normalizeAnswer } from '@/utils/helpers';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import VoiceOrb from '@/components/VoiceOrb';
import RecallBars from '@/components/RecallBars';

export default function ConversationPage() {
  const navigate = useNavigate();
  const { state, addXP, markConvDone, tt, recordRecall, getRecall, recordAnswer, getAbility } = useApp();
  const nativeLang = state.nativeLang || 'es';
  const activeLangs = [...new Set(state.activeLangs || [])];
  const convLangs = (activeLangs.length ? activeLangs : Object.keys(CONVERSATION_DATA));
  const [lang, setLang] = useState<string>(convLangs[0] || 'jp');
  const [activeConv, setActiveConv] = useState<string | null>(null);
  const [turnIdx, setTurnIdx] = useState(0);
  const [input, setInput] = useState('');
  const [fb, setFb] = useState<'correct' | 'wrong' | null>(null);
  const [done, setDone] = useState(false);
  const [showMeaning, setShowMeaning] = useState(true);
  const [typing, setTyping] = useState(false);
  const [lookup, setLookup] = useState<string | null>(null);
  const [spoke, setSpoke] = useState(false);

  const config = getLangConfig(lang);
  const ability = getAbility(lang);
  const tl = (s: string) => translateLessonText(s, nativeLang) || s;

  const convs = useMemo(
    () => getThemedConversations(lang, CONVERSATION_DATA[lang] || []),
    [lang]
  );
  const conv = convs.find(c => c.id === activeConv);
  const turn = conv?.turns[turnIdx];
  const npc = turn ? splitNpc(turn.npc) : { text: '', meaning: '' };
  const npcMeaning = turn?.npcMn || npc.meaning;

  const { transcript, isListening, isSupported, start, stop, setTranscript } = useSpeechRecognition(lang);
  const lastSpoken = useRef<string>('');

  // Speak the other person's line when the turn changes
  useEffect(() => {
    if (!conv || done || !npc.text) return;
    if (lastSpoken.current === `${conv.id}-${turnIdx}`) return;
    lastSpoken.current = `${conv.id}-${turnIdx}`;
    setSpoke(true);
    speakText(npc.text, lang);
    const id = setTimeout(() => setSpoke(false), Math.min(6000, 900 + npc.text.length * 110));
    return () => clearTimeout(id);
  }, [conv, turnIdx, npc.text, lang, done]);

  const answer = (typing ? input : transcript).trim();

  const check = (value: string) => {
    if (!conv || !turn || !value.trim()) return;
    const v = normalizeAnswer(value);
    const match = turn.accept.some(a => v.includes(normalizeAnswer(a)) || normalizeAnswer(a).includes(v));
    recordAnswer(lang, match);
    recordRecall(lang, turn.expected, match);
    if (match) {
      setFb('correct');
      addXP(lang, 30);
      setTimeout(() => {
        setFb(null); setInput(''); setTranscript('');
        if (turnIdx + 1 >= conv.turns.length) {
          markConvDone(conv.id); addXP(lang, 120); setDone(true);
        } else setTurnIdx(i => i + 1);
      }, 1300);
    } else {
      setFb('wrong');
      setInput(''); setTranscript('');
    }
  };

  const reset = () => { setActiveConv(null); setTurnIdx(0); setFb(null); setInput(''); setTranscript(''); setDone(false); setLookup(null); };

  // ---------- Conversation view (calm, focused) ----------
  if (conv) {
    if (done) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="font-serif text-2xl font-semibold mb-2">{tt('conversation_complete')}</h2>
          <p className="text-sm text-foreground-secondary mb-5">+150 {tt('xp_earned')}</p>
          <div className="flex gap-2">
            <button onClick={reset} className="px-5 py-2 rounded-full border border-border text-sm">← {tt('back')}</button>
            <button onClick={() => { setTurnIdx(0); setDone(false); lastSpoken.current = ''; }} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium">🔄 {tt('repeat')}</button>
          </div>
        </div>
      );
    }

    const hideHint = ability > 0.7 && fb !== 'wrong';

    return (
      <div
        className="flex-1 flex flex-col animate-fade-in text-white"
        style={{ background: `radial-gradient(circle at 50% 10%, hsl(${config.hue} 40% 18%), hsl(${config.hue} 35% 8%) 70%)` }}
      >
        <div className="max-w-[560px] w-full mx-auto px-4 py-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <button onClick={reset} className="px-3 py-1 rounded-full border border-white/25 text-sm">←</button>
            <span className="flex-1 text-center text-sm opacity-80">{conv.emoji} {tl(conv.title)}</span>
            <button
              onClick={() => setShowMeaning(v => !v)}
              className="px-3 py-1 rounded-full border border-white/25 text-[0.7rem]"
            >
              {showMeaning ? '👁️' : '🙈'}
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <VoiceOrb
              mode={isListening ? 'listening' : spoke ? 'speaking' : 'idle'}
              hue={config.hue}
              onClick={() => speakText(npc.text, lang)}
              label={tt('listen') || 'Escuchar'}
            />

            <div className="text-center">
              <p className="text-lg leading-relaxed">
                {npc.text.split(/(\s+)/).map((w, i) =>
                  w.trim() ? (
                    <button
                      key={i}
                      onClick={() => { setLookup(w.replace(/[.,!?¿¡。、？！]/g, '')); speakText(w, lang); }}
                      className="hover:underline decoration-dotted"
                    >{w}</button>
                  ) : <span key={i}> </span>
                )}
              </p>
              {showMeaning && npcMeaning && (
                <p className="text-[0.8rem] opacity-60 mt-2 italic">{tl(npcMeaning)}</p>
              )}
              {lookup && (
                <p className="text-[0.75rem] mt-2 opacity-80">
                  🔍 <strong>{lookup}</strong> — <RecallBars bars={getRecall(lang, lookup).bars} />
                </p>
              )}
            </div>

            {!hideHint && (
              <p className="text-[0.75rem] opacity-70 text-center">💡 {tl(turn!.hint)}</p>
            )}

            {fb === 'correct' && (
              <div className="text-sm text-center px-4 py-2 rounded-xl bg-white/10">
                ✅ {tt('correct')} — <em>{turn!.expected}</em>
              </div>
            )}
            {fb === 'wrong' && (
              <div className="text-sm text-center px-4 py-2 rounded-xl bg-white/10">
                ❌ {tt('try_again')} — 💡 {tl(turn!.hint)}
              </div>
            )}
          </div>

          {/* Reply controls */}
          <div className="pb-5 pt-3">
            {typing ? (
              <div className="flex gap-2 items-center">
                <input
                  autoFocus
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && check(input)}
                  placeholder={tt('write_in_language')}
                  className="flex-1 rounded-xl px-3 py-2 text-sm bg-white/10 border border-white/20 outline-none placeholder:text-white/40"
                />
                <button onClick={() => check(input)} className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">{tt('send')}</button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                {transcript && <p className="text-sm opacity-80">“{transcript}”</p>}
                <div className="flex gap-2">
                  {isSupported ? (
                    <button
                      onClick={() => { if (isListening) { stop(); check(transcript); } else start(); }}
                      className={`px-6 py-2.5 rounded-full text-sm font-medium ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-white text-black'}`}
                    >
                      {isListening ? `⏹ ${tt('stop') || 'Parar'}` : `🎤 ${tt('speak') || 'Hablar'}`}
                    </button>
                  ) : (
                    <span className="text-[0.7rem] opacity-60">🎤 {tt('coming_soon')}</span>
                  )}
                  {transcript && !isListening && (
                    <button onClick={() => check(transcript)} className="px-4 py-2.5 rounded-full border border-white/30 text-sm">{tt('send')}</button>
                  )}
                </div>
              </div>
            )}
            <button
              onClick={() => { setTyping(v => !v); setInput(''); setTranscript(''); }}
              className="mt-3 w-full text-center text-[0.7rem] opacity-60 underline"
            >
              {typing ? `🎤 ${tt('speak') || 'Hablar'}` : `⌨️ ${tt('write_in_language')}`}
            </button>
            <div className="mt-2 text-[0.7rem] opacity-50 text-center">
              {tt('turn_of').replace('{0}', String(turnIdx + 1)).replace('{1}', String(conv.turns.length))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Theme catalogue ----------
  const levels: { key: 1 | 2 | 3; label: string }[] = [
    { key: 1, label: '🌱' }, { key: 2, label: '🌿' }, { key: 3, label: '🌳' },
  ];

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[580px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">💬 {tt('conversation')}</span>
          <div className="flex gap-1">
            {convLangs.map(l => (
              <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded-full border text-sm font-semibold ${lang === l ? 'border-foreground/40 bg-background' : 'border-border'}`}>
                {getLangConfig(l).flag}
              </button>
            ))}
          </div>
        </div>

        <h2 className="font-serif text-2xl font-light mb-1">{tt('practice_conv')}</h2>
        <p className="text-sm text-foreground-secondary mb-4">{tt('simulate_real')}</p>

        {convs.length === 0 ? (
          <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
        ) : convs.map(c => {
          const isDone = state.convDone.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => { setActiveConv(c.id); setTurnIdx(0); setFb(null); setInput(''); setTranscript(''); setDone(false); lastSpoken.current = ''; }}
              className="w-full border-[1.5px] border-border rounded-[18px] overflow-hidden mb-3 bg-card text-left hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <div className="p-4 flex items-center gap-3.5">
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <div className="text-[0.7rem] text-foreground-muted">{c.level} {isDone && '✅'}</div>
                  <div className="text-sm font-semibold">{tl(c.title)}</div>
                </div>
              </div>
              <div className="px-4 pb-3 text-[0.77rem] text-foreground-secondary">{tl(c.scenario)}</div>
            </button>
          );
        })}
        <p className="text-[0.7rem] text-foreground-muted text-center mt-2">{levels.map(l => l.label).join(' ')}</p>
      </div>
    </div>
  );
}
