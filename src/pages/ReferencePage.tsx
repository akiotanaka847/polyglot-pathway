import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { GRAMMAR_REF, VOCAB_REF } from '@/data/reference';
import { getLangConfig, LANGUAGES } from '@/data/languages';
import { LEVELS } from '@/data/lessons/index';
import { speakText } from '@/utils/helpers';

export default function ReferencePage() {
  const navigate = useNavigate();
  const { state, tt } = useApp();
  const activeLangs = state.activeLangs || [];
  const refLangs = [...new Set([...activeLangs, ...Object.keys(GRAMMAR_REF), ...Object.keys(VOCAB_REF)])];
  const [lang, setLang] = useState<string>(refLangs[0] || 'jp');
  const [tab, setTab] = useState<'grammar' | 'vocab'>('grammar');
  const [search, setSearch] = useState('');
  const config = getLangConfig(lang);

  const grammarEntries = GRAMMAR_REF[lang] || [];
  const vocabLevels = VOCAB_REF[lang] || {};
  const allVocab = Object.entries(vocabLevels).flatMap(([lvl, entries]) =>
    entries.map(e => ({ ...e, level: lvl }))
  );

  const filteredGrammar = grammarEntries.filter(g =>
    !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.explanation.toLowerCase().includes(search.toLowerCase())
  );

  const filteredVocab = allVocab.filter(v =>
    !search || v.word.toLowerCase().includes(search.toLowerCase()) || v.meaning.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[680px] mx-auto px-4 py-5">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => navigate('/')} className="px-3 py-1 rounded-full border border-border text-sm">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif font-semibold">📚 {tt('reference')}</span>
        </div>

        {/* Language selector */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {refLangs.map(l => {
            const lc = getLangConfig(l);
            return (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-all ${lang === l ? 'border-foreground/40 bg-card shadow-sm' : 'border-border'}`}
              >
                {lc.flag} {lc.nativeName}
              </button>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4">
          <button onClick={() => setTab('grammar')} className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${tab === 'grammar' ? 'bg-foreground text-background' : 'bg-card border border-border'}`}>
            📖 {tt('grammar')}
          </button>
          <button onClick={() => setTab('vocab')} className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${tab === 'vocab' ? 'bg-foreground text-background' : 'bg-card border border-border'}`}>
            🔤 {tt('vocabulary')}
          </button>
        </div>

        {/* Search */}
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={tt('search')}
          className="w-full p-3 border-[1.5px] border-border rounded-xl text-sm bg-card outline-none focus:border-foreground-secondary mb-4"
        />

        {/* Grammar tab */}
        {tab === 'grammar' && (
          <div>
            {filteredGrammar.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : filteredGrammar.map((entry, i) => (
              <div key={i} className="border border-border rounded-[16px] overflow-hidden mb-3 bg-card">
                <div className="px-4 pt-4 pb-2">
                  <div className="font-serif text-lg font-semibold" style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{entry.title}</div>
                </div>
                <div className="px-4 pb-3 text-sm leading-relaxed text-foreground-secondary">
                  {entry.explanation}
                </div>
                <div className="px-4 pb-4">
                  <div className="text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted mb-2">{tt('examples')}</div>
                  {entry.examples.map((ex, j) => (
                    <div key={j} className="flex items-baseline gap-2 text-sm mb-1">
                      <button onClick={() => speakText(ex.text, lang)} className="shrink-0">🔊</button>
                      <span className={`font-semibold ${config.fontClass || ''}`} style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{ex.text}</span>
                      <span className="text-foreground-muted">→ {ex.translation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Vocab tab */}
        {tab === 'vocab' && (
          <div>
            {filteredVocab.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : (
              <div className="border border-border rounded-[16px] overflow-hidden bg-card">
                <div className="divide-y divide-border">
                  {filteredVocab.map((entry, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-background transition-colors">
                      <button onClick={() => speakText(entry.word, lang)} className="text-lg shrink-0">🔊</button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className={`font-semibold text-sm ${config.fontClass || ''}`} style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{entry.word}</span>
                          {entry.reading && <span className="text-[0.72rem] text-foreground-muted">{entry.reading}</span>}
                        </div>
                        <div className="text-[0.78rem] text-foreground-secondary">{entry.meaning}</div>
                        {entry.example && <div className="text-[0.68rem] text-foreground-muted mt-0.5 italic">{entry.example}</div>}
                      </div>
                      <span className="text-[0.62rem] font-bold px-1.5 py-0.5 rounded-md bg-foreground/5 text-foreground-muted shrink-0">{entry.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
