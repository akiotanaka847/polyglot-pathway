import { getLangConfig } from '../languages';
import { Lesson } from '../types';

// C1/HSK6/TOPIK6/C2 — Advanced & mastery level lessons
interface L5Data {
  g1: string; g1Rd: string; g1Ex: string; g1ExM: string;
  g2: string; g2Rd: string; g2Ex: string; g2ExM: string;
  topics: [string, string][]; // 23 topic pairs [word, reading]
}

function makeL5(code: string, level: string, langName: string, d: L5Data): Lesson[] {
  const lang = getLangConfig(code)?.nativeName || langName;
  const p = (n: number) => `${code}-${level.toLowerCase()}-${n}`;
  const rd = (s: string) => s.toLowerCase().replace(/[^a-z\s]/g, '').trim();
  const topicNames = [
    'Academic Writing', 'Rhetoric', 'Debate', 'Literary Analysis',
    'Philosophy of Language', 'Critical Thinking', 'Research Methods',
    'Advanced Diplomacy', 'International Law', 'Geopolitics',
    'Macroeconomics', 'Corporate Strategy', 'Neuroscience',
    'Quantum Physics', 'Artificial Intelligence', 'Bioethics',
    'Comparative Literature', 'Film Theory', 'Urban Planning',
    'Sustainable Development', 'Cultural Studies', 'Semiotics',
    'Advanced Review'
  ];

  const lessons: Lesson[] = [];

  // 2 grammar lessons
  [{ c: d.g1, r: d.g1Rd, e: d.g1Ex, m: d.g1ExM, t: 'Mastery Grammar 1' },
   { c: d.g2, r: d.g2Rd, e: d.g2Ex, m: d.g2ExM, t: 'Mastery Grammar 2' }]
  .forEach((g, i) => {
    lessons.push({
      id: p(i + 1), title: `${g.t} - ${lang}`, type: 'grammar', steps: [
        { t: 'th', char: g.c, rd: g.r, mn: g.t, note: `Gramática de nivel maestría en ${lang}.` },
        { t: 'th', char: g.e, rd: '', mn: g.m, note: 'Advanced example.' },
        { t: 'mc', q: `¿Cuál representa "${g.t}" en ${lang}?`, opts: [d.g1, d.g2, d.topics[0]?.[0] || '', d.topics[1]?.[0] || ''], ans: i },
        { t: 'tx', q: `Lectura de "${g.c}":`, ans: rd(g.r) },
      ]
    });
  });

  // 22 vocab lessons + 1 review = 23
  for (let i = 0; i < 22 && i < d.topics.length; i++) {
    const [w, r] = d.topics[i];
    const oi = (i + 5) % d.topics.length;
    const oi2 = (i + 11) % d.topics.length;
    const oi3 = (i + 17) % d.topics.length;
    lessons.push({
      id: p(i + 3), title: `${topicNames[i]} - ${lang}`, type: 'vocab', steps: [
        { t: 'th', char: w, rd: r, mn: topicNames[i], note: `Advanced: ${topicNames[i]} in ${lang}.` },
        { t: 'mc', q: `¿Término de "${topicNames[i]}" en ${lang}?`, opts: [w, d.topics[oi][0], d.topics[oi2][0], d.topics[oi3][0]], ans: 0 },
        { t: 'tx', q: `Lectura de "${w}":`, ans: rd(r) },
      ]
    });
  }

  // Review
  lessons.push({
    id: p(25), title: `${topicNames[22]} - ${lang}`, type: 'reading', steps: [
      { t: 'mc', q: `Grammar 1 in ${lang}?`, opts: [d.g1, d.g2, d.topics[0][0], d.topics[1][0]], ans: 0 },
      { t: 'mc', q: `"${d.topics[0][0]}" relates to?`, opts: [topicNames[0], topicNames[5], topicNames[10], topicNames[15]], ans: 0 },
      { t: 'mc', q: `"${d.topics[5][0]}" relates to?`, opts: [topicNames[0], topicNames[5], topicNames[10], topicNames[15]], ans: 1 },
      { t: 'mc', q: `"${d.topics[10][0]}" relates to?`, opts: [topicNames[0], topicNames[5], topicNames[10], topicNames[15]], ans: 2 },
      { t: 'mc', q: `Grammar 2 in ${lang}?`, opts: [d.g1, d.g2, d.topics[2][0], d.topics[3][0]], ans: 1 },
    ]
  });

  return lessons;
}

