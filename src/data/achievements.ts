import { Achievement, RankInfo } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_lesson', icon: '🌱', title: '¡Primera lección!', desc: 'Completa tu primera lección', xp: 50 },
  { id: 'both_langs', icon: '🌍', title: 'Políglota', desc: 'Gana XP en 2+ idiomas', xp: 100 },
  { id: 'streak_3', icon: '🔥', title: 'Racha de 3', desc: 'Estudia 3 días seguidos', xp: 75 },
  { id: 'streak_7', icon: '💪', title: 'Semana completa', desc: 'Estudia 7 días seguidos', xp: 150 },
  { id: 'streak_30', icon: '🏆', title: 'Mes dedicado', desc: 'Estudia 30 días seguidos', xp: 500 },
  { id: 'exam_pass', icon: '📝', title: 'Aprobado', desc: 'Aprueba un simulacro oficial', xp: 200 },
  { id: 'story_chapter', icon: '📖', title: 'Narrador', desc: 'Completa una escena de historia', xp: 75 },
  { id: 'culture_5', icon: '🌸', title: 'Explorador cultural', desc: 'Lee 5 cápsulas culturales', xp: 100 },
  { id: 'daily_goal', icon: '🎯', title: 'Meta diaria', desc: 'Alcanza tu meta diaria de XP', xp: 50 },
  { id: 'three_langs', icon: '🗺️', title: 'Tres idiomas', desc: 'Estudia 3 idiomas diferentes', xp: 200 },
  { id: 'five_langs', icon: '🌐', title: 'Ciudadano global', desc: 'Estudia 5 idiomas diferentes', xp: 500 },
];

const defaultRanks: RankInfo[] = [
  { min: 0, max: 199, icon: '🗺️', title: 'Traveler', meaning: 'Viajero' },
  { min: 200, max: 499, icon: '📚', title: 'Student', meaning: 'Estudiante' },
  { min: 500, max: 999, icon: '🌟', title: 'Apprentice', meaning: 'Aprendiz' },
  { min: 1000, max: 1999, icon: '⚔️', title: 'Warrior', meaning: 'Guerrero' },
  { min: 2000, max: 3999, icon: '🏰', title: 'Knight', meaning: 'Caballero' },
  { min: 4000, max: 7999, icon: '👑', title: 'Noble', meaning: 'Noble' },
  { min: 8000, max: 99999, icon: '🦁', title: 'Master', meaning: 'Maestro' },
];

export const RANKS: Record<string, RankInfo[]> = {
  _default: defaultRanks,
  jp: [
    { min: 0, max: 199, icon: '🗺️', title: '旅人', meaning: 'Viajero', romaji: 'Tabibito' },
    { min: 200, max: 499, icon: '📚', title: '学生', meaning: 'Estudiante', romaji: 'Gakusei' },
    { min: 500, max: 999, icon: '🌸', title: '弟子', meaning: 'Aprendiz', romaji: 'Deshi' },
    { min: 1000, max: 1999, icon: '⚔️', title: '侍', meaning: 'Samurái', romaji: 'Samurai' },
    { min: 2000, max: 3999, icon: '🏯', title: '将軍', meaning: 'General', romaji: 'Shōgun' },
    { min: 4000, max: 7999, icon: '🐉', title: '龍', meaning: 'Dragón', romaji: 'Ryū' },
    { min: 8000, max: 99999, icon: '👑', title: '天皇', meaning: 'Emperador', romaji: 'Tennō' },
  ],
  fr: [
    { min: 0, max: 199, icon: '🗺️', title: 'Touriste', meaning: 'Turista' },
    { min: 200, max: 499, icon: '📚', title: 'Étudiant', meaning: 'Estudiante' },
    { min: 500, max: 999, icon: '🥖', title: 'Apprenti', meaning: 'Aprendiz' },
    { min: 1000, max: 1999, icon: '🗼', title: 'Citoyen', meaning: 'Ciudadano' },
    { min: 2000, max: 3999, icon: '🏰', title: 'Chevalier', meaning: 'Caballero' },
    { min: 4000, max: 7999, icon: '👑', title: 'Noble', meaning: 'Noble' },
    { min: 8000, max: 99999, icon: '🦁', title: 'Roi', meaning: 'Rey' },
  ],
  zh: [
    { min: 0, max: 199, icon: '🗺️', title: '旅客', meaning: 'Viajero' },
    { min: 200, max: 499, icon: '📚', title: '学生', meaning: 'Estudiante' },
    { min: 500, max: 999, icon: '🎋', title: '学徒', meaning: 'Aprendiz' },
    { min: 1000, max: 1999, icon: '🐲', title: '学者', meaning: 'Erudito' },
    { min: 2000, max: 3999, icon: '🏮', title: '大师', meaning: 'Gran Maestro' },
    { min: 4000, max: 7999, icon: '🐉', title: '龙', meaning: 'Dragón' },
    { min: 8000, max: 99999, icon: '👑', title: '皇帝', meaning: 'Emperador' },
  ],
  ko: [
    { min: 0, max: 199, icon: '🗺️', title: '여행자', meaning: 'Viajero' },
    { min: 200, max: 499, icon: '📚', title: '학생', meaning: 'Estudiante' },
    { min: 500, max: 999, icon: '🌸', title: '견습생', meaning: 'Aprendiz' },
    { min: 1000, max: 1999, icon: '⚔️', title: '무사', meaning: 'Guerrero' },
    { min: 2000, max: 3999, icon: '🏯', title: '장군', meaning: 'General' },
    { min: 4000, max: 7999, icon: '🐉', title: '용', meaning: 'Dragón' },
    { min: 8000, max: 99999, icon: '👑', title: '왕', meaning: 'Rey' },
  ],
};
