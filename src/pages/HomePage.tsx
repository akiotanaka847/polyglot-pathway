import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, getLangConfig } from '@/data/languages';

export default function HomePage() {
  const { state, getRank, setNativeLang, addActiveLang, tt } = useApp();
  const navigate = useNavigate();
  const totalXp = Object.values(state.xp).reduce((a, b) => a + b, 0);
  const hasProgress = totalXp > 0;
  const activeLangs = [...new Set(state.activeLangs || [])].filter(c => c && c !== state.nativeLang);

  // Native language picker
  if (!state.nativeLang) {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto p-6 flex flex-col items-center justify-center min-h-[70vh]">
          <div className="text-7xl mb-4 animate-bounce-in">💬</div>
          <h1 className="font-display text-4xl font-bold mb-2 text-center bg-gradient-to-r from-[hsl(263,70%,50%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">
            {tt('native_lang_question')}
          </h1>
          <p className="text-sm text-foreground-secondary mb-8 text-center">{tt('select_language')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {LANGUAGES.map(lang => (
              <button key={lang.code} onClick={() => setNativeLang(lang.code)}
                className="border-2 border-border rounded-2xl p-4 bg-card text-left hover:-translate-y-1.5 hover:shadow-xl transition-all group hover:border-[hsl(263,70%,70%)]">
                <span className="text-4xl block mb-2 group-hover:animate-wiggle transition-transform">{lang.flag}</span>
                <div className="text-sm font-bold">{lang.nativeName}</div>
                <div className="text-[0.68rem] text-foreground-muted">{lang.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const availableLangs = LANGUAGES.filter(l => l.code !== state.nativeLang);
  const nativeConfig = getLangConfig(state.nativeLang);

  const pickLang = (code: string) => {
    addActiveLang(code);
    navigate(`/levels/${code}`);
  };

  // Neon night palette for cards
  const cardColors = [
    { bg: 'hsl(258, 60%, 20%)', border: 'hsl(258, 90%, 76%)', accent: 'hsl(258, 90%, 76%)' },
    { bg: 'hsl(187, 60%, 16%)', border: 'hsl(187, 85%, 53%)', accent: 'hsl(187, 85%, 53%)' },
    { bg: 'hsl(330, 50%, 20%)', border: 'hsl(330, 85%, 70%)', accent: 'hsl(330, 85%, 70%)' },
    { bg: 'hsl(165, 50%, 16%)', border: 'hsl(165, 80%, 55%)', accent: 'hsl(165, 80%, 55%)' },
    { bg: 'hsl(226, 45%, 20%)', border: 'hsl(226, 60%, 60%)', accent: 'hsl(226, 70%, 70%)' },
    { bg: 'hsl(45, 45%, 18%)', border: 'hsl(45, 93%, 62%)', accent: 'hsl(45, 93%, 62%)' },
  ];

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[800px] mx-auto">
        {/* Hero */}
        <div className="px-5 py-8 lg:px-8 lg:py-12">
          <div className="flex items-center gap-2 mb-5">
            <button onClick={() => setNativeLang('')}
              className="text-xs text-foreground-muted hover:text-foreground px-3 py-1.5 rounded-full border-2 border-border hover:border-[hsl(263,70%,70%)] hover:bg-card transition-all font-semibold">
              {nativeConfig.flag} {nativeConfig.nativeName} ▾
            </button>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-bold leading-[1.05] tracking-tight mb-3">
            <span className="bg-gradient-to-r from-[hsl(263,70%,50%)] via-[hsl(217,91%,60%)] to-[hsl(152,69%,46%)] bg-clip-text text-transparent">
              {tt('learn')}
            </span>
            <br />
            <span className="text-foreground-secondary">{availableLangs.length}+ {tt('more_langs')}</span>
          </h1>

          <p className="text-foreground-secondary leading-relaxed max-w-[420px] mb-6 text-[0.95rem]">
            {tt('complete_lessons')} {tt('unlock_quiz')}
          </p>

          {/* Active languages */}
          {activeLangs.length > 0 && (
            <div className="mb-6">
              <div className="text-[0.7rem] font-bold tracking-widest uppercase text-foreground-muted mb-2.5">{tt('your_languages')}</div>
              <div className="flex gap-2.5 flex-wrap">
                {activeLangs.map(code => {
                  const lc = getLangConfig(code);
                  const r = getRank(code);
                  return (
                    <button key={code} onClick={() => navigate(`/levels/${code}`)}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all"
                      style={{ borderColor: `hsl(${lc.hue}, 70%, 55%)`, background: `hsl(${lc.hue}, 45%, 18%)` }}>
                      <span className="text-xl">{lc.flag}</span>
                      <span className="text-sm font-bold">{lc.nativeName}</span>
                      <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full" style={{ background: `hsl(${lc.hue}, 60%, 28%)`, color: `hsl(${lc.hue}, 85%, 80%)` }}>
                        {r.icon} {state.xp[code] || 0}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats bar */}
          {hasProgress && (
            <div className="flex gap-4 pt-5 border-t-2 border-border">
              {[
                { val: totalXp, icon: '⚡', label: 'XP', color: 'hsl(45, 93%, 47%)' },
                { val: state.streak.count || 0, icon: '🔥', label: tt('streak'), color: 'hsl(25, 95%, 53%)' },
                { val: activeLangs.length, icon: '🌍', label: tt('lessons'), color: 'hsl(152, 69%, 46%)' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-card border-2 border-border shadow-sm">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <div className="font-display text-2xl font-bold" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-[0.6rem] text-foreground-muted font-bold">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Language grid */}
        <div className="px-5 pb-6 lg:px-8">
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-foreground-muted mb-3">
            {tt('choose_to_learn')}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {availableLangs.map((lang, i) => {
              const isActive = activeLangs.includes(lang.code);
              const xp = state.xp[lang.code] || 0;
              const colors = cardColors[i % cardColors.length];
              return (
                <button key={lang.code} onClick={() => pickLang(lang.code)}
                  className="border-2 rounded-2xl p-4 transition-all hover:-translate-y-1.5 hover:shadow-xl cursor-pointer text-left group"
                  style={{
                    borderColor: isActive ? colors.accent : 'hsl(var(--border))',
                    background: isActive ? colors.bg : 'hsl(var(--card))',
                    boxShadow: isActive ? `0 0 24px ${colors.accent}55` : undefined,
                  }}>
                  <span className="text-4xl block mb-2 group-hover:animate-wiggle">{lang.flag}</span>
                  <div className="font-display text-lg font-bold">{lang.nativeName}</div>
                  <div className="text-[0.68rem] text-foreground-muted mb-1.5 font-semibold">{lang.levelSystem} · {lang.levels.length} {tt('lessons')}</div>
                  {xp > 0 && (
                    <div className="mt-1.5">
                      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, xp / 10)}%`, background: `hsl(${lang.hue}, 70%, 46%)` }} />
                      </div>
                      <div className="text-[0.62rem] font-bold mt-1" style={{ color: `hsl(${lang.hue}, 85%, 75%)` }}>⚡ {xp} XP</div>
                    </div>
                  )}
                  {!xp && (
                    <div className="mt-1.5 text-[0.62rem] font-bold text-foreground-muted px-2 py-1 rounded-full bg-muted inline-block">
                      {tt('start')} →
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        {hasProgress && (
          <div className="px-5 pb-8 lg:px-8">
            <button onClick={() => navigate('/conversation')}
              className="w-full mb-3 border-2 rounded-3xl p-4 flex items-center gap-4 text-left hover:shadow-xl hover:-translate-y-1 transition-all"
              style={{ borderColor: 'hsl(var(--neon-violet))', background: 'linear-gradient(135deg, hsl(258, 55%, 22%), hsl(330, 50%, 22%))', boxShadow: '0 0 30px hsl(var(--neon-violet) / 0.35)' }}>
              <span className="text-4xl">🎙️</span>
              <div>
                <div className="font-display text-lg font-bold">{tt('conversation')}</div>
                <div className="text-[0.7rem] text-foreground-muted font-semibold">🗣️ 🧠 · {tt('practice')}</div>
              </div>
              <span className="ml-auto text-2xl">→</span>
            </button>
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { icon: '🗣️', label: tt('tap_to_speak').split(' ').slice(-1)[0], path: '/speaking', color: 'hsl(187, 60%, 18%)' },
                { icon: '🌍', label: tt('culture'), path: '/culture', color: 'hsl(165, 50%, 16%)' },
                { icon: '📝', label: tt('simulation'), path: '/exams', color: 'hsl(45, 45%, 18%)' },
                { icon: '📚', label: tt('reference'), path: '/reference', color: 'hsl(330, 50%, 20%)' },
              ].map(item => (
                <button key={item.path} onClick={() => navigate(item.path)}
                  className="border-2 border-border rounded-2xl p-3.5 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                  style={{ background: item.color }}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-[0.68rem] font-bold">{item.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}