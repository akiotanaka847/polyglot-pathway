import { Exam } from './types';

// Helper to generate B1-level exam for a language
function makeB1(lang: string, title: string, secNames: [string, string]): Exam {
  const topics: Record<string, { vocab: { q: string; opts: string[]; ans: number }[]; grammar: { q: string; opts: string[]; ans: number }[] }> = {
    vi: {
      vocab: [
        { q: '¿Qué significa phát triển?', opts: ['Destruir', 'Desarrollar', 'Descubrir', 'Describir'], ans: 1 },
        { q: '¿"Ảnh hưởng" significa?', opts: ['Imagen', 'Influencia', 'Sombra', 'Reflejo'], ans: 1 },
        { q: '¿"Trách nhiệm" significa?', opts: ['Libertad', 'Responsabilidad', 'Autoridad', 'Derecho'], ans: 1 },
        { q: '¿"Nghiên cứu" significa?', opts: ['Estudiar', 'Investigar', 'Enseñar', 'Aprender'], ans: 1 },
        { q: '¿"So sánh" significa?', opts: ['Competir', 'Comparar', 'Cooperar', 'Combinar'], ans: 1 },
        { q: '¿"Kinh nghiệm" significa?', opts: ['Futuro', 'Experiencia', 'Opinión', 'Resultado'], ans: 1 },
        { q: '¿"Quyết định" significa?', opts: ['Pregunta', 'Decisión', 'Excusa', 'Resultado'], ans: 1 },
        { q: '¿"Đặc biệt" significa?', opts: ['Normal', 'Especial', 'Simple', 'Difícil'], ans: 1 },
      ],
      grammar: [
        { q: '"Mặc dù...nhưng..." expresa:', opts: ['Causa', 'Concesión', 'Condición', 'Tiempo'], ans: 1 },
        { q: '"Không những...mà còn..." significa:', opts: ['O...o', 'No solo...sino también', 'Aunque...pero', 'Si...entonces'], ans: 1 },
        { q: '"Bị" marca qué voz?', opts: ['Activa', 'Pasiva (negativa)', 'Imperativa', 'Subjuntiva'], ans: 1 },
        { q: '"Miễn là" expresa:', opts: ['Causa', 'Con tal de que', 'Oposición', 'Tiempo'], ans: 1 },
        { q: '"Càng...càng..." significa:', opts: ['Ni...ni', 'Cuanto más...más', 'O...o', 'Tanto...como'], ans: 1 },
        { q: '"Cho nên" expresa:', opts: ['Causa', 'Consecuencia', 'Condición', 'Concesión'], ans: 1 },
        { q: '"Tuy...nhưng..." expresa:', opts: ['Causa-efecto', 'Concesión', 'Condición', 'Adición'], ans: 1 },
        { q: '"Nếu...thì..." expresa:', opts: ['Causa', 'Condición', 'Concesión', 'Adición'], ans: 1 },
      ],
    },
    th: {
      vocab: [
        { q: '¿Qué significa พัฒนา?', opts: ['Destruir', 'Desarrollar', 'Descubrir', 'Describir'], ans: 1 },
        { q: '¿"อิทธิพล" significa?', opts: ['Imagen', 'Influencia', 'Sombra', 'Reflejo'], ans: 1 },
        { q: '¿"ความรับผิดชอบ" significa?', opts: ['Libertad', 'Responsabilidad', 'Autoridad', 'Derecho'], ans: 1 },
        { q: '¿"วิจัย" significa?', opts: ['Estudiar', 'Investigar', 'Enseñar', 'Aprender'], ans: 1 },
        { q: '¿"เปรียบเทียบ" significa?', opts: ['Competir', 'Comparar', 'Cooperar', 'Combinar'], ans: 1 },
        { q: '¿"ประสบการณ์" significa?', opts: ['Futuro', 'Experiencia', 'Opinión', 'Resultado'], ans: 1 },
        { q: '¿"ตัดสินใจ" significa?', opts: ['Pregunta', 'Decisión', 'Excusa', 'Resultado'], ans: 1 },
        { q: '¿"พิเศษ" significa?', opts: ['Normal', 'Especial', 'Simple', 'Difícil'], ans: 1 },
      ],
      grammar: [
        { q: '"แม้ว่า...แต่..." expresa:', opts: ['Causa', 'Concesión', 'Condición', 'Tiempo'], ans: 1 },
        { q: '"ไม่เพียงแต่...แต่ยัง..." significa:', opts: ['O...o', 'No solo...sino también', 'Aunque...pero', 'Si...entonces'], ans: 1 },
        { q: '"ถูก" marca qué voz?', opts: ['Activa', 'Pasiva', 'Imperativa', 'Subjuntiva'], ans: 1 },
        { q: '"ขอให้" expresa:', opts: ['Causa', 'Deseo/Petición', 'Oposición', 'Tiempo'], ans: 1 },
        { q: '"ยิ่ง...ยิ่ง..." significa:', opts: ['Ni...ni', 'Cuanto más...más', 'O...o', 'Tanto...como'], ans: 1 },
        { q: '"ดังนั้น" expresa:', opts: ['Causa', 'Consecuencia', 'Condición', 'Concesión'], ans: 1 },
        { q: '"ทั้งๆ ที่" expresa:', opts: ['Causa-efecto', 'A pesar de que', 'Condición', 'Adición'], ans: 1 },
        { q: '"หาก...ก็..." expresa:', opts: ['Causa', 'Condición', 'Concesión', 'Adición'], ans: 1 },
      ],
    },
    nl: {
      vocab: [
        { q: '¿Qué significa ontwikkeling?', opts: ['Destrucción', 'Desarrollo', 'Descubrimiento', 'Descripción'], ans: 1 },
        { q: '¿"Invloed" significa?', opts: ['Imagen', 'Influencia', 'Sombra', 'Reflejo'], ans: 1 },
        { q: '¿"Verantwoordelijkheid" significa?', opts: ['Libertad', 'Responsabilidad', 'Autoridad', 'Derecho'], ans: 1 },
        { q: '¿"Onderzoek" significa?', opts: ['Estudiar', 'Investigación', 'Enseñar', 'Aprender'], ans: 1 },
        { q: '¿"Vergelijken" significa?', opts: ['Competir', 'Comparar', 'Cooperar', 'Combinar'], ans: 1 },
        { q: '¿"Ervaring" significa?', opts: ['Futuro', 'Experiencia', 'Opinión', 'Resultado'], ans: 1 },
        { q: '¿"Beslissing" significa?', opts: ['Pregunta', 'Decisión', 'Excusa', 'Resultado'], ans: 1 },
        { q: '¿"Bijzonder" significa?', opts: ['Normal', 'Especial', 'Simple', 'Difícil'], ans: 1 },
      ],
      grammar: [
        { q: '"Hoewel" expresa:', opts: ['Causa', 'Concesión', 'Condición', 'Tiempo'], ans: 1 },
        { q: '"Niet alleen...maar ook..." significa:', opts: ['O...o', 'No solo...sino también', 'Aunque...pero', 'Si...entonces'], ans: 1 },
        { q: '"Er wordt + participio" forma:', opts: ['Activa', 'Pasiva impersonal', 'Imperativa', 'Condicional'], ans: 1 },
        { q: '"Mits" expresa:', opts: ['Causa', 'Con tal de que', 'Oposición', 'Tiempo'], ans: 1 },
        { q: '"Hoe...hoe..." significa:', opts: ['Ni...ni', 'Cuanto más...más', 'O...o', 'Tanto...como'], ans: 1 },
        { q: '"Daarom" expresa:', opts: ['Causa', 'Consecuencia', 'Condición', 'Concesión'], ans: 1 },
        { q: '"Ondanks" expresa:', opts: ['Causa', 'A pesar de', 'Condición', 'Adición'], ans: 1 },
        { q: '¿Konjunktief II de "zijn" (ik)?', opts: ['was', 'zou zijn', 'ben', 'geweest'], ans: 1 },
      ],
    },
    pl: {
      vocab: [
        { q: '¿Qué significa rozwój?', opts: ['Destrucción', 'Desarrollo', 'Descubrimiento', 'Descripción'], ans: 1 },
        { q: '¿"Wpływ" significa?', opts: ['Imagen', 'Influencia', 'Sombra', 'Reflejo'], ans: 1 },
        { q: '¿"Odpowiedzialność" significa?', opts: ['Libertad', 'Responsabilidad', 'Autoridad', 'Derecho'], ans: 1 },
        { q: '¿"Badanie" significa?', opts: ['Estudiar', 'Investigación', 'Enseñar', 'Aprender'], ans: 1 },
        { q: '¿"Porównywać" significa?', opts: ['Competir', 'Comparar', 'Cooperar', 'Combinar'], ans: 1 },
        { q: '¿"Doświadczenie" significa?', opts: ['Futuro', 'Experiencia', 'Opinión', 'Resultado'], ans: 1 },
        { q: '¿"Decyzja" significa?', opts: ['Pregunta', 'Decisión', 'Excusa', 'Resultado'], ans: 1 },
        { q: '¿"Szczególny" significa?', opts: ['Normal', 'Especial', 'Simple', 'Difícil'], ans: 1 },
      ],
      grammar: [
        { q: '"Chociaż" expresa:', opts: ['Causa', 'Concesión', 'Condición', 'Tiempo'], ans: 1 },
        { q: '"Nie tylko...ale także..." significa:', opts: ['O...o', 'No solo...sino también', 'Aunque...pero', 'Si...entonces'], ans: 1 },
        { q: '¿"Tryb warunkowy" es?', opts: ['Indicativo', 'Condicional', 'Imperativo', 'Pasado'], ans: 1 },
        { q: '"Pod warunkiem że" expresa:', opts: ['Causa', 'Con tal de que', 'Oposición', 'Tiempo'], ans: 1 },
        { q: '"Im...tym..." significa:', opts: ['Ni...ni', 'Cuanto más...más', 'O...o', 'Tanto...como'], ans: 1 },
        { q: '"Dlatego" expresa:', opts: ['Causa', 'Consecuencia', 'Condición', 'Concesión'], ans: 1 },
        { q: '"Pomimo" expresa:', opts: ['Causa', 'A pesar de', 'Condición', 'Adición'], ans: 1 },
        { q: '"Gdyby" introduce:', opts: ['Causa', 'Condicional irreal', 'Concesión', 'Adición'], ans: 1 },
      ],
    },
  };

  const t = topics[lang];
  if (!t) {
    // Generic B1 fallback
    return {
      title,
      sections: [
        { name: secNames[0], time: 25, qs: [
          { t: 'mc', q: '¿El subjuntivo expresa?', opts: ['Certeza', 'Duda/Deseo', 'Pasado', 'Futuro'], ans: 1 },
          { t: 'mc', q: '¿"Aunque" requiere?', opts: ['Solo indicativo', 'Indicativo o subjuntivo', 'Solo infinitivo', 'Solo imperativo'], ans: 1 },
          { t: 'mc', q: '¿Condicional irreal usa?', opts: ['Presente', 'Pasado/Subjuntivo', 'Futuro', 'Imperativo'], ans: 1 },
          { t: 'mc', q: '¿Voz pasiva requiere?', opts: ['Ser + participio', 'Solo verbo activo', 'Infinitivo', 'Gerundio'], ans: 0 },
          { t: 'mc', q: '¿"Sin embargo" expresa?', opts: ['Causa', 'Contraste', 'Tiempo', 'Adición'], ans: 1 },
          { t: 'mc', q: '¿Pronombre relativo posesivo?', opts: ['que', 'quien', 'cuyo/whose', 'donde'], ans: 2 },
          { t: 'mc', q: '¿"A menos que" expresa?', opts: ['Causa', 'Condición negativa', 'Tiempo', 'Adición'], ans: 1 },
          { t: 'mc', q: '¿"No obstante" es sinónimo de?', opts: ['Porque', 'Sin embargo', 'Además', 'Entonces'], ans: 1 },
          { t: 'mc', q: '¿Discurso indirecto cambia?', opts: ['Nada', 'Tiempos verbales', 'Solo pronombres', 'Solo lugar'], ans: 1 },
          { t: 'mc', q: '¿"Con tal de que" expresa?', opts: ['Causa', 'Condición', 'Concesión', 'Tiempo'], ans: 1 },
        ]},
      ]
    };
  }

  return {
    title,
    sections: [
      { name: secNames[0], time: 20, qs: t.vocab.map(v => ({ t: 'mc' as const, ...v })) },
      { name: secNames[1], time: 25, qs: t.grammar.map(g => ({ t: 'mc' as const, ...g })) },
    ]
  };
}

