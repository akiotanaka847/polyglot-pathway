import { Lesson } from '../types';

// B2/HSK4/TOPIK4 — Upper-intermediate: advanced grammar, professional, academic vocabulary
interface L4Data {
  g1: string; g1Rd: string; g1Ex: string; g1ExM: string;
  g2: string; g2Rd: string; g2Ex: string; g2ExM: string;
  g3: string; g3Rd: string; g3Ex: string; g3ExM: string;
  g4: string; g4Rd: string; g4Ex: string; g4ExM: string;
  v: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]; // 21 pairs: word, reading
}

function makeL4(code: string, level: string, lang: string, d: L4Data): Lesson[] {
  const p = (n: number) => `${code}-${level.toLowerCase()}-${n}`;
  const rd = (s: string) => s.toLowerCase().replace(/[^a-z\s]/g, '').trim();
  const v = d.v;
  // v: [w0,r0, w1,r1, w2,r2, ... w20,r20] = 42 items, 21 vocab pairs
  const vw = (i: number) => v[i * 2];
  const vr = (i: number) => v[i * 2 + 1];
  const titles = [
    'Diplomacy', 'Psychology', 'Architecture', 'Medicine', 'Literature',
    'Journalism', 'Finance', 'Engineering', 'Astronomy', 'Sociology',
    'Ethics', 'Linguistics', 'Ecology', 'Anthropology', 'Technology',
    'Cinema', 'Sports Pro', 'Cooking Pro', 'Travel Pro', 'Culture Deep',
    'Review L4'
  ];

  const lessons: Lesson[] = [];

  // 4 grammar lessons
  const grams = [
    { char: d.g1, grd: d.g1Rd, ex: d.g1Ex, exm: d.g1ExM, title: 'Advanced Grammar 1' },
    { char: d.g2, grd: d.g2Rd, ex: d.g2Ex, exm: d.g2ExM, title: 'Advanced Grammar 2' },
    { char: d.g3, grd: d.g3Rd, ex: d.g3Ex, exm: d.g3ExM, title: 'Advanced Grammar 3' },
    { char: d.g4, grd: d.g4Rd, ex: d.g4Ex, exm: d.g4ExM, title: 'Advanced Grammar 4' },
  ];
  grams.forEach((g, i) => {
    lessons.push({
      id: p(i + 1), title: `${g.title} - ${lang}`, type: 'grammar', steps: [
        { t: 'th', char: g.char, rd: g.grd, mn: g.title, note: `Advanced grammar in ${lang}.` },
        { t: 'th', char: g.ex, rd: '', mn: g.exm, note: 'Example.' },
        { t: 'mc', q: `Which is "${g.title}" in ${lang}?`, opts: [d.g1, d.g2, d.g3, d.g4], ans: i },
        { t: 'mc', q: `"${g.ex}" means?`, opts: [d.g1ExM, d.g2ExM, d.g3ExM, d.g4ExM], ans: i },
        { t: 'tx', q: `Reading of "${g.char}":`, ans: rd(g.grd) },
      ]
    });
  });

  // 20 vocab lessons + 1 review
  for (let i = 0; i < 20; i++) {
    const wi = i;
    const oi = (i + 7) % 21; // offset for wrong answers
    lessons.push({
      id: p(i + 5), title: `${titles[i]} - ${lang}`, type: 'vocab', steps: [
        { t: 'th', char: vw(wi), rd: vr(wi), mn: titles[i], note: `${titles[i]} vocabulary in ${lang}.` },
        { t: 'mc', q: `"${titles[i]}" related word in ${lang}?`, opts: [vw(wi), vw(oi), vw((i + 3) % 21), vw((i + 5) % 21)], ans: 0 },
        { t: 'mc', q: `What does "${vw(wi)}" mean?`, opts: [titles[i], titles[oi], titles[(i + 3) % 21], titles[(i + 5) % 21]], ans: 0 },
        { t: 'tx', q: `Reading of "${vw(wi)}":`, ans: rd(vr(wi)) },
      ]
    });
  }

  // Review lesson
  lessons.push({
    id: p(25), title: `${titles[20]} - ${lang}`, type: 'reading', steps: [
      { t: 'mc', q: `Grammar 1 in ${lang}?`, opts: [d.g1, d.g2, d.g3, d.g4], ans: 0 },
      { t: 'mc', q: `"${vw(0)}" relates to?`, opts: [titles[0], titles[5], titles[10], titles[15]], ans: 0 },
      { t: 'mc', q: `"${vw(5)}" relates to?`, opts: [titles[0], titles[5], titles[10], titles[15]], ans: 1 },
      { t: 'mc', q: `"${vw(10)}" relates to?`, opts: [titles[0], titles[5], titles[10], titles[15]], ans: 2 },
      { t: 'mc', q: `"${vw(15)}" relates to?`, opts: [titles[0], titles[5], titles[10], titles[15]], ans: 3 },
      { t: 'mc', q: `Grammar 3 in ${lang}?`, opts: [d.g1, d.g2, d.g3, d.g4], ans: 2 },
    ]
  });

  return lessons;
}