// ===== C1 LESSONS =====

export const ptC1Lessons = makeL5('pt', 'C1', 'Portuguese', {
  g1: 'Futuro do conjuntivo composto', g1Rd: 'futuro do conjuntivo composto', g1Ex: 'Quando tivermos terminado', g1ExM: 'When we have finished',
  g2: 'Infinitivo pessoal composto', g2Rd: 'infinitivo pessoal composto', g2Ex: 'Por termos chegado tarde', g2ExM: 'Because we arrived late',
  topics: [['Redação acadêmica','redacao academica'],['Retórica','retorica'],['Debate','debate'],['Análise literária','analise literaria'],['Filosofia da linguagem','filosofia da linguagem'],['Pensamento crítico','pensamento critico'],['Método de pesquisa','metodo de pesquisa'],['Diplomacia avançada','diplomacia avancada'],['Direito internacional','direito internacional'],['Geopolítica','geopolitica'],['Macroeconomia','macroeconomia'],['Estratégia empresarial','estrategia empresarial'],['Neurociência','neurociencia'],['Física quântica','fisica quantica'],['Inteligência artificial','inteligencia artificial'],['Bioética','bioetica'],['Literatura comparada','literatura comparada'],['Teoria do cinema','teoria do cinema'],['Urbanismo','urbanismo'],['Desenvolvimento sustentável','desenvolvimento sustentavel'],['Estudos culturais','estudos culturais'],['Semiótica','semiotica']],
});

export const koTOPIK6Lessons = makeL5('ko', 'TOPIK6', 'Korean', {
  g1: '-는 바에야', g1Rd: 'neun baeya', g1Ex: '할 바에야 제대로 하자', g1ExM: 'If we\'re going to do it, let\'s do it right',
  g2: '-건대', g2Rd: 'geondae', g2Ex: '생각건대 그것이 맞다', g2ExM: 'In my opinion, that\'s right',
  topics: [['학술 논문','haksul nonmun'],['수사학','susahak'],['토론','toron'],['문학 분석','munhak bunseok'],['언어 철학','eoneo cheolhak'],['비판적 사고','bipanjeok sago'],['연구 방법','yeongu bangbeop'],['고급 외교','gogeup oegyo'],['국제법','gukjebop'],['지정학','jijeongnak'],['거시경제학','geosi gyeongjehak'],['기업 전략','gieop jeonryak'],['신경과학','singyeong gwahak'],['양자물리학','yangja mulrihak'],['인공지능','ingong jineung'],['생명윤리','saengmyeong yunri'],['비교문학','bigyo munhak'],['영화이론','yeonghwa iron'],['도시계획','dosi gyehoek'],['지속가능발전','jisok ganeung baljeon'],['문화연구','munhwa yeongu'],['기호학','gihohak']],
});

