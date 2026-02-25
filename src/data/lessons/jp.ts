import { Lesson } from '../types';

export const jpN5Lessons: Lesson[] = [
  {
    id: 'jp-n5-1', title: 'Hiragana あ行 (Vocales)', type: 'writing',
    steps: [
      { t: 'th', char: 'あ', rd: 'a', mn: 'Vocal /a/', note: 'Primera letra del hiragana. Abre la boca ampliamente.', ex: [{ j: 'あめ', m: 'lluvia' }, { j: 'あさ', m: 'mañana' }, { j: 'あお', m: 'azul' }] },
      { t: 'th', char: 'い', rd: 'i', mn: 'Vocal /i/', note: 'Se pronuncia como la "i" en español. Dos trazos.', ex: [{ j: 'いぬ', m: 'perro' }, { j: 'いえ', m: 'casa' }] },
      { t: 'th', char: 'う', rd: 'u', mn: 'Vocal /u/', note: 'Más cerrada que la "u" española, sin redondear los labios.', ex: [{ j: 'うみ', m: 'mar' }, { j: 'うえ', m: 'arriba' }] },
      { t: 'th', char: 'え', rd: 'e', mn: 'Vocal /e/', note: 'Como la "e" española.', ex: [{ j: 'えき', m: 'estación' }, { j: 'えん', m: 'yen' }] },
      { t: 'th', char: 'お', rd: 'o', mn: 'Vocal /o/', note: 'Como la "o" española.', ex: [{ j: 'おかね', m: 'dinero' }, { j: 'おちゃ', m: 'té' }] },
      { t: 'mc', q: '¿Cómo se lee あ?', opts: ['a', 'i', 'u', 'e'], ans: 0 },
      { t: 'mc', q: '¿Qué hiragana es "i"?', opts: ['あ', 'い', 'う', 'え'], ans: 1 },
      { t: 'tx', q: 'Escribe la lectura de うみ en romaji:', ans: 'umi', hint: 'う=u, み=mi' },
      { t: 'mc', q: '¿Orden correcto de vocales japonesas?', opts: ['a, i, u, e, o', 'a, e, i, o, u', 'i, a, u, e, o', 'a, i, e, u, o'], ans: 0 },
      { t: 'mc', q: '¿Qué significa えき?', opts: ['mar', 'perro', 'estación', 'dinero'], ans: 2 },
      { t: 'tx', q: '¿Cómo se lee おかね?', ans: 'okane', hint: 'お=o, か=ka, ね=ne' },
    ]
  },
  {
    id: 'jp-n5-2', title: 'Hiragana か行〜さ行', type: 'writing',
    steps: [
      { t: 'th', char: 'か き く け こ', rd: 'ka ki ku ke ko', mn: 'Fila ka', note: 'Consonante K + vocal. が ぎ ぐ げ ご son sus versiones sonoras (dakuten).', ex: [{ j: 'かわ', m: 'río' }, { j: 'きく', m: 'escuchar' }] },
      { t: 'th', char: 'さ し す せ そ', rd: 'sa shi su se so', mn: 'Fila sa', note: '⚠️ し se lee "shi", no "si". ざ じ ず ぜ ぞ son sonoras.', ex: [{ j: 'さくら', m: 'cerezo' }, { j: 'すし', m: 'sushi' }] },
      { t: 'mc', q: '¿Cómo se lee し?', opts: ['si', 'shi', 'chi', 'tsu'], ans: 1 },
      { t: 'mc', q: '¿Qué es さくら?', opts: ['montaña', 'río', 'cerezo', 'templo'], ans: 2 },
      { t: 'tx', q: '¿Cómo se lee くすり en romaji?', ans: 'kusuri', hint: 'く=ku, す=su, り=ri' },
      { t: 'mc', q: '¿Cuál es la versión sonora (dakuten) de か?', opts: ['が', 'ぎ', 'ぐ', 'ざ'], ans: 0 },
      { t: 'or', q: 'Ordena las sílabas: か行', words: ['か', 'き', 'く', 'け', 'こ'], ans: [0, 1, 2, 3, 4] },
      { t: 'mc', q: '¿Qué significa かわ?', opts: ['montaña', 'río', 'mar', 'lago'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-3', title: 'Hiragana た行〜な行', type: 'writing',
    steps: [
      { t: 'th', char: 'た ち つ て と', rd: 'ta chi tsu te to', mn: 'Fila ta', note: '⚠️ ち="chi" (no "ti"), つ="tsu" (no "tu"). だ ぢ づ で ど son sonoras.', ex: [{ j: 'たべる', m: 'comer' }, { j: 'ちず', m: 'mapa' }] },
      { t: 'th', char: 'な に ぬ ね の', rd: 'na ni nu ne no', mn: 'Fila na', note: 'Sin variantes sonoras. の es la partícula posesiva más común.', ex: [{ j: 'なつ', m: 'verano' }, { j: 'ねこ', m: 'gato' }] },
      { t: 'mc', q: '¿Cómo se lee ち?', opts: ['ti', 'chi', 'shi', 'tsi'], ans: 1 },
      { t: 'mc', q: '¿Cómo se lee つ?', opts: ['tu', 'su', 'tsu', 'zu'], ans: 2 },
      { t: 'tx', q: '¿Cómo se lee ねこ?', ans: 'neko' },
      { t: 'mc', q: '¿Qué partícula es の?', opts: ['Tema', 'Objeto', 'Posesiva', 'Dirección'], ans: 2 },
      { t: 'mc', q: '¿Versión sonora de た?', opts: ['だ', 'ば', 'が', 'ざ'], ans: 0 },
      { t: 'or', q: 'Ordena: な行', words: ['な', 'に', 'ぬ', 'ね', 'の'], ans: [0, 1, 2, 3, 4] },
    ]
  },
  {
    id: 'jp-n5-4', title: 'Hiragana は行〜ま行', type: 'writing',
    steps: [
      { t: 'th', char: 'は ひ ふ へ ほ', rd: 'ha hi fu he ho', mn: 'Fila ha', note: '⚠️ ふ="fu" (no "hu"). は como partícula se lee "wa". へ como partícula se lee "e".', ex: [{ j: 'はな', m: 'flor/nariz' }, { j: 'ほん', m: 'libro' }] },
      { t: 'th', char: 'ま み む め も', rd: 'ma mi mu me mo', mn: 'Fila ma', note: 'Sílabas nasales con M.', ex: [{ j: 'みず', m: 'agua' }, { j: 'もり', m: 'bosque' }] },
      { t: 'mc', q: '¿Cómo se pronuncia は como partícula?', opts: ['ha', 'wa', 'ba', 'pa'], ans: 1 },
      { t: 'mc', q: '¿Cómo se lee ふ?', opts: ['hu', 'fu', 'bu', 'pu'], ans: 1 },
      { t: 'tx', q: '¿Qué significa ほん?', ans: 'libro' },
      { t: 'mc', q: '¿Qué significa みず?', opts: ['fuego', 'agua', 'tierra', 'aire'], ans: 1 },
      { t: 'mc', q: '¿Sonora de は?', opts: ['ば', 'ぱ', 'が', 'だ'], ans: 0 },
      { t: 'th', char: 'ば び ぶ べ ぼ / ぱ ぴ ぷ ぺ ぽ', rd: 'ba bi bu be bo / pa pi pu pe po', mn: 'Dakuten y Handakuten de は行', note: 'は行 es la única fila con 3 variantes: は(ha), ば(ba), ぱ(pa).' },
    ]
  },
  {
    id: 'jp-n5-5', title: 'Hiragana や行〜わ行 + ん', type: 'writing',
    steps: [
      { t: 'th', char: 'や ゆ よ', rd: 'ya yu yo', mn: 'Fila ya', note: 'Solo 3 sílabas. Se usan en combinaciones: きゃ(kya), しゅ(shu), etc.', ex: [{ j: 'やま', m: 'montaña' }, { j: 'ゆき', m: 'nieve' }] },
      { t: 'th', char: 'ら り る れ ろ', rd: 'ra ri ru re ro', mn: 'Fila ra', note: 'La R japonesa es entre R y L española.', ex: [{ j: 'りんご', m: 'manzana' }] },
      { t: 'th', char: 'わ を ん', rd: 'wa wo n', mn: 'Fila wa + N', note: 'を se usa como partícula de objeto directo. ん es la única consonante sola.', ex: [{ j: 'わたし', m: 'yo' }] },
      { t: 'mc', q: '¿Para qué se usa を?', opts: ['Tema', 'Objeto directo', 'Dirección', 'Posesión'], ans: 1 },
      { t: 'mc', q: '¿Cuál es la única consonante sola en hiragana?', opts: ['む', 'ん', 'う', 'つ'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee やま?', ans: 'yama' },
      { t: 'mc', q: '¿Qué significa わたし?', opts: ['tú', 'yo', 'él', 'nosotros'], ans: 1 },
      { t: 'th', char: 'Combinaciones: きゃ しゅ ちょ', rd: 'kya shu cho', mn: 'Yōon (拗音)', note: 'Consonante + ya/yu/yo pequeño: きゃ(kya), しゅ(shu), ちょ(cho), にゅ(nyu). El ya/yu/yo se escribe pequeño.' },
      { t: 'mc', q: '¿Cómo se lee しゅ?', opts: ['shiyu', 'shu', 'syu', 'su'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-6', title: 'Katakana ア行〜サ行', type: 'writing',
    steps: [
      { t: 'th', char: 'ア イ ウ エ オ', rd: 'a i u e o', mn: 'Vocales en katakana', note: 'Katakana se usa para palabras extranjeras, onomatopeyas y nombres extranjeros.', ex: [{ j: 'アメリカ', m: 'América' }, { j: 'イギリス', m: 'Inglaterra' }] },
      { t: 'th', char: 'カ キ ク ケ コ', rd: 'ka ki ku ke ko', mn: 'Fila ka (katakana)', note: 'Mismos sonidos que hiragana, diferente forma.', ex: [{ j: 'カメラ', m: 'cámera' }, { j: 'コーヒー', m: 'café' }] },
      { t: 'th', char: 'サ シ ス セ ソ', rd: 'sa shi su se so', mn: 'Fila sa (katakana)', note: 'ー (chōon) alarga la vocal anterior: コーヒー(koohii).', ex: [{ j: 'サッカー', m: 'fútbol' }, { j: 'スポーツ', m: 'deportes' }] },
      { t: 'mc', q: '¿Cuándo se usa katakana?', opts: ['Verbos', 'Palabras japonesas', 'Palabras extranjeras', 'Partículas'], ans: 2 },
      { t: 'mc', q: '¿Qué es コーヒー?', opts: ['Té', 'Café', 'Agua', 'Jugo'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee サッカー?', ans: 'sakkaa', hint: 'ッ=consonante doble, ー=vocal larga' },
      { t: 'mc', q: '¿Qué indica el ー en katakana?', opts: ['Pausa', 'Vocal larga', 'Consonante doble', 'Acento'], ans: 1 },
      { t: 'mc', q: '¿Qué indica el ッ pequeño?', opts: ['Vocal larga', 'Consonante doble', 'Pausa', 'Silencio'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-7', title: 'Katakana タ行〜ワ行', type: 'writing',
    steps: [
      { t: 'th', char: 'タ チ ツ テ ト', rd: 'ta chi tsu te to', mn: 'Fila ta (katakana)', note: 'Similar a hiragana.', ex: [{ j: 'タクシー', m: 'taxi' }, { j: 'テレビ', m: 'televisión' }] },
      { t: 'th', char: 'ナ ニ ヌ ネ ノ / ハ ヒ フ ヘ ホ', rd: 'na-no / ha-ho', mn: 'Filas na y ha', note: 'フ se usa mucho: フランス(Francia), ファン(fan).', ex: [{ j: 'ニュース', m: 'noticias' }] },
      { t: 'th', char: 'マ ミ ム メ モ / ヤ ユ ヨ', rd: 'ma-mo / ya yu yo', mn: 'Filas ma y ya', note: 'メニュー(menú), ヨーロッパ(Europa).', ex: [{ j: 'メニュー', m: 'menú' }] },
      { t: 'th', char: 'ラ リ ル レ ロ / ワ ヲ ン', rd: 'ra-ro / wa wo n', mn: 'Filas ra y wa', note: 'ラーメン(ramen), レストラン(restaurante).', ex: [{ j: 'レストラン', m: 'restaurante' }] },
      { t: 'mc', q: '¿Qué es テレビ?', opts: ['Radio', 'Televisión', 'Teléfono', 'Computadora'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee レストラン?', ans: 'resutoran' },
      { t: 'mc', q: '¿Qué país es フランス?', opts: ['España', 'Italia', 'Francia', 'Alemania'], ans: 2 },
      { t: 'or', q: 'Ordena: "Restaurante japonés"', words: ['にほんの', 'レストラン'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n5-8', title: 'Saludos y cortesía', type: 'vocab',
    steps: [
      { t: 'th', char: 'こんにちは', rd: 'konnichiwa', mn: 'Hola / Buenas tardes', note: 'Saludo universal, de mediodía al atardecer. は se lee "wa" aquí.' },
      { t: 'th', char: 'おはようございます', rd: 'ohayou gozaimasu', mn: 'Buenos días (formal)', note: 'おはよう es informal, entre amigos.' },
      { t: 'th', char: 'こんばんは', rd: 'konbanwa', mn: 'Buenas noches (saludo)', note: 'Solo para saludar, no para despedirse.' },
      { t: 'th', char: 'ありがとうございます', rd: 'arigatou gozaimasu', mn: 'Muchas gracias (formal)', note: 'ありがとう es informal.' },
      { t: 'th', char: 'すみません', rd: 'sumimasen', mn: 'Disculpe / Perdón', note: 'Sirve para disculparse y para llamar la atención.' },
      { t: 'th', char: 'さようなら', rd: 'sayounara', mn: 'Adiós', note: 'Despedida formal. じゃね(jaane) o またね(matane) son informales.' },
      { t: 'mc', q: '¿"Buenos días" formal?', opts: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら'], ans: 1 },
      { t: 'tx', q: '¿"Gracias" informal en romaji?', ans: 'arigatou' },
      { t: 'mc', q: '¿Cuándo usas こんばんは?', opts: ['Mañana', 'Mediodía', 'Noche', 'Despedida'], ans: 2 },
      { t: 'or', q: 'Ordena una despedida informal:', words: ['じゃ', 'また', 'ね'], ans: [0, 1, 2] },
      { t: 'mc', q: '¿Cuál es informal para "adiós"?', opts: ['さようなら', 'じゃね', 'すみません', 'ありがとう'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-9', title: 'Números 1-100 y conteo', type: 'vocab',
    steps: [
      { t: 'th', char: '一 二 三 四 五', rd: 'ichi ni san yon/shi go', mn: '1-5', note: '四 tiene dos lecturas: し(shi) y よん(yon). よん es más común porque し suena como 死(muerte).' },
      { t: 'th', char: '六 七 八 九 十', rd: 'roku nana/shichi hachi kyuu/ku juu', mn: '6-10', note: '七: なな(nana) es más común que しち(shichi). 九: きゅう(kyuu) más común que く(ku).' },
      { t: 'th', char: '十一 二十 三十', rd: 'juu-ichi ni-juu san-juu', mn: '11, 20, 30', note: 'Sistema decimal simple: 10+1=11, 2×10=20.' },
      { t: 'th', char: '百 千 万', rd: 'hyaku sen man', mn: '100, 1000, 10000', note: '百=100, 千=1000, 万=10,000. ¡Japón cuenta en unidades de 10,000!' },
      { t: 'mc', q: '¿Por qué se evita し para 4?', opts: ['Es difícil', 'Suena como "muerte"', 'Es antiguo', 'Es informal'], ans: 1 },
      { t: 'mc', q: '¿Cómo se dice 30?', opts: ['さんじゅう', 'じゅうさん', 'にじゅう', 'よんじゅう'], ans: 0 },
      { t: 'tx', q: '¿Cómo se dice 25 en romaji?', ans: 'nijuu go' },
      { t: 'mc', q: '¿Qué es にじゅうご?', opts: ['15', '20', '25', '52'], ans: 2 },
      { t: 'mc', q: '¿Cuánto es 万?', opts: ['1,000', '10,000', '100,000', '1,000,000'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-10', title: 'Presentarse (自己紹介)', type: 'grammar',
    steps: [
      { t: 'th', char: 'わたしは___です', rd: 'watashi wa ___ desu', mn: 'Yo soy ___', note: 'わたし=yo, は=partícula de tema (se lee "wa"), です=ser/estar (cortés).' },
      { t: 'th', char: 'はじめまして', rd: 'hajimemashite', mn: 'Mucho gusto (primera vez)', note: 'Literalmente "es la primera vez". Se dice al conocer a alguien.' },
      { t: 'th', char: 'よろしくおねがいします', rd: 'yoroshiku onegai shimasu', mn: 'Encantado / Cuide de mí', note: 'Frase de cortesía esencial. En casual: よろしく.' },
      { t: 'th', char: '〜から来ました', rd: '~kara kimashita', mn: 'Vengo de ~', note: 'スペインから来ました = Vengo de España. から=desde.' },
      { t: 'mc', q: '¿"Yo soy estudiante"?', opts: ['わたしは先生です', 'わたしは学生です', 'わたしは日本人です', 'わたしは友達です'], ans: 1 },
      { t: 'or', q: 'Ordena: "Mucho gusto, soy María"', words: ['はじめまして', 'わたしは', 'マリアです'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿"Mucho gusto" en romaji?', ans: 'hajimemashite' },
      { t: 'mc', q: '¿Cómo dices "Vengo de México"?', opts: ['メキシコに行きます', 'メキシコから来ました', 'メキシコです', 'メキシコへ行く'], ans: 1 },
      { t: 'or', q: 'Ordena una presentación completa:', words: ['はじめまして', 'わたしは', 'カルロスです', 'よろしく'], ans: [0, 1, 2, 3] },
    ]
  },
  {
    id: 'jp-n5-11', title: 'Partícula は vs が', type: 'grammar',
    steps: [
      { t: 'th', char: 'は (tema)', rd: 'wa', mn: 'Partícula de tema', note: 'Marca el TEMA de la oración (de qué hablas). わたしは学生です = Yo (tema) soy estudiante.' },
      { t: 'th', char: 'が (sujeto)', rd: 'ga', mn: 'Partícula de sujeto', note: 'Marca el SUJETO (quién hace la acción) o información NUEVA. ねこがいます = Hay un gato.' },
      { t: 'th', char: 'は vs が: diferencia', rd: '', mn: 'Tema vs Sujeto nuevo', note: 'は = información conocida/tema. が = información nueva/énfasis. "¿Quién es profesor?" → 田中さんが先生です (田中 es info nueva).' },
      { t: 'mc', q: '"¿Quién vino?" → ___が来ました', opts: ['田中さんは', '田中さんが', '田中さんを', '田中さんに'], ans: 1 },
      { t: 'mc', q: '¿Cuál es correcto? "Hay un gato"', opts: ['ねこはいます', 'ねこがいます', 'ねこをいます', 'ねこにいます'], ans: 1 },
      { t: 'mc', q: '"Yo (en cuanto a mí) soy estudiante"', opts: ['わたしが学生です', 'わたしは学生です', 'わたしを学生です', 'わたしに学生です'], ans: 1 },
      { t: 'th', char: 'が con gustos', rd: '', mn: '〜がすきです', note: '日本語がすきです = Me gusta el japonés. Con すき(gustar), ほしい(querer), じょうず(hábil) se usa が.' },
      { t: 'mc', q: '"Me gusta el sushi"', opts: ['すしはすきです', 'すしがすきです', 'すしをすきです', 'すしにすきです'], ans: 1 },
      { t: 'tx', q: '¿Partícula para marcar el tema?', ans: 'wa', hint: 'Se escribe は pero se lee...' },
    ]
  },
  {
    id: 'jp-n5-12', title: 'Partículas を、に、で', type: 'grammar',
    steps: [
      { t: 'th', char: 'を (objeto)', rd: 'wo/o', mn: 'Partícula de objeto directo', note: 'Marca lo que recibe la acción. パンをたべます = Como pan. みずをのみます = Bebo agua.' },
      { t: 'th', char: 'に (dirección/tiempo)', rd: 'ni', mn: 'A / En / A las', note: '学校に行きます = Voy A la escuela. 7時に起きます = Me levanto A las 7.' },
      { t: 'th', char: 'で (lugar de acción/medio)', rd: 'de', mn: 'En (donde haces algo) / Con (medio)', note: '学校で勉強します = Estudio EN la escuela. バスで行きます = Voy EN autobús.' },
      { t: 'mc', q: '"Como pan" → パン___たべます', opts: ['は', 'が', 'を', 'に'], ans: 2 },
      { t: 'mc', q: '"Voy a la escuela" → 学校___行きます', opts: ['を', 'に', 'で', 'が'], ans: 1 },
      { t: 'mc', q: '"Estudio en la biblioteca" → としょかん___べんきょうします', opts: ['に', 'を', 'で', 'は'], ans: 2 },
      { t: 'th', char: 'に vs で', rd: '', mn: 'Existencia vs Acción', note: 'に = donde algo EXISTE (ねこがへやにいます). で = donde HACES algo (へやでべんきょうする).' },
      { t: 'mc', q: '"Hay un gato en la habitación"', opts: ['へやでねこがいます', 'へやにねこがいます', 'へやをねこがいます', 'へやはねこがいます'], ans: 1 },
      { t: 'or', q: 'Ordena: "Bebo agua en el restaurante"', words: ['レストランで', 'みずを', 'のみます'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿Partícula para "con/en" (medio de transporte)?', ans: 'de' },
    ]
  },
  {
    id: 'jp-n5-13', title: 'Partículas と、も、から、まで', type: 'grammar',
    steps: [
      { t: 'th', char: 'と (y / con)', rd: 'to', mn: 'Y / Con alguien', note: 'パンとチーズ = Pan Y queso. ともだちと行く = Ir CON un amigo.' },
      { t: 'th', char: 'も (también)', rd: 'mo', mn: 'También', note: 'わたしも学生です = Yo TAMBIÉN soy estudiante. Reemplaza は/が.' },
      { t: 'th', char: 'から〜まで', rd: 'kara~made', mn: 'Desde ~ hasta ~', note: '9時から5時まで = Desde las 9 HASTA las 5. 東京から大阪まで = De Tokio a Osaka.' },
      { t: 'th', char: 'や (y, entre otros)', rd: 'ya', mn: 'Y (lista incompleta)', note: 'りんごやみかん = Manzanas, mandarinas (y más). と lista todo, や lista parcialmente.' },
      { t: 'mc', q: '"Pan Y queso" → パン___チーズ', opts: ['も', 'と', 'や', 'か'], ans: 1 },
      { t: 'mc', q: '"Yo también"', opts: ['わたしは', 'わたしが', 'わたしも', 'わたしと'], ans: 2 },
      { t: 'mc', q: '"De 9 a 5" → 9時___5時___', opts: ['に...に', 'から...まで', 'で...で', 'と...と'], ans: 1 },
      { t: 'mc', q: '¿Cuándo usar や en vez de と?', opts: ['Lista completa', 'Lista incompleta', 'Solo 2 cosas', 'Cosas iguales'], ans: 1 },
      { t: 'or', q: 'Ordena: "Voy con mi amigo al parque"', words: ['ともだちと', 'こうえんに', 'いきます'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n5-14', title: 'Familia (家族)', type: 'vocab',
    steps: [
      { t: 'th', char: 'お父さん / 父', rd: 'otousan / chichi', mn: 'Padre (ajeno / propio)', note: 'お父さん para el padre de OTROS. 父(chichi) para TU padre al hablar con otros.' },
      { t: 'th', char: 'お母さん / 母', rd: 'okaasan / haha', mn: 'Madre (ajena / propia)', note: 'Misma regla: お母さん(okaasan)=madre de otro, 母(haha)=mi madre.' },
      { t: 'th', char: '兄/弟 姉/妹', rd: 'ani/otouto ane/imouto', mn: 'Hermano mayor/menor, Hermana mayor/menor', note: 'En japonés SIEMPRE se distingue mayor vs menor.' },
      { t: 'th', char: '家族', rd: 'kazoku', mn: 'Familia', note: 'ご家族(gokazoku) es la forma respetuosa para la familia de otra persona.' },
      { t: 'mc', q: '¿Cómo hablas de TU madre ante otros?', opts: ['お母さん', '母', 'ママ', 'おかあさま'], ans: 1 },
      { t: 'mc', q: '¿Quién es 妹?', opts: ['Hermano mayor', 'Hermana mayor', 'Hermano menor', 'Hermana menor'], ans: 3 },
      { t: 'tx', q: '¿"Padre" de otro (respetuoso) en romaji?', ans: 'otousan' },
      { t: 'mc', q: '¿"Hermano mayor" propio?', opts: ['お兄さん', '兄', '弟', '兄弟'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-15', title: 'Verbos esenciales (ます形)', type: 'grammar',
    steps: [
      { t: 'th', char: 'たべます / のみます', rd: 'tabemasu / nomimasu', mn: 'Comer / Beber', note: 'Forma ます = cortés. Negativo: たべません. Pasado: たべました.' },
      { t: 'th', char: 'いきます / きます', rd: 'ikimasu / kimasu', mn: 'Ir / Venir', note: '〜にいきます = Ir a ~. 来ます es verbo irregular.' },
      { t: 'th', char: 'みます / ききます', rd: 'mimasu / kikimasu', mn: 'Ver / Escuchar', note: 'テレビをみます = Ver TV. おんがくをききます = Escuchar música.' },
      { t: 'th', char: 'します / べんきょうします', rd: 'shimasu / benkyou shimasu', mn: 'Hacer / Estudiar', note: 'します es irregular. Nombre+します = hacer esa actividad.' },
      { t: 'th', char: 'Conjugaciones ます', rd: '', mn: 'Presente/Futuro/Pasado/Negativo', note: 'たべます(como) → たべません(no como) → たべました(comí) → たべませんでした(no comí).' },
      { t: 'mc', q: '¿Negativo de たべます?', opts: ['たべません', 'たべました', 'たべて', 'たべない'], ans: 0 },
      { t: 'mc', q: '¿Pasado de のみます?', opts: ['のみません', 'のみました', 'のんだ', 'のんで'], ans: 1 },
      { t: 'tx', q: '¿"Ir" en forma ます?', ans: 'ikimasu' },
      { t: 'or', q: 'Ordena: "Veo la televisión"', words: ['テレビを', 'みます'], ans: [0, 1] },
      { t: 'mc', q: '¿Pasado negativo de 行きます?', opts: ['行きません', '行きました', '行きませんでした', '行かなかった'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-16', title: 'Grupos verbales (1, 2, 3)', type: 'grammar',
    steps: [
      { t: 'th', char: 'Grupo 1 (五段動詞)', rd: 'godan doushi', mn: 'Verbos -u', note: 'La forma diccionario termina en -u (excepto -iru/-eru): のむ、いく、はなす、かく. Son la mayoría de verbos.' },
      { t: 'th', char: 'Grupo 2 (一段動詞)', rd: 'ichidan doushi', mn: 'Verbos -iru/-eru', note: 'Terminan en -iru o -eru: たべる、みる、おきる、ねる. Conjugación más simple.' },
      { t: 'th', char: 'Grupo 3 (不規則)', rd: 'fukisoku', mn: 'Irregulares', note: 'Solo 2: する(hacer) y 来る(くる, venir). Tienen conjugaciones únicas.' },
      { t: 'th', char: 'Excepciones Grupo 1', rd: '', mn: 'Verbos que parecen G2 pero son G1', note: '⚠️ Estos terminan en -iru/-eru PERO son Grupo 1: はいる(entrar), しる(saber), はしる(correr), かえる(volver).' },
      { t: 'mc', q: '¿A qué grupo pertenece のむ?', opts: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'No es verbo'], ans: 0 },
      { t: 'mc', q: '¿A qué grupo pertenece たべる?', opts: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'No es verbo'], ans: 1 },
      { t: 'mc', q: '¿A qué grupo pertenece する?', opts: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'No es verbo'], ans: 2 },
      { t: 'mc', q: '¿かえる(volver) es qué grupo?', opts: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Depende'], ans: 0 },
      { t: 'tx', q: '¿Cuántos verbos irregulares hay?', ans: '2', hint: 'する y 来る' },
    ]
  },
  {
    id: 'jp-n5-17', title: 'Adjetivos い y な', type: 'grammar',
    steps: [
      { t: 'th', char: 'い形容詞', rd: 'i-keiyoushi', mn: 'Adjetivos-i', note: 'Terminan en い: 大きい(grande), 小さい(pequeño), 高い(caro/alto). Se conjugan quitando い.', ex: [{ j: '大きい', m: 'grande' }, { j: '暑い', m: 'caluroso' }] },
      { t: 'th', char: 'な形容詞', rd: 'na-keiyoushi', mn: 'Adjetivos-na', note: 'No terminan en い (generalmente): きれい(bonito)★, しずか(tranquilo), べんり(conveniente). Usan な antes de sustantivos.', ex: [{ j: 'きれいな花', m: 'flor bonita' }] },
      { t: 'th', char: 'Conjugación い', rd: '', mn: 'Neg/Pasado de adj-i', note: '大きい → 大きくない(no grande) → 大きかった(era grande) → 大きくなかった(no era grande). ⚠️ いい → よくない (irregular).' },
      { t: 'th', char: 'Conjugación な', rd: '', mn: 'Neg/Pasado de adj-na', note: 'しずかです → しずかじゃないです(no tranquilo) → しずかでした(era tranquilo) → しずかじゃなかったです.' },
      { t: 'mc', q: '¿Negativo de 大きい?', opts: ['大きいない', '大きくない', '大きでない', '大きじゃない'], ans: 1 },
      { t: 'mc', q: '¿Negativo de しずか(です)?', opts: ['しずかくない', 'しずかない', 'しずかじゃないです', 'しずかいない'], ans: 2 },
      { t: 'mc', q: '¿Negativo de いい?', opts: ['いくない', 'よくない', 'いいくない', 'よいない'], ans: 1 },
      { t: 'mc', q: '⚠️ きれい es adj-___', opts: ['い', 'な', 'Verbo', 'Sustantivo'], ans: 1 },
      { t: 'tx', q: '¿Pasado de 高い?', ans: 'takakatta', hint: '高い → 高かった' },
    ]
  },
  {
    id: 'jp-n5-18', title: 'Demonstrativos (これ/その/あの)', type: 'grammar',
    steps: [
      { t: 'th', char: 'これ / それ / あれ', rd: 'kore / sore / are', mn: 'Esto / Eso / Aquello', note: 'これ=cerca de mí, それ=cerca de ti, あれ=lejos de ambos. Son pronombres (reemplazan al sustantivo).' },
      { t: 'th', char: 'この / その / あの', rd: 'kono / sono / ano', mn: 'Este~ / Ese~ / Aquel~', note: 'Van ANTES de un sustantivo: このほん = Este libro. そのくるま = Ese coche.' },
      { t: 'th', char: 'ここ / そこ / あそこ', rd: 'koko / soko / asoko', mn: 'Aquí / Ahí / Allá', note: 'Para lugares. どこ = ¿Dónde?' },
      { t: 'mc', q: '"Este libro" =', opts: ['これほん', 'このほん', 'それほん', 'そのほん'], ans: 1 },
      { t: 'mc', q: '¿"Aquello" (lejos de ambos)?', opts: ['これ', 'それ', 'あれ', 'どれ'], ans: 2 },
      { t: 'mc', q: '¿"¿Dónde?"', opts: ['ここ', 'そこ', 'あそこ', 'どこ'], ans: 3 },
      { t: 'or', q: 'Ordena: "¿Qué es esto?"', words: ['これは', 'なん', 'ですか'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿"Ese coche" en romaji?', ans: 'sono kuruma' },
    ]
  },
  {
    id: 'jp-n5-19', title: 'ある vs いる (Existencia)', type: 'grammar',
    steps: [
      { t: 'th', char: 'あります', rd: 'arimasu', mn: 'Hay / Existe (objetos)', note: 'Para cosas INANIMADAS: つくえのうえにほんがあります = Hay un libro sobre el escritorio.' },
      { t: 'th', char: 'います', rd: 'imasu', mn: 'Hay / Existe (seres vivos)', note: 'Para seres VIVOS: にわにねこがいます = Hay un gato en el jardín.' },
      { t: 'th', char: '〜に〜があります/います', rd: '', mn: 'En ~ hay ~', note: 'Patrón: LUGAR + に + COSA/SER + が + あります/います. El lugar va primero.' },
      { t: 'mc', q: '"Hay un gato" =', opts: ['ねこがあります', 'ねこがいます', 'ねこをあります', 'ねこにいます'], ans: 1 },
      { t: 'mc', q: '"Hay un libro" =', opts: ['ほんがいます', 'ほんがあります', 'ほんをあります', 'ほんにあります'], ans: 1 },
      { t: 'mc', q: '¿Plantas usan ある o いる?', opts: ['ある (inanimado)', 'いる (vivo)', 'Ambos', 'Ninguno'], ans: 0 },
      { t: 'or', q: 'Ordena: "Hay un perro en el parque"', words: ['こうえんに', 'いぬが', 'います'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿Negativo de あります?', ans: 'arimasen' },
    ]
  },
  {
    id: 'jp-n5-20', title: 'Contadores (助数詞)', type: 'vocab',
    steps: [
      { t: 'th', char: '〜つ', rd: '~tsu', mn: 'Contador general', note: 'Para contar cosas sin contador específico: ひとつ(1), ふたつ(2), みっつ(3), よっつ(4)... とお(10). Lectura japonesa.' },
      { t: 'th', char: '〜人', rd: '~nin', mn: 'Personas', note: '⚠️ Irregulares: ひとり(1人), ふたり(2人), さんにん(3人), よにん(4人)...' },
      { t: 'th', char: '〜匹/〜本/〜個', rd: '~hiki/~hon/~ko', mn: 'Animales / Objetos largos / Objetos redondos', note: '匹=animales pequeños, 本=lápices/botellas/árboles, 個=manzanas/huevos.' },
      { t: 'th', char: 'Cambios de sonido', rd: '', mn: 'Rendaku en contadores', note: '〜本: いっぽん(1), にほん(2), さんぼん(3). 〜匹: いっぴき(1), にひき(2), さんびき(3). ¡Los sonidos cambian!' },
      { t: 'mc', q: '¿"2 personas"?', opts: ['にじん', 'ふたり', 'にひと', 'にんにん'], ans: 1 },
      { t: 'mc', q: '¿Contador para lápices?', opts: ['〜つ', '〜人', '〜本', '〜匹'], ans: 2 },
      { t: 'mc', q: '¿"3 animales"?', opts: ['さんひき', 'さんびき', 'さんぴき', 'みひき'], ans: 1 },
      { t: 'tx', q: '¿"1 cosa" (contador general)?', ans: 'hitotsu' },
      { t: 'mc', q: '¿"1 lápiz"?', opts: ['いちほん', 'いっぽん', 'ひとほん', 'いちぼん'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-21', title: 'Días, meses, horas', type: 'vocab',
    steps: [
      { t: 'th', char: '月曜日〜日曜日', rd: 'getsuyoubi~nichiyoubi', mn: 'Lunes a Domingo', note: '月(luna)火(fuego)水(agua)木(madera)金(oro)土(tierra)日(sol). Elementos de la naturaleza.' },
      { t: 'th', char: '〜月 / 〜日', rd: '~gatsu / ~nichi', mn: 'Mes / Día del mes', note: '一月(ichigatsu)=enero. ⚠️ Días irregulares: ついたち(1日), ふつか(2日), みっか(3日)...' },
      { t: 'th', char: '〜時〜分', rd: '~ji ~fun/pun', mn: 'Hora y minutos', note: '三時半(sanji han)=3:30. 半=media hora. ⚠️ 分 cambia: いっぷん(1分), にふん(2分), さんぷん(3分).' },
      { t: 'th', char: '午前/午後', rd: 'gozen/gogo', mn: 'AM/PM', note: '午前9時 = 9 AM. 午後3時 = 3 PM.' },
      { t: 'mc', q: '¿Qué elemento tiene el miércoles (水曜日)?', opts: ['Luna', 'Fuego', 'Agua', 'Madera'], ans: 2 },
      { t: 'mc', q: '¿Cómo se dice "1 de enero"?', opts: ['いちがついちにち', 'いちがつついたち', 'ひとつきひとひ', 'いちげついちじつ'], ans: 1 },
      { t: 'tx', q: '¿"3:30" en romaji?', ans: 'sanji han' },
      { t: 'mc', q: '¿Cómo se dice 3:00?', opts: ['さんじ', 'さんぷん', 'さんがつ', 'みっつ'], ans: 0 },
    ]
  },
  {
    id: 'jp-n5-22', title: 'Comida, restaurante, cultura', type: 'vocab',
    steps: [
      { t: 'th', char: 'ごはん / パン', rd: 'gohan / pan', mn: 'Arroz-comida / Pan', note: 'ごはん = arroz cocido O comida en general. あさごはん=desayuno, ひるごはん=almuerzo, ばんごはん=cena.' },
      { t: 'th', char: 'みず / おちゃ / コーヒー', rd: 'mizu / ocha / koohii', mn: 'Agua / Té verde / Café', note: 'おちゃ = té verde japonés, la bebida más popular.' },
      { t: 'th', char: 'いただきます / ごちそうさま', rd: 'itadakimasu / gochisousama', mn: 'Antes/Después de comer', note: 'いただきます = "recibo humildemente" (antes). ごちそうさまでした = "fue un festín" (después). ¡Muy importante!' },
      { t: 'th', char: 'おいしい / まずい', rd: 'oishii / mazui', mn: 'Delicioso / Malo (sabor)', note: 'おいしい es un adjetivo-i. おいしかった = estaba delicioso.' },
      { t: 'mc', q: '¿Qué dices ANTES de comer?', opts: ['ごちそうさま', 'いただきます', 'おいしい', 'すみません'], ans: 1 },
      { t: 'mc', q: '¿"Almuerzo"?', opts: ['あさごはん', 'ひるごはん', 'ばんごはん', 'おべんとう'], ans: 1 },
      { t: 'or', q: 'Ordena: "Bebo café"', words: ['コーヒーを', 'のみます'], ans: [0, 1] },
      { t: 'tx', q: '¿"Delicioso" en romaji?', ans: 'oishii' },
      { t: 'mc', q: '¿Pasado de おいしい?', opts: ['おいしいだった', 'おいしかった', 'おいしくあった', 'おいしいました'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-23', title: 'Preguntas y palabras interrogativas', type: 'grammar',
    steps: [
      { t: 'th', char: 'なに/なん', rd: 'nani / nan', mn: '¿Qué?', note: 'これはなんですか？= ¿Qué es esto? なに antes de partículas, なん antes de です/の.' },
      { t: 'th', char: 'どこ / だれ / いつ', rd: 'doko / dare / itsu', mn: '¿Dónde? / ¿Quién? / ¿Cuándo?', note: 'トイレはどこですか？= ¿Dónde está el baño?' },
      { t: 'th', char: 'いくら / いくつ / どう', rd: 'ikura / ikutsu / dou', mn: '¿Cuánto? / ¿Cuántos? / ¿Cómo?', note: 'いくらですか = ¿Cuánto cuesta? どうですか = ¿Qué tal?' },
      { t: 'th', char: 'どれ / どの / どちら', rd: 'dore / dono / dochira', mn: '¿Cuál? / ¿Cuál~? / ¿Cuál (formal)?', note: 'どれ = cuál (de 3+). どの + sustantivo. どちら = cuál de 2 (o dirección formal).' },
      { t: 'mc', q: '¿"¿Dónde está el baño?"', opts: ['トイレはなんですか', 'トイレはどこですか', 'トイレはだれですか', 'トイレはいつですか'], ans: 1 },
      { t: 'tx', q: '¿"¿Cuánto cuesta?" en romaji?', ans: 'ikura desu ka' },
      { t: 'mc', q: '¿"¿Qué es esto?" → これは___ですか', opts: ['だれ', 'どこ', 'なん', 'いつ'], ans: 2 },
      { t: 'or', q: 'Ordena: "¿Dónde está la estación?"', words: ['えきは', 'どこ', 'ですか'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n5-24', title: 'Kanji básico N5 (1): 人日月火水', type: 'writing',
    steps: [
      { t: 'th', char: '人', rd: 'hito / jin / nin', mn: 'Persona', note: 'ひと=persona. 日本人(nihonjin)=japonés. 一人(hitori)=solo.' },
      { t: 'th', char: '日', rd: 'hi / nichi / bi', mn: 'Día / Sol', note: '今日(kyou)=hoy. 日曜日(nichiyoubi)=domingo. 毎日(mainichi)=cada día.' },
      { t: 'th', char: '月', rd: 'tsuki / gatsu / getsu', mn: 'Luna / Mes', note: '月(tsuki)=luna. 一月(ichigatsu)=enero. 月曜日(getsuyoubi)=lunes.' },
      { t: 'th', char: '火 水 木 金 土', rd: 'hi/ka mizu/sui ki/moku kane/kin tsuchi/do', mn: 'Fuego Agua Madera Oro Tierra', note: 'Los 5 elementos que dan nombre a los días de la semana.' },
      { t: 'mc', q: '¿Lectura de 日本人?', opts: ['にほんじん', 'にっぽんひと', 'ひもとにん', 'にちほんひと'], ans: 0 },
      { t: 'mc', q: '¿Cuál kanji es "agua"?', opts: ['火', '水', '木', '金'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee 今日?', ans: 'kyou' },
      { t: 'mc', q: '¿"Cada día"?', opts: ['今日', '明日', '毎日', '昨日'], ans: 2 },
      { t: 'mc', q: '¿Kanji del viernes (oro)?', opts: ['火', '水', '木', '金'], ans: 3 },
    ]
  },
  {
    id: 'jp-n5-25', title: 'Kanji básico N5 (2): 大小山川学', type: 'writing',
    steps: [
      { t: 'th', char: '大 / 小', rd: 'oo(kii) / chii(sai)', mn: 'Grande / Pequeño', note: '大きい(ookii)=grande. 大学(daigaku)=universidad. 小さい(chiisai)=pequeño.' },
      { t: 'th', char: '山 / 川', rd: 'yama / kawa', mn: 'Montaña / Río', note: '富士山(fujisan)=Monte Fuji. 川(kawa)=río. Kanji pictográficos.' },
      { t: 'th', char: '学 / 生 / 先', rd: 'gaku / sei / sen', mn: 'Aprender / Vida / Antes', note: '学生(gakusei)=estudiante. 先生(sensei)=profesor. 学校(gakkou)=escuela.' },
      { t: 'th', char: '上 / 下 / 中', rd: 'ue / shita / naka', mn: 'Arriba / Abajo / Dentro', note: 'つくえの上(ue)=encima del escritorio. 中(naka)=dentro/medio.' },
      { t: 'mc', q: '¿"Universidad"?', opts: ['学校', '大学', '中学', '小学'], ans: 1 },
      { t: 'mc', q: '¿Lectura de 先生?', opts: ['がくせい', 'せんせい', 'せいと', 'がくしゃ'], ans: 1 },
      { t: 'tx', q: '¿Cómo se lee 学校?', ans: 'gakkou' },
      { t: 'mc', q: '¿"Encima del escritorio"?', opts: ['つくえのした', 'つくえのうえ', 'つくえのなか', 'つくえのそと'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-rep', title: 'Repaso general N5', type: 'reading',
    steps: [
      { t: 'mc', q: '¿Cómo se lee あ?', opts: ['a', 'i', 'u', 'e'], ans: 0 },
      { t: 'mc', q: '¿Qué significa こんにちは?', opts: ['Adiós', 'Hola', 'Gracias', 'Perdón'], ans: 1 },
      { t: 'tx', q: '¿"Buenos días" formal en romaji?', ans: 'ohayou gozaimasu' },
      { t: 'mc', q: '¿Kanji de 3?', opts: ['一', '二', '三', '四'], ans: 2 },
      { t: 'mc', q: '¿"Hay un gato"?', opts: ['ねこがあります', 'ねこがいます', 'ねこをいます', 'ねこはあります'], ans: 1 },
      { t: 'mc', q: '¿Partícula de objeto directo?', opts: ['は', 'が', 'を', 'に'], ans: 2 },
      { t: 'mc', q: '¿Negativo de 大きい?', opts: ['大きいない', '大きくない', '大きでない', '大きじゃない'], ans: 1 },
      { t: 'or', q: 'Ordena: "¿Cuánto cuesta esto?"', words: ['これは', 'いくら', 'ですか'], ans: [0, 1, 2] },
      { t: 'mc', q: '¿"2 personas"?', opts: ['にじん', 'ふたり', 'にひと', 'ふたにん'], ans: 1 },
      { t: 'rd', title: 'Lectura final N5', passage: 'はじめまして。わたしはマリアです。スペインから来ました。今、東京に住んでいます。大学で日本語を勉強しています。毎日、電車で大学に行きます。日本語はむずかしいですが、おもしろいです。よろしくおねがいします。', q: '¿De dónde es María?', opts: ['Japón', 'Francia', 'España', 'Italia'], ans: 2 },
      { t: 'rd', title: 'Lectura final N5', passage: 'はじめまして。わたしはマリアです。スペインから来ました。今、東京に住んでいます。大学で日本語を勉強しています。毎日、電車で大学に行きます。日本語はむずかしいですが、おもしろいです。よろしくおねがいします。', q: '¿Cómo describe el japonés?', opts: ['Fácil', 'Difícil pero interesante', 'Aburrido', 'Imposible'], ans: 1 },
    ]
  },
];

export const jpN4Lessons: Lesson[] = [
  {
    id: 'jp-n4-1', title: 'Forma て (te-form) completa', type: 'grammar',
    steps: [
      { t: 'th', char: 'て形', rd: 'te-kei', mn: 'Forma -te', note: 'Conecta verbos, pide permiso, y más. Es la forma más versátil del japonés.', ex: [{ j: 'たべて', m: 'comer (te)' }, { j: 'のんで', m: 'beber (te)' }] },
      { t: 'th', char: 'Grupo 2: る→て', rd: '', mn: 'Regla G2', note: 'Simplemente quita る y añade て: たべる→たべて, みる→みて, おきる→おきて.' },
      { t: 'th', char: 'Grupo 1: reglas complejas', rd: '', mn: 'Reglas G1', note: 'う/つ/る→って (かう→かって). む/ぶ/ぬ→んで (のむ→のんで). く→いて (かく→かいて). ぐ→いで (およぐ→およいで). す→して (はなす→はなして). ⚠️行く→行って (excepción).' },
      { t: 'th', char: 'Grupo 3: irregulares', rd: '', mn: 'する→して, くる→きて', note: 'Los dos irregulares: する→して, 来る(くる)→来て(きて).' },
      { t: 'mc', q: '¿Forma て de のみます?', opts: ['のんで', 'のみて', 'のんだ', 'のみで'], ans: 0 },
      { t: 'mc', q: '¿Forma て de かく(escribir)?', opts: ['かくて', 'かいて', 'かって', 'かして'], ans: 1 },
      { t: 'th', char: '〜てください', rd: '~te kudasai', mn: 'Por favor haga ~', note: 'て + ください = petición cortés. まってください = Por favor espere.' },
      { t: 'or', q: 'Ordena: "Por favor espere"', words: ['まって', 'ください'], ans: [0, 1] },
      { t: 'tx', q: '¿Forma て de 行く?', ans: 'itte', hint: '行く es excepción: 行って' },
      { t: 'mc', q: '¿Forma て de はなす(hablar)?', opts: ['はなして', 'はないて', 'はなんで', 'はなって'], ans: 0 },
    ]
  },
  {
    id: 'jp-n4-2', title: 'Forma ない (negativo informal)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜ない', rd: '~nai', mn: 'No hacer ~ (informal)', note: 'G2: たべる→たべない. G1: のむ→のまない (cambia la vocal a あ段). G3: する→しない, くる→こない.' },
      { t: 'th', char: 'Regla G1 detallada', rd: '', mn: 'う段→あ段+ない', note: 'のむ(mu)→のま(ma)ない. かく(ku)→かか(ka)ない. はなす(su)→はなさ(sa)ない. ⚠️ う→わない: かう→かわない (no かあない).' },
      { t: 'mc', q: '¿Negativo de 行く(iku)?', opts: ['行かない', '行きない', '行くない', '行けない'], ans: 0 },
      { t: 'mc', q: '¿Negativo de かう(comprar)?', opts: ['かあない', 'かわない', 'かいない', 'かうない'], ans: 1 },
      { t: 'tx', q: '¿Negativo informal de たべる?', ans: 'tabenai' },
      { t: 'mc', q: '¿Negativo de する?', opts: ['すない', 'しない', 'さない', 'せない'], ans: 1 },
      { t: 'mc', q: '¿Negativo de くる(venir)?', opts: ['くらない', 'きない', 'こない', 'けない'], ans: 2 },
      { t: 'th', char: '〜ないでください', rd: '~naide kudasai', mn: 'Por favor no haga ~', note: 'たべないでください = Por favor no coma. Forma negativa de petición.' },
      { t: 'or', q: 'Ordena: "Por favor no corra"', words: ['はしらないで', 'ください'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n4-3', title: 'Forma たい (querer hacer)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜たい', rd: '~tai', mn: 'Querer hacer ~', note: 'ます形 sin ます + たい: たべます→たべたい. Se conjuga como adjetivo-i: たべたくない(no quiero comer), たべたかった(quería comer).' },
      { t: 'mc', q: '¿"Quiero ir"?', opts: ['行きたい', '行きたくない', '行った', '行って'], ans: 0 },
      { t: 'tx', q: '¿"Quiero comer" en romaji?', ans: 'tabetai' },
      { t: 'mc', q: '¿"No quiero beber"?', opts: ['のみたい', 'のみたくない', 'のみたかった', 'のみたくなかった'], ans: 1 },
      { t: 'or', q: 'Ordena: "Quiero beber agua"', words: ['みずを', 'のみたい', 'です'], ans: [0, 1, 2] },
      { t: 'th', char: '〜たがっている', rd: '~tagatteiru', mn: 'Él/Ella quiere ~', note: '⚠️ たい solo para YO. Para terceros: 田中さんは行きたがっている = Tanaka quiere ir.' },
      { t: 'mc', q: '¿"Ella quiere ir" (tercera persona)?', opts: ['行きたいです', '行きたがっています', '行きたくない', '行きたかった'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-4', title: 'Partículas avanzadas (から/まで/で)', type: 'grammar',
    steps: [
      { t: 'th', char: 'から (razón)', rd: 'kara', mn: 'Porque ~', note: 'あついから、まどをあけました = Porque hace calor, abrí la ventana. Razón + から + resultado.' },
      { t: 'th', char: 'ので', rd: 'node', mn: 'Ya que ~ (más cortés)', note: 'あつかったので、まどをあけました = Ya que hacía calor... ので es más suave que から.' },
      { t: 'th', char: 'のに', rd: 'noni', mn: 'A pesar de que ~', note: 'べんきょうしたのに、しけんにおちた = A pesar de que estudié, reprobé. Expresa frustración.' },
      { t: 'mc', q: '¿Cuál es más cortés para "porque"?', opts: ['から', 'ので', 'のに', 'けど'], ans: 1 },
      { t: 'mc', q: '¿Qué expresa のに?', opts: ['Razón', 'A pesar de', 'Si', 'Mientras'], ans: 1 },
      { t: 'tx', q: '¿Partícula para "hasta"?', ans: 'made' },
      { t: 'or', q: 'Ordena: "No fui porque llovió"', words: ['あめがふったから', 'いきませんでした'], ans: [0, 1] },
      { t: 'mc', q: '¿Partícula para "desde"?', opts: ['に', 'で', 'から', 'まで'], ans: 2 },
    ]
  },
  {
    id: 'jp-n4-5', title: 'Condicional ば/たら', type: 'grammar',
    steps: [
      { t: 'th', char: '〜たら', rd: '~tara', mn: 'Si ~ / Cuando ~', note: '雨が降ったら、行きません = Si llueve, no iré. Más conversacional, también para "cuando".' },
      { t: 'th', char: '〜ば', rd: '~ba', mn: 'Si ~ (condición general)', note: '安ければ、買います = Si es barato, compraré. G1: え段+ば (行けば). G2: れば (たべれば). Adj-i: ければ.' },
      { t: 'mc', q: '¿"Si llueve"?', opts: ['雨が降れば', '雨が降ったら', 'Ambas', '雨が降って'], ans: 2 },
      { t: 'tx', q: '¿Condicional たら de 食べる?', ans: 'tabetara' },
      { t: 'mc', q: '¿Forma ば de 行く?', opts: ['行けば', '行くば', '行ば', '行いば'], ans: 0 },
      { t: 'mc', q: '¿Forma ば de 安い?', opts: ['安いば', '安ければ', '安くば', '安ば'], ans: 1 },
      { t: 'or', q: 'Ordena: "Si es barato, lo compro"', words: ['安ければ', 'かいます'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n4-6', title: 'Forma potencial (できる)', type: 'grammar',
    steps: [
      { t: 'th', char: 'Forma potencial', rd: '', mn: 'Poder hacer ~', note: 'G1: う段→え段+る (のむ→のめる). G2: る→られる (たべる→たべられる). G3: する→できる, くる→こられる.' },
      { t: 'mc', q: '¿Potencial de 読む(leer)?', opts: ['読まれる', '読める', '読みられる', '読むれる'], ans: 1 },
      { t: 'mc', q: '¿Potencial de する?', opts: ['される', 'しられる', 'できる', 'すれる'], ans: 2 },
      { t: 'tx', q: '¿"Puedo hablar japonés" en romaji?', ans: 'nihongo ga hanaseru' },
      { t: 'th', char: 'を→が en potencial', rd: '', mn: 'Cambio de partícula', note: '⚠️ Con potencial se suele usar が en vez de を: 日本語を話す → 日本語が話せる.' },
      { t: 'or', q: 'Ordena: "Puedo comer sushi"', words: ['すしが', 'たべられます'], ans: [0, 1] },
      { t: 'mc', q: '¿Potencial de かく(escribir)?', opts: ['かかれる', 'かける', 'かきれる', 'かくれる'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-7', title: 'Forma volitiva (〜よう)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜よう/〜おう', rd: '~you/~ou', mn: 'Vamos a ~ / Hagamos ~', note: 'G2: る→よう (たべる→たべよう). G1: う段→おう段 (行く→行こう, のむ→のもう). G3: する→しよう, くる→こよう.' },
      { t: 'mc', q: '¿Volitiva de 行く?', opts: ['行きよう', '行こう', '行くよう', '行けよう'], ans: 1 },
      { t: 'tx', q: '¿"Vamos a comer" en romaji?', ans: 'tabeyou' },
      { t: 'mc', q: '¿Volitiva de する?', opts: ['すよう', 'しよう', 'さよう', 'せよう'], ans: 1 },
      { t: 'th', char: '〜ようと思う', rd: '~you to omou', mn: 'Pienso hacer ~', note: '日本に行こうと思います = Pienso ir a Japón. Expresa intención.' },
      { t: 'mc', q: '¿Volitiva de のむ?', opts: ['のみよう', 'のもう', 'のむよう', 'のめよう'], ans: 1 },
      { t: 'or', q: 'Ordena: "Pienso estudiar japonés"', words: ['日本語を', 'べんきょうしようと', 'おもいます'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n4-8', title: 'Forma pasiva (〜られる)', type: 'grammar',
    steps: [
      { t: 'th', char: 'Pasiva', rd: '', mn: 'Ser hecho ~ / Le hicieron ~', note: 'G1: う段→あ段+れる (読む→読まれる). G2: る→られる (たべる→たべられる). G3: する→される, くる→こられる.' },
      { t: 'mc', q: '¿Pasiva de 書く(kaku)?', opts: ['書かれる', '書きれる', '書くれる', '書けれる'], ans: 0 },
      { t: 'th', char: '先生に褒められた', rd: 'sensei ni homerareta', mn: 'Fui elogiado por el profesor', note: 'Agente con に. La pasiva japonesa a menudo implica molestia (迷惑の受身).' },
      { t: 'th', char: '迷惑の受身', rd: 'meiwaku no ukemi', mn: 'Pasiva de molestia', note: '雨に降られた = Me llovió (y fue molesto). Esta pasiva NO existe en español.' },
      { t: 'tx', q: '¿Pasiva de 呼ぶ(yobu, llamar)?', ans: 'yobareru' },
      { t: 'mc', q: '¿Pasiva de たべる?', opts: ['たべさせる', 'たべられる', 'たべれる', 'たべあれる'], ans: 1 },
      { t: 'or', q: 'Ordena: "El pastel fue comido por el hermano"', words: ['ケーキは', 'おとうとに', 'たべられた'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n4-9', title: 'Forma causativa (〜させる)', type: 'grammar',
    steps: [
      { t: 'th', char: 'Causativa', rd: '', mn: 'Hacer que alguien haga ~', note: 'G1: う段→あ段+せる (のむ→のませる). G2: る→させる (たべる→たべさせる). G3: する→させる, くる→こさせる.' },
      { t: 'mc', q: '¿Causativa de 飲む?', opts: ['飲ませる', '飲みさせる', '飲まれる', '飲むさせる'], ans: 0 },
      { t: 'th', char: '母は子供に野菜を食べさせた', rd: 'haha wa kodomo ni yasai wo tabesaseta', mn: 'La madre hizo que el niño comiera verduras', note: 'A(は) hace que B(に) haga C(を+verbo causativo).' },
      { t: 'tx', q: '¿Causativa de 行く?', ans: 'ikaseru' },
      { t: 'mc', q: '¿Causativa de する?', opts: ['すせる', 'させる', 'しせる', 'さする'], ans: 1 },
      { t: 'th', char: '〜させてください', rd: '~sasete kudasai', mn: 'Por favor déjeme ~', note: '行かせてください = Por favor déjeme ir. Causativo + てください = pedir permiso.' },
      { t: 'or', q: 'Ordena: "Déjeme hablar"', words: ['はなさせて', 'ください'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n4-10', title: 'Dar y recibir (あげる/もらう/くれる)', type: 'grammar',
    steps: [
      { t: 'th', char: 'あげる', rd: 'ageru', mn: 'Dar (yo→otro)', note: '友達にプレゼントをあげる = Dar un regalo a un amigo.' },
      { t: 'th', char: 'もらう', rd: 'morau', mn: 'Recibir', note: '友達からプレゼントをもらう = Recibir un regalo de un amigo.' },
      { t: 'th', char: 'くれる', rd: 'kureru', mn: 'Dar (otro→yo)', note: '友達がプレゼントをくれた = Mi amigo me dio un regalo. Implica gratitud.' },
      { t: 'mc', q: '¿Cuál significa "recibir"?', opts: ['あげる', 'くれる', 'もらう', 'やる'], ans: 2 },
      { t: 'tx', q: '¿"Dar" (yo a otro) en romaji?', ans: 'ageru' },
      { t: 'th', char: '〜てあげる/もらう/くれる', rd: '', mn: 'Hacer algo por alguien', note: '手伝ってあげる = Ayudar (yo a otro). 手伝ってもらう = Que me ayuden. 手伝ってくれる = Que alguien me ayude (gratitud).' },
      { t: 'mc', q: '¿"Mi amigo me enseñó" (con gratitud)?', opts: ['友達が教えてくれた', '友達に教えてあげた', '友達に教えてもらった', 'A y C'], ans: 3 },
    ]
  },
  {
    id: 'jp-n4-11', title: '〜ている (progresivo/estado)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜ている', rd: '~te iru', mn: 'Estar haciendo ~ / Estado resultante', note: 'たべている = Estoy comiendo (acción en progreso). 結婚している = Estar casado (estado resultante).' },
      { t: 'th', char: 'Progresivo vs Estado', rd: '', mn: 'Dos significados clave', note: '本を読んでいる = Estoy leyendo (ahora mismo). 知っている = Saber (estado, no "estoy sabiendo").' },
      { t: 'mc', q: '¿"Estoy comiendo"?', opts: ['たべます', 'たべている', 'たべた', 'たべたい'], ans: 1 },
      { t: 'mc', q: '¿"Está casado/a"?', opts: ['けっこんする', 'けっこんした', 'けっこんしている', 'けっこんしたい'], ans: 2 },
      { t: 'th', char: '〜てある', rd: '~te aru', mn: 'Algo fue hecho (y sigue así)', note: 'まどがあけてある = La ventana fue abierta (y sigue abierta). Enfoca el RESULTADO de una acción de alguien.' },
      { t: 'mc', q: '¿Diferencia entre ている y てある?', opts: ['No hay', 'ている=progresivo, てある=resultado intencional', 'Son iguales', 'てある es pasado'], ans: 1 },
      { t: 'tx', q: '¿"Sé/Conozco" en romaji?', ans: 'shitte iru' },
    ]
  },
  {
    id: 'jp-n4-12', title: 'Cláusulas relativas', type: 'grammar',
    steps: [
      { t: 'th', char: '修飾節', rd: 'shuushokusetsu', mn: 'Cláusula modificadora', note: 'En japonés la cláusula va ANTES del sustantivo: 昨日買った本 = el libro que compré ayer. No se usa "que".' },
      { t: 'mc', q: '¿"El libro que leí"?', opts: ['読んだ本', '本を読んだ', '読む本が', '本は読んだ'], ans: 0 },
      { t: 'or', q: 'Ordena: "La persona que vino ayer"', words: ['きのう', '来た', '人'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿"El pastel que hice" en romaji?', ans: 'tsukutta keeki' },
      { t: 'th', char: 'Más ejemplos', rd: '', mn: 'Cláusulas complejas', note: '日本語を話す人 = persona que habla japonés. 東京に住んでいる友達 = amigo que vive en Tokio.' },
      { t: 'mc', q: '¿"Persona que habla japonés"?', opts: ['日本語を話す人', '人が日本語を話す', '日本語の人を話す', '話す日本語の人'], ans: 0 },
    ]
  },
  {
    id: 'jp-n4-13', title: 'Transitivos e intransitivos', type: 'grammar',
    steps: [
      { t: 'th', char: '開ける/開く', rd: 'akeru/aku', mn: 'Abrir (trans.) / Abrirse (intrans.)', note: 'ドアを開ける = Abrir la puerta (yo). ドアが開く = La puerta se abre (sola). を=transitivo, が=intransitivo.' },
      { t: 'th', char: '閉める/閉まる', rd: 'shimeru/shimaru', mn: 'Cerrar / Cerrarse', note: '消す/消える(kesu/kieru)=apagar/apagarse. つける/つく=encender/encenderse.' },
      { t: 'mc', q: '¿"La puerta se abrió"?', opts: ['ドアを開けた', 'ドアが開いた', 'ドアを開いた', 'ドアが開けた'], ans: 1 },
      { t: 'tx', q: '¿"Cerrar" (transitivo) en romaji?', ans: 'shimeru' },
      { t: 'mc', q: '¿"La luz se apagó"?', opts: ['電気を消した', '電気が消えた', '電気を消えた', '電気が消した'], ans: 1 },
      { t: 'or', q: 'Ordena: "Encendí la luz"', words: ['電気を', 'つけました'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n4-14', title: 'Keigo: sonkeigo (尊敬語)', type: 'grammar',
    steps: [
      { t: 'th', char: 'いらっしゃる', rd: 'irassharu', mn: 'Estar/Ir/Venir (honorífico)', note: 'Honorífico de いる, 行く, 来る. Eleva la acción del interlocutor.' },
      { t: 'th', char: 'おっしゃる / 召し上がる', rd: 'ossharu / meshiagaru', mn: 'Decir / Comer-Beber (honorífico)', note: 'Honorífico de 言う y 食べる/飲む respectivamente.' },
      { t: 'th', char: 'ご覧になる / お〜になる', rd: 'goran ni naru / o~ni naru', mn: 'Ver (hon.) / Patrón honorífico', note: 'お+ます形+になる = patrón general: お読みになる = leer (honorífico).' },
      { t: 'mc', q: '¿Honorífico de "decir"?', opts: ['いらっしゃる', 'おっしゃる', '召し上がる', 'ご覧になる'], ans: 1 },
      { t: 'tx', q: '¿"Comer" honorífico en romaji?', ans: 'meshiagaru' },
      { t: 'mc', q: '¿Cuándo se usa 尊敬語?', opts: ['Sobre mí mismo', 'Sobre superiores/clientes', 'Con amigos', 'En casual'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-15', title: 'Keigo: kenjougo (謙譲語)', type: 'grammar',
    steps: [
      { t: 'th', char: '参る / 申す', rd: 'mairu / mousu', mn: 'Ir-Venir / Decir (humilde)', note: 'Humilde de 行く/来る y 言う. Baja MI acción para mostrar respeto.' },
      { t: 'th', char: 'いただく / おる', rd: 'itadaku / oru', mn: 'Recibir-Comer / Estar (humilde)', note: 'Humilde de もらう/食べる y いる.' },
      { t: 'th', char: 'お〜する', rd: 'o~suru', mn: 'Patrón humilde', note: 'お持ちする = llevar (humilde). お待ちする = esperar (humilde).' },
      { t: 'mc', q: '¿Humilde de "ir"?', opts: ['いらっしゃる', '参る', '申す', 'いただく'], ans: 1 },
      { t: 'tx', q: '¿"Decir" humilde en romaji?', ans: 'mousu' },
      { t: 'mc', q: '¿Cuándo se usa 謙譲語?', opts: ['Sobre superiores', 'Sobre mí mismo ante superiores', 'Con amigos', 'Siempre'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-16', title: 'Oraciones compuestas (し/けど/ても)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜し、〜し', rd: '~shi, ~shi', mn: 'Además / Y también', note: 'Lista razones: このレストランは安いし、おいしいし、好きです.' },
      { t: 'th', char: '〜けど/けれども', rd: '~kedo/keredomo', mn: 'Pero / Aunque', note: '高いけど、買いたい = Es caro pero quiero comprarlo. けれども es más formal.' },
      { t: 'th', char: '〜ても', rd: '~te mo', mn: 'Aunque / Incluso si', note: '雨が降っても行きます = Incluso si llueve, iré. Más fuerte que けど.' },
      { t: 'mc', q: '¿Qué expresa 〜し?', opts: ['Contraste', 'Razones múltiples', 'Tiempo', 'Condición'], ans: 1 },
      { t: 'or', q: 'Ordena: "Es barato y delicioso"', words: ['安いし', 'おいしいし', 'いいです'], ans: [0, 1, 2] },
      { t: 'mc', q: '¿"Aunque llueva, iré"?', opts: ['雨が降ったら行く', '雨が降っても行く', '雨が降るし行く', '雨が降るけど行く'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-17', title: '〜てしまう / 〜そう / 〜ようにする', type: 'grammar',
    steps: [
      { t: 'th', char: '〜てしまう', rd: '~te shimau', mn: 'Completar / Lamentar haber hecho', note: '食べてしまった = Me lo comí todo / Lamentablemente me lo comí. Casual: 〜ちゃう/〜じゃう.' },
      { t: 'th', char: '〜そう (apariencia)', rd: '~sou', mn: 'Parece ~', note: 'おいしそう = Parece delicioso. 雨が降りそう = Parece que va a llover. ⚠️ adj-i quita い: おいしい→おいしそう. いい→よさそう.' },
      { t: 'th', char: '〜ようにする', rd: '~you ni suru', mn: 'Esforzarse por ~', note: '毎日運動するようにしている = Me esfuerzo por hacer ejercicio cada día.' },
      { t: 'mc', q: '¿Casual de 飲んでしまう?', opts: ['飲んちゃう', '飲みちゃう', '飲むちゃう', '飲んじゃう'], ans: 3 },
      { t: 'mc', q: '¿"Parece delicioso"?', opts: ['おいしいそう', 'おいしそう', 'おいしさそう', 'おいしくそう'], ans: 1 },
      { t: 'tx', q: '¿"Parece caro" en romaji?', ans: 'takasou' },
      { t: 'mc', q: '¿"Parece bueno" (いい→)?', opts: ['いいそう', 'いそう', 'よさそう', 'よいそう'], ans: 2 },
    ]
  },
  {
    id: 'jp-n4-18', title: 'Expresiones de tiempo (前に/後で/ながら)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜前に', rd: '~mae ni', mn: 'Antes de ~', note: '食べる前に = Antes de comer. Verbo diccionario + 前に.' },
      { t: 'th', char: '〜た後で', rd: '~ta ato de', mn: 'Después de ~', note: '食べた後で = Después de comer. Pasado + 後で.' },
      { t: 'th', char: '〜ながら', rd: '~nagara', mn: 'Mientras ~', note: '音楽を聞きながら勉強する = Estudiar mientras escucho música. Acción secundaria + ながら + acción principal.' },
      { t: 'mc', q: '¿"Antes de dormir"?', opts: ['寝た後で', '寝る前に', '寝ながら', '寝てから'], ans: 1 },
      { t: 'tx', q: '¿"Mientras" en romaji?', ans: 'nagara' },
      { t: 'or', q: 'Ordena: "Después de comer, bebo té"', words: ['たべた', 'あとで', 'おちゃを', 'のみます'], ans: [0, 1, 2, 3] },
    ]
  },
  {
    id: 'jp-n4-19', title: 'Contadores avanzados', type: 'vocab',
    steps: [
      { t: 'th', char: '〜枚 (まい)', rd: '~mai', mn: 'Objetos planos', note: '紙三枚 = 3 hojas de papel. Para camisas, platos, etc.' },
      { t: 'th', char: '〜冊 / 〜杯 / 〜台', rd: '~satsu / ~hai / ~dai', mn: 'Libros / Vasos / Máquinas', note: '本二冊 = 2 libros. コーヒー一杯 = 1 taza de café. 車二台 = 2 coches.' },
      { t: 'th', char: '〜回 / 〜階', rd: '~kai / ~kai', mn: 'Veces / Pisos', note: '三回 = 3 veces. 五階 = 5to piso. Misma lectura, distinto kanji.' },
      { t: 'mc', q: '¿Contador para libros?', opts: ['枚', '冊', '杯', '台'], ans: 1 },
      { t: 'tx', q: '¿"2 tazas" en romaji?', ans: 'ni hai' },
      { t: 'mc', q: '¿"3er piso"?', opts: ['三回', '三階', '三冊', '三枚'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-20', title: 'En el hospital / Trabajo', type: 'vocab',
    steps: [
      { t: 'th', char: '熱がある / お腹が痛い', rd: 'netsu ga aru / onaka ga itai', mn: 'Tener fiebre / Dolor de estómago', note: '〜が痛い = me duele ~. 頭が痛い = dolor de cabeza.' },
      { t: 'th', char: '薬 / 風邪', rd: 'kusuri / kaze', mn: 'Medicina / Resfriado', note: '風邪を引きました = Me resfrié. 薬を飲む = Tomar medicina.' },
      { t: 'th', char: '会議 / 書類 / 締め切り', rd: 'kaigi / shorui / shimekiri', mn: 'Reunión / Documentos / Plazo', note: 'Vocabulario de oficina esencial para N4.' },
      { t: 'mc', q: '¿"Tener fiebre"?', opts: ['頭が痛い', '熱がある', '風邪を引く', '薬を飲む'], ans: 1 },
      { t: 'tx', q: '¿"Reunión" en romaji?', ans: 'kaigi' },
      { t: 'mc', q: '¿Qué es 締め切り?', opts: ['Reunión', 'Documento', 'Fecha límite', 'Horas extra'], ans: 2 },
    ]
  },
  {
    id: 'jp-n4-21', title: '〜ことがある / 〜ことにする', type: 'grammar',
    steps: [
      { t: 'th', char: '〜たことがある', rd: '~ta koto ga aru', mn: 'Haber hecho ~ (experiencia)', note: '日本に行ったことがあります = He ido a Japón (tengo la experiencia).' },
      { t: 'th', char: '〜ことにする', rd: '~koto ni suru', mn: 'Decidir hacer ~', note: '日本に行くことにした = Decidí ir a Japón.' },
      { t: 'th', char: '〜ことになる', rd: '~koto ni naru', mn: 'Resultar que ~ / Se decidió que ~', note: '来月日本に行くことになりました = Se decidió que iré a Japón el próximo mes (decisión externa).' },
      { t: 'mc', q: '¿"He comido sushi"?', opts: ['すしを食べます', 'すしを食べたことがあります', 'すしを食べることにします', 'すしを食べたい'], ans: 1 },
      { t: 'mc', q: '¿にする vs になる?', opts: ['Iguales', 'にする=decidir yo, になる=se decidió', 'にする=pasado, になる=futuro', 'Sin diferencia'], ans: 1 },
      { t: 'tx', q: '¿"Decidí estudiar" en romaji?', ans: 'benkyou suru koto ni shita' },
    ]
  },
  {
    id: 'jp-n4-22', title: 'Lectura de comprensión N4', type: 'reading',
    steps: [
      { t: 'rd', title: 'En la oficina', passage: '田中さんは来月からアメリカに留学します。英語をもっと上手に話せるようになりたいからです。出発の前に、友達とお別れパーティーをする予定です。みんな田中さんがいなくなるのは寂しいと言っています。', q: '¿Por qué va a EEUU?', opts: ['Trabajo', 'Turismo', 'Mejorar su inglés', 'Familia'], ans: 2 },
      { t: 'rd', title: 'En la oficina (cont.)', passage: '田中さんは来月からアメリカに留学します。英語をもっと上手に話せるようになりたいからです。出発の前に、友達とお別れパーティーをする予定です。みんな田中さんがいなくなるのは寂しいと言っています。', q: '¿Qué harán antes de que se vaya?', opts: ['Estudiar juntos', 'Fiesta de despedida', 'Ir de compras', 'Viajar juntos'], ans: 1 },
      { t: 'rd', title: 'Cocina japonesa', passage: '昨日、初めて一人で日本料理を作りました。インターネットでレシピを見ながら、カレーライスを作りました。少し辛かったですが、おいしくできました。次はラーメンを作ってみようと思います。', q: '¿Qué cocinó?', opts: ['Sushi', 'Ramen', 'Curry con arroz', 'Tempura'], ans: 2 },
      { t: 'mc', q: '¿Qué quiere cocinar la próxima vez?', opts: ['Sushi', 'Ramen', 'Curry', 'Tempura'], ans: 1 },
      { t: 'rd', title: 'La biblioteca', passage: '私の町には大きい図書館があります。毎週土曜日に行きます。本を借りたり、勉強したりします。静かで、とても気に入っています。図書館の隣にカフェがあるので、勉強した後でコーヒーを飲みます。', q: '¿Con qué frecuencia va?', opts: ['Todos los días', 'Cada sábado', 'Cada mes', 'A veces'], ans: 1 },
      { t: 'mc', q: '¿Qué hace después de estudiar?', opts: ['Come', 'Bebe café', 'Lee', 'Duerme'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-23', title: '〜すぎる / 〜やすい / 〜にくい', type: 'grammar',
    steps: [
      { t: 'th', char: '〜すぎる', rd: '~sugiru', mn: 'Demasiado ~', note: '食べすぎる = Comer demasiado. 高すぎる = Demasiado caro. Adj-i: quita い+すぎる.' },
      { t: 'th', char: '〜やすい / 〜にくい', rd: '~yasui / ~nikui', mn: 'Fácil de ~ / Difícil de ~', note: 'この本は読みやすい = Este libro es fácil de leer. 使いにくい = Difícil de usar.' },
      { t: 'mc', q: '¿"Comer demasiado"?', opts: ['たべすぎる', 'たべやすい', 'たべにくい', 'たべたい'], ans: 0 },
      { t: 'mc', q: '¿"Fácil de leer"?', opts: ['読みすぎる', '読みにくい', '読みやすい', '読みたい'], ans: 2 },
      { t: 'tx', q: '¿"Demasiado caro" en romaji?', ans: 'takasugiru' },
      { t: 'mc', q: '¿"Difícil de usar"?', opts: ['使いやすい', '使いすぎる', '使いにくい', '使いたい'], ans: 2 },
    ]
  },
  {
    id: 'jp-n4-24', title: 'Expresiones con と/ように', type: 'grammar',
    steps: [
      { t: 'th', char: '〜と思う', rd: '~to omou', mn: 'Pienso que ~', note: '明日は雨だと思います = Pienso que mañana lloverá. Cita indirecta con と.' },
      { t: 'th', char: '〜と言う', rd: '~to iu', mn: 'Decir que ~', note: '先生は「勉強しなさい」と言いました = El profesor dijo "estudien".' },
      { t: 'th', char: '〜ようになる', rd: '~you ni naru', mn: 'Llegar a poder ~ / Empezar a ~', note: '日本語が話せるようになった = Llegué a poder hablar japonés. Cambio gradual.' },
      { t: 'mc', q: '¿"Creo que va a llover"?', opts: ['雨が降ると思う', '雨が降ると言う', '雨が降るようになる', '雨が降るようにする'], ans: 0 },
      { t: 'mc', q: '¿"Llegué a poder nadar"?', opts: ['泳げると思う', '泳げるようになった', '泳げるようにした', '泳げると言った'], ans: 1 },
      { t: 'or', q: 'Ordena: "El profesor dijo que estudiemos"', words: ['先生は', 'べんきょうしなさいと', 'いいました'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n4-rep', title: 'Repaso general N4', type: 'reading',
    steps: [
      { t: 'mc', q: '¿Forma て de のむ?', opts: ['のんで', 'のみて', 'のって', 'のして'], ans: 0 },
      { t: 'mc', q: '¿Negativo informal de 食べる?', opts: ['食べない', '食べません', '食べなくない', '食べるない'], ans: 0 },
      { t: 'mc', q: '¿Potencial de 書く?', opts: ['書かれる', '書ける', '書きれる', '書くれる'], ans: 1 },
      { t: 'mc', q: '¿Causativa de 食べる?', opts: ['食べさせる', '食べられる', '食べれる', '食べする'], ans: 0 },
      { t: 'tx', q: '¿"Quiero ir" en romaji?', ans: 'ikitai' },
      { t: 'mc', q: '¿"Parece delicioso"?', opts: ['おいしいそう', 'おいしそう', 'おいしさそう', 'おいしくそう'], ans: 1 },
      { t: 'mc', q: '¿"Antes de comer"?', opts: ['食べた後で', '食べる前に', '食べながら', '食べてから'], ans: 1 },
      { t: 'or', q: 'Ordena: "He ido a Japón"', words: ['日本に', '行ったことが', 'あります'], ans: [0, 1, 2] },
      { t: 'rd', title: 'Lectura final N4', passage: '山田さんは毎朝6時に起きて、ジョギングをしてから朝ごはんを食べます。会社には電車で行きます。仕事は忙しいですが、やりがいがあると言っています。週末は家族と過ごすようにしています。趣味は料理で、特にイタリア料理を作るのが好きです。', q: '¿趣味は何ですか?', opts: ['ジョギング', 'テレビ', '料理', '読書'], ans: 2 },
      { t: 'rd', title: 'Lectura final N4', passage: '山田さんは毎朝6時に起きて、ジョギングをしてから朝ごはんを食べます。会社には電車で行きます。仕事は忙しいですが、やりがいがあると言っています。週末は家族と過ごすようにしています。趣味は料理で、特にイタリア料理を作るのが好きです。', q: '¿Qué cocina le gusta hacer?', opts: ['Japonesa', 'Francesa', 'Italiana', 'China'], ans: 2 },
    ]
  },
];
