import { getLangConfig } from '../languages';
import { Lesson } from '../types';

// B1/N2-prep/HSK3/TOPIK3 — Intermediate topics: subjunctive, passive, relative clauses, media, politics, abstract vocab
interface L3Data {
  // Grammar
  subjunctive: string; subjRd: string; subjEx: string; subjExM: string;
  passive: string; passRd: string; passEx: string; passExM: string;
  relative: string; relRd: string; relEx: string; relExM: string;
  conditional: string; condRd: string; condEx: string; condExM: string;
  imperative: string; impRd: string; impEx: string; impExM: string;
  reported: string; repRd: string; repEx: string; repExM: string;
  // Vocab pairs
  media1: string; media1Rd: string; media2: string; media2Rd: string;
  politics1: string; politics1Rd: string; politics2: string; politics2Rd: string;
  law1: string; law1Rd: string; law2: string; law2Rd: string;
  economy1: string; economy1Rd: string; economy2: string; economy2Rd: string;
  education1: string; education1Rd: string; education2: string; education2Rd: string;
  science1: string; science1Rd: string; science2: string; science2Rd: string;
  art1: string; art1Rd: string; art2: string; art2Rd: string;
  music1: string; music1Rd: string; music2: string; music2Rd: string;
  history1: string; history1Rd: string; history2: string; history2Rd: string;
  religion1: string; religion1Rd: string; religion2: string; religion2Rd: string;
  philosophy1: string; philosophy1Rd: string; philosophy2: string; philosophy2Rd: string;
  environment1: string; environment1Rd: string; environment2: string; environment2Rd: string;
  transport1: string; transport1Rd: string; transport2: string; transport2Rd: string;
  housing1: string; housing1Rd: string; housing2: string; housing2Rd: string;
  fashion1: string; fashion1Rd: string; fashion2: string; fashion2Rd: string;
  family1: string; family1Rd: string; family2: string; family2Rd: string;
  business1: string; business1Rd: string; business2: string; business2Rd: string;
  feelings1: string; feelings1Rd: string; feelings2: string; feelings2Rd: string;
  cooking1: string; cooking1Rd: string; cooking2: string; cooking2Rd: string;
}

