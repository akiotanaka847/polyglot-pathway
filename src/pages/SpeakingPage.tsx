import LearningLangSwitcher from '@/components/LearningLangSwitcher';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpenCheck, Headphones, Mic, RotateCcw, Volume2 } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { getLangConfig } from '@/data/languages';
import { getSpeakTopicTitle, SPEAK_TOPICS, SpeakTopic } from '@/data/speakTopics';
import { speakText } from '@/utils/helpers';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { MicHelpCard } from '@/components/MicHelpCard';
import { micMessages } from '@/data/micMessages';
import { supabase } from '@/integrations/supabase/client';
import VoiceOrb from '@/components/VoiceOrb';
import { DailyTest, FreeTalk, modeLabel } from '@/components/speaking/SpeakingModes';
import { getPersona } from '@/data/coachPersonas';
import { Button } from '@/components/ui/button';
import { Conversation, ConversationContent, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea } from '@/components/ai-elements/prompt-input';
import { Shimmer } from '@/components/ai-elements/shimmer';

 type Correction = { wrong: string; right: string; why: string };
 type CoachReply = {
  score: number; better: string; corrections: Correction[];
  reply: string; replyMeaning: string; tip: string; noSpeech?: boolean;
  scores?: Scores | null; opener?: boolean;
};
 type Scores = { grammar: number; vocabulary: number; fluency: number; pronunciation: number };
 type Turn = { role: 'user' | 'coach'; text: string; meaning?: string; scores?: Scores | null };

const X: Record<string, Record<string, string>> = {
  es: { cta: 'Empezar a hablar', ctaSub: 'Voxia te saluda, te propone un tema y te hace preguntas. Vos solo respondé.', other: 'Otro tema', end: 'Terminar', summary: 'Tu resumen', avg: 'Nota media', mistakes: 'A practicar', mins: 'min hablando', again: 'Seguir hablando', tr: 'Ver traducción', grammar: 'Gramática', vocabulary: 'Vocabulario', fluency: 'Fluidez', pronunciation: 'Pronunciación', more: 'Otras prácticas' },
  en: { cta: 'Start talking', ctaSub: 'Voxia greets you, picks a topic and asks you questions. You just answer.', other: 'New topic', end: 'Finish', summary: 'Your summary', avg: 'Average band', mistakes: 'To practise', mins: 'min speaking', again: 'Keep talking', tr: 'Show translation', grammar: 'Grammar', vocabulary: 'Vocabulary', fluency: 'Fluency', pronunciation: 'Pronunciation', more: 'Other practice' },
  fr: { cta: 'Commencer à parler', ctaSub: 'Voxia te salue, choisit un thème et te pose des questions. Tu réponds.', other: 'Autre thème', end: 'Terminer', summary: 'Ton résumé', avg: 'Note moyenne', mistakes: 'À pratiquer', mins: 'min de parole', again: 'Continuer', tr: 'Voir la traduction', grammar: 'Grammaire', vocabulary: 'Vocabulaire', fluency: 'Aisance', pronunciation: 'Prononciation', more: 'Autres pratiques' },
  pt: { cta: 'Começar a falar', ctaSub: 'A Voxia cumprimenta, escolhe um tema e faz perguntas. Você só responde.', other: 'Outro tema', end: 'Terminar', summary: 'Seu resumo', avg: 'Nota média', mistakes: 'Para praticar', mins: 'min falando', again: 'Continuar', tr: 'Ver tradução', grammar: 'Gramática', vocabulary: 'Vocabulário', fluency: 'Fluência', pronunciation: 'Pronúncia', more: 'Outras práticas' },
  zh: { cta: '开始对话', ctaSub: 'Voxia 会打招呼、选话题并向你提问，你只需回答。', other: '换个话题', end: '结束', summary: '你的总结', avg: '平均分', mistakes: '需要练习', mins: '分钟口语', again: '继续聊', tr: '查看翻译', grammar: '语法', vocabulary: '词汇', fluency: '流利度', pronunciation: '发音', more: '其他练习' },
  jp: { cta: '話し始める', ctaSub: 'Voxiaがあいさつして話題を出し、質問します。答えるだけでOK。', other: '別の話題', end: '終わる', summary: 'まとめ', avg: '平均スコア', mistakes: '練習ポイント', mins: '分話した', again: '続ける', tr: '翻訳を見る', grammar: '文法', vocabulary: '語彙', fluency: '流暢さ', pronunciation: '発音', more: 'ほかの練習' },
  ko: { cta: '대화 시작', ctaSub: 'Voxia가 인사하고 주제를 정해 질문해요. 대답만 하면 돼요.', other: '다른 주제', end: '끝내기', summary: '요약', avg: '평균 점수', mistakes: '연습할 점', mins: '분 말하기', again: '계속하기', tr: '번역 보기', grammar: '문법', vocabulary: '어휘', fluency: '유창성', pronunciation: '발음', more: '다른 연습' },
  ru: { cta: 'Начать разговор', ctaSub: 'Voxia здоровается, выбирает тему и задаёт вопросы. Ты просто отвечаешь.', other: 'Другая тема', end: 'Закончить', summary: 'Итоги', avg: 'Средний балл', mistakes: 'Потренировать', mins: 'мин речи', again: 'Продолжить', tr: 'Показать перевод', grammar: 'Грамматика', vocabulary: 'Лексика', fluency: 'Беглость', pronunciation: 'Произношение', more: 'Другие практики' },
  ar: { cta: 'ابدأ الحديث', ctaSub: 'تحييك Voxia وتختار موضوعًا وتسألك. فقط أجب.', other: 'موضوع آخر', end: 'إنهاء', summary: 'ملخصك', avg: 'المعدل', mistakes: 'للتدريب', mins: 'دقيقة تحدث', again: 'تابع', tr: 'عرض الترجمة', grammar: 'القواعد', vocabulary: 'المفردات', fluency: 'الطلاقة', pronunciation: 'النطق', more: 'تدريبات أخرى' },
  hi: { cta: 'बात शुरू करें', ctaSub: 'Voxia नमस्ते कहेगी, विषय चुनेगी और सवाल पूछेगी। आप बस जवाब दें।', other: 'दूसरा विषय', end: 'समाप्त', summary: 'सारांश', avg: 'औसत अंक', mistakes: 'अभ्यास करें', mins: 'मिनट बोले', again: 'जारी रखें', tr: 'अनुवाद देखें', grammar: 'व्याकरण', vocabulary: 'शब्दावली', fluency: 'प्रवाह', pronunciation: 'उच्चारण', more: 'अन्य अभ्यास' },
  ro: { cta: 'Începe să vorbești', ctaSub: 'Voxia te salută, alege o temă și îți pune întrebări. Tu doar răspunzi.', other: 'Altă temă', end: 'Termină', summary: 'Rezumatul tău', avg: 'Nota medie', mistakes: 'De exersat', mins: 'min vorbit', again: 'Continuă', tr: 'Vezi traducerea', grammar: 'Gramatică', vocabulary: 'Vocabular', fluency: 'Fluență', pronunciation: 'Pronunție', more: 'Alte exerciții' },
};
const SCORE_KEYS = ['grammar', 'vocabulary', 'fluency', 'pronunciation'] as const;

