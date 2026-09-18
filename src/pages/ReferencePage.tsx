import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import { GRAMMAR_REF, VOCAB_REF } from '@/data/reference';
import { getLangConfig, LANGUAGES } from '@/data/languages';
import { speakText } from '@/utils/helpers';
import { GrammarEntry } from '@/data/types';
import { translateLessonTitle, translateExplanation, translateOption } from '@/utils/lessonI18n';
import { useAiTranslate } from '@/hooks/useAiTranslate';

const VALID_LANG_CODES = new Set(LANGUAGES.map(l => l.code));

const CATEGORY_ICONS: Record<string, string> = {
  particles: '🔗',
  verbs: '🔄',
  adjectives: '🎨',
  sentence: '📝',
  expressions: '💬',
  advanced: '🎓',
  writing: '✍️',
};

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  es: { particles: 'Partículas', verbs: 'Verbos', adjectives: 'Adjetivos', sentence: 'Estructura', expressions: 'Expresiones', advanced: 'Avanzado', writing: 'Escritura' },
  en: { particles: 'Particles', verbs: 'Verbs', adjectives: 'Adjectives', sentence: 'Structure', expressions: 'Expressions', advanced: 'Advanced', writing: 'Writing' },
  fr: { particles: 'Particules', verbs: 'Verbes', adjectives: 'Adjectifs', sentence: 'Structure', expressions: 'Expressions', advanced: 'Avancé', writing: 'Écriture' },
  pt: { particles: 'Partículas', verbs: 'Verbos', adjectives: 'Adjetivos', sentence: 'Estrutura', expressions: 'Expressões', advanced: 'Avançado', writing: 'Escrita' },
};

function getCatLabel(nativeLang: string, cat: string) {
  return CATEGORY_LABELS[nativeLang]?.[cat] || CATEGORY_LABELS['en']?.[cat] || cat;
}