function makeL3(code: string, level: string, langName: string, d: L3Data): Lesson[] {
  const lang = getLangConfig(code)?.nativeName || langName;
  const p = (n: number) => `${code}-${level.toLowerCase()}-${n}`;
  const rd = (s: string) => s.toLowerCase().replace(/[^a-z\s]/g, '').trim();
  return [
    { id: p(1), title: `Subjuntivo - ${lang}`, type: 'grammar', steps: [
      { t: 'th', char: d.subjunctive, rd: d.subjRd, mn: 'Modo subjuntivo', note: `Expresar deseos y dudas en ${lang}.` },
      { t: 'th', char: d.subjEx, rd: '', mn: d.subjExM, note: 'Example in context.' },
      { t: 'mc', q: `¿Cuál expresa el subjuntivo en ${lang}?`, opts: [d.subjunctive, d.passive, d.relative, d.conditional], ans: 0 },
      { t: 'mc', q: `What does "${d.subjEx}" mean?`, opts: [d.subjExM, d.passExM, d.relExM, d.condExM], ans: 0 },
      { t: 'tx', q: `Write the reading of "${d.subjunctive}":`, ans: rd(d.subjRd) },
    ]},
    { id: p(2), title: `Voz pasiva - ${lang}`, type: 'grammar', steps: [
      { t: 'th', char: d.passive, rd: d.passRd, mn: 'Voz pasiva', note: `Construcciones pasivas en ${lang}.` },
      { t: 'th', char: d.passEx, rd: '', mn: d.passExM, note: 'Practical example.' },
      { t: 'mc', q: `¿Cuál es la voz pasiva en ${lang}?`, opts: [d.subjunctive, d.passive, d.relative, d.imperative], ans: 1 },
      { t: 'mc', q: `¿Qué significa "${d.passEx}"?`, opts: [d.subjExM, d.passExM, d.relExM, d.condExM], ans: 1 },
      { t: 'tx', q: `Reading of "${d.passive}":`, ans: rd(d.passRd) },
    ]},
    { id: p(3), title: `Cláusulas relativas - ${lang}`, type: 'grammar', steps: [
      { t: 'th', char: d.relative, rd: d.relRd, mn: 'Cláusulas relativas', note: `Conectar oraciones en ${lang}.` },
      { t: 'th', char: d.relEx, rd: '', mn: d.relExM, note: 'Example with relative clause.' },
      { t: 'mc', q: `¿Marcador de cláusula relativa en ${lang}?`, opts: [d.subjunctive, d.passive, d.relative, d.conditional], ans: 2 },
      { t: 'tx', q: `Reading of "${d.relative}":`, ans: rd(d.relRd) },
    ]},
    { id: p(4), title: `Condicional - ${lang}`, type: 'grammar', steps: [
      { t: 'th', char: d.conditional, rd: d.condRd, mn: 'Condicional', note: `Estructuras condicionales en ${lang}.` },
      { t: 'th', char: d.condEx, rd: '', mn: d.condExM, note: 'Conditional example.' },
      { t: 'mc', q: `¿Condicional en ${lang}?`, opts: [d.subjunctive, d.passive, d.conditional, d.imperative], ans: 2 },
      { t: 'mc', q: `¿Qué significa "${d.condEx}"?`, opts: [d.subjExM, d.condExM, d.relExM, d.passExM], ans: 1 },
      { t: 'tx', q: `Reading of "${d.conditional}":`, ans: rd(d.condRd) },
    ]},
    { id: p(5), title: `Imperativo - ${lang}`, type: 'grammar', steps: [
      { t: 'th', char: d.imperative, rd: d.impRd, mn: 'Imperativo/Órdenes', note: `Dar órdenes en ${lang}.` },
      { t: 'th', char: d.impEx, rd: '', mn: d.impExM, note: 'Command example.' },
      { t: 'mc', q: `¿Imperativo en ${lang}?`, opts: [d.imperative, d.passive, d.conditional, d.reported], ans: 0 },
      { t: 'tx', q: `Reading of "${d.imperative}":`, ans: rd(d.impRd) },
    ]},
    { id: p(6), title: `Discurso indirecto - ${lang}`, type: 'grammar', steps: [
      { t: 'th', char: d.reported, rd: d.repRd, mn: 'Discurso indirecto', note: `El discurso indirecto en ${lang}.` },
      { t: 'th', char: d.repEx, rd: '', mn: d.repExM, note: 'Reported speech example.' },
      { t: 'mc', q: `¿Discurso indirecto en ${lang}?`, opts: [d.imperative, d.reported, d.conditional, d.subjunctive], ans: 1 },
      { t: 'tx', q: `Reading of "${d.reported}":`, ans: rd(d.repRd) },
    ]},
    { id: p(7), title: `Medios de comunicación - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.media1, rd: d.media1Rd, mn: 'Periódico', note: `Vocabulario de los medios en ${lang}.` },
      { t: 'th', char: d.media2, rd: d.media2Rd, mn: 'Noticias de televisión', note: 'Broadcast media.' },
      { t: 'mc', q: `"Periódico" en ${lang}?`, opts: [d.media1, d.media2, d.politics1, d.politics2], ans: 0 },
      { t: 'mc', q: `"TV news" en ${lang}?`, opts: [d.media1, d.media2, d.politics1, d.politics2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.media1}":`, ans: rd(d.media1Rd) },
    ]},
    { id: p(8), title: `Política - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.politics1, rd: d.politics1Rd, mn: 'Gobierno', note: `Términos políticos en ${lang}.` },
      { t: 'th', char: d.politics2, rd: d.politics2Rd, mn: 'Elección', note: 'Democracy terms.' },
      { t: 'mc', q: `"Gobierno" en ${lang}?`, opts: [d.politics1, d.politics2, d.law1, d.law2], ans: 0 },
      { t: 'mc', q: `"Elección" en ${lang}?`, opts: [d.politics1, d.politics2, d.law1, d.law2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.politics1}":`, ans: rd(d.politics1Rd) },
    ]},
    { id: p(9), title: `Derecho y leyes - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.law1, rd: d.law1Rd, mn: 'Ley/Derecho', note: `Vocabulario jurídico en ${lang}.` },
      { t: 'th', char: d.law2, rd: d.law2Rd, mn: 'Juez/Tribunal', note: 'Justice system.' },
      { t: 'mc', q: `"Law" en ${lang}?`, opts: [d.law1, d.law2, d.politics1, d.economy1], ans: 0 },
      { t: 'mc', q: `"Juez/Tribunal" en ${lang}?`, opts: [d.law1, d.law2, d.politics2, d.economy2], ans: 1 },
    ]},
    { id: p(10), title: `Economía - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.economy1, rd: d.economy1Rd, mn: 'Mercado/Economía', note: `Términos económicos en ${lang}.` },
      { t: 'th', char: d.economy2, rd: d.economy2Rd, mn: 'Inversión', note: 'Financial concepts.' },
      { t: 'mc', q: `"Market" en ${lang}?`, opts: [d.economy1, d.economy2, d.business1, d.business2], ans: 0 },
      { t: 'mc', q: `"Inversión" en ${lang}?`, opts: [d.economy1, d.economy2, d.business1, d.business2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.economy1}":`, ans: rd(d.economy1Rd) },
    ]},
    { id: p(11), title: `Educación - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.education1, rd: d.education1Rd, mn: 'Universidad', note: `La educación en ${lang}.` },
      { t: 'th', char: d.education2, rd: d.education2Rd, mn: 'Investigación/Estudio', note: 'Academic life.' },
      { t: 'mc', q: `"Universidad" en ${lang}?`, opts: [d.education1, d.education2, d.science1, d.science2], ans: 0 },
      { t: 'mc', q: `"Research" en ${lang}?`, opts: [d.education1, d.education2, d.science1, d.science2], ans: 1 },
    ]},
    { id: p(12), title: `Ciencias - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.science1, rd: d.science1Rd, mn: 'Experimento', note: `Vocabulario científico en ${lang}.` },
      { t: 'th', char: d.science2, rd: d.science2Rd, mn: 'Descubrimiento', note: 'Scientific method.' },
      { t: 'mc', q: `"Experimento" en ${lang}?`, opts: [d.science1, d.science2, d.education1, d.education2], ans: 0 },
      { t: 'mc', q: `"Descubrimiento" en ${lang}?`, opts: [d.science1, d.science2, d.education1, d.education2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.science1}":`, ans: rd(d.science1Rd) },
    ]},
    { id: p(13), title: `Arte - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.art1, rd: d.art1Rd, mn: 'Pintura', note: `El arte en ${lang}.` },
      { t: 'th', char: d.art2, rd: d.art2Rd, mn: 'Escultura/Exposición', note: 'Fine arts.' },
      { t: 'mc', q: `"Pintura" en ${lang}?`, opts: [d.art1, d.art2, d.music1, d.music2], ans: 0 },
      { t: 'mc', q: `"Sculpture" en ${lang}?`, opts: [d.art1, d.art2, d.music1, d.music2], ans: 1 },
    ]},
    { id: p(14), title: `Música - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.music1, rd: d.music1Rd, mn: 'Concierto', note: `La música en ${lang}.` },
      { t: 'th', char: d.music2, rd: d.music2Rd, mn: 'Orquesta/Banda', note: 'Musical groups.' },
      { t: 'mc', q: `"Concierto" en ${lang}?`, opts: [d.music1, d.music2, d.art1, d.art2], ans: 0 },
      { t: 'mc', q: `"Orchestra" en ${lang}?`, opts: [d.music1, d.music2, d.art1, d.art2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.music1}":`, ans: rd(d.music1Rd) },
    ]},
    { id: p(15), title: `Historia - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.history1, rd: d.history1Rd, mn: 'Guerra/Batalla', note: `La historia en ${lang}.` },
      { t: 'th', char: d.history2, rd: d.history2Rd, mn: 'Paz/Tratado', note: 'Historical concepts.' },
      { t: 'mc', q: `"War" en ${lang}?`, opts: [d.history1, d.history2, d.politics1, d.law1], ans: 0 },
      { t: 'mc', q: `"Peace" en ${lang}?`, opts: [d.history1, d.history2, d.politics2, d.law2], ans: 1 },
    ]},
    { id: p(16), title: `Religión y creencias - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.religion1, rd: d.religion1Rd, mn: 'Templo/Iglesia', note: `La religión en ${lang}.` },
      { t: 'th', char: d.religion2, rd: d.religion2Rd, mn: 'Oración/Fe', note: 'Spiritual concepts.' },
      { t: 'mc', q: `"Templo/Iglesia" en ${lang}?`, opts: [d.religion1, d.religion2, d.history1, d.philosophy1], ans: 0 },
      { t: 'mc', q: `"Prayer" en ${lang}?`, opts: [d.religion1, d.religion2, d.history2, d.philosophy2], ans: 1 },
    ]},
    { id: p(17), title: `Filosofía - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.philosophy1, rd: d.philosophy1Rd, mn: 'Verdad/Realidad', note: `La filosofía en ${lang}.` },
      { t: 'th', char: d.philosophy2, rd: d.philosophy2Rd, mn: 'Libertad', note: 'Abstract concepts.' },
      { t: 'mc', q: `"Truth" en ${lang}?`, opts: [d.philosophy1, d.philosophy2, d.religion1, d.science1], ans: 0 },
      { t: 'mc', q: `"Freedom" en ${lang}?`, opts: [d.philosophy1, d.philosophy2, d.religion2, d.science2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.philosophy1}":`, ans: rd(d.philosophy1Rd) },
    ]},
    { id: p(18), title: `Medio ambiente - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.environment1, rd: d.environment1Rd, mn: 'Contaminación', note: `El medio ambiente en ${lang}.` },
      { t: 'th', char: d.environment2, rd: d.environment2Rd, mn: 'Reciclaje', note: 'Ecology.' },
      { t: 'mc', q: `"Contaminación" en ${lang}?`, opts: [d.environment1, d.environment2, d.science1, d.science2], ans: 0 },
      { t: 'mc', q: `"Reciclaje" en ${lang}?`, opts: [d.environment1, d.environment2, d.science1, d.science2], ans: 1 },
    ]},
    { id: p(19), title: `Transporte - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.transport1, rd: d.transport1Rd, mn: 'Tren/Metro', note: `El transporte en ${lang}.` },
      { t: 'th', char: d.transport2, rd: d.transport2Rd, mn: 'Bicicleta/Motocicleta', note: 'Urban transport.' },
      { t: 'mc', q: `"Train" en ${lang}?`, opts: [d.transport1, d.transport2, d.housing1, d.housing2], ans: 0 },
      { t: 'mc', q: `"Bicycle" en ${lang}?`, opts: [d.transport1, d.transport2, d.housing1, d.housing2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.transport1}":`, ans: rd(d.transport1Rd) },
    ]},
    { id: p(20), title: `Vivienda - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.housing1, rd: d.housing1Rd, mn: 'Apartamento', note: `La vivienda en ${lang}.` },
      { t: 'th', char: d.housing2, rd: d.housing2Rd, mn: 'Alquiler/Arriendo', note: 'Real estate.' },
      { t: 'mc', q: `"Apartment" en ${lang}?`, opts: [d.housing1, d.housing2, d.fashion1, d.fashion2], ans: 0 },
      { t: 'mc', q: `"Rent" en ${lang}?`, opts: [d.housing1, d.housing2, d.fashion1, d.fashion2], ans: 1 },
    ]},
    { id: p(21), title: `Moda - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.fashion1, rd: d.fashion1Rd, mn: 'Vestido/Traje', note: `La moda en ${lang}.` },
      { t: 'th', char: d.fashion2, rd: d.fashion2Rd, mn: 'Accesorios', note: 'Clothing details.' },
      { t: 'mc', q: `"Dress" en ${lang}?`, opts: [d.fashion1, d.fashion2, d.family1, d.family2], ans: 0 },
      { t: 'mc', q: `"Accesorios" en ${lang}?`, opts: [d.fashion1, d.fashion2, d.family1, d.family2], ans: 1 },
    ]},
    { id: p(22), title: `Familia extendida - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.family1, rd: d.family1Rd, mn: 'Abuelos', note: `La familia extensa en ${lang}.` },
      { t: 'th', char: d.family2, rd: d.family2Rd, mn: 'Primo/Sobrino', note: 'Family relations.' },
      { t: 'mc', q: `"Abuelos" en ${lang}?`, opts: [d.family1, d.family2, d.feelings1, d.feelings2], ans: 0 },
      { t: 'mc', q: `"Cousin" en ${lang}?`, opts: [d.family1, d.family2, d.feelings1, d.feelings2], ans: 1 },
    ]},
    { id: p(23), title: `Negocios - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.business1, rd: d.business1Rd, mn: 'Contrato', note: `Los negocios en ${lang}.` },
      { t: 'th', char: d.business2, rd: d.business2Rd, mn: 'Salario/Ingresos', note: 'Corporate world.' },
      { t: 'mc', q: `"Contrato" en ${lang}?`, opts: [d.business1, d.business2, d.economy1, d.economy2], ans: 0 },
      { t: 'mc', q: `"Salary" en ${lang}?`, opts: [d.business1, d.business2, d.economy1, d.economy2], ans: 1 },
      { t: 'tx', q: `Reading of "${d.business1}":`, ans: rd(d.business1Rd) },
    ]},
    { id: p(24), title: `Sentimientos profundos - ${lang}`, type: 'vocab', steps: [
      { t: 'th', char: d.feelings1, rd: d.feelings1Rd, mn: 'Nostalgia/Añoranza', note: `Sentimientos profundos en ${lang}.` },
      { t: 'th', char: d.feelings2, rd: d.feelings2Rd, mn: 'Gratitud', note: 'Complex emotions.' },
      { t: 'mc', q: `"Nostalgia" en ${lang}?`, opts: [d.feelings1, d.feelings2, d.philosophy1, d.philosophy2], ans: 0 },
      { t: 'mc', q: `"Gratitud" en ${lang}?`, opts: [d.feelings1, d.feelings2, d.philosophy1, d.philosophy2], ans: 1 },
    ]},
    { id: p(25), title: `Repaso nivel 3 - ${lang}`, type: 'reading', steps: [
      { t: 'mc', q: `¿Subjuntivo en ${lang}?`, opts: [d.subjunctive, d.passive, d.conditional, d.imperative], ans: 0 },
      { t: 'mc', q: `"Gobierno" en ${lang}?`, opts: [d.politics1, d.politics2, d.law1, d.economy1], ans: 0 },
      { t: 'mc', q: `"Experimento" en ${lang}?`, opts: [d.science1, d.science2, d.education1, d.art1], ans: 0 },
      { t: 'mc', q: `"Contaminación" en ${lang}?`, opts: [d.environment1, d.environment2, d.transport1, d.housing1], ans: 0 },
      { t: 'mc', q: `"Contrato" en ${lang}?`, opts: [d.business1, d.business2, d.economy1, d.economy2], ans: 0 },
      { t: 'mc', q: `¿Voz pasiva en ${lang}?`, opts: [d.subjunctive, d.passive, d.conditional, d.reported], ans: 1 },
    ]},
  ];
}