export const zhHSK6Lessons = makeL5('zh', 'HSK6', 'Chinese', {
  g1: '非但...反而', g1Rd: 'feidan faner', g1Ex: '非但没有改善反而恶化了', g1ExM: 'Not only didn\'t improve but worsened',
  g2: '与其...不如', g2Rd: 'yuqi buru', g2Ex: '与其等待不如行动', g2ExM: 'Rather than wait, better to act',
  topics: [['学术写作','xueshu xiezuo'],['修辞','xiuci'],['辩论','bianlun'],['文学分析','wenxue fenxi'],['语言哲学','yuyan zhexue'],['批判性思维','pipanxing siwei'],['研究方法','yanjiu fangfa'],['高级外交','gaoji waijiao'],['国际法','guojifa'],['地缘政治','diyuan zhengzhi'],['宏观经济','hongguan jingji'],['企业战略','qiye zhanlve'],['神经科学','shenjing kexue'],['量子物理','liangzi wuli'],['人工智能','rengong zhineng'],['生命伦理','shengming lunli'],['比较文学','bijiao wenxue'],['电影理论','dianying lilun'],['城市规划','chengshi guihua'],['可持续发展','ke chixu fazhan'],['文化研究','wenhua yanjiu'],['符号学','fuhaoxue']],
});

export const ruC1Lessons = makeL5('ru', 'C1', 'Russian', {
  g1: 'Сложная пунктуация', g1Rd: 'slozhnaya punktuatsiya', g1Ex: 'Вводные конструкции, однако', g1ExM: 'Introductory constructions, however',
  g2: 'Книжный стиль', g2Rd: 'knizhny stil', g2Ex: 'Вследствие вышеизложенного', g2ExM: 'As a result of the above',
  topics: [['Научная статья','nauchnaya statya'],['Риторика','ritorika'],['Дискуссия','diskussiya'],['Литературный анализ','literaturny analiz'],['Философия языка','filosofiya yazyka'],['Критическое мышление','kriticheskoye myshleniye'],['Методология','metodologiya'],['Дипломатия','diplomatiya'],['Международное право','mezhdunarodnoe pravo'],['Геополитика','geopolitika'],['Макроэкономика','makroekonomika'],['Корпоративная стратегия','korporativnaya strategiya'],['Нейронаука','neironauka'],['Квантовая физика','kvantovaya fizika'],['Искусственный интеллект','iskusstvennyj intellekt'],['Биоэтика','bioetika'],['Сравнительная литература','sravnitelnaya literatura'],['Теория кино','teoriya kino'],['Градостроительство','gradostroitelstvo'],['Устойчивое развитие','ustoychivoe razvitie'],['Культурология','kulturologiya'],['Семиотика','semiotika']],
});

export const arC1Lessons = makeL5('ar', 'C1', 'Arabic', {
  g1: 'البلاغة', g1Rd: 'al-balagha', g1Ex: 'الاستعارة والمجاز', g1ExM: 'Metaphor and figurative language',
  g2: 'الإعراب المتقدم', g2Rd: 'al-irab al-mutaqaddim', g2Ex: 'المفعول المطلق', g2ExM: 'Absolute object (cognate accusative)',
  topics: [['كتابة أكاديمية','kitaba akadimiya'],['خطابة','khataba'],['مناظرة','munazara'],['تحليل أدبي','tahlil adabi'],['فلسفة اللغة','falsafat al-lugha'],['تفكير نقدي','tafkir naqdi'],['منهجية بحث','manhajiyat bahth'],['دبلوماسية متقدمة','diblmasiya mutaqaddima'],['قانون دولي','qanun dawli'],['جيوسياسة','jiyusiyasa'],['اقتصاد كلي','iqtisad kulli'],['استراتيجية','istratijiya'],['علم الأعصاب','ilm al-asab'],['فيزياء الكم','fizya al-kamm'],['ذكاء اصطناعي','dhaka istinai'],['أخلاقيات حيوية','akhlaqiyat hayawiya'],['أدب مقارن','adab muqaran'],['نظرية السينما','nazariyat as-sinima'],['تخطيط عمراني','takhtit umrani'],['تنمية مستدامة','tanmiya mustadama'],['دراسات ثقافية','dirasat thaqafiya'],['سيميائية','simyaiya']],
});