// Helper for compact vocab arrays
function v(...args: string[]): any { return args; }

export const frC1Lessons = makeL4('fr', 'C1', 'French', {
  g1: 'Plus-que-parfait du subjonctif', g1Rd: 'ply ke parfe dy subjonktif', g1Ex: 'Qu\'il eût parlé', g1ExM: 'That he had spoken',
  g2: 'Concordance des temps', g2Rd: 'konkordans de tan', g2Ex: 'Il fallait qu\'il vînt', g2ExM: 'It was necessary he came',
  g3: 'Passé simple littéraire', g3Rd: 'pase senpl literair', g3Ex: 'Il parla longuement', g3ExM: 'He spoke at length',
  g4: 'Gérondif composé', g4Rd: 'jerondif konpoze', g4Ex: 'En ayant fini', g4ExM: 'Having finished',
  v: v('Diplomatie','diplomasi','Inconscient','enkonsiyan','Bâtiment','batiman','Chirurgie','shiryrji','Roman','roman','Chronique','kronik','Bourse','burs','Ingénierie','enjeniori','Étoile','etwal','Communauté','komyunote','Morale','moral','Syntaxe','sentaks','Biodiversité','biodiversite','Tribu','triby','Innovation','inovasyon','Cinéaste','sineast','Arbitre','arbitr','Gastronomie','gastronomi','Itinéraire','itinerer','Patrimoine','patrimwan','Bilan','bilan'),
});

export const deB2Lessons = makeL4('de', 'B2', 'German', {
  g1: 'Konjunktiv II Vergangenheit', g1Rd: 'konjunktiv zwei vergangenheit', g1Ex: 'Hätte ich gewusst', g1ExM: 'Had I known',
  g2: 'Partizipialkonstruktion', g2Rd: 'partitsipialkontruktsion', g2Ex: 'Der lesende Schüler', g2ExM: 'The reading student',
  g3: 'Nominalstil', g3Rd: 'nominalshtil', g3Ex: 'Die Durchführung des Plans', g3ExM: 'The execution of the plan',
  g4: 'Erweitertes Attribut', g4Rd: 'erveitertes attribut', g4Ex: 'Der in Berlin lebende Mann', g4ExM: 'The man living in Berlin',
  v: v('Diplomatie','diplomati','Psychologie','psychologi','Architektur','architektur','Medizin','medizin','Literatur','literatur','Journalismus','journalismus','Finanzen','finanzen','Ingenieurwesen','ingenierveezen','Astronomie','astronomi','Soziologie','sozioloji','Ethik','etik','Sprachwissenschaft','sprachvissenschaft','Ökologie','oekologi','Anthropologie','antropologi','Technologie','technologi','Filmkunst','filmkunst','Schiedsrichter','shiedsrichter','Gastronomie','gastronomi','Reiseroute','reizeroute','Kulturerbe','kulturerbe','Bilanz','bilants'),
});

