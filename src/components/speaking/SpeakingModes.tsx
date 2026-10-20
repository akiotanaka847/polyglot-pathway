// Stimuler-inspired speaking modes: 60s improvised talk with band scores,
// pronunciation retry for flagged words, and a short daily speaking test.
import { useMemo, useRef, useState } from 'react';
import { Mic, RotateCcw, Shuffle, Square, Volume2, Flame, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceOrb from '@/components/VoiceOrb';
import { MicHelpCard } from '@/components/MicHelpCard';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { micMessages } from '@/data/micMessages';
import { supabase } from '@/integrations/supabase/client';
import { getSpeakTopicTitle, SPEAK_TOPICS } from '@/data/speakTopics';
import { speakText } from '@/utils/helpers';
import { buildDailySet, Evaluation, medalFor, MONOLOGUE_MS, nextStreak, overallBand, PASS_SIMILARITY, similarity } from '@/utils/speakEval';

const glass = 'border border-glass-border bg-glass/80 backdrop-blur-xl';

type K = 'free' | 'daily' | 'chat' | 'go' | 'other' | 'fluency' | 'grammar' | 'vocabulary' | 'pronunciation' | 'overall' | 'words' | 'model' | 'tips' | 'retry' | 'great' | 'evaluating' | 'speak60' | 'repeat' | 'answer' | 'next' | 'streak' | 'done' | 'start' | 'stop' | 'again';
const T: Record<string, Record<K, string>> = {
  es: { free: 'Libre 60 s', daily: 'Prueba diaria', chat: 'Charlar', go: 'Hablá 60 segundos sobre:', other: 'Otro tema', fluency: 'Fluidez', grammar: 'Gramática', vocabulary: 'Vocabulario', pronunciation: 'Pronunciación', overall: 'Banda', words: 'Revisá estas palabras', model: 'Respuesta modelo', tips: 'Consejos', retry: 'Reintentar', great: '¡Bien dicho!', evaluating: 'Evaluando tu respuesta…', speak60: 'Empezar 60 s', repeat: 'Repetí en voz alta', answer: 'Respondé hablando', next: 'Siguiente', streak: 'días seguidos', done: '¡Prueba completada!', start: 'Empezar prueba', stop: 'Terminar', again: 'Otra vez' },
  en: { free: 'Free 60 s', daily: 'Daily test', chat: 'Chat', go: 'Speak 60 seconds about:', other: 'Another topic', fluency: 'Fluency', grammar: 'Grammar', vocabulary: 'Vocabulary', pronunciation: 'Pronunciation', overall: 'Band', words: 'Check these words', model: 'Model answer', tips: 'Tips', retry: 'Retry', great: 'Well said!', evaluating: 'Evaluating your answer…', speak60: 'Start 60 s', repeat: 'Repeat out loud', answer: 'Answer by speaking', next: 'Next', streak: 'day streak', done: 'Test complete!', start: 'Start test', stop: 'Finish', again: 'Again' },
  fr: { free: 'Libre 60 s', daily: 'Test du jour', chat: 'Discuter', go: 'Parle 60 secondes de :', other: 'Autre thème', fluency: 'Aisance', grammar: 'Grammaire', vocabulary: 'Vocabulaire', pronunciation: 'Prononciation', overall: 'Niveau', words: 'Vérifie ces mots', model: 'Réponse modèle', tips: 'Conseils', retry: 'Réessayer', great: 'Bien dit !', evaluating: 'Évaluation en cours…', speak60: 'Commencer 60 s', repeat: 'Répète à voix haute', answer: 'Réponds à l’oral', next: 'Suivant', streak: 'jours d’affilée', done: 'Test terminé !', start: 'Commencer le test', stop: 'Terminer', again: 'Encore' },
  pt: { free: 'Livre 60 s', daily: 'Teste diário', chat: 'Conversar', go: 'Fale 60 segundos sobre:', other: 'Outro tema', fluency: 'Fluência', grammar: 'Gramática', vocabulary: 'Vocabulário', pronunciation: 'Pronúncia', overall: 'Banda', words: 'Revise estas palavras', model: 'Resposta modelo', tips: 'Dicas', retry: 'Tentar de novo', great: 'Muito bem!', evaluating: 'Avaliando sua resposta…', speak60: 'Começar 60 s', repeat: 'Repita em voz alta', answer: 'Responda falando', next: 'Próximo', streak: 'dias seguidos', done: 'Teste concluído!', start: 'Começar teste', stop: 'Terminar', again: 'De novo' },
  zh: { free: '自由说 60 秒', daily: '每日测试', chat: '聊天', go: '围绕这个话题说 60 秒：', other: '换个话题', fluency: '流利度', grammar: '语法', vocabulary: '词汇', pronunciation: '发音', overall: '分数', words: '检查这些词', model: '示范回答', tips: '建议', retry: '再试', great: '说得好！', evaluating: '正在评估…', speak60: '开始 60 秒', repeat: '大声跟读', answer: '用口语回答', next: '下一个', streak: '天连续', done: '测试完成！', start: '开始测试', stop: '结束', again: '再来' },
  jp: { free: '60秒スピーチ', daily: '毎日テスト', chat: 'おしゃべり', go: '60秒話してみよう：', other: '別のテーマ', fluency: '流暢さ', grammar: '文法', vocabulary: '語彙', pronunciation: '発音', overall: 'バンド', words: 'この単語を確認', model: '模範解答', tips: 'アドバイス', retry: 'もう一度', great: 'よく言えました！', evaluating: '評価しています…', speak60: '60秒スタート', repeat: '声に出して繰り返す', answer: '話して答える', next: '次へ', streak: '日連続', done: 'テスト完了！', start: 'テスト開始', stop: '終わる', again: 'もう一回' },
  ko: { free: '자유 60초', daily: '오늘의 테스트', chat: '대화', go: '60초 동안 말해 보세요:', other: '다른 주제', fluency: '유창성', grammar: '문법', vocabulary: '어휘', pronunciation: '발음', overall: '밴드', words: '이 단어를 확인하세요', model: '모범 답안', tips: '팁', retry: '다시 하기', great: '잘했어요!', evaluating: '평가 중…', speak60: '60초 시작', repeat: '소리 내어 따라 하기', answer: '말로 답하기', next: '다음', streak: '일 연속', done: '테스트 완료!', start: '테스트 시작', stop: '끝내기', again: '다시' },
  ru: { free: 'Свободно 60 с', daily: 'Тест дня', chat: 'Беседа', go: 'Говори 60 секунд на тему:', other: 'Другая тема', fluency: 'Беглость', grammar: 'Грамматика', vocabulary: 'Лексика', pronunciation: 'Произношение', overall: 'Балл', words: 'Проверь эти слова', model: 'Образец ответа', tips: 'Советы', retry: 'Ещё раз', great: 'Отлично сказано!', evaluating: 'Оцениваю ответ…', speak60: 'Начать 60 с', repeat: 'Повтори вслух', answer: 'Ответь устно', next: 'Далее', streak: 'дней подряд', done: 'Тест завершён!', start: 'Начать тест', stop: 'Закончить', again: 'Снова' },
  ar: { free: 'حر 60 ث', daily: 'اختبار اليوم', chat: 'دردشة', go: 'تحدث 60 ثانية عن:', other: 'موضوع آخر', fluency: 'الطلاقة', grammar: 'القواعد', vocabulary: 'المفردات', pronunciation: 'النطق', overall: 'الدرجة', words: 'راجع هذه الكلمات', model: 'إجابة نموذجية', tips: 'نصائح', retry: 'أعد المحاولة', great: 'أحسنت!', evaluating: 'جارٍ التقييم…', speak60: 'ابدأ 60 ث', repeat: 'كرر بصوت عالٍ', answer: 'أجب بالكلام', next: 'التالي', streak: 'أيام متتالية', done: 'اكتمل الاختبار!', start: 'ابدأ الاختبار', stop: 'إنهاء', again: 'مرة أخرى' },
  hi: { free: 'फ़्री 60 से', daily: 'दैनिक टेस्ट', chat: 'बातचीत', go: '60 सेकंड बोलें:', other: 'दूसरा विषय', fluency: 'प्रवाह', grammar: 'व्याकरण', vocabulary: 'शब्दावली', pronunciation: 'उच्चारण', overall: 'बैंड', words: 'ये शब्द जाँचें', model: 'आदर्श उत्तर', tips: 'सुझाव', retry: 'फिर कोशिश', great: 'बहुत बढ़िया!', evaluating: 'मूल्यांकन हो रहा है…', speak60: '60 से शुरू', repeat: 'ज़ोर से दोहराएँ', answer: 'बोलकर जवाब दें', next: 'अगला', streak: 'दिन लगातार', done: 'टेस्ट पूरा!', start: 'टेस्ट शुरू', stop: 'समाप्त', again: 'फिर से' },
  ro: { free: 'Liber 60 s', daily: 'Testul zilei', chat: 'Discuție', go: 'Vorbește 60 de secunde despre:', other: 'Altă temă', fluency: 'Fluență', grammar: 'Gramatică', vocabulary: 'Vocabular', pronunciation: 'Pronunție', overall: 'Nivel', words: 'Verifică aceste cuvinte', model: 'Răspuns model', tips: 'Sfaturi', retry: 'Reîncearcă', great: 'Bine spus!', evaluating: 'Evaluez răspunsul…', speak60: 'Începe 60 s', repeat: 'Repetă cu voce tare', answer: 'Răspunde vorbind', next: 'Următorul', streak: 'zile la rând', done: 'Test terminat!', start: 'Începe testul', stop: 'Termină', again: 'Din nou' },
};
export const modeLabel = (native: string, k: 'free' | 'daily' | 'chat') => (T[native] || T.en)[k];

type Props = { lang: string; nativeLang: string; level: string; onXP: (n: number) => void };

async function evaluate(body: Record<string, unknown>): Promise<Evaluation> {
  const { data, error } = await supabase.functions.invoke('speak-evaluate', { body });
  if (error || (data as { error?: string })?.error) throw new Error(error?.message || (data as { error: string }).error);
  return data as Evaluation;
}

function Ring({ seconds }: { seconds: number }) {
  const left = Math.max(0, MONOLOGUE_MS / 1000 - seconds);
  const pct = left / (MONOLOGUE_MS / 1000);
  return <div className="relative flex h-28 w-28 items-center justify-center">
    <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
      <circle cx="50" cy="50" r="44" className="fill-none stroke-muted" strokeWidth="8" />
      <circle cx="50" cy="50" r="44" className="fill-none stroke-secondary transition-all" strokeWidth="8" strokeLinecap="round" strokeDasharray={276} strokeDashoffset={276 * (1 - pct)} />
    </svg>
    <span className="font-display text-3xl font-extrabold">{left}</span>
  </div>;
}

/** Pronunciation retry: listen, repeat one word until it matches. */
function WordRetry({ word, lang, nativeLang }: { word: string; lang: string; nativeLang: string }) {
  const t = T[nativeLang] || T.en;
  const [ok, setOk] = useState<boolean | null>(null);
  const mic = useSpeechRecognition(lang, heard => { setOk(similarity(heard, word) >= PASS_SIMILARITY); }, micMessages(nativeLang));
  return <div className={`${glass} flex items-center justify-between gap-2 rounded-xl p-3`}>
    <Button variant="ghost" className="h-auto px-1 font-semibold" onClick={() => speakText(word, lang)}><Volume2 />{word}</Button>
    <div className="flex items-center gap-2">
      {ok === true && <span className="flex items-center gap-1 text-sm font-bold text-success"><Check className="h-4 w-4" />{t.great}</span>}
      {ok === false && <span className="text-sm text-foreground-muted">{mic.transcript}</span>}
      <Button size="sm" variant={mic.isListening ? 'destructive' : 'secondary'} disabled={mic.isTranscribing} onClick={() => mic.isListening ? mic.stop() : mic.start()}>
        {mic.isListening ? <Square /> : <RotateCcw />}{mic.isListening ? t.stop : t.retry}
      </Button>
    </div>
  </div>;
}

function Result({ ev, lang, nativeLang }: { ev: Evaluation; lang: string; nativeLang: string }) {
  const t = T[nativeLang] || T.en;
  const band = overallBand(ev);
  const medal = { gold: '🥇', silver: '🥈', bronze: '🥉' }[medalFor(band)];
  return <div className="space-y-4">
    <div className={`${glass} flex items-center gap-4 rounded-2xl p-4`}>
      <span className="text-4xl">{medal}</span>
      <div><p className="text-xs font-bold uppercase text-foreground-muted">{t.overall}</p><p className="font-display text-3xl font-extrabold">{band.toFixed(1)}</p></div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {(['fluency', 'grammar', 'vocabulary', 'pronunciation'] as const).map(k => <div key={k} className={`${glass} rounded-xl p-3`}>
        <p className="text-xs text-foreground-muted">{t[k]}</p>
        <p className="font-display text-xl font-bold">{ev[k].toFixed(1)}</p>
        <div className="mt-1 h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-secondary" style={{ width: `${(ev[k] / 9) * 100}%` }} /></div>
      </div>)}
    </div>
    {ev.words.length > 0 && <div className="space-y-2"><p className="text-sm font-bold">{t.words}</p>{ev.words.map(w => <WordRetry key={w} word={w} lang={lang} nativeLang={nativeLang} />)}</div>}
    {ev.model && <div className={`${glass} rounded-2xl p-4`}>
      <div className="flex items-center justify-between"><p className="text-sm font-bold">{t.model}</p><Button size="icon-sm" variant="ghost" onClick={() => speakText(ev.model, lang)} aria-label={t.model}><Volume2 /></Button></div>
      <p className="mt-1">{ev.model}</p><p className="mt-2 text-sm text-foreground-secondary">{ev.modelMeaning}</p>
    </div>}
    {ev.tips.length > 0 && <div className={`${glass} rounded-2xl p-4`}><p className="text-sm font-bold">{t.tips}</p><ul className="mt-1 list-disc space-y-1 ps-5 text-sm">{ev.tips.map(tip => <li key={tip}>{tip}</li>)}</ul></div>}
  </div>;
}

export function FreeTalk({ lang, nativeLang, level, onXP }: Props) {
  const t = T[nativeLang] || T.en;
  const [topicIdx, setTopicIdx] = useState(() => Math.floor(Math.random() * SPEAK_TOPICS.length));
  const topic = SPEAK_TOPICS[topicIdx];
  const [ev, setEv] = useState<Evaluation | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const secRef = useRef(0);
  const mic = useSpeechRecognition(lang, async said => {
    setBusy(true); setErr(null);
    try { const r = await evaluate({ said, lang, native: nativeLang, topic: topic.prompt, level, seconds: secRef.current }); setEv(r); onXP(Math.round(overallBand(r) * 8)); }
    catch (e) { setErr((e as Error).message); } finally { setBusy(false); }
  }, micMessages(nativeLang), { monologue: true, maxMs: MONOLOGUE_MS });
  secRef.current = mic.seconds ? Math.round(mic.seconds / 4) : secRef.current;
  const shuffle = () => { setEv(null); setErr(null); setTopicIdx(i => (i + 1 + Math.floor(Math.random() * (SPEAK_TOPICS.length - 1))) % SPEAK_TOPICS.length); };

  return <div className="mx-auto max-w-xl space-y-5">
    <div className={`${glass} rounded-2xl p-5 text-center`}>
      <p className="text-xs font-bold uppercase text-foreground-muted">{t.go}</p>
      <p className="mt-1 font-display text-2xl font-bold">{topic.emoji} {getSpeakTopicTitle(topic.id, nativeLang)}</p>
      <Button variant="ghost" size="sm" className="mt-2" onClick={shuffle} disabled={mic.isListening || busy}><Shuffle />{t.other}</Button>
    </div>
    <div className="flex flex-col items-center gap-4">
      {mic.isListening ? <Ring seconds={Math.round(mic.seconds / 4)} /> : <VoiceOrb state={busy || mic.isTranscribing ? 'thinking' : 'idle'} />}
      {busy || mic.isTranscribing ? <p className="text-sm text-foreground-secondary">{t.evaluating}</p> :
        <Button size="lg" variant={mic.isListening ? 'destructive' : 'default'} disabled={!mic.isSupported} onClick={() => { if (mic.isListening) void mic.stop(); else { setEv(null); void mic.start(); } }}>
          {mic.isListening ? <Square /> : <Mic />}{mic.isListening ? t.stop : ev ? t.again : t.speak60}
        </Button>}
      {(mic.micError || err) && <p className="text-center text-sm text-destructive">{mic.micError || err}</p>}
      {mic.micBlock && <MicHelpCard reason={mic.micBlock} nativeLang={nativeLang} glass={glass} />}
    </div>
    {ev && <Result ev={ev} lang={lang} nativeLang={nativeLang} />}
  </div>;
}

const DAILY_STORE = 'voxia-daily-speak';
const CORR_STORE = 'voxia-speak-corrections';
type DailyRecord = Record<string, { last?: string; streak?: number; lastScore?: number }>;

export function DailyTest({ lang, nativeLang, level, onXP }: Props) {
  const t = T[nativeLang] || T.en;
  const today = new Date().toISOString().slice(0, 10);
  const items = useMemo(() => {
    let corr: { lang: string; right: string }[] = [];
    try { corr = JSON.parse(localStorage.getItem(CORR_STORE) || '[]'); } catch { /* none */ }
    return buildDailySet(lang, corr, SPEAK_TOPICS, Number(today.replace(/-/g, '')));
  }, [lang, today]);
  const [record, setRecord] = useState<DailyRecord>(() => { try { return JSON.parse(localStorage.getItem(DAILY_STORE) || '{}'); } catch { return {}; } });
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ ok?: boolean; ev?: Evaluation } | null>(null);
  const [busy, setBusy] = useState(false);
  const item = items[step];

  const mic = useSpeechRecognition(lang, async said => {
    if (!item) return;
    if (item.kind === 'repeat') {
      const s = similarity(said, item.text); setFeedback({ ok: s >= PASS_SIMILARITY }); setScores(x => [...x, Math.round(s * 9 * 2) / 2]);
    } else {
      setBusy(true);
      try { const ev = await evaluate({ said, lang, native: nativeLang, topic: item.prompt, level, seconds: 30 }); setFeedback({ ev }); setScores(x => [...x, overallBand(ev)]); }
      catch { setFeedback({ ok: false }); } finally { setBusy(false); }
    }
  }, micMessages(nativeLang));

  const finish = () => {
    const avg = scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 2) / 2 : 0;
    const next: DailyRecord = { ...record, [lang]: { last: today, streak: nextStreak(record[lang], today), lastScore: avg } };
    setRecord(next); try { localStorage.setItem(DAILY_STORE, JSON.stringify(next)); } catch { /* ignore */ }
    onXP(60); setStep(items.length);
  };
  const advance = () => { setFeedback(null); if (step + 1 >= items.length) finish(); else setStep(step + 1); };
  const mine = record[lang];

  if (step < 0 || step >= items.length) {
    const avg = step >= items.length ? record[lang]?.lastScore : undefined;
    return <div className="mx-auto max-w-xl space-y-4 text-center">
      <div className={`${glass} rounded-2xl p-6`}>
        <Flame className="mx-auto h-10 w-10 text-accent" />
        <p className="mt-2 font-display text-3xl font-extrabold">{mine?.streak || 0} <span className="text-base font-semibold text-foreground-secondary">{t.streak}</span></p>
        {avg !== undefined && <><p className="mt-3 font-bold">{t.done}</p><p className="font-display text-4xl font-extrabold">{avg.toFixed(1)}</p></>}
      </div>
      <Button size="lg" onClick={() => { setScores([]); setFeedback(null); setStep(0); }}>{avg !== undefined ? t.again : t.start}</Button>
    </div>;
  }

  return <div className="mx-auto max-w-xl space-y-5">
    <div className="h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-secondary transition-all" style={{ width: `${(step / items.length) * 100}%` }} /></div>
    <div className={`${glass} rounded-2xl p-5 text-center`}>
      <p className="text-xs font-bold uppercase text-foreground-muted">{item.kind === 'repeat' ? t.repeat : t.answer}</p>
      {item.kind === 'repeat'
        ? <Button variant="ghost" className="mt-2 h-auto whitespace-normal font-display text-2xl font-bold" onClick={() => speakText(item.text, lang)}><Volume2 />{item.text}</Button>
        : <p className="mt-2 font-display text-2xl font-bold">{getSpeakTopicTitle(item.topicId, nativeLang)}</p>}
    </div>
    <div className="flex flex-col items-center gap-3">
      <VoiceOrb state={mic.isListening ? 'listening' : busy || mic.isTranscribing ? 'thinking' : 'idle'} />
      {!feedback && <Button size="lg" variant={mic.isListening ? 'destructive' : 'default'} disabled={busy || mic.isTranscribing || !mic.isSupported} onClick={() => mic.isListening ? void mic.stop() : void mic.start()}>
        {mic.isListening ? <Square /> : <Mic />}{mic.isListening ? t.stop : item.kind === 'repeat' ? t.repeat : t.answer}
      </Button>}
      {busy && <p className="text-sm text-foreground-secondary">{t.evaluating}</p>}
      {mic.micError && <p className="text-sm text-destructive">{mic.micError}</p>}
      {mic.micBlock && <MicHelpCard reason={mic.micBlock} nativeLang={nativeLang} glass={glass} />}
    </div>
    {feedback?.ok !== undefined && <p className={`text-center font-bold ${feedback.ok ? 'text-success' : 'text-foreground-secondary'}`}>{feedback.ok ? t.great : mic.transcript}</p>}
    {feedback?.ev && <Result ev={feedback.ev} lang={lang} nativeLang={nativeLang} />}
    {feedback && <div className="flex justify-center gap-2">
      {feedback.ok === false && <Button variant="secondary" onClick={() => setFeedback(null)}><RotateCcw />{t.retry}</Button>}
      <Button onClick={advance}>{t.next}</Button>
    </div>}
  </div>;
}
