import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { CULTURE_DATA } from '@/data/culture';
import { getLangConfig } from '@/data/languages';

export default function CulturePage() {
  const navigate = useNavigate();
  const { state, addXP, markCultureRead, earnAchievement, tt } = useApp();
  const activeLangs = state.activeLangs || [];
  const cultureLangs = [...new Set([...activeLangs, ...Object.keys(CULTURE_DATA)])].filter(l => CULTURE_DATA[l]?.length > 0);
  const [lang, setLang] = useState<string>(cultureLangs[0] || 'jp');
  const config = getLangConfig(lang);
  const cards = CULTURE_DATA[lang] || [];

  const handleRead = (id: string) => {
    if (!state.cultRead.includes(id)) {
      markCultureRead(id);
      addXP(lang, 20);
      if (state.cultRead.length + 1 >= 5) earnAchievement('culture_5');
    }
  };

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[620px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">🌍 {tt('culture')}</span>
          <div className="flex gap-1">
            {cultureLangs.map(l => {
              const lc = getLangConfig(l);
              return (
                <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded-full border text-sm font-semibold ${lang === l ? 'border-foreground/40 bg-background' : 'border-border'}`}>
                  {lc.flag}
                </button>
              );
            })}
          </div>
        </div>

        <h2 className="font-serif text-2xl font-light mb-1">{tt('culture_context')}</h2>
        <p className="text-sm text-foreground-secondary mb-5">{tt('language_lives_in')}</p>

        {cards.length === 0 ? (
          <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
        ) : cards.map(card => {
          const read = state.cultRead.includes(card.id);
          return (
            <div key={card.id} onClick={() => handleRead(card.id)} className="border border-border rounded-[18px] overflow-hidden mb-3.5 bg-card cursor-pointer">
              <div className="px-4 pt-4 pb-2 flex items-center gap-3">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <div className="font-serif text-lg font-semibold">{card.title}</div>
                  {read && <span className="text-[0.65rem] text-success font-semibold">✅ {tt('read')} · +20 XP</span>}
                </div>
              </div>
              <div className="px-4 pb-4 text-sm leading-relaxed text-foreground-secondary">
                {card.body}
                <div className="mt-2.5 p-2.5 rounded-lg bg-gold-light text-sm border-l-[3px] border-l-gold">
                  <span className="font-bold">💡 {tt('fun_fact')}: </span>{card.fact}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