export const itB2Lessons = makeL4('it', 'B2', 'Italian', {
  g1: 'Congiuntivo trapassato', g1Rd: 'congiuntivo trapassato', g1Ex: 'Se avessi saputo', g1ExM: 'If I had known',
  g2: 'Periodo ipotetico III', g2Rd: 'periodo ipotetico terzo', g2Ex: 'Se fosse venuto', g2ExM: 'If he had come',
  g3: 'Passato remoto', g3Rd: 'passato remoto', g3Ex: 'Egli parlò', g3ExM: 'He spoke',
  g4: 'Gerundio composto', g4Rd: 'gerundio composto', g4Ex: 'Avendo finito', g4ExM: 'Having finished',
  v: v('Diplomazia','diplomazia','Psicologia','psicologia','Architettura','architettura','Medicina','medicina','Letteratura','letteratura','Giornalismo','giornalismo','Finanza','finanza','Ingegneria','ingegneria','Astronomia','astronomia','Sociologia','sociologia','Etica','etica','Linguistica','linguistica','Ecologia','ecologia','Antropologia','antropologia','Tecnologia','tecnologia','Cinematografia','cinematografia','Arbitro','arbitro','Gastronomia','gastronomia','Itinerario','itinerario','Patrimonio','patrimonio','Bilancio','bilancio'),
});

export const ptB2Lessons = makeL4('pt', 'B2', 'Portuguese', {
  g1: 'Futuro do subjuntivo', g1Rd: 'futuro do subjuntivo', g1Ex: 'Quando eu souber', g1ExM: 'When I know',
  g2: 'Infinitivo pessoal', g2Rd: 'infinitivo pessoal', g2Ex: 'Para nós irmos', g2ExM: 'For us to go',
  g3: 'Pretérito mais-que-perfeito', g3Rd: 'preterito mais ke perfeito', g3Ex: 'Ele falara', g3ExM: 'He had spoken',
  g4: 'Gerúndio composto', g4Rd: 'gerundio composto', g4Ex: 'Tendo terminado', g4ExM: 'Having finished',
  v: v('Diplomacia','diplomasia','Psicologia','psicologia','Arquitetura','arquitetura','Medicina','medicina','Literatura','literatura','Jornalismo','jornalismo','Finanças','finansas','Engenharia','engenharia','Astronomia','astronomia','Sociologia','sociologia','Ética','etica','Linguística','linguistica','Ecologia','ecologia','Antropologia','antropologia','Tecnologia','tecnologia','Cinema','sinema','Árbitro','arbitro','Gastronomia','gastronomia','Roteiro','roteiro','Patrimônio','patrimonio','Balanço','balanso'),
});

export const koTOPIK4Lessons = makeL4('ko', 'TOPIK4', 'Korean', {
  g1: '-더라고요', g1Rd: 'deoragoyo', g1Ex: '맛있더라고요', g1ExM: 'It was delicious (I experienced)',
  g2: '-(으)ㄹ 뿐만 아니라', g2Rd: 'eul ppunman anira', g2Ex: '공부할 뿐만 아니라', g2ExM: 'Not only study but also',
  g3: '-는 바람에', g3Rd: 'neun barame', g3Ex: '비가 오는 바람에', g3ExM: 'Because it rained',
  g4: '-게 되다', g4Rd: 'ge doeda', g4Ex: '알게 되었다', g4ExM: 'I came to know',
  v: v('외교','oegyo','심리학','simnihak','건축','geonchuk','의학','uihak','문학','munhak','언론','eonron','금융','geumyung','공학','gonghak','천문학','cheonmunhak','사회학','sahwehak','윤리','yunri','언어학','eoneohak','생태학','saengtaehak','인류학','illyuhak','기술','gisul','영화','yeonghwa','심판','simpan','미식','misik','여정','yeojeong','유산','yusan','결산','gyeolsan'),
});

