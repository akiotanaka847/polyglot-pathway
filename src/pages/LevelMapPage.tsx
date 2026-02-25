import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LESSON_DATA, LEVELS } from '@/data/lessons';
import { QUIZ_DATA } from '@/data/quizzes';
import { getLangConfig } from '@/data/languages';
import { useState } from 'react';

export default function LevelMapPage() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { state, tt, addActiveLang } = useApp();
  const l = lang || 'jp';
  const config = getLangConfig(l);
  const levels = LEVELS[l] || config.levels;
  const prog = state.prog[l] || { cur: levels[0], done: {}, passed: {} };
  const [openLevels, setOpenLevels] = useState<Record<string, boolean>>({ [levels[0]]: true });

  // Ensure this language is active
  if (!state.activeLangs.includes(l)) {
    addActiveLang(l);
  }

  const toggleLevel = (lvl: string) => {
    setOpenLevels(p => ({ ...p, [lvl]: !p[lvl] }));
  };

  const icons: Record<string, string> = { vocab: '📝', grammar: '📖', reading: '📚', writing: '✍️' };

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[740px] mx-auto p-5 lg:p-7">
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.71rem] font-semibold mb-3"
          style={{ background: `hsl(${config.hue}, 80%, 96%)`, color: `hsl(${config.hue}, 70%, 40%)` }}
        >
          {config.flag} {config.nativeName}
        </div>
        <h2 className="font-serif text-3xl font-light mb-1">{tt('learning_path')}</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          {tt('complete_lessons')} {tt('unlock_quiz')}
        </p>

        <div className="flex flex-col gap-2">
          {levels.map((lvl, idx) => {
            const unlocked = idx === 0 || prog.passed[levels[idx - 1]];
            const lessons = LESSON_DATA[l]?.[lvl] || [];
            const doneLessons = prog.done[lvl] || {};
            const doneCount = Object.keys(doneLessons).length;
            const pct = lessons.length > 0 ? Math.round((doneCount / lessons.length) * 100) : 0;
            const quizAvail = (QUIZ_DATA[l]?.[lvl] || []).length > 0;
            const quizPassed = prog.passed[lvl];
            const allDone = lessons.length > 0 && lessons.every(les => doneLessons[les.id]);

            return (
              <div key={lvl} className={`border-[1.5px] rounded-[16px] overflow-hidden ${unlocked ? '' : 'border-border opacity-55'}`}
                style={unlocked ? { borderColor: `hsl(${config.hue}, 60%, 60%)` } : undefined}
              >
                <button
                  onClick={() => unlocked && toggleLevel(lvl)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 bg-background hover:bg-card transition-colors text-left"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-serif text-base font-bold"
                    style={unlocked ? { background: `hsl(${config.hue}, 80%, 96%)`, color: `hsl(${config.hue}, 70%, 40%)` } : undefined}
                  >
                    {lvl}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{lvl} — {lessons.length} {tt('lessons')}</div>
                    <div className="text-[0.7rem] text-foreground-muted">{doneCount}/{lessons.length} {tt('completed')}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-[0.68rem] text-foreground-muted">{pct}%</div>
                    <div className="w-[68px] h-1 bg-border rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `hsl(${config.hue}, 70%, 46%)` }} />
                    </div>
                  </div>
                </button>

                {openLevels[lvl] && unlocked && (
                  <div className="px-3 pb-3">
                    {lessons.length === 0 ? (
                      <p className="text-sm text-foreground-muted px-3 py-2">📅 {tt('coming_soon')}</p>
                    ) : (
                      lessons.map((les, i) => {
                        const isDone = doneLessons[les.id];
                        return (
                          <button
                            key={les.id}
                            onClick={() => navigate(`/lesson/${l}/${lvl}/${i}`)}
                            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-background border border-transparent hover:border-border transition-all text-left mb-1"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${isDone ? 'bg-success-light' : 'bg-background'}`}>
                              {isDone ? '✅' : icons[les.type] || '📝'}
                            </div>
                            <div className="flex-1">
                              <div className="text-[0.83rem] font-medium">{les.title}</div>
                              <div className="text-[0.68rem] text-foreground-muted">{les.steps.length} {tt('steps')}</div>
                            </div>
                            <div className={`text-[0.7rem] ${isDone ? 'text-success' : 'text-foreground-muted'}`}>
                              {isDone ? `${tt('completed')} ✓` : tt('start')}
                            </div>
                          </button>
                        );
                      })
                    )}

                    {quizAvail && (
                      <button
                        onClick={() => allDone && navigate(`/quiz/${l}/${lvl}`)}
                        disabled={!allDone}
                        className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-[1.5px] border-dashed mt-2 transition-all ${!allDone ? 'opacity-45 cursor-not-allowed' : 'hover:bg-card cursor-pointer'}`}
                        style={{ borderColor: `hsl(${config.hue}, 50%, 75%)`, background: `hsl(${config.hue}, 80%, 98%)` }}
                      >
                        <div className="text-xl">{quizPassed ? '🏆' : allDone ? '📝' : '🔒'}</div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-[0.82rem]">{tt('final_quiz')} — {lvl} {quizPassed ? '✅' : ''}</div>
                          <div className="text-[0.68rem] text-foreground-muted">
                            {quizPassed ? tt('passed') : !allDone ? `${tt('complete_all')} ${lessons.length} ${tt('lessons')}` : `15 ${tt('questions')} · 60s · 70%`}
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-4">
          <button onClick={() => navigate('/')} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground-secondary hover:border-foreground transition-colors">
            ← {tt('go_home')}
          </button>
          <button onClick={() => navigate('/dashboard')} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground-secondary hover:border-foreground transition-colors">
            📊 {tt('progress')}
          </button>
          <button onClick={() => navigate('/reference')} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground-secondary hover:border-foreground transition-colors">
            📚 {tt('reference')}
          </button>
        </div>
      </div>
    </div>
  );
}
