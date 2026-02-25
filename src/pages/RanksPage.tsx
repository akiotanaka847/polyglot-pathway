import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { ACHIEVEMENTS, RANKS } from '@/data/achievements';

export default function RanksPage() {
  const navigate = useNavigate();
  const { state, getRank, getRankPct } = useApp();
  const jpR = getRank('jp');
  const frR = getRank('fr');
  const totalXp = (state.xp.jp || 0) + (state.xp.fr || 0);

  const jpCities = [
    { l: 'N5', c: '🏯', n: 'Kioto' }, { l: 'N4', c: '🗼', n: 'Tokio' }, { l: 'N3', c: '🌊', n: 'Osaka' },
    { l: 'N2', c: '⛩️', n: 'Nara' }, { l: 'N1', c: '🏔️', n: 'Fuji' },
  ];
  const frCities = [
    { l: 'A1', c: '🍷', n: 'Lyon' }, { l: 'A2', c: '🗼', n: 'París' }, { l: 'B1', c: '🌊', n: 'Marsella' },
    { l: 'B2', c: '🏰', n: 'Bordeaux' }, { l: 'C1', c: '🎭', n: 'Versailles' },
  ];

  const mapItems = (cities: typeof jpCities, lang: 'jp' | 'fr') =>
    cities.map((c, i) => {
      const xp = state.xp[lang] || 0;
      const done = xp > (i * 200);
      const active = !done && (i === 0 || xp >= i * 200);
      return (
        <div key={c.l} className={`flex items-center gap-3.5 p-3.5 rounded-[14px] mb-1 ${done ? 'bg-success-light border-[1.5px] border-success' : active ? 'bg-card border-[1.5px] border-border shadow-sm' : 'opacity-40'}`}>
          <span className="text-3xl">{c.c}</span>
          <div className="flex-1">
            <div className="text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted">{c.l}</div>
            <div className="font-serif text-lg font-semibold">{c.n}</div>
          </div>
          <span className="text-lg">{done ? '✅' : active ? '▶️' : '🔒'}</span>
        </div>
      );
    });

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[600px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← Inicio</button>
          <span className="flex-1 text-center font-serif font-semibold">🏆 Rangos y logros</span>
        </div>

        {/* Rank display */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          <div className="bg-jp-light rounded-[16px] p-4 text-center border border-jp/20">
            <div className="text-4xl">{jpR.icon}</div>
            <div className="font-serif text-xl font-semibold text-jp">{jpR.title}</div>
            <div className="text-[0.7rem] text-foreground-secondary">{jpR.romaji} · {jpR.meaning}</div>
            <div className="text-[0.75rem] font-bold text-jp mt-1">{state.xp.jp || 0} XP</div>
            <div className="h-1.5 bg-border rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-jp rounded-full" style={{ width: `${getRankPct('jp')}%` }} />
            </div>
          </div>
          <div className="bg-fr-light rounded-[16px] p-4 text-center border border-fr/20">
            <div className="text-4xl">{frR.icon}</div>
            <div className="font-serif text-xl font-semibold text-fr">{frR.title}</div>
            <div className="text-[0.7rem] text-foreground-secondary">{frR.meaning}</div>
            <div className="text-[0.75rem] font-bold text-fr mt-1">{state.xp.fr || 0} XP</div>
            <div className="h-1.5 bg-border rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-fr rounded-full" style={{ width: `${getRankPct('fr')}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-background rounded-[14px] p-3 mb-5 flex items-center gap-3.5">
          <div className="text-3xl">🔥</div>
          <div>
            <div className="text-xl font-bold">{state.streak.count || 0} días de racha</div>
            <div className="text-[0.75rem] text-foreground-secondary">XP total: ⭐ {totalXp}</div>
          </div>
        </div>

        {/* World map */}
        <h3 className="font-serif text-xl font-semibold mb-3">🗺️ Tu progreso en el mundo</h3>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <div className="text-[0.68rem] font-bold text-jp tracking-widest uppercase mb-2">🇯🇵 Japonés</div>
            {mapItems(jpCities, 'jp')}
          </div>
          <div>
            <div className="text-[0.68rem] font-bold text-fr tracking-widest uppercase mb-2">🇫🇷 Francés</div>
            {mapItems(frCities, 'fr')}
          </div>
        </div>

        {/* Achievements */}
        <h3 className="font-serif text-xl font-semibold mb-3">⭐ Logros</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {ACHIEVEMENTS.map(a => {
            const earned = state.earned.includes(a.id);
            return (
              <div key={a.id} className={`border-[1.5px] rounded-[14px] p-3 text-center bg-card transition-all ${earned ? 'border-gold bg-gold-light' : 'border-border opacity-45 grayscale'}`}>
                <div className="text-2xl mb-1">{a.icon}</div>
                <div className="text-[0.74rem] font-semibold mb-0.5">{a.title}</div>
                <div className="text-[0.68rem] text-foreground-secondary leading-snug">{a.desc}</div>
                <div className="text-[0.67rem] text-gold font-bold mt-1">+{a.xp} XP</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
