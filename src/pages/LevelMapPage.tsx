import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { useApp } from '@/contexts/AppContext';
import { translateLessonTitle } from '@/utils/lessonI18n';
import { getLessonData, LEVELS } from '@/data/lessons/index';
import { QUIZ_DATA } from '@/data/quizzes';
import { getLangConfig } from '@/data/languages';
import { Lesson } from '@/data/types';

interface UnitGroup {
  id: string; name: string; emoji: string;
  lessons: { lesson: Lesson; originalIndex: number }[];
}

function CircleProgress({ pct, size = 64, stroke = 4, hue }: { pct: number; size?: number; stroke?: number; hue: number }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="hsl(var(--border))" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none"
        stroke={`hsl(${hue}, 70%, 46%)`} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
        className="transition-all duration-700" />
    </svg>
  );
}

export default function LevelMapPage() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { state, tt, addActiveLang } = useApp();
  const l = lang || 'jp';
  const config = getLangConfig(l);
  const levels = LEVELS[l] || config.levels;
  const prog = state.prog[l] || { cur: levels[0], done: {}, passed: {} };
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  useEffect(() => {
    if (!state.activeLangs.includes(l)) addActiveLang(l);
  }, [l]); // eslint-disable-line react-hooks/exhaustive-deps

  const groupByUnit = (lessons: Lesson[]): UnitGroup[] => {
    const groups: UnitGroup[] = [];
    const map = new Map<string, UnitGroup>();
    lessons.forEach((lesson, i) => {
      const unitId = lesson.unit?.id || `auto-${Math.floor(i / 6)}`;
      const unitName = lesson.unit?.name || `Unit ${Math.floor(i / 6) + 1}`;
      const unitEmoji = lesson.unit?.emoji || '📦';
      if (!map.has(unitId)) {
        const group: UnitGroup = { id: unitId, name: unitName, emoji: unitEmoji, lessons: [] };
        map.set(unitId, group);
        groups.push(group);
      }
      map.get(unitId)!.lessons.push({ lesson, originalIndex: i });
    });
    return groups;
  };

  const levelData = useMemo(() => {
    const lessonData = getLessonData(state.nativeLang || 'en');
    return levels.map((lvl, idx) => {
      const unlocked = idx === 0 || prog.passed[levels[idx - 1]];
      const lessons = lessonData[l]?.[lvl] || [];
      const doneLessons = prog.done[lvl] || {};
      const doneCount = Object.keys(doneLessons).length;
      const pct = lessons.length > 0 ? Math.round((doneCount / lessons.length) * 100) : 0;
      const quizAvail = (QUIZ_DATA[l]?.[lvl] || []).length > 0;
      const quizPassed = prog.passed[lvl];
      const allDone = lessons.length > 0 && lessons.every(les => doneLessons[les.id]);
      const isCurrent = unlocked && !quizPassed && idx <= levels.findIndex((_, i2) => i2 === 0 || !prog.passed[levels[i2 - 1]]) + 1;
      return { lvl, idx, unlocked, lessons, doneLessons, doneCount, pct, quizAvail, quizPassed, allDone, isCurrent };
    });
  }, [levels, state, l, prog]);

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[540px] mx-auto px-4 py-6 relative">
        {/* Ambient neon glows */}
        <div className="pointer-events-none absolute -top-10 right-0 w-64 h-64 rounded-full blur-[90px] opacity-30"
          style={{ background: 'hsl(var(--neon-violet))' }} />
        <div className="pointer-events-none absolute bottom-20 left-0 w-64 h-64 rounded-full blur-[90px] opacity-20"
          style={{ background: 'hsl(var(--neon-cyan))' }} />

        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 border border-white/10 bg-white/5">
            {config.flag} {config.nativeName}
          </div>
          <h1 className="font-display text-3xl font-bold mb-1">{tt('learning_path')}</h1>
          <p className="text-sm text-foreground-muted">{tt('complete_lessons')} {tt('unlock_quiz')}</p>
        </div>

        {/* Skill Tree Path */}
        <div className="relative">
          {/* Curved neon trail */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 192 1000">
            <path d="M96 0 C 96 130, 164 190, 96 320 C 28 450, 96 540, 96 700 C 96 860, 30 900, 96 1000"
              stroke="hsl(var(--neon-violet) / 0.15)" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M96 0 C 96 130, 164 190, 96 320 C 28 450, 96 540, 96 700 C 96 860, 30 900, 96 1000"
              stroke="hsl(var(--neon-cyan))" strokeWidth="5" strokeLinecap="round" fill="none"
              strokeDasharray="14 22" style={{ animation: 'trail-flow 9s linear infinite', opacity: 0.55 }} />
          </svg>

          {levelData.map((d, nodeIdx) => {
            const isLeft = nodeIdx % 2 === 0;
            const isSelected = selectedLevel === d.lvl;
            const isCurrentNode = d.unlocked && !d.quizPassed && (nodeIdx === 0 || prog.passed[levels[nodeIdx - 1]]);
            const memoryBars = Math.min(3, Math.round((d.pct / 100) * 3));

            return (
              <div key={d.lvl} className="relative mb-6">
                {/* Node row */}
                <div className={`flex items-center gap-3 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1" />

                  <div className={`relative z-10 flex flex-col items-center ${isLeft ? 'translate-x-3' : '-translate-x-3'}`}>
                    {/* Memory bars on active node */}
                    {isCurrentNode && (
                      <div className="flex gap-1 mb-2">
                        {[0, 1, 2].map(i => (
                          <span key={i} className="w-5 h-1.5 rounded-full transition-all"
                            style={{ background: i < memoryBars ? 'hsl(var(--neon-violet))' : 'hsl(var(--border))' }} />
                        ))}
                      </div>
                    )}

                    {/* Node */}
                    <button
                      onClick={() => d.unlocked && setSelectedLevel(isSelected ? null : d.lvl)}
                      disabled={!d.unlocked}
                      className={`relative flex items-center justify-center transition-all duration-300 active:translate-y-1 ${
                        d.unlocked ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-45'
                      }`}
                    >
                      {isCurrentNode && (
                        <span className="absolute inset-0 rounded-full animate-node-ping"
                          style={{ border: '2px solid hsl(var(--neon-violet))' }} />
                      )}
                      {!d.unlocked ? (
                        <span className="w-[72px] h-[72px] rounded-[1.8rem] border-2 border-dashed border-white/20 bg-muted flex items-center justify-center text-xl">🔒</span>
                      ) : d.quizPassed ? (
                        <span className="w-[72px] h-[72px] rounded-[1.8rem] flex items-center justify-center text-3xl font-black text-background"
                          style={{ background: 'hsl(var(--neon-cyan))', boxShadow: '0 10px 0 hsl(var(--neon-cyan) / 0.45), 0 18px 34px hsl(var(--neon-cyan) / 0.3)' }}>✓</span>
                      ) : isCurrentNode ? (
                        <span className="w-[86px] h-[86px] rounded-full p-[3px] animate-neon-breathe"
                          style={{ background: 'linear-gradient(135deg, hsl(var(--neon-violet)), hsl(var(--neon-pink)))', boxShadow: '0 0 40px hsl(var(--neon-violet) / 0.55)' }}>
                          <span className="w-full h-full rounded-full bg-background flex items-center justify-center font-display text-xl font-black">
                            {d.lvl}
                          </span>
                        </span>
                      ) : (
                        <span className="relative w-[72px] h-[72px] flex items-center justify-center">
                          <CircleProgress pct={d.pct} size={72} stroke={5} hue={config.hue} />
                          <span className="absolute font-display text-lg font-bold">{d.lvl}</span>
                        </span>
                      )}
                    </button>

                    {/* Current quest pill */}
                    {isCurrentNode && (
                      <div className="flex flex-col items-center mt-3">
                        <span className="px-4 py-1.5 rounded-2xl font-display text-[0.7rem] font-bold uppercase tracking-wider bg-foreground text-background shadow-[0_8px_24px_hsl(var(--neon-violet)/0.5)]">
                          {tt('continue')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
                    <div className={`inline-block px-3 py-1.5 rounded-xl transition-all ${
                      isCurrentNode ? 'bg-card border border-white/10 shadow-lg' : 'bg-transparent'
                    }`}>
                      <div className="text-sm font-bold">{d.lvl}</div>
                      <div className="text-[0.65rem] text-foreground-muted">
                        {d.doneCount}/{d.lessons.length} · {d.pct}%
                      </div>
                      <div className="mt-1 h-1.5 w-20 rounded-full overflow-hidden bg-muted">
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${d.pct}%`, background: 'linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-violet)))' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded unit panel */}
                {isSelected && d.unlocked && (
                  <div className="mt-3 mb-4 mx-4 bg-card border border-border rounded-2xl p-4 animate-scale-in relative z-10 shadow-lg">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                      <span className="text-lg font-bold" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{d.lvl}</span>
                      <span className="text-sm text-foreground-muted flex-1">{d.lessons.length} {tt('lessons')}</span>
                      <div className="h-1.5 w-20 bg-border rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${d.pct}%`, background: `hsl(${config.hue}, 70%, 46%)` }} />
                      </div>
                    </div>

                    {d.lessons.length === 0 ? (
                      <p className="text-sm text-foreground-muted py-2">📅 {tt('coming_soon')}</p>
                    ) : (
                      <>
                        {groupByUnit(d.lessons).map((unit, unitIdx, arr) => {
                          const unitDone = unit.lessons.filter(({ lesson }) => d.doneLessons[lesson.id]).length;
                          const prevUnit = unitIdx > 0 ? arr[unitIdx - 1] : null;
                          const prevDone = prevUnit ? prevUnit.lessons.filter(({ lesson }) => d.doneLessons[lesson.id]).length : 0;
                          const unitUnlocked = unitIdx === 0 || (prevUnit && prevDone / prevUnit.lessons.length >= 0.8);
                          
                          return (
                            <div key={unit.id} className={`mb-2 ${!unitUnlocked ? 'opacity-40' : ''}`}>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-base">{unitUnlocked ? unit.emoji : '🔒'}</span>
                                <span className="text-[0.78rem] font-semibold flex-1">{unit.name}</span>
                                <span className="text-[0.65rem] text-foreground-muted">{unitDone}/{unit.lessons.length}</span>
                              </div>
                              {unitUnlocked && (
                                <div className="grid grid-cols-6 gap-1 pl-6">
                                  {unit.lessons.map(({ lesson: les, originalIndex: i }) => {
                                    const isDone = d.doneLessons[les.id];
                                    return (
                                      <button key={les.id} onClick={() => navigate(`/lesson/${l}/${d.lvl}/${i}`)}
                                        title={les.title}
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-[0.65rem] font-bold transition-all hover:scale-110 ${
                                          isDone ? 'text-card' : 'bg-card border border-border hover:border-foreground/30'
                                        }`}
                                        style={isDone ? { background: `hsl(${config.hue}, 60%, 50%)` } : undefined}
                                      >
                                        {isDone ? '✓' : i + 1}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {d.quizAvail && (
                          <button
                            onClick={() => d.allDone && navigate(`/quiz/${l}/${d.lvl}`)}
                            disabled={!d.allDone}
                            className={`w-full flex items-center gap-2 p-3 rounded-xl border-2 border-dashed mt-3 transition-all ${
                              !d.allDone ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md cursor-pointer'
                            }`}
                            style={{ borderColor: `hsl(${config.hue}, 50%, 75%)`, background: `hsl(${config.hue}, 80%, 98%)` }}
                          >
                            <span className="text-xl">{d.quizPassed ? '🏆' : d.allDone ? '📝' : '🔒'}</span>
                            <div className="flex-1 text-left">
                              <div className="font-semibold text-sm">{tt('final_quiz')} {d.quizPassed ? '✅' : ''}</div>
                              <div className="text-[0.65rem] text-foreground-muted">
                                {d.quizPassed ? tt('passed') : !d.allDone ? `${tt('complete_all')} ${d.lessons.length} ${tt('lessons')}` : `15 ${tt('questions')} · 70%`}
                              </div>
                            </div>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom nav */}
        <div className="flex gap-2 mt-6 justify-center">
          <button onClick={() => navigate('/')} className="px-4 py-2 rounded-full border border-border text-sm hover:bg-card transition-colors">
            ← {tt('go_home')}
          </button>
          <button onClick={() => navigate('/dashboard')} className="px-4 py-2 rounded-full border border-border text-sm hover:bg-card transition-colors">
            📊 {tt('progress')}
          </button>
        </div>
      </div>
    </div>
  );
}
