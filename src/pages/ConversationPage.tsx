import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { CONVERSATION_DATA } from '@/data/conversations';
import { Lang } from '@/data/types';

export default function ConversationPage() {
  const navigate = useNavigate();
  const { state, addXP, markConvDone } = useApp();
  const [lang, setLang] = useState<Lang>('jp');
  const [activeConv, setActiveConv] = useState<string | null>(null);
  const [turnIdx, setTurnIdx] = useState(0);
  const [input, setInput] = useState('');
  const [fb, setFb] = useState<'correct' | 'wrong' | null>(null);
  const [done, setDone] = useState(false);
  const isJp = lang === 'jp';
  const convs = CONVERSATION_DATA[lang] || [];

  const conv = convs.find(c => c.id === activeConv);

  const checkTurn = () => {
    if (!conv) return;
    const turn = conv.turns[turnIdx];
    const match = turn.accept.some(a => input.toLowerCase().includes(a.toLowerCase()));
    if (match) {
      setFb('correct');
      addXP(lang, 30);
      setTimeout(() => {
        setFb(null);
        setInput('');
        if (turnIdx + 1 >= conv.turns.length) {
          markConvDone(conv.id);
          addXP(lang, 120);
          setDone(true);
        } else {
          setTurnIdx(i => i + 1);
        }
      }, 1200);
    } else {
      setFb('wrong');
      setInput('');
    }
  };

  if (activeConv && conv) {
    if (done) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="font-serif text-2xl font-semibold mb-2">¡Conversación completada!</h2>
          <p className="text-sm text-foreground-secondary mb-5">+150 XP ganados</p>
          <div className="flex gap-2">
            <button onClick={() => { setActiveConv(null); setDone(false); setTurnIdx(0); }} className="px-5 py-2 rounded-full border border-border text-sm">← Volver</button>
            <button onClick={() => { setTurnIdx(0); setDone(false); setInput(''); }} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium">🔄 Repetir</button>
          </div>
        </div>
      );
    }

    const turn = conv.turns[turnIdx];
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[580px] mx-auto px-4 py-5">
          <button onClick={() => { setActiveConv(null); setTurnIdx(0); setFb(null); }} className="px-3 py-1 rounded-full border border-border text-sm mb-4">← Volver</button>
          <div className={`rounded-xl p-3 mb-4 text-sm ${isJp ? 'bg-jp-light' : 'bg-fr-light'}`}>
            {turn.npc}
          </div>
          <div className="text-[0.72rem] text-foreground-muted mb-1">💡 Pista: {turn.hint}</div>
          <div className="flex gap-2 items-center">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && checkTurn()} placeholder="Escribe en el idioma..." className={`flex-1 border-[1.5px] rounded-xl px-3 py-2 text-sm bg-card outline-none ${isJp ? 'focus:border-jp' : 'focus:border-fr'} border-border`} />
            <button onClick={checkTurn} className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium">Enviar</button>
          </div>
          {fb === 'correct' && <div className="mt-2 p-2 rounded-lg bg-success-light text-success text-sm">✅ ¡Bien! Respuesta modelo: <em>{turn.expected}</em></div>}
          {fb === 'wrong' && <div className="mt-2 p-2 rounded-lg bg-destructive/10 text-destructive text-sm">❌ Inténtalo de nuevo. Pista: <em>{turn.hint}</em></div>}
          <div className="mt-3 text-[0.7rem] text-foreground-muted text-center">Turno {turnIdx + 1} de {conv.turns.length}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[580px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← Inicio</button>
          <span className="flex-1 text-center font-serif font-semibold">💬 Conversación</span>
          <button onClick={() => setLang('jp')} className={`px-3 py-1 rounded-full border text-sm font-semibold ${isJp ? 'bg-jp-light text-jp border-jp' : 'border-border'}`}>🇯🇵</button>
          <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full border text-sm font-semibold ${!isJp ? 'bg-fr-light text-fr border-fr' : 'border-border'}`}>🇫🇷</button>
        </div>

        <h2 className="font-serif text-2xl font-light mb-1">Práctica conversacional</h2>
        <p className="text-sm text-foreground-secondary mb-5">Simula situaciones reales.</p>

        {convs.map(c => {
          const isDone = state.convDone.includes(c.id);
          return (
            <button key={c.id} onClick={() => { setActiveConv(c.id); setTurnIdx(0); setFb(null); setInput(''); setDone(false); }} className="w-full border-[1.5px] border-border rounded-[18px] overflow-hidden mb-3.5 bg-card text-left hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className="p-4 flex items-center gap-3.5">
                <span className="text-3xl">{c.emoji}</span>
                <div>
                  <div className="text-[0.7rem] text-foreground-muted">{c.level} {isDone && '✅'}</div>
                  <div className="text-sm font-semibold">{c.title}</div>
                </div>
              </div>
              <div className="px-4 pb-3 text-[0.77rem] text-foreground-secondary">{c.scenario}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
