import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LEVELS, LESSON_DATA } from '@/data/lessons';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { state, getRank, getRankPct } = useApp();
  const jpXp = state.xp.jp || 0;
  const frXp = state.xp.fr || 0;
  const totalXp = jpXp + frXp;
  const jpR = getRank('jp');
  const frR = getRank('fr');

  // Find next lessons
  const suggestions: { lang: string; lvl: string; idx: number; title: string }[] = [];
  (['jp', 'fr'] as const).forEach(lang => {
    const levels = LEVELS[lang];
    const prog = state.prog[lang];
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
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="bg-jp-light rounded-[16px] p-3.5 border-[1.5px] border-jp/20">
            <div className="text-2xl">{jpR.icon}</div>
            <div className="font-serif text-base font-semibold text-jp">{jpR.title}</div>
            <div className="text-[0.67rem] text-foreground-secondary mb-1.5">{jpXp} XP · {jpR.meaning}</div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-jp rounded-full" style={{ width: `${getRankPct('jp')}%` }} />
            </div>
          </div>
          <div className="bg-fr-light rounded-[16px] p-3.5 border-[1.5px] border-fr/20">
            <div className="text-2xl">{frR.icon}</div>
            <div className="font-serif text-base font-semibold text-fr">{frR.title}</div>
            <div className="text-[0.67rem] text-foreground-secondary mb-1.5">{frXp} XP · {frR.meaning}</div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-fr rounded-full" style={{ width: `${getRankPct('fr')}%` }} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { icon: '🔥', val: state.streak.count || 0, label: 'racha' },
            { icon: '⭐', val: totalXp, label: 'XP' },
            { icon: '📚', val: state.lesDone || 0, label: 'lecciones' },
            { icon: '🃏', val: state.fcTotal || 0, label: 'cards' },
          ].map(s => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-2.5 text-center">
              <div className="text-lg">{s.icon}</div>
              <div className="text-lg font-bold">{s.val}</div>
              <div className="text-[0.58rem] text-foreground-secondary">{s.label}</div>
            </div>
          ))}
        </div>

        {/* XP Progress */}
        <div className="bg-card border border-border rounded-[14px] p-3.5 mb-3">
          <div className="font-semibold text-sm mb-2.5">📈 Progreso XP</div>
          {jpXp === 0 && frXp === 0 && <p className="text-sm text-foreground-secondary">¡Empieza una lección para ver tu progreso!</p>}
          {jpXp > 0 && (
            <div className="mb-2">
              <div className="flex justify-between text-[0.72rem] mb-1">
                <span className="text-jp font-semibold">🇯🇵 {state.prog.jp.cur}</span>
                <span className="text-foreground-secondary">{jpXp} XP</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-jp-dark to-jp" style={{ width: `${Math.min(100, (jpXp % 500) / 5)}%` }} />
              </div>
            </div>
          )}
          {frXp > 0 && (
            <div>
              <div className="flex justify-between text-[0.72rem] mb-1">
                <span className="text-fr font-semibold">🇫🇷 {state.prog.fr.cur}</span>
                <span className="text-foreground-secondary">{frXp} XP</span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-fr to-fr-accent" style={{ width: `${Math.min(100, (frXp % 500) / 5)}%` }} />
              </div>
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div className="bg-card border border-border rounded-[14px] p-3.5 mb-3">
          <div className="font-semibold text-sm mb-2.5">▶️ Continúa donde lo dejaste</div>
          {suggestions.length === 0 ? (
            <p className="text-sm text-foreground-secondary">¡Empieza tu primera lección!</p>
          ) : (
            suggestions.slice(0, 3).map(s => (
              <button key={`${s.lang}-${s.lvl}-${s.idx}`} onClick={() => navigate(`/lesson/${s.lang}/${s.lvl}/${s.idx}`)} className="w-full flex items-center gap-2 p-2 rounded-xl hover:bg-background border border-transparent hover:border-border transition-all text-left mb-1">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${s.lang === 'jp' ? 'bg-jp-light' : 'bg-fr-light'}`}>
                  {s.lang === 'jp' ? '🇯🇵' : '🇫🇷'}
                </div>
                <div>
                  <div className="text-sm font-medium">{s.title}</div>
                  <div className="text-[0.66rem] text-foreground-muted">{s.lang === 'jp' ? 'Japonés' : 'Francés'} · {s.lvl}</div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => navigate('/flashcards')} className="py-3 rounded-xl bg-foreground text-background text-sm font-medium">🃏 Flashcards</button>
          <button onClick={() => navigate('/practice')} className="py-3 rounded-xl border border-border text-foreground-secondary text-sm font-medium">📝 Práctica</button>
        </div>
      </div>
    </div>
  );
}
