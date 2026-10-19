import { ReactNode } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

/* Shared, touch-friendly controls for lessons, quizzes and mock exams. */

export type ChoiceState = 'idle' | 'selected' | 'correct' | 'wrong' | 'dim';

export function ChoiceButton({
  label, children, state, hue, disabled, onClick,
}: { label: string; children: ReactNode; state: ChoiceState; hue: number; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={state === 'selected'}
      className={cn(
        'group flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-3.5 py-3 text-left text-[0.95rem] font-medium transition-all duration-200 touch-manipulation',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        state === 'idle' && 'border-border bg-card hover:-translate-y-0.5 hover:border-foreground/30 active:scale-[0.98]',
        state === 'selected' && 'bg-card shadow-lg -translate-y-0.5',
        state === 'correct' && 'border-success bg-success-light text-success',
        state === 'wrong' && 'border-destructive bg-destructive/10 text-destructive animate-shake',
        state === 'dim' && 'border-border bg-card opacity-45',
      )}
      style={state === 'selected' ? { borderColor: `hsl(${hue}, 75%, 60%)`, boxShadow: `0 8px 24px -10px hsl(${hue}, 80%, 55%)` } : undefined}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold"
        style={state === 'correct' || state === 'wrong' ? undefined : { background: `hsl(${hue}, 50%, 20%)`, color: `hsl(${hue}, 85%, 78%)` }}
      >
        {state === 'correct' ? <Check className="h-5 w-5" /> : state === 'wrong' ? <X className="h-5 w-5" /> : label}
      </span>
      <span className="flex-1 leading-snug">{children}</span>
    </button>
  );
}

export function choiceState(i: number, selected: number | null, answer: number, locked: boolean, correct?: boolean): ChoiceState {
  if (locked) {
    if (i === answer) return 'correct';
    if (i === selected && !correct) return 'wrong';
    return 'dim';
  }
  return i === selected ? 'selected' : 'idle';
}

export function ActionBar({
  hue, primaryLabel, onPrimary, disabled, feedback, secondary,
}: {
  hue: number;
  primaryLabel: string;
  onPrimary: () => void;
  disabled?: boolean;
  feedback?: { correct: boolean; title: string; detail?: ReactNode } | null;
  secondary?: { label: string; onClick: () => void } | null;
}) {
  const tone = feedback ? (feedback.correct ? 'success' : 'destructive') : null;
  return (
    <div
      className={cn(
        'sticky bottom-0 z-10 shrink-0 border-t backdrop-blur-xl transition-colors duration-300',
        tone === 'success' ? 'border-success/40 bg-success-light/95' : tone === 'destructive' ? 'border-destructive/40 bg-destructive/15' : 'border-border bg-card/95',
      )}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto w-full max-w-[600px] px-4 pb-3 pt-3">
        {feedback && (
          <div role="status" className={cn('mb-3 flex items-start gap-3 animate-scale-in', tone === 'success' ? 'text-success' : 'text-destructive')}>
            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full', tone === 'success' ? 'bg-success/20' : 'bg-destructive/20')}>
              {feedback.correct ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
            </span>
            <div className="min-w-0 flex-1 text-sm">
              <strong className="block text-base">{feedback.title}</strong>
              {feedback.detail && <div className="break-words opacity-90">{feedback.detail}</div>}
            </div>
          </div>
        )}
        <div className="flex gap-2">
          {secondary && (
            <button
              type="button"
              onClick={secondary.onClick}
              className="h-14 shrink-0 rounded-2xl border-2 border-border bg-card px-5 text-sm font-semibold text-foreground-secondary transition-all hover:text-foreground active:scale-[0.97] touch-manipulation"
            >
              {secondary.label}
            </button>
          )}
          <button
            type="button"
            onClick={onPrimary}
            disabled={disabled}
            className={cn(
              'h-14 flex-1 rounded-2xl text-base font-bold shadow-lg transition-all touch-manipulation active:scale-[0.97]',
              'disabled:cursor-not-allowed disabled:bg-muted disabled:text-foreground-muted disabled:shadow-none',
              tone === 'success' && 'bg-success text-primary-foreground',
              tone === 'destructive' && 'bg-destructive text-destructive-foreground',
              !tone && 'text-primary-foreground hover:-translate-y-0.5',
            )}
            style={!tone && !disabled ? { background: `linear-gradient(135deg, hsl(${hue}, 75%, 58%), hsl(${(hue + 40) % 360}, 80%, 62%))` } : undefined}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

const EXIT_LABELS: Record<string, { stay: string; leave: string }> = {
  es: { stay: 'Seguir aprendiendo', leave: 'Salir' },
  en: { stay: 'Keep learning', leave: 'Exit' },
  fr: { stay: 'Continuer', leave: 'Quitter' },
  pt: { stay: 'Continuar aprendendo', leave: 'Sair' },
  jp: { stay: '続ける', leave: '終了する' },
  zh: { stay: '继续学习', leave: '退出' },
  ko: { stay: '계속 배우기', leave: '나가기' },
  ru: { stay: 'Продолжить', leave: 'Выйти' },
  ar: { stay: 'متابعة التعلم', leave: 'خروج' },
  hi: { stay: 'सीखना जारी रखें', leave: 'बाहर निकलें' },
  ro: { stay: 'Continuă', leave: 'Ieși' },
};

export function ExitButton({ nativeLang, question, onExit }: { nativeLang: string; question: string; onExit: () => void }) {
  const lbl = EXIT_LABELS[nativeLang] || EXIT_LABELS.en;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          aria-label={lbl.leave}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground-secondary transition-all hover:text-foreground active:scale-95 touch-manipulation"
        >
          <X className="h-5 w-5" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[340px] rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">{question}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col gap-2 sm:flex-col sm:space-x-0">
          <AlertDialogCancel className="m-0 h-12 w-full rounded-2xl border-0 bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90">{lbl.stay}</AlertDialogCancel>
          <AlertDialogAction onClick={onExit} className="m-0 h-12 w-full rounded-2xl border-2 border-destructive/50 bg-transparent text-base font-semibold text-destructive hover:bg-destructive/10">{lbl.leave}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