export const hiC1Lessons = makeL5('hi', 'C1', 'Hindi', {
  g1: 'संस्कृतनिष्ठ हिंदी', g1Rd: 'sanskritnishth hindi', g1Ex: 'तत्सम शब्दावली', g1ExM: 'Sanskrit-derived vocabulary',
  g2: 'व्याकरण विश्लेषण', g2Rd: 'vyakaran vishleshan', g2Ex: 'समास और संधि', g2ExM: 'Compound words and junction',
  topics: [['शैक्षिक लेखन','shaikshik lekhan'],['वक्तृत्व','vaktritva'],['वाद-विवाद','vad vivad'],['साहित्यिक विश्लेषण','sahityik vishleshan'],['भाषा दर्शन','bhasha darshan'],['आलोचनात्मक चिंतन','alochanatmak chintan'],['शोध पद्धति','shodh paddhati'],['उन्नत कूटनीति','unnat kutniti'],['अंतरराष्ट्रीय कानून','antarrashtriya kanun'],['भू-राजनीति','bhu rajniti'],['समष्टि अर्थशास्त्र','samashti arthashastra'],['कॉर्पोरेट रणनीति','corporate ranniti'],['तंत्रिका विज्ञान','tantrika vigyan'],['क्वांटम भौतिकी','quantum bhautiki'],['कृत्रिम बुद्धिमत्ता','kritrim buddhimatta'],['जैवनैतिकता','jaivnaitikta'],['तुलनात्मक साहित्य','tulnatmak sahitya'],['फिल्म सिद्धांत','film siddhant'],['नगर नियोजन','nagar niyojan'],['सतत विकास','satat vikas'],['सांस्कृतिक अध्ययन','sanskritik adhyayan'],['चिह्नविज्ञान','chihnvigyan']],
});

export const trC1Lessons = makeL5('tr', 'C1', 'Turkish', {
  g1: 'Bağlaç yapıları', g1Rd: 'baglach yapilari', g1Ex: 'Ne var ki...', g1ExM: 'However...',
  g2: 'Osmanlıca kökenli sözcükler', g2Rd: 'osmanlica kokenli sozcukler', g2Ex: 'Münasebet, muvafakat', g2ExM: 'Occasion, consent',
  topics: [['Akademik yazı','akademik yazi'],['Hitabet','hitabet'],['Münazara','munazara'],['Edebi analiz','edebi analiz'],['Dil felsefesi','dil felsefesi'],['Eleştirel düşünce','elestirel dusunce'],['Araştırma yöntemi','arastirma yontemi'],['İleri diplomasi','ileri diplomasi'],['Uluslararası hukuk','uluslararasi hukuk'],['Jeopolitik','jeopolitik'],['Makroekonomi','makroekonomi'],['Kurumsal strateji','kurumsal strateji'],['Sinirbilim','sinirbilim'],['Kuantum fiziği','kuantum fizigi'],['Yapay zeka','yapay zeka'],['Biyoetik','biyoetik'],['Karşılaştırmalı edebiyat','karsilastirmali edebiyat'],['Film teorisi','film teorisi'],['Şehir planlaması','sehir planlamasi'],['Sürdürülebilir kalkınma','surdurulebilir kalkinma'],['Kültür araştırmaları','kultur arastirmalari'],['Göstergebilim','gostergebilim']],
});

// Removed vi, th, nl, pl C1 lessons (consolidated to top 10)

export const enC1Lessons = makeL5('en', 'C1', 'English', {
  g1: 'Subjunctive (formal)', g1Rd: 'subjunctive formal', g1Ex: 'It is imperative that he be present', g1ExM: 'Es imperativo que esté presente',
  g2: 'Advanced inversion', g2Rd: 'advanced inversion', g2Ex: 'Not only did he arrive, but also', g2ExM: 'No solo llegó, sino también',
  topics: [['Academic writing','academic writing'],['Rhetoric','rhetoric'],['Debate','debate'],['Literary analysis','literary analysis'],['Philosophy of language','philosophy of language'],['Critical thinking','critical thinking'],['Research methodology','research methodology'],['Advanced diplomacy','advanced diplomacy'],['International law','international law'],['Geopolitics','geopolitics'],['Macroeconomics','macroeconomics'],['Corporate strategy','corporate strategy'],['Neuroscience','neuroscience'],['Quantum physics','quantum physics'],['Artificial intelligence','artificial intelligence'],['Bioethics','bioethics'],['Comparative literature','comparative literature'],['Film theory','film theory'],['Urban planning','urban planning'],['Sustainable development','sustainable development'],['Cultural studies','cultural studies'],['Semiotics','semiotics']],
});