export const zhHSK4Lessons = makeL4('zh', 'HSK4', 'Chinese', {
  g1: '把字句', g1Rd: 'ba zi ju', g1Ex: '请把门关上', g1ExM: 'Please close the door',
  g2: '被字句', g2Rd: 'bei zi ju', g2Ex: '他被老师批评了', g2ExM: 'He was criticized by the teacher',
  g3: '连...都/也', g3Rd: 'lian dou ye', g3Ex: '连他都知道', g3ExM: 'Even he knows',
  g4: '越来越...', g4Rd: 'yue lai yue', g4Ex: '越来越好', g4ExM: 'Better and better',
  v: v('外交','waijiao','心理学','xinlixue','建筑','jianzhu','医学','yixue','文学','wenxue','新闻','xinwen','金融','jinrong','工程','gongcheng','天文学','tianwenxue','社会学','shehuixue','伦理','lunli','语言学','yuyanxue','生态','shengtai','人类学','renleixue','科技','keji','电影','dianying','裁判','caipan','美食','meishi','旅程','lvcheng','遗产','yichan','决算','juesuan'),
});

export const jpN1Lessons = makeL4('jp', 'N1', 'Japanese', {
  g1: '～にもかかわらず', g1Rd: 'nimo kakawarazu', g1Ex: '雨にもかかわらず出かけた', g1ExM: 'Despite the rain, went out',
  g2: '～をもって', g2Rd: 'wo motte', g2Ex: '本日をもって終了', g2ExM: 'Ending as of today',
  g3: '～ざるを得ない', g3Rd: 'zaru wo enai', g3Ex: '行かざるを得ない', g3ExM: 'Cannot help but go',
  g4: '～に至るまで', g4Rd: 'ni itaru made', g4Ex: '細部に至るまで', g4ExM: 'Down to the details',
  v: v('外交','gaikou','心理学','shinrigaku','建築','kenchiku','医学','igaku','文学','bungaku','報道','houdou','金融','kinyuu','工学','kougaku','天文学','tenmongaku','社会学','shakaigaku','倫理','rinri','言語学','gengogaku','生態学','seitaigaku','人類学','jinruigaku','技術','gijutsu','映画','eiga','審判','shinpan','美食','bishoku','旅程','ryotei','遺産','isan','決算','kessan'),
});

export const ruB2Lessons = makeL4('ru', 'B2', 'Russian', {
  g1: 'Причастие', g1Rd: 'prichastiye', g1Ex: 'Читающий студент', g1ExM: 'The reading student',
  g2: 'Деепричастие', g2Rd: 'deeprichastiye', g2Ex: 'Читая книгу', g2ExM: 'While reading a book',
  g3: 'Безличные предложения', g3Rd: 'bezlichnye predlozheniya', g3Ex: 'Нужно работать', g3ExM: 'One must work',
  g4: 'Сложноподчинённое', g4Rd: 'slozhno podchinennoe', g4Ex: 'Когда он пришёл', g4ExM: 'When he arrived',
  v: v('Дипломатия','diplomatiya','Психология','psikhologiya','Архитектура','arkhitektura','Медицина','meditsina','Литература','literatura','Журналистика','zhurnalistika','Финансы','finansy','Инженерия','inzheneriya','Астрономия','astronomiya','Социология','sotsiologiya','Этика','etika','Лингвистика','lingvistika','Экология','ekologiya','Антропология','antropologiya','Технология','tekhnologiya','Кинематограф','kinematograf','Арбитр','arbitr','Гастрономия','gastronomiya','Маршрут','marshrut','Наследие','naslediye','Баланс','balans'),
});

