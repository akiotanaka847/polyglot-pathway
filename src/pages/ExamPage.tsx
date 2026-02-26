import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { EXAM_DATA } from '@/data/exams';
import { getLangConfig } from '@/data/languages';
import { normalizeAnswer, playCorrectSound, playIncorrectSound } from '@/utils/helpers';
import { MCStep, TextStep, ReadingStep } from '@/data/types';

type Q = MCStep | TextStep | ReadingStep;

export default function ExamPage() {
  const { lang = 'jp', level = 'N5' } = useParams();
  const navigate = useNavigate();
  const { tt, addXP } = useApp();

  const exam = EXAM_DATA[lang]?.[level];
  const config = getLangConfig(lang);

  const [phase, setPhase] = useState<'intro' | 'exam' | 'results'>('intro');
  const [sectionIdx, setSectionIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  const section = exam?.sections[sectionIdx];
  const q: Q | undefined = section?.qs[qIdx];
  const totalQs = exam?.sections.reduce((a, s) => a + s.qs.length, 0) || 0;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (phase !== 'exam' || !section) return;
    setTimeLeft(section.time * 60);
    const iv = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { nextSection(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [phase, sectionIdx]);

  const key = `${sectionIdx}-${qIdx}`;

  const submit = useCallback((ans: number | string) => {
    // Play sound based on correctness
    if (q) {
      let isCorrect = false;
      if (q.t === 'mc' || q.t === 'rd') isCorrect = ans === q.ans;
      else if (q.t === 'tx') isCorrect = normalizeAnswer(String(ans)) === normalizeAnswer(String(q.ans));
      if (isCorrect) playCorrectSound(); else playIncorrectSound();
    }
    setAnswers(prev => ({ ...prev, [key]: ans }));
    if (qIdx < (section?.qs.length || 0) - 1) {
      setQIdx(i => i + 1);
      setInput('');
    } else {
      nextSection();
    }
  }, [key, qIdx, section, q]);

  const nextSection = () => {
    if (sectionIdx < (exam?.sections.length || 0) - 1) {
      setSectionIdx(i => i + 1);
      setQIdx(0);
      setInput('');
    } else {
      setPhase('results');
    }
  };

  // Calculate results
  const calcResults = () => {
    let correct = 0;
    let total = 0;
    exam?.sections.forEach((s, si) => {
      s.qs.forEach((qq, qi) => {
        total++;
        const k = `${si}-${qi}`;
        const a = answers[k];
        if (a === undefined) return;
        if (qq.t === 'mc' || qq.t === 'rd') {
          if (a === qq.ans) correct++;
        } else if (qq.t === 'tx') {
          if (normalizeAnswer(String(a)) === normalizeAnswer(String(qq.ans))) correct++;
        }
      });
    });
    return { correct, total, pct: Math.round((correct / total) * 100) };
  };

  if (!exam) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col gap-3 p-6">
        <p className="text-foreground-secondary">{tt('coming_soon')}</p>
        <button onClick={() => navigate('/exams')} className="px-4 py-2 rounded-full border border-border text-sm">← {tt('back')}</button>
      </div>
    );
  }

  if (phase === 'intro') {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[500px] mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <span className="text-5xl mb-3 block">{config.flag}</span>
            <h1 className="text-xl font-bold font-serif">{exam.title}</h1>
            <p className="text-sm text-foreground-secondary mt-2">{totalQs} {tt('questions')} · {exam.sections.length} {tt('lessons')}</p>
          </div>
          <div className="space-y-3 mb-6">
            {exam.sections.map((s, i) => (
              <div key={i} className="border border-border rounded-xl p-3 bg-card">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm">{s.name}</span>
                  <span className="text-xs text-foreground-secondary">{s.qs.length} {tt('questions')} · {s.time} min</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-accent/30 rounded-xl p-4 mb-6 text-sm text-foreground-secondary">
            <p className="font-semibold text-foreground mb-1">📋 {tt('hint')}</p>
            <ul className="list-disc ml-4 space-y-1">
              <li>{tt('time')} ⏱️</li>
              <li>70% {tt('need_70')}</li>
            </ul>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate('/exams')} className="flex-1 px-4 py-3 rounded-xl border border-border text-sm font-medium">
              ← {tt('back')}
            </button>
            <button onClick={() => setPhase('exam')} className="flex-1 px-4 py-3 rounded-xl bg-foreground text-background text-sm font-bold">
              {tt('start')} →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'results') {
    const { correct, total, pct } = calcResults();
    const passed = pct >= 70;
    if (passed) addXP(lang, 50);
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[500px] mx-auto px-4 py-8 text-center">
          <span className="text-6xl block mb-4">{passed ? '🎉' : '📚'}</span>
          <h1 className="text-2xl font-bold font-serif mb-2">{passed ? tt('perfect') : tt('keep_practicing')}</h1>
          <p className="text-foreground-secondary mb-4">{exam.title}</p>
          <div className={`inline-block text-5xl font-bold mb-4 ${passed ? 'text-green-500' : 'text-destructive'}`}>
            {pct}%
          </div>
          <p className="text-sm text-foreground-secondary mb-6">{correct}/{total} {tt('correct_count')}</p>
          {passed && <p className="text-sm text-gold font-semibold mb-4">+50 XP ⚡</p>}
          <div className="flex gap-3">
            <button onClick={() => navigate('/exams')} className="flex-1 px-4 py-3 rounded-xl border border-border text-sm">{tt('simulation')}</button>
            <button onClick={() => { setPhase('intro'); setSectionIdx(0); setQIdx(0); setAnswers({}); setInput(''); }} className="flex-1 px-4 py-3 rounded-xl bg-foreground text-background text-sm font-bold">{tt('repeat')}</button>
          </div>
        </div>
      </div>
    );
  }

  // Exam phase
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[500px] mx-auto px-4 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold bg-accent/30 px-2 py-1 rounded-full">{section?.name}</span>
          <span className={`text-xs font-mono font-bold px-2 py-1 rounded-full ${timeLeft < 60 ? 'bg-destructive/10 text-destructive' : 'bg-muted'}`}>
            {mins}:{secs.toString().padStart(2, '0')}
          </span>
        </div>
        {/* Progress */}
        <div className="w-full h-1.5 bg-muted rounded-full mb-4">
          <div className="h-full bg-foreground rounded-full transition-all" style={{ width: `${((answeredCount) / totalQs) * 100}%` }} />
        </div>
        <p className="text-xs text-foreground-secondary mb-3">{tt('question_of').replace('{0}', String(qIdx + 1)).replace('{1}', String(section?.qs.length))} · {sectionIdx + 1}/{exam.sections.length}</p>

        {/* Question */}
        {q && (
          <div className="border border-border rounded-2xl p-5 bg-card">
            {q.t === 'rd' && (
              <div className="bg-muted rounded-xl p-3 mb-3 text-sm leading-relaxed">
                <p className="font-semibold text-xs mb-1">{(q as ReadingStep).title}</p>
                <p>{(q as ReadingStep).passage}</p>
              </div>
            )}
            <p className="font-semibold mb-4 leading-snug" dangerouslySetInnerHTML={{ __html: q.q }} />
            {(q.t === 'mc' || q.t === 'rd') && (
              <div className="space-y-2">
                {(q as MCStep).opts.map((o, i) => (
                  <button key={i} onClick={() => submit(i)} className="w-full text-left px-4 py-3 rounded-xl border border-border hover:bg-accent/30 transition-colors text-sm">
                    {o}
                  </button>
                ))}
              </div>
            )}
            {q.t === 'tx' && (
              <div className="space-y-3">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && input.trim() && submit(input.trim())}
                  placeholder={tt('write_answer')}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm"
                  autoFocus
                />
                <button onClick={() => input.trim() && submit(input.trim())} disabled={!input.trim()} className="w-full px-4 py-3 rounded-xl bg-foreground text-background text-sm font-bold disabled:opacity-40">
                  {tt('confirm')}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
