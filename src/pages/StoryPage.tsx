import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { LANGUAGES } from '@/data/languages';
import { STORIES } from '@/data/stories';
import { STORY_I18N_EN } from '@/data/storyI18n';
import { getLangConfig } from '@/data/languages';
import { speakText } from '@/utils/helpers';

function useStoryI18n(storyLang: string, nativeLang: string) {
  // For Spanish native speakers, use inline data (already in Spanish)
  // For English native speakers, use English overlay
  // For others, use English overlay as best fallback
  const useOverlay = nativeLang !== 'es';
  const overlay = useOverlay ? STORY_I18N_EN[storyLang] : null;

  return {
    subtitle: (original: string) => overlay?.subtitle || original,
    chapterTitle: (ci: number, original: string) => overlay?.chapters?.[ci]?.title || original,
    scene: (sceneId: string) => overlay?.scenes?.[sceneId] || null,
  };
}

export default function StoryPage() {
  const navigate = useNavigate();
  const { state, addXP, markStoryDone, earnAchievement, tt } = useApp();
  const activeLangs = [...new Set(state.activeLangs || [])];
  const validLangs = new Set(LANGUAGES.filter(l => l.code !== state.nativeLang).map(l => l.code));
  const storyLangs = [...new Set([...activeLangs, ...Object.keys(STORIES)])].filter(l => STORIES[l] && validLangs.has(l));
  const [lang, setLang] = useState<string>(storyLangs[0] || 'jp');
  const [activeScene, setActiveScene] = useState<{ ci: number; si: number } | null>(null);
  const [quizFb, setQuizFb] = useState<string | null>(null);
  const config = getLangConfig(lang);
  const story = STORIES[lang];
  const i18n = useStoryI18n(lang, state.nativeLang || 'es');

  if (!story) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="text-5xl mb-4">📖</div>
        <h2 className="font-serif text-2xl font-light mb-2">{tt('story_mode')}</h2>
        <p className="text-sm text-foreground-secondary mb-4">{tt('coming_soon')}</p>
        <button onClick={() => navigate('/')} className="px-5 py-2 rounded-full border border-border text-sm">{tt('go_home')}</button>
      </div>
    );
  }

  if (activeScene) {
    const scene = story.chapters[activeScene.ci].scenes[activeScene.si];
    const sceneI18n = i18n.scene(scene.id);

    return (
      <div className="animate-fade-in flex-1 overflow-y-auto">
        <div className="max-w-[620px] mx-auto px-4 py-5">
          <button onClick={() => { setActiveScene(null); setQuizFb(null); }} className="px-3 py-1 rounded-full border border-border text-sm text-foreground-secondary mb-4">← {tt('back')}</button>
          <div className="rounded-[20px] overflow-hidden mb-4" style={{ background: scene.color }}>
            <div className="p-4 flex items-center gap-3.5">
              <span className="text-4xl">{scene.image_emoji}</span>
              <div>
                <div className="font-serif text-lg font-semibold">{scene.title}</div>
                <div className="text-[0.77rem] text-foreground-secondary italic">{sceneI18n?.setting || scene.setting}</div>
              </div>
            </div>
            <div className="px-4 pb-4 space-y-2.5">
              {scene.dialogue.map((d, i) => {
                const isMe = d.speaker === story.protagonist.split(' ')[0];
                const isNarr = d.speaker === 'narrador';
                const translatedTr = sceneI18n?.dialogueTr?.[i] ?? d.tr;
                return (
                  <div key={i} className={`flex gap-2.5 ${isMe ? 'flex-row-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-lg shrink-0 border border-border">{d.avatar}</div>
                    <div className={`max-w-[75%] px-3 py-2 rounded-[14px] text-sm leading-relaxed ${
                      isNarr ? 'bg-gold-light border border-gold rounded-[10px] max-w-full' :
                      isMe ? 'text-card rounded-bl-[14px] rounded-tr-[4px]' :
                      'bg-card border border-border rounded-tl-[4px]'
                    }`} style={isMe && !isNarr ? { background: `hsl(${config.hue}, 70%, 46%)` } : undefined}>
                      <div>{d.text}</div>
                      {translatedTr && <div className="text-[0.72rem] mt-1 opacity-70 italic">{translatedTr}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-3 rounded-r-[10px] rounded-l-none border-l-[3px] text-sm leading-relaxed mb-4" style={{ background: `hsl(${config.hue}, 80%, 96%)`, borderLeftColor: `hsl(${config.hue}, 70%, 46%)` }}>
            📌 {sceneI18n?.lesson || scene.lesson}
          </div>

          <div className="text-[0.72rem] font-bold tracking-widest uppercase text-foreground-muted mb-2">🔤 {tt('vocabulary')} — {tt('listen')}</div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {scene.vocab.map(v => (
              <button key={v} onClick={() => speakText(v, lang)} className="px-2.5 py-1 rounded-full bg-background border border-border text-[0.75rem] hover:shadow-sm transition-colors">
                {v} 🔊
              </button>
            ))}
          </div>

          <div className="bg-card border border-border rounded-[16px] p-4">
            <div className="text-sm font-semibold mb-2.5">❓ {sceneI18n?.quizQ || scene.quiz.q}</div>
            {(sceneI18n?.quizOpts || scene.quiz.opts).map((opt, i) => (
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
            {quizFb === 'correct' && <div className="mt-2 p-2 rounded-lg bg-success-light text-success text-sm">✅ {tt('correct')} +50 XP</div>}
            {quizFb === 'wrong' && <div className="mt-2 p-2 rounded-lg bg-destructive/10 text-destructive text-sm">❌ {tt('try_again')}</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[620px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">📖 {tt('story_mode')}</span>
          <div className="flex gap-1">
            {storyLangs.map(l => {
              const lc = getLangConfig(l);
              return (
                <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded-full border text-sm font-semibold ${lang === l ? 'border-foreground/40 bg-background' : 'border-border'}`}>
                  {lc.flag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[20px] p-5 mb-5 border" style={{ background: `hsl(${config.hue}, 80%, 96%)`, borderColor: `hsl(${config.hue}, 60%, 85%)` }}>
          <div className="text-4xl mb-2">{story.avatar}</div>
          <div className="font-serif text-2xl font-semibold" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{story.protagonist}</div>
          <div className="text-sm text-foreground-secondary mt-1">{i18n.subtitle(story.subtitle)}</div>
        </div>

        {story.chapters.map((ch, ci) => (
          <div key={ci} className="mb-5">
            <div className="text-[0.68rem] font-bold tracking-widest uppercase mb-2 pb-1 border-b border-border" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>
              {tt('chapter')} {ci + 1} — {i18n.chapterTitle(ci, ch.title)} <span className="opacity-60 font-normal">({ch.level})</span>
            </div>
            {ch.scenes.map((sc, si) => {
              const done = state.storyDone.includes(sc.id);
              const scI18n = i18n.scene(sc.id);
              return (
                <button key={sc.id} onClick={() => setActiveScene({ ci, si })} className="w-full flex items-center gap-3 p-3 rounded-xl border border-border mb-2 text-left hover:shadow-sm transition-all" style={{ background: sc.color }}>
                  <span className="text-2xl">{sc.image_emoji}</span>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{sc.title}</div>
                    <div className="text-[0.72rem] text-foreground-secondary">{(scI18n?.setting || sc.setting).substring(0, 60)}...</div>
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