export const arB2Lessons = makeL4('ar', 'B2', 'Arabic', {
  g1: 'المصدر المؤول', g1Rd: 'al-masdar al-muawwal', g1Ex: 'يجب أن تدرس', g1ExM: 'You must study',
  g2: 'اسم الفاعل', g2Rd: 'ism al-fail', g2Ex: 'الطالب القارئ', g2ExM: 'The reading student',
  g3: 'الجملة الشرطية', g3Rd: 'al-jumla ash-shartiya', g3Ex: 'لو درست لنجحت', g3ExM: 'If you had studied you would have passed',
  g4: 'التمييز', g4Rd: 'at-tamyiz', g4Ex: 'عشرون كتاباً', g4ExM: 'Twenty books',
  v: v('دبلوماسية','diblumasiya','علم النفس','ilm an-nafs','هندسة معمارية','handasa mimariya','طب','tibb','أدب','adab','صحافة','sahafa','مالية','maliya','هندسة','handasa','فلك','falak','علم الاجتماع','ilm al-ijtima','أخلاق','akhlaq','لسانيات','lisaniyat','بيئة','bia','أنثروبولوجيا','anthrobolojia','تقنية','tiqniya','سينما','sinima','حكم','hakam','فن الطبخ','fan at-tabkh','رحلة','rihla','تراث','turath','ميزانية','mizaniya'),
});

export const hiB2Lessons = makeL4('hi', 'B2', 'Hindi', {
  g1: 'संयुक्त क्रिया', g1Rd: 'sanyukt kriya', g1Ex: 'वह खा चुका है', g1ExM: 'He has finished eating',
  g2: 'कृदंत', g2Rd: 'kridant', g2Ex: 'पढ़ता हुआ छात्र', g2ExM: 'The reading student',
  g3: 'विधि वाक्य', g3Rd: 'vidhi vakya', g3Ex: 'काम करना चाहिए', g3ExM: 'One should work',
  g4: 'मिश्र वाक्य', g4Rd: 'mishra vakya', g4Ex: 'जब वह आया', g4ExM: 'When he came',
  v: v('कूटनीति','kutniti','मनोविज्ञान','manovigyan','वास्तुकला','vastukala','चिकित्सा','chikitsa','साहित्य','sahitya','पत्रकारिता','patrakarita','वित्त','vitt','अभियांत्रिकी','abhiyantrik','खगोल विज्ञान','khagol vigyan','समाजशास्त्र','samajshastra','नैतिकता','naitikta','भाषाविज्ञान','bhashavigyaan','पारिस्थितिकी','paristhitiki','मानवशास्त्र','manavshastra','प्रौद्योगिकी','praudyogiki','सिनेमा','sinema','रेफरी','refari','पाक कला','pak kala','यात्रा मार्ग','yatra marg','विरासत','virasat','तुलन पत्र','tulan patra'),
});

export const trB2Lessons = makeL4('tr', 'B2', 'Turkish', {
  g1: 'Sıfat fiil', g1Rd: 'sifat fiil', g1Ex: 'Okuyan öğrenci', g1ExM: 'The reading student',
  g2: 'Zarf fiil', g2Rd: 'zarf fiil', g2Ex: 'Okuyarak öğrendi', g2ExM: 'Learned by reading',
  g3: 'İsim tamlaması', g3Rd: 'isim tamlamasi', g3Ex: 'Öğretmenin kitabı', g3ExM: 'The teacher\'s book',
  g4: 'Dolaylı anlatım ileri', g4Rd: 'dolayli anlatim ileri', g4Ex: 'Geldiğini söyledi', g4ExM: 'Said that he came',
  v: v('Diplomasi','diplomasi','Psikoloji','psikoloji','Mimarlık','mimarlik','Tıp','tip','Edebiyat','edebiyat','Gazetecilik','gazetecilik','Finans','finans','Mühendislik','muhendislik','Astronomi','astronomi','Sosyoloji','sosyoloji','Etik','etik','Dilbilim','dilbilim','Ekoloji','ekoloji','Antropoloji','antropoloji','Teknoloji','teknoloji','Sinema','sinema','Hakem','hakem','Gastronomi','gastronomi','Güzergah','guzergah','Miras','miras','Bilanço','bilancho'),
});

