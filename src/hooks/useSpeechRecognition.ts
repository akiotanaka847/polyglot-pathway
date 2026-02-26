import { useState, useCallback, useRef } from 'react';
import { getLangConfig } from '@/data/languages';

export function useSpeechRecognition(lang: string) {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const isSupported = typeof window !== 'undefined' && 
    !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  const start = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    
    const r = new SR();
    const config = getLangConfig(lang);
    r.lang = config.ttsCode;
    r.continuous = false;
    r.interimResults = true;
    r.maxAlternatives = 1;

    r.onresult = (e: any) => {
      const results = Array.from(e.results as SpeechRecognitionResultList);
      const t = results.map((r: any) => r[0].transcript).join('');
      setTranscript(t);
    };

    r.onend = () => setIsListening(false);
    r.onerror = (e: any) => {
      console.warn('Speech recognition error:', e.error);
      setIsListening(false);
    };

    recognitionRef.current = r;
    setTranscript('');
    r.start();
    setIsListening(true);
  }, [lang]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { transcript, isListening, isSupported, start, stop, setTranscript };
}
