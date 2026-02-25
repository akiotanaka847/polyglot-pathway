import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { FLASHCARD_DATA } from '@/data/flashcards';
import { LEVELS } from '@/data/lessons';
import { Lang } from '@/data/types';
import { speakText } from '@/utils/helpers';

export default function FlashcardsPage() {
  const navigate = useNavigate();
  const { state, addXP, incrementFC, updateSRS } = useApp();
  const [lang, setLang] = useState<Lang | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dueIndices, setDueIndices] = useState<number[]>([]);

  if (!lang || !level) {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto p-5">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-2xl font-light mb-1">🃏 Flashcards SRS</h2>
          <p className="text-sm text-foreground-secondary mb-5">Selecciona idioma y nivel para repasar con repetición espaciada.</p>
          {(['jp', 'fr'] as const).map(l => (
            <div key={l} className="mb-4">
              <div className={`text-[0.68rem] font-bold tracking-widest uppercase mb-2 ${l === 'jp' ? 'text-jp' : 'text-fr'}`}>
                {l === 'jp' ? '🇯🇵 Japonés' : '🇫🇷 Francés'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {LEVELS[l].map(lvl => {
                  const cards = FLASHCARD_DATA[l]?.[lvl] || [];
                  if (!cards.length) return null;
                  const srs = state.srs[l]?.[lvl] || {};
                  const now = Date.now();
                  const due = cards.filter((_, i) => { const d = srs[i]; return !d || now >= d.due; }).length;
                  return (
                    <button key={lvl} onClick={() => { setLang(l); setLevel(lvl); startFC(l, lvl); }}
                      className={`border-[1.5px] rounded-[14px] p-4 text-left transition-all hover:-translate-y-1 hover:shadow-md ${l === 'jp' ? 'border-jp/30 hover:bg-jp-light' : 'border-fr/30 hover:bg-fr-light'} bg-card`}>
                      <div className="font-serif text-lg font-semibold mb-0.5">{lvl}</div>
                      <div className="text-[0.72rem] text-foreground-muted">{cards.length} tarjetas</div>
                      {due > 0 && <div className={`text-[0.68rem] font-bold mt-1 ${l === 'jp' ? 'text-jp' : 'text-fr'}`}>📬 {due} pendientes</div>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const cards = FLASHCARD_DATA[lang]?.[level] || [];
  const isJp = lang === 'jp';

  function startFC(l: Lang, lvl: string) {
    const cs = FLASHCARD_DATA[l]?.[lvl] || [];
    const srs = state.srs[l]?.[lvl] || {};
    const now = Date.now();
    const due = cs.map((_, i) => { const d = srs[i]; return (!d || now >= d.due) ? i : null; }).filter(i => i !== null) as number[];
    setDueIndices(due.length > 0 ? due : cs.map((_, i) => i));
    setCardIdx(0);
    setFlipped(false);
  }

  if (cardIdx >= dueIndices.length) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="font-serif text-2xl font-light mb-2">¡Repaso completo!</h2>
        <p className="text-sm text-foreground-secondary mb-5">Has repasado todas las tarjetas pendientes.</p>
        <div className="flex gap-2">
          <button onClick={() => { setLang(null); setLevel(null); }} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium">Otro nivel</button>
          <button onClick={() => navigate('/')} className="px-5 py-2 rounded-full border border-border text-sm">Inicio</button>
        </div>
      </div>
    );
  }

  const card = cards[dueIndices[cardIdx]];

  const rate = (rating: number) => {
    const idx = dueIndices[cardIdx];
    const srs = state.srs[lang]?.[level]?.[idx] || { interval: 1, ease: 2.5 };
    let interval: number, ease: number;
    if (rating < 3) { interval = 1; ease = Math.max(1.3, srs.ease - 0.2); }
    else if (rating === 3) { interval = Math.max(1, srs.interval * srs.ease); ease = srs.ease; }
    else { interval = Math.max(1, srs.interval * srs.ease * 1.15); ease = Math.min(3.5, srs.ease + 0.15); }

    updateSRS(lang, level, idx, { interval: Math.round(interval), ease, due: Date.now() + interval * 86400000 });
    incrementFC();
    addXP(lang, rating === 2 ? 15 : rating === 1 ? 8 : 3);
    setFlipped(false);
    setCardIdx(i => i + 1);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-5 animate-fade-in">
      {/* Progress dots */}
      <div className="flex gap-1 flex-wrap justify-center mb-4">
        {dueIndices.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i < cardIdx ? 'bg-success' : i === cardIdx ? (isJp ? 'bg-jp' : 'bg-fr') : 'bg-border'}`} />
        ))}
      </div>
      <div className="text-[0.68rem] text-foreground-muted mb-4">Carta {cardIdx + 1}/{dueIndices.length}</div>

      <button
        onClick={() => { if (!flipped) { setFlipped(true); speakText(card.f, lang); } }}
        className={`w-full max-w-sm border-[1.5px] rounded-[20px] p-8 text-center transition-all min-h-[200px] flex flex-col justify-center ${flipped ? 'bg-background border-border' : 'bg-card border-border'}`}
      >
        <div className="text-[0.68rem] text-foreground-muted mb-2">{flipped ? 'Reverso — ¿Lo sabías?' : 'Anverso — toca para ver la respuesta'}</div>
        <div className={`text-3xl mb-3 ${isJp ? 'font-serif-jp' : 'font-serif italic'}`}>{card.f}</div>
        {flipped && (
          <div className="animate-fade-in">
            <div className="text-lg font-semibold mb-1">{card.b}</div>
            {card.ex && <div className="text-sm text-foreground-muted">{card.ex}</div>}
          </div>
        )}
      </button>

      {flipped && (
        <div className="flex gap-2 mt-5 animate-fade-in">
          <button onClick={() => rate(1)} className="px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20">😞 Difícil</button>
          <button onClick={() => rate(3)} className="px-4 py-2 rounded-full bg-gold-light text-gold text-sm font-medium border border-gold/20">🤔 Regular</button>
          <button onClick={() => rate(5)} className="px-4 py-2 rounded-full bg-success-light text-success text-sm font-medium border border-success/20">😊 Fácil</button>
        </div>
      )}

      <button onClick={() => { setLang(null); setLevel(null); }} className="mt-6 text-sm text-foreground-muted hover:text-foreground">
        ← Volver
      </button>
    </div>
  );
}
