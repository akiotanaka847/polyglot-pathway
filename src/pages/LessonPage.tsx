import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { getLessonData } from '@/data/lessons/index';
import { LessonStep } from '@/data/types';
import { getLangConfig } from '@/data/languages';
import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { normalizeAnswer, shuffleArray, speakText, playCorrectSound, playIncorrectSound, playLevelUpSound, spawnConfetti } from '@/utils/helpers';
import { translateLessonText, translateLessonTitle } from '@/utils/lessonI18n';
import { useAiTranslate } from '@/hooks/useAiTranslate';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

// Topic-related emoji illustrations for visual association
const TOPIC_ILLUSTRATIONS: Record<string, string[]> = {
  greetings: ['👋', '🤝', '😊', '🙏'],
  numbers: ['🔢', '🎲', '📊', '🧮'],
  family: ['👨‍👩‍👧‍👦', '👶', '🏠', '❤️'],
  colors: ['🎨', '🌈', '🖌️', '🎭'],
  days: ['📅', '🗓️', '⏰', '🌅'],
  food: ['🍽️', '🍜', '🥗', '🍲'],
  body: ['🫀', '💪', '👁️', '🦶'],
  clothes: ['👕', '👗', '🧥', '👟'],
  house: ['🏠', '🛋️', '🚿', '🛏️'],
  transport: ['🚗', '🚆', '✈️', '🚌'],
  weather: ['🌤️', '🌧️', '❄️', '🌈'],
  jobs: ['👩‍⚕️', '👨‍🏫', '👩‍💼', '👨‍🍳'],
  shopping: ['🛒', '💰', '🏪', '🛍️'],
  verbs: ['🏃', '📝', '🗣️', '👀'],
  adjectives: ['📏', '🎯', '✨', '⚡'],
  questions: ['❓', '🤔', '💭', '🗨️'],
  survival: ['🆘', '🗺️', '📞', '🏥'],
  animals: ['🐕', '🐈', '🐘', '🦋'],
  vocab: ['📚', '✏️', '💡', '🧠'],
  grammar: ['📐', '🔤', '📖', '📝'],
  reading: ['📖', '📰', '📚', '🔍'],
  writing: ['✍️', '📝', '✏️', '💌'],
};

function getLessonIllustration(lesson: { unit?: { id: string; emoji: string }; type: string; title: string }): string[] {
  // Try unit id first
  if (lesson.unit?.id) {
    const key = lesson.unit.id.replace(/[-_]\d+/g, '').replace(/^(unit_|cat_)/, '');
    if (TOPIC_ILLUSTRATIONS[key]) return TOPIC_ILLUSTRATIONS[key];
  }
  // Try lesson type
  if (TOPIC_ILLUSTRATIONS[lesson.type]) return TOPIC_ILLUSTRATIONS[lesson.type];
  // Try matching title keywords
  const titleLower = lesson.title.toLowerCase();
  for (const [key, emojis] of Object.entries(TOPIC_ILLUSTRATIONS)) {
    if (titleLower.includes(key.slice(0, 4))) return emojis;
  }
  return ['📚', '✨', '🎯', '💡'];
}

