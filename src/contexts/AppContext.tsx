import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { AppState, Lang } from '@/data/types';
import { RANKS } from '@/data/achievements';

const defaultState: AppState = {
  xp: { jp: 0, fr: 0 },
  prog: {
    jp: { cur: 'N5', done: {}, passed: {} },
    fr: { cur: 'A1', done: {}, passed: {} },
  },
  streak: { count: 0, lastDate: null },
  earned: [],
  fcTotal: 0,
  lesDone: 0,
  totalXp: 0,
  srs: { jp: {}, fr: {} },
  cultRead: [],
  storyDone: [],
  convDone: [],
  dailyXp: 0,
};

interface AppContextType {
  state: AppState;
  addXP: (lang: Lang, amount: number) => void;
  markLessonDone: (lang: Lang, level: string, lessonId: string) => void;
  markQuizPassed: (lang: Lang, level: string) => void;
  unlockNextLevel: (lang: Lang, nextLevel: string) => void;
  checkStreak: () => void;
  earnAchievement: (id: string) => void;
  incrementFC: () => void;
  markStoryDone: (id: string) => void;
  markCultureRead: (id: string) => void;
  markConvDone: (id: string) => void;
  updateSRS: (lang: string, level: string, idx: number, data: { interval: number; ease: number; due: number }) => void;
  getRank: (lang: Lang) => { icon: string; title: string; meaning: string; romaji?: string };
  getRankPct: (lang: Lang) => number;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('kotoba_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultState, ...parsed };
      }
    } catch {}
    return defaultState;
  });

  useEffect(() => {
    try { localStorage.setItem('kotoba_state', JSON.stringify(state)); } catch {}
  }, [state]);

  const addXP = useCallback((lang: Lang, amount: number) => {
    setState(s => ({
      ...s,
      xp: { ...s.xp, [lang]: (s.xp[lang] || 0) + amount },
      totalXp: s.totalXp + amount,
      dailyXp: s.dailyXp + amount,
    }));
  }, []);

  const markLessonDone = useCallback((lang: Lang, level: string, lessonId: string) => {
    setState(s => ({
      ...s,
      lesDone: s.lesDone + 1,
      prog: {
        ...s.prog,
        [lang]: {
          ...s.prog[lang],
          done: {
            ...s.prog[lang].done,
            [level]: { ...s.prog[lang].done[level], [lessonId]: true },
          },
        },
      },
    }));
  }, []);

  const markQuizPassed = useCallback((lang: Lang, level: string) => {
    setState(s => ({
      ...s,
      prog: {
        ...s.prog,
        [lang]: {
          ...s.prog[lang],
          passed: { ...s.prog[lang].passed, [level]: true },
        },
      },
    }));
  }, []);

  const unlockNextLevel = useCallback((lang: Lang, nextLevel: string) => {
    setState(s => ({
      ...s,
      prog: {
        ...s.prog,
        [lang]: { ...s.prog[lang], cur: nextLevel },
      },
    }));
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

  const incrementFC = useCallback(() => {
    setState(s => ({ ...s, fcTotal: s.fcTotal + 1 }));
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

  const updateSRS = useCallback((lang: string, level: string, idx: number, data: { interval: number; ease: number; due: number }) => {
    setState(s => ({
      ...s,
      srs: {
        ...s.srs,
        [lang]: {
          ...s.srs[lang],
          [level]: { ...(s.srs[lang]?.[level] || {}), [idx]: data },
        },
      },
    }));
  }, []);

  const getRank = useCallback((lang: Lang) => {
    const xp = state.xp[lang] || 0;
    const rs = RANKS[lang];
    for (let i = rs.length - 1; i >= 0; i--) {
      if (xp >= rs[i].min) return rs[i];
    }
    return rs[0];
  }, [state.xp]);

  const getRankPct = useCallback((lang: Lang) => {
    const xp = state.xp[lang] || 0;
    const r = getRank(lang);
    if (r.max >= 99999) return 99;
    return Math.min(99, Math.round(((xp - r.min) / (r.max - r.min)) * 100));
  }, [state.xp, getRank]);

  return (
    <AppContext.Provider value={{
      state, addXP, markLessonDone, markQuizPassed, unlockNextLevel,
      checkStreak, earnAchievement, incrementFC, markStoryDone,
      markCultureRead, markConvDone, updateSRS, getRank, getRankPct,
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