// ===== LANGUAGE DATA =====

export const ptB1Lessons = makeL3('pt', 'B1', 'Portuguese', {
  subjunctive: 'Subjuntivo', subjRd: 'subjuntivo', subjEx: 'Espero que venhas', subjExM: 'I hope you come',
  passive: 'Voz passiva', passRd: 'voz passiva', passEx: 'O livro é lido', passExM: 'The book is read',
  relative: 'Que/O qual', relRd: 'ke o kwal', relEx: 'O homem que vem', relExM: 'The man who comes',
  conditional: 'Se...então', condRd: 'se entao', condEx: 'Se eu tivesse tempo', condExM: 'If I had time',
  imperative: 'Imperativo', impRd: 'imperativo', impEx: 'Venha cá!', impExM: 'Come here!',
  reported: 'Discurso indireto', repRd: 'diskursu indiretu', repEx: 'Ele disse que estava cansado', repExM: 'He said he was tired',
  media1: 'Jornal', media1Rd: 'jornal', media2: 'Telejornal', media2Rd: 'telejornal',
  politics1: 'Governo', politics1Rd: 'governu', politics2: 'Eleição', politics2Rd: 'eleisao',
  law1: 'Lei', law1Rd: 'lei', law2: 'Juiz', law2Rd: 'juis',
  economy1: 'Mercado', economy1Rd: 'merkadu', economy2: 'Investimento', economy2Rd: 'investimentu',
  education1: 'Universidade', education1Rd: 'universidadji', education2: 'Pesquisa', education2Rd: 'peskiza',
  science1: 'Experimento', science1Rd: 'esperimentu', science2: 'Descoberta', science2Rd: 'deskoberta',
  art1: 'Pintura', art1Rd: 'pintura', art2: 'Exposição', art2Rd: 'esposisao',
  music1: 'Concerto', music1Rd: 'konsertu', music2: 'Orquestra', music2Rd: 'orkestra',
  history1: 'Guerra', history1Rd: 'gerra', history2: 'Paz', history2Rd: 'paz',
  religion1: 'Igreja', religion1Rd: 'igreja', religion2: 'Oração', religion2Rd: 'orasao',
  philosophy1: 'Verdade', philosophy1Rd: 'verdadji', philosophy2: 'Liberdade', philosophy2Rd: 'liberdadji',
  environment1: 'Poluição', environment1Rd: 'poluisao', environment2: 'Reciclagem', environment2Rd: 'resiklajeng',
  transport1: 'Metrô', transport1Rd: 'metro', transport2: 'Bicicleta', transport2Rd: 'bisikleta',
  housing1: 'Apartamento', housing1Rd: 'apartamentu', housing2: 'Aluguel', housing2Rd: 'alugel',
  fashion1: 'Vestido', fashion1Rd: 'vestidu', fashion2: 'Acessórios', fashion2Rd: 'asesorius',
  family1: 'Avós', family1Rd: 'avos', family2: 'Primo', family2Rd: 'primu',
  business1: 'Contrato', business1Rd: 'kontratu', business2: 'Salário', business2Rd: 'salariu',
  feelings1: 'Saudade', feelings1Rd: 'saudadji', feelings2: 'Gratidão', feelings2Rd: 'gratidao',
  cooking1: 'Receita', cooking1Rd: 'reseita', cooking2: 'Ingredientes', cooking2Rd: 'ingredjientis',
});