export default function LessonPage() {
  const { lang, level, index } = useParams();
  const navigate = useNavigate();
  const { addXP, markLessonDone, checkStreak, earnAchievement, tt, state: appState } = useApp();
  const nativeLang = appState.nativeLang || 'en';
  const tlTitle = (title: string) => translateLessonTitle(title, nativeLang);

  const l = lang || 'jp';
  const lvl = level || 'N5';
  const idx = parseInt(index || '0');
  const config = getLangConfig(l);
  const lessonData = getLessonData(nativeLang);
  const lessons = lessonData[l]?.[lvl] || [];
  const lesson = lessons[idx];

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
  const [slideDir, setSlideDir] = useState<'in' | 'out'>('in');
  const containerRef = useRef<HTMLDivElement>(null);

  // Speech recognition
  const speech = useSpeechRecognition(l);
  
  // Sync speech transcript to text input
  useEffect(() => {
    if (speech.transcript) setTextInput(speech.transcript);
  }, [speech.transcript]);

  const initOrderWords = useCallback((step: LessonStep) => {
    if (step.t === 'or') {
      setShuffledWords(shuffleArray([...step.words]));
      setOrderPlaced([]);
    }
  }, []);

  // Long explanations (advanced levels) fall back to AI translation, cached forever.
  const aiTexts = useMemo(() => {
    if (!lesson || nativeLang === 'es' || nativeLang === 'en') return [];
    const out: string[] = [];
    const push = (v: unknown) => { if (typeof v === 'string' && v.length > 45) out.push(v); };
    push(lesson.title);
    (lesson.steps ?? []).forEach((st) => {
      const any = st as unknown as Record<string, unknown>;
      push(any.q); push(any.note); push(any.text); push(any.hint); push(any.mn);
    });
    return [...new Set(out)];
  }, [lesson, nativeLang]);
  const { tr: aiTr } = useAiTranslate(aiTexts, nativeLang);

  const tl = (text: string | undefined) => {
    const base = translateLessonText(text, nativeLang);
    if (!text || nativeLang === 'es') return base;
    const ai = aiTr(text);
    return ai && ai !== text ? ai : base;
  };

  const steps = lesson?.steps ?? [];
  const rawStep = steps[stepIdx] as LessonStep | undefined;
  const progress = steps.length > 0 ? ((stepIdx + 1) / steps.length) * 100 : 0;

  // Randomize MC/RD options
  const step = useMemo(() => {
    if (!rawStep || (rawStep.t !== 'mc' && rawStep.t !== 'rd')) return rawStep;
    const s = { ...rawStep } as any;
    const indices = s.opts.map((_: any, i: number) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    s.opts = indices.map((i: number) => (rawStep as any).opts[i]);
    s.ans = indices.indexOf((rawStep as any).ans);
    return s as LessonStep;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIdx]) as LessonStep | undefined;

  if (!lesson) {
    return <div className="flex-1 flex items-center justify-center"><p>{tt('coming_soon')}</p></div>;
  }

  const handleCheck = () => {
    if (!step) return;
    if (step.t === 'th') { advance(true); return; }
    let correct = false;
    let correctAns = '';
    if (step.t === 'mc' || step.t === 'rd') {
      correct = selectedChoice === step.ans;
      correctAns = tl(step.opts[step.ans]);
    } else if (step.t === 'tx') {
      const translatedAns = tl(step.ans);
      const normalizedInput = normalizeAnswer(textInput);
      correct = normalizedInput === normalizeAnswer(step.ans) || normalizedInput === normalizeAnswer(translatedAns);
      correctAns = translatedAns;
    } else if (step.t === 'or') {
      const expected = step.ans.map(i => step.words[i]);
      const got = orderPlaced.map(i => shuffledWords[i]);
      correct = JSON.stringify(got) === JSON.stringify(expected);
      correctAns = expected.join(' ');
    } else if (step.t === 'la') {
      // Listen & answer: user types what the audio means
      const normalizedInput = normalizeAnswer(textInput);
      correct = normalizedInput === normalizeAnswer(step.ans);
      correctAns = step.ans;
    } else if (step.t === 'sp') {
      // Speak: compare spoken transcript to expected
      const normalizedInput = normalizeAnswer(textInput);
      correct = normalizedInput.includes(normalizeAnswer(step.expected)) || normalizeAnswer(step.expected).includes(normalizedInput);
      correctAns = step.expected;
    }
    setFeedback({ correct, answer: correctAns });
    setLocked(true);
    setAccuracy(prev => [...prev, correct]);
    if (correct) {
      playCorrectSound();
      if (containerRef.current) spawnConfetti(containerRef.current);
    } else {
      playIncorrectSound();
      setHearts(h => Math.max(0, h - 1));
    }
  };

  const advance = (isTheory = false) => {
    if (!isTheory) setAccuracy(prev => [...prev, true]);
    setSlideDir('out');
    setTimeout(() => {
      setFeedback(null); setLocked(false); setSelectedChoice(null); setTextInput(''); setOrderPlaced([]);
      speech.setTranscript('');
      const next = stepIdx + 1;
      if (next >= steps.length) { completeLesson(); }
      else { setStepIdx(next); const ns = steps[next]; if (ns?.t === 'or') initOrderWords(ns); }
      setSlideDir('in');
    }, 200);
  };

  const completeLesson = () => {
    const acc = accuracy.length ? Math.round(accuracy.filter(Boolean).length / accuracy.length * 100) : 100;
    const xp = Math.round(80 * (acc / 100) + hearts * 10);
    addXP(l, xp); markLessonDone(l, lvl, lesson.id); checkStreak(); earnAchievement('first_lesson');
    setXpEarned(xp); setCompleted(true);
    playLevelUpSound();
  };

  const nextAction = () => { if (feedback) advance(); else handleCheck(); };
  const canCheck = step?.t === 'th' || selectedChoice !== null || textInput.trim().length > 0 || orderPlaced.length > 0;

  if (step?.t === 'or' && shuffledWords.length === 0) initOrderWords(step);

  // ── Completion screen ──
  if (completed) {
    const acc = accuracy.length ? Math.round(accuracy.filter(Boolean).length / accuracy.length * 100) : 100;
    const secs = Math.round((Date.now() - startTime.current) / 1000);
    const nextIdx = idx + 1;
    const medal = acc >= 95 ? { icon: '🥇', label: tt('perfect'), color: '#FFD700' } : acc >= 80 ? { icon: '🥈', label: tt('excellent'), color: '#C0C0C0' } : { icon: '🥉', label: tt('lesson_complete'), color: '#CD7F32' };

    return (
      <div ref={containerRef} className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in relative overflow-hidden">
        {/* Celebration */}
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-4 animate-pop-in shadow-lg"
          style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 80%, 96%), hsl(${config.hue}, 60%, 88%))` }}>
          {medal.icon}
        </div>
        <h2 className="font-serif text-3xl font-light mb-1">{medal.label}</h2>
        <p className="text-sm text-foreground-secondary mb-5">{tlTitle(lesson.title)}</p>

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-lg mb-6 animate-pop-in shadow-md"
          style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 70%, 46%), hsl(${config.hue}, 80%, 56%))`, color: 'white' }}>
          ⚡ +{xpEarned} XP
        </div>

        <div className="grid grid-cols-3 gap-3 w-full max-w-xs mb-6">
          <div className="bg-card border border-border rounded-2xl p-3 text-center shadow-sm">
            <div className="font-serif text-2xl font-bold">{acc}%</div>
            <div className="text-[0.65rem] text-foreground-muted">{tt('accuracy')}</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-3 text-center shadow-sm">
            <div className="font-serif text-2xl font-bold">{secs}s</div>
            <div className="text-[0.65rem] text-foreground-muted">{tt('time')}</div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-3 text-center shadow-sm">
            <div className="flex justify-center gap-0.5">{[0,1,2].map(i => <span key={i} className={`text-lg ${i >= hearts ? 'opacity-20' : ''}`}>❤️</span>)}</div>
            <div className="text-[0.65rem] text-foreground-muted">{hearts}/3</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full max-w-xs">
          {nextIdx < lessons.length ? (
            <button onClick={() => { window.location.href = `/lesson/${l}/${lvl}/${nextIdx}`; }}
              className="w-full py-3.5 rounded-2xl font-semibold text-card shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>
              {tt('next_lesson')} →
            </button>
          ) : (
            <button onClick={() => navigate(`/levels/${l}`)}
              className="w-full py-3.5 rounded-2xl font-semibold text-card shadow-md"
              style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>
              🗺 {tt('view_map')}
            </button>
          )}
          <button onClick={() => navigate(`/levels/${l}`)}
            className="w-full py-3 rounded-2xl border border-border text-foreground-secondary font-medium hover:bg-card transition-colors">
            {tt('view_map')}
          </button>
        </div>
      </div>
    );
  }

  if (!step) return null;
  const fontClass = config.fontClass || 'font-serif';

  return (
    <div ref={containerRef} className="flex-1 flex flex-col relative overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 h-14 border-b border-border bg-card/80 backdrop-blur-sm shrink-0 z-10">
        <button onClick={() => { if (confirm(tt('exit_confirm'))) navigate(`/levels/${l}`); }}
          className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm hover:bg-background transition-colors">✕</button>
        
        {/* Animated progress bar */}
        <div className="flex-1 h-2.5 bg-border rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%`, background: `linear-gradient(90deg, hsl(${config.hue}, 60%, 50%), hsl(${config.hue}, 80%, 60%))` }} />
        </div>

        {/* Hearts */}
        <div className="flex gap-0.5">
          {[0,1,2].map(i => (
            <div key={i} className={`w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
              i >= hearts ? 'opacity-20 scale-75 grayscale' : ''
            }`}
              style={i < hearts ? { background: 'hsl(0, 80%, 95%)' } : undefined}>
              ❤️
            </div>
          ))}
        </div>
      </div>

      {/* Step content with slide animation */}
      <div className={`flex-1 overflow-y-auto max-w-[600px] w-full mx-auto px-4 py-4 transition-all duration-200 ${
        slideDir === 'out' ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
      }`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.6rem] font-bold tracking-widest uppercase text-foreground-muted">
            {tt('step_of').replace('{0}', String(stepIdx + 1)).replace('{1}', String(steps.length))}
          </span>
          <span className="flex-1" />
          <button onClick={() => speakText(step.t === 'th' ? step.char : step.t === 'la' ? step.audio : (step as any).q || '', l)}
            className="px-2.5 py-1 rounded-full border border-border bg-card text-[0.65rem] hover:bg-background transition-colors">
            🔊 {tt('listen')}
          </button>
        </div>

        {/* Topic illustration banner */}
        {stepIdx === 0 && (
          <div className="flex items-center gap-3 p-3 rounded-2xl mb-3 border border-border"
            style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 80%, 96%), hsl(${config.hue}, 60%, 92%))` }}>
            <div className="flex gap-1">
              {getLessonIllustration(lesson).map((emoji, i) => (
                <span key={i} className="text-2xl animate-pop-in" style={{ animationDelay: `${i * 100}ms` }}>{emoji}</span>
              ))}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-sm font-semibold truncate" style={{ color: `hsl(${config.hue}, 70%, 35%)` }}>
                {tlTitle(lesson.title)}
              </div>
              {lesson.unit && (
                <div className="text-[0.65rem] text-foreground-muted">{lesson.unit.emoji} {tl(lesson.unit.name)}</div>
              )}
            </div>
          </div>
        )}

        {/* Theory step */}
        {step.t === 'th' && (
          <div className="bg-card border border-border rounded-2xl p-5 mb-3 shadow-sm">
            <div className="text-center p-4 rounded-xl mb-3 text-[2.2rem] leading-tight"
              style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 80%, 96%), hsl(${config.hue}, 60%, 90%))`, color: `hsl(${config.hue}, 70%, 35%)` }}>
              <span className={fontClass}>{step.char}</span>
            </div>
            <div className="text-center font-bold text-base mb-0.5">{step.rd}</div>
            <div className="text-center text-sm text-foreground-secondary mb-3">{tl(step.mn)}</div>
            <div className="text-sm text-foreground-secondary leading-relaxed bg-background rounded-xl p-3 border-l-4"
              style={{ borderLeftColor: `hsl(${config.hue}, 70%, 46%)` }}>{tl(step.note)}</div>
            {step.ex && (
              <div className="mt-3 flex flex-col gap-1.5">
                {step.ex.map((e, i) => (
                  <div key={i} className="flex items-baseline gap-2 text-sm">
                    <span className={fontClass} style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{e.j || e.f || e.w}</span>
                    <span className="text-foreground-muted">→ {tl(e.m)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reading passage */}
        {step.t === 'rd' && (
          <div className="bg-card border border-border rounded-2xl p-4 mb-3 shadow-sm">
            <div className="font-serif text-sm font-semibold mb-2">{tl(step.title)}</div>
            <div className={`text-sm leading-[2] ${fontClass}`}>{step.passage}</div>
          </div>
        )}

        {/* Interactive step */}
        {step.t !== 'th' && (
          <div className="bg-card border border-border rounded-2xl p-5 mb-3 shadow-sm">
            {/* Small topic emoji next to question type */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{lesson.unit?.emoji || getLessonIllustration(lesson)[0]}</span>
              <span className="text-[0.6rem] font-bold tracking-widest uppercase"
                style={{ color: `hsl(${config.hue}, 60%, 50%)` }}>
                {step.t === 'mc' ? tt('multiple_choice') : step.t === 'tx' ? tt('write_response') : step.t === 'or' ? tt('order_words') : step.t === 'la' ? tt('listen_respond') : step.t === 'sp' ? tt('speak_respond') : tt('reading_comp')}
              </span>
            </div>
            {step.t !== 'la' && (
              <div className="font-serif text-lg mb-4 leading-snug" dangerouslySetInnerHTML={{ __html: tl(step.t === 'sp' ? step.q : (step as any).q || '') }} />
            )}

            {/* MC options */}
            {(step.t === 'mc' || step.t === 'rd') && step.opts && (
              <div className={`grid gap-2.5 ${step.opts.some(o => o.length > 30) ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {step.opts.map((opt, i) => {
                  const labels = ['A', 'B', 'C', 'D'];
                  let cls = 'bg-background border-border hover:border-foreground/30 hover:shadow-sm';
                  if (locked) {
                    if (i === step.ans) cls = 'bg-green-50 border-green-400 text-green-700 shadow-sm';
                    else if (i === selectedChoice && !feedback?.correct) cls = 'bg-red-50 border-red-400 text-red-600 animate-shake';
                    else cls = 'bg-background border-border opacity-50';
                  } else if (i === selectedChoice) cls = 'border-2 shadow-md bg-background';
                  return (
                    <button key={i} disabled={locked} onClick={() => setSelectedChoice(i)}
                      className={`flex items-center gap-2.5 p-3 border-[1.5px] rounded-xl text-sm text-left transition-all ${cls}`}
                      style={!locked && i === selectedChoice ? { borderColor: `hsl(${config.hue}, 70%, 46%)` } : undefined}>
                      <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[0.65rem] font-bold shrink-0"
                        style={{ background: `hsl(${config.hue}, 80%, 95%)`, color: `hsl(${config.hue}, 70%, 40%)` }}>
                        {labels[i]}
                      </span>
                      <span className="flex-1">{tl(opt)}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Text input with microphone */}
            {step.t === 'tx' && (
              <div className="space-y-2">
                <div className="relative">
                  <input value={textInput} onChange={e => setTextInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && canCheck && nextAction()} disabled={locked}
                    placeholder={tt('write_answer')}
                    className={`w-full p-3.5 pr-12 border-2 rounded-xl text-sm bg-background outline-none transition-all ${
                      locked ? (feedback?.correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50 animate-shake') : 'border-border focus:border-foreground/40'
                    }`} />
                  {/* Microphone button */}
                  {speech.isSupported && !locked && (
                    <button onClick={() => speech.isListening ? speech.stop() : speech.start()}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                        speech.isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-background border border-border hover:bg-card'
                      }`}>
                      {speech.isListening ? '⏹' : '🎤'}
                    </button>
                  )}
                </div>
                {speech.isListening && (
                  <div className="flex items-center gap-2 text-[0.7rem] text-foreground-muted animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    {tt('listen')}...
                  </div>
                )}
                {step.hint && <div className="text-[0.7rem] text-foreground-muted">💡 {tt('hint')}: {step.hint}</div>}
              </div>
            )}

            {/* Order words */}
            {step.t === 'or' && (
              <>
                <div className={`min-h-[50px] p-2.5 border-2 border-dashed rounded-xl flex flex-wrap gap-2 mb-3 transition-all ${
                  locked ? (feedback?.correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50 animate-shake') : 'border-border'
                }`}>
                  {orderPlaced.map((wi, pi) => (
                    <span key={pi} onClick={() => { if (locked) return; setOrderPlaced(p => p.filter((_, j) => j !== pi)); }}
                      className="px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer text-card shadow-sm"
                      style={{ background: `hsl(${config.hue}, 70%, 46%)` }}>
                      {shuffledWords[wi]}
                    </span>
                  ))}
                  {orderPlaced.length === 0 && <span className="text-sm text-foreground-muted p-1">{tt('order_words')}...</span>}
                </div>
                <div className="p-2 bg-background rounded-xl flex flex-wrap gap-2">
                  {shuffledWords.map((w, i) => {
                    const used = orderPlaced.includes(i);
                    return (
                      <span key={i} onClick={() => { if (locked || used) return; setOrderPlaced(p => [...p, i]); }}
                        className={`px-3.5 py-1.5 rounded-lg text-sm font-medium border-[1.5px] border-border bg-card cursor-pointer transition-all ${
                          used ? 'opacity-20 scale-90' : 'hover:border-foreground/30 hover:-translate-y-0.5 hover:shadow-sm'
                        }`}>
                        {w}
                      </span>
                    );
                  })}
                </div>
              </>
            )}

            {/* Listen & Answer */}
            {step.t === 'la' && (
              <div className="space-y-3">
                <div className="text-center p-5 rounded-xl mb-2"
                  style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 80%, 96%), hsl(${config.hue}, 60%, 90%))` }}>
                  <button onClick={() => speakText(step.audio, l)}
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-2 shadow-md transition-transform hover:scale-110 active:scale-95 bg-card border border-border">
                    🔊
                  </button>
                  <p className="text-sm font-medium" style={{ color: `hsl(${config.hue}, 70%, 35%)` }}>{tt('what_did_you_hear')}</p>
                </div>
                <div className="relative">
                  <input value={textInput} onChange={e => setTextInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && canCheck && nextAction()} disabled={locked}
                    placeholder={tt('write_answer')}
                    className={`w-full p-3.5 border-2 rounded-xl text-sm bg-background outline-none transition-all ${
                      locked ? (feedback?.correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50 animate-shake') : 'border-border focus:border-foreground/40'
                    }`} />
                </div>
                {step.hint && <div className="text-[0.7rem] text-foreground-muted">💡 {tt('hint')}: {step.hint}</div>}
              </div>
            )}

            {/* Speak step */}
            {step.t === 'sp' && (
              <div className="space-y-3">
                <div className="text-center p-5 rounded-xl mb-2"
                  style={{ background: `linear-gradient(135deg, hsl(${config.hue}, 80%, 96%), hsl(${config.hue}, 60%, 90%))` }}>
                  <p className="text-sm mb-1 text-foreground-muted">{tt('say_word')}</p>
                  <p className={`text-2xl font-bold ${fontClass}`} style={{ color: `hsl(${config.hue}, 70%, 35%)` }}>{step.hint}</p>
                  <button onClick={() => speakText(step.hint || step.expected, l)}
                    className="mt-2 px-3 py-1 rounded-full border border-border bg-card text-xs hover:bg-background transition-colors">
                    🔊 {tt('listen')}
                  </button>
                </div>
                {speech.isSupported ? (
                  <>
                    <button onClick={() => speech.isListening ? speech.stop() : speech.start()} disabled={locked}
                      className={`w-full py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                        speech.isListening ? 'bg-destructive/10 text-destructive border-2 border-destructive/30 animate-pulse' : 'text-card shadow-md'
                      }`}
                      style={!speech.isListening ? { background: `hsl(${config.hue}, 70%, 46%)` } : undefined}>
                      {speech.isListening ? `⏹ ${tt('recording')}` : `🎤 ${tt('tap_to_speak')}`}
                    </button>
                    {textInput && (
                      <div className="p-3 rounded-xl bg-background border border-border text-sm">
                        <span className="text-foreground-muted text-xs">{tt('write_answer')}:</span>
                        <p className="font-medium mt-1">{textInput}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="relative">
                    <input value={textInput} onChange={e => setTextInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && canCheck && nextAction()} disabled={locked}
                      placeholder={tt('write_answer')}
                      className={`w-full p-3.5 border-2 rounded-xl text-sm bg-background outline-none transition-all ${
                        locked ? (feedback?.correct ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50 animate-shake') : 'border-border focus:border-foreground/40'
                      }`} />
                  </div>
                )}
              </div>
            )}

            {/* Feedback */}
            {feedback && (
              <div className={`p-4 rounded-xl text-sm mt-4 animate-scale-in border ${
                feedback.correct ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-600 border-red-200'
              }`}>
                <strong className="block mb-0.5 text-base">{feedback.correct ? `✅ ${tt('correct')}` : `❌ ${tt('incorrect')}`}</strong>
                {feedback.correct ? tt('excellent') : `${tt('answer_was')}: ${feedback.answer}`}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom action bar */}
      <div className="sticky bottom-0 bg-card/95 backdrop-blur-sm border-t border-border px-5 py-3 flex justify-end gap-2 z-10">
        {!locked && step.t !== 'th' && (
          <button onClick={() => { setAccuracy(p => [...p, false]); advance(); }}
            className="px-4 py-2.5 rounded-xl border border-border text-sm text-foreground-muted hover:bg-background transition-colors">
            {tt('skip')}
          </button>
        )}
        <button onClick={nextAction} disabled={!canCheck && !feedback}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold text-card disabled:opacity-40 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          style={{ background: canCheck || feedback ? `hsl(${config.hue}, 70%, 46%)` : undefined }}>
          {feedback ? `${tt('next')} →` : step.t === 'th' ? `${tt('continue')} →` : `${tt('check')} ✓`}
        </button>
      </div>
    </div>
  );
}
