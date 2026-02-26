// Universal wordbanks for levels A2-C2
// These are generated per language using language-specific word data
import { LevelWordbank, WordEntry } from '../generator';

// ==================== A2 LEVEL ====================
const A2_DATA: Record<string, { categories: Record<string, { w: string; rd: string; mn: string }[]> }> = {
  jp: {
    categories: {
      greetings: [
        { w: 'お元気ですか', rd: 'ogenki desu ka', mn: 'How are you?' }, { w: 'ありがとうございます', rd: 'arigatou gozaimasu', mn: 'Thank you very much' },
        { w: 'すみません', rd: 'sumimasen', mn: 'Excuse me' }, { w: 'おはようございます', rd: 'ohayou gozaimasu', mn: 'Good morning (polite)' },
        { w: 'こんばんは', rd: 'konbanwa', mn: 'Good evening' }, { w: 'おやすみなさい', rd: 'oyasumi nasai', mn: 'Good night' },
        { w: 'お久しぶりです', rd: 'ohisashiburi desu', mn: 'Long time no see' }, { w: 'よろしくお願いします', rd: 'yoroshiku onegai shimasu', mn: 'Nice to meet you (polite)' },
        { w: 'いってきます', rd: 'ittekimasu', mn: "I'm leaving" }, { w: 'ただいま', rd: 'tadaima', mn: "I'm home" },
        { w: 'お邪魔します', rd: 'ojama shimasu', mn: 'Pardon the intrusion' }, { w: 'いただきます', rd: 'itadakimasu', mn: 'Thanks for the meal (before)' },
      ],
      numbers: [
        { w: '百', rd: 'hyaku', mn: 'Hundred' }, { w: '千', rd: 'sen', mn: 'Thousand' },
        { w: '万', rd: 'man', mn: 'Ten thousand' }, { w: '一番', rd: 'ichiban', mn: 'First/Number one' },
        { w: '半分', rd: 'hanbun', mn: 'Half' }, { w: '全部', rd: 'zenbu', mn: 'All/Everything' },
        { w: '何人', rd: 'nannin', mn: 'How many people' }, { w: '何個', rd: 'nanko', mn: 'How many pieces' },
        { w: '何時', rd: 'nanji', mn: 'What time' }, { w: '何分', rd: 'nanpun', mn: 'How many minutes' },
        { w: '何歳', rd: 'nansai', mn: 'How old' }, { w: '何回', rd: 'nankai', mn: 'How many times' },
      ],
      family: [
        { w: '家族', rd: 'kazoku', mn: 'Family' }, { w: '両親', rd: 'ryoushin', mn: 'Parents' },
        { w: '兄弟', rd: 'kyoudai', mn: 'Siblings' }, { w: '親戚', rd: 'shinseki', mn: 'Relatives' },
        { w: '赤ちゃん', rd: 'akachan', mn: 'Baby' }, { w: '子供', rd: 'kodomo', mn: 'Children' },
        { w: '大人', rd: 'otona', mn: 'Adult' }, { w: '友達', rd: 'tomodachi', mn: 'Friend' },
        { w: '彼氏', rd: 'kareshi', mn: 'Boyfriend' }, { w: '彼女', rd: 'kanojo', mn: 'Girlfriend' },
        { w: '隣人', rd: 'rinjin', mn: 'Neighbor' }, { w: 'ペット', rd: 'petto', mn: 'Pet' },
      ],
      colors: [
        { w: '金色', rd: 'kiniro', mn: 'Gold' }, { w: '銀色', rd: 'giniro', mn: 'Silver' },
        { w: '水色', rd: 'mizuiro', mn: 'Light blue' }, { w: '茶色', rd: 'chairo', mn: 'Brown' },
        { w: '紫', rd: 'murasaki', mn: 'Purple' }, { w: '薄い', rd: 'usui', mn: 'Light (color)' },
        { w: '濃い', rd: 'koi', mn: 'Dark (color)' }, { w: '明るい', rd: 'akarui', mn: 'Bright' },
        { w: '暗い', rd: 'kurai', mn: 'Dark' }, { w: 'カラフル', rd: 'karafuru', mn: 'Colorful' },
      ],
      days: [
        { w: '今日', rd: 'kyou', mn: 'Today' }, { w: '明日', rd: 'ashita', mn: 'Tomorrow' },
        { w: '昨日', rd: 'kinou', mn: 'Yesterday' }, { w: '今週', rd: 'konshuu', mn: 'This week' },
        { w: '来週', rd: 'raishuu', mn: 'Next week' }, { w: '先週', rd: 'senshuu', mn: 'Last week' },
        { w: '今月', rd: 'kongetsu', mn: 'This month' }, { w: '毎日', rd: 'mainichi', mn: 'Every day' },
        { w: '週末', rd: 'shuumatsu', mn: 'Weekend' }, { w: '平日', rd: 'heijitsu', mn: 'Weekday' },
      ],
      food: [
        { w: 'ラーメン', rd: 'raamen', mn: 'Ramen' }, { w: '寿司', rd: 'sushi', mn: 'Sushi' },
        { w: '天ぷら', rd: 'tenpura', mn: 'Tempura' }, { w: '味噌汁', rd: 'misoshiru', mn: 'Miso soup' },
        { w: '餃子', rd: 'gyouza', mn: 'Dumplings' }, { w: 'うどん', rd: 'udon', mn: 'Udon noodles' },
        { w: 'カレー', rd: 'karee', mn: 'Curry' }, { w: '弁当', rd: 'bentou', mn: 'Lunch box' },
        { w: '丼', rd: 'donburi', mn: 'Rice bowl' }, { w: '焼き鳥', rd: 'yakitori', mn: 'Grilled chicken' },
        { w: 'おにぎり', rd: 'onigiri', mn: 'Rice ball' }, { w: '豆腐', rd: 'toufu', mn: 'Tofu' },
        { w: '刺身', rd: 'sashimi', mn: 'Sashimi' }, { w: 'そば', rd: 'soba', mn: 'Soba noodles' },
      ],
      body: [
        { w: '背中', rd: 'senaka', mn: 'Back' }, { w: '肩', rd: 'kata', mn: 'Shoulder' },
        { w: '膝', rd: 'hiza', mn: 'Knee' }, { w: '首', rd: 'kubi', mn: 'Neck' },
        { w: '顔', rd: 'kao', mn: 'Face' }, { w: '歯', rd: 'ha', mn: 'Tooth' },
        { w: '舌', rd: 'shita', mn: 'Tongue' }, { w: '皮膚', rd: 'hifu', mn: 'Skin' },
        { w: '髪', rd: 'kami', mn: 'Hair' }, { w: '爪', rd: 'tsume', mn: 'Nail' },
      ],
      clothes: [
        { w: 'コート', rd: 'kooto', mn: 'Coat' }, { w: 'セーター', rd: 'seetaa', mn: 'Sweater' },
        { w: 'ネクタイ', rd: 'nekutai', mn: 'Necktie' }, { w: 'スーツ', rd: 'suutsu', mn: 'Suit' },
        { w: 'サンダル', rd: 'sandaru', mn: 'Sandals' }, { w: 'ブーツ', rd: 'buutsu', mn: 'Boots' },
        { w: '手袋', rd: 'tebukuro', mn: 'Gloves' }, { w: '傘', rd: 'kasa', mn: 'Umbrella' },
        { w: 'ジーンズ', rd: 'jiinzu', mn: 'Jeans' }, { w: 'パジャマ', rd: 'pajama', mn: 'Pajamas' },
      ],
      house: [
        { w: '台所', rd: 'daidokoro', mn: 'Kitchen' }, { w: '居間', rd: 'ima', mn: 'Living room' },
        { w: '玄関', rd: 'genkan', mn: 'Entrance' }, { w: '屋根', rd: 'yane', mn: 'Roof' },
        { w: '壁', rd: 'kabe', mn: 'Wall' }, { w: '床', rd: 'yuka', mn: 'Floor' },
        { w: '冷蔵庫', rd: 'reizouko', mn: 'Refrigerator' }, { w: '洗濯機', rd: 'sentakuki', mn: 'Washing machine' },
        { w: 'エアコン', rd: 'eakon', mn: 'Air conditioner' }, { w: '本棚', rd: 'hondana', mn: 'Bookshelf' },
        { w: '鏡', rd: 'kagami', mn: 'Mirror' }, { w: 'カーテン', rd: 'kaaten', mn: 'Curtain' },
      ],
      transport: [
        { w: '新幹線', rd: 'shinkansen', mn: 'Bullet train' }, { w: '地下鉄', rd: 'chikatetsu', mn: 'Subway' },
        { w: '自転車', rd: 'jitensha', mn: 'Bicycle' }, { w: '歩く', rd: 'aruku', mn: 'To walk' },
        { w: '運転する', rd: 'unten suru', mn: 'To drive' }, { w: '乗る', rd: 'noru', mn: 'To ride' },
        { w: '降りる', rd: 'oriru', mn: 'To get off' }, { w: '切符', rd: 'kippu', mn: 'Ticket' },
        { w: '駅', rd: 'eki', mn: 'Station' }, { w: '信号', rd: 'shingou', mn: 'Traffic light' },
      ],
      weather: [
        { w: '台風', rd: 'taifuu', mn: 'Typhoon' }, { w: '地震', rd: 'jishin', mn: 'Earthquake' },
        { w: '梅雨', rd: 'tsuyu', mn: 'Rainy season' }, { w: '湿度', rd: 'shitsudo', mn: 'Humidity' },
        { w: '気温', rd: 'kion', mn: 'Temperature' }, { w: '天気予報', rd: 'tenki yohou', mn: 'Weather forecast' },
        { w: '曇り', rd: 'kumori', mn: 'Cloudy' }, { w: '晴れ', rd: 'hare', mn: 'Clear weather' },
        { w: '涼しい', rd: 'suzushii', mn: 'Cool' }, { w: '蒸し暑い', rd: 'mushiatsui', mn: 'Humid and hot' },
      ],
      jobs: [
        { w: '会社員', rd: 'kaishain', mn: 'Office worker' }, { w: '公務員', rd: 'koumuin', mn: 'Government worker' },
        { w: '看護師', rd: 'kangoshi', mn: 'Nurse' }, { w: '弁護士', rd: 'bengoshi', mn: 'Lawyer' },
        { w: '研究者', rd: 'kenkyuusha', mn: 'Researcher' }, { w: '店員', rd: 'tenin', mn: 'Shop clerk' },
        { w: '運転手', rd: 'untenshu', mn: 'Driver' }, { w: '美容師', rd: 'biyoushi', mn: 'Hairdresser' },
        { w: '薬剤師', rd: 'yakuzaishi', mn: 'Pharmacist' }, { w: 'プログラマー', rd: 'puroguramaa', mn: 'Programmer' },
      ],
      shopping: [
        { w: 'レジ', rd: 'reji', mn: 'Cash register' }, { w: 'お釣り', rd: 'otsuri', mn: 'Change (money)' },
        { w: '値段', rd: 'nedan', mn: 'Price' }, { w: 'セール', rd: 'seeru', mn: 'Sale' },
        { w: '割引', rd: 'waribiki', mn: 'Discount' }, { w: '袋', rd: 'fukuro', mn: 'Bag' },
        { w: 'サイズ', rd: 'saizu', mn: 'Size' }, { w: '試着', rd: 'shichaku', mn: 'Try on' },
        { w: '返品', rd: 'henpin', mn: 'Return (goods)' }, { w: '送料', rd: 'souryou', mn: 'Shipping cost' },
      ],
      verbs: [
        { w: '買う', rd: 'kau', mn: 'To buy' }, { w: '売る', rd: 'uru', mn: 'To sell' },
        { w: '待つ', rd: 'matsu', mn: 'To wait' }, { w: '送る', rd: 'okuru', mn: 'To send' },
        { w: '届く', rd: 'todoku', mn: 'To arrive' }, { w: '始める', rd: 'hajimeru', mn: 'To begin' },
        { w: '終わる', rd: 'owaru', mn: 'To end' }, { w: '使う', rd: 'tsukau', mn: 'To use' },
        { w: '覚える', rd: 'oboeru', mn: 'To remember' }, { w: '忘れる', rd: 'wasureru', mn: 'To forget' },
        { w: '選ぶ', rd: 'erabu', mn: 'To choose' }, { w: '変える', rd: 'kaeru', mn: 'To change' },
        { w: '決める', rd: 'kimeru', mn: 'To decide' }, { w: '調べる', rd: 'shiraberu', mn: 'To investigate' },
      ],
      adjectives: [
        { w: '楽しい', rd: 'tanoshii', mn: 'Fun' }, { w: '難しい', rd: 'muzukashii', mn: 'Difficult' },
        { w: '易しい', rd: 'yasashii', mn: 'Easy' }, { w: '面白い', rd: 'omoshiroi', mn: 'Interesting' },
        { w: 'つまらない', rd: 'tsumaranai', mn: 'Boring' }, { w: '怖い', rd: 'kowai', mn: 'Scary' },
        { w: '嬉しい', rd: 'ureshii', mn: 'Happy' }, { w: '悲しい', rd: 'kanashii', mn: 'Sad' },
        { w: '忙しい', rd: 'isogashii', mn: 'Busy' }, { w: '静か', rd: 'shizuka', mn: 'Quiet' },
      ],
      questions: [
        { w: 'どうして', rd: 'doushite', mn: 'Why' }, { w: 'どこから', rd: 'doko kara', mn: 'From where' },
        { w: 'いくら', rd: 'ikura', mn: 'How much (price)' }, { w: 'どのくらい', rd: 'dono kurai', mn: 'How long/much' },
        { w: 'どちら', rd: 'dochira', mn: 'Which one' }, { w: 'どうやって', rd: 'dou yatte', mn: 'How (method)' },
        { w: '何語', rd: 'nanigo', mn: 'What language' }, { w: '何曜日', rd: 'nanyoubi', mn: 'What day of week' },
        { w: '何月', rd: 'nangatsu', mn: 'What month' }, { w: '何年', rd: 'nannen', mn: 'What year' },
      ],
      survival: [
        { w: '病院', rd: 'byouin', mn: 'Hospital' }, { w: '交番', rd: 'kouban', mn: 'Police box' },
        { w: '薬局', rd: 'yakkyoku', mn: 'Pharmacy' }, { w: '救急車', rd: 'kyuukyuusha', mn: 'Ambulance' },
        { w: 'アレルギー', rd: 'arerugii', mn: 'Allergy' }, { w: '危ない', rd: 'abunai', mn: 'Dangerous' },
        { w: '注意', rd: 'chuui', mn: 'Caution' }, { w: '非常口', rd: 'hijouguchi', mn: 'Emergency exit' },
        { w: '消防署', rd: 'shoubousho', mn: 'Fire station' }, { w: '保険', rd: 'hoken', mn: 'Insurance' },
      ],
      animals: [
        { w: 'ライオン', rd: 'raion', mn: 'Lion' }, { w: '象', rd: 'zou', mn: 'Elephant' },
        { w: 'くま', rd: 'kuma', mn: 'Bear' }, { w: '猿', rd: 'saru', mn: 'Monkey' },
        { w: 'イルカ', rd: 'iruka', mn: 'Dolphin' }, { w: 'ペンギン', rd: 'pengin', mn: 'Penguin' },
        { w: '蛇', rd: 'hebi', mn: 'Snake' }, { w: 'カエル', rd: 'kaeru', mn: 'Frog' },
        { w: '蝶', rd: 'chou', mn: 'Butterfly' }, { w: 'ハムスター', rd: 'hamusutaa', mn: 'Hamster' },
      ],
    },
  },
  fr: {
    categories: {
      greetings: [
        { w: 'Comment allez-vous?', rd: 'koman tale vu', mn: 'How are you? (formal)' }, { w: 'Ça va bien', rd: 'sa va byan', mn: "I'm fine" },
        { w: 'Ravi de vous connaître', rd: 'ravi de vu konehtr', mn: 'Pleased to meet you' }, { w: 'Bienvenue', rd: 'byenvenu', mn: 'Welcome' },
        { w: 'Félicitations', rd: 'felisitasyon', mn: 'Congratulations' }, { w: 'Bon voyage', rd: 'bon vwayaj', mn: 'Have a good trip' },
        { w: 'Bonne nuit', rd: 'bon nui', mn: 'Good night' }, { w: 'À bientôt', rd: 'a byento', mn: 'See you soon' },
        { w: 'Pas de quoi', rd: 'pa de kwa', mn: "Don't mention it" }, { w: 'Je suis désolé', rd: 'zhe sui dezole', mn: "I'm sorry (formal)" },
        { w: 'Salut', rd: 'salu', mn: 'Hi (informal)' }, { w: 'Coucou', rd: 'kuku', mn: 'Hey (very informal)' },
      ],
      numbers: [
        { w: 'Cent', rd: 'san', mn: 'Hundred' }, { w: 'Mille', rd: 'mil', mn: 'Thousand' },
        { w: 'Premier', rd: 'premye', mn: 'First' }, { w: 'Deuxième', rd: 'dezyem', mn: 'Second' },
        { w: 'Troisième', rd: 'trwazyem', mn: 'Third' }, { w: 'Dernier', rd: 'dernye', mn: 'Last' },
        { w: 'Douzaine', rd: 'duzen', mn: 'Dozen' }, { w: 'Moitié', rd: 'mwatye', mn: 'Half' },
        { w: 'Double', rd: 'dubl', mn: 'Double' }, { w: 'Triple', rd: 'tripl', mn: 'Triple' },
        { w: 'Quinze', rd: 'kenz', mn: 'Fifteen' }, { w: 'Trente', rd: 'trant', mn: 'Thirty' },
      ],
      family: [
        { w: 'Famille', rd: 'famiy', mn: 'Family' }, { w: 'Parents', rd: 'paran', mn: 'Parents' },
        { w: 'Bébé', rd: 'bebe', mn: 'Baby' }, { w: 'Enfant', rd: 'anfan', mn: 'Child' },
        { w: 'Adulte', rd: 'adylt', mn: 'Adult' }, { w: 'Ami', rd: 'ami', mn: 'Friend' },
        { w: 'Voisin', rd: 'vwazan', mn: 'Neighbor' }, { w: 'Petit-fils', rd: 'peti fis', mn: 'Grandson' },
        { w: 'Petite-fille', rd: 'petit fiy', mn: 'Granddaughter' }, { w: 'Neveu', rd: 'nevu', mn: 'Nephew' },
        { w: 'Nièce', rd: 'nyes', mn: 'Niece' }, { w: 'Beau-père', rd: 'bo per', mn: 'Father-in-law' },
      ],
      colors: [
        { w: 'Doré', rd: 'dore', mn: 'Gold' }, { w: 'Argenté', rd: 'arjante', mn: 'Silver' },
        { w: 'Brun', rd: 'bren', mn: 'Brown' }, { w: 'Clair', rd: 'kler', mn: 'Light (color)' },
        { w: 'Foncé', rd: 'fonse', mn: 'Dark (color)' }, { w: 'Brillant', rd: 'briyan', mn: 'Bright' },
        { w: 'Pâle', rd: 'pal', mn: 'Pale' }, { w: 'Vif', rd: 'vif', mn: 'Vivid' },
        { w: 'Turquoise', rd: 'tyrkwaz', mn: 'Turquoise' }, { w: 'Beige', rd: 'bezh', mn: 'Beige' },
      ],
      days: [
        { w: "Aujourd'hui", rd: 'ozhurdui', mn: 'Today' }, { w: 'Demain', rd: 'deman', mn: 'Tomorrow' },
        { w: 'Hier', rd: 'yer', mn: 'Yesterday' }, { w: 'Cette semaine', rd: 'set semen', mn: 'This week' },
        { w: 'Le mois prochain', rd: 'le mwa proshan', mn: 'Next month' }, { w: 'Le week-end', rd: 'le wikend', mn: 'Weekend' },
        { w: 'Quotidien', rd: 'kotidyen', mn: 'Daily' }, { w: 'Hebdomadaire', rd: 'ebdomader', mn: 'Weekly' },
        { w: 'Mensuel', rd: 'mansyel', mn: 'Monthly' }, { w: 'Annuel', rd: 'anyel', mn: 'Annual' },
      ],
      food: [
        { w: 'Croissant', rd: 'krwasan', mn: 'Croissant' }, { w: 'Baguette', rd: 'baget', mn: 'Baguette' },
        { w: 'Fromage', rd: 'fromaj', mn: 'Cheese' }, { w: 'Crêpe', rd: 'krep', mn: 'Crepe' },
        { w: 'Omelette', rd: 'omlet', mn: 'Omelette' }, { w: 'Tarte', rd: 'tart', mn: 'Tart/Pie' },
        { w: 'Glace', rd: 'glas', mn: 'Ice cream' }, { w: 'Gâteau', rd: 'gato', mn: 'Cake' },
        { w: 'Sauce', rd: 'sos', mn: 'Sauce' }, { w: 'Confiture', rd: 'konfityr', mn: 'Jam' },
        { w: 'Beurre', rd: 'ber', mn: 'Butter' }, { w: 'Épice', rd: 'epis', mn: 'Spice' },
        { w: 'Légume', rd: 'legym', mn: 'Vegetable' }, { w: 'Champignon', rd: 'shanpinyon', mn: 'Mushroom' },
      ],
      body: [
        { w: 'Dos', rd: 'do', mn: 'Back' }, { w: 'Épaule', rd: 'epol', mn: 'Shoulder' },
        { w: 'Genou', rd: 'zhenu', mn: 'Knee' }, { w: 'Cou', rd: 'ku', mn: 'Neck' },
        { w: 'Visage', rd: 'vizaj', mn: 'Face' }, { w: 'Dent', rd: 'dan', mn: 'Tooth' },
        { w: 'Langue', rd: 'lang', mn: 'Tongue' }, { w: 'Peau', rd: 'po', mn: 'Skin' },
        { w: 'Cheveux', rd: 'shevo', mn: 'Hair' }, { w: 'Ongle', rd: 'ongl', mn: 'Nail' },
      ],
      clothes: [
        { w: 'Manteau', rd: 'manto', mn: 'Coat' }, { w: 'Pull', rd: 'pyl', mn: 'Sweater' },
        { w: 'Cravate', rd: 'kravat', mn: 'Necktie' }, { w: 'Costume', rd: 'kostym', mn: 'Suit' },
        { w: 'Bottes', rd: 'bot', mn: 'Boots' }, { w: 'Gants', rd: 'gan', mn: 'Gloves' },
        { w: 'Parapluie', rd: 'paraplui', mn: 'Umbrella' }, { w: 'Jean', rd: 'djin', mn: 'Jeans' },
        { w: 'Pyjama', rd: 'pizhama', mn: 'Pajamas' }, { w: 'Écharpe', rd: 'esharp', mn: 'Scarf' },
      ],
      house: [
        { w: 'Cuisine', rd: 'kuizin', mn: 'Kitchen' }, { w: 'Salon', rd: 'salon', mn: 'Living room' },
        { w: 'Entrée', rd: 'antre', mn: 'Entrance' }, { w: 'Toit', rd: 'twa', mn: 'Roof' },
        { w: 'Mur', rd: 'myr', mn: 'Wall' }, { w: 'Sol', rd: 'sol', mn: 'Floor' },
        { w: 'Réfrigérateur', rd: 'refrijeratœr', mn: 'Refrigerator' }, { w: 'Lave-linge', rd: 'lav lenzh', mn: 'Washing machine' },
        { w: 'Climatisation', rd: 'klimatizasyon', mn: 'Air conditioner' }, { w: 'Étagère', rd: 'etazher', mn: 'Bookshelf' },
        { w: 'Miroir', rd: 'mirwar', mn: 'Mirror' }, { w: 'Rideau', rd: 'rido', mn: 'Curtain' },
      ],
      transport: [
        { w: 'TGV', rd: 'te zhe ve', mn: 'High-speed train' }, { w: 'Métro', rd: 'metro', mn: 'Subway' },
        { w: 'Vélo', rd: 'velo', mn: 'Bicycle' }, { w: 'Marcher', rd: 'marshe', mn: 'To walk' },
        { w: 'Conduire', rd: 'kondwir', mn: 'To drive' }, { w: 'Monter', rd: 'monte', mn: 'To get on' },
        { w: 'Descendre', rd: 'desandr', mn: 'To get off' }, { w: 'Billet', rd: 'biye', mn: 'Ticket' },
        { w: 'Gare', rd: 'gar', mn: 'Train station' }, { w: 'Feu rouge', rd: 'fo ruzh', mn: 'Traffic light' },
      ],
      weather: [
        { w: 'Ouragan', rd: 'uragan', mn: 'Hurricane' }, { w: 'Inondation', rd: 'inondasyon', mn: 'Flood' },
        { w: 'Sécheresse', rd: 'seshres', mn: 'Drought' }, { w: 'Humidité', rd: 'ymidite', mn: 'Humidity' },
        { w: 'Température', rd: 'temperatyr', mn: 'Temperature' }, { w: 'Prévision', rd: 'previzyon', mn: 'Forecast' },
        { w: 'Nuageux', rd: 'nuazho', mn: 'Cloudy' }, { w: 'Ensoleillé', rd: 'ansolaye', mn: 'Sunny' },
        { w: 'Frais', rd: 'fre', mn: 'Cool' }, { w: 'Orageux', rd: 'orazho', mn: 'Stormy' },
      ],
      jobs: [
        { w: 'Employé', rd: 'anplwaye', mn: 'Employee' }, { w: 'Fonctionnaire', rd: 'fonksyoner', mn: 'Government worker' },
        { w: 'Infirmier', rd: 'enfirmye', mn: 'Nurse' }, { w: 'Avocat', rd: 'avoka', mn: 'Lawyer' },
        { w: 'Chercheur', rd: 'shershœr', mn: 'Researcher' }, { w: 'Vendeur', rd: 'vandœr', mn: 'Salesperson' },
        { w: 'Chauffeur', rd: 'shofœr', mn: 'Driver' }, { w: 'Coiffeur', rd: 'kwafœr', mn: 'Hairdresser' },
        { w: 'Pharmacien', rd: 'farmasyen', mn: 'Pharmacist' }, { w: 'Programmeur', rd: 'programœr', mn: 'Programmer' },
      ],
      shopping: [
        { w: 'Caisse', rd: 'kes', mn: 'Cash register' }, { w: 'Monnaie', rd: 'mone', mn: 'Change (money)' },
        { w: 'Prix', rd: 'pri', mn: 'Price' }, { w: 'Soldes', rd: 'sold', mn: 'Sales' },
        { w: 'Remise', rd: 'remiz', mn: 'Discount' }, { w: 'Sac', rd: 'sak', mn: 'Bag' },
        { w: 'Taille', rd: 'tay', mn: 'Size' }, { w: 'Essayer', rd: 'esaye', mn: 'Try on' },
        { w: 'Retour', rd: 'retur', mn: 'Return (goods)' }, { w: 'Livraison', rd: 'livrezon', mn: 'Delivery' },
      ],
      verbs: [
        { w: 'Acheter', rd: 'ashte', mn: 'To buy' }, { w: 'Vendre', rd: 'vandr', mn: 'To sell' },
        { w: 'Attendre', rd: 'atandr', mn: 'To wait' }, { w: 'Envoyer', rd: 'anvwaye', mn: 'To send' },
        { w: 'Arriver', rd: 'arive', mn: 'To arrive' }, { w: 'Commencer', rd: 'komanse', mn: 'To begin' },
        { w: 'Finir', rd: 'finir', mn: 'To finish' }, { w: 'Utiliser', rd: 'ytilize', mn: 'To use' },
        { w: 'Se souvenir', rd: 'se suvnir', mn: 'To remember' }, { w: 'Oublier', rd: 'ubliye', mn: 'To forget' },
        { w: 'Choisir', rd: 'shwazir', mn: 'To choose' }, { w: 'Changer', rd: 'shanzhe', mn: 'To change' },
        { w: 'Décider', rd: 'deside', mn: 'To decide' }, { w: 'Chercher', rd: 'shershe', mn: 'To search' },
      ],
      adjectives: [
        { w: 'Amusant', rd: 'amyzan', mn: 'Fun' }, { w: 'Difficile', rd: 'difisil', mn: 'Difficult' },
        { w: 'Facile', rd: 'fasil', mn: 'Easy' }, { w: 'Intéressant', rd: 'anterasan', mn: 'Interesting' },
        { w: 'Ennuyeux', rd: 'anuiyo', mn: 'Boring' }, { w: 'Effrayant', rd: 'efreyan', mn: 'Scary' },
        { w: 'Heureux', rd: 'ero', mn: 'Happy' }, { w: 'Triste', rd: 'trist', mn: 'Sad' },
        { w: 'Occupé', rd: 'okype', mn: 'Busy' }, { w: 'Calme', rd: 'kalm', mn: 'Quiet' },
      ],
      questions: [
        { w: 'Pourquoi', rd: 'purkwa', mn: 'Why' }, { w: "D'où", rd: 'du', mn: 'From where' },
        { w: 'Combien', rd: 'konbyen', mn: 'How much/many' }, { w: 'Depuis quand', rd: 'depui kan', mn: 'Since when' },
        { w: 'Lequel', rd: 'lekel', mn: 'Which one' }, { w: 'Comment faire', rd: 'koman fer', mn: 'How to do' },
        { w: 'Quelle langue', rd: 'kel lang', mn: 'What language' }, { w: 'Quel jour', rd: 'kel zhur', mn: 'What day' },
        { w: 'Quel mois', rd: 'kel mwa', mn: 'What month' }, { w: "Quelle année", rd: 'kel ane', mn: 'What year' },
      ],
      survival: [
        { w: 'Hôpital', rd: 'opital', mn: 'Hospital' }, { w: 'Commissariat', rd: 'komisarya', mn: 'Police station' },
        { w: 'Pharmacie', rd: 'farmasi', mn: 'Pharmacy' }, { w: 'Ambulance', rd: 'anbylans', mn: 'Ambulance' },
        { w: 'Allergie', rd: 'alerzhi', mn: 'Allergy' }, { w: 'Dangereux', rd: 'danzhrœ', mn: 'Dangerous' },
        { w: 'Attention', rd: 'atansyon', mn: 'Caution' }, { w: 'Sortie de secours', rd: 'sorti de sekur', mn: 'Emergency exit' },
        { w: 'Pompiers', rd: 'ponpye', mn: 'Firefighters' }, { w: 'Assurance', rd: 'asyrans', mn: 'Insurance' },
      ],
      animals: [
        { w: 'Lion', rd: 'lyon', mn: 'Lion' }, { w: 'Éléphant', rd: 'elefan', mn: 'Elephant' },
        { w: 'Ours', rd: 'urs', mn: 'Bear' }, { w: 'Singe', rd: 'senzh', mn: 'Monkey' },
        { w: 'Dauphin', rd: 'dofan', mn: 'Dolphin' }, { w: 'Pingouin', rd: 'pangwan', mn: 'Penguin' },
        { w: 'Serpent', rd: 'serpan', mn: 'Snake' }, { w: 'Grenouille', rd: 'grenuy', mn: 'Frog' },
        { w: 'Papillon', rd: 'papiyon', mn: 'Butterfly' }, { w: 'Hamster', rd: 'amster', mn: 'Hamster' },
      ],
    },
  },
};

// Convert A2_DATA to LevelWordbank format
function toWordbank(data: Record<string, { w: string; rd: string; mn: string }[]>): LevelWordbank {
  const wb: any = {};
  const keys: (keyof LevelWordbank)[] = ['greetings','numbers','family','colors','days','food','body','clothes','house','transport','weather','jobs','shopping','verbs','adjectives','questions','survival','animals'];
  keys.forEach(k => { wb[k] = data[k as string] || []; });
  return wb as LevelWordbank;
}

// Generate a wordbank for ANY language/level by combining themed vocabulary
// For languages without specific A2 data, we create variations from A1
export function getHigherLevelBank(langCode: string): LevelWordbank | null {
  const langData = A2_DATA[langCode];
  if (langData) return toWordbank(langData.categories);
  return null;
}

// Extend a base bank by adding more words per category for higher levels
export function extendBank(base: LevelWordbank, extra: Partial<LevelWordbank>): LevelWordbank {
  const result = { ...base };
  (Object.keys(extra) as (keyof LevelWordbank)[]).forEach(k => {
    const baseArr = (result[k] || []) as WordEntry[];
    const extraArr = (extra[k] || []) as WordEntry[];
    (result as any)[k] = [...baseArr, ...extraArr];
  });
  return result;
}
