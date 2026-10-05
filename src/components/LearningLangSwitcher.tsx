import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { getLangConfig } from '@/data/languages';
import { cn } from '@/lib/utils';

export default function LearningLangSwitcher({ current, onChange }: { current: string; onChange?: (code: string) => void }) {
  const navigate = useNavigate();
  const { state, setCurrentLearningLang } = useApp();
  const langs = [...new Set([...state.activeLangs, current])].filter(c => c && c !== state.nativeLang);

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
      {langs.map(code => {
        const c = getLangConfig(code);
        const active = code === current;
        return (
          <button
            key={code}
            onClick={() => { if (!active) { setCurrentLearningLang(code); onChange?.(code); } }}
            aria-pressed={active}
            className={cn(
              'flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-all',
              active ? 'border-primary bg-primary text-primary-foreground shadow-md' : 'border-glass-border bg-glass/80 text-foreground hover:-translate-y-0.5',
            )}
          >
            <span>{c.flag}</span>{c.nativeName}
          </button>
        );
      })}
      <button onClick={() => navigate('/')} aria-label="+" className="flex shrink-0 items-center rounded-full border border-dashed border-glass-border px-3 py-1.5 text-foreground-secondary hover:text-foreground">
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