const STORE = 'voxia-speak-corrections';

const UI: Record<string, Record<string, string>> = {
  es: { title: '¿De qué hablamos hoy?', sub: 'Elegí un tema y practicá con un amigo que te ayuda', pick: 'Elegí un tema', own: 'O escribí tu propio tema…', speak: 'Hablar', stop: 'Terminar', thinking: 'Tu coach está preparando una respuesta…', corrections: 'Pequeño ajuste', none: '¡Sonó natural!', better: 'Una forma más natural', mine: 'Mis correcciones', clear: 'Borrar', back: 'Inicio', start: 'Empezar', change: 'Cambiar tema', nomic: 'Tu navegador no permite el micrófono', retry: 'Repetir', tip: 'Consejo', learning: 'Practicando', help: 'Ayuda en', beginner: 'Fácil', intermediate: 'Intermedio', advanced: 'Desafío', heard: 'Te entendí', coach: 'Tu amigo de práctica', write: 'También podés escribir…' },
  en: { title: 'What shall we talk about?', sub: 'Pick a topic and practise with a friend who helps you', pick: 'Pick a topic', own: 'Or type your own topic…', speak: 'Speak', stop: 'Finish', thinking: 'Your coach is preparing a reply…', corrections: 'Small adjustment', none: 'That sounded natural!', better: 'A more natural way', mine: 'My corrections', clear: 'Clear', back: 'Home', start: 'Start', change: 'Change topic', nomic: 'Your browser does not allow the microphone', retry: 'Repeat', tip: 'Tip', learning: 'Practising', help: 'Help in', beginner: 'Easy', intermediate: 'Intermediate', advanced: 'Challenge', heard: 'I heard', coach: 'Your practice friend', write: 'You can also type…' },
  fr: { title: 'De quoi parlons-nous ?', sub: 'Choisis un thème et entraîne-toi avec un ami qui t’aide', pick: 'Choisis un thème', own: 'Ou écris ton propre thème…', speak: 'Parler', stop: 'Terminer', thinking: 'Ton coach prépare une réponse…', corrections: 'Petit ajustement', none: 'C’était naturel !', better: 'Une façon plus naturelle', mine: 'Mes corrections', clear: 'Effacer', back: 'Accueil', start: 'Commencer', change: 'Changer de thème', nomic: 'Ton navigateur ne permet pas le micro', retry: 'Répéter', tip: 'Conseil', learning: 'Pratique', help: 'Aide en', beginner: 'Facile', intermediate: 'Intermédiaire', advanced: 'Défi', heard: 'J’ai entendu', coach: 'Ton ami de pratique', write: 'Tu peux aussi écrire…' },
  pt: { title: 'Sobre o que vamos falar?', sub: 'Escolha um tema e pratique com um amigo que ajuda você', pick: 'Escolha um tema', own: 'Ou escreva seu próprio tema…', speak: 'Falar', stop: 'Terminar', thinking: 'Seu coach está preparando uma resposta…', corrections: 'Pequeno ajuste', none: 'Soou natural!', better: 'Uma forma mais natural', mine: 'Minhas correções', clear: 'Apagar', back: 'Início', start: 'Começar', change: 'Mudar tema', nomic: 'Seu navegador não permite o microfone', retry: 'Repetir', tip: 'Dica', learning: 'Praticando', help: 'Ajuda em', beginner: 'Fácil', intermediate: 'Intermediário', advanced: 'Desafio', heard: 'Eu ouvi', coach: 'Seu amigo de prática', write: 'Você também pode escrever…' },
  zh: { title: '今天聊什么？', sub: '选择一个话题，和会帮助你的朋友一起练习', pick: '选择话题', own: '或输入自己的话题…', speak: '说话', stop: '结束', thinking: '你的口语伙伴正在准备回答…', corrections: '小调整', none: '听起来很自然！', better: '更自然的说法', mine: '我的纠正', clear: '清空', back: '首页', start: '开始', change: '换话题', nomic: '你的浏览器不支持麦克风', retry: '再说一次', tip: '建议', learning: '正在练习', help: '帮助语言', beginner: '简单', intermediate: '中等', advanced: '挑战', heard: '我听到', coach: '你的口语伙伴', write: '也可以打字…' },
  jp: { title: '今日は何を話す？', sub: 'トピックを選んで、助けてくれる友達と練習しよう', pick: 'トピックを選ぶ', own: 'または自由に入力…', speak: '話す', stop: '終わる', thinking: '会話パートナーが返事を考えています…', corrections: 'ちょっとした修正', none: '自然に言えました！', better: 'もっと自然な言い方', mine: '私の訂正', clear: '消す', back: 'ホーム', start: '始める', change: 'トピック変更', nomic: 'このブラウザはマイクを使えません', retry: 'もう一度', tip: 'アドバイス', learning: '練習中', help: '説明言語', beginner: 'やさしい', intermediate: '中級', advanced: 'チャレンジ', heard: '聞こえた文', coach: '会話の友達', write: '文字でも入力できます…' },
  ko: { title: '오늘은 무슨 이야기를 할까요?', sub: '주제를 고르고 도와주는 친구와 연습해 보세요', pick: '주제 선택', own: '또는 직접 주제 입력…', speak: '말하기', stop: '끝내기', thinking: '말하기 친구가 답변을 준비하고 있어요…', corrections: '작은 수정', none: '아주 자연스러웠어요!', better: '더 자연스러운 표현', mine: '내 교정', clear: '지우기', back: '홈', start: '시작', change: '주제 변경', nomic: '이 브라우저는 마이크를 지원하지 않아요', retry: '다시', tip: '팁', learning: '연습 중', help: '도움말 언어', beginner: '쉬움', intermediate: '중급', advanced: '도전', heard: '들은 문장', coach: '말하기 친구', write: '글로 써도 돼요…' },
  ru: { title: 'О чём поговорим?', sub: 'Выбери тему и практикуйся с другом, который помогает', pick: 'Выбери тему', own: 'Или напиши свою тему…', speak: 'Говорить', stop: 'Закончить', thinking: 'Твой собеседник готовит ответ…', corrections: 'Небольшая правка', none: 'Звучало естественно!', better: 'Более естественный вариант', mine: 'Мои исправления', clear: 'Очистить', back: 'Главная', start: 'Начать', change: 'Сменить тему', nomic: 'Браузер не поддерживает микрофон', retry: 'Повторить', tip: 'Совет', learning: 'Практика', help: 'Помощь на', beginner: 'Легко', intermediate: 'Средне', advanced: 'Вызов', heard: 'Я услышал', coach: 'Твой друг для практики', write: 'Можно также написать…' },
  ar: { title: 'عمّ نتحدث اليوم؟', sub: 'اختر موضوعًا وتدرّب مع صديق يساعدك', pick: 'اختر موضوعًا', own: 'أو اكتب موضوعك…', speak: 'تحدث', stop: 'إنهاء', thinking: 'صديقك يحضّر الرد…', corrections: 'تعديل بسيط', none: 'بدا كلامك طبيعيًا!', better: 'طريقة أكثر طبيعية', mine: 'تصحيحاتي', clear: 'حذف', back: 'الرئيسية', start: 'ابدأ', change: 'تغيير الموضوع', nomic: 'متصفحك لا يدعم الميكروفون', retry: 'أعد', tip: 'نصيحة', learning: 'تتدرّب على', help: 'المساعدة بـ', beginner: 'سهل', intermediate: 'متوسط', advanced: 'تحدٍّ', heard: 'سمعت', coach: 'صديقك للتدريب', write: 'يمكنك الكتابة أيضًا…' },
  hi: { title: 'आज किस बारे में बात करें?', sub: 'विषय चुनें और मददगार दोस्त के साथ अभ्यास करें', pick: 'विषय चुनें', own: 'या अपना विषय लिखें…', speak: 'बोलें', stop: 'समाप्त', thinking: 'आपका साथी जवाब तैयार कर रहा है…', corrections: 'छोटा सुधार', none: 'बहुत स्वाभाविक लगा!', better: 'ज़्यादा स्वाभाविक तरीका', mine: 'मेरे सुधार', clear: 'मिटाएँ', back: 'होम', start: 'शुरू करें', change: 'विषय बदलें', nomic: 'आपका ब्राउज़र माइक्रोफ़ोन नहीं देता', retry: 'फिर से', tip: 'सुझाव', learning: 'अभ्यास', help: 'मदद की भाषा', beginner: 'आसान', intermediate: 'मध्यम', advanced: 'चुनौती', heard: 'मैंने सुना', coach: 'आपका अभ्यास साथी', write: 'आप लिख भी सकते हैं…' },
  ro: { title: 'Despre ce vorbim azi?', sub: 'Alege o temă și exersează cu un prieten care te ajută', pick: 'Alege o temă', own: 'Sau scrie propria temă…', speak: 'Vorbește', stop: 'Termină', thinking: 'Partenerul tău pregătește răspunsul…', corrections: 'Mică ajustare', none: 'A sunat natural!', better: 'O variantă mai naturală', mine: 'Corecturile mele', clear: 'Șterge', back: 'Acasă', start: 'Începe', change: 'Schimbă tema', nomic: 'Browserul tău nu permite microfonul', retry: 'Repetă', tip: 'Sfat', learning: 'Exersezi', help: 'Ajutor în', beginner: 'Ușor', intermediate: 'Intermediar', advanced: 'Provocare', heard: 'Am auzit', coach: 'Partenerul tău', write: 'Poți și să scrii…' },
};

