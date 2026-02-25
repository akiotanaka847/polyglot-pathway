import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LESSON_DATA } from '@/data/lessons/index';
import { LessonStep } from '@/data/types';
import { getLangConfig } from '@/data/languages';
import { useState, useCallback, useRef, useMemo } from 'react';
import { normalizeAnswer, shuffleArray, speakText, playCorrectSound, playIncorrectSound } from '@/utils/helpers';

// Cultural watermark background
function CulturalWatermark({ emojis, hue }: { emojis: string[]; hue: number }) {
  const positions = useMemo(() => {
    const pts: { emoji: string; x: number; y: number; rot: number; size: number; delay: number }[] = [];
    for (let i = 0; i < 8; i++) {
      pts.push({
        emoji: emojis[i % emojis.length],
        x: 5 + (i % 4) * 25 + (Math.random() * 10 - 5),
        y: 5 + Math.floor(i / 4) * 45 + (Math.random() * 15 - 7),
        rot: Math.random() * 40 - 20,
        size: 60 + Math.random() * 40,
        delay: i * 1.2,
      });
    }
    return pts;
  }, [emojis]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {positions.map((p, i) => (
        <span
          key={i}
          className="absolute animate-float select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            transform: `rotate(${p.rot}deg)`,
            opacity: 0.045,
            animationDelay: `${p.delay}s`,
            animationDuration: `${8 + i * 0.7}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}

export default function LessonPage() {
  const { lang, level, index } = useParams();
  const navigate = useNavigate();
  const { addXP, markLessonDone, checkStreak, earnAchievement, tt } = useApp();

  const l = lang || 'jp';
  const lvl = level || 'N5';
  const idx = parseInt(index || '0');
  const config = getLangConfig(l);
  const lessons = LESSON_DATA[l]?.[lvl] || [];
  const lesson = lessons[idx];
  const culturalEmojis = config.culturalEmojis || [];

  const [stepIdx, setStepIdx] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [textInput, setTextInput] = useState('');
  const [orderPlaced, setOrderPlaced] = useState<number[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ correct: boolean; answer: string } | null>(null);
  const [locked, setLocked] = useState(false);
  const [accuracy, setAccuracy] = useState<boolean[]>([]);
  const startTime = useRef(Date.now());
  const [completed, setCompleted] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);

  const initOrderWords = useCallback((step: LessonStep) => {
    if (step.t === 'or') {
      setShuffledWords(shuffleArray([...step.words]));
      setOrderPlaced([]);
    }
  }, []);

  if (!lesson) {
    return <div className="flex-1 flex items-center justify-center"><p>{tt('coming_soon')}</p></div>;
  }

  const steps = lesson.steps;
  const step = steps[stepIdx] as LessonStep | undefined;
  const progress = stepIdx / steps.length * 100;

  const handleCheck = () => {
    if (!step) return;
    if (step.t === 'th') { advance(true); return; }
    let correct = false;
    let correctAns = '';
    if (step.t === 'mc' || step.t === 'rd') {
      correct = selectedChoice === step.ans;
      correctAns = step.opts[step.ans];
    } else if (step.t === 'tx') {
      correct = normalizeAnswer(textInput) === normalizeAnswer(step.ans);
      correctAns = step.ans;
    } else if (step.t === 'or') {
      const expected = step.ans.map(i => step.words[i]);
      const got = orderPlaced.map(i => shuffledWords[i]);
      correct = JSON.stringify(got) === JSON.stringify(expected);
      correctAns = expected.join(' ');
    }
    setFeedback({ correct, answer: correctAns });
    setLocked(true);
    setAccuracy(prev => [...prev, correct]);
    if (correct) { playCorrectSound(); } else { playIncorrectSound(); setHearts(h => Math.max(0, h - 1)); }
  };

  const advance = (isTheory = false) => {
    if (!isTheory) setAccuracy(prev => [...prev, true]);
    setFeedback(null); setLocked(false); setSelectedChoice(null); setTextInput(''); setOrderPlaced([]);
    const next = stepIdx + 1;
    if (next >= steps.length) { completeLesson(); }
    else { setStepIdx(next); const ns = steps[next]; if (ns?.t === 'or') initOrderWords(ns); }
  };

  const completeLesson = () => {
    const acc = accuracy.length ? Math.round(accuracy.filter(Boolean).length / accuracy.length * 100) : 100;
    const xp = Math.round(80 * (acc / 100) + hearts * 10);
    addXP(l, xp); markLessonDone(l, lvl, lesson.id); checkStreak(); earnAchievement('first_lesson');
    setXpEarned(xp); setCompleted(true);
  };

  const nextAction = () => { if (feedback) advance(); else handleCheck(); };
  const canCheck = step?.t === 'th' || selectedChoice !== null || textInput.trim().length > 0 || orderPlaced.length > 0;

  if (step?.t === 'or' && shuffledWords.length === 0) initOrderWords(step);

  if (completed) {
    const acc = accuracy.length ? Math.round(accuracy.filter(Boolean).length / accuracy.length * 100) : 100;
    const secs = Math.round((Date.now() - startTime.current) / 1000);
    const nextIdx = idx + 1;
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in relative">
        {culturalEmojis.length > 0 && <CulturalWatermark emojis={culturalEmojis} hue={config.hue} />}
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 animate-pop-in relative z-10" style={{ background: `hsl(${config.hue}, 80%, 96%)` }}>
          {acc >= 90 ? '⭐' : acc >= 70 ? '🏆' : '🎯'}
        </div>
        <h2 className="font-serif text-3xl font-light mb-1 relative z-10">{acc >= 90 ? tt('perfect') : tt('lesson_complete')}</h2>
        <p className="text-sm text-foreground-secondary mb-4 relative z-10">{acc >= 70 ? tt('excellent') : tt('keep_practicing')}</p>
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gold text-card rounded-full font-semibold text-sm mb-5 animate-pop-in relative z-10">⚡ +{xpEarned} XP</div>
        <div className="grid grid-cols-3 gap-2 w-full max-w-xs mb-5 relative z-10">
          <div className="bg-card border border-border rounded-[13px] p-3 text-center"><div className="font-serif text-2xl font-semibold">{acc}%</div><div className="text-[0.64rem] text-foreground-muted">{tt('accuracy')}</div></div>
          <div className="bg-card border border-border rounded-[13px] p-3 text-center"><div className="font-serif text-2xl font-semibold">{secs}s</div><div className="text-[0.64rem] text-foreground-muted">{tt('time')}</div></div>
          <div className="bg-card border border-border rounded-[13px] p-3 text-center"><div className="font-serif text-2xl font-semibold text-gold">+{xpEarned}</div><div className="text-[0.64rem] text-foreground-muted">XP</div></div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xs relative z-10">
          {nextIdx < lessons.length ? (
            <button onClick={() => { window.location.href = `/lesson/${l}/${lvl}/${nextIdx}`; }} className="w-full py-3 rounded-full bg-foreground text-background font-medium">{tt('next_lesson')} →</button>
          ) : (
            <button onClick={() => navigate(`/levels/${l}`)} className="w-full py-3 rounded-full bg-foreground text-background font-medium">🗺 {tt('view_map')}</button>
          )}
          <button onClick={() => navigate(`/levels/${l}`)} className="w-full py-3 rounded-full border border-border text-foreground-secondary font-medium">{tt('view_map')}</button>
        </div>
      </div>
    );
  }

  if (!step) return null;

  const fontClass = config.fontClass || 'font-serif';

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Cultural watermark */}
      {culturalEmojis.length > 0 && <CulturalWatermark emojis={culturalEmojis} hue={config.hue} />}
      
      <div className="flex items-center gap-3 px-4 h-[52px] border-b border-border bg-card shrink-0 relative z-10">
        <button onClick={() => { if (confirm(tt('exit_confirm'))) navigate(`/levels/${l}`); }} className="px-3 py-1 rounded-full border border-border text-sm">✕</button>
        <div className="flex-1 bg-border rounded-full h-1.5 overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: `linear-gradient(to right, hsl(${config.hue}, 60%, 35%), hsl(${config.hue}, 70%, 46%))` }} />
        </div>
        <div className="flex gap-1">{[0, 1, 2].map(i => (<span key={i} className={`text-sm transition-all ${i >= hearts ? 'opacity-20 scale-75' : ''}`}>❤️</span>))}</div>
      </div>
      <div className="flex-1 overflow-y-auto max-w-[600px] w-full mx-auto px-4 py-3 relative z-10">
        <div className="text-[0.6rem] font-semibold tracking-widest uppercase text-foreground-muted mb-1">
          {tt('step_of').replace('{0}', String(stepIdx + 1)).replace('{1}', String(steps.length))}
        </div>
        {step.t === 'th' && (
          <div className="bg-background border border-border rounded-[16px] p-4 mb-2">
            <div className="text-center p-2.5 rounded-[11px] mb-2 text-[1.8rem] leading-tight" style={{ background: `hsl(${config.hue}, 80%, 96%)`, color: `hsl(${config.hue}, 70%, 40%)` }}>
              <span className={fontClass}>{step.char}</span>
            </div>
            <div className="text-center font-semibold text-sm mb-0.5">{step.rd}</div>
            <div className="text-center text-xs text-foreground-secondary mb-2">{step.mn}</div>
            <div className="text-xs text-foreground-secondary leading-relaxed bg-card rounded-lg p-2.5 border-l-[3px]" style={{ borderLeftColor: `hsl(${config.hue}, 70%, 46%)` }}>{step.note}</div>
            {step.ex && <div className="mt-2 flex flex-col gap-1">{step.ex.map((e, i) => (<div key={i} className="flex items-baseline gap-2 text-xs"><span className={fontClass} style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{e.j || e.f || e.w}</span><span className="text-foreground-muted">→ {e.m}</span></div>))}</div>}
            <button onClick={() => speakText(step.char, l)} className="mt-1.5 px-2.5 py-0.5 rounded-full border border-border bg-card text-[0.65rem] hover:bg-background transition-colors">🔊 {tt('listen')}</button>
          </div>
        )}
        {step.t === 'rd' && (
          <div className="bg-card border border-border rounded-[12px] p-3 mb-2">
            <div className="font-serif text-sm font-semibold mb-1.5">{step.title}</div>
            <div className={`text-xs leading-[2] ${fontClass}`}>{step.passage}</div>
          </div>
        )}
        {step.t !== 'th' && (
          <div className="bg-background border border-border rounded-[16px] p-4 mb-2">
            <div className="text-[0.6rem] font-semibold tracking-widest uppercase text-foreground-muted mb-1.5">
              {step.t === 'mc' ? `✦ ${tt('multiple_choice')}` : step.t === 'tx' ? `✦ ${tt('write_response')}` : step.t === 'or' ? `✦ ${tt('order_words')}` : `✦ ${tt('reading_comp')}`}
            </div>
            <div className="font-serif text-base mb-3 leading-snug" dangerouslySetInnerHTML={{ __html: step.q || '' }} />
            {(step.t === 'mc' || step.t === 'rd') && step.opts && (
              <div className={`grid gap-2 ${step.opts.some(o => o.length > 30) ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {step.opts.map((opt, i) => {
                  const labels = ['A', 'B', 'C', 'D'];
                  let cls = 'bg-card border-border hover:border-foreground-secondary hover:bg-background';
                  if (locked) { if (i === step.ans) cls = 'bg-success-light border-success text-success'; else if (i === selectedChoice && !feedback?.correct) cls = 'bg-destructive/10 border-destructive text-destructive'; else cls = 'bg-card border-border'; }
                  else if (i === selectedChoice) cls = 'border-foreground/40 bg-background';
                  return (<button key={i} disabled={locked} onClick={() => setSelectedChoice(i)} className={`flex items-center gap-2 p-2.5 border-[1.5px] rounded-xl text-sm text-left transition-all ${cls}`}><span className="w-5 h-5 rounded-md bg-foreground/[0.06] flex items-center justify-center text-[0.63rem] font-bold shrink-0">{labels[i]}</span>{opt}</button>);
                })}
              </div>
            )}
            {step.t === 'tx' && (
              <>
                <input value={textInput} onChange={e => setTextInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && canCheck && nextAction()} disabled={locked} placeholder={tt('write_answer')} className={`w-full p-3 border-[1.5px] rounded-xl text-sm bg-card outline-none transition-colors ${locked ? (feedback?.correct ? 'border-success bg-success-light' : 'border-destructive bg-destructive/10') : 'border-border focus:border-foreground-secondary'}`} />
                {step.hint && <div className="text-[0.68rem] text-foreground-muted mt-1">💡 {tt('hint')}: {step.hint}</div>}
              </>
            )}
            {step.t === 'or' && (
              <>
                <div className={`min-h-[46px] p-2 border-[1.5px] border-dashed rounded-xl flex flex-wrap gap-1.5 mb-2 transition-colors ${locked ? (feedback?.correct ? 'border-success bg-success-light' : 'border-destructive bg-destructive/10') : 'border-border'}`}>
                  {orderPlaced.map((wi, pi) => (<span key={pi} onClick={() => { if (locked) return; setOrderPlaced(p => p.filter((_, j) => j !== pi)); }} className="px-3 py-1 rounded-lg text-[0.78rem] font-medium cursor-pointer text-card" style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>{shuffledWords[wi]}</span>))}
                </div>
                <div className="min-h-[40px] p-2 bg-foreground/[0.03] rounded-lg flex flex-wrap gap-1.5">
                  {shuffledWords.map((w, i) => { const used = orderPlaced.includes(i); return (<span key={i} onClick={() => { if (locked || used) return; setOrderPlaced(p => [...p, i]); }} className={`px-3 py-1 rounded-lg text-[0.78rem] font-medium border-[1.5px] border-border bg-card cursor-pointer transition-all ${used ? 'opacity-25' : 'hover:border-foreground-secondary hover:-translate-y-0.5'}`}>{w}</span>); })}
                </div>
              </>
            )}
            {feedback && (
              <div className={`p-3 rounded-xl text-sm mt-3 animate-fade-in ${feedback.correct ? 'bg-success-light text-success border border-success/30' : 'bg-destructive/10 text-destructive border border-destructive/30'}`}>
                <strong className="block mb-0.5">{feedback.correct ? `✅ ${tt('correct')}` : `❌ ${tt('incorrect')}`}</strong>
                {feedback.correct ? tt('excellent') : `${tt('answer_was')}: ${feedback.answer}`}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border px-5 py-3 flex justify-end gap-2 relative z-10">
        {!locked && step.t !== 'th' && (<button onClick={() => { setAccuracy(p => [...p, false]); advance(); }} className="px-3 py-2 rounded-full border border-border text-sm text-foreground-secondary">{tt('skip')}</button>)}
        <button onClick={nextAction} disabled={!canCheck && !feedback} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium disabled:opacity-40 transition-opacity">
          {feedback ? `${tt('next')} →` : step.t === 'th' ? `${tt('continue')} →` : `${tt('check')} →`}
        </button>
      </div>
    </div>
  );
}