export const esC1Lessons = makeL5('es', 'C1', 'Spanish', {
  g1: 'Estilo académico', g1Rd: 'estilo academico', g1Ex: 'En el presente artículo se analiza', g1ExM: 'In this article, we analyze',
  g2: 'Subordinación avanzada', g2Rd: 'subordinacion avanzada', g2Ex: 'Si bien es cierto que', g2ExM: 'Although it is true that',
  topics: [['Escritura académica','escritura academica'],['Retórica','retorica'],['Debate','debate'],['Análisis literario','analisis literario'],['Filosofía del lenguaje','filosofia del lenguaje'],['Pensamiento crítico','pensamiento critico'],['Metodología de investigación','metodologia de investigacion'],['Diplomacia avanzada','diplomacia avanzada'],['Derecho internacional','derecho internacional'],['Geopolítica','geopolitica'],['Macroeconomía','macroeconomia'],['Estrategia corporativa','estrategia corporativa'],['Neurociencia','neurociencia'],['Física cuántica','fisica cuantica'],['Inteligencia artificial','inteligencia artificial'],['Bioética','bioetica'],['Literatura comparada','literatura comparada'],['Teoría del cine','teoria del cine'],['Urbanismo','urbanismo'],['Desarrollo sostenible','desarrollo sostenible'],['Estudios culturales','estudios culturales'],['Semiótica','semiotica']],
});

// ===== C2 LESSONS (mastery) =====

export const frC2Lessons = makeL5('fr', 'C2', 'French', {
  g1: 'Style soutenu', g1Rd: 'stil sutny', g1Ex: 'Nonobstant les difficultés', g1ExM: 'Notwithstanding the difficulties',
  g2: 'Passé simple (maîtrise)', g2Rd: 'pase senpl metriz', g2Ex: 'Ils se regardèrent', g2ExM: 'They looked at each other',
  topics: [['Dissertation','disertasyon'],['Art oratoire','ar oratwar'],['Polémique','polemik'],['Exégèse','eksejez'],['Épistémologie','epistemoloji'],['Dialectique','dialektik'],['Herméneutique','ermenoetik'],['Relations internationales','relasyon enternasional'],['Droit constitutionnel','drwa konstitusyonel'],['Stratégie mondiale','strategi mondyal'],['Économie politique','ekonomi politik'],['Gouvernance','guvernans'],['Cognition','kognisyon'],['Cosmologie','kosmoloji'],['Éthique de l\'IA','etik de lia'],['Biopolitique','biopolitik'],['Théorie littéraire','teori literer'],['Esthétique','estetik'],['Architecture durable','arshitektyr dyrabl'],['Décroissance','dekrwasans'],['Postcolonialisme','postkolonyalism'],['Phénoménologie','fenomenoloji']],
});

export const ptC2Lessons = makeL5('pt', 'C2', 'Portuguese', {
  g1: 'Registro formal erudito', g1Rd: 'registro formal erudito', g1Ex: 'Não obstante', g1ExM: 'Notwithstanding',
  g2: 'Pretérito mais-que-perfeito simples', g2Rd: 'preterito mais ke perfeito simples', g2Ex: 'Ele viera antes', g2ExM: 'He had come before',
  topics: [['Dissertação','dissertacao'],['Oratória','oratoria'],['Polêmica','polemica'],['Exegese','exegese'],['Epistemologia','epistemologia'],['Dialética','dialetica'],['Hermenêutica','hermeneutica'],['Relações internacionais','relacoes internacionais'],['Direito constitucional','direito constitucional'],['Estratégia global','estrategia global'],['Economia política','economia politica'],['Governança','governanca'],['Cognição','cognicao'],['Cosmologia','cosmologia'],['Ética da IA','etica da ia'],['Biopolítica','biopolitica'],['Teoria literária','teoria literaria'],['Estética','estetica'],['Arquitetura sustentável','arquitetura sustentavel'],['Decrescimento','decrescimento'],['Pós-colonialismo','pos colonialismo'],['Fenomenologia','fenomenologia']],
});

