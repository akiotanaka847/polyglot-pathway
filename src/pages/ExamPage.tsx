import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { EXAM_DATA } from '@/data/exams';
import { getLangConfig } from '@/data/languages';
import { normalizeAnswer, playCorrectSound, playIncorrectSound, playLevelUpSound, spawnConfetti } from '@/utils/helpers';
import { MCStep, TextStep, ReadingStep } from '@/data/types';
import { useRef } from 'react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

type Q = MCStep | TextStep | ReadingStep;

function CircularTimer({ timeLeft, total, size = 56 }: { timeLeft: number; total: number; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const pct = total > 0 ? timeLeft / total : 0;
  const offset = circ - pct * circ;
  const isUrgent = timeLeft < 60;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="hsl(var(--border))" strokeWidth={5} />
        <circle cx={size/2} cy={size/2} r={r} fill="none"
          stroke={isUrgent ? 'hsl(0, 84%, 60%)' : 'hsl(var(--foreground))'}
          strokeWidth={5} strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
          className={`transition-all duration-1000 ${isUrgent ? 'animate-pulse-urgent' : ''}`} />
      </svg>
      <span className={`absolute text-[0.65rem] font-mono font-bold ${isUrgent ? 'text-destructive' : ''}`}>
        {mins}:{secs.toString().padStart(2, '0')}
      </span>
    </div>
  );
}

