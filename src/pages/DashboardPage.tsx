import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LEVELS, LESSON_DATA } from '@/data/lessons/index';
import { getLangConfig } from '@/data/languages';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { state, getRank, getRankPct, tt } = useApp();
  const totalXp = Object.values(state.xp).reduce((a, b) => a + b, 0);
  const activeLangs = state.activeLangs || [];

  // Find next lessons across all active languages
  const suggestions: { lang: string; lvl: string; idx: number; title: string }[] = [];
  activeLangs.forEach(lang => {
    const levels = LEVELS[lang] || [];
    const prog = state.prog[lang];
    if (!prog) return;
    levels.forEach(lvl => {
      const lessons = LESSON_DATA[lang]?.[lvl] || [];
      if (!lessons.length) return;
      const done = prog.done[lvl] || {};
      const unlocked = lvl === levels[0] || prog.passed[levels[levels.indexOf(lvl) - 1]];
      if (!unlocked) return;
      const next = lessons.find(l => !done[l.id]);
      if (next) suggestions.push({ lang, lvl, idx: lessons.indexOf(next), title: next.title });
    });
  });

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[560px] mx-auto p-4">
        {/* Rank cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          {activeLangs.map(code => {
            const config = getLangConfig(code);
            const r = getRank(code);
            const xp = state.xp[code] || 0;
            return (
              <div key={code} className="rounded-[16px] p-3.5 border-[1.5px]"
                style={{ background: `hsl(${config.hue}, 80%, 96%)`, borderColor: `hsl(${config.hue}, 60%, 80%)` }}>
                <div className="text-2xl">{r.icon}</div>
                <div className="font-serif text-base font-semibold" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>
                  {config.flag} {r.title}
                </div>
                <div className="text-[0.67rem] text-foreground-secondary mb-1.5">{xp} XP · {r.meaning}</div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${getRankPct(code)}%`, background: `hsl(${config.hue}, 70%, 46%)` }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { icon: '🔥', val: state.streak.count || 0, label: tt('streak') },
            { icon: '⭐', val: totalXp, label: 'XP' },
            { icon: '📚', val: state.lesDone || 0, label: tt('lessons') },
            { icon: '🃏', val: state.fcTotal || 0, label: tt('cards') },
          ].map(s => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-2.5 text-center">
              <div className="text-lg">{s.icon}</div>
              <div className="text-lg font-bold">{s.val}</div>
              <div className="text-[0.58rem] text-foreground-secondary">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="bg-card border border-border rounded-[14px] p-3.5 mb-3">
          <div className="font-semibold text-sm mb-2.5">▶️ {tt('continue')}</div>
          {suggestions.length === 0 ? (
            <p className="text-sm text-foreground-secondary">{tt('start')}!</p>
          ) : (
            suggestions.slice(0, 4).map(s => {
              const config = getLangConfig(s.lang);
              return (
                <button key={`${s.lang}-${s.lvl}-${s.idx}`} onClick={() => navigate(`/lesson/${s.lang}/${s.lvl}/${s.idx}`)} className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-background border border-transparent hover:border-border transition-all text-left mb-1">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: `hsl(${config.hue}, 80%, 96%)` }}>
                    {config.flag}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{s.title}</div>
                    <div className="text-[0.66rem] text-foreground-muted">{config.nativeName} · {s.lvl}</div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => navigate('/flashcards')} className="py-3 rounded-xl bg-foreground text-background text-sm font-medium">🃏 {tt('flashcards')}</button>
          <button onClick={() => navigate('/reference')} className="py-3 rounded-xl border border-border text-foreground-secondary text-sm font-medium">📚 {tt('reference')}</button>
        </div>
      </div>
    </div>
  );
}
