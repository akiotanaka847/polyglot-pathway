import { describe, it, expect } from 'vitest';
import { extractTarget } from '@/utils/ttsGuard';

describe('listen button only reads the learning language', () => {
  it('Spanish explanation is not read with a Japanese voice', () => {
    expect(extractTarget('¿Cómo se dice gato en japonés?', 'jp')).toBe('');
  });
  it('mixed line keeps only the Japanese part', () => {
    expect(extractTarget('猫 significa gato', 'jp')).toBe('猫');
  });
  it('pure Japanese is read as is', () => {
    expect(extractTarget('おはようございます', 'jp')).toBe('おはようございます');
  });
  it('Korean voice ignores Latin text', () => {
    expect(extractTarget('안녕하세요 = hola', 'ko')).toBe('안녕하세요');
  });
  it('Latin target keeps Latin text', () => {
    expect(extractTarget('Good morning', 'en')).toBe('Good morning');
  });
});