export const ruC2Lessons = makeL5('ru', 'C2', 'Russian', {
  g1: 'Книжная лексика', g1Rd: 'knizhnaya leksika', g1Ex: 'Тем не менее', g1ExM: 'Nevertheless',
  g2: 'Архаизмы', g2Rd: 'arkhaizmy', g2Ex: 'Оный, сей', g2ExM: 'That, this (archaic)',
  topics: [['Диссертация','dissertatsiya'],['Ораторское искусство','oratorskoye iskusstvo'],['Полемика','polemika'],['Экзегеза','ekzegeza'],['Эпистемология','epistemologiya'],['Диалектика','dialektika'],['Герменевтика','germenevtika'],['Международные отношения','mezhdunarodnye otnosheniya'],['Конституционное право','konstitutsionnoye pravo'],['Глобальная стратегия','globalnaya strategiya'],['Политическая экономия','politicheskaya ekonomiya'],['Управление','upravleniye'],['Когниция','kognitsiya'],['Космология','kosmologiya'],['Этика ИИ','etika ii'],['Биополитика','biopolitika'],['Литературная теория','literaturnaya teoriya'],['Эстетика','estetika'],['Устойчивая архитектура','ustoychivaya arkhitektura'],['Посткапитализм','postkapitalizm'],['Постколониализм','postkolonializm'],['Феноменология','fenomenologiya']],
});

export const enC2Lessons = makeL5('en', 'C2', 'English', {
  g1: 'Literary register', g1Rd: 'literary register', g1Ex: 'Notwithstanding the aforementioned', g1ExM: 'No obstante lo anterior',
  g2: 'Archaic & formal', g2Rd: 'archaic and formal', g2Ex: 'Hitherto, whereupon, thereof', g2ExM: 'Hasta ahora, sobre lo cual, de ello',
  topics: [['Dissertation','dissertation'],['Oratory','oratory'],['Polemic','polemic'],['Exegesis','exegesis'],['Epistemology','epistemology'],['Dialectics','dialectics'],['Hermeneutics','hermeneutics'],['International relations','international relations'],['Constitutional law','constitutional law'],['Global strategy','global strategy'],['Political economy','political economy'],['Governance','governance'],['Cognition','cognition'],['Cosmology','cosmology'],['AI ethics','ai ethics'],['Biopolitics','biopolitics'],['Literary theory','literary theory'],['Aesthetics','aesthetics'],['Sustainable architecture','sustainable architecture'],['Degrowth','degrowth'],['Postcolonialism','postcolonialism'],['Phenomenology','phenomenology']],
});

export const esC2Lessons = makeL5('es', 'C2', 'Spanish', {
  g1: 'Registro académico formal', g1Rd: 'registro academico formal', g1Ex: 'No obstante lo anterior', g1ExM: 'Notwithstanding the foregoing',
  g2: 'Pretérito anterior', g2Rd: 'preterito anterior', g2Ex: 'Hubo llegado cuando...', g2ExM: 'He had arrived when...',
  topics: [['Disertación','disertacion'],['Oratoria','oratoria'],['Polémica','polemica'],['Exégesis','exegesis'],['Epistemología','epistemologia'],['Dialéctica','dialectica'],['Hermenéutica','hermeneutica'],['Relaciones internacionales','relaciones internacionales'],['Derecho constitucional','derecho constitucional'],['Estrategia global','estrategia global'],['Economía política','economia politica'],['Gobernanza','gobernanza'],['Cognición','cognicion'],['Cosmología','cosmologia'],['Ética de la IA','etica de la ia'],['Biopolítica','biopolitica'],['Teoría literaria','teoria literaria'],['Estética','estetica'],['Arquitectura sostenible','arquitectura sostenible'],['Decrecimiento','decrecimiento'],['Poscolonialismo','poscolonialismo'],['Fenomenología','fenomenologia']],
});

