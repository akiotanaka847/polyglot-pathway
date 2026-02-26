export type Lang = string;

export interface TheoryStep {
  t: 'th';
  char: string;
  rd: string;
  mn: string;
  note: string;
  ex?: { j?: string; f?: string; w?: string; m: string }[];
}

export interface MCStep {
  t: 'mc';
  q: string;
  opts: string[];
  ans: number;
}

export interface TextStep {
  t: 'tx';
  q: string;
  ans: string;
  hint?: string;
}

export interface OrderStep {
  t: 'or';
  q: string;
  words: string[];
  ans: number[];
}

export interface ReadingStep {
  t: 'rd';
  title: string;
  passage: string;
  q: string;
  opts: string[];
  ans: number;
}

export type LessonStep = TheoryStep | MCStep | TextStep | OrderStep | ReadingStep;

export interface Lesson {
  id: string;
  title: string;
  type: 'vocab' | 'grammar' | 'reading' | 'writing';
  steps: LessonStep[];
  unit?: { id: string; name: string; emoji: string };
}

export interface QuizQuestion {
  t: 'mc' | 'tx' | 'or';
  q: string;
  opts?: string[];
  ans: number | string | number[];
  words?: string[];
}

export interface FlashCard {
  f: string;
  b: string;
  ex?: string;
}

export interface SpeakingStep {
  t: 'sp';
  q: string;        // prompt to speak
  expected: string;  // expected answer (for comparison)
  hint?: string;
}

export interface ExamSection {
  name: string;
  time: number;
  qs: (MCStep | TextStep | ReadingStep | SpeakingStep)[];
}

export interface Exam {
  title: string;
  sections: ExamSection[];
}

export interface StoryScene {
  id: string;
  title: string;
  setting: string;
  image_emoji: string;
  color: string;
  dialogue: { speaker: string; avatar: string; text: string; tr: string }[];
  lesson: string;
  vocab: string[];
  quiz: { q: string; opts: string[]; ans: number };
}

export interface StoryChapter {
  title: string;
  level: string;
  scenes: StoryScene[];
}

export interface StoryData {
  avatar: string;
  protagonist: string;
  subtitle: string;
  chapters: StoryChapter[];
}

export interface CultureCard {
  id: string;
  icon: string;
  title: string;
  body: string;
  fact: string;
}

export interface ConvTurn {
  npc: string;
  hint: string;
  expected: string;
  accept: string[];
}

export interface Conversation {
  id: string;
  emoji: string;
  title: string;
  scenario: string;
  level: string;
  turns: ConvTurn[];
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  desc: string;
  xp: number;
}

export interface RankInfo {
  min: number;
  max: number;
  icon: string;
  title: string;
  meaning: string;
  romaji?: string;
}

export interface GrammarEntry {
  title: string;
  explanation: string;
  examples: { text: string; translation: string }[];
}

export interface VocabEntry {
  word: string;
  reading?: string;
  meaning: string;
  example?: string;
}

export interface AppState {
  nativeLang: string;
  activeLangs: string[];
  xp: Record<string, number>;
  prog: Record<string, { cur: string; done: Record<string, Record<string, boolean>>; passed: Record<string, boolean> }>;
  streak: { count: number; lastDate: string | null };
  earned: string[];
  fcTotal: number;
  lesDone: number;
  totalXp: number;
  srs: Record<string, Record<string, Record<number, { interval: number; ease: number; due: number }>>>;
  cultRead: string[];
  storyDone: string[];
  convDone: string[];
  dailyXp: number;
}