export const viB2Lessons = makeL4('vi', 'B2', 'Vietnamese', {
  g1: 'Câu bị động nâng cao', g1Rd: 'cau bi dong nang cao', g1Ex: 'Bài viết được đánh giá cao', g1ExM: 'The article was highly rated',
  g2: 'Liên từ phức', g2Rd: 'lien tu phuc', g2Ex: 'Mặc dù...nhưng', g2ExM: 'Although...but',
  g3: 'Câu ghép', g3Rd: 'cau ghep', g3Ex: 'Không những...mà còn', g3ExM: 'Not only...but also',
  g4: 'Trích dẫn', g4Rd: 'trich dan', g4Ex: 'Anh ấy nói rằng...', g4ExM: 'He said that...',
  v: v('Ngoại giao','ngoai giao','Tâm lý học','tam ly hoc','Kiến trúc','kien truc','Y học','y hoc','Văn học','van hoc','Báo chí','bao chi','Tài chính','tai chinh','Kỹ thuật','ky thuat','Thiên văn học','thien van hoc','Xã hội học','xa hoi hoc','Đạo đức','dao duc','Ngôn ngữ học','ngon ngu hoc','Sinh thái học','sinh thai hoc','Nhân học','nhan hoc','Công nghệ','cong nghe','Điện ảnh','dien anh','Trọng tài','trong tai','Ẩm thực','am thuc','Lộ trình','lo trinh','Di sản','di san','Quyết toán','quyet toan'),
});

export const thB2Lessons = makeL4('th', 'B2', 'Thai', {
  g1: 'ประโยคซับซ้อน', g1Rd: 'prayok sap son', g1Ex: 'แม้ว่า...แต่ก็', g1ExM: 'Although...but',
  g2: 'คำเชื่อมขั้นสูง', g2Rd: 'kham cheueam khan sung', g2Ex: 'ไม่เพียงแต่...แต่ยัง', g2ExM: 'Not only...but also',
  g3: 'กรรมวาจก', g3Rd: 'kamma wajok', g3Ex: 'บทความถูกตีพิมพ์', g3ExM: 'The article was published',
  g4: 'อ้างอิง', g4Rd: 'ang ing', g4Ex: 'เขาบอกว่า...', g4ExM: 'He said that...',
  v: v('การทูต','kan thut','จิตวิทยา','jit witthaya','สถาปัตยกรรม','sathapattayakam','แพทยศาสตร์','phaettayasat','วรรณกรรม','wannakam','สื่อสารมวลชน','sue san muan chon','การเงิน','kan ngoen','วิศวกรรม','witsawakam','ดาราศาสตร์','darasaat','สังคมวิทยา','sangkhom witthaya','จริยธรรม','jariyatham','ภาษาศาสตร์','phasasat','นิเวศวิทยา','niwet witthaya','มานุษยวิทยา','manutwitthaya','เทคโนโลยี','thekhonoloji','ภาพยนตร์','phapphayon','กรรมการ','kammakan','อาหารชั้นสูง','ahan chan sung','เส้นทาง','sen thang','มรดก','moradok','งบดุล','ngop dun'),
});

