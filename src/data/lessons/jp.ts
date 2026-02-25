import { Lesson } from '../types';

export const jpN5Lessons: Lesson[] = [
  {
    id: 'jp-n5-1', title: 'Hiragana あ行', type: 'writing',
    steps: [
      { t: 'th', char: 'あ', rd: 'a', mn: 'Vocal /a/', note: 'Primera letra del hiragana.', ex: [{ j: 'あめ', m: 'lluvia' }, { j: 'あさ', m: 'mañana' }] },
      { t: 'th', char: 'い', rd: 'i', mn: 'Vocal /i/', note: 'Se pronuncia como la "i" en español.', ex: [{ j: 'いぬ', m: 'perro' }] },
      { t: 'th', char: 'う', rd: 'u', mn: 'Vocal /u/', note: 'Más cerrada que la "u" española.', ex: [{ j: 'うみ', m: 'mar' }] },
      { t: 'mc', q: '¿Cómo se lee あ?', opts: ['a', 'i', 'u', 'e'], ans: 0 },
      { t: 'mc', q: '¿Qué hiragana es "i"?', opts: ['あ', 'い', 'う', 'え'], ans: 1 },
      { t: 'tx', q: 'Escribe la lectura de うみ en romaji:', ans: 'umi', hint: 'う=u, み=mi' },
      { t: 'th', char: 'え', rd: 'e', mn: 'Vocal /e/', note: 'Como la "e" española.', ex: [{ j: 'えき', m: 'estación' }] },
      { t: 'th', char: 'お', rd: 'o', mn: 'Vocal /o/', note: 'Como la "o" española.', ex: [{ j: 'おかね', m: 'dinero' }] },
      { t: 'mc', q: '¿Orden correcto de vocales japonesas?', opts: ['a, i, u, e, o', 'a, e, i, o, u', 'i, a, u, e, o', 'a, i, e, u, o'], ans: 0 },
    ]
  },
  {
    id: 'jp-n5-2', title: 'Saludos básicos', type: 'vocab',
    steps: [
      { t: 'th', char: 'こんにちは', rd: 'konnichiwa', mn: 'Hola / Buenas tardes', note: 'Saludo más común, de mediodía al atardecer.' },
      { t: 'th', char: 'おはようございます', rd: 'ohayou gozaimasu', mn: 'Buenos días (formal)', note: 'おはよう es informal.' },
      { t: 'th', char: 'こんばんは', rd: 'konbanwa', mn: 'Buenas noches (saludo)', note: 'Para saludar, no despedirse.' },
      { t: 'mc', q: '¿"Buenos días" formal?', opts: ['こんにちは', 'おはようございます', 'こんばんは', 'さようなら'], ans: 1 },
      { t: 'th', char: 'ありがとうございます', rd: 'arigatou gozaimasu', mn: 'Muchas gracias', note: 'ありがとう es informal.' },
      { t: 'th', char: 'すみません', rd: 'sumimasen', mn: 'Disculpe', note: 'Para pedir permiso o disculparse.' },
      { t: 'tx', q: '¿"Gracias" en romaji?', ans: 'arigatou', hint: 'あ り が と う' },
      { t: 'mc', q: '¿Cuándo usas こんばんは?', opts: ['Mañana', 'Mediodía', 'Noche', 'Despedida'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-3', title: 'Números 1-10', type: 'vocab',
    steps: [
      { t: 'th', char: '一 (いち)', rd: 'ichi', mn: 'Uno (1)', note: 'Kanji: una línea horizontal.' },
      { t: 'th', char: '二 (に)', rd: 'ni', mn: 'Dos (2)', note: 'Kanji: dos líneas.' },
      { t: 'th', char: '三 (さん)', rd: 'san', mn: 'Tres (3)', note: 'Kanji: tres líneas.' },
      { t: 'mc', q: '¿Cómo se lee 三?', opts: ['ichi', 'ni', 'san', 'shi'], ans: 2 },
      { t: 'th', char: '四 (よん)', rd: 'yon / shi', mn: 'Cuatro', note: 'よん es más común.' },
      { t: 'th', char: '五 (ご)', rd: 'go', mn: 'Cinco', note: 'Como "go" en inglés.' },
      { t: 'tx', q: '¿"Cinco" en japonés?', ans: 'go', hint: '五' },
      { t: 'mc', q: '¿Kanji de 2?', opts: ['一', '二', '三', '四'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-4', title: 'Números 11-100', type: 'vocab',
    steps: [
      { t: 'th', char: '十一 (じゅういち)', rd: 'juu-ichi', mn: 'Once (11)', note: '十(10) + 一(1) = 11. Patrón simple.' },
      { t: 'th', char: '二十 (にじゅう)', rd: 'ni-juu', mn: 'Veinte (20)', note: '二(2) × 十(10) = 20.' },
      { t: 'th', char: '百 (ひゃく)', rd: 'hyaku', mn: 'Cien (100)', note: 'Kanji de cien.' },
      { t: 'mc', q: '¿Cómo se dice 30?', opts: ['さんじゅう', 'じゅうさん', 'にじゅう', 'よんじゅう'], ans: 0 },
      { t: 'tx', q: '¿Cómo se dice 15 en romaji?', ans: 'juu go', hint: '十五' },
      { t: 'mc', q: '¿Qué es にじゅうご?', opts: ['15', '20', '25', '52'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-5', title: 'Presentarse', type: 'grammar',
    steps: [
      { t: 'th', char: 'わたしは___です', rd: 'watashi wa ___ desu', mn: 'Yo soy ___', note: 'わたし=yo, は=tema, です=ser.' },
      { t: 'th', char: 'はじめまして', rd: 'hajimemashite', mn: 'Mucho gusto', note: 'Se dice al conocer a alguien.' },
      { t: 'th', char: 'よろしくおねがいします', rd: 'yoroshiku onegai shimasu', mn: 'Encantado (por favor cuide de mí)', note: 'Frase de cortesía al presentarse.' },
      { t: 'mc', q: '¿Cómo dices "Yo soy estudiante"?', opts: ['わたしは先生です', 'わたしは学生です', 'わたしは日本人です', 'わたしは友達です'], ans: 1 },
      { t: 'or', q: 'Ordena: "Mucho gusto, soy María"', words: ['はじめまして', 'わたしは', 'マリアです'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿"Mucho gusto" en romaji?', ans: 'hajimemashite' },
    ]
  },
  {
    id: 'jp-n5-6', title: 'Familia', type: 'vocab',
    steps: [
      { t: 'th', char: 'お父さん', rd: 'otousan', mn: 'Padre', note: 'Forma respetuosa. 父(chichi) es para tu propio padre.' },
      { t: 'th', char: 'お母さん', rd: 'okaasan', mn: 'Madre', note: 'Forma respetuosa. 母(haha) para tu propia madre.' },
      { t: 'th', char: '兄弟', rd: 'kyoudai', mn: 'Hermanos', note: '兄(ani)=hermano mayor, 弟(otouto)=hermano menor.' },
      { t: 'th', char: '姉妹', rd: 'shimai', mn: 'Hermanas', note: '姉(ane)=hermana mayor, 妹(imouto)=hermana menor.' },
      { t: 'mc', q: '¿Cómo dices "madre" respetuosamente?', opts: ['お父さん', 'お母さん', '兄', '姉'], ans: 1 },
      { t: 'tx', q: '¿"Padre" en romaji (respetuoso)?', ans: 'otousan' },
      { t: 'mc', q: '¿Quién es 妹?', opts: ['Hermano mayor', 'Hermana mayor', 'Hermano menor', 'Hermana menor'], ans: 3 },
    ]
  },
  {
    id: 'jp-n5-7', title: 'Colores', type: 'vocab',
    steps: [
      { t: 'th', char: '赤い', rd: 'akai', mn: 'Rojo', note: 'Adjetivo-i. 赤 es el kanji de rojo.' },
      { t: 'th', char: '青い', rd: 'aoi', mn: 'Azul', note: 'También puede significar verde (semáforo).' },
      { t: 'th', char: '白い', rd: 'shiroi', mn: 'Blanco', note: 'Adjetivo-i.' },
      { t: 'th', char: '黒い', rd: 'kuroi', mn: 'Negro', note: 'Adjetivo-i.' },
      { t: 'mc', q: '¿Qué color es 青い?', opts: ['Rojo', 'Azul', 'Blanco', 'Negro'], ans: 1 },
      { t: 'tx', q: '¿"Rojo" en romaji?', ans: 'akai' },
      { t: 'mc', q: '¿Cuál significa "blanco"?', opts: ['赤い', '青い', '白い', '黒い'], ans: 2 },
    ]
  },
  {
    id: 'jp-n5-8', title: 'Días de la semana', type: 'vocab',
    steps: [
      { t: 'th', char: '月曜日', rd: 'getsuyoubi', mn: 'Lunes', note: '月=luna. Día de la luna.' },
      { t: 'th', char: '火曜日', rd: 'kayoubi', mn: 'Martes', note: '火=fuego.' },
      { t: 'th', char: '水曜日', rd: 'suiyoubi', mn: 'Miércoles', note: '水=agua.' },
      { t: 'th', char: '日曜日', rd: 'nichiyoubi', mn: 'Domingo', note: '日=sol.' },
      { t: 'mc', q: '¿Qué día es 水曜日?', opts: ['Lunes', 'Martes', 'Miércoles', 'Jueves'], ans: 2 },
      { t: 'tx', q: '¿"Lunes" en romaji?', ans: 'getsuyoubi' },
      { t: 'mc', q: '¿Qué elemento tiene el domingo (日)?', opts: ['Luna', 'Fuego', 'Agua', 'Sol'], ans: 3 },
    ]
  },
  {
    id: 'jp-n5-9', title: 'Meses y estaciones', type: 'vocab',
    steps: [
      { t: 'th', char: '一月', rd: 'ichigatsu', mn: 'Enero', note: 'Mes 1. Patrón: número + 月(gatsu).' },
      { t: 'th', char: '春', rd: 'haru', mn: 'Primavera', note: 'De marzo a mayo en Japón.' },
      { t: 'th', char: '夏', rd: 'natsu', mn: 'Verano', note: 'De junio a agosto.' },
      { t: 'th', char: '秋', rd: 'aki', mn: 'Otoño', note: 'Famoso por los momiji (hojas rojas).' },
      { t: 'th', char: '冬', rd: 'fuyu', mn: 'Invierno', note: 'De diciembre a febrero.' },
      { t: 'mc', q: '¿Cómo se dice "marzo"?', opts: ['一月', '二月', '三月', '四月'], ans: 2 },
      { t: 'tx', q: '¿"Primavera" en romaji?', ans: 'haru' },
    ]
  },
  {
    id: 'jp-n5-10', title: 'Comida y bebida', type: 'vocab',
    steps: [
      { t: 'th', char: 'ごはん', rd: 'gohan', mn: 'Arroz / Comida', note: 'ごはん puede referirse a arroz o a una comida en general.' },
      { t: 'th', char: 'パン', rd: 'pan', mn: 'Pan', note: 'Viene del portugués "pão".' },
      { t: 'th', char: 'みず', rd: 'mizu', mn: 'Agua', note: 'みずをください = Agua, por favor.' },
      { t: 'th', char: 'おちゃ', rd: 'ocha', mn: 'Té verde', note: 'La bebida más popular de Japón.' },
      { t: 'mc', q: '¿Qué es おちゃ?', opts: ['Café', 'Té', 'Agua', 'Jugo'], ans: 1 },
      { t: 'tx', q: '¿"Agua" en romaji?', ans: 'mizu' },
      { t: 'or', q: 'Ordena: "Bebo agua"', words: ['みずを', 'のみます'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n5-11', title: 'En el restaurante', type: 'vocab',
    steps: [
      { t: 'th', char: 'メニュー', rd: 'menyuu', mn: 'Menú', note: 'Katakana: palabra importada del francés.' },
      { t: 'th', char: 'おすすめ', rd: 'osusume', mn: 'Recomendación', note: 'おすすめは何ですか？= ¿Qué recomienda?' },
      { t: 'th', char: 'いただきます', rd: 'itadakimasu', mn: 'Buen provecho', note: 'Se dice antes de comer. Muy importante culturalmente.' },
      { t: 'th', char: 'ごちそうさまでした', rd: 'gochisousama deshita', mn: 'Gracias por la comida', note: 'Se dice después de comer.' },
      { t: 'mc', q: '¿Qué dices ANTES de comer?', opts: ['ごちそうさま', 'いただきます', 'おいしい', 'すみません'], ans: 1 },
      { t: 'tx', q: '¿"Menú" en japonés? (katakana romaji)', ans: 'menyuu' },
      { t: 'mc', q: '¿Qué dices DESPUÉS de comer?', opts: ['いただきます', 'ごちそうさまでした', 'おはよう', 'ありがとう'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-12', title: 'Partes del cuerpo', type: 'vocab',
    steps: [
      { t: 'th', char: '頭', rd: 'atama', mn: 'Cabeza', note: 'También se usa en 頭がいい (inteligente).' },
      { t: 'th', char: '目', rd: 'me', mn: 'Ojo', note: 'Kanji simple y frecuente.' },
      { t: 'th', char: '手', rd: 'te', mn: 'Mano', note: 'Kanji muy básico.' },
      { t: 'th', char: '足', rd: 'ashi', mn: 'Pie / Pierna', note: 'Puede significar pie o pierna.' },
      { t: 'mc', q: '¿Qué es 目?', opts: ['Boca', 'Nariz', 'Ojo', 'Oreja'], ans: 2 },
      { t: 'tx', q: '¿"Cabeza" en romaji?', ans: 'atama' },
      { t: 'mc', q: '¿Qué significa 手?', opts: ['Pie', 'Mano', 'Brazo', 'Dedo'], ans: 1 },
    ]
  },
  {
    id: 'jp-n5-13', title: 'Ropa', type: 'vocab',
    steps: [
      { t: 'th', char: 'シャツ', rd: 'shatsu', mn: 'Camisa', note: 'Del inglés "shirt". Katakana.' },
      { t: 'th', char: 'ズボン', rd: 'zubon', mn: 'Pantalón', note: 'Del francés "jupon".' },
      { t: 'th', char: 'くつ', rd: 'kutsu', mn: 'Zapatos', note: 'くつをはく = ponerse zapatos.' },
      { t: 'th', char: 'ぼうし', rd: 'boushi', mn: 'Sombrero/Gorra', note: '帽子 en kanji.' },
      { t: 'mc', q: '¿Qué es くつ?', opts: ['Camisa', 'Pantalón', 'Zapatos', 'Sombrero'], ans: 2 },
      { t: 'tx', q: '¿"Camisa" en romaji?', ans: 'shatsu' },
    ]
  },
  {
    id: 'jp-n5-14', title: 'La casa', type: 'vocab',
    steps: [
      { t: 'th', char: '家', rd: 'ie / uchi', mn: 'Casa', note: 'うち=mi casa, いえ=casa en general.' },
      { t: 'th', char: '部屋', rd: 'heya', mn: 'Habitación', note: 'Cualquier cuarto de la casa.' },
      { t: 'th', char: '台所', rd: 'daidokoro', mn: 'Cocina', note: 'キッチン(kitchen) también se usa.' },
      { t: 'th', char: 'トイレ', rd: 'toire', mn: 'Baño', note: 'Del inglés "toilet".' },
      { t: 'mc', q: '¿Qué es 部屋?', opts: ['Casa', 'Habitación', 'Cocina', 'Baño'], ans: 1 },
      { t: 'tx', q: '¿"Casa" en romaji?', ans: 'ie' },
    ]
  },
  {
    id: 'jp-n5-15', title: 'Direcciones', type: 'vocab',
    steps: [
      { t: 'th', char: '右', rd: 'migi', mn: 'Derecha', note: 'みぎに曲がってください = Gire a la derecha.' },
      { t: 'th', char: '左', rd: 'hidari', mn: 'Izquierda', note: 'ひだりに曲がってください = Gire a la izquierda.' },
      { t: 'th', char: 'まっすぐ', rd: 'massugu', mn: 'Recto/Derecho', note: 'まっすぐ行ってください = Siga recto.' },
      { t: 'mc', q: '¿Qué significa 右?', opts: ['Izquierda', 'Derecha', 'Recto', 'Atrás'], ans: 1 },
      { t: 'tx', q: '¿"Izquierda" en romaji?', ans: 'hidari' },
      { t: 'or', q: 'Ordena: "Gire a la derecha"', words: ['みぎに', '曲がって', 'ください'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n5-16', title: 'Transporte', type: 'vocab',
    steps: [
      { t: 'th', char: '電車', rd: 'densha', mn: 'Tren', note: '電=eléctrico, 車=vehículo.' },
      { t: 'th', char: 'バス', rd: 'basu', mn: 'Autobús', note: 'Del inglés "bus".' },
      { t: 'th', char: 'タクシー', rd: 'takushii', mn: 'Taxi', note: 'Del inglés "taxi".' },
      { t: 'th', char: '駅', rd: 'eki', mn: 'Estación', note: 'えきはどこですか？= ¿Dónde está la estación?' },
      { t: 'mc', q: '¿Qué es 電車?', opts: ['Avión', 'Autobús', 'Tren', 'Taxi'], ans: 2 },
      { t: 'tx', q: '¿"Estación" en romaji?', ans: 'eki' },
    ]
  },
  {
    id: 'jp-n5-17', title: 'Clima', type: 'vocab',
    steps: [
      { t: 'th', char: '天気', rd: 'tenki', mn: 'Clima/Tiempo', note: '今日の天気は？= ¿Cómo está el clima hoy?' },
      { t: 'th', char: '暑い', rd: 'atsui', mn: 'Caluroso', note: 'Adjetivo-i para el calor.' },
      { t: 'th', char: '寒い', rd: 'samui', mn: 'Frío', note: 'Adjetivo-i para el frío ambiental.' },
      { t: 'th', char: '雨', rd: 'ame', mn: 'Lluvia', note: '雨が降っています = Está lloviendo.' },
      { t: 'mc', q: '¿Qué significa 寒い?', opts: ['Caliente', 'Frío', 'Lluvioso', 'Nublado'], ans: 1 },
      { t: 'tx', q: '¿"Clima" en romaji?', ans: 'tenki' },
    ]
  },
  {
    id: 'jp-n5-18', title: 'Profesiones', type: 'vocab',
    steps: [
      { t: 'th', char: '先生', rd: 'sensei', mn: 'Profesor/Maestro', note: 'También se usa para doctores y abogados.' },
      { t: 'th', char: '学生', rd: 'gakusei', mn: 'Estudiante', note: '大学生(daigakusei) = universitario.' },
      { t: 'th', char: '医者', rd: 'isha', mn: 'Doctor', note: 'Profesión muy respetada.' },
      { t: 'th', char: '会社員', rd: 'kaishain', mn: 'Empleado de empresa', note: 'Muy común en Japón.' },
      { t: 'mc', q: '¿Qué es 医者?', opts: ['Profesor', 'Estudiante', 'Doctor', 'Empleado'], ans: 2 },
      { t: 'tx', q: '¿"Profesor" en romaji?', ans: 'sensei' },
    ]
  },
  {
    id: 'jp-n5-19', title: 'Tiempo (horas)', type: 'vocab',
    steps: [
      { t: 'th', char: '〜時', rd: '~ji', mn: '~ hora', note: '一時(ichiji)=1:00, 二時(niji)=2:00.' },
      { t: 'th', char: '〜分', rd: '~fun/pun', mn: '~ minutos', note: '五分(gofun)=5 min, 十分(juppun)=10 min.' },
      { t: 'th', char: '午前', rd: 'gozen', mn: 'AM / Mañana', note: '午前九時 = 9 AM.' },
      { t: 'th', char: '午後', rd: 'gogo', mn: 'PM / Tarde', note: '午後三時 = 3 PM.' },
      { t: 'mc', q: '¿Cómo se dice 3:00?', opts: ['さんじ', 'さんぷん', 'さんがつ', 'みっつ'], ans: 0 },
      { t: 'tx', q: '¿"AM" en japonés?', ans: 'gozen' },
    ]
  },
  {
    id: 'jp-n5-20', title: 'Compras', type: 'vocab',
    steps: [
      { t: 'th', char: 'いくらですか', rd: 'ikura desu ka', mn: '¿Cuánto cuesta?', note: 'Frase esencial para comprar.' },
      { t: 'th', char: '高い', rd: 'takai', mn: 'Caro/Alto', note: 'Adjetivo-i con doble significado.' },
      { t: 'th', char: '安い', rd: 'yasui', mn: 'Barato', note: 'Opuesto de 高い en precio.' },
      { t: 'th', char: '円', rd: 'en', mn: 'Yen', note: 'Moneda japonesa. 百円(hyaku-en)=100¥.' },
      { t: 'mc', q: '¿Cómo preguntas el precio?', opts: ['なんですか', 'いくらですか', 'どこですか', 'だれですか'], ans: 1 },
      { t: 'tx', q: '¿"Barato" en romaji?', ans: 'yasui' },
    ]
  },
  {
    id: 'jp-n5-21', title: 'Verbos esenciales', type: 'grammar',
    steps: [
      { t: 'th', char: 'たべます', rd: 'tabemasu', mn: 'Comer', note: 'Verbo Grupo 2. Negativo: たべません.' },
      { t: 'th', char: 'のみます', rd: 'nomimasu', mn: 'Beber', note: 'Verbo Grupo 1. Negativo: のみません.' },
      { t: 'th', char: 'いきます', rd: 'ikimasu', mn: 'Ir', note: '〜にいきます = Ir a ~.' },
      { t: 'th', char: 'みます', rd: 'mimasu', mn: 'Ver/Mirar', note: 'テレビをみます = Ver televisión.' },
      { t: 'th', char: 'します', rd: 'shimasu', mn: 'Hacer', note: 'Verbo irregular. べんきょうします = Estudiar.' },
      { t: 'mc', q: '¿Cuál es el negativo de たべます?', opts: ['たべません', 'たべました', 'たべて', 'たべない'], ans: 0 },
      { t: 'tx', q: '¿"Ir" en japonés (forma masu)?', ans: 'ikimasu' },
    ]
  },
  {
    id: 'jp-n5-22', title: 'Adjetivos comunes', type: 'vocab',
    steps: [
      { t: 'th', char: '大きい', rd: 'ookii', mn: 'Grande', note: 'Adjetivo-i.' },
      { t: 'th', char: '小さい', rd: 'chiisai', mn: 'Pequeño', note: 'Opuesto de 大きい.' },
      { t: 'th', char: 'いい/よい', rd: 'ii / yoi', mn: 'Bueno', note: 'Negativo irregular: よくない.' },
      { t: 'th', char: '新しい', rd: 'atarashii', mn: 'Nuevo', note: '新しい車 = coche nuevo.' },
      { t: 'th', char: '古い', rd: 'furui', mn: 'Viejo (cosas)', note: 'Solo para objetos, no personas.' },
      { t: 'mc', q: '¿Qué significa 小さい?', opts: ['Grande', 'Pequeño', 'Nuevo', 'Viejo'], ans: 1 },
      { t: 'tx', q: '¿"Grande" en romaji?', ans: 'ookii' },
    ]
  },
  {
    id: 'jp-n5-23', title: 'Preguntas básicas', type: 'grammar',
    steps: [
      { t: 'th', char: 'なに/なん', rd: 'nani / nan', mn: '¿Qué?', note: 'これはなんですか？= ¿Qué es esto?' },
      { t: 'th', char: 'どこ', rd: 'doko', mn: '¿Dónde?', note: 'トイレはどこですか？= ¿Dónde está el baño?' },
      { t: 'th', char: 'だれ', rd: 'dare', mn: '¿Quién?', note: 'あの人はだれですか？= ¿Quién es esa persona?' },
      { t: 'th', char: 'いつ', rd: 'itsu', mn: '¿Cuándo?', note: 'いつですか？= ¿Cuándo es?' },
      { t: 'mc', q: '¿Cómo preguntas "dónde"?', opts: ['なに', 'どこ', 'だれ', 'いつ'], ans: 1 },
      { t: 'tx', q: '¿"Qué" en romaji?', ans: 'nani' },
      { t: 'or', q: 'Ordena: "¿Dónde está la estación?"', words: ['えきは', 'どこ', 'ですか'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n5-24', title: 'Frases de supervivencia', type: 'vocab',
    steps: [
      { t: 'th', char: 'たすけて', rd: 'tasukete', mn: '¡Ayuda!', note: 'Para emergencias.' },
      { t: 'th', char: 'わかりません', rd: 'wakarimasen', mn: 'No entiendo', note: 'Muy útil para principiantes.' },
      { t: 'th', char: 'もういちど', rd: 'mou ichido', mn: 'Una vez más', note: 'もういちどおねがいします = Por favor repita.' },
      { t: 'th', char: 'にほんごがわかりません', rd: 'nihongo ga wakarimasen', mn: 'No entiendo japonés', note: 'Frase útil para turistas.' },
      { t: 'mc', q: '¿Cómo dices "no entiendo"?', opts: ['わかります', 'わかりません', 'たすけて', 'すみません'], ans: 1 },
      { t: 'tx', q: '¿"Ayuda" en romaji?', ans: 'tasukete' },
    ]
  },
  {
    id: 'jp-n5-25', title: 'Repaso general N5', type: 'reading',
    steps: [
      { t: 'mc', q: '¿Cómo se lee あ?', opts: ['a', 'i', 'u', 'e'], ans: 0 },
      { t: 'mc', q: '¿Qué significa こんにちは?', opts: ['Adiós', 'Hola', 'Gracias', 'Perdón'], ans: 1 },
      { t: 'tx', q: '¿"Buenos días" formal en romaji?', ans: 'ohayou gozaimasu' },
      { t: 'mc', q: '¿Kanji de 3?', opts: ['一', '二', '三', '四'], ans: 2 },
      { t: 'mc', q: '¿Qué es 先生?', opts: ['Estudiante', 'Doctor', 'Profesor', 'Empleado'], ans: 2 },
      { t: 'or', q: 'Ordena: "¿Cuánto cuesta?"', words: ['いくら', 'です', 'か'], ans: [0, 1, 2] },
      { t: 'mc', q: '¿Cómo dices "no entiendo"?', opts: ['わかります', 'わかりません', 'すみません', 'ありがとう'], ans: 1 },
      { t: 'rd', title: 'Lectura: Presentación', passage: 'はじめまして。わたしはマリアです。スペインから来ました。学生です。にほんごを勉強しています。よろしくおねがいします。', q: '¿De dónde es María?', opts: ['Japón', 'Francia', 'España', 'Italia'], ans: 2 },
    ]
  },
];

export const jpN4Lessons: Lesson[] = [
  {
    id: 'jp-n4-1', title: 'Forma て (te-form)', type: 'grammar',
    steps: [
      { t: 'th', char: 'て形', rd: 'te-kei', mn: 'Forma -te', note: 'Conecta verbos, pide permiso, y más.', ex: [{ j: 'たべて', m: 'comer (te)' }, { j: 'のんで', m: 'beber (te)' }] },
      { t: 'mc', q: '¿Forma て de のみます?', opts: ['のんで', 'のみて', 'のんだ', 'のみで'], ans: 0 },
      { t: 'th', char: '〜てください', rd: '~te kudasai', mn: 'Por favor haga ~', note: 'て + ください = petición.' },
      { t: 'or', q: 'Ordena: "Por favor espere"', words: ['まって', 'ください'], ans: [0, 1] },
      { t: 'tx', q: '¿"Por favor lea" en romaji?', ans: 'yonde kudasai', hint: 'よむ→よんで' },
    ]
  },
  {
    id: 'jp-n4-2', title: 'Forma ない (negativo informal)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜ない', rd: '~nai', mn: 'No hacer ~', note: 'たべる→たべない, のむ→のまない, する→しない.' },
      { t: 'mc', q: '¿Negativo de 行く(iku)?', opts: ['行かない', '行きない', '行くない', '行けない'], ans: 0 },
      { t: 'tx', q: '¿Negativo de たべる?', ans: 'tabenai' },
      { t: 'mc', q: '¿Negativo de する?', opts: ['すない', 'しない', 'さない', 'せない'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-3', title: 'Forma たい (querer hacer)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜たい', rd: '~tai', mn: 'Querer hacer ~', note: 'たべたい=quiero comer. Se conjuga como adjetivo-i.' },
      { t: 'mc', q: '¿"Quiero ir"?', opts: ['行きたい', '行きたくない', '行った', '行って'], ans: 0 },
      { t: 'tx', q: '¿"Quiero comer" en romaji?', ans: 'tabetai' },
      { t: 'or', q: 'Ordena: "Quiero beber agua"', words: ['みずを', 'のみたい', 'です'], ans: [0, 1, 2] },
    ]
  },
  {
    id: 'jp-n4-4', title: 'Partículas avanzadas', type: 'grammar',
    steps: [
      { t: 'th', char: 'から', rd: 'kara', mn: 'Desde/Porque', note: '日本から来ました = Vengo de Japón.' },
      { t: 'th', char: 'まで', rd: 'made', mn: 'Hasta', note: '東京まで = Hasta Tokio.' },
      { t: 'th', char: 'で', rd: 'de', mn: 'En/Con (medio)', note: 'バスで行く = Ir en autobús.' },
      { t: 'mc', q: '¿Partícula para "desde"?', opts: ['に', 'で', 'から', 'まで'], ans: 2 },
      { t: 'tx', q: '¿Partícula para "hasta"?', ans: 'made' },
    ]
  },
  {
    id: 'jp-n4-5', title: 'Condicional ば/たら', type: 'grammar',
    steps: [
      { t: 'th', char: '〜たら', rd: '~tara', mn: 'Si ~ (condicional)', note: '雨が降ったら、行きません = Si llueve, no iré.' },
      { t: 'th', char: '〜ば', rd: '~ba', mn: 'Si ~ (condicional formal)', note: '安ければ、買います = Si es barato, compraré.' },
      { t: 'mc', q: '¿Cómo se dice "Si llueve"?', opts: ['雨が降れば', '雨が降ったら', 'Ambas', '雨が降って'], ans: 2 },
      { t: 'tx', q: '¿Condicional たら de 食べる?', ans: 'tabetara' },
    ]
  },
  {
    id: 'jp-n4-6', title: 'Forma potencial (できる)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜られる/〜える', rd: '~rareru/~eru', mn: 'Poder hacer ~', note: 'たべる→たべられる, のむ→のめる, する→できる.' },
      { t: 'mc', q: '¿Forma potencial de 読む?', opts: ['読まれる', '読める', '読みられる', '読むれる'], ans: 1 },
      { t: 'tx', q: '¿"Puedo hablar japonés" en romaji?', ans: 'nihongo ga hanaseru' },
      { t: 'mc', q: '¿Potencial de する?', opts: ['される', 'しられる', 'できる', 'すれる'], ans: 2 },
      { t: 'or', q: 'Ordena: "Puedo comer sushi"', words: ['すしが', 'たべられます'], ans: [0, 1] },
    ]
  },
  {
    id: 'jp-n4-7', title: 'Forma volitiva (〜よう)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜よう/〜おう', rd: '~you/~ou', mn: 'Vamos a ~ / Hagamos ~', note: 'たべる→たべよう, 行く→行こう, する→しよう.' },
      { t: 'mc', q: '¿Volitiva de 行く?', opts: ['行きよう', '行こう', '行くよう', '行けよう'], ans: 1 },
      { t: 'tx', q: '¿"Vamos a comer" en romaji?', ans: 'tabeyou' },
      { t: 'mc', q: '¿Volitiva de する?', opts: ['すよう', 'しよう', 'さよう', 'せよう'], ans: 1 },
    ]
  },
  {
    id: 'jp-n4-8', title: 'Forma pasiva (〜られる)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜られる/〜あれる', rd: '~rareru/~areru', mn: 'Ser hecho ~', note: 'たべる→たべられる, 読む→読まれる. El sujeto recibe la acción.' },
      { t: 'mc', q: '¿Pasiva de 書く(kaku)?', opts: ['書かれる', '書きれる', '書くれる', '書けれる'], ans: 0 },
      { t: 'th', char: '先生に褒められた', rd: 'sensei ni homerareta', mn: 'Fui elogiado por el profesor', note: 'Agente con に.' },
      { t: 'tx', q: '¿Pasiva de 呼ぶ(yobu)?', ans: 'yobareru' },
    ]
  },
  {
    id: 'jp-n4-9', title: 'Forma causativa (〜させる)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜させる/〜あせる', rd: '~saseru/~aseru', mn: 'Hacer que alguien haga ~', note: 'たべる→たべさせる, 読む→読ませる.' },
      { t: 'mc', q: '¿Causativa de 飲む?', opts: ['飲ませる', '飲みさせる', '飲まれる', '飲むさせる'], ans: 0 },
      { t: 'th', char: '母は子供に野菜を食べさせた', rd: 'haha wa kodomo ni yasai wo tabesaseta', mn: 'La madre hizo que el niño comiera verduras', note: 'Patrón causativo.' },
      { t: 'tx', q: '¿Causativa de 行く?', ans: 'ikaseru' },
    ]
  },
  {
    id: 'jp-n4-10', title: 'Verbos de dar y recibir', type: 'grammar',
    steps: [
      { t: 'th', char: 'あげる', rd: 'ageru', mn: 'Dar (yo→otro)', note: '友達にプレゼントをあげる = Dar un regalo a un amigo.' },
      { t: 'th', char: 'もらう', rd: 'morau', mn: 'Recibir', note: '友達からプレゼントをもらう = Recibir un regalo de un amigo.' },
      { t: 'th', char: 'くれる', rd: 'kureru', mn: 'Dar (otro→yo)', note: '友達がプレゼントをくれた = Mi amigo me dio un regalo.' },
      { t: 'mc', q: '¿Cuál significa "recibir"?', opts: ['あげる', 'くれる', 'もらう', 'やる'], ans: 2 },
      { t: 'tx', q: '¿"Dar" (yo a otro) en romaji?', ans: 'ageru' },
    ]
  },
  {
    id: 'jp-n4-11', title: '〜てあげる/もらう/くれる', type: 'grammar',
    steps: [
      { t: 'th', char: '〜てあげる', rd: '~te ageru', mn: 'Hacer algo por alguien', note: '荷物を持ってあげる = Llevar el equipaje (por alguien).' },
      { t: 'th', char: '〜てもらう', rd: '~te morau', mn: 'Que alguien haga algo por mí', note: '友達に手伝ってもらう = Que un amigo me ayude.' },
      { t: 'th', char: '〜てくれる', rd: '~te kureru', mn: 'Que alguien haga algo por mí (perspectiva del dador)', note: '友達が手伝ってくれた = Mi amigo me ayudó.' },
      { t: 'mc', q: '¿"Mi amigo me enseñó" = ?', opts: ['友達が教えてくれた', '友達に教えてあげた', '友達に教えてもらった', 'A y C'], ans: 3 },
      { t: 'tx', q: '¿"Hacer algo por alguien" en romaji?', ans: 'te ageru' },
    ]
  },
  {
    id: 'jp-n4-12', title: 'Cláusulas relativas', type: 'grammar',
    steps: [
      { t: 'th', char: '修飾節', rd: 'shuushokusetsu', mn: 'Cláusula modificadora', note: 'En japonés, la cláusula va ANTES del sustantivo: 赤い車 = coche rojo, 昨日買った車 = el coche que compré ayer.' },
      { t: 'mc', q: '¿"El libro que leí"?', opts: ['読んだ本', '本を読んだ', '読む本が', '本は読んだ'], ans: 0 },
      { t: 'or', q: 'Ordena: "La persona que vino ayer"', words: ['きのう', '来た', '人'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿"El pastel que hice" en romaji?', ans: 'tsukutta keeki' },
    ]
  },
  {
    id: 'jp-n4-13', title: 'Verbos transitivos e intransitivos', type: 'grammar',
    steps: [
      { t: 'th', char: '開ける/開く', rd: 'akeru/aku', mn: 'Abrir (trans.) / Abrirse (intrans.)', note: 'ドアを開ける vs ドアが開く.' },
      { t: 'th', char: '閉める/閉まる', rd: 'shimeru/shimaru', mn: 'Cerrar / Cerrarse', note: 'を con transitivo, が con intransitivo.' },
      { t: 'mc', q: '¿"La puerta se abrió"?', opts: ['ドアを開けた', 'ドアが開いた', 'ドアを開いた', 'ドアが開けた'], ans: 1 },
      { t: 'th', char: '消す/消える', rd: 'kesu/kieru', mn: 'Apagar / Apagarse', note: '電気を消す = Apagar la luz. 電気が消えた = La luz se apagó.' },
      { t: 'tx', q: '¿"Cerrar" (transitivo) en romaji?', ans: 'shimeru' },
    ]
  },
  {
    id: 'jp-n4-14', title: 'Keigo: habla honorífica (sonkeigo)', type: 'grammar',
    steps: [
      { t: 'th', char: 'いらっしゃる', rd: 'irassharu', mn: 'Estar/Ir/Venir (honorífico)', note: 'Honorífico de いる, 行く, 来る.' },
      { t: 'th', char: 'おっしゃる', rd: 'ossharu', mn: 'Decir (honorífico)', note: 'Honorífico de 言う.' },
      { t: 'th', char: '召し上がる', rd: 'meshiagaru', mn: 'Comer/Beber (honorífico)', note: 'Honorífico de 食べる/飲む.' },
      { t: 'mc', q: '¿Honorífico de "decir"?', opts: ['いらっしゃる', 'おっしゃる', '召し上がる', 'ご覧になる'], ans: 1 },
      { t: 'tx', q: '¿"Comer" honorífico en romaji?', ans: 'meshiagaru' },
    ]
  },
  {
    id: 'jp-n4-15', title: 'Keigo: habla humilde (kenjougo)', type: 'grammar',
    steps: [
      { t: 'th', char: '参る', rd: 'mairu', mn: 'Ir/Venir (humilde)', note: 'Humilde de 行く/来る.' },
      { t: 'th', char: '申す', rd: 'mousu', mn: 'Decir (humilde)', note: 'Humilde de 言う.' },
      { t: 'th', char: 'いただく', rd: 'itadaku', mn: 'Recibir/Comer (humilde)', note: 'Humilde de もらう/食べる.' },
      { t: 'mc', q: '¿Humilde de "ir"?', opts: ['いらっしゃる', '参る', '申す', 'いただく'], ans: 1 },
      { t: 'tx', q: '¿"Decir" humilde en romaji?', ans: 'mousu' },
    ]
  },
  {
    id: 'jp-n4-16', title: 'Oraciones compuestas con し', type: 'grammar',
    steps: [
      { t: 'th', char: '〜し、〜し', rd: '~shi, ~shi', mn: 'Además / Y también', note: 'このレストランは安いし、おいしいし、好きです = Este restaurante es barato, delicioso, y me gusta.' },
      { t: 'mc', q: '¿Qué expresa 〜し?', opts: ['Contraste', 'Razones múltiples', 'Tiempo', 'Condición'], ans: 1 },
      { t: 'or', q: 'Ordena: "Es barato y delicioso"', words: ['安いし', 'おいしいし', 'いいです'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿Partícula para listar razones?', ans: 'shi' },
    ]
  },
  {
    id: 'jp-n4-17', title: '〜てしまう (completar/lamentar)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜てしまう', rd: '~te shimau', mn: 'Acabar haciendo ~ / Lamentar haber hecho ~', note: '食べてしまった = Me lo comí todo / Lamentablemente me lo comí.' },
      { t: 'th', char: '〜ちゃう', rd: '~chau', mn: 'Forma casual de てしまう', note: '食べちゃった = Me lo comí (casual).' },
      { t: 'mc', q: '¿Forma casual de 飲んでしまう?', opts: ['飲んちゃう', '飲みちゃう', '飲むちゃう', '飲んじゃう'], ans: 3 },
      { t: 'tx', q: '¿"Olvidé (lamentablemente)" en romaji?', ans: 'wasurete shimatta' },
    ]
  },
  {
    id: 'jp-n4-18', title: 'Expresiones de tiempo avanzadas', type: 'grammar',
    steps: [
      { t: 'th', char: '〜前に', rd: '~mae ni', mn: 'Antes de ~', note: '食べる前に = Antes de comer.' },
      { t: 'th', char: '〜た後で', rd: '~ta ato de', mn: 'Después de ~', note: '食べた後で = Después de comer.' },
      { t: 'th', char: '〜ながら', rd: '~nagara', mn: 'Mientras ~', note: '音楽を聞きながら勉強する = Estudiar mientras escucho música.' },
      { t: 'mc', q: '¿"Antes de dormir"?', opts: ['寝た後で', '寝る前に', '寝ながら', '寝てから'], ans: 1 },
      { t: 'tx', q: '¿"Mientras" en romaji?', ans: 'nagara' },
    ]
  },
  {
    id: 'jp-n4-19', title: 'Contadores avanzados', type: 'vocab',
    steps: [
      { t: 'th', char: '〜枚 (まい)', rd: '~mai', mn: 'Contador de objetos planos', note: '紙三枚 = 3 hojas de papel.' },
      { t: 'th', char: '〜冊 (さつ)', rd: '~satsu', mn: 'Contador de libros', note: '本二冊 = 2 libros.' },
      { t: 'th', char: '〜杯 (はい)', rd: '~hai', mn: 'Contador de vasos/tazas', note: 'コーヒー一杯 = 1 taza de café.' },
      { t: 'th', char: '〜台 (だい)', rd: '~dai', mn: 'Contador de máquinas/vehículos', note: '車二台 = 2 coches.' },
      { t: 'mc', q: '¿Contador para libros?', opts: ['枚', '冊', '杯', '台'], ans: 1 },
      { t: 'tx', q: '¿"2 tazas" en romaji?', ans: 'ni hai' },
    ]
  },
  {
    id: 'jp-n4-20', title: 'Pedir y dar direcciones', type: 'vocab',
    steps: [
      { t: 'th', char: '交差点', rd: 'kousaten', mn: 'Intersección', note: '交差点を右に曲がってください = Gire a la derecha en la intersección.' },
      { t: 'th', char: '信号', rd: 'shingou', mn: 'Semáforo', note: '信号を左に = A la izquierda en el semáforo.' },
      { t: 'th', char: '〜の隣', rd: '~no tonari', mn: 'Al lado de ~', note: '銀行の隣 = Al lado del banco.' },
      { t: 'mc', q: '¿Qué es 交差点?', opts: ['Semáforo', 'Puente', 'Intersección', 'Esquina'], ans: 2 },
      { t: 'or', q: 'Ordena: "Gire a la derecha en el semáforo"', words: ['信号を', '右に', '曲がってください'], ans: [0, 1, 2] },
      { t: 'tx', q: '¿"Al lado de" en romaji?', ans: 'tonari' },
    ]
  },
  {
    id: 'jp-n4-21', title: 'En el hospital', type: 'vocab',
    steps: [
      { t: 'th', char: '熱がある', rd: 'netsu ga aru', mn: 'Tener fiebre', note: '38度の熱があります = Tengo 38° de fiebre.' },
      { t: 'th', char: 'お腹が痛い', rd: 'onaka ga itai', mn: 'Me duele el estómago', note: '痛い = doloroso.' },
      { t: 'th', char: '薬', rd: 'kusuri', mn: 'Medicina', note: '薬を飲む = Tomar medicina.' },
      { t: 'th', char: '風邪を引く', rd: 'kaze wo hiku', mn: 'Resfriarse', note: '風邪を引きました = Me resfrié.' },
      { t: 'mc', q: '¿"Tener fiebre"?', opts: ['頭が痛い', '熱がある', '風邪を引く', '薬を飲む'], ans: 1 },
      { t: 'tx', q: '¿"Medicina" en romaji?', ans: 'kusuri' },
    ]
  },
  {
    id: 'jp-n4-22', title: 'En la oficina', type: 'vocab',
    steps: [
      { t: 'th', char: '会議', rd: 'kaigi', mn: 'Reunión', note: '会議室 = Sala de reuniones.' },
      { t: 'th', char: '書類', rd: 'shorui', mn: 'Documentos', note: '書類を提出する = Entregar documentos.' },
      { t: 'th', char: '締め切り', rd: 'shimekiri', mn: 'Fecha límite', note: '締め切りは明日です = La fecha límite es mañana.' },
      { t: 'th', char: '残業', rd: 'zangyou', mn: 'Horas extra', note: '今日は残業です = Hoy trabajo horas extra.' },
      { t: 'mc', q: '¿Qué es 締め切り?', opts: ['Reunión', 'Documento', 'Fecha límite', 'Horas extra'], ans: 2 },
      { t: 'tx', q: '¿"Reunión" en romaji?', ans: 'kaigi' },
    ]
  },
  {
    id: 'jp-n4-23', title: '〜そう (parece que)', type: 'grammar',
    steps: [
      { t: 'th', char: '〜そう (apariencia)', rd: '~sou', mn: 'Parece ~', note: 'おいしそう = Parece delicioso. 雨が降りそう = Parece que va a llover.' },
      { t: 'th', char: '〜そう (rumor)', rd: '~sou', mn: 'Dicen que ~', note: '明日は雨だそうです = Dicen que mañana llueve.' },
      { t: 'mc', q: '¿"Parece delicioso"?', opts: ['おいしいそう', 'おいしそう', 'おいしさそう', 'おいしくそう'], ans: 1 },
      { t: 'tx', q: '¿"Parece caro" en romaji?', ans: 'takasou' },
    ]
  },
  {
    id: 'jp-n4-24', title: '〜ようにする / 〜ことにする', type: 'grammar',
    steps: [
      { t: 'th', char: '〜ようにする', rd: '~you ni suru', mn: 'Esforzarse por ~', note: '毎日運動するようにしている = Me esfuerzo por hacer ejercicio cada día.' },
      { t: 'th', char: '〜ことにする', rd: '~koto ni suru', mn: 'Decidir hacer ~', note: '日本に行くことにした = Decidí ir a Japón.' },
      { t: 'mc', q: '¿"Decidí estudiar"?', opts: ['勉強するようにした', '勉強することにした', '勉強するようになった', '勉強することになった'], ans: 1 },
      { t: 'th', char: '〜ことになる', rd: '~koto ni naru', mn: 'Resultar que ~', note: '転勤することになった = Resultó que me transfieren.' },
      { t: 'tx', q: '¿"Decidir" con koto en romaji?', ans: 'koto ni suru' },
    ]
  },
  {
    id: 'jp-n4-25', title: 'Repaso general N4', type: 'reading',
    steps: [
      { t: 'mc', q: '¿Forma て de 飲む?', opts: ['飲んで', '飲みて', '飲んだ', '飲して'], ans: 0 },
      { t: 'mc', q: '¿Potencial de 食べる?', opts: ['食べれる', '食べられる', '食べさせる', '食べられた'], ans: 1 },
      { t: 'tx', q: '¿"Quiero ir" en romaji?', ans: 'ikitai' },
      { t: 'mc', q: '¿Honorífico de "comer"?', opts: ['いただく', '召し上がる', '食べられる', 'お食べする'], ans: 1 },
      { t: 'mc', q: '¿Contador para libros?', opts: ['枚', '冊', '台', '杯'], ans: 1 },
      { t: 'or', q: 'Ordena: "Decidí ir a Japón"', words: ['日本に', '行くことに', 'しました'], ans: [0, 1, 2] },
      { t: 'rd', title: 'Lectura: En la oficina', passage: '今日は会議が3つあります。書類の締め切りは明日です。残業しなければなりません。疲れましたが、頑張ります。', q: '¿Cuántas reuniones hay hoy?', opts: ['1', '2', '3', '4'], ans: 2 },
    ]
  },
];
