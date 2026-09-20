// Mic feedback messages in every supported native language, passed to
// useSpeechRecognition so errors match the learner's UI language.
import type { MicMessages } from '@/hooks/useSpeechRecognition';

const M: Record<string, MicMessages> = {
  es: {
    noVoice: 'No detecté voz. Acércate al micrófono e inténtalo otra vez.',
    tooShort: 'No escuché nada. Habla un poco más cerca del micrófono.',
    notUnderstood: 'No pude entender el audio. Inténtalo otra vez.',
  },
  en: {
    noVoice: "I didn't hear any voice. Get closer to the mic and try again.",
    tooShort: "I heard nothing. Speak a bit closer to the microphone.",
    notUnderstood: "I couldn't understand the audio. Try again.",
  },
  fr: {
    noVoice: "Je n'ai entendu aucune voix. Rapproche-toi du micro et réessaie.",
    tooShort: "Je n'ai rien entendu. Parle un peu plus près du micro.",
    notUnderstood: "Je n'ai pas compris l'audio. Réessaie.",
  },
  pt: {
    noVoice: 'Não ouvi nenhuma voz. Aproxime-se do microfone e tente de novo.',
    tooShort: 'Não ouvi nada. Fale mais perto do microfone.',
    notUnderstood: 'Não consegui entender o áudio. Tente de novo.',
  },
  zh: {
    noVoice: '没有听到声音。请靠近麦克风再试一次。',
    tooShort: '什么也没听到。请靠近麦克风大声一点。',
    notUnderstood: '没听清这段录音，请再试一次。',
  },
  jp: {
    noVoice: '声が聞こえませんでした。マイクに近づいてもう一度話してください。',
    tooShort: '何も聞こえませんでした。もう少しマイクに近づいて話してください。',
    notUnderstood: '音声を理解できませんでした。もう一度お試しください。',
  },
  ko: {
    noVoice: '목소리가 들리지 않았어요. 마이크에 가까이 대고 다시 말해 주세요.',
    tooShort: '아무것도 들리지 않았어요. 마이크에 좀 더 가까이 말해 주세요.',
    notUnderstood: '음성을 알아듣지 못했어요. 다시 시도해 주세요.',
  },
  ru: {
    noVoice: 'Голос не слышен. Подойдите ближе к микрофону и попробуйте ещё раз.',
    tooShort: 'Ничего не слышно. Говорите ближе к микрофону.',
    notUnderstood: 'Не удалось разобрать аудио. Попробуйте ещё раз.',
  },
  ar: {
    noVoice: 'لم أسمع أي صوت. اقترب من الميكروفون وحاول مرة أخرى.',
    tooShort: 'لم أسمع شيئًا. تحدث أقرب إلى الميكروفون.',
    notUnderstood: 'لم أتمكن من فهم الصوت. حاول مرة أخرى.',
  },
  hi: {
    noVoice: 'कोई आवाज़ नहीं सुनाई दी। माइक के पास आकर फिर कोशिश करें।',
    tooShort: 'कुछ नहीं सुनाई दिया। माइक्रोफ़ोन के थोड़ा पास बोलें।',
    notUnderstood: 'ऑडियो समझ नहीं आया। फिर कोशिश करें।',
  },
  ro: {
    noVoice: 'Nu am auzit nicio voce. Apropie-te de microfon și încearcă din nou.',
    tooShort: 'Nu am auzit nimic. Vorbește puțin mai aproape de microfon.',
    notUnderstood: 'Nu am putut înțelege audio. Încearcă din nou.',
  },
};

export function micMessages(nativeLang: string): MicMessages {
  return M[nativeLang] || M.es;
}