export const koTOPIK3Lessons = makeL3('ko', 'TOPIK3', 'Korean', {
  subjunctive: '-(으)면 좋겠다', subjRd: 'myeon jokgetda', subjEx: '비가 안 왔으면 좋겠다', subjExM: 'I wish it wouldn\'t rain',
  passive: '피동사', passRd: 'pidongsa', passEx: '문이 열렸다', passExM: 'The door was opened',
  relative: '-(으)ㄴ/는', relRd: 'eun neun', relEx: '오는 사람', relExM: 'The person who comes',
  conditional: '-(으)면', condRd: 'myeon', condEx: '시간이 있으면', condExM: 'If I have time',
  imperative: '-(으)세요', impRd: 'euseyo', impEx: '여기 오세요', impExM: 'Please come here',
  reported: '-다고 하다', repRd: 'dago hada', repEx: '피곤하다고 했다', repExM: 'He said he was tired',
  media1: '신문', media1Rd: 'sinmun', media2: '뉴스', media2Rd: 'nyuseu',
  politics1: '정부', politics1Rd: 'jeongbu', politics2: '선거', politics2Rd: 'seongeo',
  law1: '법률', law1Rd: 'beomnyul', law2: '판사', law2Rd: 'pansa',
  economy1: '시장', economy1Rd: 'sijang', economy2: '투자', economy2Rd: 'tuja',
  education1: '대학교', education1Rd: 'daehakgyo', education2: '연구', education2Rd: 'yeongu',
  science1: '실험', science1Rd: 'silheom', science2: '발견', science2Rd: 'balgyeon',
  art1: '그림', art1Rd: 'geurim', art2: '전시회', art2Rd: 'jeonsiwe',
  music1: '콘서트', music1Rd: 'konseoteu', music2: '오케스트라', music2Rd: 'okeseuteura',
  history1: '전쟁', history1Rd: 'jeonjaeng', history2: '평화', history2Rd: 'pyeonghwa',
  religion1: '교회', religion1Rd: 'gyowe', religion2: '기도', religion2Rd: 'gido',
  philosophy1: '진실', philosophy1Rd: 'jinsil', philosophy2: '자유', philosophy2Rd: 'jayu',
  environment1: '오염', environment1Rd: 'oyeom', environment2: '재활용', environment2Rd: 'jaehwalyong',
  transport1: '지하철', transport1Rd: 'jihacheol', transport2: '자전거', transport2Rd: 'jajeon geo',
  housing1: '아파트', housing1Rd: 'apateu', housing2: '월세', housing2Rd: 'wolse',
  fashion1: '양복', fashion1Rd: 'yangbok', fashion2: '악세서리', fashion2Rd: 'akseseori',
  family1: '조부모', family1Rd: 'jobumo', family2: '사촌', family2Rd: 'sachon',
  business1: '계약', business1Rd: 'gyeyak', business2: '급여', business2Rd: 'geubyeo',
  feelings1: '그리움', feelings1Rd: 'geureum', feelings2: '감사', feelings2Rd: 'gamsa',
  cooking1: '레시피', cooking1Rd: 'resipi', cooking2: '재료', cooking2Rd: 'jaeryo',
});

