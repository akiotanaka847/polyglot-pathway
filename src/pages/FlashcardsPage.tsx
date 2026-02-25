import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { FLASHCARD_DATA } from '@/data/flashcards';
import { LEVELS } from '@/data/lessons';
import { getLangConfig } from '@/data/languages';
import { speakText } from '@/utils/helpers';

export default function FlashcardsPage() {
  const navigate = useNavigate();
  const { state, addXP, incrementFC, updateSRS, tt } = useApp();
  const [lang, setLang] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dueIndices, setDueIndices] = useState<number[]>([]);

  const activeLangs = state.activeLangs || [];
  // Also show langs with flashcard data
  const allFCLangs = [...new Set([...activeLangs, ...Object.keys(FLASHCARD_DATA)])];

  if (!lang || !level) {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto p-5">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-2xl font-light mb-1">🃏 {tt('flashcards')} SRS</h2>
          <p className="text-sm text-foreground-secondary mb-5">{tt('select_lang_level')}</p>
          {allFCLangs.map(l => {
            const config = getLangConfig(l);
            const levels = LEVELS[l] || config.levels;
            const hasCards = levels.some(lvl => (FLASHCARD_DATA[l]?.[lvl] || []).length > 0);
            if (!hasCards) return null;
            return (
              <div key={l} className="mb-4">
                <div className="text-[0.68rem] font-bold tracking-widest uppercase mb-2" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>
                  {config.flag} {config.nativeName}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {levels.map(lvl => {
                    const cards = FLASHCARD_DATA[l]?.[lvl] || [];
                    if (!cards.length) return null;
                    const srs = state.srs[l]?.[lvl] || {};
                    const now = Date.now();
                    const due = cards.filter((_, i) => { const d = srs[i]; return !d || now >= d.due; }).length;
                    return (
                      <button key={lvl} onClick={() => { setLang(l); setLevel(lvl); startFC(l, lvl); }}
                        className="border-[1.5px] rounded-[14px] p-4 text-left transition-all hover:-translate-y-1 hover:shadow-md bg-card"
                        style={{ borderColor: `hsl(${config.hue}, 50%, 80%)` }}>
                        <div className="font-serif text-lg font-semibold mb-0.5">{lvl}</div>
                        <div className="text-[0.72rem] text-foreground-muted">{cards.length} {tt('cards')}</div>
                        {due > 0 && <div className="text-[0.68rem] font-bold mt-1" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>📬 {due} {tt('pending')}</div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const cards = FLASHCARD_DATA[lang]?.[level] || [];
  const config = getLangConfig(lang);

  function startFC(l: string, lvl: string) {
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
        <h2 className="font-serif text-2xl font-light mb-2">{tt('review_complete')}</h2>
        <p className="text-sm text-foreground-secondary mb-5">{tt('all_cards_reviewed')}</p>
        <div className="flex gap-2">
          <button onClick={() => { setLang(null); setLevel(null); }} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium">{tt('another_level')}</button>
          <button onClick={() => navigate('/')} className="px-5 py-2 rounded-full border border-border text-sm">{tt('go_home')}</button>
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
      <div className="flex gap-1 flex-wrap justify-center mb-4">
        {dueIndices.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: i < cardIdx ? 'hsl(var(--success))' : i === cardIdx ? `hsl(${config.hue}, 70%, 46%)` : 'hsl(var(--border))' }} />
        ))}
      </div>
      <div className="text-[0.68rem] text-foreground-muted mb-4">{tt('card_of').replace('{0}', String(cardIdx + 1)).replace('{1}', String(dueIndices.length))}</div>

      <button
        onClick={() => { if (!flipped) { setFlipped(true); speakText(card.f, lang); } }}
        className={`w-full max-w-sm border-[1.5px] rounded-[20px] p-8 text-center transition-all min-h-[200px] flex flex-col justify-center ${flipped ? 'bg-background border-border' : 'bg-card border-border'}`}
      >
        <div className="text-[0.68rem] text-foreground-muted mb-2">{flipped ? tt('back_did_know') : tt('front_tap')}</div>
        <div className={`text-3xl mb-3 ${config.fontClass || 'font-serif'}`}>{card.f}</div>
        {flipped && (
          <div className="animate-fade-in">
            <div className="text-lg font-semibold mb-1">{card.b}</div>
            {card.ex && <div className="text-sm text-foreground-muted">{card.ex}</div>}
          </div>
        )}
      </button>

      {flipped && (
        <div className="flex gap-2 mt-5 animate-fade-in">
          <button onClick={() => rate(1)} className="px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20">😞 {tt('hard')}</button>
          <button onClick={() => rate(3)} className="px-4 py-2 rounded-full bg-gold-light text-gold text-sm font-medium border border-gold/20">🤔 {tt('medium')}</button>
          <button onClick={() => rate(5)} className="px-4 py-2 rounded-full bg-success-light text-success text-sm font-medium border border-success/20">😊 {tt('easy')}</button>
        </div>
      )}

      <button onClick={() => { setLang(null); setLevel(null); }} className="mt-6 text-sm text-foreground-muted hover:text-foreground">
        ← {tt('back')}
      </button>
    </div>
  );
}
