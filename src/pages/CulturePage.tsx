import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { CULTURE_DATA } from '@/data/culture';
import { CULTURE_I18N } from '@/data/cultureI18n';
import { SLANG_DATA, SlangEntry } from '@/data/slang';
import { getLangConfig } from '@/data/languages';
import { translateLessonText } from '@/utils/lessonI18n';

export default function CulturePage() {
  const navigate = useNavigate();
  const { state, addXP, markCultureRead, earnAchievement, tt } = useApp();
  const activeLangs = state.activeLangs || [];
  const allLangs = [...new Set([...Object.keys(CULTURE_DATA), ...Object.keys(SLANG_DATA)])];
  const cultureLangs = [...new Set([...activeLangs, ...allLangs])].filter(l => (CULTURE_DATA[l]?.length > 0) || (SLANG_DATA[l]?.length > 0));
  const [lang, setLang] = useState<string>(cultureLangs[0] || 'jp');
  const [tab, setTab] = useState<'culture' | 'slang'>('culture');
  const config = getLangConfig(lang);
  const cards = CULTURE_DATA[lang] || [];
  const slangs = SLANG_DATA[lang] || [];
  const nativeLang = state.nativeLang || 'es';
  const overlay = nativeLang !== 'es' ? (CULTURE_I18N[nativeLang] || CULTURE_I18N['en'] || {}) : {};
  const tr = (cardId: string, field: 'title' | 'body' | 'fact', fallback: string) => {
    if (nativeLang === 'es') return fallback;
    return overlay[cardId]?.[field] || CULTURE_I18N['en']?.[cardId]?.[field] || fallback;
  };

  const handleRead = (id: string) => {
    if (!state.cultRead.includes(id)) {
      markCultureRead(id);
      addXP(lang, 20);
      if (state.cultRead.length + 1 >= 5) earnAchievement('culture_5');
    }
  };

  const [expandedSlang, setExpandedSlang] = useState<string | null>(null);

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[620px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">🌍 {tt('culture')}</span>
          <div className="flex gap-1">
            {cultureLangs.map(l => {
              const lc = getLangConfig(l);
              return (
                <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded-full border text-sm font-semibold ${lang === l ? 'border-foreground/40 bg-background' : 'border-border'}`}>
                  {lc.flag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTab('culture')}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${tab === 'culture' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            🌍 {tt('culture_context') || 'Cultura'}
          </button>
          <button
            onClick={() => setTab('slang')}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${tab === 'slang' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            🗣️ Slang
          </button>
        </div>

        {tab === 'culture' && (
          <>
            <h2 className="font-serif text-2xl font-light mb-1">{tt('culture_context')}</h2>
            <p className="text-sm text-foreground-secondary mb-5">{tt('language_lives_in')}</p>

            {cards.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : cards.map(card => {
              const read = state.cultRead.includes(card.id);
              return (
                <div key={card.id} onClick={() => handleRead(card.id)} className="border border-border rounded-[18px] overflow-hidden mb-3.5 bg-card cursor-pointer">
                  <div className="px-4 pt-4 pb-2 flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span>
                    <div>
                      <div className="font-serif text-lg font-semibold">{tr(card.id, 'title', card.title)}</div>
                      {read && <span className="text-[0.65rem] text-success font-semibold">✅ {tt('read')} · +20 XP</span>}
                    </div>
                  </div>
                  <div className="px-4 pb-4 text-sm leading-relaxed text-foreground-secondary">
                    {tr(card.id, 'body', card.body)}
                    <div className="mt-2.5 p-2.5 rounded-lg bg-gold-light text-sm border-l-[3px] border-l-gold">
                      <span className="font-bold">💡 {tt('fun_fact')}: </span>{tr(card.id, 'fact', card.fact)}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}

        {tab === 'slang' && (
          <>
            <h2 className="font-serif text-2xl font-light mb-1">🗣️ Slang · {config.flag} {config.nativeName}</h2>
            <p className="text-sm text-foreground-secondary mb-5">{tt('slang_subtitle')}</p>

            {slangs.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : slangs.map((s: SlangEntry) => {
              const isOpen = expandedSlang === s.id;
              const read = state.cultRead.includes(s.id);
              return (
                <div
                  key={s.id}
                  onClick={() => {
                    setExpandedSlang(isOpen ? null : s.id);
                    handleRead(s.id);
                  }}
                  className="border border-border rounded-[18px] overflow-hidden mb-3 bg-card cursor-pointer transition-all"
                >
                  <div className="px-4 py-3.5 flex items-center gap-3">
                    <span className="text-2xl">🗯️</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-base font-bold truncate">{s.word}</div>
                      <div className="text-sm text-foreground-secondary">{translateLessonText(s.meaning, state.nativeLang)}</div>
                    </div>
                    {read && <span className="text-xs text-success">✅</span>}
                    <span className={`text-xs text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                  </div>
                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-border/50 pt-3 space-y-2">
                      <div className="p-2.5 rounded-lg bg-accent/30 text-sm">
                        <span className="font-bold">💬 {tt('example_label')}: </span>
                        <span className="italic">{s.example}</span>
                      </div>
                      {s.literal && (
                        <div className="p-2.5 rounded-lg bg-gold-light text-sm border-l-[3px] border-l-gold">
                          <span className="font-bold">📝 {tt('origin_label')}: </span>{translateLessonText(s.literal, state.nativeLang)}
                        </div>
                      )}
                      <div className="text-[0.65rem] text-muted-foreground text-right">+20 XP</div>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