const glass = 'border border-glass-border bg-glass/80 backdrop-blur-xl';

export default function SpeakingPage() {
  const navigate = useNavigate();
  const { state, addXP, recordAnswer, getAbility } = useApp();
  const nativeLang = state.nativeLang || 'es';
  const u = (key: string) => UI[nativeLang]?.[key] || X[nativeLang]?.[key] || UI.en[key] || X.en[key];
  const lang = state.currentLearningLang || state.activeLangs[state.activeLangs.length - 1] || 'en';
  const config = getLangConfig(lang);
  const nativeConfig = getLangConfig(nativeLang);

  const [topic, setTopic] = useState<SpeakTopic | null>(null);
  const [customTopic, setCustomTopic] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [coach, setCoach] = useState<CoachReply | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<(Correction & { lang: string })[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORE) || '[]'); } catch { return []; }
  });
  const [showSaved, setShowSaved] = useState(false);
  const [mode, setMode] = useState<'chat' | 'free' | 'daily'>('chat');
  const persona = getPersona(lang);
  const spokenRef = useRef('');
  const [showTr, setShowTr] = useState<Record<number, boolean>>({});
  const [summary, setSummary] = useState(false);
  const [sessionMistakes, setSessionMistakes] = useState<Correction[]>([]);
  const startedAt = useRef(0);

  const activeTopic = topic ? `${topic.id}: ${topic.prompt}` : customTopic;
  const topicTitle = topic ? getSpeakTopicTitle(topic.id, nativeLang) : customTopic;
  const level = getAbility(lang) > 0.75 ? 'advanced' : getAbility(lang) > 0.45 ? 'intermediate' : 'beginner';

  async function send(said: string) {
    const text = said.trim();
    if (!text) return;
    setLoading(true); setError(null); setCoach(null);
    const history = turns.slice(-8);
    setTurns(current => [...current, { role: 'user', text }]);
    if (!startedAt.current) startedAt.current = Date.now();
    try {
      const { data, error: invokeError } = await supabase.functions.invoke('speak-coach', {
        body: { said: text, lang, native: nativeLang, topic: activeTopic, level, history, persona: persona.name, mistakes: saved.slice(-8) },
      });
      if (invokeError || (data as { error?: string })?.error) throw new Error(invokeError?.message || (data as { error?: string }).error);
      const reply = data as CoachReply;
      setCoach(reply);
      setTurns(current => {
        const next = [...current];
        for (let i = next.length - 1; i >= 0; i--) if (next[i].role === 'user') { next[i] = { ...next[i], scores: reply.scores }; break; }
        return [...next, { role: 'coach', text: reply.reply, meaning: reply.replyMeaning }];
      });
      if (reply.corrections?.length) setSessionMistakes(m => [...m, ...reply.corrections]);
      const clean = !reply.corrections?.length;
      recordAnswer(lang, clean);
      addXP(lang, clean ? 40 : 25);
      if (reply.corrections?.length) setSaved(current => [...current, ...reply.corrections.map(correction => ({ ...correction, lang }))]);
    } catch (caught) {
      setError(String((caught as Error).message || caught));
    } finally {
      setLoading(false);
      setTranscript('');
    }
  }

  const { transcript, isListening, isTranscribing, isSupported, start, stop, setTranscript, micError, micBlock, lastOutcome, seconds, level: micLevel } = useSpeechRecognition(lang, send, micMessages(nativeLang));

  async function sendNoSpeech() {
    if (loading) return;
    setLoading(true); setError(null); setCoach(null);
    try {
      const { data, error: invokeError } = await supabase.functions.invoke('speak-coach', {
        body: { noSpeech: true, lang, native: nativeLang, topic: activeTopic, level, history: turns.slice(-8) },
      });
      if (invokeError || (data as { error?: string })?.error) throw new Error(invokeError?.message || (data as { error?: string }).error);
      const reply = data as CoachReply;
      setCoach(reply);
      setTurns(current => [...current, { role: 'coach', text: reply.reply, meaning: reply.replyMeaning }]);
    } catch { /* microphone guidance remains visible */ }
    finally { setLoading(false); }
  }

  async function startChat(change = false) {
    const pool = SPEAK_TOPICS.filter(t => t.level === (level === 'advanced' ? 3 : level === 'intermediate' ? 2 : 1));
    const candidates = (pool.length ? pool : SPEAK_TOPICS).filter(t => t.id !== topic?.id);
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    setTopic(next); setCoach(null); setError(null); setSummary(false); setLoading(true);
    if (!change) { setTurns([]); setSessionMistakes([]); startedAt.current = 0; }
    try {
      const { data, error: invokeError } = await supabase.functions.invoke('speak-coach', {
        body: { opener: true, lang, native: nativeLang, topic: `${next.id}: ${next.prompt}`, level, persona: persona.name, history: change ? turns.slice(-6) : [] },
      });
      if (invokeError || (data as { error?: string })?.error) throw new Error(invokeError?.message || (data as { error?: string }).error);
      const reply = data as CoachReply;
      setCoach(reply);
      setTurns(current => [...current, { role: 'coach', text: reply.reply, meaning: reply.replyMeaning }]);
    } catch (caught) { setError(String((caught as Error).message || caught)); }
    finally { setLoading(false); }
  }

  useEffect(() => { try { localStorage.setItem(STORE, JSON.stringify(saved.slice(-120))); } catch { /* ignore */ } }, [saved]);
  useEffect(() => {
    if (!coach?.reply || spokenRef.current === coach.reply) return;
    spokenRef.current = coach.reply;
    speakText(coach.reply, lang);
  }, [coach, lang]);
  const noSpeechHandledRef = useRef(0);
  useEffect(() => {
    if (lastOutcome !== 'no-speech') return;
    noSpeechHandledRef.current += 1;
    void sendNoSpeech();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastOutcome]);

  const resetSession = () => {
    setSummary(false); setSessionMistakes([]); startedAt.current = 0;
    setTopic(null); setCustomTopic(''); setTurns([]); setCoach(null); setError(null); setTranscript(''); spokenRef.current = '';
  };

  if (showSaved) {
    const mine = saved.filter(correction => correction.lang === lang).slice().reverse();
    return <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setShowSaved(false)} aria-label={u('back')}><ArrowLeft /></Button>
          <h1 className="font-display text-xl font-bold">{u('mine')}</h1>
          <Button variant="ghost" size="sm" onClick={() => setSaved(items => items.filter(item => item.lang !== lang))}>{u('clear')}</Button>
        </div>
        <div className="space-y-3">
          {!mine.length && <p className="py-12 text-center text-foreground-muted">{u('none')}</p>}
          {mine.map((correction, index) => <div key={`${correction.wrong}-${index}`} className={`${glass} rounded-2xl p-4`}>
            <p className="text-sm text-foreground-muted line-through">{correction.wrong}</p>
            <Button variant="ghost" className="mt-1 h-auto justify-start px-0 text-left text-secondary" onClick={() => speakText(correction.right, lang)}><Volume2 />{correction.right}</Button>
            <p className="mt-2 text-sm text-foreground-secondary">{correction.why}</p>
          </div>)}
        </div>
      </div>
    </div>;
  }

  if (!topic && !customTopic.trim()) {
    return <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="mb-5"><ArrowLeft />{u('back')}</Button>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold text-secondary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />{u('learning')}
            </div>
            <div className="mb-4"><LearningLangSwitcher current={lang} onChange={() => { setTurns([]); setCoach(null); setError(null); }} /></div>
            <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight md:text-5xl">{u('title')}</h1>
            <p className="mt-2 max-w-xl text-foreground-secondary">{u('sub')}</p>
          </div>
          <div className={`${glass} flex items-center gap-3 rounded-2xl p-4`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-2xl">{nativeConfig.flag}</div>
            <div><p className="text-[0.65rem] font-bold uppercase text-foreground-muted">{u('help')}</p><p className="font-semibold">{nativeConfig.nativeName}</p></div>
          </div>
        </header>

        <div className={`${glass} mb-6 grid grid-cols-3 gap-1 rounded-2xl p-1`} role="tablist">
          {(['chat', 'free', 'daily'] as const).map(m => <Button key={m} role="tab" aria-selected={mode === m} variant={mode === m ? 'default' : 'ghost'} className="h-11 rounded-xl" onClick={() => setMode(m)}>
            {m === 'free' ? '⏱️' : m === 'chat' ? persona.avatar : '🔥'} {modeLabel(nativeLang, m)}
          </Button>)}
        </div>
        {mode === 'free' && <FreeTalk key={lang} lang={lang} nativeLang={nativeLang} level={level} onXP={n => addXP(lang, n)} />}
        {mode === 'daily' && <DailyTest key={lang} lang={lang} nativeLang={nativeLang} level={level} onXP={n => addXP(lang, n)} />}
        {mode === 'chat' && <>
        <div className={`${glass} mb-4 flex items-center gap-3 rounded-2xl p-3`}><span className="text-3xl">{persona.avatar}</span><div><p className="font-display font-bold">{persona.name}</p><p className="text-xs text-foreground-muted">{u('coach')}</p></div></div>
        <Button onClick={() => void startChat()} className="mb-4 h-auto w-full flex-col gap-2 whitespace-normal rounded-3xl bg-gradient-to-br from-secondary to-primary p-6 text-primary-foreground shadow-xl transition hover:-translate-y-0.5">
          <span className="flex items-center gap-2 font-display text-2xl font-extrabold"><Mic className="h-6 w-6" />{u('cta')}</span>
          <span className="max-w-md text-sm font-medium opacity-90">{u('ctaSub')}</span>
        </Button>
        <div className="flex justify-end"><Button variant="ghost" size="sm" onClick={() => setShowSaved(true)}><BookOpenCheck />{u('mine')} · {saved.filter(item => item.lang === lang).length}</Button></div>
        </>}
      </div>
    </div>;
  }

  if (summary) {
    const scored = turns.filter(t => t.scores).map(t => t.scores!);
    const avg = (k: typeof SCORE_KEYS[number]) => scored.length ? scored.reduce((a, s) => a + s[k], 0) / scored.length : 0;
    const overall = scored.length ? SCORE_KEYS.reduce((a, k) => a + avg(k), 0) / 4 : 0;
    const mins = startedAt.current ? Math.max(1, Math.round((Date.now() - startedAt.current) / 60000)) : 0;
    const top = [...new Map(sessionMistakes.map(m => [m.right, m])).values()].slice(0, 3);
    return <div className="flex-1 overflow-y-auto px-4 py-6"><div className="mx-auto max-w-xl space-y-4">
      <h1 className="text-center font-display text-3xl font-extrabold">{u('summary')}</h1>
      <div className={`${glass} rounded-3xl p-6 text-center`}>
        <p className="text-xs font-bold uppercase text-foreground-muted">{u('avg')}</p>
        <p className="font-display text-6xl font-black text-secondary">{overall ? overall.toFixed(1) : '–'}<span className="text-2xl text-foreground-muted">/9</span></p>
        <p className="mt-1 text-sm text-foreground-secondary">{mins} {u('mins')} · {scored.length} 🗣️</p>
        <div className="mt-4 grid grid-cols-4 gap-2">{SCORE_KEYS.map(k => <div key={k} className="rounded-xl bg-muted p-2"><p className="font-display text-lg font-black">{avg(k) ? avg(k).toFixed(1) : '–'}</p><p className="truncate text-[0.65rem] text-foreground-muted">{u(k)}</p></div>)}</div>
      </div>
      {!!top.length && <div className={`${glass} rounded-3xl p-5`}><p className="mb-2 text-xs font-bold uppercase text-coach">{u('mistakes')}</p>
        {top.map((m, i) => <div key={i} className="mb-2 text-sm"><span className="text-foreground-muted line-through">{m.wrong}</span> → <Button variant="ghost" className="h-auto px-1 font-bold" onClick={() => speakText(m.right, lang)}><Volume2 />{m.right}</Button><p className="text-xs text-foreground-secondary">{m.why}</p></div>)}</div>}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" size="lg" onClick={resetSession}>{u('back')}</Button>
        <Button size="lg" onClick={() => setSummary(false)}>{u('again')}</Button>
      </div>
    </div></div>;
  }

  return <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 py-3 md:px-6 md:py-5">
    <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col">
      <header className="mb-3 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={resetSession} aria-label={u('change')}><ArrowLeft /></Button>
        <div className="min-w-0 flex-1"><p className="truncate font-display font-bold">{topic?.emoji} {topicTitle}</p><p className="text-xs text-foreground-muted">{config.flag} {config.nativeName}</p></div>
        <Button variant="outline" size="sm" disabled={loading} onClick={() => void startChat(true)}><RotateCcw />{u('other')}</Button>
        <Button variant="secondary" size="sm" onClick={() => { if (isListening) void stop(); setSummary(true); }}>{u('end')}</Button>
      </header>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <section className={`${glass} flex min-h-[320px] flex-col items-center justify-center rounded-3xl p-5 text-center`}>
          <div className="mb-2 flex items-center gap-2 text-xs font-bold text-coach"><span className="h-2 w-2 rounded-full bg-coach" />{persona.avatar} {persona.name} · {u('coach')}</div>
          <VoiceOrb mode={isListening ? 'listening' : (loading || isTranscribing) ? 'speaking' : 'idle'} hue={config.hue} onClick={() => coach?.reply && speakText(coach.reply, lang)} label={u('speak')} />
          {isListening && <div className="mt-3 flex items-end justify-center gap-1" aria-label={u('speak')}>
            {[.25,.5,.75,1,.65,.4,.8].map((threshold, index) => <span key={index} className="animate-speaking-wave w-1 rounded-full bg-secondary" style={{ height: `${12 + Math.max(micLevel, threshold) * 24}px`, animationDelay: `${index * -90}ms` }} />)}
          </div>}
          <p className="mt-3 text-sm text-foreground-secondary">{isListening ? `${u('speak')} · ${seconds}s` : isTranscribing ? u('thinking') : topicTitle}</p>
          <Button disabled={loading || isTranscribing} onClick={async () => { if (isListening) await stop(); else { setCoach(null); await start(); } }}
            variant={isListening ? 'destructive' : 'secondary'} size="lg" className="mt-5 min-w-40 rounded-2xl font-bold shadow-lg">
            {isListening ? <><RotateCcw />{u('stop')}</> : <><Mic />{u('speak')}</>}
          </Button>
          {!isSupported && <p className="mt-3 text-xs text-foreground-muted">{u('nomic')}</p>}
          {micBlock && <div className="mt-4 w-full"><MicHelpCard reason={micBlock} nativeLang={nativeLang} glass={glass} /></div>}
          {micError && <p className="mt-3 text-xs text-destructive">{micError}</p>}
        </section>

        <section className={`${glass} flex min-h-[360px] flex-col overflow-hidden rounded-3xl`}>
          <Conversation className="min-h-0">
            <ConversationContent className="gap-4 p-5">
              {!turns.length && !loading && <div className="flex min-h-52 flex-col items-center justify-center text-center text-foreground-muted"><Headphones className="mb-3 h-8 w-8 text-secondary" /><p className="max-w-xs text-sm">{u('sub')}</p></div>}
              {turns.map((turn, index) => <Message key={`${turn.role}-${index}`} from={turn.role === 'coach' ? 'assistant' : 'user'}>
                <MessageContent className={turn.role === 'user' ? 'bg-primary text-primary-foreground' : ''}>
                  <MessageResponse>{turn.text}</MessageResponse>
                  {turn.role === 'coach' && <div className="flex flex-wrap items-center gap-1">
                    <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => speakText(turn.text, lang)}><Volume2 /></Button>
                    {turn.meaning && (showTr[index] ? <p className="text-xs italic text-foreground-muted">{turn.meaning}</p>
                      : <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => setShowTr(v => ({ ...v, [index]: true }))}>{u('tr')}</Button>)}
                  </div>}
                  {turn.scores && <div className="mt-1 grid grid-cols-4 gap-1">{SCORE_KEYS.map(k => <div key={k} className="rounded-lg bg-background/30 px-1 py-1 text-center"><p className="font-display text-sm font-black">{turn.scores![k]}</p><p className="truncate text-[0.6rem] opacity-80">{u(k)}</p></div>)}</div>}
                </MessageContent>
              </Message>)}
              {(loading || isTranscribing) && <Message from="assistant"><MessageContent><Shimmer>{u('thinking')}</Shimmer></MessageContent></Message>}
              {transcript && <p className="text-xs text-foreground-muted">{u('heard')}: “{transcript}”</p>}
              {error && <p className="text-sm text-destructive">{error}</p>}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          {coach && !loading && !coach.opener && <div className="mx-4 mb-3 rounded-2xl border border-coach/30 bg-coach/10 p-4">
            <div className="mb-2 flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase text-coach">{coach.corrections.length ? u('corrections') : u('none')}</span>{coach.scores && <span className="font-display text-lg font-black">{(SCORE_KEYS.reduce((a, k) => a + coach.scores![k], 0) / 4).toFixed(1)}/9</span>}</div>
            {coach.corrections.map((correction, index) => <div key={index} className="mb-2 text-sm"><span className="text-foreground-muted line-through">{correction.wrong}</span><span> → </span><Button variant="ghost" className="h-auto px-1 font-bold" onClick={() => speakText(correction.right, lang)}><Volume2 />{correction.right}</Button><p className="mt-1 text-xs text-foreground-secondary">{correction.why}</p></div>)}
            {coach.better && <p className="text-sm"><span className="text-foreground-muted">{u('better')}: </span><Button variant="ghost" className="h-auto px-1 font-semibold" onClick={() => speakText(coach.better, lang)}><Volume2 />{coach.better}</Button></p>}
            {coach.tip && <p className="mt-2 text-xs text-foreground-secondary">{u('tip')}: {coach.tip}</p>}
          </div>}

          <div className="border-t border-glass-border p-3">
            <PromptInput onSubmit={({ text }) => { if (text.trim()) void send(text); }} className="rounded-2xl border-glass-border bg-glass-strong">
              <PromptInputTextarea placeholder={u('write')} className="min-h-12" />
              <PromptInputFooter className="justify-end"><PromptInputSubmit status={loading ? 'submitted' : error ? 'error' : 'ready'} disabled={loading} aria-label={u('start')} /></PromptInputFooter>
            </PromptInput>
          </div>
        </section>
      </div>
    </div>
  </div>;
}