export const nlB2Lessons = makeL4('nl', 'B2', 'Dutch', {
  g1: 'Voltooid deelwoord', g1Rd: 'voltooid deelwoord', g1Ex: 'Het gelezen boek', g1ExM: 'The read book',
  g2: 'Conjunctief', g2Rd: 'konjunktief', g2Ex: 'Het zij zo', g2ExM: 'So be it',
  g3: 'Passieve constructies', g3Rd: 'passieve konstrukties', g3Ex: 'Er wordt gewerkt', g3ExM: 'Work is being done',
  g4: 'Indirecte rede formeel', g4Rd: 'indirekte rede formeel', g4Ex: 'Hij beweerde dat...', g4ExM: 'He claimed that...',
  v: v('Diplomatie','diplomati','Psychologie','psygologi','Architectuur','arshitektuur','Geneeskunde','geneeskunde','Literatuur','literatuur','Journalistiek','journalistiek','Financiën','finansien','Techniek','techniek','Sterrenkunde','sterrenkunde','Sociologie','sosiologi','Ethiek','ethiek','Taalkunde','taalkunde','Ecologie','ekologi','Antropologie','antropologi','Technologie','technologi','Filmkunst','filmkunst','Scheidsrechter','sgheidsreghter','Gastronomie','gastronomi','Reisroute','reisroute','Erfgoed','erfgoed','Balans','balans'),
});

export const plB2Lessons = makeL4('pl', 'B2', 'Polish', {
  g1: 'Imiesłów przymiotnikowy', g1Rd: 'imiesluw pshymiotnikovy', g1Ex: 'Czytający uczeń', g1ExM: 'The reading student',
  g2: 'Imiesłów przysłówkowy', g2Rd: 'imiesluw pshysluvkovy', g2Ex: 'Czytając książkę', g2ExM: 'While reading a book',
  g3: 'Strona bierna rozszerzona', g3Rd: 'strona bierna rozshirzona', g3Ex: 'Artykuł został opublikowany', g3ExM: 'The article was published',
  g4: 'Zdanie złożone', g4Rd: 'zdanie zlozhone', g4Ex: 'Pomimo że...', g4ExM: 'Despite the fact that...',
  v: v('Dyplomacja','dyplomatsya','Psychologia','psykhologia','Architektura','arkhitektura','Medycyna','medytsyna','Literatura','literatura','Dziennikarstwo','dzhennikartstvo','Finanse','finanse','Inżynieria','inzhynieria','Astronomia','astronomia','Socjologia','sotsyologia','Etyka','etyka','Językoznawstwo','yenzykoznavstvo','Ekologia','ekologia','Antropologia','antropologia','Technologia','tekhnologia','Kinematografia','kinematografia','Sędzia','sendzia','Gastronomia','gastronomia','Trasa','trasa','Dziedzictwo','dzhedzitstfo','Bilans','bilans'),
});

export const enB2Lessons = makeL4('en', 'B2', 'English', {
  g1: 'Mixed conditionals', g1Rd: 'mixed conditionals', g1Ex: 'If I had studied, I would know', g1ExM: 'Si hubiera estudiado, sabría',
  g2: 'Inversion', g2Rd: 'inversion', g2Ex: 'Never have I seen', g2ExM: 'Nunca he visto',
  g3: 'Cleft sentences', g3Rd: 'cleft sentences', g3Ex: 'It was John who called', g3ExM: 'Fue John quien llamó',
  g4: 'Participle clauses', g4Rd: 'participle clauses', g4Ex: 'Having finished, he left', g4ExM: 'Habiendo terminado, se fue',
  v: v('Diplomacy','diplomacy','Psychology','psychology','Architecture','architecture','Medicine','medicine','Literature','literature','Journalism','journalism','Finance','finance','Engineering','engineering','Astronomy','astronomy','Sociology','sociology','Ethics','ethics','Linguistics','linguistics','Ecology','ecology','Anthropology','anthropology','Technology','technology','Cinematography','cinematography','Referee','referee','Gastronomy','gastronomy','Itinerary','itinerary','Heritage','heritage','Balance sheet','balance sheet'),
});