export const ruB1Lessons = makeL3('ru', 'B1', 'Russian', {
  subjunctive: 'Сослагательное', subjRd: 'soslagatelnoe', subjEx: 'Если бы я знал', subjExM: 'If I had known',
  passive: 'Страдательный залог', passRd: 'stradatelny zalog', passEx: 'Книга читается', passExM: 'The book is being read',
  relative: 'Который', relRd: 'kotory', relEx: 'Человек, который идёт', relExM: 'The person who walks',
  conditional: 'Если...то', condRd: 'yesli to', condEx: 'Если будет время', condExM: 'If there is time',
  imperative: 'Повелительное', impRd: 'povelitelnoe', impEx: 'Иди сюда!', impExM: 'Come here!',
  reported: 'Косвенная речь', repRd: 'kosvennaya rech', repEx: 'Он сказал, что устал', repExM: 'He said he was tired',
  media1: 'Газета', media1Rd: 'gazeta', media2: 'Новости', media2Rd: 'novosti',
  politics1: 'Правительство', politics1Rd: 'pravitelstvo', politics2: 'Выборы', politics2Rd: 'vybory',
  law1: 'Закон', law1Rd: 'zakon', law2: 'Судья', law2Rd: 'sudya',
  economy1: 'Рынок', economy1Rd: 'rynok', economy2: 'Инвестиция', economy2Rd: 'investitsiya',
  education1: 'Университет', education1Rd: 'universitet', education2: 'Исследование', education2Rd: 'issledovaniye',
  science1: 'Эксперимент', science1Rd: 'eksperiment', science2: 'Открытие', science2Rd: 'otkrytie',
  art1: 'Картина', art1Rd: 'kartina', art2: 'Выставка', art2Rd: 'vystavka',
  music1: 'Концерт', music1Rd: 'kontsert', music2: 'Оркестр', music2Rd: 'orkestr',
  history1: 'Война', history1Rd: 'voyna', history2: 'Мир', history2Rd: 'mir',
  religion1: 'Церковь', religion1Rd: 'tserkov', religion2: 'Молитва', religion2Rd: 'molitva',
  philosophy1: 'Истина', philosophy1Rd: 'istina', philosophy2: 'Свобода', philosophy2Rd: 'svoboda',
  environment1: 'Загрязнение', environment1Rd: 'zagryazneniye', environment2: 'Переработка', environment2Rd: 'pererabotka',
  transport1: 'Метро', transport1Rd: 'metro', transport2: 'Велосипед', transport2Rd: 'velosiped',
  housing1: 'Квартира', housing1Rd: 'kvartira', housing2: 'Аренда', housing2Rd: 'arenda',
  fashion1: 'Костюм', fashion1Rd: 'kostyum', fashion2: 'Украшения', fashion2Rd: 'ukrasheniya',
  family1: 'Бабушка и дедушка', family1Rd: 'babushka i dedushka', family2: 'Двоюродный брат', family2Rd: 'dvoyurodny brat',
  business1: 'Контракт', business1Rd: 'kontrakt', business2: 'Зарплата', business2Rd: 'zarplata',
  feelings1: 'Тоска', feelings1Rd: 'toska', feelings2: 'Благодарность', feelings2Rd: 'blagodarnost',
  cooking1: 'Рецепт', cooking1Rd: 'retsept', cooking2: 'Ингредиенты', cooking2Rd: 'ingrediyenty',
});

export const arB1Lessons = makeL3('ar', 'B1', 'Arabic', {
  subjunctive: 'المنصوب', subjRd: 'al-mansub', subjEx: 'أريد أن أذهب', subjExM: 'I want to go',
  passive: 'المبني للمجهول', passRd: 'al-mabni lil-majhul', passEx: 'قُرِئ الكتاب', passExM: 'The book was read',
  relative: 'الذي/التي', relRd: 'allazi allati', relEx: 'الرجل الذي يأتي', relExM: 'The man who comes',
  conditional: 'لو...ل', condRd: 'law la', condEx: 'لو كان لدي وقت', condExM: 'If I had time',
  imperative: 'فعل الأمر', impRd: 'fil al-amr', impEx: 'تعال هنا!', impExM: 'Come here!',
  reported: 'الكلام المنقول', repRd: 'al-kalam al-manqul', repEx: 'قال إنه متعب', repExM: 'He said he was tired',
  media1: 'جريدة', media1Rd: 'jarida', media2: 'أخبار', media2Rd: 'akhbar',
  politics1: 'حكومة', politics1Rd: 'hukuma', politics2: 'انتخابات', politics2Rd: 'intikhabat',
  law1: 'قانون', law1Rd: 'qanun', law2: 'قاضٍ', law2Rd: 'qadi',
  economy1: 'سوق', economy1Rd: 'suq', economy2: 'استثمار', economy2Rd: 'istithmar',
  education1: 'جامعة', education1Rd: 'jamia', education2: 'بحث', education2Rd: 'bahth',
  science1: 'تجربة', science1Rd: 'tajriba', science2: 'اكتشاف', science2Rd: 'iktishaf',
  art1: 'لوحة', art1Rd: 'lawha', art2: 'معرض', art2Rd: 'marid',
  music1: 'حفلة موسيقية', music1Rd: 'hafla musiqiya', music2: 'أوركسترا', music2Rd: 'orkistra',
  history1: 'حرب', history1Rd: 'harb', history2: 'سلام', history2Rd: 'salam',
  religion1: 'مسجد', religion1Rd: 'masjid', religion2: 'صلاة', religion2Rd: 'salat',
  philosophy1: 'حقيقة', philosophy1Rd: 'haqiqa', philosophy2: 'حرية', philosophy2Rd: 'hurriya',
  environment1: 'تلوث', environment1Rd: 'talawwuth', environment2: 'إعادة تدوير', environment2Rd: 'iadat tadwir',
  transport1: 'قطار', transport1Rd: 'qitar', transport2: 'دراجة', transport2Rd: 'darraja',
  housing1: 'شقة', housing1Rd: 'shaqqa', housing2: 'إيجار', housing2Rd: 'ijar',
  fashion1: 'بدلة', fashion1Rd: 'badla', fashion2: 'إكسسوارات', fashion2Rd: 'iksesswarat',
  family1: 'أجداد', family1Rd: 'ajdad', family2: 'ابن عم', family2Rd: 'ibn amm',
  business1: 'عقد', business1Rd: 'aqd', business2: 'راتب', business2Rd: 'ratib',
  feelings1: 'حنين', feelings1Rd: 'hanin', feelings2: 'امتنان', feelings2Rd: 'imtinan',
  cooking1: 'وصفة', cooking1Rd: 'wasfa', cooking2: 'مكونات', cooking2Rd: 'mukawwinat',
});

