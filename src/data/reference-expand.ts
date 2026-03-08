import { GrammarEntry, VocabEntry } from './types';

// ─── EXPANDED GRAMMAR ───
export const GRAMMAR_EXPAND: Record<string, GrammarEntry[]> = {
  en: [
    // === A1 extras ===
    { title: 'Possessive Adjectives & Pronouns', level: 'A1', category: 'sentence', explanation: 'Adjectives: my, your, his, her, its, our, their. Pronouns: mine, yours, his, hers, ours, theirs. Adjectives go before nouns; pronouns replace them.', examples: [{ text: "This is my book. It's mine.", translation: 'Este es mi libro. Es mío.' }, { text: "That's their house. It's theirs.", translation: 'Esa es su casa. Es de ellos.' }] },
    { title: 'There is / There are', level: 'A1', category: 'sentence', explanation: 'There is + singular/uncountable. There are + plural. Negative: There isn\'t / There aren\'t. Questions: Is there...? / Are there...?', examples: [{ text: 'There is a park near my house.', translation: 'Hay un parque cerca de mi casa.' }, { text: 'Are there any shops?', translation: '¿Hay tiendas?' }] },
    { title: 'Imperatives', level: 'A1', category: 'verbs', explanation: 'Base form of verb for commands. Negative: Don\'t + base form. Polite: Please + imperative.', examples: [{ text: 'Open the door, please.', translation: 'Abre la puerta, por favor.' }, { text: "Don't run in the hall.", translation: 'No corras en el pasillo.' }] },
    { title: 'Countable vs Uncountable Nouns', level: 'A1', category: 'sentence', explanation: 'Countable: a/an, some, many, few. Uncountable: some, much, little. Both: a lot of, any. Common uncountable: water, information, advice, furniture.', examples: [{ text: 'I have many friends but little time.', translation: 'Tengo muchos amigos pero poco tiempo.' }, { text: 'Can I have some water?', translation: '¿Puedo tener un poco de agua?' }] },
    { title: 'Question Words', level: 'A1', category: 'expressions', explanation: 'What (qué), Where (dónde), When (cuándo), Who (quién), Why (por qué), How (cómo), Which (cuál), Whose (de quién), How many/much (cuánto).', examples: [{ text: 'Where do you live?', translation: '¿Dónde vives?' }, { text: 'How many languages do you speak?', translation: '¿Cuántos idiomas hablas?' }] },

    // === A2 extras ===
    { title: 'Comparative & Superlative', level: 'A2', category: 'adjectives', explanation: 'Short adj: -er/-est. Long adj: more/most. Irregular: good→better→best, bad→worse→worst, far→further→furthest.', examples: [{ text: 'She is taller than me.', translation: 'Ella es más alta que yo.' }, { text: "It's the most beautiful city.", translation: 'Es la ciudad más bonita.' }] },
    { title: 'Past Continuous', level: 'A2', category: 'verbs', explanation: 'was/were + -ing. Describes actions in progress at a past time. Often with Past Simple: While I was cooking, the phone rang.', examples: [{ text: 'I was studying at 8 PM.', translation: 'Estaba estudiando a las 8.' }, { text: 'While she was sleeping, it started to rain.', translation: 'Mientras dormía, empezó a llover.' }] },
    { title: 'Used to + infinitive', level: 'A2', category: 'verbs', explanation: 'Past habits or states that no longer exist. Only past form. Not for "one-time" events. Be used to + -ing = accustomed to.', examples: [{ text: 'I used to play football.', translation: 'Solía jugar fútbol.' }, { text: "She didn't use to like coffee.", translation: 'A ella no le gustaba el café.' }] },
    { title: 'First Conditional', level: 'A2', category: 'sentence', explanation: 'If + present simple, will + infinitive. Real possibility in the future. Unless = if not.', examples: [{ text: "If it rains, I'll stay home.", translation: 'Si llueve, me quedaré en casa.' }, { text: "Unless you hurry, you'll miss the bus.", translation: 'A menos que te apures, perderás el bus.' }] },
    { title: 'Adverbs of Frequency', level: 'A2', category: 'expressions', explanation: 'Always (100%), usually (80%), often (60%), sometimes (40%), rarely (10%), never (0%). Position: before main verb, after be.', examples: [{ text: 'I always drink coffee in the morning.', translation: 'Siempre tomo café por la mañana.' }, { text: 'She is rarely late.', translation: 'Ella rara vez llega tarde.' }] },

    // === B1 extras ===
    { title: 'Present Perfect Continuous', level: 'B1', category: 'verbs', explanation: 'have/has been + -ing. Actions started in past, continuing now. With for/since. Focus on duration, not completion.', examples: [{ text: "I've been waiting for two hours.", translation: 'He estado esperando dos horas.' }, { text: "She's been learning English since 2020.", translation: 'Ella ha estado aprendiendo inglés desde 2020.' }] },
    { title: 'Second Conditional', level: 'B1', category: 'sentence', explanation: 'If + past simple, would + infinitive. Imaginary/unlikely present/future. If I were (not was) for formal.', examples: [{ text: 'If I had a million dollars, I would travel the world.', translation: 'Si tuviera un millón de dólares, viajaría por el mundo.' }, { text: 'If I were you, I would study harder.', translation: 'Si yo fuera tú, estudiaría más.' }] },
    { title: 'Third Conditional', level: 'B1', category: 'sentence', explanation: 'If + past perfect, would have + past participle. Imaginary past — things that didn\'t happen. Expressing regret.', examples: [{ text: 'If I had studied, I would have passed.', translation: 'Si hubiera estudiado, habría aprobado.' }, { text: 'If she had come, she would have met him.', translation: 'Si hubiera venido, lo habría conocido.' }] },
    { title: 'Wish + Past Simple/Past Perfect', level: 'B1', category: 'sentence', explanation: 'Wish + past simple: unreal present. Wish + past perfect: regret about past. Wish + would: complaints about others.', examples: [{ text: 'I wish I spoke French.', translation: 'Ojalá hablara francés.' }, { text: 'I wish I had studied medicine.', translation: 'Ojalá hubiera estudiado medicina.' }] },
    { title: 'Defining vs Non-defining Relative Clauses', level: 'B1', category: 'sentence', explanation: 'Defining: essential info, no commas, who/that/which. Non-defining: extra info, commas, who/which (NOT that).', examples: [{ text: 'The man who lives next door is a doctor.', translation: 'El hombre que vive al lado es médico.' }, { text: 'My sister, who lives in London, is a teacher.', translation: 'Mi hermana, que vive en Londres, es profesora.' }] },

    // === B2 extras ===
    { title: 'Mixed Conditionals', level: 'B2', category: 'sentence', explanation: 'Past condition → present result: If + past perfect, would + infinitive. Present condition → past result: If + past simple, would have + pp.', examples: [{ text: 'If I had studied law, I would be a lawyer now.', translation: 'Si hubiera estudiado derecho, sería abogado ahora.' }, { text: 'If I were braver, I would have spoken up.', translation: 'Si fuera más valiente, habría hablado.' }] },
    { title: 'Causative (have/get something done)', level: 'B2', category: 'sentence', explanation: 'have + object + past participle = arrange for someone to do something. get + object + pp = similar but more informal. get + object + to + infinitive = persuade.', examples: [{ text: 'I had my car repaired.', translation: 'Hice que me arreglaran el coche.' }, { text: 'She got her hair cut.', translation: 'Se cortó el pelo (se lo cortaron).' }] },
    { title: 'Future Perfect & Future Continuous', level: 'B2', category: 'verbs', explanation: 'Future Perfect: will have + pp (completed by a future time). Future Continuous: will be + -ing (in progress at a future time).', examples: [{ text: "By 2030, I'll have finished my PhD.", translation: 'Para 2030, habré terminado mi doctorado.' }, { text: "This time tomorrow, I'll be flying to Paris.", translation: 'Mañana a esta hora, estaré volando a París.' }] },
    { title: 'Participle Clauses', level: 'B2', category: 'advanced', explanation: 'Present participle (-ing): active meaning. Past participle (-ed): passive meaning. Reduce relative/time/reason clauses.', examples: [{ text: 'Written in 1960, the book is still relevant.', translation: 'Escrito en 1960, el libro sigue siendo relevante.' }, { text: 'Walking home, I saw a deer.', translation: 'Caminando a casa, vi un ciervo.' }] },
    { title: 'Narrative Tenses', level: 'B2', category: 'verbs', explanation: 'Past Simple (main events), Past Continuous (background), Past Perfect (earlier events), Past Perfect Continuous (duration before). Combine for rich storytelling.', examples: [{ text: 'He had been running for an hour when it started to rain.', translation: 'Llevaba una hora corriendo cuando empezó a llover.' }] },

    // === C1 extras ===
    { title: 'Subjunctive Mood', level: 'C1', category: 'advanced', explanation: 'Formal/literary: suggest/demand/insist that + subject + base verb. It is important/vital/essential that he be present. Were in hypotheticals.', examples: [{ text: 'I suggest that she be promoted.', translation: 'Sugiero que sea ascendida.' }, { text: 'If I were to accept, what would happen?', translation: 'Si aceptara, ¿qué pasaría?' }] },
    { title: 'Advanced Modals for Speculation', level: 'C1', category: 'verbs', explanation: 'Must have + pp (near certainty about past). Can\'t have + pp (impossibility). Might/Could have + pp (possibility). Should have + pp (criticism).', examples: [{ text: 'She must have forgotten the meeting.', translation: 'Debe haberse olvidado de la reunión.' }, { text: "He can't have said that!", translation: '¡No puede haber dicho eso!' }] },
    { title: 'Fronting & Emphasis', level: 'C1', category: 'advanced', explanation: 'What + clause + is/was... It + is/was + focus + that/who... Not until... Only when... So + adj + that...', examples: [{ text: 'What I need is a break.', translation: 'Lo que necesito es un descanso.' }, { text: 'Not until she left did I realize.', translation: 'No fue hasta que se fue que me di cuenta.' }] },
    { title: 'Discourse Markers', level: 'C1', category: 'advanced', explanation: 'Adding: moreover, furthermore, what is more. Contrasting: nevertheless, on the other hand. Concluding: to sum up, all in all. Sequencing: first of all, subsequently.', examples: [{ text: 'The plan is ambitious. Nevertheless, it is feasible.', translation: 'El plan es ambicioso. Sin embargo, es factible.' }] },

    // === C2 ===
    { title: 'Ellipsis & Substitution', level: 'C2', category: 'advanced', explanation: 'Ellipsis: omitting words to avoid repetition. "Would you like some?" (omit "cake"). Substitution: using "so", "do so", "one/ones" to replace.', examples: [{ text: "I asked him to help and he did (so).", translation: 'Le pedí ayuda y lo hizo.' }, { text: "She can swim but he can't.", translation: 'Ella sabe nadar pero él no.' }] },
    { title: 'Register & Style', level: 'C2', category: 'advanced', explanation: 'Formal: Latinate vocabulary, passive voice, complex syntax. Informal: phrasal verbs, contractions, shorter sentences. Academic: hedging (tend to, arguably, it appears that).', examples: [{ text: 'commence → start → kick off', translation: 'iniciar (formal → informal → coloquial)' }, { text: 'It could be argued that...', translation: 'Se podría argumentar que...' }] },
    { title: 'Pragmatics & Implicature', level: 'C2', category: 'advanced', explanation: 'Understanding implied meaning beyond literal words. Irony, understatement, hedging, indirect requests. "Could you possibly..." vs "Do it."', examples: [{ text: '"Nice weather." (said during a storm = irony)', translation: '"Bonito tiempo." (ironía durante tormenta)' }, { text: '"I\'m not entirely sure that\'s correct."', translation: '"No estoy del todo seguro de que sea correcto." (= está mal)' }] },
  ],

  ko: [
    // === TOPIK1 ===
    { title: '이다/아니다 — Ser/No ser', level: 'TOPIK1', category: 'verbs', explanation: '이다 se une a sustantivos para "ser". 아니다 para "no ser". Formal: -입니다/-입니까. Informal: -이에요/-예요.', examples: [{ text: '저는 학생입니다', translation: 'Yo soy estudiante' }, { text: '이것은 책이 아닙니다', translation: 'Esto no es un libro' }] },
    { title: '조사 — Partículas básicas', level: 'TOPIK1', category: 'particles', explanation: '은/는 (tema), 이/가 (sujeto), 을/를 (objeto), 에 (lugar/tiempo), 에서 (desde/en), 으로/로 (dirección/medio), 와/과/하고 (y).', examples: [{ text: '저는 한국어를 공부해요', translation: 'Yo estudio coreano' }, { text: '학교에서 공부해요', translation: 'Estudio en la escuela' }] },
    { title: '존댓말 vs 반말 — Niveles de formalidad', level: 'TOPIK1', category: 'expressions', explanation: '존댓말 (formal/educado): -습니다/-아요. 반말 (informal): -아/-어. 4 niveles principales. Crucial en interacciones sociales.', examples: [{ text: '먹습니다 / 먹어요 / 먹어', translation: 'Come (muy formal / educado / informal)' }] },
    { title: '과거시제 — Pasado', level: 'TOPIK1', category: 'verbs', explanation: 'Raíz + -았/었/였 + terminación. 하다→했다. 먹다→먹었다. 가다→갔다.', examples: [{ text: '어제 영화를 봤어요', translation: 'Ayer vi una película' }, { text: '한국에 갔어요', translation: 'Fui a Corea' }] },
    { title: '미래시제 — Futuro', level: 'TOPIK1', category: 'verbs', explanation: '-(으)ㄹ 거예요 para intención/predicción. -(으)ㄹ게요 para promesa. -(으)려고 하다 para planes.', examples: [{ text: '내일 갈 거예요', translation: 'Iré mañana' }, { text: '제가 할게요', translation: 'Yo lo haré (promesa)' }] },

    // === TOPIK2 ===
    { title: '-(으)면 — Condicional', level: 'TOPIK2', category: 'sentence', explanation: 'Raíz + -(으)면 = si/cuando. 비가 오면 = si llueve. Similar a "if" en inglés.', examples: [{ text: '시간이 있으면 만나요', translation: 'Si tienes tiempo, nos vemos' }, { text: '한국에 가면 김치를 먹을 거예요', translation: 'Si voy a Corea, comeré kimchi' }] },
    { title: '-(으)ㄹ 수 있다/없다 — Poder/No poder', level: 'TOPIK2', category: 'verbs', explanation: 'Raíz + -(으)ㄹ 수 있다 = poder hacer. 없다 = no poder. Alternativa: 못 + verbo.', examples: [{ text: '한국어를 말할 수 있어요', translation: 'Puedo hablar coreano' }, { text: '갈 수 없어요 / 못 가요', translation: 'No puedo ir' }] },
    { title: '-고 싶다 — Querer hacer', level: 'TOPIK2', category: 'verbs', explanation: 'Raíz + -고 싶다 = querer hacer. Negativo: -고 싶지 않다. Para otros: -고 싶어하다.', examples: [{ text: '한국에 가고 싶어요', translation: 'Quiero ir a Corea' }, { text: '뭐 먹고 싶어요?', translation: '¿Qué quieres comer?' }] },
    { title: '-아/어서 vs -(으)니까 — Causa', level: 'TOPIK2', category: 'sentence', explanation: '-아/어서: causa natural/secuencia. -(으)니까: razón subjetiva, usada con imperativos y sugerencias.', examples: [{ text: '비가 와서 집에 있었어요', translation: 'Llovió así que me quedé en casa' }, { text: '추우니까 코트를 입으세요', translation: 'Hace frío, así que ponte abrigo' }] },
    { title: '-(으)면서 — Mientras', level: 'TOPIK2', category: 'sentence', explanation: 'Raíz + -(으)면서 = mientras hace dos cosas simultáneas. Mismo sujeto para ambas acciones.', examples: [{ text: '음악을 들으면서 공부해요', translation: 'Estudio mientras escucho música' }] },
    { title: '-겠- — Intención/Suposición', level: 'TOPIK2', category: 'verbs', explanation: 'Intención formal: 가겠습니다 (iré). Suposición: 춥겠다 (debe hacer frío). Común en contextos formales.', examples: [{ text: '열심히 하겠습니다', translation: 'Me esforzaré (promesa formal)' }, { text: '맛있겠다!', translation: '¡Debe estar delicioso!' }] },
  ],

  jp: [
    // Extra N5
    { title: 'Demostrativos: これ・それ・あれ', level: 'N5', category: 'expressions', explanation: 'これ (esto, cerca del hablante), それ (eso, cerca del oyente), あれ (aquello, lejos de ambos). この/その/あの + sustantivo.', examples: [{ text: 'これは何ですか？', translation: '¿Qué es esto?' }, { text: 'あの建物は病院です', translation: 'Aquel edificio es un hospital' }] },
    { title: 'Números y Contadores', level: 'N5', category: 'expressions', explanation: 'Sistema japonés (ひとつ〜とお) y chino (いち〜じゅう). Contadores: 人 (personas), 匹 (animales), 冊 (libros), 枚 (planos), 台 (máquinas), 杯 (vasos).', examples: [{ text: '猫が三匹います', translation: 'Hay tres gatos' }, { text: '水を一杯ください', translation: 'Un vaso de agua, por favor' }] },
    // Extra N3
    { title: '敬語の基本 — Keigo básico', level: 'N3', category: 'expressions', explanation: 'Tres niveles: 丁寧語 (ます/です), 尊敬語 (honrar al otro), 謙譲語 (humillarse). Fundamental en negocios y relaciones sociales.', examples: [{ text: '食べる → 召し上がる (尊敬) → いただく (謙譲)', translation: 'Comer → Come (honorífico) → Como (humilde)' }] },
    { title: '～ても / ～でも — Aunque/Incluso si', level: 'N3', category: 'sentence', explanation: 'て-form + も = incluso si/aunque. Expresa que el resultado no cambia sin importar la condición.', examples: [{ text: '雨が降っても行きます', translation: 'Iré aunque llueva' }, { text: 'いくら食べても太らない', translation: 'Por más que coma, no engordo' }] },
  ],

  fr: [
    // Extra A1
    { title: 'Le genre des noms', level: 'A1', category: 'sentence', explanation: 'Masculin/féminin. Pistas: -tion/-sion = fem, -ment = masc, -eur = masc (sauf fleur/couleur). Aprender con artículo.', examples: [{ text: 'un problème (m) / une solution (f)', translation: 'un problema / una solución' }] },
    { title: 'Aller + infinitif — Futuro próximo', level: 'A1', category: 'verbs', explanation: 'je vais, tu vas, il va, nous allons, vous allez, ils vont + infinitivo. Muy usado en francés oral.', examples: [{ text: 'Je vais manger', translation: 'Voy a comer' }] },
    // Extra B2
    { title: 'Gérondif (en + participe présent)', level: 'B2', category: 'advanced', explanation: 'en + -ant: simultaneidad, medio, condición. Solo mismo sujeto. Participio presente sin "en" = adjetif verbal.', examples: [{ text: 'En étudiant, j\'ai compris', translation: 'Estudiando, entendí' }, { text: 'Tout en parlant, il mangeait', translation: 'Mientras hablaba, comía' }] },
    { title: 'Mise en relief — Énfasis', level: 'B2', category: 'advanced', explanation: "C'est...qui/que para enfatizar. Ce qui/Ce que/Ce dont al inicio. Voilà ce que je veux dire.", examples: [{ text: "C'est Paris que je préfère.", translation: 'Es París lo que prefiero.' }, { text: 'Ce dont j\'ai besoin, c\'est du repos.', translation: 'Lo que necesito es descanso.' }] },
  ],

  zh: [
    // Extra HSK2
    { title: '又...又... — Tanto...como...', level: 'HSK2', category: 'sentence', explanation: 'Estructura para expresar dos cualidades simultáneas. Ambas positivas o ambas negativas.', examples: [{ text: '这个菜又好吃又便宜', translation: 'Este plato es rico y barato a la vez' }] },
    // Extra HSK4
    { title: '不但...而且... — No solo...sino también', level: 'HSK4', category: 'sentence', explanation: 'Estructura progresiva: la segunda parte es más fuerte/importante que la primera.', examples: [{ text: '他不但会说中文，而且说得很好', translation: 'No solo habla chino, sino que lo habla muy bien' }] },
    { title: '无论/不管...都... — Sin importar', level: 'HSK4', category: 'advanced', explanation: 'Concesión absoluta. 无论 más formal que 不管. Seguido de pregunta o alternativa.', examples: [{ text: '无论你去哪里，我都跟着你', translation: 'No importa a dónde vayas, te seguiré' }] },
  ],

  es: [
    // Extra A1
    { title: 'Pronombres personales', level: 'A1', category: 'sentence', explanation: 'yo, tú, él/ella/usted, nosotros, vosotros, ellos/ustedes. En Latinoamérica: ustedes reemplaza vosotros. En Argentina: vos reemplaza tú.', examples: [{ text: 'Yo soy de España / Nosotros somos amigos', translation: 'I am from Spain / We are friends' }] },
    { title: 'Gustar y verbos similares', level: 'A1', category: 'verbs', explanation: 'Me gusta + singular/infinitivo. Me gustan + plural. Igual: encantar, interesar, molestar, doler, importar, parecer.', examples: [{ text: 'Me gusta el café / Me gustan los gatos', translation: 'I like coffee / I like cats' }, { text: 'Me duele la cabeza', translation: 'My head hurts' }] },
    // Extra B1
    { title: 'Pretérito pluscuamperfecto', level: 'B1', category: 'verbs', explanation: 'Había + participio. Acción anterior a otra pasada. "Ya había comido cuando llegó."', examples: [{ text: 'Cuando llegué, ya se habían ido', translation: 'When I arrived, they had already left' }] },
    // Extra B2
    { title: 'Oraciones condicionales mixtas', level: 'B2', category: 'advanced', explanation: 'Si + pluscuamperfecto subjuntivo, condicional simple (pasado→presente). Si + imperfecto subjuntivo, condicional compuesto (presente→pasado).', examples: [{ text: 'Si hubiera estudiado, ahora tendría trabajo', translation: 'If I had studied, I would have a job now' }] },
  ],

  pt: [
    { title: 'Português do Brasil vs de Portugal', level: 'A1', category: 'expressions', explanation: 'BR: gerúndio (estou fazendo), você, ônibus, trem, celular. PT: a + infinitivo (estou a fazer), tu, autocarro, comboio, telemóvel.', examples: [{ text: 'BR: Estou comendo / PT: Estou a comer', translation: 'Estoy comiendo' }] },
    { title: 'Pretérito mais-que-perfeito composto', level: 'B1', category: 'verbs', explanation: 'tinha/tinhas/tinha/tínhamos/tinham + participio. Acción anterior a otra pasada.', examples: [{ text: 'Quando cheguei, ele já tinha saído', translation: 'Cuando llegué, él ya se había ido' }] },
    { title: 'Voz passiva com "se"', level: 'B2', category: 'advanced', explanation: 'Verbo + se: pasiva pronominal. Muy usada en portugués. "Fala-se português" = Se habla portugués.', examples: [{ text: 'Aqui fala-se português', translation: 'Aquí se habla portugués' }, { text: 'Vendem-se casas', translation: 'Se venden casas' }] },
  ],

  ru: [
    { title: 'Вид глагола — Aspecto verbal', level: 'A2', category: 'verbs', explanation: 'Imperfectivo: proceso, hábito, repetición. Perfectivo: resultado, una vez, completado. Cada verbo tiene par: читать(imp)/прочитать(perf).', examples: [{ text: 'Я читал книгу (proceso) / Я прочитал книгу (terminé)', translation: 'Leía el libro / Leí el libro (terminé)' }] },
    { title: 'Возвратные глаголы (-ся/-сь)', level: 'B1', category: 'verbs', explanation: 'Sufijo -ся/-сь: reflexivo, recíproco, pasivo, intransitivo. одеваться (vestirse), встречаться (encontrarse), нравиться (gustar).', examples: [{ text: 'Я умываюсь утром', translation: 'Me lavo por la mañana' }, { text: 'Мы встречаемся каждую неделю', translation: 'Nos vemos cada semana' }] },
  ],

  ar: [
    { title: 'الإعراب — Declinación', level: 'B1', category: 'advanced', explanation: 'Tres casos: مرفوع (nominativo, -u), منصوب (acusativo, -a), مجرور (genitivo, -i). Aparecen como diacríticos (ضمة، فتحة، كسرة).', examples: [{ text: 'جاء الطالبُ (nominativo)', translation: 'El estudiante vino' }, { text: 'رأيتُ الطالبَ (acusativo)', translation: 'Vi al estudiante' }] },
    { title: 'الفعل الأمر — Imperativo', level: 'A2', category: 'verbs', explanation: 'Se forma del presente (مضارع). Quitar prefijo, si empieza con consonante cluster añadir اِ. Masculino/femenino/plural.', examples: [{ text: 'اُكتُب! (masc.) / اُكتُبي! (fem.)', translation: '¡Escribe!' }] },
  ],

  hi: [
    { title: 'विशेषण — Adjetivos', level: 'A1', category: 'adjectives', explanation: 'Terminados en -ा cambian por género y número: अच्छा/अच्छी/अच्छे. Terminados en consonante no cambian: सुंदर.', examples: [{ text: 'अच्छा लड़का / अच्छी लड़की / अच्छे लड़के', translation: 'Buen chico / Buena chica / Buenos chicos' }] },
    { title: 'संबंधवाचक — Posesivos', level: 'A1', category: 'sentence', explanation: 'मेरा/मेरी/मेरे (mi), तुम्हारा (tu), उसका/उसकी (su), हमारा (nuestro). Cambian con género del poseído.', examples: [{ text: 'मेरा नाम... है / मेरी किताब', translation: 'Mi nombre es... / Mi libro' }] },
  ],

  ro: [
    { title: 'Articolul hotărât enclitic — Artículo definido', level: 'A1', category: 'sentence', explanation: 'Se añade al final del sustantivo: om→omul (el hombre), casă→casa (la casa), copil→copilul. Diferente del español/francés.', examples: [{ text: 'om → omul / casă → casa', translation: 'hombre → el hombre / casa → la casa' }] },
    { title: 'Cazuri — Casos gramaticales', level: 'A2', category: 'advanced', explanation: 'Rumano tiene 5 casos: Nominativ, Acuzativ, Genitiv, Dativ, Vocativ. Genitiv-Dativ comparten forma. Afectan artículos y adjetivos.', examples: [{ text: 'Cartea elevului (genitivo)', translation: 'El libro del alumno' }, { text: 'Dau elevului cartea (dativo)', translation: 'Le doy al alumno el libro' }] },
  ],
};

