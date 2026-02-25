import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { CULTURE_DATA } from '@/data/culture';
import { Lang } from '@/data/types';

export default function CulturePage() {
  const navigate = useNavigate();
  const { state, addXP, markCultureRead, earnAchievement } = useApp();
  const [lang, setLang] = useState<Lang>('jp');
  const isJp = lang === 'jp';
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
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← Inicio</button>
          <span className="flex-1 text-center font-serif font-semibold">🌍 Cultura</span>
          <button onClick={() => setLang('jp')} className={`px-3 py-1 rounded-full border text-sm font-semibold ${isJp ? 'bg-jp-light text-jp border-jp' : 'border-border'}`}>🇯🇵</button>
          <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full border text-sm font-semibold ${!isJp ? 'bg-fr-light text-fr border-fr' : 'border-border'}`}>🇫🇷</button>
        </div>

        <h2 className="font-serif text-2xl font-light mb-1">Cultura & Contexto</h2>
        <p className="text-sm text-foreground-secondary mb-5">El idioma vive dentro de su cultura.</p>

        {cards.map(card => {
          const read = state.cultRead.includes(card.id);
          return (
            <div key={card.id} onClick={() => handleRead(card.id)} className="border border-border rounded-[18px] overflow-hidden mb-3.5 bg-card cursor-pointer">
              <div className="px-4 pt-4 pb-2 flex items-center gap-3">
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <div className="font-serif text-lg font-semibold">{card.title}</div>
                  {read && <span className="text-[0.65rem] text-success font-semibold">✅ Leído · +20 XP</span>}
                </div>
              </div>
              <div className="px-4 pb-4 text-sm leading-relaxed text-foreground-secondary">
                {card.body}
                <div className="mt-2.5 p-2.5 rounded-lg bg-gold-light text-sm border-l-[3px] border-l-gold">
                  <span className="font-bold">💡 Dato curioso: </span>{card.fact}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