export const arC2Lessons = makeL5('ar', 'C2', 'Arabic', {
  g1: 'الأسلوب الأدبي الرفيع', g1Rd: 'al-uslub al-adabi ar-rafi', g1Ex: 'إذ لم يكن بدّ من ذلك', g1ExM: 'Since it was unavoidable',
  g2: 'النحو المتقدم', g2Rd: 'an-nahw al-mutaqaddim', g2Ex: 'المنصوبات والمجرورات', g2ExM: 'Accusatives and genitives',
  topics: [['أطروحة','utruha'],['فن الخطابة','fan al-khataba'],['جدل','jadal'],['تفسير','tafsir'],['نظرية المعرفة','nazariyat al-marifa'],['جدلية','jadaliya'],['تأويل','tawil'],['علاقات دولية','alaqat dawliya'],['قانون دستوري','qanun dusturi'],['استراتيجية عالمية','istratijiya alamiya'],['اقتصاد سياسي','iqtisad siyasi'],['حوكمة','hawkama'],['إدراك','idrak'],['علم الكون','ilm al-kawn'],['أخلاقيات الذكاء','akhlaqiyat adh-dhaka'],['سياسة حيوية','siyasa hayawiya'],['نظرية أدبية','nazariya adabiya'],['جماليات','jamaliyat'],['عمارة مستدامة','imara mustadama'],['تراجع النمو','taraju an-numuw'],['ما بعد الاستعمار','ma bad al-istimar'],['ظاهراتية','zaharatiya']],
});

export const hiC2Lessons = makeL5('hi', 'C2', 'Hindi', {
  g1: 'शुद्ध हिंदी शैली', g1Rd: 'shuddh hindi shaili', g1Ex: 'तथापि, अतएव', g1ExM: 'However, therefore (formal)',
  g2: 'प्राचीन व्याकरण', g2Rd: 'prachin vyakaran', g2Ex: 'द्विवचन, विभक्ति', g2ExM: 'Dual number, case endings',
  topics: [['शोध प्रबंध','shodh prabandh'],['वक्तृत्व कला','vaktritva kala'],['विवादात्मक','vivadatmak'],['व्याख्या','vyakhya'],['ज्ञानमीमांसा','gyanmimansa'],['द्वंद्ववाद','dvandvavad'],['व्याख्याशास्त्र','vyakhyashastra'],['अंतरराष्ट्रीय संबंध','antarrashtriya sambandh'],['संविधानिक कानून','samvidhaanik kanun'],['वैश्विक रणनीति','vaishvik ranniti'],['राजनीतिक अर्थशास्त्र','rajnitik arthashastra'],['शासन','shasan'],['संज्ञान','sangyan'],['ब्रह्मांड विज्ञान','brahmand vigyan'],['कृत्रिम बुद्धिमत्ता नैतिकता','kritrim buddhimatta naitikta'],['जैवराजनीति','jaivrajniti'],['साहित्यिक सिद्धांत','sahityik siddhant'],['सौंदर्यशास्त्र','saundaryashastra'],['टिकाऊ वास्तुकला','tikau vastukala'],['विकासहीनता','vikashinta'],['उत्तर-उपनिवेशवाद','uttar upniveshvad'],['घटनाविज्ञान','ghatnavigyan']],
});

// Removed tr, vi, th, nl, pl C2 lessons (consolidated to top 10)