// ─── EXPANDED VOCABULARY ───
export const VOCAB_EXPAND: Record<string, Record<string, VocabEntry[]>> = {
  en: {
    B2: [
      { word: 'Accountability', meaning: 'Responsabilidad/Rendición de cuentas', example: 'There must be accountability for these decisions.' },
      { word: 'Ambiguous', meaning: 'Ambiguo', example: 'The instructions were ambiguous.' },
      { word: 'Consensus', meaning: 'Consenso', example: 'We reached a consensus after hours of debate.' },
      { word: 'Dilemma', meaning: 'Dilema', example: 'She faced a moral dilemma.' },
      { word: 'Elaborate', meaning: 'Elaborar/Elaborado', example: 'Could you elaborate on that point?' },
      { word: 'Fluctuate', meaning: 'Fluctuar', example: 'Prices fluctuate throughout the year.' },
      { word: 'Genuine', meaning: 'Genuino/Auténtico', example: 'She showed genuine concern.' },
      { word: 'Hypothesis', meaning: 'Hipótesis', example: 'We need to test this hypothesis.' },
      { word: 'Implement', meaning: 'Implementar', example: "We'll implement the new policy next month." },
      { word: 'Jeopardize', meaning: 'Poner en peligro', example: "Don't jeopardize your career." },
      { word: 'Legitimate', meaning: 'Legítimo', example: 'Is this a legitimate concern?' },
      { word: 'Neglect', meaning: 'Descuidar/Negligencia', example: 'They neglected their responsibilities.' },
      { word: 'Overwhelming', meaning: 'Abrumador', example: 'The evidence was overwhelming.' },
      { word: 'Perspective', meaning: 'Perspectiva', example: 'Try to see it from a different perspective.' },
      { word: 'Sustainable', meaning: 'Sostenible', example: 'We need sustainable development.' },
    ],
    C1: [
      { word: 'Advocate', meaning: 'Abogar/Defensor', example: 'She advocates for human rights.' },
      { word: 'Bureaucracy', meaning: 'Burocracia', example: 'Excessive bureaucracy slows progress.' },
      { word: 'Commemorate', meaning: 'Conmemorar', example: 'We commemorate the founding of the city.' },
      { word: 'Deteriorate', meaning: 'Deteriorar', example: 'His health began to deteriorate.' },
      { word: 'Eloquent', meaning: 'Elocuente', example: 'She gave an eloquent speech.' },
      { word: 'Feasible', meaning: 'Factible', example: 'Is this plan feasible?' },
      { word: 'Imminent', meaning: 'Inminente', example: 'A storm is imminent.' },
      { word: 'Litigation', meaning: 'Litigio', example: 'The company faces costly litigation.' },
      { word: 'Meticulous', meaning: 'Meticuloso', example: 'She is meticulous in her work.' },
      { word: 'Paradigm', meaning: 'Paradigma', example: 'A paradigm shift in education.' },
      { word: 'Resilient', meaning: 'Resiliente', example: 'Children are remarkably resilient.' },
      { word: 'Scrutinize', meaning: 'Examinar minuciosamente', example: 'The report was scrutinized carefully.' },
      { word: 'Unprecedented', meaning: 'Sin precedentes', example: 'An unprecedented global crisis.' },
      { word: 'Vulnerable', meaning: 'Vulnerable', example: 'Protect the most vulnerable communities.' },
      { word: 'Yield', meaning: 'Ceder/Rendir', example: 'The investment yielded good returns.' },
    ],
    C2: [
      { word: 'Acquiesce', meaning: 'Consentir/Acceder', example: 'She acquiesced to the demands reluctantly.' },
      { word: 'Belligerent', meaning: 'Beligerante', example: 'His belligerent attitude caused problems.' },
      { word: 'Conundrum', meaning: 'Enigma/Dilema', example: 'This presents a philosophical conundrum.' },
      { word: 'Disparate', meaning: 'Dispar/Desigual', example: 'Disparate communities with different needs.' },
      { word: 'Ephemeral', meaning: 'Efímero', example: 'Fame can be ephemeral.' },
      { word: 'Idiosyncratic', meaning: 'Idiosincrático', example: 'His idiosyncratic teaching style.' },
      { word: 'Juxtapose', meaning: 'Yuxtaponer', example: 'The artist juxtaposed light and dark.' },
      { word: 'Magnanimous', meaning: 'Magnánimo', example: 'A magnanimous gesture of forgiveness.' },
      { word: 'Obfuscate', meaning: 'Ofuscar/Confundir', example: "Don't obfuscate the issue with jargon." },
      { word: 'Quintessential', meaning: 'Esencial/Arquetípico', example: "It's the quintessential British film." },
      { word: 'Surreptitious', meaning: 'Subrepticio', example: 'A surreptitious glance across the room.' },
      { word: 'Ubiquitous', meaning: 'Ubicuo', example: 'Smartphones have become ubiquitous.' },
    ],
  },

  jp: {
    N2: [
      { word: '貢献', reading: 'kouken', meaning: 'Contribución', example: '社会に貢献する' },
      { word: '矛盾', reading: 'mujun', meaning: 'Contradicción', example: '言動に矛盾がある' },
      { word: '把握', reading: 'haaku', meaning: 'Comprensión/Dominio', example: '状況を把握する' },
      { word: '妥協', reading: 'dakyou', meaning: 'Compromiso', example: 'お互いに妥協する' },
      { word: '偏見', reading: 'henken', meaning: 'Prejuicio', example: '偏見をなくす' },
      { word: '維持', reading: 'iji', meaning: 'Mantenimiento', example: '健康を維持する' },
      { word: '促進', reading: 'sokushin', meaning: 'Promoción', example: '国際交流を促進する' },
      { word: '膨大', reading: 'boudai', meaning: 'Enorme', example: '膨大な量のデータ' },
      { word: '傾向', reading: 'keikou', meaning: 'Tendencia', example: '最近の傾向' },
      { word: '実施', reading: 'jisshi', meaning: 'Implementación', example: '新しい政策を実施する' },
      { word: '裁判', reading: 'saiban', meaning: 'Juicio/Tribunal', example: '裁判で勝った' },
      { word: '概念', reading: 'gainen', meaning: 'Concepto', example: '新しい概念を学ぶ' },
    ],
    N1: [
      { word: '恣意的', reading: 'shiiteki', meaning: 'Arbitrario', example: '恣意的な判断' },
      { word: '齟齬', reading: 'sogo', meaning: 'Discrepancia', example: '意見に齟齬がある' },
      { word: '乖離', reading: 'kairi', meaning: 'Divergencia', example: '理想と現実の乖離' },
      { word: '蓋然性', reading: 'gaizensei', meaning: 'Probabilidad', example: '蓋然性が高い' },
      { word: '劣化', reading: 'rekka', meaning: 'Deterioro', example: '品質が劣化する' },
      { word: '逸脱', reading: 'itsudatsu', meaning: 'Desviación', example: '規範から逸脱する' },
      { word: '帰結', reading: 'kiketsu', meaning: 'Consecuencia', example: '論理的な帰結' },
      { word: '俯瞰', reading: 'fukan', meaning: 'Visión panorámica', example: '全体を俯瞰する' },
      { word: '稀有', reading: 'keu', meaning: 'Raro/Excepcional', example: '稀有な才能' },
      { word: '瑕疵', reading: 'kashi', meaning: 'Defecto', example: '瑕疵のない仕事' },
    ],
  },

  ko: {
    TOPIK3: [
      { word: '경제', reading: 'gyeongje', meaning: 'Economía', example: '한국 경제가 성장하고 있어요.' },
      { word: '정치', reading: 'jeongchi', meaning: 'Política', example: '정치에 관심이 있어요.' },
      { word: '사회', reading: 'sahoe', meaning: 'Sociedad', example: '사회 문제를 해결해야 해요.' },
      { word: '환경', reading: 'hwangyeong', meaning: 'Medio ambiente', example: '환경을 보호해야 해요.' },
      { word: '기술', reading: 'gisul', meaning: 'Tecnología', example: '기술이 빠르게 발전해요.' },
      { word: '교육', reading: 'gyoyuk', meaning: 'Educación', example: '교육이 중요해요.' },
      { word: '인구', reading: 'ingu', meaning: 'Población', example: '인구가 줄고 있어요.' },
      { word: '전통', reading: 'jeontong', meaning: 'Tradición', example: '한국의 전통 문화.' },
      { word: '독립', reading: 'dongnip', meaning: 'Independencia', example: '독립을 선언했어요.' },
      { word: '평화', reading: 'pyeonghwa', meaning: 'Paz', example: '세계 평화를 위해.' },
      { word: '자유', reading: 'jayu', meaning: 'Libertad', example: '표현의 자유.' },
      { word: '책임', reading: 'chaegim', meaning: 'Responsabilidad', example: '책임감이 강해요.' },
    ],
  },

  fr: {
    B2: [
      { word: 'cependant', meaning: 'Sin embargo', example: "C'est difficile ; cependant, c'est possible." },
      { word: 'bouleverser', meaning: 'Trastornar', example: 'Cette nouvelle a bouleversé sa vie.' },
      { word: 'épanouissement', meaning: 'Realización personal', example: "L'épanouissement au travail." },
      { word: 'enjeu', meaning: 'Lo que está en juego', example: "C'est un enjeu majeur." },
      { word: 'davantage', meaning: 'Más/Todavía más', example: 'Il faudrait travailler davantage.' },
      { word: 'aboutir', meaning: 'Resultar en', example: 'Les négociations ont abouti à un accord.' },
      { word: 'nuancer', meaning: 'Matizar', example: 'Il faut nuancer son propos.' },
      { word: 'au fur et à mesure', meaning: 'A medida que', example: "Au fur et à mesure qu'il grandissait." },
      { word: 'en dépit de', meaning: 'A pesar de', example: 'En dépit des difficultés, il a réussi.' },
      { word: 'tenir compte de', meaning: 'Tener en cuenta', example: 'Il faut tenir compte de tous les facteurs.' },
    ],
    C1: [
      { word: 'prôner', meaning: 'Preconizar', example: 'Il prône la tolérance.' },
      { word: 'corroborer', meaning: 'Corroborar', example: 'Les données corroborent cette théorie.' },
      { word: 'réfuter', meaning: 'Refutar', example: 'Il est difficile de réfuter cet argument.' },
      { word: 'pérenniser', meaning: 'Perpetuar', example: 'Pérenniser les acquis sociaux.' },
      { word: 'appréhender', meaning: 'Aprehender/Temer', example: "J'appréhende cet examen." },
      { word: 'désuet', meaning: 'Obsoleto', example: 'Une loi devenue désuète.' },
      { word: 'inéluctable', meaning: 'Ineludible', example: 'Le changement est inéluctable.' },
      { word: 'inhérent', meaning: 'Inherente', example: 'Les risques inhérents à cette activité.' },
    ],
  },

  zh: {
    HSK4: [
      { word: '误会', reading: 'wù huì', meaning: 'Malentendido', example: '这是一个误会。' },
      { word: '逐渐', reading: 'zhú jiàn', meaning: 'Gradualmente', example: '天气逐渐变冷了。' },
      { word: '温柔', reading: 'wēn róu', meaning: 'Tierno/Suave', example: '她是一个温柔的人。' },
      { word: '勇敢', reading: 'yǒng gǎn', meaning: 'Valiente', example: '他很勇敢。' },
      { word: '坚持', reading: 'jiān chí', meaning: 'Persistir', example: '你要坚持学习。' },
      { word: '尊重', reading: 'zūn zhòng', meaning: 'Respetar', example: '我们要互相尊重。' },
      { word: '竞争', reading: 'jìng zhēng', meaning: 'Competencia', example: '市场竞争很激烈。' },
      { word: '理想', reading: 'lǐ xiǎng', meaning: 'Ideal', example: '他有远大的理想。' },
      { word: '反映', reading: 'fǎn yìng', meaning: 'Reflejar', example: '这反映了社会问题。' },
      { word: '贡献', reading: 'gòng xiàn', meaning: 'Contribución', example: '他为社会做出了贡献。' },
    ],
    HSK5: [
      { word: '矛盾', reading: 'máo dùn', meaning: 'Contradicción', example: '这两个说法有矛盾。' },
      { word: '抽象', reading: 'chōu xiàng', meaning: 'Abstracto', example: '这个概念太抽象了。' },
      { word: '偏见', reading: 'piān jiàn', meaning: 'Prejuicio', example: '不要对别人有偏见。' },
      { word: '恢复', reading: 'huī fù', meaning: 'Recuperar', example: '他的健康正在恢复。' },
      { word: '妥协', reading: 'tuǒ xié', meaning: 'Compromiso', example: '双方都需要妥协。' },
      { word: '趋势', reading: 'qū shì', meaning: 'Tendencia', example: '这是一个新的趋势。' },
      { word: '维持', reading: 'wéi chí', meaning: 'Mantener', example: '维持世界和平。' },
      { word: '促进', reading: 'cù jìn', meaning: 'Promover', example: '促进经济发展。' },
    ],
  },

  es: {
    B2: [
      { word: 'abarcar', meaning: 'To encompass', example: 'El estudio abarca varios temas.' },
      { word: 'desempeñar', meaning: 'To perform/carry out', example: 'Desempeña un papel fundamental.' },
      { word: 'fomentar', meaning: 'To encourage/promote', example: 'Hay que fomentar la lectura.' },
      { word: 'matiz', meaning: 'Nuance', example: 'Hay matices importantes en el debate.' },
      { word: 'imprescindible', meaning: 'Essential/Indispensable', example: 'Es imprescindible la educación.' },
      { word: 'ámbito', meaning: 'Scope/Field', example: 'En el ámbito profesional.' },
      { word: 'conllevar', meaning: 'To entail', example: 'El puesto conlleva mucha responsabilidad.' },
      { word: 'perjudicar', meaning: 'To harm', example: 'Fumar perjudica la salud.' },
      { word: 'vincular', meaning: 'To link', example: 'Están vinculados económicamente.' },
      { word: 'abordar', meaning: 'To address/tackle', example: 'Debemos abordar este problema.' },
      { word: 'transcurrir', meaning: 'To elapse/pass', example: 'Los años transcurren rápido.' },
      { word: 'plantear', meaning: 'To pose/raise', example: 'Le planteé una pregunta difícil.' },
    ],
    C1: [
      { word: 'coadyuvar', meaning: 'To contribute', example: 'Todos debemos coadyuvar al progreso.' },
      { word: 'soslayar', meaning: 'To avoid/sidestep', example: 'No podemos soslayar el problema.' },
      { word: 'escrutar', meaning: 'To scrutinize', example: 'Escrutó el documento con atención.' },
      { word: 'subyacer', meaning: 'To underlie', example: 'Las causas que subyacen al conflicto.' },
      { word: 'elucidar', meaning: 'To elucidate', example: 'Es necesario elucidar los hechos.' },
      { word: 'menoscabar', meaning: 'To diminish/undermine', example: 'Eso menoscaba su autoridad.' },
      { word: 'dilucidar', meaning: 'To clarify', example: 'Hay que dilucidar la verdad.' },
      { word: 'acaecer', meaning: 'To occur/happen', example: 'Los hechos que acaecieron ese día.' },
    ],
  },

  ru: {
    B1: [
      { word: 'важный', reading: 'vazhnyy', meaning: 'Importante', example: 'Это очень важный вопрос.' },
      { word: 'решение', reading: 'reshenie', meaning: 'Decisión/Solución', example: 'Хорошее решение!' },
      { word: 'общество', reading: 'obshchestvo', meaning: 'Sociedad', example: 'Современное общество.' },
      { word: 'будущее', reading: 'budushchee', meaning: 'Futuro', example: 'В будущем всё изменится.' },
      { word: 'независимость', reading: 'nezavisimost', meaning: 'Independencia', example: 'Независимость страны.' },
      { word: 'справедливость', reading: 'spravedlivost', meaning: 'Justicia', example: 'Борьба за справедливость.' },
      { word: 'влияние', reading: 'vliyanie', meaning: 'Influencia', example: 'Он оказывает большое влияние.' },
      { word: 'поддержка', reading: 'podderzhka', meaning: 'Apoyo', example: 'Спасибо за поддержку!' },
    ],
  },

  ar: {
    A2: [
      { word: 'يتعلم', reading: "yata'allamu", meaning: 'Aprender', example: 'هو يتعلم العربية.' },
      { word: 'مهم', reading: 'muhimm', meaning: 'Importante', example: 'هذا الموضوع مهم جداً.' },
      { word: 'مستقبل', reading: 'mustaqbal', meaning: 'Futuro', example: 'المستقبل مشرق.' },
      { word: 'سلام', reading: 'salaam', meaning: 'Paz', example: 'نريد السلام.' },
      { word: 'حرية', reading: 'hurriya', meaning: 'Libertad', example: 'الحرية حق للجميع.' },
      { word: 'تعاون', reading: "ta'aawun", meaning: 'Cooperación', example: 'التعاون مهم للنجاح.' },
      { word: 'معرفة', reading: "ma'rifa", meaning: 'Conocimiento', example: 'المعرفة قوة.' },
      { word: 'ثقافة', reading: 'thaqaafa', meaning: 'Cultura', example: 'الثقافة العربية غنية.' },
    ],
  },

  hi: {
    A2: [
      { word: 'जरूरी', reading: 'zaroori', meaning: 'Necesario', example: 'यह बहुत जरूरी है।' },
      { word: 'समझना', reading: 'samajhna', meaning: 'Entender', example: 'मैं समझ गया।' },
      { word: 'मदद', reading: 'madad', meaning: 'Ayuda', example: 'कृपया मेरी मदद करें।' },
      { word: 'ज़िंदगी', reading: 'zindagi', meaning: 'Vida', example: 'ज़िंदगी खूबसूरत है।' },
      { word: 'खुशी', reading: 'khushi', meaning: 'Felicidad', example: 'मुझे बहुत खुशी हुई।' },
      { word: 'सफलता', reading: 'safalta', meaning: 'Éxito', example: 'सफलता मेहनत से मिलती है।' },
      { word: 'विश्वास', reading: 'vishwas', meaning: 'Confianza/Fe', example: 'मुझे तुम पर विश्वास है।' },
      { word: 'अनुभव', reading: 'anubhav', meaning: 'Experiencia', example: 'यह एक अच्छा अनुभव था।' },
    ],
  },

  ro: {
    A1: [
      { word: 'Bună ziua', meaning: 'Buenos días', example: 'Bună ziua, ce mai faceți?' },
      { word: 'Mulțumesc', meaning: 'Gracias', example: 'Mulțumesc foarte mult!' },
      { word: 'Vă rog', meaning: 'Por favor', example: 'O cafea, vă rog.' },
      { word: 'casă', meaning: 'Casa', example: 'Casa mea este mare.' },
      { word: 'familie', meaning: 'Familia', example: 'Familia mea este importantă.' },
      { word: 'prieten', meaning: 'Amigo', example: 'El este prietenul meu.' },
      { word: 'școală', meaning: 'Escuela', example: 'Merg la școală.' },
      { word: 'apă', meaning: 'Agua', example: 'Vreau un pahar de apă.' },
      { word: 'mare', meaning: 'Grande', example: 'Un oraș mare.' },
      { word: 'mic', meaning: 'Pequeño', example: 'Un apartament mic.' },
      { word: 'bun', meaning: 'Bueno', example: 'Un restaurant bun.' },
      { word: 'azi', meaning: 'Hoy', example: 'Azi este luni.' },
    ],
  },
};
