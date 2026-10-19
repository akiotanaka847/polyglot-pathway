import { useParams, useNavigate } from 'react-router-dom';
import { ActionBar, ChoiceButton, ExitButton, choiceState } from '@/components/lesson/LessonControls';
import { useApp } from '@/contexts/AppContext';
import { getLevelQuiz, LevelQuizQuestion } from '@/data/levelQuiz';
import { LEVELS } from '@/data/lessons/index';
import { QuizQuestion } from '@/data/types';
import { getLangConfig } from '@/data/languages';
import { translateLessonText, translateOption } from '@/utils/lessonI18n';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useAiTranslate } from '@/hooks/useAiTranslate';
import { normalizeAnswer, shuffleArray, playCorrectSound, playIncorrectSound } from '@/utils/helpers';

export default function QuizPage() {
  const { lang, level } = useParams();
  const navigate = useNavigate();
  const { state, addXP, markQuizPassed, unlockNextLevel, tt } = useApp();
  const l = lang || 'jp';
  const lvl = level || 'N5';
  const config = getLangConfig(l);

  const [questions] = useState<LevelQuizQuestion[]>(() => shuffleArray(getLevelQuiz(l, lvl, state.nativeLang || 'en')).slice(0, 15).map(qq => {
    // Always randomize the answer order
    if (qq.t !== 'mc' || !qq.opts) return qq;
    const order = shuffleArray(qq.opts.map((_, i) => i));
    return { ...qq, opts: order.map(i => qq.opts![i]), ans: order.indexOf(qq.ans as number) };
  }));
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [textInput, setTextInput] = useState('');
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (locked) return; // stop the clock once the answer is checked
    timer.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { handleCheck(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer.current);
  }, [qIdx, locked]);

  const nativeLang = state.nativeLang || 'es';
  // AI translation for question prose/options the offline dictionary misses.
  const aiTexts = useMemo(() => {
    if (nativeLang === 'es') return [];
    const out: string[] = [];
    questions.forEach((qq) => {
      if (qq.ready) return; // already in the learner's language
      out.push(qq.q);
      if (qq.opts) out.push(...qq.opts);
      if (typeof qq.ans === 'string') out.push(qq.ans);
    });
    return [...new Set(out.filter(t => typeof t === 'string' && t.length > 3))];
  }, [questions, nativeLang]);
  const { tr: aiTr } = useAiTranslate(aiTexts, nativeLang);
  const tq = (text: string | undefined) => {
    if (!text) return '';
    if (questions[qIdx]?.ready) return text;
    const ai = aiTr(text);
    return ai && ai !== text ? ai : translateLessonText(text, nativeLang);
  };

  const q = questions[qIdx] as LevelQuizQuestion | undefined;

  const handleCheck = useCallback(() => {
    if (!q) return;
    let correct = false;
    let correctAns = '';
    if (q.t === 'mc') {
      correct = selected === q.ans;
      correctAns = q.opts?.[q.ans as number] || '';
    } else if (q.t === 'tx') {
      const base = q.ans as string;
      // Accept the Spanish base answer, its translation into the learner's
      // native language, and any extra accepted variants.
      const accepted = [
        base,
        translateLessonText(base, state.nativeLang),
        translateOption(base, state.nativeLang),
        aiTr(base),
        ...((q as unknown as { accept?: string[] }).accept || []),
      ].filter(Boolean);
      const given = normalizeAnswer(textInput);
      correct = accepted.some(a => normalizeAnswer(a) === given);
      correctAns = tq(base) || base;
    }
    setFeedback({ correct, answer: correctAns });
    setLocked(true);
    if (correct) { playCorrectSound(); setScore(s => s + 1); } else { playIncorrectSound(); }
  }, [q, selected, textInput, state.nativeLang, aiTr]);

  const advance = () => {
    setFeedback(null); setLocked(false); setSelected(null); setTextInput(''); setTimeLeft(60);
    const next = qIdx + 1;
    if (next >= questions.length) endQuiz();
    else setQIdx(next);
  };

  const endQuiz = () => {
    clearInterval(timer.current);
    const pct = Math.round((score / questions.length) * 100);
    if (pct >= 70) {
      addXP(l, 200);
      markQuizPassed(l, lvl);
      const levels = LEVELS[l] || config.levels;
      const curIdx = levels.indexOf(lvl);
      if (curIdx < levels.length - 1) unlockNextLevel(l, levels[curIdx + 1]);
    }
    setDone(true);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 70;
    const levels = LEVELS[l] || config.levels;
    const nextLvl = levels[levels.indexOf(lvl) + 1];

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="text-5xl mb-4 animate-pop-in">{pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '😓'}</div>
        <h2 className="font-serif text-3xl font-light mb-1">{passed ? tt('quiz_passed') : tt('keep_practicing')}</h2>
        <p className="text-sm text-foreground-secondary mb-5">
          {passed ? `${tt('you_got')} ${pct}% — ${tt('unlocked_next')}` : `${tt('you_got')} ${pct}% — ${tt('need_70')}`}
        </p>
        <div className="grid grid-cols-3 gap-2 w-full max-w-xs mb-5">
          <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="font-serif text-2xl font-semibold">{score}</div><div className="text-[0.64rem] text-foreground-muted">{tt('correct_count')}</div></div>
          <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="font-serif text-2xl font-semibold">{questions.length}</div><div className="text-[0.64rem] text-foreground-muted">{tt('total')}</div></div>
          <div className="bg-card border border-border rounded-xl p-3 text-center"><div className="font-serif text-2xl font-semibold">{pct}%</div><div className="text-[0.64rem] text-foreground-muted">{tt('accuracy')}</div></div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          {passed && nextLvl ? (
            <button onClick={() => navigate(`/levels/${l}`)} className="w-full h-14 rounded-2xl bg-primary text-primary-foreground text-base font-bold shadow-lg active:scale-[0.97] transition-all">🔓 {tt('go_to_level')} {nextLvl}</button>
          ) : !passed ? (
            <button onClick={() => window.location.reload()} className="w-full h-14 rounded-2xl bg-primary text-primary-foreground text-base font-bold shadow-lg active:scale-[0.97] transition-all">🔄 {tt('repeat_quiz')}</button>
          ) : (
            <button onClick={() => navigate(`/levels/${l}`)} className="w-full h-14 rounded-2xl bg-primary text-primary-foreground text-base font-bold shadow-lg active:scale-[0.97] transition-all">🏅 {tt('max_level')}</button>
          )}
          <button onClick={() => navigate(`/levels/${l}`)} className="w-full h-12 rounded-2xl border-2 border-border text-foreground-secondary font-semibold active:scale-[0.97] transition-all">{tt('back_to_map')}</button>
        </div>
      </div>
    );
  }

  if (!q) return null;

  function nextAction() { if (feedback) advance(); else handleCheck(); }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-3 px-4 h-[52px] border-b border-border bg-card shrink-0">
        <ExitButton nativeLang={state.nativeLang || 'en'} question={tt('exit_confirm')} onExit={() => navigate(`/levels/${l}`)} />
        <div className="flex-1 bg-border rounded-full h-1.5 overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(qIdx / questions.length) * 100}%`, background: `linear-gradient(to right, hsl(${config.hue}, 60%, 35%), hsl(${config.hue}, 70%, 46%))` }} />
        </div>
        <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[0.7rem] font-semibold ${timeLeft <= 15 ? 'border-destructive text-destructive animate-pulse-urgent' : 'border-border text-foreground-muted'}`}>
          {timeLeft}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto max-w-[600px] w-full mx-auto px-4 py-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.71rem] font-semibold mb-2"
          style={{ background: `hsl(${config.hue}, 50%, 18%)`, color: `hsl(${config.hue}, 85%, 78%)` }}>
          {config.flag} {tt('final_quiz')} — {lvl}
        </div>
        <div className="text-[0.65rem] font-semibold tracking-widest uppercase text-foreground-muted mb-3">
          {tt('question_of').replace('{0}', String(qIdx + 1)).replace('{1}', String(questions.length))}
        </div>

        <div className="bg-background border border-border rounded-[18px] p-5">
          <div className="text-[0.62rem] font-semibold tracking-widest uppercase text-foreground-muted mb-2">
            {q.t === 'mc' ? `✦ ${tt('multiple_choice')}` : `✦ ${tt('write_response')}`}
          </div>
          <div className="font-serif text-xl mb-4" dangerouslySetInnerHTML={{ __html: tq(q.q) }} />

          {q.t === 'mc' && q.opts && (
            <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2">
              {q.opts.map((opt, i) => (
                <ChoiceButton key={i} label={['A', 'B', 'C', 'D'][i]} hue={config.hue} disabled={locked}
                  state={choiceState(i, selected, q.ans as number, locked, feedback?.correct)}
                  onClick={() => setSelected(i)}>
                  {q.ready ? opt : aiTr(opt) !== opt ? aiTr(opt) : translateOption(opt, state.nativeLang)}
                </ChoiceButton>
              ))}
            </div>
          )}

          {q.t === 'tx' && (
            <input
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && nextAction()}
              disabled={locked}
              placeholder={tt('write_answer')}
              className={`w-full h-14 px-4 border-2 rounded-2xl text-base bg-card outline-none ${locked ? (feedback?.correct ? 'border-success bg-success-light' : 'border-destructive bg-destructive/10') : 'border-border focus:border-foreground-secondary'}`}
            />
          )}

        </div>
      </div>

      <ActionBar
        hue={config.hue}
        onPrimary={nextAction}
        disabled={!feedback && selected === null && textInput.trim() === ''}
        primaryLabel={feedback ? (qIdx < questions.length - 1 ? `${tt('next')} →` : `${tt('see_result')} →`) : `${tt('confirm')} ✓`}
        feedback={feedback ? { correct: feedback.correct, title: feedback.correct ? tt('correct') : tt('incorrect'), detail: feedback.correct ? undefined : <>{tt('answer_was')}: <strong>{feedback.answer}</strong></> } : null}
      />
    </div>
  );
}