export const esB2Lessons = makeL4('es', 'B2', 'Spanish', {
  g1: 'Pluscuamperfecto de subjuntivo', g1Rd: 'pluskuamperfecto de subjuntivo', g1Ex: 'Si hubiera sabido', g1ExM: 'If I had known',
  g2: 'Oraciones concesivas', g2Rd: 'oraciones concesivas', g2Ex: 'Aunque llueva, iré', g2ExM: 'Even if it rains, I\'ll go',
  g3: 'Perífrasis verbales', g3Rd: 'perifrasis verbales', g3Ex: 'Llevo estudiando dos horas', g3ExM: 'I\'ve been studying for two hours',
  g4: 'Estilo indirecto avanzado', g4Rd: 'estilo indirecto avanzado', g4Ex: 'Dijo que habría ido', g4ExM: 'He said he would have gone',
  v: v('Diplomacia','diplomacia','Psicología','psicologia','Arquitectura','arquitectura','Medicina','medicina','Literatura','literatura','Periodismo','periodismo','Finanzas','finanzas','Ingeniería','ingenieria','Astronomía','astronomia','Sociología','sociologia','Ética','etica','Lingüística','linguistica','Ecología','ecologia','Antropología','antropologia','Tecnología','tecnologia','Cinematografía','cinematografia','Árbitro','arbitro','Gastronomía','gastronomia','Itinerario','itinerario','Patrimonio','patrimonio','Balance','balance'),
});

export const zhHSK5Lessons = makeL4('zh', 'HSK5', 'Chinese', {
  g1: '不但...而且', g1Rd: 'budan erqie', g1Ex: '不但聪明而且勤奋', g1ExM: 'Not only smart but also hardworking',
  g2: '既然...就', g2Rd: 'jiran jiu', g2Ex: '既然来了就坐吧', g2ExM: 'Since you\'re here, sit down',
  g3: '无论...都', g3Rd: 'wulun dou', g3Ex: '无论如何都要去', g3ExM: 'Must go no matter what',
  g4: '之所以...是因为', g4Rd: 'zhisuoyi shi yinwei', g4Ex: '之所以迟到是因为堵车', g4ExM: 'The reason for being late is traffic',
  v: v('外交','waijiao','心理','xinli','建筑学','jianzhuxue','医疗','yiliao','文学作品','wenxue zuopin','新闻报道','xinwen baodao','金融市场','jinrong shichang','工程学','gongchengxue','天文','tianwen','社会','shehui','道德','daode','语言','yuyan','生态环境','shengtai huanjing','人类','renlei','高科技','gao keji','电影艺术','dianying yishu','裁判员','caipanyuan','烹饪','pengren','行程','xingcheng','文化遗产','wenhua yichan','财务报表','caiwu baobiao'),
});

export const koTOPIK5Lessons = makeL4('ko', 'TOPIK5', 'Korean', {
  g1: '-(으)ㄹ수록', g1Rd: 'eulsurok', g1Ex: '갈수록 어렵다', g1ExM: 'The more you go, the harder',
  g2: '-는 한', g2Rd: 'neun han', g2Ex: '가능한 한', g2ExM: 'As much as possible',
  g3: '-기는커녕', g3Rd: 'gineun keonyeong', g3Ex: '칭찬은커녕 비난받았다', g3ExM: 'Far from praise, was criticized',
  g4: '-느니 차라리', g4Rd: 'neuni charari', g4Ex: '기다리느니 차라리 걸어가겠다', g4ExM: 'Rather walk than wait',
  v: v('외교관','oegyogwan','심리','simni','건축학','geonchukhak','의료','uiryo','문학작품','munhak jakpum','기사','gisa','금융시장','geumyung sijang','공학자','gonghakja','천문','cheonmun','사회학자','sahwehakja','도덕','dodeok','언어','eoneo','생태환경','saengtae hwangyeong','인류','illyu','첨단기술','cheomdan gisul','영화예술','yeonghwa yesul','심판관','simpangwan','요리법','yoribop','일정','iljeong','문화유산','munhwa yusan','재무제표','jaemu jepyo'),
});
