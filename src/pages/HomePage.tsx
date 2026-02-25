import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, getLangConfig, t } from '@/data/languages';

export default function HomePage() {
  const { state, getRank, setNativeLang, addActiveLang, tt } = useApp();
  const navigate = useNavigate();
  const totalXp = Object.values(state.xp).reduce((a, b) => a + b, 0);
  const hasProgress = totalXp > 0;
  const activeLangs = state.activeLangs || [];

  // If no native language set, show language picker
  if (!state.nativeLang) {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto p-6 flex flex-col items-center justify-center min-h-[70vh]">
          <div className="text-5xl mb-4">🌍</div>
          <h1 className="font-serif text-3xl font-light mb-2 text-center">
            {tt('native_lang_question')}
          </h1>
          <p className="text-sm text-foreground-secondary mb-6 text-center">
            What is your native language? · Quelle est votre langue maternelle?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => setNativeLang(lang.code)}
                className="border-[1.5px] border-border rounded-[14px] p-3 bg-card text-left hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <span className="text-2xl block mb-1">{lang.flag}</span>
                <div className="text-sm font-semibold">{lang.nativeName}</div>
                <div className="text-[0.68rem] text-foreground-muted">{lang.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Target language selection
  const availableLangs = LANGUAGES.filter(l => l.code !== state.nativeLang);
  const nativeConfig = getLangConfig(state.nativeLang);

  const pickLang = (code: string) => {
    addActiveLang(code);
    navigate(`/levels/${code}`);
  };

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="flex flex-col lg:flex-row min-h-full">
        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center px-5 py-8 lg:px-12 lg:py-16 relative">
          <p className="text-[0.66rem] font-semibold tracking-[0.14em] uppercase text-foreground-muted mb-5 flex items-center gap-2">
            <span className="w-3.5 h-px bg-foreground-muted" />
            {tt('free')} · 17 {tt('lessons')} · {tt('no_signup')}
          </p>

          <h1 className="font-serif text-[clamp(1.9rem,6vw,3.2rem)] font-light leading-[1.1] tracking-tight mb-3">
            {tt('learn')}<br />
            <span className="text-foreground-secondary">{availableLangs.length}+ {tt('more_langs')}</span>
          </h1>

          <p className="text-[0.9rem] text-foreground-secondary leading-relaxed max-w-[400px] mb-5">
            {nativeConfig.flag} {tt('learning_path')} · {tt('complete_lessons')} {tt('unlock_quiz')}
          </p>

          <button
            onClick={() => setNativeLang('')}
            className="text-[0.72rem] text-foreground-muted hover:text-foreground mb-5 self-start"
          >
            {nativeConfig.flag} {nativeConfig.nativeName} — {tt('change_native')}
          </button>

          {/* Active languages quick access */}
          {activeLangs.length > 0 && (
            <div className="mb-5">
              <div className="text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted mb-2">
                {tt('your_languages')}
              </div>
              <div className="flex gap-2 flex-wrap">
                {activeLangs.map(code => {
                  const lc = getLangConfig(code);
                  const r = getRank(code);
                  return (
                    <button
                      key={code}
                      onClick={() => navigate(`/levels/${code}`)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full border-[1.5px] border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <span>{lc.flag}</span>
                      <span className="text-sm font-medium">{lc.nativeName}</span>
                      <span className="text-[0.68rem] text-foreground-muted">{r.icon} {state.xp[code] || 0} XP</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats */}
          {hasProgress && (
            <div className="flex gap-6 mt-2 pt-5 border-t border-border">
              <div><div className="font-serif text-2xl font-semibold">{totalXp}</div><div className="text-[0.68rem] text-foreground-muted">XP</div></div>
              <div><div className="font-serif text-2xl font-semibold">{state.streak.count || 0}</div><div className="text-[0.68rem] text-foreground-muted">🔥 {tt('streak')}</div></div>
              <div><div className="font-serif text-2xl font-semibold">{activeLangs.length}</div><div className="text-[0.68rem] text-foreground-muted">{tt('lessons')}</div></div>
            </div>
          )}
        </div>

        {/* Language grid */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 p-4 lg:p-5 lg:w-[320px] lg:border-l border-border overflow-y-auto lg:max-h-[calc(100dvh-54px)]">
          <div className="col-span-2 lg:col-span-1 text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted mb-1">
            {tt('choose_to_learn')}
          </div>
          {availableLangs.map(lang => {
            const isActive = activeLangs.includes(lang.code);
            const xp = state.xp[lang.code] || 0;
            return (
              <button
                key={lang.code}
                onClick={() => pickLang(lang.code)}
                className={`border-[1.5px] rounded-[16px] p-4 bg-card transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left ${isActive ? 'border-foreground/30' : 'border-border'}`}
                style={isActive ? { borderColor: `hsl(${lang.hue}, 60%, 50%)`, background: `hsl(${lang.hue}, 80%, 97%)` } : undefined}
              >
                <span className="text-2xl block mb-1">{lang.flag}</span>
                <div className="font-serif text-lg mb-0.5">{lang.nativeName}</div>
                <div className="text-[0.68rem] text-foreground-muted mb-1">{lang.levelSystem} · {lang.levels.length} {tt('lessons')}</div>
                {xp > 0 && (
                  <div className="text-[0.65rem] font-bold" style={{ color: `hsl(${lang.hue}, 60%, 45%)` }}>
                    ⚡ {xp} XP
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick links when has progress */}
      {hasProgress && (
        <div className="px-5 pb-8 max-w-xl mx-auto">
          <div className="grid grid-cols-3 gap-1.5 mt-3">
            <button onClick={() => navigate('/story')} className="border-[1.5px] border-border rounded-xl p-2.5 bg-card text-center hover:shadow-sm transition-all">
              <div className="text-xl">📖</div>
              <div className="text-[0.72rem] font-semibold">{tt('story_mode')}</div>
            </button>
            <button onClick={() => navigate('/culture')} className="border-[1.5px] border-border rounded-xl p-2.5 bg-card text-center hover:shadow-sm transition-all">
              <div className="text-xl">🌍</div>
              <div className="text-[0.72rem] font-semibold">{tt('culture')}</div>
            </button>
            <button onClick={() => navigate('/reference')} className="border-[1.5px] border-border rounded-xl p-2.5 bg-card text-center hover:shadow-sm transition-all">
              <div className="text-xl">📚</div>
              <div className="text-[0.72rem] font-semibold">{tt('reference')}</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
