import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LESSON_DATA, LEVELS } from '@/data/lessons';
import { QUIZ_DATA } from '@/data/quizzes';
import { Lang } from '@/data/types';
import { useState } from 'react';

export default function LevelMapPage() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { state } = useApp();
  const l = (lang || 'jp') as Lang;
  const isJp = l === 'jp';
  const levels = LEVELS[l] || [];
  const prog = state.prog[l];
  const [openLevels, setOpenLevels] = useState<Record<string, boolean>>({ [levels[0]]: true });

  const toggleLevel = (lvl: string) => {
    setOpenLevels(p => ({ ...p, [lvl]: !p[lvl] }));
  };

  const icons: Record<string, string> = { vocab: '📝', grammar: '📖', reading: '📚', writing: '✍️' };

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[740px] mx-auto p-5 lg:p-7">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.71rem] font-semibold mb-3 ${isJp ? 'bg-jp-light text-jp' : 'bg-fr-light text-fr'}`}>
          {isJp ? '🇯🇵 Japonés' : '🇫🇷 Francés'}
        </div>
        <h2 className="font-serif text-3xl font-light mb-1">Ruta de aprendizaje</h2>
        <p className="text-sm text-foreground-muted leading-relaxed mb-5">
          Completa las lecciones de cada nivel y supera el quiz final (≥70%) para desbloquear el siguiente.
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
            const allDone = lessons.length > 0 && lessons.every(l => doneLessons[l.id]);

            return (
              <div key={lvl} className={`border-[1.5px] rounded-[16px] overflow-hidden ${unlocked ? (isJp ? 'border-jp' : 'border-fr') : 'border-border opacity-55'}`}>
                <button
                  onClick={() => unlocked && toggleLevel(lvl)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 bg-background hover:bg-card transition-colors text-left"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif text-base font-bold ${unlocked ? (isJp ? 'bg-jp-light text-jp' : 'bg-fr-light text-fr') : 'bg-muted text-foreground-muted'}`}>
                    {lvl}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{lvl} — {lessons.length} lecciones</div>
                    <div className="text-[0.7rem] text-foreground-muted">{doneCount}/{lessons.length} completadas</div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-[0.68rem] text-foreground-muted">{pct}%</div>
                    <div className="w-[68px] h-1 bg-border rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${isJp ? 'bg-jp' : 'bg-fr'}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </button>

                {openLevels[lvl] && unlocked && (
                  <div className="px-3 pb-3">
                    {lessons.length === 0 ? (
                      <p className="text-sm text-foreground-muted px-3 py-2">📅 Próximamente...</p>
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
                              <div className="text-[0.68rem] text-foreground-muted">{les.steps.length} pasos</div>
                            </div>
                            <div className={`text-[0.7rem] ${isDone ? 'text-success' : 'text-foreground-muted'}`}>
                              {isDone ? 'Completada ✓' : 'Empezar'}
                            </div>
                          </button>
                        );
                      })
                    )}

                    {/* Quiz row */}
                    {quizAvail && (
                      <button
                        onClick={() => allDone && navigate(`/quiz/${l}/${lvl}`)}
                        disabled={!allDone}
                        className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl border-[1.5px] border-dashed mt-2 transition-all ${
                          isJp ? 'border-jp/30 bg-gradient-to-br from-jp/[0.07] to-jp/[0.02]' : 'border-fr/30 bg-gradient-to-br from-fr/[0.07] to-fr/[0.02]'
                        } ${!allDone ? 'opacity-45 cursor-not-allowed' : 'hover:bg-jp-light cursor-pointer'}`}
                      >
                        <div className="text-xl">{quizPassed ? '🏆' : allDone ? '📝' : '🔒'}</div>
                        <div className="flex-1 text-left">
                          <div className="font-semibold text-[0.82rem]">Quiz Final — {lvl} {quizPassed ? '✅' : ''}</div>
                          <div className="text-[0.68rem] text-foreground-muted">
                            {quizPassed ? 'Superado — Puedes repetirlo' : !allDone ? `Completa las ${lessons.length} lecciones` : '15 preguntas · 60 seg/pregunta · Mínimo 70%'}
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
            ← Inicio
          </button>
          <button onClick={() => navigate('/dashboard')} className="px-3 py-1.5 rounded-full border border-border text-sm text-foreground-secondary hover:border-foreground transition-colors">
            📊 Mi progreso
          </button>
        </div>
      </div>
    </div>
  );
}