export default function ExamPage() {
  const { lang = 'jp', level = 'N5' } = useParams();
  const navigate = useNavigate();
  const { tt, addXP } = useApp();
  const exam = EXAM_DATA[lang]?.[level];
  const config = getLangConfig(lang);
  const containerRef = useRef<HTMLDivElement>(null);
  const speech = useSpeechRecognition(lang);

  const [phase, setPhase] = useState<'intro' | 'exam' | 'results'>('intro');
  const [sectionIdx, setSectionIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [sectionTime, setSectionTime] = useState(0);

  const section = exam?.sections[sectionIdx];
  const q: Q | undefined = section?.qs[qIdx];
  const totalQs = exam?.sections.reduce((a, s) => a + s.qs.length, 0) || 0;
  const answeredCount = Object.keys(answers).length;

  // Sync speech to input
  useEffect(() => {
    if (speech.transcript) setInput(speech.transcript);
  }, [speech.transcript]);

  useEffect(() => {
    if (phase !== 'exam' || !section) return;
    const t = section.time * 60;
    setTimeLeft(t);
    setSectionTime(t);
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
    if (q) {
      let isCorrect = false;
      if (q.t === 'mc' || q.t === 'rd') isCorrect = ans === q.ans;
      else if (q.t === 'tx') isCorrect = normalizeAnswer(String(ans)) === normalizeAnswer(String(q.ans));
      if (isCorrect) playCorrectSound(); else playIncorrectSound();
    }
    setAnswers(prev => ({ ...prev, [key]: ans }));
    if (qIdx < (section?.qs.length || 0) - 1) { setQIdx(i => i + 1); setInput(''); speech.setTranscript(''); }
    else nextSection();
  }, [key, qIdx, section, q]);

  const nextSection = () => {
    if (sectionIdx < (exam?.sections.length || 0) - 1) { setSectionIdx(i => i + 1); setQIdx(0); setInput(''); }
    else setPhase('results');
  };

  const calcResults = useMemo(() => {
    let correct = 0, total = 0;
    const sectionResults: { name: string; correct: number; total: number }[] = [];
    exam?.sections.forEach((s, si) => {
      let sc = 0;
      s.qs.forEach((qq, qi) => {
        total++;
        const k = `${si}-${qi}`;
        const a = answers[k];
        if (a === undefined) return;
        if (qq.t === 'mc' || qq.t === 'rd') { if (a === qq.ans) { correct++; sc++; } }
        else if (qq.t === 'tx') { if (normalizeAnswer(String(a)) === normalizeAnswer(String(qq.ans))) { correct++; sc++; } }
      });
      sectionResults.push({ name: s.name, correct: sc, total: s.qs.length });
    });
    return { correct, total, pct: total > 0 ? Math.round((correct / total) * 100) : 0, sectionResults };
  }, [answers, exam]);

  if (!exam) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col gap-3 p-6">
        <p className="text-foreground-secondary">{tt('coming_soon')}</p>
        <button onClick={() => navigate('/exams')} className="px-4 py-2 rounded-full border border-border text-sm">← {tt('back')}</button>
      </div>
    );
  }

  // ── Intro ──
  if (phase === 'intro') {
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[500px] mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center text-4xl shadow-md"
              style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 80%, 96%), hsl(${config.hue}, 60%, 88%))` }}>
              {config.flag}
            </div>
            <h1 className="text-2xl font-bold font-serif">{exam.title}</h1>
            <p className="text-sm text-foreground-secondary mt-2">{totalQs} {tt('questions')} · {exam.sections.length} {tt('lessons')}</p>
          </div>

          <div className="space-y-2 mb-6">
            {exam.sections.map((s, i) => (
              <div key={i} className="border border-border rounded-xl p-3.5 bg-card flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ background: `hsl(${config.hue}, 80%, 95%)`, color: `hsl(${config.hue}, 70%, 40%)` }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-sm">{s.name}</span>
                  <div className="text-xs text-foreground-muted">{s.qs.length} {tt('questions')} · {s.time} min</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-4 mb-6 text-sm">
            <p className="font-semibold mb-2">📋 {tt('hint')}</p>
            <ul className="space-y-1.5 text-foreground-secondary">
              <li className="flex items-center gap-2">⏱️ {tt('time')}</li>
              <li className="flex items-center gap-2">✅ 70% {tt('need_70')}</li>
              <li className="flex items-center gap-2">🎤 {tt('listen')}</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button onClick={() => navigate('/exams')} className="flex-1 px-4 py-3.5 rounded-xl border border-border text-sm font-medium hover:bg-card transition-colors">
              ← {tt('back')}
            </button>
            <button onClick={() => setPhase('exam')}
              className="flex-1 px-4 py-3.5 rounded-xl text-sm font-bold text-card shadow-md hover:shadow-lg transition-all"
              style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>
              {tt('start')} →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Results ──
  if (phase === 'results') {
    const { correct, total, pct, sectionResults } = calcResults;
    const passed = pct >= 70;
    if (passed) addXP(lang, 50);

    return (
      <div ref={containerRef} className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[500px] mx-auto px-4 py-8 text-center">
          <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl shadow-lg animate-pop-in"
            style={{ background: passed ? 'linear-gradient(135deg, #FFD700, #FFA500)' : 'hsl(var(--muted))' }}>
            {passed ? '🏅' : '📚'}
          </div>
          
          <h1 className="text-2xl font-bold font-serif mb-1">{passed ? tt('perfect') : tt('keep_practicing')}</h1>
          <p className="text-foreground-secondary mb-4">{exam.title}</p>
          
          <div className={`inline-block text-6xl font-bold mb-2 ${passed ? 'text-green-500' : 'text-destructive'}`}>
            {pct}%
          </div>
          <p className="text-sm text-foreground-secondary mb-4">{correct}/{total} {tt('correct_count')}</p>
          
          {passed && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold font-bold text-sm mb-4 animate-pop-in">
              🏆 +50 XP · {tt('passed')}
            </div>
          )}

          {/* Section breakdown */}
          <div className="bg-card border border-border rounded-2xl p-4 mb-6 text-left">
            <p className="font-semibold text-sm mb-3">{tt('progress')}</p>
            {sectionResults.map((sr, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <span className="text-sm flex-1">{sr.name}</span>
                <div className="w-20 h-1.5 bg-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${sr.total > 0 ? (sr.correct / sr.total) * 100 : 0}%`, background: sr.correct / sr.total >= 0.7 ? 'hsl(var(--success))' : 'hsl(var(--destructive))' }} />
                </div>
                <span className="text-xs text-foreground-muted w-12 text-right">{sr.correct}/{sr.total}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={() => navigate('/exams')} className="flex-1 px-4 py-3 rounded-xl border border-border text-sm hover:bg-card transition-colors">{tt('simulation')}</button>
            <button onClick={() => { setPhase('intro'); setSectionIdx(0); setQIdx(0); setAnswers({}); setInput(''); }}
              className="flex-1 px-4 py-3 rounded-xl text-sm font-bold text-card"
              style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>
              {tt('repeat')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Exam phase ──
  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[540px] mx-auto px-4 py-4">
        {/* Header with circular timer */}
        <div className="flex items-center gap-3 mb-4">
          <CircularTimer timeLeft={timeLeft} total={sectionTime} />
          <div className="flex-1">
            <span className="text-sm font-bold">{section?.name}</span>
            <div className="text-xs text-foreground-muted">
              {tt('question_of').replace('{0}', String(qIdx + 1)).replace('{1}', String(section?.qs.length))} · {sectionIdx + 1}/{exam.sections.length}
            </div>
          </div>
          {/* Section progress dots */}
          <div className="flex gap-1">
            {exam.sections.map((_, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${
                i < sectionIdx ? 'bg-green-400' : i === sectionIdx ? '' : 'bg-border'
              }`}
                style={i === sectionIdx ? { background: `hsl(${config.hue}, 70%, 46%)` } : undefined} />
            ))}
          </div>
        </div>

        {/* Overall progress */}
        <div className="w-full h-1.5 bg-border rounded-full mb-4 overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500"
            style={{ width: `${(answeredCount / totalQs) * 100}%`, background: `hsl(${config.hue}, 70%, 46%)` }} />
        </div>

        {/* Question card */}
        {q && (
          <div className="border border-border rounded-2xl p-5 bg-card shadow-sm animate-fade-in">
            {q.t === 'rd' && (
              <div className="bg-background rounded-xl p-4 mb-4 text-sm leading-relaxed border border-border">
                <p className="font-bold text-xs mb-1.5" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{(q as ReadingStep).title}</p>
                <p>{(q as ReadingStep).passage}</p>
              </div>
            )}
            <p className="font-semibold mb-4 text-base leading-snug" dangerouslySetInnerHTML={{ __html: q.q }} />

            {(q.t === 'mc' || q.t === 'rd') && (
              <div className="space-y-2.5">
                {(q as MCStep).opts.map((o, i) => (
                  <button key={i} onClick={() => submit(i)}
                    className="w-full text-left px-4 py-3.5 rounded-xl border-[1.5px] border-border hover:border-foreground/30 hover:shadow-sm transition-all text-sm bg-background">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md text-[0.65rem] font-bold mr-2.5"
                      style={{ background: `hsl(${config.hue}, 80%, 95%)`, color: `hsl(${config.hue}, 70%, 40%)` }}>
                      {['A','B','C','D'][i]}
                    </span>
                    {o}
                  </button>
                ))}
              </div>
            )}

            {q.t === 'tx' && (
              <div className="space-y-3">
                <div className="relative">
                  <input type="text" value={input} onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && input.trim() && submit(input.trim())}
                    placeholder={tt('write_answer')}
                    className="w-full px-4 py-3.5 pr-12 rounded-xl border-[1.5px] border-border bg-background text-sm focus:border-foreground/40 outline-none transition-colors"
                    autoFocus />
                  {speech.isSupported && (
                    <button onClick={() => speech.isListening ? speech.stop() : speech.start()}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                        speech.isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-background border border-border hover:bg-card'
                      }`}>
                      {speech.isListening ? '⏹' : '🎤'}
                    </button>
                  )}
                </div>
                <button onClick={() => input.trim() && submit(input.trim())} disabled={!input.trim()}
                  className="w-full px-4 py-3.5 rounded-xl text-sm font-bold text-card disabled:opacity-40 transition-all"
                  style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>
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