// Helper to generate B2-level exam
function makeB2(title: string): Exam {
  return {
    title,
    sections: [
      { name: 'Comprensión y análisis', time: 30, qs: [
        { t: 'mc', q: '¿Qué expresa una oración concesiva?', opts: ['Causa-efecto', 'Contraste/Pese a algo', 'Tiempo', 'Adición'], ans: 1 },
        { t: 'mc', q: '¿Subjuntivo pasado se usa para?', opts: ['Hechos reales', 'Hipótesis irreales pasadas', 'Futuro', 'Presente habitual'], ans: 1 },
        { t: 'mc', q: '¿"No obstante" es registro?', opts: ['Coloquial', 'Formal', 'Infantil', 'Dialecto'], ans: 1 },
        { t: 'mc', q: '¿Voz pasiva impersonal sirve para?', opts: ['Enfatizar agente', 'Omitir agente', 'Preguntar', 'Negar'], ans: 1 },
        { t: 'mc', q: '¿Discurso indirecto libre es?', opts: ['Cita directa', 'Narración sin verbos de reporte', 'Diálogo', 'Monólogo'], ans: 1 },
        { t: 'mc', q: '¿"En virtud de" expresa?', opts: ['Oposición', 'Causa formal', 'Tiempo', 'Condición'], ans: 1 },
        { t: 'mc', q: '¿Participio absoluto es?', opts: ['Verbo principal', 'Cláusula subordinada sin conector', 'Pregunta', 'Negación'], ans: 1 },
        { t: 'mc', q: '¿"Cuanto más...más..." es estructura?', opts: ['Concesiva', 'Comparativa correlativa', 'Temporal', 'Causal'], ans: 1 },
        { t: 'mc', q: '¿"Es más" introduce?', opts: ['Contraste', 'Adición enfática', 'Causa', 'Conclusión'], ans: 1 },
        { t: 'mc', q: '¿Registro formal usa?', opts: ['Contracciones', 'Vocabulario preciso y conectores elaborados', 'Emojis', 'Jerga'], ans: 1 },
      ]},
    ]
  };
}

