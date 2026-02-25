import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { Lang } from '@/data/types';

export default function HomePage() {
  const { state, getRank } = useApp();
  const navigate = useNavigate();
  const totalXp = (state.xp.jp || 0) + (state.xp.fr || 0);
  const jpR = getRank('jp');
  const frR = getRank('fr');
  const hasProgress = totalXp > 0;

  const pickLang = (lang: Lang) => {
    navigate(`/levels/${lang}`);
  };

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="flex flex-col lg:flex-row min-h-full">
        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center px-5 py-8 lg:px-12 lg:py-16 relative">
          <div className="absolute bottom-0 right-0 font-serif-jp text-[100px] font-bold text-jp/[0.04] pointer-events-none animate-float select-none">語</div>

          <p className="text-[0.66rem] font-semibold tracking-[0.14em] uppercase text-foreground-muted mb-5 flex items-center gap-2">
            <span className="w-3.5 h-px bg-foreground-muted" />
            100% gratuito · 48 lecciones · Sin registro
          </p>

          <h1 className="font-serif text-[clamp(1.9rem,6vw,3.6rem)] font-light leading-[1.1] tracking-tight mb-3">
            Aprende<br />
            <em className="italic text-jp">japonés</em><br />
            y <em className="italic text-fr">francés</em>.
          </h1>

          <p className="text-[0.9rem] text-foreground-secondary leading-relaxed max-w-[400px] mb-7">
            12 lecciones por nivel · Quiz desbloqueante · Vocabulario, gramática, lectura y escritura. Empieza ahora.
          </p>

          <div className="flex gap-2.5 flex-wrap">
            <button onClick={() => pickLang('jp')} className="inline-flex items-center gap-1.5 px-7 py-3 rounded-full bg-foreground text-background font-sans text-[0.9rem] font-medium hover:bg-foreground-secondary transition-colors">
              Empezar japonés 🇯🇵
            </button>
            <button onClick={() => pickLang('fr')} className="inline-flex items-center gap-1.5 px-7 py-3 rounded-full border-[1.5px] border-border text-foreground-secondary font-sans text-[0.9rem] font-medium hover:border-foreground hover:text-foreground transition-colors">
              Empezar francés 🇫🇷
            </button>
          </div>

          <div className="flex gap-6 mt-9 pt-7 border-t border-border">
            <div><div className="font-serif text-3xl font-semibold text-jp">48</div><div className="text-[0.68rem] text-foreground-muted">Lecciones</div></div>
            <div><div className="font-serif text-3xl font-semibold text-fr">4</div><div className="text-[0.68rem] text-foreground-muted">Niveles activos</div></div>
            <div><div className="font-serif text-3xl font-semibold">500+</div><div className="text-[0.68rem] text-foreground-muted">Ejercicios</div></div>
            <div><div className="font-serif text-3xl font-semibold text-success">100%</div><div className="text-[0.68rem] text-foreground-muted">Gratis</div></div>
          </div>
        </div>

        {/* Right panel */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 p-4 lg:p-5 lg:w-[300px] lg:border-l border-border lg:justify-center">
          <button onClick={() => pickLang('jp')} className="border-[1.5px] border-border rounded-[20px] p-6 bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:border-jp hover:bg-jp-light cursor-pointer text-left">
            <span className="text-3xl block mb-2">🇯🇵</span>
            <div className="font-serif text-2xl mb-1">Japonés</div>
            <div className="text-[0.7rem] text-foreground-muted mb-2">JLPT · Hiragana · Katakana · Kanji</div>
            <div className="flex gap-1 flex-wrap mb-3">
              {['N5 ✓', 'N4 ✓', 'N3', 'N2', 'N1'].map(l => (
                <span key={l} className="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold border border-jp text-jp bg-jp/[0.07]">{l}</span>
              ))}
            </div>
            <div className="text-[0.78rem] text-foreground-muted flex items-center gap-1 group-hover:gap-3 transition-all">Comenzar →</div>
          </button>

          <button onClick={() => pickLang('fr')} className="border-[1.5px] border-border rounded-[20px] p-6 bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:border-fr hover:bg-fr-light cursor-pointer text-left">
            <span className="text-3xl block mb-2">🇫🇷</span>
            <div className="font-serif text-2xl mb-1">Francés</div>
            <div className="text-[0.7rem] text-foreground-muted mb-2">MCER · DELF / DALF</div>
            <div className="flex gap-1 flex-wrap mb-3">
              {['A1 ✓', 'A2 ✓', 'B1', 'B2', 'C1'].map(l => (
                <span key={l} className="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold border border-fr text-fr bg-fr/[0.07]">{l}</span>
              ))}
            </div>
            <div className="text-[0.78rem] text-foreground-muted">Comenzar →</div>
          </button>
        </div>
      </div>

      {/* Dashboard mini if has progress */}
      {hasProgress && (
        <div className="px-5 pb-8 max-w-xl mx-auto">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button onClick={() => navigate('/ranks')} className="bg-jp-light rounded-[13px] p-3 border border-jp/15 text-left">
              <div className="text-xl">{jpR.icon}</div>
              <div className="font-serif text-sm font-semibold text-jp">{jpR.title}</div>
              <div className="text-[0.68rem] text-foreground-secondary">{state.xp.jp} XP</div>
            </button>
            <button onClick={() => navigate('/ranks')} className="bg-fr-light rounded-[13px] p-3 border border-fr/15 text-left">
              <div className="text-xl">{frR.icon}</div>
              <div className="font-serif text-sm font-semibold text-fr">{frR.title}</div>
              <div className="text-[0.68rem] text-foreground-secondary">{state.xp.fr} XP</div>
            </button>
          </div>
          <div className="flex gap-2 mb-3">
            <div className="flex-1 bg-background rounded-xl p-2.5 text-center border border-border">
              <div className="text-lg">🔥</div>
              <div className="text-lg font-bold">{state.streak.count || 0}</div>
              <div className="text-[0.68rem] text-foreground-secondary">días racha</div>
            </div>
            <div className="flex-1 bg-background rounded-xl p-2.5 text-center border border-border">
              <div className="text-lg">⭐</div>
              <div className="text-lg font-bold">{totalXp}</div>
              <div className="text-[0.68rem] text-foreground-secondary">XP total</div>
            </div>
            <div className="flex-1 bg-background rounded-xl p-2.5 text-center border border-border">
              <div className="text-lg">🃏</div>
              <div className="text-lg font-bold">{state.fcTotal || 0}</div>
              <div className="text-[0.68rem] text-foreground-secondary">flashcards</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <button onClick={() => navigate('/story')} className="border-[1.5px] border-border rounded-xl p-2.5 bg-card text-center hover:border-jp transition-colors">
              <div className="text-xl">📖</div>
              <div className="text-[0.75rem] font-semibold">Historia</div>
            </button>
            <button onClick={() => navigate('/culture')} className="border-[1.5px] border-border rounded-xl p-2.5 bg-card text-center hover:border-jp transition-colors">
              <div className="text-xl">🌍</div>
              <div className="text-[0.75rem] font-semibold">Cultura</div>
            </button>
            <button onClick={() => navigate('/conversation')} className="border-[1.5px] border-border rounded-xl p-2.5 bg-card text-center hover:border-jp transition-colors">
              <div className="text-xl">💬</div>
              <div className="text-[0.75rem] font-semibold">Conversar</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
