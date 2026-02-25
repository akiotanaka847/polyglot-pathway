import { Achievement, RankInfo } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_lesson', icon: '🌱', title: '¡Primera lección!', desc: 'Completa tu primera lección', xp: 50 },
  { id: 'both_langs', icon: '🌍', title: 'Polïglota', desc: 'Gana XP en ambos idiomas', xp: 100 },
  { id: 'streak_3', icon: '🔥', title: 'Racha de 3', desc: 'Estudia 3 días seguidos', xp: 75 },
  { id: 'streak_7', icon: '💪', title: 'Semana completa', desc: 'Estudia 7 días seguidos', xp: 150 },
  { id: 'streak_30', icon: '🏆', title: 'Mes dedicado', desc: 'Estudia 30 días seguidos', xp: 500 },
  { id: 'fc_100', icon: '🃏', title: 'Memoria de acero', desc: 'Repasa 100 flashcards', xp: 100 },
  { id: 'fc_1000', icon: '🧠', title: 'Genio mnemónico', desc: 'Repasa 1000 flashcards', xp: 300 },
  { id: 'exam_pass', icon: '📝', title: 'Aprobado', desc: 'Aprueba un simulacro oficial', xp: 200 },
  { id: 'exam_perfect', icon: '💯', title: 'Perfección', desc: 'Obtén ≥90% en un simulacro', xp: 400 },
  { id: 'story_chapter', icon: '📖', title: 'Narrador', desc: 'Completa una escena de historia', xp: 75 },
  { id: 'culture_5', icon: '🌸', title: 'Explorador cultural', desc: 'Lee 5 cápsulas culturales', xp: 100 },
  { id: 'daily_goal', icon: '🎯', title: 'Meta diaria', desc: 'Alcanza tu meta diaria de XP', xp: 50 },
];

export const RANKS: Record<string, RankInfo[]> = {
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
};