// Helper to generate C1-level exam
function makeC1(title: string): Exam {
  return {
    title,
    sections: [
      { name: 'Análisis avanzado', time: 35, qs: [
        { t: 'mc', q: '¿Qué es una "litote"?', opts: ['Exageración', 'Decir menos para decir más', 'Repetición', 'Contradicción'], ans: 1 },
        { t: 'mc', q: '¿"A fortiori" significa?', opts: ['Con menor razón', 'Con mayor razón', 'Sin razón', 'Por casualidad'], ans: 1 },
        { t: 'mc', q: '¿Coherencia textual requiere?', opts: ['Solo gramática', 'Progresión temática y conectores', 'Solo vocabulario', 'Solo puntuación'], ans: 1 },
        { t: 'mc', q: '¿Registro académico evita?', opts: ['Conectores', 'Jerga y coloquialismos', 'Argumentos', 'Citas'], ans: 1 },
        { t: 'mc', q: '¿"Eufemismo" es?', opts: ['Exageración', 'Atenuación de expresión', 'Repetición', 'Comparación'], ans: 1 },
        { t: 'mc', q: '¿Modalidad epistémica expresa?', opts: ['Obligación', 'Grado de certeza', 'Tiempo', 'Aspecto'], ans: 1 },
        { t: 'mc', q: '¿"Ergo" es sinónimo de?', opts: ['Sin embargo', 'Por lo tanto', 'Aunque', 'Además'], ans: 1 },
        { t: 'mc', q: '¿Anacoluto es?', opts: ['Estructura correcta', 'Ruptura sintáctica', 'Repetición elegante', 'Paralelismo'], ans: 1 },
        { t: 'mc', q: '¿"Mutatis mutandis" significa?', opts: ['Sin cambios', 'Con los cambios necesarios', 'Al contrario', 'Por ejemplo'], ans: 1 },
        { t: 'mc', q: '¿Argumentación por analogía?', opts: ['Compara casos similares', 'Niega la premisa', 'Repite la conclusión', 'Usa estadísticas'], ans: 0 },
      ]},
    ]
  };
}