export default function ReferencePage() {
  const navigate = useNavigate();
  const { state, tt } = useApp();
  const activeLangs = [...new Set(state.activeLangs || [])];

  const refLangs = [...new Set([
    ...activeLangs,
    ...Object.keys(GRAMMAR_REF).filter(k => VALID_LANG_CODES.has(k)),
    ...Object.keys(VOCAB_REF).filter(k => VALID_LANG_CODES.has(k)),
  ])].filter(k => VALID_LANG_CODES.has(k) && k !== state.nativeLang);

  const [lang, setLang] = useState<string>(refLangs[0] || 'jp');
  const [tab, setTab] = useState<'grammar' | 'vocab'>('grammar');
  const [search, setSearch] = useState('');
  const [openLevel, setOpenLevel] = useState<string | null>(null);
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);
  const config = getLangConfig(lang);
  const langConfig = getLangConfig(lang);
  const nativeLang = state.nativeLang || 'es';

  // AI translation for grammar explanations and vocabulary meanings.
  const aiTexts = useMemo(() => {
    if (nativeLang === 'es' || nativeLang === 'en') return [];
    const out: string[] = [];
    (GRAMMAR_REF[lang] || []).forEach(g => {
      out.push(g.title, g.explanation);
      (g.examples || []).forEach(ex => { if (ex.translation) out.push(ex.translation); });
    });
    (VOCAB_REF[lang] || []).forEach(v => { if (v.meaning) out.push(v.meaning); });
    return [...new Set(out.filter(t => typeof t === 'string' && t.length > 3))];
  }, [lang, nativeLang]);
  const { tr: aiTr } = useAiTranslate(aiTexts, nativeLang);
  const ai = (text: string | undefined, base: string) => {
    if (!text) return base;
    const t = aiTr(text);
    return t && t !== text ? t : base;
  };

  // Grammar grouped by level
  const grammarEntries = GRAMMAR_REF[lang] || [];
  const grammarByLevel: Record<string, (GrammarEntry & { idx: number })[]> = {};
  grammarEntries.forEach((g, i) => {
    const lvl = g.level || 'General';
    if (!grammarByLevel[lvl]) grammarByLevel[lvl] = [];
    const matchesSearch = !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.explanation.toLowerCase().includes(search.toLowerCase());
    if (matchesSearch) grammarByLevel[lvl].push({ ...g, idx: i });
  });

  // Vocab
  const vocabLevels = VOCAB_REF[lang] || {};
  const availableVocabLevels = Object.keys(vocabLevels);

  // Level colors gradient
  const levelColors = langConfig.levels.map((_, i, arr) => {
    const t = i / Math.max(arr.length - 1, 1);
    const lightness = 92 - t * 20;
    const saturation = 70 + t * 10;
    return { bg: `hsl(${config.hue}, ${saturation}%, ${lightness}%)`, text: `hsl(${config.hue}, 70%, ${30 + t * 10}%)`, border: `hsl(${config.hue}, 60%, ${70 - t * 15}%)` };
  });

  function getLevelColor(level: string) {
    const idx = langConfig.levels.indexOf(level);
    return idx >= 0 ? levelColors[idx] : { bg: `hsl(${config.hue}, 60%, 94%)`, text: `hsl(${config.hue}, 60%, 40%)`, border: `hsl(${config.hue}, 50%, 75%)` };
  }

  const grammarLevelsWithContent = langConfig.levels.filter(lvl => grammarByLevel[lvl]?.length);
  const vocabLevelsWithContent = availableVocabLevels;

  return (
    <div className="animate-fade-in flex-1 overflow-y-auto">
      <div className="max-w-[680px] mx-auto px-4 py-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <button onClick={() => navigate('/')} className="px-3 py-1.5 rounded-full border border-border text-sm hover:bg-card transition-all">← {tt('go_home')}</button>
          <span className="flex-1 text-center font-serif text-lg font-semibold">📚 {tt('reference')}</span>
        </div>

        {/* Language selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1 scrollbar-hide">
          {refLangs.map(l => {
            const lc = getLangConfig(l);
            const isActive = lang === l;
            return (
              <button
                key={l}
                onClick={() => { setLang(l); setOpenLevel(null); setExpandedEntry(null); }}
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
          <button onClick={() => { setTab('grammar'); setOpenLevel(null); setExpandedEntry(null); }} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 'grammar' ? 'bg-foreground text-background shadow-sm' : 'bg-card border border-border hover:bg-background'}`}>
            📖 {tt('grammar')}
          </button>
          <button onClick={() => { setTab('vocab'); setOpenLevel(null); }} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === 'vocab' ? 'bg-foreground text-background shadow-sm' : 'bg-card border border-border hover:bg-background'}`}>
            🔤 {tt('vocabulary')}
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted">🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={tt('search')}
            className="w-full pl-9 pr-3 py-3 border-2 border-border rounded-xl text-sm bg-card outline-none focus:border-foreground/30 transition-colors"
          />
        </div>

        {/* GRAMMAR TAB - Folder style by level */}
        {tab === 'grammar' && (
          <div className="space-y-3">
            {grammarLevelsWithContent.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : (
              grammarLevelsWithContent.map(level => {
                const entries = grammarByLevel[level] || [];
                const colors = getLevelColor(level);
                const isOpen = openLevel === level;
                const categories = [...new Set(entries.map(e => e.category || 'sentence'))];

                return (
                  <div key={level} className="rounded-2xl overflow-hidden border-2 transition-all" style={{ borderColor: isOpen ? colors.border : 'hsl(var(--border))' }}>
                    {/* Folder header */}
                    <button
                      onClick={() => { setOpenLevel(isOpen ? null : level); setExpandedEntry(null); }}
                      className="w-full px-4 py-4 flex items-center gap-3 transition-all hover:opacity-90"
                      style={{ background: isOpen ? colors.bg : undefined }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 shadow-sm"
                        style={{ background: colors.bg, color: colors.text }}>
                        {isOpen ? '📂' : '📁'}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="font-bold text-sm" style={{ color: colors.text }}>{level}</div>
                        <div className="text-[0.7rem] text-foreground-muted">{entries.length} {tt('grammar').toLowerCase()}</div>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {categories.slice(0, 3).map(cat => (
                          <span key={cat} className="text-[0.6rem] px-1.5 py-0.5 rounded-md font-medium" style={{ background: colors.bg, color: colors.text }}>
                            {CATEGORY_ICONS[cat] || '📝'} {getCatLabel(state.nativeLang, cat)}
                          </span>
                        ))}
                      </div>
                      <span className="text-foreground-muted text-sm ml-1">{isOpen ? '▼' : '▶'}</span>
                    </button>

                    {/* Folder contents */}
                    {isOpen && (
                      <div className="px-3 pb-3 animate-fade-in" style={{ background: `${colors.bg}40` }}>
                        {/* Group by category inside level */}
                        {categories.map(cat => {
                          const catEntries = entries.filter(e => (e.category || 'sentence') === cat);
                          return (
                            <div key={cat} className="mb-3 last:mb-0">
                              <div className="text-[0.65rem] font-bold tracking-widest uppercase px-2 py-2 flex items-center gap-1.5" style={{ color: colors.text }}>
                                <span>{CATEGORY_ICONS[cat] || '📝'}</span>
                                {getCatLabel(state.nativeLang, cat)}
                                <span className="text-foreground-muted font-normal">({catEntries.length})</span>
                              </div>
                              <div className="space-y-1.5">
                                {catEntries.map(entry => {
                                  const isExpanded = expandedEntry === entry.idx;
                                  return (
                                    <div key={entry.idx} className="bg-card rounded-xl overflow-hidden border border-border/60 transition-all hover:shadow-sm">
                                      <button
                                        onClick={() => setExpandedEntry(isExpanded ? null : entry.idx)}
                                        className="w-full px-3 py-2.5 flex items-center gap-2.5 text-left"
                                      >
                                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[0.65rem] shrink-0 font-bold"
                                          style={{ background: colors.bg, color: colors.text }}>
                                          {isExpanded ? '▼' : '▶'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className={`font-semibold text-[0.82rem] truncate ${config.fontClass || ''}`} style={{ color: colors.text }}>
                                            {ai(entry.title, translateLessonTitle(entry.title, state.nativeLang))}
                                          </div>
                                          {!isExpanded && (
                                            <div className="text-[0.68rem] text-foreground-muted truncate mt-0.5">{ai(entry.explanation, translateExplanation(entry.explanation, state.nativeLang)).slice(0, 70)}...</div>
                                          )}
                                        </div>
                                      </button>
                                      {isExpanded && (
                                          <div className="px-3 pb-3 animate-fade-in border-t border-border/40">
                                          <div className="text-[0.8rem] leading-relaxed text-foreground-secondary my-2.5 pl-8">
                                            {ai(entry.explanation, translateExplanation(entry.explanation, state.nativeLang))}
                                          </div>
                                          <div className="pl-8">
                                            <div className="text-[0.62rem] font-bold tracking-widest uppercase text-foreground-muted mb-1.5">{tt('examples')}</div>
                                            <div className="space-y-1">
                                              {entry.examples.map((ex, j) => (
                                                <div key={j} className="flex items-start gap-2 text-[0.8rem] p-2 rounded-lg bg-background/70">
                                                  <button onClick={() => speakText(ex.text, lang)} className="shrink-0 mt-0.5 hover:scale-110 transition-transform">🔊</button>
                                                  <div>
                                                    <span className={`font-semibold ${config.fontClass || ''}`} style={{ color: colors.text }}>{ex.text}</span>
                                                    <div className="text-foreground-muted text-[0.72rem]">→ {ai(ex.translation, translateOption(ex.translation, state.nativeLang))}</div>
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
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* VOCAB TAB - Card folders by level */}
        {tab === 'vocab' && (
          <div className="space-y-3">
            {vocabLevelsWithContent.length === 0 ? (
              <p className="text-sm text-foreground-muted text-center py-8">{tt('coming_soon')}</p>
            ) : (
              vocabLevelsWithContent.map(level => {
                const entries = vocabLevels[level] || [];
                const colors = getLevelColor(level);
                const isOpen = openLevel === level;

                const filteredEntries = entries.filter(v =>
                  !search || v.word.toLowerCase().includes(search.toLowerCase()) || v.meaning.toLowerCase().includes(search.toLowerCase())
                );

                if (search && filteredEntries.length === 0) return null;

                return (
                  <div key={level} className="rounded-2xl overflow-hidden border-2 transition-all" style={{ borderColor: isOpen ? colors.border : 'hsl(var(--border))' }}>
                    {/* Folder header */}
                    <button
                      onClick={() => setOpenLevel(isOpen ? null : level)}
                      className="w-full px-4 py-4 flex items-center gap-3 transition-all hover:opacity-90"
                      style={{ background: isOpen ? colors.bg : undefined }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 shadow-sm"
                        style={{ background: colors.bg, color: colors.text }}>
                        {isOpen ? '📂' : '📁'}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-sm" style={{ color: colors.text }}>{level}</div>
                        <div className="text-[0.7rem] text-foreground-muted">{entries.length} {tt('vocabulary').toLowerCase()}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-border overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: '0%', background: colors.text }} />
                        </div>
                        <span className="text-foreground-muted text-sm">{isOpen ? '▼' : '▶'}</span>
                      </div>
                    </button>

                    {/* Folder contents */}
                    {isOpen && (
                      <div className="animate-fade-in" style={{ background: `${colors.bg}30` }}>
                        <div className="px-3 pb-1 pt-1">
                          <div className="text-[0.68rem] text-foreground-muted px-1">{filteredEntries.length} {tt('vocabulary').toLowerCase()}</div>
                        </div>
                        <div className="divide-y divide-border/50 mx-3 mb-3 bg-card rounded-xl overflow-hidden border border-border/40">
                          {filteredEntries.map((entry, i) => (
                            <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-background/60 transition-colors">
                              <button onClick={() => speakText(entry.word, lang)} className="text-base shrink-0 hover:scale-110 transition-transform">🔊</button>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                  <span className={`font-bold text-[0.82rem] ${config.fontClass || ''}`} style={{ color: colors.text }}>{entry.word}</span>
                                  {entry.reading && <span className="text-[0.68rem] text-foreground-muted">({entry.reading})</span>}
                                </div>
                                <div className="text-[0.75rem] text-foreground-secondary">{ai(entry.meaning, translateOption(entry.meaning, state.nativeLang))}</div>
                                {entry.example && <div className="text-[0.65rem] text-foreground-muted mt-0.5 italic truncate">{entry.example}</div>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