export const hiB1Lessons = makeL3('hi', 'B1', 'Hindi', {
  subjunctive: 'संभावनार्थक', subjRd: 'sambhavnarthak', subjEx: 'काश मैं जाता', subjExM: 'I wish I would go',
  passive: 'कर्मवाच्य', passRd: 'karmavachya', passEx: 'किताब पढ़ी जाती है', passExM: 'The book is read',
  relative: 'जो/जिसका', relRd: 'jo jiska', relEx: 'जो आदमी आता है', relExM: 'The man who comes',
  conditional: 'अगर...तो', condRd: 'agar to', condEx: 'अगर समय होता', condExM: 'If there were time',
  imperative: 'आज्ञार्थक', impRd: 'aagyaarthak', impEx: 'यहाँ आओ!', impExM: 'Come here!',
  reported: 'अप्रत्यक्ष कथन', repRd: 'apratyaksh kathan', repEx: 'उसने कहा कि वह थका हुआ है', repExM: 'He said he was tired',
  media1: 'अखबार', media1Rd: 'akhbar', media2: 'समाचार', media2Rd: 'samachar',
  politics1: 'सरकार', politics1Rd: 'sarkar', politics2: 'चुनाव', politics2Rd: 'chunav',
  law1: 'कानून', law1Rd: 'kanun', law2: 'न्यायाधीश', law2Rd: 'nyayadhish',
  economy1: 'बाज़ार', economy1Rd: 'bazar', economy2: 'निवेश', economy2Rd: 'nivesh',
  education1: 'विश्वविद्यालय', education1Rd: 'vishwavidyalay', education2: 'अनुसंधान', education2Rd: 'anusandhan',
  science1: 'प्रयोग', science1Rd: 'prayog', science2: 'खोज', science2Rd: 'khoj',
  art1: 'चित्रकला', art1Rd: 'chitrakala', art2: 'प्रदर्शनी', art2Rd: 'pradarshani',
  music1: 'संगीत कार्यक्रम', music1Rd: 'sangeet karyakram', music2: 'वाद्यवृंद', music2Rd: 'vadyavrund',
  history1: 'युद्ध', history1Rd: 'yuddh', history2: 'शांति', history2Rd: 'shanti',
  religion1: 'मंदिर', religion1Rd: 'mandir', religion2: 'प्रार्थना', religion2Rd: 'prarthana',
  philosophy1: 'सत्य', philosophy1Rd: 'satya', philosophy2: 'स्वतंत्रता', philosophy2Rd: 'swatantrata',
  environment1: 'प्रदूषण', environment1Rd: 'pradushan', environment2: 'पुनर्चक्रण', environment2Rd: 'punarchakran',
  transport1: 'रेलगाड़ी', transport1Rd: 'railgadi', transport2: 'साइकिल', transport2Rd: 'saikil',
  housing1: 'अपार्टमेंट', housing1Rd: 'apartment', housing2: 'किराया', housing2Rd: 'kiraya',
  fashion1: 'सूट', fashion1Rd: 'suit', fashion2: 'गहने', fashion2Rd: 'gahne',
  family1: 'दादा-दादी', family1Rd: 'dada dadi', family2: 'चचेरा भाई', family2Rd: 'chachera bhai',
  business1: 'अनुबंध', business1Rd: 'anubandh', business2: 'वेतन', business2Rd: 'vetan',
  feelings1: 'याद', feelings1Rd: 'yaad', feelings2: 'कृतज्ञता', feelings2Rd: 'kritagyta',
  cooking1: 'नुस्खा', cooking1Rd: 'nuskha', cooking2: 'सामग्री', cooking2Rd: 'samagri',
});

// Removed tr, vi, th, nl, pl B1 lessons (languages consolidated to top 10)

export const esB1Lessons = makeL3('es', 'B1', 'Spanish', {
  subjunctive: 'Subjuntivo', subjRd: 'subjuntivo', subjEx: 'Espero que vengas', subjExM: 'I hope you come',
  passive: 'Voz pasiva', passRd: 'voz pasiva', passEx: 'El libro es leído', passExM: 'The book is read',
  relative: 'Que/El cual', relRd: 'ke el kwal', relEx: 'El hombre que viene', relExM: 'The man who comes',
  conditional: 'Si...entonces', condRd: 'si entonces', condEx: 'Si tuviera tiempo', condExM: 'If I had time',
  imperative: 'Imperativo', impRd: 'imperativo', impEx: '¡Ven aquí!', impExM: 'Come here!',
  reported: 'Estilo indirecto', repRd: 'estilo indirecto', repEx: 'Dijo que estaba cansado', repExM: 'He said he was tired',
  media1: 'Periódico', media1Rd: 'periodico', media2: 'Noticias', media2Rd: 'noticias',
  politics1: 'Gobierno', politics1Rd: 'gobierno', politics2: 'Elecciones', politics2Rd: 'elecciones',
  law1: 'Ley', law1Rd: 'ley', law2: 'Juez', law2Rd: 'juez',
  economy1: 'Mercado', economy1Rd: 'mercado', economy2: 'Inversión', economy2Rd: 'inversion',
  education1: 'Universidad', education1Rd: 'universidad', education2: 'Investigación', education2Rd: 'investigacion',
  science1: 'Experimento', science1Rd: 'experimento', science2: 'Descubrimiento', science2Rd: 'descubrimiento',
  art1: 'Pintura', art1Rd: 'pintura', art2: 'Exposición', art2Rd: 'exposicion',
  music1: 'Concierto', music1Rd: 'concierto', music2: 'Orquesta', music2Rd: 'orquesta',
  history1: 'Guerra', history1Rd: 'guerra', history2: 'Paz', history2Rd: 'paz',
  religion1: 'Iglesia', religion1Rd: 'iglesia', religion2: 'Oración', religion2Rd: 'oracion',
  philosophy1: 'Verdad', philosophy1Rd: 'verdad', philosophy2: 'Libertad', philosophy2Rd: 'libertad',
  environment1: 'Contaminación', environment1Rd: 'contaminacion', environment2: 'Reciclaje', environment2Rd: 'reciclaje',
  transport1: 'Metro', transport1Rd: 'metro', transport2: 'Bicicleta', transport2Rd: 'bicicleta',
  housing1: 'Apartamento', housing1Rd: 'apartamento', housing2: 'Alquiler', housing2Rd: 'alquiler',
  fashion1: 'Traje', fashion1Rd: 'traje', fashion2: 'Accesorios', fashion2Rd: 'accesorios',
  family1: 'Abuelos', family1Rd: 'abuelos', family2: 'Primo', family2Rd: 'primo',
  business1: 'Contrato', business1Rd: 'contrato', business2: 'Salario', business2Rd: 'salario',
  feelings1: 'Nostalgia', feelings1Rd: 'nostalgia', feelings2: 'Gratitud', feelings2Rd: 'gratitud',
  cooking1: 'Receta', cooking1Rd: 'receta', cooking2: 'Ingredientes', cooking2Rd: 'ingredientes',
});