// Helper to generate C2-level exam
function makeC2(title: string): Exam {
  return {
    title,
    sections: [
      { name: 'Dominio lingüístico', time: 40, qs: [
        { t: 'mc', q: '¿Qué es una "sinécdoque"?', opts: ['La parte por el todo o viceversa', 'Comparación directa', 'Repetición enfática', 'Contradicción deliberada'], ans: 0 },
        { t: 'mc', q: '¿"Hermenéutica" se refiere a?', opts: ['Estadística', 'Interpretación de textos', 'Gramática', 'Fonética'], ans: 1 },
        { t: 'mc', q: '¿Pragmática estudia?', opts: ['Sonidos', 'Significado en contexto', 'Morfología', 'Sintaxis'], ans: 1 },
        { t: 'mc', q: '¿"Sui generis" significa?', opts: ['General', 'Único en su género', 'Común', 'Antiguo'], ans: 1 },
        { t: 'mc', q: '¿Polisemia es?', opts: ['Una palabra, múltiples significados', 'Palabras que suenan igual', 'Palabras opuestas', 'Palabras sinónimas'], ans: 0 },
        { t: 'mc', q: '¿"Ipso facto" equivale a?', opts: ['Quizás', 'Por ese mismo hecho', 'A largo plazo', 'En teoría'], ans: 1 },
        { t: 'mc', q: '¿Deixis es?', opts: ['Referencia contextual (yo, aquí, ahora)', 'Gramática prescriptiva', 'Regla fonética', 'Tipo de verbo'], ans: 0 },
        { t: 'mc', q: '¿"Ab initio" significa?', opts: ['Al final', 'Desde el inicio', 'En medio', 'Sin razón'], ans: 1 },
        { t: 'mc', q: '¿Falacia ad hominem ataca?', opts: ['El argumento', 'La persona', 'La evidencia', 'La lógica'], ans: 1 },
        { t: 'mc', q: '¿"Sine qua non" significa?', opts: ['Opcional', 'Indispensable', 'Temporal', 'Probable'], ans: 1 },
      ]},
    ]
  };
}

