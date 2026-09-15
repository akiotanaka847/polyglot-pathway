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

export interface ListenAnswerStep {
  t: 'la';
  audio: string;   // text to be spoken as audio
  ans: string;     // expected typed answer
  hint?: string;
}

export interface SpeakStep {
  t: 'sp';
  q: string;        // prompt to speak
  expected: string;  // expected answer (for comparison)
  hint?: string;
}

export type LessonStep = TheoryStep | MCStep | TextStep | OrderStep | ReadingStep | ListenAnswerStep | SpeakStep;

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

export interface ExamSection {
  name: string;
  time: number;
  qs: (MCStep | TextStep | ReadingStep | ListenAnswerStep | SpeakStep)[];
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
  npcMn?: string;
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
  theme?: string;
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
  level?: string;
  category?: 'particles' | 'verbs' | 'adjectives' | 'sentence' | 'expressions' | 'advanced' | 'writing';
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
  // Recall evidence per language: word -> distinct days it was recalled
  recall: Record<string, Record<string, { days: string[]; hits: number; misses: number }>>;
  // Provisional ability estimate per language (0..1), drives adaptive difficulty
  ability: Record<string, number>;
}

export interface RecallInfo {
  bars: 0 | 1 | 2 | 3;
  hits: number;
  days: number;
}
