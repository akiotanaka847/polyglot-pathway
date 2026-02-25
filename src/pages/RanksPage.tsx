import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { ACHIEVEMENTS, RANKS } from '@/data/achievements';
import { getLangConfig } from '@/data/languages';

export default function RanksPage() {
  const navigate = useNavigate();
  const { state, getRank, getRankPct, tt } = useApp();
  const totalXp = Object.values(state.xp).reduce((a, b) => a + b, 0);
  const activeLangs = state.activeLangs || [];

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[600px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">🏆 {tt('achievements')}</span>
        </div>

        {/* Rank display for each active language */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
          {activeLangs.map(code => {
            const config = getLangConfig(code);
            const r = getRank(code);
            return (
              <div key={code} className="rounded-[16px] p-4 text-center border"
                style={{ background: `hsl(${config.hue}, 80%, 96%)`, borderColor: `hsl(${config.hue}, 60%, 80%)` }}>
                <div className="text-3xl">{r.icon}</div>
                <div className="font-serif text-lg font-semibold" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{config.flag} {r.title}</div>
                <div className="text-[0.7rem] text-foreground-secondary">{r.romaji ? `${r.romaji} · ` : ''}{r.meaning}</div>
                <div className="text-[0.75rem] font-bold mt-1" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{state.xp[code] || 0} XP</div>
                <div className="h-1.5 bg-border rounded-full mt-2 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${getRankPct(code)}%`, background: `hsl(${config.hue}, 70%, 46%)` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-background rounded-[14px] p-3 mb-5 flex items-center gap-3.5">
          <div className="text-3xl">🔥</div>
          <div>
            <div className="text-xl font-bold">{state.streak.count || 0} {tt('days_streak')}</div>
            <div className="text-[0.75rem] text-foreground-secondary">{tt('total_xp')}: ⭐ {totalXp}</div>
          </div>
        </div>

        {/* World map for each language */}
        <h3 className="font-serif text-xl font-semibold mb-3">🗺️ {tt('world_progress')}</h3>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {activeLangs.slice(0, 4).map(code => {
            const config = getLangConfig(code);
            const levels = config.levels;
            return (
              <div key={code}>
                <div className="text-[0.68rem] font-bold tracking-widest uppercase mb-2" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>
                  {config.flag} {config.nativeName}
                </div>
                {levels.slice(0, 5).map((lvl, i) => {
                  const xp = state.xp[code] || 0;
                  const done = xp > (i * 200);
                  const active = !done && (i === 0 || xp >= i * 200);
                  return (
                    <div key={lvl} className={`flex items-center gap-2 p-2 rounded-[10px] mb-1 ${done ? 'bg-success-light border border-success' : active ? 'bg-card border border-border' : 'opacity-40'}`}>
                      <div className="font-serif text-sm font-bold">{lvl}</div>
                      <span className="text-sm ml-auto">{done ? '✅' : active ? '▶️' : '🔒'}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <h3 className="font-serif text-xl font-semibold mb-3">⭐ {tt('achievements')}</h3>
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
