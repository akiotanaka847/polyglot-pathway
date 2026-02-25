import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { STORIES } from '@/data/stories';
import { Lang } from '@/data/types';
import { speakText } from '@/utils/helpers';

export default function StoryPage() {
  const navigate = useNavigate();
  const { state, addXP, markStoryDone, earnAchievement } = useApp();
  const [lang, setLang] = useState<Lang>('jp');
  const [activeScene, setActiveScene] = useState<{ ci: number; si: number } | null>(null);
  const [quizFb, setQuizFb] = useState<string | null>(null);
  const isJp = lang === 'jp';
  const story = STORIES[lang];

  if (activeScene) {
    const scene = story.chapters[activeScene.ci].scenes[activeScene.si];
    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[620px] mx-auto px-4 py-5">
          <button onClick={() => { setActiveScene(null); setQuizFb(null); }} className="px-3 py-1 rounded-full border border-border text-sm text-foreground-secondary mb-4">← Volver</button>

          <div className="rounded-[20px] overflow-hidden mb-4" style={{ background: scene.color }}>
            <div className="p-4 flex items-center gap-3.5">
              <span className="text-4xl">{scene.image_emoji}</span>
              <div>
                <div className="font-serif text-lg font-semibold">{scene.title}</div>
                <div className="text-[0.77rem] text-foreground-secondary italic">{scene.setting}</div>
              </div>
            </div>
            <div className="px-4 pb-4 space-y-2.5">
              {scene.dialogue.map((d, i) => {
                const isMe = d.speaker === (isJp ? 'Kenji' : 'Léa');
                const isNarr = d.speaker === 'narrador';
                return (
                  <div key={i} className={`flex gap-2.5 ${isMe ? 'flex-row-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-lg shrink-0 border border-border">{d.avatar}</div>
                    <div className={`max-w-[75%] px-3 py-2 rounded-[14px] text-sm leading-relaxed ${
                      isNarr ? 'bg-gold-light border border-gold rounded-[10px] max-w-full' :
                      isMe ? `${isJp ? 'bg-jp' : 'bg-fr'} text-card rounded-bl-[14px] rounded-tr-[4px]` :
                      'bg-card border border-border rounded-tl-[4px]'
                    }`}>
                      <div>{d.text}</div>
                      {d.tr && <div className="text-[0.72rem] mt-1 opacity-70 italic">{d.tr}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`p-3 rounded-r-[10px] rounded-l-none border-l-[3px] text-sm leading-relaxed mb-4 ${isJp ? 'bg-jp-light border-l-jp' : 'bg-fr-light border-l-fr'}`}>
            📌 {scene.lesson}
          </div>

          <div className="text-[0.72rem] font-bold tracking-widest uppercase text-foreground-muted mb-2">🔤 Vocabulario — toca para escuchar</div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {scene.vocab.map(v => (
              <button key={v} onClick={() => speakText(v, lang)} className="px-2.5 py-1 rounded-full bg-background border border-border text-[0.75rem] font-serif-jp hover:bg-jp-light hover:border-jp transition-colors">
                {v} 🔊
              </button>
            ))}
          </div>

          <div className="bg-card border border-border rounded-[16px] p-4">
            <div className="text-sm font-semibold mb-2.5">❓ {scene.quiz.q}</div>
            {scene.quiz.opts.map((opt, i) => (
              <button key={i} onClick={() => {
                if (i === scene.quiz.ans) {
                  setQuizFb('correct');
                  addXP(lang, 50);
                  markStoryDone(scene.id);
                  earnAchievement('story_chapter');
                } else {
                  setQuizFb('wrong');
                }
              }} className="block w-full text-left px-3 py-2 rounded-xl border border-border bg-card text-sm mb-1.5 hover:bg-background transition-colors">
                {opt}
              </button>
            ))}
            {quizFb === 'correct' && <div className="mt-2 p-2 rounded-lg bg-success-light text-success text-sm">✅ ¡Correcto! +50 XP</div>}
            {quizFb === 'wrong' && <div className="mt-2 p-2 rounded-lg bg-destructive/10 text-destructive text-sm">❌ Inténtalo de nuevo</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[620px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← Inicio</button>
          <span className="flex-1 text-center font-serif font-semibold">📖 Modo Historia</span>
          <button onClick={() => setLang('jp')} className={`px-3 py-1 rounded-full border text-sm font-semibold ${isJp ? 'bg-jp-light text-jp border-jp' : 'border-border'}`}>🇯🇵</button>
          <button onClick={() => setLang('fr')} className={`px-3 py-1 rounded-full border text-sm font-semibold ${!isJp ? 'bg-fr-light text-fr border-fr' : 'border-border'}`}>🇫🇷</button>
        </div>

        <div className={`rounded-[20px] p-5 mb-5 border ${isJp ? 'bg-jp-light border-jp/15' : 'bg-fr-light border-fr/15'}`}>
          <div className="text-4xl mb-2">{story.avatar}</div>
          <div className={`font-serif text-2xl font-semibold ${isJp ? 'text-jp' : 'text-fr'}`}>{story.protagonist}</div>
          <div className="text-sm text-foreground-secondary mt-1">{story.subtitle}</div>
        </div>

        {story.chapters.map((ch, ci) => (
          <div key={ci} className="mb-5">
            <div className={`text-[0.68rem] font-bold tracking-widest uppercase mb-2 pb-1 border-b border-border ${isJp ? 'text-jp' : 'text-fr'}`}>
              Capítulo {ci + 1} — {ch.title} <span className="opacity-60 font-normal">({ch.level})</span>
            </div>
            {ch.scenes.map((sc, si) => {
              const done = state.storyDone.includes(sc.id);
              return (
                <button key={sc.id} onClick={() => setActiveScene({ ci, si })} className="w-full flex items-center gap-3 p-3 rounded-xl border border-border mb-2 text-left hover:shadow-sm transition-all" style={{ background: sc.color }}>
                  <span className="text-2xl">{sc.image_emoji}</span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{sc.title}</div>
                    <div className="text-[0.72rem] text-foreground-secondary">{sc.setting.substring(0, 60)}...</div>
                  </div>
                  <span>{done ? '✅' : '▶️'}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
