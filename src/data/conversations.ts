import { Conversation } from './types';

export const CONVERSATION_DATA: Record<string, Conversation[]> = {
  jp: [
    {
      id: 'jp-conv-1', emoji: '☕', title: 'En el café', scenario: 'Estás en un café japonés y quieres pedir algo de beber.',
      level: 'N5',
      turns: [
        { npc: 'いらっしゃいませ！なにをのみますか？ (¡Bienvenido! ¿Qué va a tomar?)', hint: 'Pide un café', expected: 'コーヒーをください', accept: ['コーヒー', 'こーひー', 'coffee', 'koohii'] },
        { npc: 'ホットですか、アイスですか？ (¿Caliente o frío?)', hint: 'Di "caliente"', expected: 'ホットをおねがいします', accept: ['ホット', 'ほっと', 'hotto', 'hot'] },
        { npc: 'かしこまりました。300えんです。 (Entendido. Son 300 yenes.)', hint: 'Da las gracias', expected: 'ありがとうございます', accept: ['ありがとう', 'arigatou', 'gracias'] },
      ],
    },
    {
      id: 'jp-conv-2', emoji: '🚃', title: 'En la estación', scenario: 'Estás perdido en una estación de tren y necesitas llegar a Shibuya.',
      level: 'N5',
      turns: [
        { npc: 'はい？ (¿Sí?)', hint: 'Pregunta cómo llegar a Shibuya', expected: 'すみません、しぶやはどうやっていきますか？', accept: ['しぶや', 'shibuya', 'すみません'] },
        { npc: 'やまのてせんにのってください。 (Tome la línea Yamanote.)', hint: 'Pregunta dónde está el andén', expected: 'ホームはどこですか？', accept: ['どこ', 'ホーム', 'doko', 'hoomu'] },
        { npc: '3ばんホームです。 (Es el andén 3.)', hint: 'Agradece', expected: 'ありがとうございます！', accept: ['ありがとう', 'arigatou'] },
      ],
    },
    {
      id: 'jp-conv-3', emoji: '🍱', title: 'En el restaurante', scenario: 'Estás en un restaurante japonés y quieres pedir la cena.',
      level: 'N5',
      turns: [
        { npc: 'いらっしゃいませ！なんめいさまですか？ (¡Bienvenido! ¿Cuántas personas?)', hint: 'Di "dos personas"', expected: 'ふたりです', accept: ['ふたり', 'futari', 'にめい', 'nimei', '2'] },
        { npc: 'こちらへどうぞ。メニューです。 (Por aquí. Aquí está el menú.)', hint: 'Pide ramen', expected: 'ラーメンをください', accept: ['ラーメン', 'らーめん', 'ramen'] },
        { npc: 'おのみものは？ (¿Algo de beber?)', hint: 'Pide agua', expected: 'みずをおねがいします', accept: ['みず', 'mizu', 'agua', 'water'] },
        { npc: 'かしこまりました！ (¡Entendido!)', hint: 'Da las gracias', expected: 'ありがとうございます', accept: ['ありがとう', 'arigatou'] },
      ],
    },
    {
      id: 'jp-conv-4', emoji: '🏥', title: 'En la farmacia', scenario: 'No te sientes bien y necesitas medicinas.',
      level: 'N4',
      turns: [
        { npc: 'いらっしゃいませ。どうしましたか？ (Bienvenido. ¿Qué le pasa?)', hint: 'Di que te duele la cabeza', expected: 'あたまがいたいです', accept: ['あたま', 'いたい', 'atama', 'itai', 'cabeza', 'head'] },
        { npc: 'ねつはありますか？ (¿Tiene fiebre?)', hint: 'Di que no', expected: 'いいえ、ねつはありません', accept: ['いいえ', 'ありません', 'iie', 'no'] },
        { npc: 'このくすりをどうぞ。1にち3かいのんでください。 (Tome esta medicina. 3 veces al día.)', hint: 'Agradece', expected: 'ありがとうございます', accept: ['ありがとう', 'arigatou'] },
      ],
    },
    {
      id: 'jp-conv-5', emoji: '🛒', title: 'En el konbini', scenario: 'Estás comprando en una tienda de conveniencia.',
      level: 'N5',
      turns: [
        { npc: 'ポイントカードはおもちですか？ (¿Tiene tarjeta de puntos?)', hint: 'Di que no tienes', expected: 'いいえ、もっていません', accept: ['いいえ', 'もっていません', 'iie', 'no'] },
        { npc: 'ふくろはいりますか？ (¿Necesita bolsa?)', hint: 'Di que sí', expected: 'はい、おねがいします', accept: ['はい', 'おねがい', 'hai', 'onegai'] },
        { npc: '500えんです。 (Son 500 yenes.)', hint: 'Agradece al pagar', expected: 'ありがとうございます', accept: ['ありがとう', 'arigatou'] },
      ],
    },
  ],
  fr: [
    {
      id: 'fr-conv-1', emoji: '🥐', title: 'À la boulangerie', scenario: 'Estás en una panadería francesa comprando pan.',
      level: 'A1',
      turns: [
        { npc: "Bonjour ! Qu'est-ce que je vous sers ? (¡Hola! ¿Qué le sirvo?)", hint: 'Pide una baguette', expected: "Une baguette, s'il vous plaît", accept: ['baguette', "s'il vous plaît", 'svp'] },
        { npc: 'Avec ceci ? (¿Algo más?)', hint: 'Pide un croissant', expected: "Et un croissant, s'il vous plaît", accept: ['croissant'] },
        { npc: "C'est tout ? Ça fait 3 euros 50. (¿Es todo? Son 3,50€.)", hint: 'Da las gracias', expected: 'Merci beaucoup !', accept: ['merci', 'gracias'] },
      ],
    },
    {
      id: 'fr-conv-2', emoji: '🗺️', title: 'Demander son chemin', scenario: 'Estás perdido en París y necesitas llegar al Louvre.',
      level: 'A1',
      turns: [
        { npc: '(Un passant vous regarde)', hint: 'Llama la atención y pregunta por el Louvre', expected: 'Excusez-moi, où est le Louvre ?', accept: ['excusez', 'louvre', 'où'] },
        { npc: "Allez tout droit, puis tournez à droite. (Siga recto, luego gire a la derecha.)", hint: 'Pregunta si está lejos', expected: "C'est loin ?", accept: ['loin', 'lejos', 'far'] },
        { npc: "Non, c'est à 5 minutes. (No, está a 5 minutos.)", hint: 'Da las gracias', expected: 'Merci beaucoup !', accept: ['merci'] },
      ],
    },
    {
      id: 'fr-conv-3', emoji: '🍽️', title: 'Au restaurant', scenario: 'Estás cenando en un restaurante parisino.',
      level: 'A1',
      turns: [
        { npc: "Bonsoir ! Avez-vous réservé ? (¡Buenas noches! ¿Ha reservado?)", hint: 'Di que no pero pregunta si hay mesa', expected: "Non, est-ce qu'il y a une table ?", accept: ['non', 'table', 'mesa'] },
        { npc: "Oui, pour combien de personnes ? (Sí, ¿para cuántas personas?)", hint: 'Di para dos', expected: 'Pour deux personnes', accept: ['deux', 'dos', '2'] },
        { npc: "Voici la carte. Qu'est-ce que vous prenez ? (Aquí tiene el menú. ¿Qué van a tomar?)", hint: 'Pide la sopa del día', expected: "La soupe du jour, s'il vous plaît", accept: ['soupe', 'sopa', 'jour'] },
        { npc: "Et comme boisson ? (¿Y de beber?)", hint: 'Pide vino tinto', expected: 'Du vin rouge', accept: ['vin', 'rouge', 'vino'] },
      ],
    },
    {
      id: 'fr-conv-4', emoji: '🏨', title: "À l'hôtel", scenario: 'Estás haciendo check-in en un hotel francés.',
      level: 'A2',
      turns: [
        { npc: "Bonsoir, bienvenue ! Vous avez une réservation ? (Buenas noches, ¡bienvenido! ¿Tiene reserva?)", hint: 'Di que sí, a nombre de...', expected: "Oui, au nom de...", accept: ['oui', 'nom', 'nombre', 'reserv'] },
        { npc: "C'est pour combien de nuits ? (¿Para cuántas noches?)", hint: 'Di tres noches', expected: 'Trois nuits', accept: ['trois', 'nuits', 'tres', '3'] },
        { npc: "Votre chambre est au troisième étage. Voici la clé. (Su habitación está en el tercer piso. Aquí tiene la llave.)", hint: 'Pregunta a qué hora es el desayuno', expected: "Le petit-déjeuner est à quelle heure ?", accept: ['petit-déjeuner', 'dejeuner', 'heure', 'desayuno'] },
      ],
    },
  ],
  zh: [
    {
      id: 'zh-conv-1', emoji: '🍜', title: '在餐厅', scenario: 'Estás en un restaurante chino pidiendo comida.',
      level: 'HSK1',
      turns: [
        { npc: '你好！请问几位？ (¡Hola! ¿Cuántas personas?)', hint: 'Di "una persona"', expected: '一个人', accept: ['一个', 'yige', 'yi ge ren', '1'] },
        { npc: '请坐。你想吃什么？ (Siéntese. ¿Qué quiere comer?)', hint: 'Pide fideos', expected: '我想吃面条', accept: ['面条', 'miantiao', 'noodles', 'fideos'] },
        { npc: '好的。要喝什么？ (Bien. ¿Qué quiere beber?)', hint: 'Pide té', expected: '一杯茶', accept: ['茶', 'cha', 'tea', 'té'] },
        { npc: '好的，请等一下。 (Bien, espere un momento.)', hint: 'Da las gracias', expected: '谢谢', accept: ['谢谢', 'xiexie', 'xie xie'] },
      ],
    },
    {
      id: 'zh-conv-2', emoji: '🚕', title: '坐出租车', scenario: 'Necesitas tomar un taxi al hotel.',
      level: 'HSK1',
      turns: [
        { npc: '你好，去哪里？ (Hola, ¿a dónde va?)', hint: 'Di al hotel', expected: '去酒店', accept: ['酒店', 'jiudian', 'hotel'] },
        { npc: '哪个酒店？ (¿Qué hotel?)', hint: 'Di el nombre del hotel', expected: '北京饭店', accept: ['北京', 'beijing', 'fandian', '饭店'] },
        { npc: '到了，30块。 (Llegamos, 30 yuanes.)', hint: 'Da las gracias', expected: '谢谢', accept: ['谢谢', 'xiexie', 'xie xie'] },
      ],
    },
  ],
  ko: [
    {
      id: 'ko-conv-1', emoji: '🍲', title: '식당에서', scenario: 'Estás en un restaurante coreano pidiendo comida.',
      level: 'TOPIK1',
      turns: [
        { npc: '어서오세요! 몇 분이세요? (¡Bienvenido! ¿Cuántas personas?)', hint: 'Di "dos personas"', expected: '두 명이요', accept: ['두', 'du', 'myeong', '명', '2'] },
        { npc: '뭘 드시겠어요? (¿Qué van a pedir?)', hint: 'Pide bibimbap', expected: '비빔밥 주세요', accept: ['비빔밥', 'bibimbap', 'juseyo', '주세요'] },
        { npc: '음료는요? (¿Algo de beber?)', hint: 'Pide agua', expected: '물 주세요', accept: ['물', 'mul', 'agua', 'water', '주세요'] },
      ],
    },
    {
      id: 'ko-conv-2', emoji: '🚇', title: '지하철에서', scenario: 'Necesitas pedir indicaciones en el metro de Seúl.',
      level: 'TOPIK1',
      turns: [
        { npc: '(지나가는 사람을 봅니다)', hint: 'Pregunta cómo llegar a Gangnam', expected: '실례합니다, 강남역 어떻게 가요?', accept: ['실례', 'sillye', '강남', 'gangnam', '어떻게'] },
        { npc: '2호선을 타세요. (Tome la línea 2.)', hint: 'Pregunta dónde está la línea 2', expected: '2호선 어디에 있어요?', accept: ['어디', 'eodi', '2호선', '있어요'] },
        { npc: '저기 왼쪽이에요. (Allí a la izquierda.)', hint: 'Da las gracias', expected: '감사합니다', accept: ['감사', 'gamsa', 'gamsahamnida'] },
      ],
    },
  ],
  en: [
    {
      id: 'en-conv-1', emoji: '☕', title: 'At the coffee shop', scenario: 'Estás en una cafetería y quieres pedir algo.',
      level: 'A1',
      turns: [
        { npc: "Hi! What can I get for you? (¡Hola! ¿Qué le puedo ofrecer?)", hint: 'Pide un café con leche', expected: "I'd like a latte, please", accept: ['latte', 'coffee', 'please', 'cafe'] },
        { npc: "What size? Small, medium, or large? (¿Qué tamaño?)", hint: 'Di mediano', expected: 'Medium, please', accept: ['medium', 'mediano'] },
        { npc: "That'll be $4.50. (Son $4.50.)", hint: 'Da las gracias', expected: 'Thank you!', accept: ['thank', 'thanks', 'gracias'] },
      ],
    },
    {
      id: 'en-conv-2', emoji: '🏨', title: 'Hotel check-in', scenario: 'Estás registrándote en un hotel.',
      level: 'A1',
      turns: [
        { npc: "Good evening! Do you have a reservation? (¡Buenas noches! ¿Tiene reserva?)", hint: 'Di que sí', expected: "Yes, I have a reservation", accept: ['yes', 'reservation', 'sí'] },
        { npc: "For how many nights? (¿Cuántas noches?)", hint: 'Di dos noches', expected: 'Two nights', accept: ['two', '2', 'nights'] },
        { npc: "Here's your key. Room 305. (Aquí tiene su llave. Habitación 305.)", hint: 'Agradece', expected: 'Thank you very much', accept: ['thank', 'thanks'] },
      ],
    },
    {
      id: 'en-conv-3', emoji: '🛫', title: 'At the airport', scenario: 'Estás en el aeropuerto haciendo check-in.',
      level: 'A2',
      turns: [
        { npc: "Passport and boarding pass, please. (Pasaporte y tarjeta de embarque, por favor.)", hint: 'Entrega tus documentos', expected: "Here you go", accept: ['here', 'aquí', 'go'] },
        { npc: "Window or aisle seat? (¿Ventana o pasillo?)", hint: 'Di ventana', expected: "Window seat, please", accept: ['window', 'ventana'] },
        { npc: "Any bags to check? (¿Maletas para facturar?)", hint: 'Di que tienes una', expected: "Yes, one bag", accept: ['yes', 'one', 'bag', '1'] },
        { npc: "Gate B12. Boarding at 3pm. Have a nice flight! (Puerta B12. Embarque a las 3pm.)", hint: 'Agradece', expected: 'Thank you!', accept: ['thank', 'thanks'] },
      ],
    },
  ],
  pt: [
    {
      id: 'pt-conv-1', emoji: '🏖️', title: 'Na praia', scenario: 'Estás en una playa brasileña y quieres alquilar una sombrilla.',
      level: 'A1',
      turns: [
        { npc: 'Oi! Quer alugar uma barraca? (¡Hola! ¿Quiere alquilar una sombrilla?)', hint: 'Di que sí', expected: 'Sim, por favor', accept: ['sim', 'favor', 'sí'] },
        { npc: 'São 50 reais por dia. (Son 50 reales por día.)', hint: 'Pregunta si incluye sillas', expected: 'Inclui cadeiras?', accept: ['inclui', 'cadeiras', 'sillas', 'include'] },
        { npc: 'Sim, duas cadeiras. (Sí, dos sillas.)', hint: 'Acepta', expected: 'Ótimo, obrigado!', accept: ['ótimo', 'obrigado', 'otimo', 'gracias'] },
      ],
    },
    {
      id: 'pt-conv-2', emoji: '🚌', title: 'No ônibus', scenario: 'Necesitas tomar el autobús correcto en São Paulo.',
      level: 'A1',
      turns: [
        { npc: '(Você está no ponto de ônibus)', hint: 'Pregunta qué autobús va al centro', expected: 'Qual ônibus vai para o centro?', accept: ['qual', 'ônibus', 'onibus', 'centro'] },
        { npc: 'O 702. Para no próximo ponto. (El 702. Para en la próxima parada.)', hint: 'Da las gracias', expected: 'Obrigado!', accept: ['obrigado', 'obrigada', 'gracias'] },
      ],
    },
  ],
  ru: [
    {
      id: 'ru-conv-1', emoji: '🏪', title: 'В магазине', scenario: 'Estás comprando en una tienda rusa.',
      level: 'A1',
      turns: [
        { npc: 'Здравствуйте! Вам помочь? (¡Hola! ¿Le ayudo?)', hint: 'Pregunta cuánto cuesta algo', expected: 'Сколько это стоит?', accept: ['сколько', 'стоит', 'skolko', 'stoit'] },
        { npc: '200 рублей. (200 rublos.)', hint: 'Di que lo tomas', expected: 'Хорошо, я возьму это', accept: ['хорошо', 'возьму', 'khorosho', 'vozmu'] },
        { npc: 'Вот сдача. Спасибо! (Aquí tiene el cambio. ¡Gracias!)', hint: 'Da las gracias', expected: 'Спасибо!', accept: ['спасибо', 'spasibo'] },
      ],
    },
  ],
  es: [
    {
      id: 'es-conv-1', emoji: '🏪', title: 'En la tienda', scenario: 'Estás comprando en una tienda en Madrid.',
      level: 'A1',
      turns: [
        { npc: '¡Buenos días! ¿En qué puedo ayudarle?', hint: 'Pregunta si tienen camisetas', expected: '¿Tienen camisetas?', accept: ['tienen', 'camisetas', 'camiseta'] },
        { npc: 'Sí, están por aquí. ¿Qué talla?', hint: 'Di tu talla (mediana)', expected: 'Talla mediana, por favor', accept: ['mediana', 'media', 'M', 'medium'] },
        { npc: '¿Algo más?', hint: 'Di que no, y pregunta el precio', expected: 'No, gracias. ¿Cuánto cuesta?', accept: ['cuánto', 'cuanto', 'cuesta', 'precio'] },
      ],
    },
    {
      id: 'es-conv-2', emoji: '🏥', title: 'En la farmacia', scenario: 'No te sientes bien y necesitas medicinas.',
      level: 'A1',
      turns: [
        { npc: 'Hola, ¿qué necesita?', hint: 'Di que te duele la garganta', expected: 'Me duele la garganta', accept: ['duele', 'garganta', 'throat'] },
        { npc: '¿Tiene fiebre también?', hint: 'Di que sí, un poco', expected: 'Sí, un poco de fiebre', accept: ['sí', 'si', 'fiebre', 'poco'] },
        { npc: 'Tome este jarabe, tres veces al día.', hint: 'Da las gracias', expected: 'Muchas gracias', accept: ['gracias', 'muchas'] },
      ],
    },
    {
      id: 'es-conv-3', emoji: '🚕', title: 'En el taxi', scenario: 'Necesitas tomar un taxi al aeropuerto.',
      level: 'A2',
      turns: [
        { npc: '¡Buenas! ¿A dónde le llevo?', hint: 'Di al aeropuerto', expected: 'Al aeropuerto, por favor', accept: ['aeropuerto', 'airport', 'favor'] },
        { npc: '¿Qué terminal?', hint: 'Di terminal 2', expected: 'Terminal 2', accept: ['terminal', '2', 'dos'] },
        { npc: 'Son 25 euros.', hint: 'Pregunta si aceptan tarjeta', expected: '¿Aceptan tarjeta?', accept: ['tarjeta', 'card', 'aceptan'] },
      ],
    },
  ],
  ro: [
    {
      id: 'ro-conv-1', emoji: '☕', title: 'La cafenea', scenario: 'Estás en una cafetería rumana pidiendo algo.',
      level: 'A1',
      turns: [
        { npc: 'Bună ziua! Ce doriți? (¡Buenos días! ¿Qué desea?)', hint: 'Pide un café', expected: 'O cafea, vă rog', accept: ['cafea', 'rog', 'café', 'coffee'] },
        { npc: 'Cu lapte sau fără? (¿Con leche o sin?)', hint: 'Di con leche', expected: 'Cu lapte, vă rog', accept: ['lapte', 'cu', 'leche', 'milk'] },
        { npc: 'Altceva? (¿Algo más?)', hint: 'Pide un croissant', expected: 'Și un croissant, vă rog', accept: ['croissant', 'rog'] },
        { npc: 'Sunt 15 lei. (Son 15 lei.)', hint: 'Da las gracias', expected: 'Mulțumesc!', accept: ['mulțumesc', 'multumesc', 'gracias'] },
      ],
    },
    {
      id: 'ro-conv-2', emoji: '🗺️', title: 'Pe stradă', scenario: 'Estás perdido en Bucarest y necesitas indicaciones.',
      level: 'A1',
      turns: [
        { npc: '(Un trecător te privește)', hint: 'Pregunta dónde está la estación', expected: 'Scuzați, unde este gara?', accept: ['scuzați', 'scuzati', 'unde', 'gara', 'estación'] },
        { npc: 'Mergeți drept, apoi la stânga. (Siga recto, luego a la izquierda.)', hint: 'Pregunta si está lejos', expected: 'Este departe?', accept: ['departe', 'lejos', 'far'] },
        { npc: 'Nu, e la 5 minute. (No, está a 5 minutos.)', hint: 'Da las gracias', expected: 'Mulțumesc mult!', accept: ['mulțumesc', 'multumesc', 'gracias'] },
      ],
    },
    {
      id: 'ro-conv-3', emoji: '🏨', title: 'La hotel', scenario: 'Estás haciendo check-in en un hotel rumano.',
      level: 'A1',
      turns: [
        { npc: 'Bună seara! Aveți o rezervare? (¡Buenas noches! ¿Tiene reserva?)', hint: 'Di que sí, a tu nombre', expected: 'Da, pe numele...', accept: ['da', 'nume', 'numele', 'sí', 'yes'] },
        { npc: 'Pentru câte nopți? (¿Para cuántas noches?)', hint: 'Di dos noches', expected: 'Două nopți', accept: ['două', 'doua', 'nopți', 'nopti', '2', 'dos'] },
        { npc: 'Camera 204. Poftiți cheia. (Habitación 204. Aquí tiene la llave.)', hint: 'Da las gracias', expected: 'Mulțumesc!', accept: ['mulțumesc', 'multumesc'] },
      ],
    },
    {
      id: 'ro-conv-4', emoji: '🛒', title: 'La piață', scenario: 'Estás comprando frutas en el mercado.',
      level: 'A1',
      turns: [
        { npc: 'Bună! Ce doriți? (¡Hola! ¿Qué desea?)', hint: 'Pide manzanas', expected: 'Aș vrea niște mere, vă rog', accept: ['mere', 'manzanas', 'apples', 'rog'] },
        { npc: 'Câte kilograme? (¿Cuántos kilos?)', hint: 'Di un kilo', expected: 'Un kilogram', accept: ['un', 'kilogram', 'kilo', '1'] },
        { npc: 'Sunt 8 lei. Mai doriți ceva? (Son 8 lei. ¿Desea algo más?)', hint: 'Di que no, gracias', expected: 'Nu, mulțumesc', accept: ['nu', 'mulțumesc', 'multumesc', 'no'] },
      ],
    },
  ],
  ar: [
    {
      id: 'ar-conv-1', emoji: '🕌', title: 'في السوق', scenario: 'Estás comprando en un mercado árabe.',
      level: 'A1',
      turns: [
        { npc: 'مرحبا! تفضل! (¡Hola! ¡Adelante!)', hint: 'Pregunta cuánto cuesta esto', expected: 'بكم هذا؟', accept: ['بكم', 'bikam', 'cuánto', 'how much'] },
        { npc: 'عشرون ديناراً (20 dinares)', hint: 'Di que es caro, ofrece 15', expected: 'غالي! خمسة عشر؟', accept: ['غالي', 'خمسة', 'ghali', 'caro', 'expensive'] },
        { npc: 'تمام. هذا لك. (Bien. Esto es para ti.)', hint: 'Da las gracias', expected: 'شكرا جزيلا', accept: ['شكرا', 'shukran'] },
      ],
    },
  ],
  hi: [
    {
      id: 'hi-conv-1', emoji: '🍛', title: 'रेस्टोरेंट में', scenario: 'Estás en un restaurante indio pidiendo comida.',
      level: 'A1',
      turns: [
        { npc: 'नमस्ते! क्या ऑर्डर करेंगे? (¡Hola! ¿Qué va a pedir?)', hint: 'Pide biryani', expected: 'बिरयानी दीजिए', accept: ['बिरयानी', 'biryani', 'dijiye', 'दीजिए'] },
        { npc: 'पीने के लिए? (¿Para beber?)', hint: 'Pide un lassi', expected: 'एक लस्सी', accept: ['लस्सी', 'lassi', 'ek'] },
        { npc: 'ठीक है! (¡Bien!)', hint: 'Da las gracias', expected: 'धन्यवाद', accept: ['धन्यवाद', 'dhanyavaad', 'gracias'] },
      ],
    },
  ],
};
