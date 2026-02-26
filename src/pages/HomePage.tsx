import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, getLangConfig } from '@/data/languages';

export default function HomePage() {
  const { state, getRank, setNativeLang, addActiveLang, tt } = useApp();
  const navigate = useNavigate();
  const totalXp = Object.values(state.xp).reduce((a, b) => a + b, 0);
  const hasProgress = totalXp > 0;
  const activeLangs = [...new Set(state.activeLangs || [])];

  // Native language picker
  if (!state.nativeLang) {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto p-6 flex flex-col items-center justify-center min-h-[70vh]">
          <div className="text-6xl mb-5 animate-pop-in">🌍</div>
          <h1 className="font-serif text-3xl font-light mb-2 text-center">{tt('native_lang_question')}</h1>
          <p className="text-sm text-foreground-secondary mb-6 text-center">What is your native language? · Quelle est votre langue maternelle?</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full">
            {LANGUAGES.map(lang => (
              <button key={lang.code} onClick={() => setNativeLang(lang.code)}
                className="border-2 border-border rounded-2xl p-3.5 bg-card text-left hover:-translate-y-1 hover:shadow-lg transition-all group">
                <span className="text-3xl block mb-1.5 group-hover:scale-110 transition-transform">{lang.flag}</span>
                <div className="text-sm font-bold">{lang.nativeName}</div>
                <div className="text-[0.68rem] text-foreground-muted">{lang.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Only show languages not yet active (exclude native + already active)
  const availableLangs = LANGUAGES.filter(l => l.code !== state.nativeLang);
  const nativeConfig = getLangConfig(state.nativeLang);

  const pickLang = (code: string) => {
    addActiveLang(code);
    navigate(`/levels/${code}`);
  };

  // Find "continue learning" - most recent active language with most XP
  const continueLang = [...activeLangs].sort((a, b) => (state.xp[b] || 0) - (state.xp[a] || 0))[0] || null;
  const continueConfig = continueLang ? getLangConfig(continueLang) : null;

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[800px] mx-auto">
        {/* Hero */}
        <div className="px-5 py-8 lg:px-8 lg:py-12">
          <div className="flex items-center gap-2 mb-6">
            <button onClick={() => setNativeLang('')}
              className="text-xs text-foreground-muted hover:text-foreground px-3 py-1.5 rounded-full border border-border hover:bg-card transition-all">
              {nativeConfig.flag} {nativeConfig.nativeName} ▾
            </button>
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light leading-[1.08] tracking-tight mb-3">
            {tt('learn')}<br />
            <span className="text-foreground-secondary">{availableLangs.length}+ {tt('more_langs')}</span>
          </h1>

          <p className="text-foreground-secondary leading-relaxed max-w-[420px] mb-6">
            {tt('complete_lessons')} {tt('unlock_quiz')}
          </p>

          {/* Continue learning card */}
          {continueLang && continueConfig && (
            <button onClick={() => navigate(`/levels/${continueLang}`)}
              className="w-full max-w-md flex items-center gap-4 p-4 rounded-2xl border-2 bg-card mb-6 text-left hover:shadow-lg hover:-translate-y-0.5 transition-all"
              style={{ borderColor: `hsl(${continueConfig.hue}, 60%, 70%)` }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-sm"
                style={{ background: `hsl(${continueConfig.hue}, 80%, 96%)` }}>
                {continueConfig.flag}
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-0.5">{tt('continue')}</div>
                <div className="font-semibold">{continueConfig.nativeName}</div>
                <div className="text-xs text-foreground-muted">⚡ {state.xp[continueLang] || 0} XP · {getRank(continueLang).icon}</div>
              </div>
              <span className="text-2xl">→</span>
            </button>
          )}

          {/* Active languages */}
          {activeLangs.length > 1 && (
            <div className="mb-6">
              <div className="text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted mb-2">{tt('your_languages')}</div>
              <div className="flex gap-2 flex-wrap">
                {activeLangs.filter(c => c !== continueLang).map(code => {
                  const lc = getLangConfig(code);
                  const r = getRank(code);
                  return (
                    <button key={code} onClick={() => navigate(`/levels/${code}`)}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <span className="text-lg">{lc.flag}</span>
                      <span className="text-sm font-medium">{lc.nativeName}</span>
                      <span className="text-[0.65rem] text-foreground-muted">{r.icon} {state.xp[code] || 0}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats bar */}
          {hasProgress && (
            <div className="flex gap-6 pt-5 border-t border-border">
              <div>
                <div className="font-serif text-3xl font-bold">{totalXp}</div>
                <div className="text-[0.65rem] text-foreground-muted font-semibold">⚡ XP</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold">{state.streak.count || 0}</div>
                <div className="text-[0.65rem] text-foreground-muted font-semibold">🔥 {tt('streak')}</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold">{activeLangs.length}</div>
                <div className="text-[0.65rem] text-foreground-muted font-semibold">🌍 {tt('lessons')}</div>
              </div>
            </div>
          )}
        </div>

        {/* Language grid */}
        <div className="px-5 pb-8 lg:px-8">
          <div className="text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted mb-3">
            {tt('choose_to_learn')}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {availableLangs.map(lang => {
              const isActive = activeLangs.includes(lang.code);
              const xp = state.xp[lang.code] || 0;
              return (
                <button key={lang.code} onClick={() => pickLang(lang.code)}
                  className={`border-2 rounded-2xl p-4 bg-card transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left group ${
                    isActive ? 'border-foreground/20' : 'border-border'
                  }`}
                  style={isActive ? { borderColor: `hsl(${lang.hue}, 60%, 60%)`, background: `hsl(${lang.hue}, 80%, 98%)` } : undefined}>
                  <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{lang.flag}</span>
                  <div className="font-serif text-lg font-semibold">{lang.nativeName}</div>
                  <div className="text-[0.68rem] text-foreground-muted mb-1">{lang.levelSystem} · {lang.levels.length} {tt('lessons')}</div>
                  {xp > 0 && (
                    <div className="mt-1">
                      <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${Math.min(100, xp / 10)}%`, background: `hsl(${lang.hue}, 70%, 46%)` }} />
                      </div>
                      <div className="text-[0.6rem] font-bold mt-0.5" style={{ color: `hsl(${lang.hue}, 60%, 45%)` }}>⚡ {xp} XP</div>
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
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: '📖', label: tt('story_mode'), path: '/story' },
                { icon: '🌍', label: tt('culture'), path: '/culture' },
                { icon: '📝', label: tt('simulation'), path: '/exams' },
                { icon: '📚', label: tt('reference'), path: '/reference' },
              ].map(item => (
                <button key={item.path} onClick={() => navigate(item.path)}
                  className="border border-border rounded-xl p-3 bg-card text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-[0.68rem] font-semibold">{item.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