export const B1_EXTRA_EXAMS: Record<string, Record<string, Exam>> = {};

export const B2_EXTRA_EXAMS: Record<string, Record<string, Exam>> = {
  pt: { B2: makeB2('CELPE-Bras B2 — Simulacro') },
  ru: { B2: makeB2('ТРКИ B2 — Simulacro') },
  ar: { B2: makeB2('Árabe B2 — Simulacro') },
  hi: { B2: makeB2('Hindi B2 — Simulacro') },
  es: { B2: makeB2('DELE B2 — Simulacro') },
};

export const C1_EXTRA_EXAMS: Record<string, Record<string, Exam>> = {
  pt: { C1: makeC1('CELPE-Bras C1 — Simulacro') },
  ru: { C1: makeC1('ТРКИ C1 — Simulacro') },
  ar: { C1: makeC1('Árabe C1 — Simulacro') },
  hi: { C1: makeC1('Hindi C1 — Simulacro') },
  es: { C1: makeC1('DELE C1 — Simulacro') },
};

export const C2_EXTRA_EXAMS: Record<string, Record<string, Exam>> = {
  fr: { C2: makeC2('DALF C2 — Simulacro') },
  en: { C2: makeC2('Cambridge C2 (CPE) — Simulacro') },
  pt: { C2: makeC2('CELPE-Bras C2 — Simulacro') },
  ru: { C2: makeC2('ТРКИ C2 — Simulacro') },
  ar: { C2: makeC2('Árabe C2 — Simulacro') },
  hi: { C2: makeC2('Hindi C2 — Simulacro') },
  es: { C2: makeC2('DELE C2 — Simulacro') },
};