export const jpN2Lessons = makeL3('jp', 'N2', 'Japanese', {
  subjunctive: '〜たら', subjRd: 'tara', subjEx: '行ったら教えて', subjExM: 'If you go, tell me',
  passive: '受身形', passRd: 'ukemi kei', passEx: '本が読まれた', passExM: 'The book was read',
  relative: '〜という', relRd: 'to iu', relEx: '来るという人', relExM: 'The person who is said to come',
  conditional: '〜ば', condRd: 'ba', condEx: '時間があれば', condExM: 'If there is time',
  imperative: '命令形', impRd: 'meirei kei', impEx: 'ここに来い！', impExM: 'Come here!',
  reported: '〜そうだ', repRd: 'sou da', repEx: '疲れたそうだ', repExM: 'I heard he was tired',
  media1: '新聞', media1Rd: 'shinbun', media2: 'ニュース', media2Rd: 'nyuusu',
  politics1: '政府', politics1Rd: 'seifu', politics2: '選挙', politics2Rd: 'senkyo',
  law1: '法律', law1Rd: 'houritsu', law2: '裁判官', law2Rd: 'saibankan',
  economy1: '市場', economy1Rd: 'shijou', economy2: '投資', economy2Rd: 'toushi',
  education1: '大学', education1Rd: 'daigaku', education2: '研究', education2Rd: 'kenkyuu',
  science1: '実験', science1Rd: 'jikken', science2: '発見', science2Rd: 'hakken',
  art1: '絵画', art1Rd: 'kaiga', art2: '展覧会', art2Rd: 'tenrankai',
  music1: 'コンサート', music1Rd: 'konsaato', music2: 'オーケストラ', music2Rd: 'ookesutora',
  history1: '戦争', history1Rd: 'sensou', history2: '平和', history2Rd: 'heiwa',
  religion1: '寺', religion1Rd: 'tera', religion2: '祈り', religion2Rd: 'inori',
  philosophy1: '真実', philosophy1Rd: 'shinjitsu', philosophy2: '自由', philosophy2Rd: 'jiyuu',
  environment1: '汚染', environment1Rd: 'osen', environment2: 'リサイクル', environment2Rd: 'risaikuru',
  transport1: '電車', transport1Rd: 'densha', transport2: '自転車', transport2Rd: 'jitensha',
  housing1: 'マンション', housing1Rd: 'manshon', housing2: '家賃', housing2Rd: 'yachin',
  fashion1: 'スーツ', fashion1Rd: 'suutsu', fashion2: 'アクセサリー', fashion2Rd: 'akusesarii',
  family1: '祖父母', family1Rd: 'sofubo', family2: 'いとこ', family2Rd: 'itoko',
  business1: '契約', business1Rd: 'keiyaku', business2: '給料', business2Rd: 'kyuuryou',
  feelings1: '懐かしい', feelings1Rd: 'natsukashii', feelings2: '感謝', feelings2Rd: 'kansha',
  cooking1: 'レシピ', cooking1Rd: 'reshipi', cooking2: '材料', cooking2Rd: 'zairyou',
});

export const frB2Lessons = makeL3('fr', 'B2', 'French', {
  subjunctive: 'Subjonctif passé', subjRd: 'subjonktif pase', subjEx: 'Bien qu\'il ait parlé', subjExM: 'Although he spoke',
  passive: 'Voix passive', passRd: 'vwa pasiv', passEx: 'Le livre a été lu', passExM: 'The book was read',
  relative: 'Dont/Lequel', relRd: 'don lekel', relEx: "L'homme dont je parle", relExM: 'The man I speak about',
  conditional: 'Si + plus-que-parfait', condRd: 'si ply ke parfe', condEx: 'Si j\'avais su', condExM: 'If I had known',
  imperative: 'Impératif passé', impRd: 'imperatif pase', impEx: 'Aie fini avant midi', impExM: 'Have finished before noon',
  reported: 'Discours indirect', repRd: 'diskur endirek', repEx: 'Il a dit qu\'il était fatigué', repExM: 'He said he was tired',
  media1: 'La presse', media1Rd: 'la pres', media2: 'Le journal télévisé', media2Rd: 'le jurnal televize',
  politics1: 'Le gouvernement', politics1Rd: 'le guverneman', politics2: "L'élection", politics2Rd: 'leleksyon',
  law1: 'La loi', law1Rd: 'la lwa', law2: 'Le juge', law2Rd: 'le juj',
  economy1: 'Le marché', economy1Rd: 'le marshe', economy2: "L'investissement", economy2Rd: 'lenvestisman',
  education1: "L'université", education1Rd: 'luniversite', education2: 'La recherche', education2Rd: 'la reshersh',
  science1: "L'expérience", science1Rd: 'leksperirans', science2: 'La découverte', science2Rd: 'la dekuvert',
  art1: 'La peinture', art1Rd: 'la pentur', art2: "L'exposition", art2Rd: 'leksposisyon',
  music1: 'Le concert', music1Rd: 'le konser', music2: "L'orchestre", music2Rd: 'lorkestr',
  history1: 'La guerre', history1Rd: 'la ger', history2: 'La paix', history2Rd: 'la pe',
  religion1: "L'église", religion1Rd: 'legliz', religion2: 'La prière', religion2Rd: 'la priyer',
  philosophy1: 'La vérité', philosophy1Rd: 'la verite', philosophy2: 'La liberté', philosophy2Rd: 'la liberte',
  environment1: 'La pollution', environment1Rd: 'la polusyon', environment2: 'Le recyclage', environment2Rd: 'le resiklaj',
  transport1: 'Le métro', transport1Rd: 'le metro', transport2: 'Le vélo', transport2Rd: 'le velo',
  housing1: "L'appartement", housing1Rd: 'laparteman', housing2: 'Le loyer', housing2Rd: 'le lwaye',
  fashion1: 'Le costume', fashion1Rd: 'le kostum', fashion2: 'Les accessoires', fashion2Rd: 'lez akseswar',
  family1: 'Les grands-parents', family1Rd: 'le gran paran', family2: 'Le cousin', family2Rd: 'le kuzen',
  business1: 'Le contrat', business1Rd: 'le kontra', business2: 'Le salaire', business2Rd: 'le saler',
  feelings1: 'La nostalgie', feelings1Rd: 'la nostalji', feelings2: 'La gratitude', feelings2Rd: 'la gratityd',
  cooking1: 'La recette', cooking1Rd: 'la reset', cooking2: 'Les ingrédients', cooking2Rd: 'lez engrediyan',
});

