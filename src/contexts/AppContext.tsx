import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { AppState, Lang } from '@/data/types';
import { RANKS } from '@/data/achievements';
import { getLangConfig, t } from '@/data/languages';

const defaultState: AppState = {
  nativeLang: '',
  activeLangs: [],
  xp: {},
  prog: {},
  streak: { count: 0, lastDate: null },
  earned: [],
  fcTotal: 0,
  lesDone: 0,
  totalXp: 0,
  srs: {},
  cultRead: [],
  storyDone: [],
  convDone: [],
  dailyXp: 0,
};

function migrateState(parsed: any): AppState {
  const s = { ...defaultState, ...parsed };
  // Migrate old jp/fr fixed structure
  if (parsed.xp && typeof parsed.xp.jp === 'number' && !parsed.activeLangs) {
    s.activeLangs = [];
    if (parsed.xp.jp > 0) s.activeLangs.push('jp');
    if (parsed.xp.fr > 0) s.activeLangs.push('fr');
  }
  if (parsed.prog && parsed.prog.jp && !s.prog.jp) {
    s.prog.jp = parsed.prog.jp;
  }
  if (parsed.prog && parsed.prog.fr && !s.prog.fr) {
    s.prog.fr = parsed.prog.fr;
  }
  if (!s.nativeLang) s.nativeLang = '';
  if (!s.activeLangs) s.activeLangs = [];
  // Always deduplicate activeLangs
  s.activeLangs = [...new Set(s.activeLangs)];
  return s;
}

function ensureLangProg(state: AppState, lang: string): AppState {
  if (state.prog[lang]) return state;
  const config = getLangConfig(lang);
  return {
    ...state,
    prog: {
      ...state.prog,
      [lang]: { cur: config.levels[0], done: {}, passed: {} },
    },
    xp: { ...state.xp, [lang]: state.xp[lang] || 0 },
  };
}

interface AppContextType {
  state: AppState;
  setNativeLang: (code: string) => void;
  addActiveLang: (code: string) => void;
  removeActiveLang: (code: string) => void;
  addXP: (lang: Lang, amount: number) => void;
  markLessonDone: (lang: Lang, level: string, lessonId: string) => void;
  markQuizPassed: (lang: Lang, level: string) => void;
  unlockNextLevel: (lang: Lang, nextLevel: string) => void;
  checkStreak: () => void;
  earnAchievement: (id: string) => void;
  
  markStoryDone: (id: string) => void;
  markCultureRead: (id: string) => void;
  markConvDone: (id: string) => void;
  
  getRank: (lang: Lang) => { icon: string; title: string; meaning: string; romaji?: string };
  getRankPct: (lang: Lang) => number;
  tt: (key: string) => string;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('kotoba_state');
      if (saved) return migrateState(JSON.parse(saved));
    } catch {}
    return defaultState;
  });

  useEffect(() => {
    try { localStorage.setItem('kotoba_state', JSON.stringify(state)); } catch {}
  }, [state]);

  // Import t from languages lazily to avoid circular deps
  const tt = useCallback((key: string) => {
    return t(key, state.nativeLang || 'es');
  }, [state.nativeLang]);

  const setNativeLang = useCallback((code: string) => {
    setState(s => ({ ...s, nativeLang: code }));
  }, []);

  const addActiveLang = useCallback((code: string) => {
    setState(s => {
      // Always deduplicate
      const deduped = [...new Set(s.activeLangs)].filter(c => c && c !== code);
      const ns = { ...s, activeLangs: [...deduped, code] };
      return ensureLangProg(ns, code);
    });
  }, []);

  const removeActiveLang = useCallback((code: string) => {
    setState(s => ({
      ...s,
      activeLangs: s.activeLangs.filter(l => l !== code),
    }));
  }, []);

  const addXP = useCallback((lang: Lang, amount: number) => {
    setState(s => ({
      ...s,
      xp: { ...s.xp, [lang]: (s.xp[lang] || 0) + amount },
      totalXp: s.totalXp + amount,
      dailyXp: s.dailyXp + amount,
    }));
  }, []);

  const markLessonDone = useCallback((lang: Lang, level: string, lessonId: string) => {
    setState(s => {
      const langProg = s.prog[lang] || { cur: level, done: {}, passed: {} };
      return {
        ...s,
        lesDone: s.lesDone + 1,
        prog: {
          ...s.prog,
          [lang]: {
            ...langProg,
            done: {
              ...langProg.done,
              [level]: { ...langProg.done[level], [lessonId]: true },
            },
          },
        },
      };
    });
  }, []);

  const markQuizPassed = useCallback((lang: Lang, level: string) => {
    setState(s => {
      const langProg = s.prog[lang] || { cur: level, done: {}, passed: {} };
      return {
        ...s,
        prog: {
          ...s.prog,
          [lang]: {
            ...langProg,
            passed: { ...langProg.passed, [level]: true },
          },
        },
      };
    });
  }, []);

  const unlockNextLevel = useCallback((lang: Lang, nextLevel: string) => {
    setState(s => {
      const langProg = s.prog[lang] || { cur: nextLevel, done: {}, passed: {} };
      return {
        ...s,
        prog: {
          ...s.prog,
          [lang]: { ...langProg, cur: nextLevel },
        },
      };
    });
  }, []);

  const checkStreak = useCallback(() => {
    const today = new Date().toDateString();
    setState(s => {
      if (s.streak.lastDate === today) return s;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const count = s.streak.lastDate === yesterday ? (s.streak.count || 0) + 1 : 1;
      return { ...s, streak: { count, lastDate: today } };
    });
  }, []);

  const earnAchievement = useCallback((id: string) => {
    setState(s => {
      if (s.earned.includes(id)) return s;
      return { ...s, earned: [...s.earned, id] };
    });
  }, []);


  const markStoryDone = useCallback((id: string) => {
    setState(s => {
      if (s.storyDone.includes(id)) return s;
      return { ...s, storyDone: [...s.storyDone, id] };
    });
  }, []);

  const markCultureRead = useCallback((id: string) => {
    setState(s => {
      if (s.cultRead.includes(id)) return s;
      return { ...s, cultRead: [...s.cultRead, id] };
    });
  }, []);

  const markConvDone = useCallback((id: string) => {
    setState(s => {
      if (s.convDone.includes(id)) return s;
      return { ...s, convDone: [...s.convDone, id] };
    });
  }, []);


  const getRank = useCallback((lang: Lang) => {
    const xp = state.xp[lang] || 0;
    const rs = RANKS[lang] || RANKS._default || [];
    for (let i = rs.length - 1; i >= 0; i--) {
      if (xp >= rs[i].min) return rs[i];
    }
    return rs[0] || { icon: '🗺️', title: 'Traveler', meaning: 'Beginner', min: 0, max: 199 };
  }, [state.xp]);

  const getRankPct = useCallback((lang: Lang) => {
    const xp = state.xp[lang] || 0;
    const r = getRank(lang);
    if (r.max >= 99999) return 99;
    return Math.min(99, Math.round(((xp - r.min) / (r.max - r.min)) * 100));
  }, [state.xp, getRank]);

  return (
    <AppContext.Provider value={{
      state, setNativeLang, addActiveLang, removeActiveLang,
      addXP, markLessonDone, markQuizPassed, unlockNextLevel,
      checkStreak, earnAchievement, markStoryDone,
      markCultureRead, markConvDone, getRank, getRankPct, tt,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
