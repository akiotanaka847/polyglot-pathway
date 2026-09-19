import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { QUIZ_DATA } from '@/data/quizzes';
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

  const [questions] = useState(() => shuffleArray(QUIZ_DATA[l]?.[lvl] || []).slice(0, 15));
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
    if (nativeLang === 'es' || nativeLang === 'en') return [];
    const out: string[] = [];
    questions.forEach((qq: QuizQuestion) => {
      out.push(qq.q);
      if (qq.opts) out.push(...qq.opts);
      if (typeof qq.ans === 'string') out.push(qq.ans);
    });
    return [...new Set(out.filter(t => typeof t === 'string' && t.length > 3))];
  }, [questions, nativeLang]);
  const { tr: aiTr } = useAiTranslate(aiTexts, nativeLang);
  const tq = (text: string | undefined) => {
    if (!text) return '';
    const ai = aiTr(text);
    return ai && ai !== text ? ai : translateLessonText(text, nativeLang);
  };

  const q = questions[qIdx] as QuizQuestion | undefined;

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
            <button onClick={() => navigate(`/levels/${l}`)} className="w-full py-3 rounded-full bg-foreground text-background font-medium">🔓 {tt('go_to_level')} {nextLvl}</button>
          ) : !passed ? (
            <button onClick={() => window.location.reload()} className="w-full py-3 rounded-full bg-foreground text-background font-medium">🔄 {tt('repeat_quiz')}</button>
          ) : (
            <button onClick={() => navigate(`/levels/${l}`)} className="w-full py-3 rounded-full bg-foreground text-background font-medium">🏅 {tt('max_level')}</button>
          )}
          <button onClick={() => navigate(`/levels/${l}`)} className="w-full py-3 rounded-full border border-border text-foreground-secondary font-medium">{tt('back_to_map')}</button>
        </div>
      </div>
    );
  }

  if (!q) return null;

  function nextAction() { if (feedback) advance(); else handleCheck(); }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-3 px-4 h-[52px] border-b border-border bg-card shrink-0">
        <button onClick={() => navigate(`/levels/${l}`)} className="px-3 py-1 rounded-full border border-border text-sm">✕</button>
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
            <div className="grid gap-2 grid-cols-2">
              {q.opts.map((opt, i) => {
                const labels = ['A', 'B', 'C', 'D'];
                let cls = 'bg-card border-border hover:border-foreground-secondary';
                if (locked) {
                  if (i === q.ans) cls = 'bg-success-light border-success text-success';
                  else if (i === selected && !feedback?.correct) cls = 'bg-destructive/10 border-destructive text-destructive';
                } else if (i === selected) cls = 'bg-background border-foreground/40';
                return (
                  <button key={i} disabled={locked} onClick={() => setSelected(i)} className={`flex items-center gap-2 p-2.5 border-[1.5px] rounded-xl text-sm text-left transition-all ${cls}`}>
                    <span className="w-5 h-5 rounded-md bg-foreground/[0.06] flex items-center justify-center text-[0.63rem] font-bold">{labels[i]}</span>
                    {aiTr(opt) !== opt ? aiTr(opt) : translateOption(opt, state.nativeLang)}
                  </button>
                );
              })}
            </div>
          )}

          {q.t === 'tx' && (
            <input
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && nextAction()}
              disabled={locked}
              placeholder={tt('write_answer')}
              className={`w-full p-3 border-[1.5px] rounded-xl text-sm bg-card outline-none ${locked ? (feedback?.correct ? 'border-success bg-success-light' : 'border-destructive bg-destructive/10') : 'border-border focus:border-foreground-secondary'}`}
            />
          )}

          {feedback && (
            <div className={`p-3 rounded-xl text-sm mt-3 animate-fade-in ${feedback.correct ? 'bg-success-light text-success' : 'bg-destructive/10 text-destructive'}`}>
              <strong>{feedback.correct ? `✅ ${tt('correct')}` : `❌ ${tt('incorrect')}`}</strong>
              {!feedback.correct && <span> — {tt('answer_was')}: <em>{feedback.answer}</em></span>}
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border px-5 py-3 flex justify-end">
        <button onClick={nextAction} disabled={!feedback && selected === null && textInput.trim() === ''} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium disabled:opacity-40">
          {feedback ? (qIdx < questions.length - 1 ? `${tt('next')} →` : `${tt('see_result')} →`) : `${tt('confirm')} →`}
        </button>
      </div>
    </div>
  );
}