export const zhHSK3Lessons = makeL3('zh', 'HSK3', 'Chinese', {
  subjunctive: '要是...就好了', subjRd: 'yaoshi jiu hao le', subjEx: '要是我知道就好了', subjExM: 'If only I knew',
  passive: '被', passRd: 'bei', passEx: '书被看了', passExM: 'The book was read',
  relative: '的 (rel. clause)', relRd: 'de', relEx: '来的人', relExM: 'The person who comes',
  conditional: '如果...就', condRd: 'ruguo jiu', condEx: '如果有时间', condExM: 'If there is time',
  imperative: '请/别', impRd: 'qing bie', impEx: '请过来！', impExM: 'Please come here!',
  reported: '他说...', repRd: 'ta shuo', repEx: '他说他累了', repExM: 'He said he was tired',
  media1: '报纸', media1Rd: 'baozhi', media2: '新闻', media2Rd: 'xinwen',
  politics1: '政府', politics1Rd: 'zhengfu', politics2: '选举', politics2Rd: 'xuanju',
  law1: '法律', law1Rd: 'falv', law2: '法官', law2Rd: 'faguan',
  economy1: '市场', economy1Rd: 'shichang', economy2: '投资', economy2Rd: 'touzi',
  education1: '大学', education1Rd: 'daxue', education2: '研究', education2Rd: 'yanjiu',
  science1: '实验', science1Rd: 'shiyan', science2: '发现', science2Rd: 'faxian',
  art1: '绘画', art1Rd: 'huihua', art2: '展览', art2Rd: 'zhanlan',
  music1: '音乐会', music1Rd: 'yinyuehui', music2: '乐团', music2Rd: 'yuetuan',
  history1: '战争', history1Rd: 'zhanzheng', history2: '和平', history2Rd: 'heping',
  religion1: '寺庙', religion1Rd: 'simiao', religion2: '祈祷', religion2Rd: 'qidao',
  philosophy1: '真理', philosophy1Rd: 'zhenli', philosophy2: '自由', philosophy2Rd: 'ziyou',
  environment1: '污染', environment1Rd: 'wuran', environment2: '回收', environment2Rd: 'huishou',
  transport1: '地铁', transport1Rd: 'ditie', transport2: '自行车', transport2Rd: 'zixingche',
  housing1: '公寓', housing1Rd: 'gongyu', housing2: '房租', housing2Rd: 'fangzu',
  fashion1: '西装', fashion1Rd: 'xizhuang', fashion2: '配饰', fashion2Rd: 'peishi',
  family1: '祖父母', family1Rd: 'zufumu', family2: '表兄弟', family2Rd: 'biaoxiongdi',
  business1: '合同', business1Rd: 'hetong', business2: '工资', business2Rd: 'gongzi',
  feelings1: '怀念', feelings1Rd: 'huainian', feelings2: '感激', feelings2Rd: 'ganji',
  cooking1: '食谱', cooking1Rd: 'shipu', cooking2: '食材', cooking2Rd: 'shicai',
});

export const enB1Lessons = makeL3('en', 'B1', 'English', {
  subjunctive: 'Wish + past', subjRd: 'wish past', subjEx: 'I wish I knew', subjExM: 'Ojalá supiera',
  passive: 'Passive voice', passRd: 'passive voice', passEx: 'The book was read', passExM: 'El libro fue leído',
  relative: 'Who/Which/That', relRd: 'who which that', relEx: 'The man who comes', relExM: 'El hombre que viene',
  conditional: 'If + past simple', condRd: 'if past simple', condEx: 'If I had time', condExM: 'Si tuviera tiempo',
  imperative: 'Imperative', impRd: 'imperative', impEx: 'Come here!', impExM: '¡Ven aquí!',
  reported: 'Reported speech', repRd: 'reported speech', repEx: 'He said he was tired', repExM: 'Dijo que estaba cansado',
  media1: 'Newspaper', media1Rd: 'newspaper', media2: 'TV news', media2Rd: 'tv news',
  politics1: 'Government', politics1Rd: 'government', politics2: 'Election', politics2Rd: 'election',
  law1: 'Law', law1Rd: 'law', law2: 'Judge', law2Rd: 'judge',
  economy1: 'Market', economy1Rd: 'market', economy2: 'Investment', economy2Rd: 'investment',
  education1: 'University', education1Rd: 'university', education2: 'Research', education2Rd: 'research',
  science1: 'Experiment', science1Rd: 'experiment', science2: 'Discovery', science2Rd: 'discovery',
  art1: 'Painting', art1Rd: 'painting', art2: 'Exhibition', art2Rd: 'exhibition',
  music1: 'Concert', music1Rd: 'concert', music2: 'Orchestra', music2Rd: 'orchestra',
  history1: 'War', history1Rd: 'war', history2: 'Peace', history2Rd: 'peace',
  religion1: 'Church', religion1Rd: 'church', religion2: 'Prayer', religion2Rd: 'prayer',
  philosophy1: 'Truth', philosophy1Rd: 'truth', philosophy2: 'Freedom', philosophy2Rd: 'freedom',
  environment1: 'Pollution', environment1Rd: 'pollution', environment2: 'Recycling', environment2Rd: 'recycling',
  transport1: 'Subway', transport1Rd: 'subway', transport2: 'Bicycle', transport2Rd: 'bicycle',
  housing1: 'Apartment', housing1Rd: 'apartment', housing2: 'Rent', housing2Rd: 'rent',
  fashion1: 'Suit', fashion1Rd: 'suit', fashion2: 'Accessories', fashion2Rd: 'accessories',
  family1: 'Grandparents', family1Rd: 'grandparents', family2: 'Cousin', family2Rd: 'cousin',
  business1: 'Contract', business1Rd: 'contract', business2: 'Salary', business2Rd: 'salary',
  feelings1: 'Nostalgia', feelings1Rd: 'nostalgia', feelings2: 'Gratitude', feelings2Rd: 'gratitude',
  cooking1: 'Recipe', cooking1Rd: 'recipe', cooking2: 'Ingredients', cooking2Rd: 'ingredients',
});