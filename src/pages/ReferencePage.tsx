import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { GRAMMAR_REF, VOCAB_REF } from '@/data/reference';
import { getLangConfig, LANGUAGES } from '@/data/languages';
import { speakText } from '@/utils/helpers';

const VALID_LANG_CODES = new Set(LANGUAGES.map(l => l.code));

export default function ReferencePage() {
  const navigate = useNavigate();
  const { state, tt } = useApp();
  const activeLangs = [...new Set(state.activeLangs || [])];
  
  // Only show languages that exist in the LANGUAGES config (filter out removed ones)
  const refLangs = [...new Set([
    ...activeLangs,
    ...Object.keys(GRAMMAR_REF).filter(k => VALID_LANG_CODES.has(k)),
    ...Object.keys(VOCAB_REF).filter(k => VALID_LANG_CODES.has(k)),
  ])].filter(k => VALID_LANG_CODES.has(k) && k !== state.nativeLang);

  const [lang, setLang] = useState<string>(refLangs[0] || 'jp');
  const [tab, setTab] = useState<'grammar' | 'vocab'>('grammar');
  const [search, setSearch] = useState('');
  const [expandedGrammar, setExpandedGrammar] = useState<number | null>(null);
  const [vocabLevel, setVocabLevel] = useState<string>('all');
  const config = getLangConfig(lang);

  const grammarEntries = GRAMMAR_REF[lang] || [];
  const vocabLevels = VOCAB_REF[lang] || {};
  const availableVocabLevels = Object.keys(vocabLevels);
  const allVocab = (vocabLevel === 'all'
    ? Object.entries(vocabLevels).flatMap(([lvl, entries]) => entries.map(e => ({ ...e, level: lvl })))
    : (vocabLevels[vocabLevel] || []).map(e => ({ ...e, level: vocabLevel }))
  );

  const filteredGrammar = grammarEntries.filter(g =>
    !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.explanation.toLowerCase().includes(search.toLowerCase())
  );

  const filteredVocab = allVocab.filter(v =>
    !search || v.word.toLowerCase().includes(search.toLowerCase()) || v.meaning.toLowerCase().includes(search.toLowerCase())
  );

  // Group grammar by category
  const grammarCategories = filteredGrammar.reduce((acc, entry, idx) => {
    const isVerb = /verb|conjugat|conjug|спряж|تصريف|動詞|동사/i.test(entry.title);
    const isParticle = /partícula|particle|助詞|조사/i.test(entry.title);
    const cat = isVerb ? '🔄 Verbos' : isParticle ? '🔗 Partículas' : '📐 Gramática';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({ ...entry, originalIdx: idx });
    return acc;
  }, {} as Record<string, (typeof filteredGrammar[0] & { originalIdx: number })[]>);

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[680px] mx-auto px-4 py-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => navigate('/')} className="px-3 py-1.5 rounded-full border border-border text-sm hover:bg-card transition-all">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif text-lg font-semibold">📚 {tt('reference')}</span>
        </div>

        {/* Language selector - horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1 scrollbar-hide">
          {refLangs.map(l => {
            const lc = getLangConfig(l);
            const isActive = lang === l;
            return (
              <button
                key={l}
                onClick={() => { setLang(l); setExpandedGrammar(null); setVocabLevel('all'); }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  isActive ? 'shadow-md -translate-y-0.5' : 'border-border hover:border-foreground/20'
                }`}
                style={isActive ? { borderColor: `hsl(${lc.hue}, 60%, 60%)`, background: `hsl(${lc.hue}, 80%, 96%)` } : undefined}
              >
                <span className="text-lg">{lc.flag}</span>
                <span>{lc.nativeName}</span>
              </button>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-4">
          <button onClick={() => setTab('grammar')} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 'grammar' ? 'bg-foreground text-background shadow-sm' : 'bg-card border border-border hover:bg-background'}`}>
            📖 {tt('grammar')}
          </button>
          <button onClick={() => setTab('vocab')} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 'vocab' ? 'bg-foreground text-background shadow-sm' : 'bg-card border border-border hover:bg-background'}`}>
            🔤 {tt('vocabulary')}
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted">🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={tt('search')}
            className="w-full pl-9 pr-3 py-3 border-2 border-border rounded-xl text-sm bg-card outline-none focus:border-foreground/30 transition-colors"
          />
        </div>

        {/* Grammar tab - with collapsible cards organized by category */}
        {tab === 'grammar' && (
          <div>
            {filteredGrammar.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : (
              Object.entries(grammarCategories).map(([category, entries]) => (
                <div key={category} className="mb-5">
                  <div className="text-xs font-bold tracking-widest uppercase text-foreground-muted mb-2 px-1">{category}</div>
                  {entries.map((entry) => {
                    const isExpanded = expandedGrammar === entry.originalIdx;
                    return (
                      <div key={entry.originalIdx} className="border-2 border-border rounded-2xl overflow-hidden mb-2.5 bg-card transition-all hover:border-foreground/15">
                        <button
                          onClick={() => setExpandedGrammar(isExpanded ? null : entry.originalIdx)}
                          className="w-full px-4 py-3.5 flex items-center gap-3 text-left"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0"
                            style={{ background: `hsl(${config.hue}, 80%, 94%)`, color: `hsl(${config.hue}, 70%, 40%)` }}>
                            {isExpanded ? '▼' : '▶'}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-[0.9rem] truncate ${config.fontClass || ''}`} style={{ color: `hsl(${config.hue}, 70%, 35%)` }}>
                              {entry.title}
                            </div>
                            {!isExpanded && (
                              <div className="text-[0.72rem] text-foreground-muted truncate mt-0.5">{entry.explanation.slice(0, 80)}...</div>
                            )}
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4 animate-fade-in">
                            <div className="text-sm leading-relaxed text-foreground-secondary mb-3 pl-11">
                              {entry.explanation}
                            </div>
                            <div className="pl-11">
                              <div className="text-[0.68rem] font-bold tracking-widest uppercase text-foreground-muted mb-2">{tt('examples')}</div>
                              <div className="space-y-1.5">
                                {entry.examples.map((ex, j) => (
                                  <div key={j} className="flex items-start gap-2 text-sm p-2 rounded-lg bg-background">
                                    <button onClick={() => speakText(ex.text, lang)} className="shrink-0 mt-0.5 hover:scale-110 transition-transform">🔊</button>
                                    <div>
                                      <span className={`font-semibold ${config.fontClass || ''}`} style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{ex.text}</span>
                                      <div className="text-foreground-muted text-[0.78rem]">→ {ex.translation}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        )}

        {/* Vocab tab - with level filter */}
        {tab === 'vocab' && (
          <div>
            {/* Level filter pills */}
            {availableVocabLevels.length > 1 && (
              <div className="flex gap-1.5 flex-wrap mb-3">
                <button
                  onClick={() => setVocabLevel('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${vocabLevel === 'all' ? 'bg-foreground text-background' : 'bg-card border border-border'}`}
                >
                  Todos
                </button>
                {availableVocabLevels.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setVocabLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${vocabLevel === lvl ? 'text-background' : 'bg-card border border-border'}`}
                    style={vocabLevel === lvl ? { background: `hsl(${config.hue}, 70%, 46%)` } : undefined}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            )}

            {filteredVocab.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : (
              <>
                <div className="text-xs text-foreground-muted mb-2 px-1">{filteredVocab.length} palabras</div>
                <div className="border-2 border-border rounded-2xl overflow-hidden bg-card">
                  <div className="divide-y divide-border">
                    {filteredVocab.map((entry, i) => (
                      <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-background transition-colors">
                        <button onClick={() => speakText(entry.word, lang)} className="text-lg shrink-0 hover:scale-110 transition-transform">🔊</button>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className={`font-bold text-sm ${config.fontClass || ''}`} style={{ color: `hsl(${config.hue}, 70%, 40%)` }}>{entry.word}</span>
                            {entry.reading && <span className="text-[0.72rem] text-foreground-muted">({entry.reading})</span>}
                          </div>
                          <div className="text-[0.78rem] text-foreground-secondary">{entry.meaning}</div>
                          {entry.example && <div className="text-[0.68rem] text-foreground-muted mt-0.5 italic">{entry.example}</div>}
                        </div>
                        <span className="text-[0.6rem] font-bold px-2 py-1 rounded-lg shrink-0"
                          style={{ background: `hsl(${config.hue}, 80%, 94%)`, color: `hsl(${config.hue}, 70%, 40%)` }}>
                          {entry.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
