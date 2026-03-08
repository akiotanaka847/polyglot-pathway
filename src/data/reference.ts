import { GrammarEntry, VocabEntry } from './types';
import { GRAMMAR_EXPAND, VOCAB_EXPAND } from './reference-expand';

// Grammar organized with level tags for folder-based display
export const GRAMMAR_REF: Record<string, GrammarEntry[]> = {
  jp: [
    // === N5 - Básico ===
    { title: 'Partícula は (wa) — Tema', level: 'N5', category: 'particles', explanation: 'は marca el tema de la oración. Se pronuncia "wa" cuando funciona como partícula. No confundir con el sonido "ha". Es la partícula más fundamental del japonés.', examples: [{ text: 'わたしは学生です', translation: 'Yo soy estudiante' }, { text: 'これはペンです', translation: 'Esto es un bolígrafo' }, { text: '東京はきれいです', translation: 'Tokio es bonito' }] },
    { title: 'Partícula が (ga) — Sujeto', level: 'N5', category: 'particles', explanation: 'が marca el sujeto gramatical, especialmente cuando se introduce información nueva o se enfatiza quién realiza la acción. Se usa con verbos de existencia (います/あります) y con adjetivos de sentimiento.', examples: [{ text: '猫がいます', translation: 'Hay un gato' }, { text: '誰がきましたか', translation: '¿Quién vino?' }, { text: '日本語がすきです', translation: 'Me gusta el japonés' }] },
    { title: 'Partícula を (o) — Objeto directo', level: 'N5', category: 'particles', explanation: 'を marca el objeto que recibe la acción del verbo transitivo. También indica el punto de partida con verbos de movimiento como 出る (salir) o 降りる (bajar).', examples: [{ text: 'パンをたべます', translation: 'Como pan' }, { text: 'みずをのみます', translation: 'Bebo agua' }, { text: 'バスをおります', translation: 'Me bajo del autobús' }] },
    { title: 'Partícula に (ni) — Destino/Tiempo/Ubicación', level: 'N5', category: 'particles', explanation: 'Partícula versátil: indica destino con verbos de movimiento, tiempo específico, ubicación de existencia, y receptor de una acción.', examples: [{ text: 'がっこうにいきます', translation: 'Voy a la escuela' }, { text: '七時におきます', translation: 'Me despierto a las 7' }, { text: '友達にあげます', translation: 'Se lo doy a un amigo' }] },
    { title: 'Partícula で (de) — Lugar/Medio/Causa', level: 'N5', category: 'particles', explanation: 'Indica el lugar donde ocurre una acción, el medio o instrumento, el material, o la causa.', examples: [{ text: 'レストランでたべます', translation: 'Como en el restaurante' }, { text: 'バスでいきます', translation: 'Voy en autobús' }, { text: '木でつくります', translation: 'Está hecho de madera' }] },
    { title: 'Partícula の (no) — Posesión/Modificación', level: 'N5', category: 'particles', explanation: 'Conecta sustantivos indicando posesión, pertenencia, o relación. Funciona similar a "de" en español.', examples: [{ text: 'わたしの本', translation: 'Mi libro' }, { text: '日本のりょうり', translation: 'Comida de Japón' }, { text: '赤いのをください', translation: 'Deme el rojo' }] },
    { title: 'Forma ます (masu) — Cortesía', level: 'N5', category: 'verbs', explanation: 'Forma educada de los verbos, esencial en conversación formal. Presente: ～ます, Negativo: ～ません, Pasado: ～ました, Pasado neg: ～ませんでした.', examples: [{ text: 'たべます → たべません', translation: 'Como → No como' }, { text: 'のみました → のみませんでした', translation: 'Bebí → No bebí' }] },
    { title: 'Adjetivos い (i-adj)', level: 'N5', category: 'adjectives', explanation: 'Se conjugan directamente. Presente neg: ~くない. Pasado: ~かった. Pasado neg: ~くなかった. Excepción: いい→よくない/よかった.', examples: [{ text: 'たかい → たかくない', translation: 'Caro → No caro' }, { text: 'おいしかった', translation: 'Estaba delicioso' }] },
    { title: 'Adjetivos な (na-adj)', level: 'N5', category: 'adjectives', explanation: 'Usan な antes de sustantivos y じゃない para negar. Son similares a sustantivos en su conjugación.', examples: [{ text: 'きれいな人', translation: 'Persona bonita' }, { text: 'しずかじゃない', translation: 'No es tranquilo' }] },
    { title: 'Existencia: います vs あります', level: 'N5', category: 'verbs', explanation: 'います para seres vivos, あります para objetos inanimados.', examples: [{ text: '部屋にねこがいます', translation: 'Hay un gato en la habitación' }, { text: 'つくえの上に本があります', translation: 'Hay un libro en el escritorio' }] },
    { title: 'Contadores (助数詞)', level: 'N5', category: 'expressions', explanation: 'Japón usa contadores según el tipo de objeto: 枚 (planos), 冊 (libros), 本 (largos), 匹 (animales), 人 (personas), つ (universal).', examples: [{ text: '切手を三枚ください', translation: 'Tres estampillas por favor' }, { text: '猫が三匹います', translation: 'Hay tres gatos' }] },

    // === N4 - Elemental ===
    { title: 'Forma て (te-form) — Conexión', level: 'N4', category: 'verbs', explanation: 'Forma fundamental que conecta verbos, pide permiso, describe estados. Reglas: う/つ/る→って, む/ぶ/ぬ→んで, く→いて, ぐ→いで, す→して.', examples: [{ text: 'たべてください', translation: 'Por favor coma' }, { text: '本を読んでいます', translation: 'Estoy leyendo un libro' }] },
    { title: 'Forma ない (nai-form) — Negación informal', level: 'N4', category: 'verbs', explanation: 'Grupo 1: cambiar -u a -anai. Grupo 2: quitar -ru, agregar -nai. する→しない, くる→こない.', examples: [{ text: '行かない', translation: 'No voy' }, { text: '食べないでください', translation: 'No coma, por favor' }] },
    { title: 'Forma たい (tai) — Deseo', level: 'N4', category: 'verbs', explanation: 'Expresa "querer hacer algo". Se conjuga como adjetivo い. Solo para deseos propios; para otros: たがっている.', examples: [{ text: '日本に行きたいです', translation: 'Quiero ir a Japón' }, { text: '何も食べたくない', translation: 'No quiero comer nada' }] },
    { title: 'Verbos de dar/recibir (あげる・もらう・くれる)', level: 'N4', category: 'verbs', explanation: 'あげる: yo doy. もらう: yo recibo. くれる: alguien me da. La perspectiva del hablante es clave.', examples: [{ text: '友達にプレゼントをあげました', translation: 'Le di un regalo a un amigo' }, { text: '母がケーキをくれました', translation: 'Mi mamá me dio pastel' }] },
    { title: '～ている — Estado/Acción continua', level: 'N4', category: 'verbs', explanation: 'Forma て + いる indica: acción en progreso (食べている = comiendo), estado resultante (結婚している = estar casado), o hábito.', examples: [{ text: '今、勉強しています', translation: 'Estoy estudiando ahora' }, { text: '東京に住んでいます', translation: 'Vivo en Tokio' }] },
    { title: '～てもいい / ～てはいけない — Permiso', level: 'N4', category: 'sentence', explanation: '～てもいい = está bien hacer (permiso). ～てはいけない = no se debe hacer (prohibición).', examples: [{ text: '写真をとってもいいですか', translation: '¿Puedo tomar fotos?' }, { text: 'ここでたばこを吸ってはいけません', translation: 'No se puede fumar aquí' }] },
    { title: '～なければならない — Obligación', level: 'N4', category: 'sentence', explanation: 'Forma ない sin い + ければならない = tener que / deber. Coloquial: ～なきゃ.', examples: [{ text: '宿題をしなければなりません', translation: 'Tengo que hacer la tarea' }, { text: '早く起きなきゃ', translation: 'Tengo que levantarme temprano' }] },

    // === N3 - Intermedio ===
    { title: 'Forma pasiva (受身形)', level: 'N3', category: 'verbs', explanation: 'Grupo 1: -u → -areru. Grupo 2: -ru → -rareru. する→される, くる→こられる. Usos: pasiva, pasiva de inconveniencia, respeto.', examples: [{ text: '先生に褒められた', translation: 'Fui elogiado por el profesor' }, { text: '雨に降られた', translation: 'Me llovió encima (inconveniencia)' }] },
    { title: 'Forma causativa (使役形)', level: 'N3', category: 'verbs', explanation: 'Grupo 1: -u → -aseru. Grupo 2: -ru → -saseru. Indica hacer/dejar que alguien haga algo.', examples: [{ text: '子供に野菜を食べさせた', translation: 'Hice que el niño comiera verduras' }, { text: '行かせてください', translation: 'Déjeme ir, por favor' }] },
    { title: '～ようにする / ～ようになる', level: 'N3', category: 'sentence', explanation: '～ようにする = esforzarse por. ～ようになる = llegar a (cambio gradual).', examples: [{ text: '毎日運動するようにしています', translation: 'Me esfuerzo por hacer ejercicio cada día' }, { text: '日本語が話せるようになりました', translation: 'Llegué a poder hablar japonés' }] },
    { title: '～そうだ — Apariencia / Rumor', level: 'N3', category: 'sentence', explanation: 'Adj-い(sin い)+そう / Adj-な(sin な)+そう = parece que (apariencia). Verbo普通形+そうだ = dicen que (rumor/información).', examples: [{ text: 'このケーキはおいしそうだ', translation: 'Este pastel parece delicioso' }, { text: '明日は雨だそうだ', translation: 'Dicen que mañana lloverá' }] },
    { title: '～ば / ～たら — Condicionales', level: 'N3', category: 'sentence', explanation: '～ば: condición general (si...). ～たら: resultado específico, descubrimiento. ～なら: si es el caso de. ～と: resultado automático.', examples: [{ text: '安ければ買います', translation: 'Si es barato, lo compro' }, { text: '家に帰ったら、電話してね', translation: 'Cuando llegues a casa, llámame' }] },
    { title: '～ために / ～ように — Propósito', level: 'N3', category: 'sentence', explanation: '～ために: para (propósito intencional, con verbos volitivos). ～ように: para que (con verbos no volitivos o potencial).', examples: [{ text: '日本語を勉強するために日本に来た', translation: 'Vine a Japón para estudiar japonés' }, { text: '聞こえるように大きい声で話した', translation: 'Hablé en voz alta para que se oyera' }] },

    // === N2 - Intermedio Alto ===
    { title: '～わけがない / ～はずがない', level: 'N2', category: 'advanced', explanation: '～わけがない = es imposible que. ～はずがない = no puede ser que. Ambos expresan negación fuerte de posibilidad.', examples: [{ text: 'そんなことがあるわけがない', translation: 'Es imposible que eso ocurra' }, { text: '彼が嘘をつくはずがない', translation: 'No puede ser que él mienta' }] },
    { title: '～にもかかわらず — A pesar de', level: 'N2', category: 'advanced', explanation: 'Expresión formal que indica contradicción. Similar a "a pesar de" o "despite". Se usa en escritura formal y discursos.', examples: [{ text: '努力したにもかかわらず失敗した', translation: 'A pesar de esforzarme, fracasé' }, { text: '雨にもかかわらず試合は行われた', translation: 'A pesar de la lluvia, el partido se realizó' }] },
    { title: '～一方で — Por otro lado', level: 'N2', category: 'advanced', explanation: 'Presenta un contraste o aspecto opuesto. Similar a "por otro lado" o "while at the same time".', examples: [{ text: '経済は成長する一方で、環境問題が悪化している', translation: 'Mientras la economía crece, los problemas ambientales empeoran' }] },
    { title: 'Keigo (敬語) — Lenguaje honorífico', level: 'N2', category: 'advanced', explanation: 'Tres tipos: 尊敬語 (sonkeigo - para otros), 謙譲語 (kenjougo - para uno mismo), 丁寧語 (teineigo - educado general). Esencial en negocios.', examples: [{ text: 'いらっしゃいませ (尊敬語)', translation: 'Bienvenido (honorífico para el cliente)' }, { text: '拝見いたします (謙譲語)', translation: 'Veré/Miraré (humilde)' }] },
    { title: '～ものの / ～とはいえ', level: 'N2', category: 'advanced', explanation: '～ものの = aunque (formal). ～とはいえ = aunque se diga que / dicho esto. Matices de concesión más sofisticados.', examples: [{ text: '買ったものの、使っていない', translation: 'Aunque lo compré, no lo he usado' }, { text: '春とはいえ、まだ寒い', translation: 'Aunque digan que es primavera, aún hace frío' }] },

    // === N1 - Avanzado ===
    { title: '～ずにはいられない — No poder evitar', level: 'N1', category: 'advanced', explanation: 'Expresa que uno no puede resistirse a hacer algo. Forma literaria/formal de ～ないではいられない.', examples: [{ text: 'あの映画を見ると泣かずにはいられない', translation: 'Al ver esa película, no puedo evitar llorar' }] },
    { title: '～をもって — Con/Mediante (formal)', level: 'N1', category: 'advanced', explanation: 'Expresión muy formal usada en documentos, discursos. Indica medio, límite temporal, o base para juicio.', examples: [{ text: '本日をもって閉店いたします', translation: 'Con el día de hoy cerraremos la tienda' }, { text: '実力をもって証明する', translation: 'Demostrar mediante la habilidad' }] },
    { title: '～んがために — Con el fin de', level: 'N1', category: 'advanced', explanation: 'Forma literaria arcaica que expresa propósito fuerte. Más enfática que ～ために. Usada en textos literarios y formales.', examples: [{ text: '勝たんがために全力を尽くした', translation: 'Dimos todo con el fin de ganar' }] },
  ],

  fr: [
    // === A1 - Débutant ===
    { title: 'Articles définis et indéfinis', level: 'A1', category: 'sentence', explanation: 'Définis: le (m.sg), la (f.sg), l\' (vocal), les (pl). Indéfinis: un (m), une (f), des (pl). Partitifs: du, de la, de l\'. Après négation: de/d\'.', examples: [{ text: 'le chat / la maison / les enfants', translation: 'El gato / La casa / Los niños' }, { text: 'Je mange du pain / de la salade', translation: 'Como pan / ensalada' }] },
    { title: 'Verbes du 1er groupe (-er)', level: 'A1', category: 'verbs', explanation: 'je -e, tu -es, il/elle -e, nous -ons, vous -ez, ils/elles -ent. Ortográficos: manger→mangeons, commencer→commençons.', examples: [{ text: 'Je parle français', translation: 'Yo hablo francés' }, { text: 'Ils travaillent beaucoup', translation: 'Ellos trabajan mucho' }] },
    { title: 'Être et Avoir — Verbos esenciales', level: 'A1', category: 'verbs', explanation: 'Être: je suis, tu es, il est, nous sommes, vous êtes, ils sont. Avoir: j\'ai, tu as, il a, nous avons, vous avez, ils ont.', examples: [{ text: 'Je suis étudiant / J\'ai 20 ans', translation: 'Soy estudiante / Tengo 20 años' }, { text: 'Ils ont faim', translation: 'Tienen hambre' }] },
    { title: 'Négation (ne...pas/plus/jamais)', level: 'A1', category: 'sentence', explanation: 'ne + verbo + pas (no), plus (ya no), jamais (nunca), rien (nada). En oral coloquial "ne" se omite.', examples: [{ text: 'Je ne parle pas anglais', translation: 'No hablo inglés' }, { text: 'Il ne mange jamais de viande', translation: 'Nunca come carne' }] },
    { title: 'Adjectifs — Position et accord', level: 'A1', category: 'adjectives', explanation: 'Generalmente van después del sustantivo. Excepciones: beau, bon, grand, petit, jeune, vieux, nouveau. Concuerdan en género (+e) y número (+s).', examples: [{ text: 'une grande maison blanche', translation: 'una casa grande blanca' }, { text: 'de beaux yeux verts', translation: 'hermosos ojos verdes' }] },
    { title: 'Les prépositions de lieu', level: 'A1', category: 'expressions', explanation: 'à (ciudad), en (país fem.), au (país masc.), aux (pl.), de/d\', chez (casa de), dans (dentro), sur (sobre), sous (debajo).', examples: [{ text: 'J\'habite à Paris / en France / au Japon', translation: 'Vivo en París / Francia / Japón' }] },

    // === A2 - Élémentaire ===
    { title: 'Passé composé', level: 'A2', category: 'verbs', explanation: 'avoir/être + participio pasado. 14 verbos de movimiento + pronominales usan être. Participios: -er→é, -ir→i, -re→u.', examples: [{ text: "J'ai mangé une pomme", translation: 'Comí una manzana' }, { text: 'Je suis allé(e) à Paris', translation: 'Fui a París' }] },
    { title: "L'imparfait", level: 'A2', category: 'verbs', explanation: 'Acciones habituales en el pasado, descripciones. Raíz de "nous" en presente + -ais, -ais, -ait, -ions, -iez, -aient. Excepción: être→ét-.', examples: [{ text: 'Quand j\'étais petit, je jouais au foot', translation: 'Cuando era pequeño, jugaba fútbol' }, { text: 'Il faisait beau hier', translation: 'Hacía buen tiempo ayer' }] },
    { title: 'Futur proche (aller + infinitif)', level: 'A2', category: 'verbs', explanation: 'aller conjugado + infinitivo. Muy usado en francés oral para futuro cercano.', examples: [{ text: 'Je vais manger', translation: 'Voy a comer' }, { text: 'Nous allons voyager en été', translation: 'Vamos a viajar en verano' }] },
    { title: 'Pronoms COD et COI', level: 'A2', category: 'sentence', explanation: 'COD: me, te, le/la, nous, vous, les. COI: me, te, lui, nous, vous, leur. Van antes del verbo.', examples: [{ text: 'Je le vois (le chat)', translation: 'Lo veo (al gato)' }, { text: 'Je lui parle (à Marie)', translation: 'Le hablo (a Marie)' }] },
    { title: 'Verbes du 2e groupe (-ir/-issons)', level: 'A2', category: 'verbs', explanation: '-is, -is, -it, -issons, -issez, -issent. Común: finir, choisir, réussir, remplir, grandir.', examples: [{ text: 'Je finis mon travail', translation: 'Termino mi trabajo' }, { text: 'Les enfants grandissent vite', translation: 'Los niños crecen rápido' }] },

    // === B1 - Intermédiaire ===
    { title: 'Le conditionnel présent', level: 'B1', category: 'verbs', explanation: 'Raíz del futuro + terminaciones del imparfait. Usos: cortesía, deseo, hipótesis.', examples: [{ text: 'Je voudrais un café', translation: 'Querría un café' }, { text: 'Si j\'avais le temps, je voyagerais', translation: 'Si tuviera tiempo, viajaría' }] },
    { title: 'Le subjonctif présent', level: 'B1', category: 'verbs', explanation: 'Después de deseo (vouloir que), necesidad (il faut que), emoción, duda. Raíz 3ª pl. presente + -e, -es, -e, -ions, -iez, -ent.', examples: [{ text: 'Il faut que tu viennes', translation: 'Es necesario que vengas' }, { text: 'Je veux que tu sois heureux', translation: 'Quiero que seas feliz' }] },
    { title: 'Les temps du passé — Passé composé vs Imparfait', level: 'B1', category: 'verbs', explanation: 'PC: acción puntual, completada. Imparfait: descripción, hábito, acción en progreso. En narración se combinan: el imparfait es el "fondo" y el PC los "eventos".', examples: [{ text: 'Il pleuvait quand je suis sorti', translation: 'Llovía cuando salí' }, { text: 'Je lisais quand le téléphone a sonné', translation: 'Leía cuando sonó el teléfono' }] },
    { title: 'Le plus-que-parfait', level: 'B1', category: 'verbs', explanation: 'avoir/être en imparfait + participio pasado. Indica acción anterior a otra pasada. "Había + participio".', examples: [{ text: 'J\'avais déjà mangé quand il est arrivé', translation: 'Ya había comido cuando él llegó' }, { text: 'Elle était partie avant moi', translation: 'Ella se había ido antes que yo' }] },
    { title: 'Les pronoms relatifs (qui, que, où, dont)', level: 'B1', category: 'sentence', explanation: 'qui = sujeto, que = objeto directo, où = lugar/tiempo, dont = de quien/del cual. Esenciales para oraciones complejas.', examples: [{ text: 'La femme qui parle est ma mère', translation: 'La mujer que habla es mi madre' }, { text: 'Le livre dont je parle est ici', translation: 'El libro del que hablo está aquí' }] },

    // === B2 - Intermédiaire Avancé ===
    { title: 'Le subjonctif passé', level: 'B2', category: 'verbs', explanation: 'avoir/être en subjonctif + participio pasado. Expresa acciones pasadas en contextos de subjonctif.', examples: [{ text: 'Je suis content que tu aies réussi', translation: 'Me alegra que hayas tenido éxito' }, { text: 'Bien qu\'il soit parti tôt...', translation: 'Aunque se haya ido temprano...' }] },
    { title: 'Le futur antérieur', level: 'B2', category: 'verbs', explanation: 'avoir/être en futuro + participio pasado. Acción futura completada antes de otra futura. También expresa suposición.', examples: [{ text: 'Quand tu arriveras, j\'aurai fini', translation: 'Cuando llegues, habré terminado' }, { text: 'Il aura oublié', translation: 'Se habrá olvidado (suposición)' }] },
    { title: 'La voix passive', level: 'B2', category: 'sentence', explanation: 'être + participio pasado (+ par). El sujeto recibe la acción. El participio concuerda en género y número con el sujeto.', examples: [{ text: 'Le gâteau a été mangé par les enfants', translation: 'El pastel fue comido por los niños' }, { text: 'Cette loi sera votée demain', translation: 'Esta ley será votada mañana' }] },
    { title: 'Le discours indirect', level: 'B2', category: 'sentence', explanation: 'Transforma citas directas en indirectas con cambios de tiempos, pronombres y expresiones temporales. Concordance des temps obligatoire.', examples: [{ text: 'Il a dit qu\'il viendrait', translation: 'Dijo que vendría' }, { text: 'Elle m\'a demandé si j\'avais compris', translation: 'Me preguntó si había entendido' }] },

    // === C1 - Avancé ===
    { title: 'Le subjonctif imparfait (littéraire)', level: 'C1', category: 'advanced', explanation: 'Forma literaria usada en textos clásicos y formales. Se forma con el passé simple + terminaciones específicas. Raro en conversación moderna.', examples: [{ text: 'Il fallait qu\'il vînt', translation: 'Era necesario que viniera (literario)' }, { text: 'Je voulais qu\'elle fût heureuse', translation: 'Quería que ella fuera feliz (literario)' }] },
    { title: 'Le passé simple (littéraire)', level: 'C1', category: 'verbs', explanation: 'Tiempo narrativo usado en literatura y textos históricos. -er: -ai, -as, -a, -âmes, -âtes, -èrent. Irregular: être(fus), avoir(eus), faire(fis).', examples: [{ text: 'Il entra dans la pièce et vit la scène', translation: 'Entró en la habitación y vio la escena' }, { text: 'Ils furent surpris', translation: 'Fueron sorprendidos' }] },
    { title: 'Nuances du conditionnel passé', level: 'C1', category: 'advanced', explanation: 'Expresa arrepentimiento, reproche, información no confirmada. avoir/être en conditionnel + participio. Periodístico: pour présenter des faits non vérifiés.', examples: [{ text: 'J\'aurais dû étudier plus', translation: 'Debería haber estudiado más' }, { text: 'L\'accident aurait fait trois victimes', translation: 'El accidente habría causado tres víctimas' }] },
  ],

  zh: [
    // === HSK1 ===
    { title: '是 (shì) — Verbo ser', level: 'HSK1', category: 'verbs', explanation: 'Sujeto + 是 + Complemento. Negación: 不是. No se usa con adjetivos (usar 很 en su lugar).', examples: [{ text: '我是学生', translation: 'Yo soy estudiante' }, { text: '她不是老师', translation: 'Ella no es profesora' }] },
    { title: '的 (de) — Posesión y modificación', level: 'HSK1', category: 'particles', explanation: 'Indica posesión y modifica sustantivos. Se puede omitir con relaciones cercanas.', examples: [{ text: '我的书', translation: 'Mi libro' }, { text: '我妈妈 (sin 的)', translation: 'Mi mamá' }] },
    { title: '不 (bù) vs 没 (méi) — Negación', level: 'HSK1', category: 'sentence', explanation: '不 niega presente/futuro, hábitos y adjetivos. 没 niega pasado y experiencia.', examples: [{ text: '我不喝咖啡', translation: 'No bebo café (hábito)' }, { text: '我没去学校', translation: 'No fui a la escuela' }] },
    { title: '吗 (ma) / 呢 (ne) — Preguntas', level: 'HSK1', category: 'particles', explanation: '吗 convierte declaración en pregunta sí/no. 呢 pregunta "¿y tú/eso?".', examples: [{ text: '你好吗？', translation: '¿Estás bien?' }, { text: '我很好，你呢？', translation: 'Estoy bien, ¿y tú?' }] },
    { title: '很 (hěn) — Enlace con adjetivos', level: 'HSK1', category: 'adjectives', explanation: 'Los adjetivos actúan como verbos. 很 enlaza sujeto con adjetivo. Sin 很, implica comparación.', examples: [{ text: '他很高', translation: 'Él es alto' }, { text: '今天非常热', translation: 'Hoy hace mucho calor' }] },

    // === HSK2 ===
    { title: '了 (le) — Aspecto completivo', level: 'HSK2', category: 'particles', explanation: 'Indica acción completada o cambio de estado. No es exactamente "pasado" — puede usarse en futuro.', examples: [{ text: '我吃了饭', translation: 'Comí' }, { text: '他来了！', translation: '¡Ya llegó!' }] },
    { title: '在 (zài) — Ubicación y progresivo', level: 'HSK2', category: 'particles', explanation: 'Como verbo: estar en. Como aspecto progresivo: 在+verbo = estar haciendo.', examples: [{ text: '我在家', translation: 'Estoy en casa' }, { text: '我在看电视', translation: 'Estoy viendo televisión' }] },
    { title: '想/要/可以/能/会 — Modales', level: 'HSK2', category: 'verbs', explanation: '想=querer, 要=necesitar/ir a, 可以=poder(permiso), 能=poder(capacidad), 会=saber hacer.', examples: [{ text: '我想喝水', translation: 'Quiero beber agua' }, { text: '我会说中文', translation: 'Sé hablar chino' }] },
    { title: '过 (guò) — Experiencia', level: 'HSK2', category: 'particles', explanation: 'Después del verbo indica experiencia pasada. Negación: 没...过.', examples: [{ text: '我去过中国', translation: 'He ido a China (alguna vez)' }, { text: '你吃过寿司吗？', translation: '¿Has comido sushi alguna vez?' }] },

    // === HSK3 ===
    { title: '把 (bǎ) — Estructura de disposición', level: 'HSK3', category: 'sentence', explanation: 'Sujeto + 把 + Objeto + Verbo(+complemento). Enfatiza la acción sobre el objeto.', examples: [{ text: '请把门关上', translation: 'Por favor cierra la puerta' }, { text: '他把书放在桌子上了', translation: 'Él puso el libro sobre la mesa' }] },
    { title: '得 (de) — Complemento de grado', level: 'HSK3', category: 'sentence', explanation: 'Verbo + 得 + descripción. Describe cómo se realiza una acción.', examples: [{ text: '他说得很好', translation: 'Él habla muy bien' }, { text: '她跑得很快', translation: 'Ella corre muy rápido' }] },
    { title: '比 (bǐ) — Comparación', level: 'HSK3', category: 'sentence', explanation: 'A + 比 + B + Adj. Igualdad: A 跟 B 一样. Superlativo: 最.', examples: [{ text: '他比我高', translation: 'Él es más alto que yo' }, { text: '她是最漂亮的', translation: 'Ella es la más bonita' }] },
    { title: '虽然...但是 / 因为...所以', level: 'HSK3', category: 'sentence', explanation: '虽然A但是B = aunque A, B. 因为A所以B = porque A, por eso B. 如果A就B = si A, entonces B.', examples: [{ text: '虽然很贵，但是很好吃', translation: 'Aunque es caro, es delicioso' }, { text: '因为下雨，所以我没去', translation: 'Porque llovió, no fui' }] },

    // === HSK4-5 ===
    { title: '被 (bèi) — Voz pasiva', level: 'HSK4', category: 'advanced', explanation: 'A + 被 + (B) + Verbo. Indica que A recibe la acción. A menudo implica resultado negativo. B (agente) puede omitirse.', examples: [{ text: '我的手机被偷了', translation: 'Me robaron el celular' }, { text: '杯子被打破了', translation: 'La taza fue rota' }] },
    { title: '所 (suǒ) + Verbo — Estructura formal', level: 'HSK5', category: 'advanced', explanation: 'Estructura formal/literaria: 所+verbo funciona como sustantivo. Muy usada en chino escrito y formal.', examples: [{ text: '我所说的是事实', translation: 'Lo que digo son hechos' }, { text: '他所做的一切', translation: 'Todo lo que él hizo' }] },
    { title: '越来越 / 越A越B', level: 'HSK4', category: 'advanced', explanation: '越来越 = cada vez más. 越A越B = cuanto más A, más B.', examples: [{ text: '天气越来越冷了', translation: 'El clima está cada vez más frío' }, { text: '越学越有趣', translation: 'Cuanto más estudio, más interesante es' }] },
  ],

  en: [
    // === A1 ===
    { title: 'SVO Word Order', level: 'A1', category: 'sentence', explanation: 'English follows strict Subject + Verb + Object order. Questions invert auxiliary + subject.', examples: [{ text: 'I eat breakfast every day', translation: 'Desayuno todos los días' }, { text: 'Do you speak English?', translation: '¿Hablas inglés?' }] },
    { title: 'Present Simple vs Present Continuous', level: 'A1', category: 'verbs', explanation: 'Simple: habits, facts (+s 3rd person). Continuous: actions happening now (be + -ing). Stative verbs don\'t use continuous.', examples: [{ text: 'I work in a bank (habit)', translation: 'Trabajo en un banco' }, { text: 'I\'m working from home today', translation: 'Hoy trabajo desde casa' }] },
    { title: 'Articles (a, an, the, ∅)', level: 'A1', category: 'sentence', explanation: 'a/an: first mention, one of many, jobs. the: specific, already known, unique. No article: plural/uncountable general.', examples: [{ text: 'I saw a cat. The cat was black.', translation: 'Vi un gato. El gato era negro.' }] },

    // === A2 ===
    { title: 'Past Simple vs Present Perfect', level: 'A2', category: 'verbs', explanation: 'Past Simple: completed at specific past time. Present Perfect: past connected to present, experiences (ever/never).', examples: [{ text: 'I went to Paris last year', translation: 'Fui a París el año pasado' }, { text: 'I have been to Paris', translation: 'He estado en París' }] },
    { title: 'Modal Verbs', level: 'A2', category: 'verbs', explanation: 'can/could (ability), must/have to (obligation), should (advice), may/might (possibility), will/would (future, requests).', examples: [{ text: 'You must wear a seatbelt', translation: 'Debes usar cinturón' }, { text: 'She can speak 3 languages', translation: 'Ella habla 3 idiomas' }] },
    { title: 'Prepositions of Time and Place', level: 'A2', category: 'expressions', explanation: 'Time: at (time, night), on (days, dates), in (months, years, morning). Place: at (point), on (surface), in (enclosed).', examples: [{ text: 'at 3 PM / on Monday / in January', translation: 'a las 3 / el lunes / en enero' }] },

    // === B1 ===
    { title: 'Conditionals (0, 1, 2, 3)', level: 'B1', category: 'sentence', explanation: '0: facts. 1: real future (if+present, will). 2: unreal present (if+past, would). 3: unreal past (if+past perfect, would have).', examples: [{ text: 'If it rains, I\'ll stay home (1)', translation: 'Si llueve, me quedaré en casa' }, { text: 'If I were rich, I would travel (2)', translation: 'Si fuera rico, viajaría' }] },
    { title: 'Passive Voice', level: 'B1', category: 'sentence', explanation: 'be + past participle. Focus on action, not doer. Tense changes in "be": is made, was made, has been made.', examples: [{ text: 'English is spoken worldwide', translation: 'El inglés se habla en todo el mundo' }, { text: 'The book was written in 1984', translation: 'El libro fue escrito en 1984' }] },
    { title: 'Relative Clauses', level: 'B1', category: 'sentence', explanation: 'who/that for people, which/that for things, where for places. Defining: no commas. Non-defining: commas (no "that").', examples: [{ text: 'The man who lives next door', translation: 'El hombre que vive al lado' }, { text: 'Paris, which is the capital', translation: 'París, que es la capital' }] },

    // === B2 ===
    { title: 'Reported Speech', level: 'B2', category: 'sentence', explanation: 'Backshift of tenses: present→past, past→past perfect, will→would. Pronouns and time expressions change.', examples: [{ text: '"I am tired" → He said he was tired', translation: 'Dijo que estaba cansado' }, { text: '"I will come" → She said she would come', translation: 'Dijo que vendría' }] },
    { title: 'Phrasal Verbs', level: 'B2', category: 'verbs', explanation: 'Verb + particle(s): look up (search), give up (stop), turn on/off, put off (postpone). Separable vs inseparable.', examples: [{ text: 'Don\'t give up!', translation: '¡No te rindas!' }, { text: 'Can you turn off the light?', translation: '¿Puedes apagar la luz?' }] },
    { title: 'Gerund vs Infinitive', level: 'B2', category: 'verbs', explanation: 'Gerund after: enjoy, mind, avoid. Infinitive after: want, need, decide. Both with different meaning: stop, remember, try.', examples: [{ text: 'I enjoy reading books', translation: 'Disfruto leer libros' }, { text: 'I stopped smoking vs I stopped to smoke', translation: 'Dejé de fumar vs Me detuve para fumar' }] },

    // === C1 ===
    { title: 'Inversion for emphasis', level: 'C1', category: 'advanced', explanation: 'Negative adverbs at start: Never have I... / Not only did... / Seldom does... Formal/literary style.', examples: [{ text: 'Never have I seen such beauty', translation: 'Nunca he visto tanta belleza' }, { text: 'Not only did he win, but he broke the record', translation: 'No solo ganó, sino que batió el récord' }] },
    { title: 'Cleft sentences', level: 'C1', category: 'advanced', explanation: 'It is/was... that/who... for emphasis. "It was John who broke the window" emphasizes John. Also: What I need is...', examples: [{ text: 'It was the weather that ruined the picnic', translation: 'Fue el clima lo que arruinó el picnic' }, { text: 'What I really need is a holiday', translation: 'Lo que realmente necesito es vacaciones' }] },
  ],

  pt: [
    // === A1 ===
    { title: 'Artigos e contrações', level: 'A1', category: 'sentence', explanation: 'Definidos: o, a, os, as. Indefinidos: um, uma, uns, umas. Contrações: de+o=do, em+o=no, a+o=ao, por+o=pelo.', examples: [{ text: 'o gato / a casa / os livros', translation: 'el gato / la casa / los libros' }, { text: 'Eu vou ao cinema / Moro no Brasil', translation: 'Voy al cine / Vivo en Brasil' }] },
    { title: 'Verbos regulares: -ar, -er, -ir', level: 'A1', category: 'verbs', explanation: '-ar: falo, falas, fala, falamos, falam. -er: como, comes, come. -ir: parto, partes, parte.', examples: [{ text: 'Eu falo português', translation: 'Yo hablo portugués' }, { text: 'Nós comemos bem', translation: 'Comemos bien' }] },
    { title: 'Ser vs Estar vs Ficar', level: 'A1', category: 'verbs', explanation: 'Ser: identidad, permanente. Estar: temporal. Ficar: quedarse, ubicación de edificios, volverse.', examples: [{ text: 'Eu sou brasileiro / Estou cansado', translation: 'Soy brasileño / Estoy cansado' }, { text: 'O banco fica na esquina', translation: 'El banco queda en la esquina' }] },
    { title: 'Ter e Haver — Tener y Haber', level: 'A1', category: 'verbs', explanation: 'Ter: posesión, obligación (ter que), existencia (BR: tem gente). Haver: existencia formal (há), expresiones de tiempo (há 2 anos = hace 2 años).', examples: [{ text: 'Eu tenho dois irmãos', translation: 'Tengo dos hermanos' }, { text: 'Há muitas pessoas aqui', translation: 'Hay muchas personas aquí' }] },

    // === A2 ===
    { title: 'Pretérito perfeito', level: 'A2', category: 'verbs', explanation: 'Pasado simple. -ar: -ei, -aste, -ou, -amos, -aram. Irregulares: ser/ir (fui), ter (tive), fazer (fiz).', examples: [{ text: 'Eu comi pizza ontem', translation: 'Comí pizza ayer' }, { text: 'Ela foi ao mercado', translation: 'Ella fue al mercado' }] },
    { title: 'Pretérito imperfeito', level: 'A2', category: 'verbs', explanation: 'Acciones habituales en pasado. -ar: -ava. -er/-ir: -ia. Irregulares: ser (era), ter (tinha).', examples: [{ text: 'Quando eu era criança, brincava muito', translation: 'Cuando era niño, jugaba mucho' }] },
    { title: 'Pronomes — Diretos e Indiretos', level: 'A2', category: 'sentence', explanation: 'Diretos: me, te, o/a, nos, os/as. Indiretos: me, te, lhe, nos, lhes. En BR van antes del verbo.', examples: [{ text: 'Eu te amo (BR) / Amo-te (PT)', translation: 'Te amo' }] },
    { title: 'Preposições essenciais', level: 'A2', category: 'sentence', explanation: 'em (en), de (de), para/pra (para), com (con), sem (sin), por (por), entre (entre), sobre (sobre), até (hasta).', examples: [{ text: 'Eu moro em São Paulo', translation: 'Vivo en São Paulo' }, { text: 'Vou para casa', translation: 'Voy a casa' }] },

    // === B1 ===
    { title: 'Subjuntivo presente', level: 'B1', category: 'verbs', explanation: '-ar: -e, -es, -e, -emos, -em. -er/-ir: -a, -as, -a, -amos, -am. Con: querer que, espero que, talvez.', examples: [{ text: 'Espero que você venha', translation: 'Espero que vengas' }, { text: 'Talvez eu vá amanhã', translation: 'Quizás vaya mañana' }] },
    { title: 'Gerúndio e Infinitivo pessoal', level: 'B1', category: 'verbs', explanation: 'BR usa gerúndio (estou fazendo). PT prefiere a + infinitivo (estou a fazer). Infinitivo pessoal: exclusivo del portugués.', examples: [{ text: 'Estou trabalhando (BR)', translation: 'Estoy trabajando' }, { text: 'É importante estudarmos', translation: 'Es importante que estudiemos' }] },
    { title: 'Futuro do presente e condicional', level: 'B1', category: 'verbs', explanation: 'Futuro: -ei, -ás, -á, -emos, -ão. En BR oral: ir + infinitivo. Condicional: -ia, -ias, -ia, -íamos, -iam.', examples: [{ text: 'Eu farei / Eu vou fazer', translation: 'Yo haré / Voy a hacer' }, { text: 'Eu gostaria de um café', translation: 'Me gustaría un café' }] },
    { title: 'Voz passiva', level: 'B1', category: 'sentence', explanation: 'ser + participio (formal). Passiva pronominal: se + verbo (más natural). Passiva com estar: estado resultante.', examples: [{ text: 'O livro foi escrito por Machado', translation: 'El libro fue escrito por Machado' }, { text: 'Fala-se português aqui', translation: 'Se habla portugués aquí' }] },

    // === B2 ===
    { title: 'Subjuntivo imperfeito', level: 'B2', category: 'verbs', explanation: '-ar: -asse. -er: -esse. -ir: -isse. Se usa con condiciones irreales: Se eu pudesse... / Se eu fosse...', examples: [{ text: 'Se eu fosse rico, viajaria', translation: 'Si yo fuera rico, viajaría' }, { text: 'Gostaria que você viesse', translation: 'Me gustaría que vinieras' }] },
    { title: 'Futuro do subjuntivo', level: 'B2', category: 'advanced', explanation: 'Exclusivo del portugués. Se usa con quando, se, assim que (en futuro). -ar: -ar. -er: -er. -ir: -ir. Irregular: ser→for, ter→tiver.', examples: [{ text: 'Quando eu for ao Brasil...', translation: 'Cuando yo vaya a Brasil...' }, { text: 'Se você quiser, podemos ir', translation: 'Si quieres, podemos ir' }] },
    { title: 'Discurso indireto', level: 'B2', category: 'sentence', explanation: 'Cambio de tiempos: presente→imperfeito, perfeito→mais-que-perfeito. Cambio de pronombres y marcadores temporales.', examples: [{ text: 'Ele disse que estava cansado', translation: 'Él dijo que estaba cansado' }, { text: 'Ela perguntou se eu tinha ido', translation: 'Ella preguntó si yo había ido' }] },
  ],

  ko: [
    // === TOPIK1 ===
    { title: '는/은 — Marcador de tema', level: 'TOPIK1', category: 'particles', explanation: '는 después de vocal, 은 después de consonante. Marca el tema principal de la oración.', examples: [{ text: '저는 학생입니다', translation: 'Yo soy estudiante' }, { text: '한국어는 재미있어요', translation: 'El coreano es interesante' }] },
    { title: '이/가 — Marcador de sujeto', level: 'TOPIK1', category: 'particles', explanation: '이 después de consonante, 가 después de vocal. Marca sujeto nuevo o enfatizado.', examples: [{ text: '비가 와요', translation: 'Llueve' }, { text: '날씨가 좋아요', translation: 'El clima es bueno' }] },
    { title: '을/를 — Marcador de objeto', level: 'TOPIK1', category: 'particles', explanation: '을 después de consonante, 를 después de vocal.', examples: [{ text: '밥을 먹어요', translation: 'Como arroz' }, { text: '한국어를 공부해요', translation: 'Estudio coreano' }] },
    { title: 'Niveles de formalidad', level: 'TOPIK1', category: 'sentence', explanation: '합니다체 (formal), 해요체 (cortés), 해체 (informal/banmal). 해요체 es el más usado.', examples: [{ text: '갑니다 / 가요 / 가', translation: 'Voy (formal / cortés / informal)' }] },
    { title: '이다 / 아니다 — Ser / No ser', level: 'TOPIK1', category: 'verbs', explanation: '이다 = ser. 아니다 = no ser. Sujeto + N + 이에요/예요. Negación: N이/가 아니에요.', examples: [{ text: '저는 학생이에요', translation: 'Soy estudiante' }, { text: '이것은 책이 아니에요', translation: 'Esto no es un libro' }] },

    // === TOPIK2 ===
    { title: '에/에서 — Ubicación y acción', level: 'TOPIK2', category: 'particles', explanation: '에: destino, ubicación estática, tiempo. 에서: lugar de acción, punto de partida.', examples: [{ text: '학교에 가요', translation: 'Voy a la escuela' }, { text: '학교에서 공부해요', translation: 'Estudio en la escuela' }] },
    { title: '으로/로 — Dirección/Medio', level: 'TOPIK2', category: 'particles', explanation: '으로 después de consonante, 로 después de vocal/ㄹ. Indica dirección, medio, material, causa.', examples: [{ text: '버스로 가요', translation: 'Voy en autobús' }, { text: '한국어로 말해 주세요', translation: 'Hable en coreano, por favor' }] },
    { title: 'Pasado: -았/었/했어요', level: 'TOPIK2', category: 'verbs', explanation: 'Vocal clara + 았, vocal oscura + 었, 하다→했.', examples: [{ text: '먹었어요', translation: 'Comí' }, { text: '갔어요', translation: 'Fui' }] },
    { title: '고 싶다 — Querer hacer', level: 'TOPIK2', category: 'verbs', explanation: 'Raíz + 고 싶다. Se conjuga como adjetivo. Para terceros: -고 싶어 하다.', examples: [{ text: '한국에 가고 싶어요', translation: 'Quiero ir a Corea' }] },
    { title: '-(으)ㄹ 수 있다/없다 — Poder', level: 'TOPIK2', category: 'verbs', explanation: 'Poder: 수 있다. No poder: 수 없다 o 못 + verbo.', examples: [{ text: '한국어를 할 수 있어요', translation: 'Puedo hablar coreano' }] },
    { title: '-지 마세요 — Prohibición', level: 'TOPIK2', category: 'sentence', explanation: 'Raíz + 지 마세요 = No haga (por favor). Informal: -지 마.', examples: [{ text: '여기서 사진 찍지 마세요', translation: 'No tome fotos aquí, por favor' }] },

    // === TOPIK3 ===
    { title: '-아/어서 — Causa y secuencia', level: 'TOPIK3', category: 'sentence', explanation: 'Conecta cláusulas: causa/razón o secuencia. No se usa con imperativo (usar -(으)니까).', examples: [{ text: '배가 아파서 못 먹어요', translation: 'Me duele el estómago, no puedo comer' }, { text: '늦어서 미안해요', translation: 'Perdón por llegar tarde' }] },
    { title: '-(으)ㄹ 거예요 — Futuro', level: 'TOPIK3', category: 'verbs', explanation: 'Planes o intenciones futuras.', examples: [{ text: '내일 한국에 갈 거예요', translation: 'Mañana iré a Corea' }] },
    { title: '-(으)면 — Condicional', level: 'TOPIK3', category: 'sentence', explanation: 'Si... Raíz + (으)면. Se usa para condiciones, suposiciones, y consejos.', examples: [{ text: '시간이 있으면 같이 가요', translation: 'Si tienes tiempo, vamos juntos' }] },
    { title: '-(으)ㄴ/는데 — Contexto/Contraste', level: 'TOPIK3', category: 'sentence', explanation: 'Conecta oraciones dando contexto o contrastando. Adj: -(으)ㄴ데. Verbo: -는데. Muy versátil.', examples: [{ text: '날씨가 좋은데 산책할까요?', translation: 'El clima está bueno, ¿paseamos?' }, { text: '먹고 싶은데 돈이 없어요', translation: 'Quiero comer pero no tengo dinero' }] },

    // === TOPIK4 ===
    { title: '-는 것 같다 — Parece que', level: 'TOPIK4', category: 'sentence', explanation: 'Expresa suposición o apariencia. Con presente, pasado y futuro.', examples: [{ text: '비가 올 것 같아요', translation: 'Parece que va a llover' }, { text: '그는 한국 사람인 것 같아요', translation: 'Parece que es coreano' }] },
    { title: '-(으)ㄹ 뿐만 아니라 — No solo...sino', level: 'TOPIK4', category: 'advanced', explanation: 'No solo A sino también B. Estructura formal para agregar información.', examples: [{ text: '한국어뿐만 아니라 일본어도 잘해요', translation: 'No solo habla coreano sino también japonés' }] },
    { title: '피동/사동 — Pasiva/Causativa', level: 'TOPIK4', category: 'advanced', explanation: 'Pasiva: -이/히/리/기 (보이다 = ser visto). Causativa: -이/히/리/기/우/추 (먹이다 = hacer comer).', examples: [{ text: '문이 열렸어요 (pasiva)', translation: 'La puerta se abrió' }, { text: '아이에게 밥을 먹였어요', translation: 'Le di de comer al niño' }] },
  ],

  ru: [
    // === A1 ===
    { title: 'Кириллица — Alfabeto', level: 'A1', category: 'writing', explanation: '33 letras: 10 vocales, 21 consonantes, 2 signos (ь, ъ). Las consonantes pueden ser duras o blandas.', examples: [{ text: 'А Б В Г Д Е Ё Ж З И', translation: 'A B V G D Ye Yo Zh Z I' }, { text: 'мама, папа, молоко', translation: 'mamá, papá, leche' }] },
    { title: 'Род — Género (м, ж, с)', level: 'A1', category: 'sentence', explanation: 'Masc: consonante final. Fem: -а/-я. Neutro: -о/-е. Excepciones: -ь puede ser m o f.', examples: [{ text: 'стол (m) / книга (f) / окно (n)', translation: 'mesa / libro / ventana' }] },
    { title: 'Спряжение глаголов', level: 'A1', category: 'verbs', explanation: '1ª conj: -у, -ешь, -ет, -ем, -ете, -ут. 2ª conj: -у, -ишь, -ит, -им, -ите, -ат.', examples: [{ text: 'я читаю / ты читаешь (1ª)', translation: 'leo / lees' }, { text: 'я говорю / ты говоришь (2ª)', translation: 'hablo / hablas' }] },
    { title: 'Личные местоимения', level: 'A1', category: 'sentence', explanation: 'я (yo), ты (tú), он/она/оно (él/ella/ello), мы (nosotros), вы (ustedes/formal), они (ellos). Вы = formal singular.', examples: [{ text: 'Я студент / Она учительница', translation: 'Yo soy estudiante / Ella es profesora' }, { text: 'Вы говорите по-русски?', translation: '¿Habla usted ruso?' }] },
    { title: 'Притяжательные местоимения', level: 'A1', category: 'sentence', explanation: 'мой/моя/моё (mi), твой/твоя/твоё (tu), его/её (su de él/ella), наш/наша/наше (nuestro). Concuerdan en género con lo poseído.', examples: [{ text: 'мой дом / моя книга / моё окно', translation: 'mi casa / mi libro / mi ventana' }] },

    // === A2 ===
    { title: 'Падежи — Los 6 casos', level: 'A2', category: 'sentence', explanation: 'Nominativo, Genitivo, Dativo, Acusativo, Instrumental, Preposicional. Cada caso tiene terminaciones según género y número.', examples: [{ text: 'книга (Nom) / нет книги (Gen)', translation: 'libro / no hay libro' }, { text: 'Даю книгу (Acus) другу (Dat)', translation: 'Doy el libro al amigo' }] },
    { title: 'Вид глагола — Aspecto verbal', level: 'A2', category: 'verbs', explanation: 'Imperfectivo: proceso, habitual. Perfectivo: completado, resultado. Cada verbo tiene par aspectual.', examples: [{ text: 'читать (imp) / прочитать (perf)', translation: 'leer (proceso) / leer (completar)' }] },
    { title: 'Прошедшее время — Pasado', level: 'A2', category: 'verbs', explanation: 'Raíz + -л (m), -ла (f), -ло (n), -ли (pl). Concuerda en género con el sujeto.', examples: [{ text: 'Он читал / Она читала / Они читали', translation: 'Él leía / Ella leía / Ellos leían' }] },
    { title: 'Будущее время — Futuro', level: 'A2', category: 'verbs', explanation: 'Imperfectivo: буду + infinitivo. Perfectivo: forma conjugada directa. быть→буду, будешь, будет, будем, будете, будут.', examples: [{ text: 'Я буду читать (imp)', translation: 'Estaré leyendo' }, { text: 'Я прочитаю (perf)', translation: 'Lo leeré (terminaré)' }] },
    { title: 'Множественное число — Plural', level: 'A2', category: 'sentence', explanation: 'Masc: -ы/-и (стол→столы). Fem: -ы/-и (книга→книги). Neutro: -а/-я (окно→окна). Irregulares: друг→друзья, ребёнок→дети.', examples: [{ text: 'столы / книги / окна', translation: 'mesas / libros / ventanas' }, { text: 'друзья / дети / люди', translation: 'amigos / niños / personas' }] },

    // === B1 ===
    { title: 'Предлоги + падеж — Preposiciones', level: 'B1', category: 'sentence', explanation: 'в/на + Prep (ubicación), в/на + Acus (dirección). из/с + Gen (desde). к + Dat (hacia). о + Prep (sobre).', examples: [{ text: 'Я живу в Москве (Prep)', translation: 'Vivo en Moscú' }, { text: 'Я иду в школу (Acus)', translation: 'Voy a la escuela' }] },
    { title: 'Движение — Verbos de movimiento', level: 'B1', category: 'verbs', explanation: 'Pares: идти/ходить (pie), ехать/ездить (transporte). Primero = unidireccional, segundo = habitual.', examples: [{ text: 'Я иду в школу (ahora)', translation: 'Voy a la escuela ahora' }, { text: 'Я хожу в школу каждый день', translation: 'Voy a la escuela todos los días' }] },
    { title: 'Числительные — Números y caso', level: 'B1', category: 'advanced', explanation: '1 + Nom.sg, 2-4 + Gen.sg, 5-20 + Gen.pl. Una de las reglas más complejas del ruso.', examples: [{ text: 'один стол / два стола / пять столов', translation: 'una mesa / dos mesas / cinco mesas' }] },
    { title: 'Условные предложения — Condicionales', level: 'B1', category: 'sentence', explanation: 'Real: Если + futuro, futuro. Irreal: Если бы + pasado, pasado + бы. бы puede ir después de cualquier palabra.', examples: [{ text: 'Если будет дождь, я останусь дома', translation: 'Si llueve, me quedaré en casa' }, { text: 'Если бы я знал, я бы помог', translation: 'Si yo supiera, ayudaría' }] },
    { title: 'Степени сравнения — Comparativos', level: 'B1', category: 'adjectives', explanation: 'Comparativo: -ее/-ей (красивее = más bonito), чем (que). Superlativo: самый + adj, o -ейший. Irregulares: хороший→лучше, плохой→хуже.', examples: [{ text: 'Москва больше, чем Киев', translation: 'Moscú es más grande que Kiev' }, { text: 'Это самый красивый город', translation: 'Esta es la ciudad más bonita' }] },

    // === B2 ===
    { title: 'Причастия — Participios', level: 'B2', category: 'advanced', explanation: 'Activos presente (-ущий/-ющий/-ащий/-ящий), activos pasado (-вший/-ший), pasivos presente (-емый/-имый), pasivos pasado (-нный/-тый). Muy usados en textos escritos.', examples: [{ text: 'читающий студент (que lee)', translation: 'el estudiante que lee' }, { text: 'написанная книга (escrita)', translation: 'el libro escrito' }] },
    { title: 'Деепричастия — Gerundios', level: 'B2', category: 'advanced', explanation: 'Imp: -а/-я (читая = leyendo). Perf: -в/-вши (прочитав = habiendo leído). Expresan acción simultánea o anterior.', examples: [{ text: 'Читая книгу, он заснул', translation: 'Leyendo el libro, se durmió' }, { text: 'Закончив работу, я ушёл', translation: 'Habiendo terminado el trabajo, me fui' }] },
  ],

  ar: [
    // === A1 ===
    { title: 'الأبجدية — Alfabeto', level: 'A1', category: 'writing', explanation: '28 letras, derecha a izquierda. 4 formas por letra. 3 vocales largas y 3 cortas (diacríticos).', examples: [{ text: 'ب: بـ ـبـ ـب (ba)', translation: 'ba — inicial, media, final' }, { text: 'كتاب = ك+ت+ا+ب', translation: 'libro = k+t+a+b' }] },
    { title: 'الجملة الاسمية — Oración nominal', level: 'A1', category: 'sentence', explanation: 'Sujeto + predicado, sin verbo "ser" en presente. Negar: ليس/ما.', examples: [{ text: 'الكتاب كبير', translation: 'El libro es grande' }, { text: 'محمد طالب', translation: 'Muhammad es estudiante' }] },
    { title: 'الضمائر — Pronombres', level: 'A1', category: 'sentence', explanation: 'أنا (yo), أنتَ/أنتِ (tú m/f), هو (él), هي (ella), نحن (nosotros), هم (ellos), هنّ (ellas).', examples: [{ text: 'أنا طالب', translation: 'Yo soy estudiante' }, { text: 'نحن من مصر', translation: 'Somos de Egipto' }] },
    { title: 'حروف الجر — Preposiciones', level: 'A1', category: 'sentence', explanation: 'في (en), من (de/desde), إلى (a/hacia), على (sobre), مع (con), بـ (con/por medio de), لـ (para).', examples: [{ text: 'أنا في المدرسة', translation: 'Estoy en la escuela' }, { text: 'ذهبت إلى السوق', translation: 'Fui al mercado' }] },

    // === A2 ===
    { title: 'الجذر الثلاثي — Raíz trilítera', level: 'A2', category: 'sentence', explanation: '3 consonantes portan el significado base. De ك-ت-ب: كتب (escribió), كاتب (escritor), كتاب (libro), مكتبة (biblioteca).', examples: [{ text: 'د-ر-س: درس، مدرسة، درس', translation: 'estudió, escuela, lección' }] },
    { title: 'تصريف الفعل الماضي — Pasado', level: 'A2', category: 'verbs', explanation: 'Forma base + sufijos: كتبَ (él), كتبَت (ella), كتبتُ (yo), كتبنا (nosotros), كتبوا (ellos).', examples: [{ text: 'كتبتُ رسالة', translation: 'Escribí una carta' }, { text: 'ذهبَت إلى المدرسة', translation: 'Ella fue a la escuela' }] },
    { title: 'الفعل المضارع — Presente/Futuro', level: 'A2', category: 'verbs', explanation: 'Prefijos: أ- (yo), تـ (tú/ella), يـ (él/ellos), نـ (nosotros). Futuro: سـ/سوف + presente.', examples: [{ text: 'أكتُبُ / يكتُبُ', translation: 'Escribo / Él escribe' }, { text: 'سأذهب غدًا', translation: 'Iré mañana' }] },
    { title: 'النفي — Negación', level: 'A2', category: 'sentence', explanation: 'لا + presente (no hago). ما + pasado (no hice). لن + presente subjuntivo (no haré). ليس (no es/ser negado).', examples: [{ text: 'لا أفهم', translation: 'No entiendo' }, { text: 'ما ذهبتُ', translation: 'No fui' }, { text: 'لن أذهب', translation: 'No iré' }] },

    // === B1 ===
    { title: 'المفرد والمثنى والجمع — Número', level: 'B1', category: 'sentence', explanation: 'Singular, dual (-ان/-ين), plural regular (m: -ون, f: -ات), plural irregular (جمع تكسير).', examples: [{ text: 'كتاب / كتابان / كتب', translation: 'libro / dos libros / libros' }] },
    { title: 'الإضافة — Estado constructo', level: 'B1', category: 'advanced', explanation: 'Dos sustantivos juntos para posesión. El primero pierde ال y tanween.', examples: [{ text: 'كتاب الطالب', translation: 'El libro del estudiante' }, { text: 'كتابي / كتابك', translation: 'Mi libro / Tu libro' }] },
    { title: 'الأفعال المزيدة — Formas derivadas', level: 'B1', category: 'advanced', explanation: '10 formas (أوزان) que modifican el significado de la raíz trilítera. Forma II (فعّل): causativo/intensivo. Forma V (تفعّل): reflexivo de II. Forma VIII (افتعل): reflexivo.', examples: [{ text: 'علم (saber) → علّم (enseñar) → تعلّم (aprender)', translation: 'Forma I → II → V' }, { text: 'كتب (escribir) → كاتب (corresponder) → اكتتب (suscribirse)', translation: 'Formas derivadas de k-t-b' }] },
    { title: 'الجملة الفعلية — Oración verbal', level: 'B1', category: 'sentence', explanation: 'Orden: Verbo + Sujeto + Objeto (VSO). El verbo concuerda en género con el sujeto. Diferente de la oración nominal.', examples: [{ text: 'ذهب الولدُ إلى المدرسة', translation: 'El niño fue a la escuela (VSO)' }, { text: 'كتبت الطالبةُ الدرسَ', translation: 'La estudiante escribió la lección' }] },
  ],

  hi: [
    // === A1 ===
    { title: 'देवनागरी लिपि — Alfabeto', level: 'A1', category: 'writing', explanation: 'Alfasilabario con vocales independientes y consonantes con vocal inherente "a". Signos vocálicos (मात्रा) se añaden a consonantes.', examples: [{ text: 'क ख ग घ (ka kha ga gha)', translation: 'Consonantes guturales' }, { text: 'नमस्ते = न+म+स+ते', translation: 'Hola' }] },
    { title: 'वाक्य संरचना SOV — Estructura', level: 'A1', category: 'sentence', explanation: 'Hindi es SOV: Sujeto + Objeto + Verbo. Postposiciones en vez de preposiciones.', examples: [{ text: 'मैं पानी पीता हूँ', translation: 'Yo agua bebo (Yo bebo agua)' }] },
    { title: 'लिंग — Género gramatical', level: 'A1', category: 'sentence', explanation: 'Todo sustantivo es masculino o femenino. Afecta adjetivos y verbos. -ा = masc, -ी = fem.', examples: [{ text: 'लड़का अच्छा है / लड़की अच्छी है', translation: 'El chico es bueno / La chica es buena' }] },
    { title: 'होना — Verbo ser/estar', level: 'A1', category: 'verbs', explanation: 'Presente: हूँ (yo), है (él/ella/tú), हैं (nosotros/ellos/usted formal), हो (tú informal). Pasado: था/थी/थे/थीं.', examples: [{ text: 'मैं छात्र हूँ / वह अच्छा है', translation: 'Yo soy estudiante / Él es bueno' }, { text: 'वह यहाँ थी', translation: 'Ella estaba aquí' }] },

    // === A2 ===
    { title: 'परसर्ग — Postposiciones', level: 'A2', category: 'sentence', explanation: 'में (en), पर (sobre), से (de/desde), को (a), का/की/के (de/posesión), तक (hasta), के लिए (para).', examples: [{ text: 'घर में (en la casa)', translation: 'En la casa' }, { text: 'दिल्ली से (desde Delhi)', translation: 'Desde Delhi' }] },
    { title: 'क्रिया — Sistema verbal', level: 'A2', category: 'verbs', explanation: 'Infinitivo: -ना. Raíz + ता/ती/ते + हूँ/है/हैं. Concuerda en género y número.', examples: [{ text: 'मैं खाता हूँ (m) / खाती हूँ (f)', translation: 'Yo como (masc/fem)' }] },
    { title: 'भूतकाल — Pasado', level: 'A2', category: 'verbs', explanation: 'Raíz + आ/ई/ए. Con verbos transitivos, sujeto toma ने y verbo concuerda con objeto.', examples: [{ text: 'वह गया (m) / गई (f)', translation: 'Él fue / Ella fue' }, { text: 'उसने किताब पढ़ी', translation: 'Él/Ella leyó el libro' }] },
    { title: 'प्रगतिशील काल — Progresivo', level: 'A2', category: 'verbs', explanation: 'Raíz + रहा/रही/रहे + होना. Indica acción en progreso. Presente: रहा हूँ. Pasado: रहा था.', examples: [{ text: 'मैं खा रहा हूँ', translation: 'Estoy comiendo' }, { text: 'वह पढ़ रही थी', translation: 'Ella estaba leyendo' }] },

    // === B1 ===
    { title: 'भविष्यकाल — Futuro', level: 'B1', category: 'verbs', explanation: 'Raíz + ऊँगा/ऊँगी, एगा/एगी, एँगे/एँगी, ओगे/ओगी. Concuerda en género.', examples: [{ text: 'मैं जाऊँगा/जाऊँगी', translation: 'Yo iré (m/f)' }] },
    { title: 'सकना / चाहना — Poder / Querer', level: 'B1', category: 'verbs', explanation: 'सकना (poder): raíz + सकता + हूँ/है. चाहना (querer). चाहिए = necesitar.', examples: [{ text: 'मैं हिंदी बोल सकता हूँ', translation: 'Puedo hablar hindi' }, { text: 'मुझे पानी चाहिए', translation: 'Necesito agua' }] },
    { title: 'संयुक्त क्रिया — Verbos compuestos', level: 'B1', category: 'advanced', explanation: 'Raíz + verbo auxiliar que añade matiz: जाना (completivo), लेना (para sí), देना (para otros), उठना (repentino), बैठना (irreflexivo).', examples: [{ text: 'खा लो (come ya/para ti)', translation: 'Come (acción para uno mismo)' }, { text: 'बोल उठा (dijo de repente)', translation: 'Dijo de repente' }] },
    { title: 'कारक — Sistema de casos oblicuo', level: 'B1', category: 'sentence', explanation: 'Caso directo (sujeto) vs oblicuo (con postposiciones). Masc sg: -ा→-े (लड़का→लड़के को). Plural: siempre oblicuo con -ों.', examples: [{ text: 'लड़का (directo) / लड़के को (oblicuo)', translation: 'chico / al chico' }, { text: 'लड़कों ने (oblicuo plural)', translation: 'los chicos (sujeto con ने)' }] },
  ],

  es: [
    // === A1 ===
    { title: 'Ser vs Estar', level: 'A1', category: 'verbs', explanation: 'Ser: identidad, origen, profesión, permanente. Estar: ubicación, estado temporal, emociones, resultado. Algunos adjetivos cambian: ser listo (inteligente) vs estar listo (preparado).', examples: [{ text: 'Soy profesor / Estoy cansado', translation: 'I am a teacher / I am tired' }, { text: 'Es aburrido / Está aburrido', translation: 'He is boring / He is bored' }] },
    { title: 'Presente de indicativo', level: 'A1', category: 'verbs', explanation: '-ar: -o, -as, -a, -amos, -áis, -an. -er: -o, -es, -e, -emos, -éis, -en. -ir: -o, -es, -e, -imos, -ís, -en. Cambios vocálicos: e→ie, o→ue, e→i.', examples: [{ text: 'Hablo / Comes / Vive', translation: 'I speak / You eat / He lives' }, { text: 'Quiero / Puedo / Pido', translation: 'I want / I can / I ask' }] },
    { title: 'Pronombres de objeto', level: 'A1', category: 'sentence', explanation: 'OD: me, te, lo/la, nos, os, los/las. OI: me, te, le, nos, os, les. Van antes del verbo conjugado. Doble: le→se antes de lo/la.', examples: [{ text: 'Lo veo (al gato)', translation: 'I see it' }, { text: 'Se lo doy', translation: 'I give it to him' }] },

    // === A2 ===
    { title: 'Pretérito indefinido', level: 'A2', category: 'verbs', explanation: '-ar: -é, -aste, -ó, -amos, -asteis, -aron. -er/-ir: -í, -iste, -ió. Irregulares: ser/ir (fui), hacer (hice), tener (tuve).', examples: [{ text: 'Ayer comí paella', translation: 'Yesterday I ate paella' }, { text: 'Hicimos la tarea', translation: 'We did the homework' }] },
    { title: 'Pretérito imperfecto', level: 'A2', category: 'verbs', explanation: '-ar: -aba. -er/-ir: -ía. Solo 3 irregulares: ser (era), ir (iba), ver (veía). Hábitos pasados, descripciones.', examples: [{ text: 'Cuando era niño, jugaba mucho', translation: 'When I was a child, I played a lot' }] },
    { title: 'Por vs Para', level: 'A2', category: 'expressions', explanation: 'Por: causa, intercambio, duración, medio. Para: destino, propósito, opinión, fecha límite, receptor.', examples: [{ text: 'Estudio por la noche', translation: 'I study at night' }, { text: 'Este regalo es para ti', translation: 'This gift is for you' }] },

    // === B1 ===
    { title: 'Subjuntivo presente', level: 'B1', category: 'verbs', explanation: 'Invierte vocales: -ar→e, -er/-ir→a. Deseo, emoción, duda, mandato, ojalá, cuando (futuro).', examples: [{ text: 'Quiero que vengas', translation: 'I want you to come' }, { text: 'Ojalá tenga suerte', translation: 'I hope I have luck' }] },
    { title: 'Futuro y Condicional', level: 'B1', category: 'verbs', explanation: 'Futuro: infinitivo + -é, -ás, -á, -emos, -éis, -án. Condicional: + -ía. Irregulares: tener→tendr-, poder→podr-.', examples: [{ text: 'Mañana iré al cine', translation: 'Tomorrow I will go' }, { text: 'Me gustaría un café', translation: 'I would like a coffee' }] },
    { title: 'Perífrasis verbales', level: 'B1', category: 'verbs', explanation: 'ir a + inf, estar + gerundio, tener que + inf, deber + inf, acabar de + inf, volver a + inf.', examples: [{ text: 'Voy a estudiar', translation: 'I\'m going to study' }, { text: 'Acabo de llegar', translation: 'I just arrived' }] },

    // === B2 ===
    { title: 'Subjuntivo imperfecto', level: 'B2', category: 'verbs', explanation: 'Dos formas: -ra (más común) y -se. Base: 3ª pl pretérito. Condicionales irreales: Si tuviera/tuviese...', examples: [{ text: 'Si pudiera, viajaría', translation: 'If I could, I would travel' }, { text: 'Ojalá estuvieras aquí', translation: 'I wish you were here' }] },
    { title: 'Voz pasiva y se impersonal', level: 'B2', category: 'sentence', explanation: 'Pasiva: ser + participio. Pasiva refleja: se + verbo (más natural en español). Se impersonal: se + 3ª persona.', examples: [{ text: 'Se habla español', translation: 'Spanish is spoken' }, { text: 'Se necesitan empleados', translation: 'Employees needed' }] },

    // === C1 ===
    { title: 'Oraciones concesivas avanzadas', level: 'C1', category: 'advanced', explanation: 'Aunque + indicativo (hecho) / subjuntivo (hipótesis). A pesar de que, por más que, si bien, aun cuando.', examples: [{ text: 'Por más que estudie, no apruebo', translation: 'No matter how much I study, I don\'t pass' }, { text: 'Aun cuando llueva, iré', translation: 'Even if it rains, I\'ll go' }] },
    { title: 'Subjuntivo en cláusulas relativas', level: 'C1', category: 'advanced', explanation: 'Indicativo: antecedente conocido/existente. Subjuntivo: antecedente desconocido/inexistente. "Busco a alguien que hable" vs "Conozco a alguien que habla".', examples: [{ text: 'Busco un libro que tenga ilustraciones', translation: 'I\'m looking for a book that has illustrations' }, { text: 'No hay nadie que sepa la respuesta', translation: 'There\'s no one who knows the answer' }] },
  ],
};

// Vocabulary organized by certification levels
export const VOCAB_REF: Record<string, Record<string, VocabEntry[]>> = {
  jp: {
    N5: [
      { word: 'こんにちは', reading: 'konnichiwa', meaning: 'Hola', example: 'こんにちは、元気ですか？' },
      { word: 'ありがとう', reading: 'arigatou', meaning: 'Gracias', example: 'ありがとうございます' },
      { word: 'すみません', reading: 'sumimasen', meaning: 'Disculpe', example: 'すみません、えきはどこですか？' },
      { word: 'おはよう', reading: 'ohayou', meaning: 'Buenos días', example: 'おはようございます' },
      { word: 'さようなら', reading: 'sayounara', meaning: 'Adiós', example: 'さようなら、また明日' },
      { word: 'みず', reading: 'mizu', meaning: 'Agua', example: 'みずをください' },
      { word: 'ごはん', reading: 'gohan', meaning: 'Arroz/Comida', example: 'ごはんをたべます' },
      { word: 'がっこう', reading: 'gakkou', meaning: 'Escuela', example: 'がっこうにいきます' },
      { word: 'せんせい', reading: 'sensei', meaning: 'Profesor', example: 'せんせいはやさしいです' },
      { word: 'ともだち', reading: 'tomodachi', meaning: 'Amigo', example: 'ともだちとあそびます' },
      { word: 'おおきい', reading: 'ookii', meaning: 'Grande', example: 'おおきいいえです' },
      { word: 'ちいさい', reading: 'chiisai', meaning: 'Pequeño', example: 'ちいさいねこです' },
      { word: 'たかい', reading: 'takai', meaning: 'Caro/Alto', example: 'このほんはたかいです' },
      { word: 'やすい', reading: 'yasui', meaning: 'Barato', example: 'やすいレストランです' },
      { word: 'いく', reading: 'iku', meaning: 'Ir', example: 'がっこうにいきます' },
      { word: 'くる', reading: 'kuru', meaning: 'Venir', example: 'ともだちがきます' },
      { word: 'たべる', reading: 'taberu', meaning: 'Comer', example: 'ごはんをたべます' },
      { word: 'のむ', reading: 'nomu', meaning: 'Beber', example: 'おちゃをのみます' },
      { word: 'きょう', reading: 'kyou', meaning: 'Hoy', example: 'きょうはいいてんきです' },
      { word: 'あした', reading: 'ashita', meaning: 'Mañana', example: 'あしたがっこうにいきます' },
    ],
    N4: [
      { word: '経験', reading: 'keiken', meaning: 'Experiencia', example: 'いい経験でした' },
      { word: '将来', reading: 'shourai', meaning: 'Futuro', example: '将来の夢は何ですか？' },
      { word: '社会', reading: 'shakai', meaning: 'Sociedad', example: '社会のルールを守ります' },
      { word: '文化', reading: 'bunka', meaning: 'Cultura', example: '日本の文化がすきです' },
      { word: '関係', reading: 'kankei', meaning: 'Relación', example: '関係がいいです' },
      { word: '意見', reading: 'iken', meaning: 'Opinión', example: 'あなたの意見は？' },
      { word: '趣味', reading: 'shumi', meaning: 'Hobby', example: '趣味は読書です' },
      { word: '予定', reading: 'yotei', meaning: 'Plan', example: '明日の予定はありますか？' },
      { word: '特別', reading: 'tokubetsu', meaning: 'Especial', example: '特別な日です' },
      { word: '必要', reading: 'hitsuyou', meaning: 'Necesario', example: 'パスポートが必要です' },
      { word: '普通', reading: 'futsuu', meaning: 'Normal/Común', example: '普通の生活です' },
      { word: '残念', reading: 'zannen', meaning: 'Lamentable', example: '残念ですが、行けません' },
      { word: '複雑', reading: 'fukuzatsu', meaning: 'Complicado', example: '複雑な問題です' },
      { word: '簡単', reading: 'kantan', meaning: 'Fácil/Simple', example: '簡単な料理です' },
      { word: '紹介する', reading: 'shoukai suru', meaning: 'Presentar', example: '友達を紹介します' },
    ],
    N3: [
      { word: '影響', reading: 'eikyou', meaning: 'Influencia', example: '環境に影響を与える' },
      { word: '効果', reading: 'kouka', meaning: 'Efecto', example: '薬の効果がある' },
      { word: '比較', reading: 'hikaku', meaning: 'Comparación', example: '二つを比較する' },
      { word: '実現', reading: 'jitsugen', meaning: 'Realización', example: '夢を実現する' },
      { word: '対応', reading: 'taiou', meaning: 'Correspondencia/Respuesta', example: '問題に対応する' },
      { word: '状況', reading: 'joukyou', meaning: 'Situación', example: '現在の状況を説明する' },
      { word: '発展', reading: 'hatten', meaning: 'Desarrollo', example: '経済が発展する' },
      { word: '改善', reading: 'kaizen', meaning: 'Mejora', example: '生活を改善する' },
      { word: '維持', reading: 'iji', meaning: 'Mantenimiento', example: '健康を維持する' },
      { word: '確認', reading: 'kakunin', meaning: 'Confirmación', example: '予約を確認する' },
      { word: '増加', reading: 'zouka', meaning: 'Aumento', example: '人口が増加する' },
      { word: '減少', reading: 'genshou', meaning: 'Disminución', example: '出生率が減少する' },
    ],
  },

  fr: {
    A1: [
      { word: 'bonjour', meaning: 'Hola/Buenos días', example: 'Bonjour, comment allez-vous ?' },
      { word: 'merci', meaning: 'Gracias', example: 'Merci beaucoup !' },
      { word: 'au revoir', meaning: 'Adiós', example: 'Au revoir, à demain !' },
      { word: 's\'il vous plaît', meaning: 'Por favor', example: 'Un café, s\'il vous plaît.' },
      { word: 'maison', meaning: 'Casa', example: 'Ma maison est grande.' },
      { word: 'famille', meaning: 'Familia', example: 'Ma famille est importante.' },
      { word: 'école', meaning: 'Escuela', example: 'Je vais à l\'école.' },
      { word: 'travail', meaning: 'Trabajo', example: 'J\'aime mon travail.' },
      { word: 'ami / amie', meaning: 'Amigo/a', example: 'Elle est ma meilleure amie.' },
      { word: 'manger', meaning: 'Comer', example: 'Je mange une pomme.' },
      { word: 'boire', meaning: 'Beber', example: 'Je bois de l\'eau.' },
      { word: 'parler', meaning: 'Hablar', example: 'Je parle français.' },
      { word: 'grand / grande', meaning: 'Grande', example: 'Une grande ville.' },
      { word: 'petit / petite', meaning: 'Pequeño/a', example: 'Un petit chat.' },
      { word: 'aujourd\'hui', meaning: 'Hoy', example: 'Aujourd\'hui il fait beau.' },
    ],
    A2: [
      { word: 'expérience', meaning: 'Experiencia', example: 'C\'est une bonne expérience.' },
      { word: 'environnement', meaning: 'Medio ambiente', example: 'Protégeons l\'environnement.' },
      { word: 'réussir', meaning: 'Tener éxito', example: 'Elle a réussi son examen.' },
      { word: 'découvrir', meaning: 'Descubrir', example: 'J\'adore découvrir de nouvelles cultures.' },
      { word: 'se souvenir', meaning: 'Recordar', example: 'Je me souviens de toi.' },
      { word: 's\'inquiéter', meaning: 'Preocuparse', example: 'Ne t\'inquiète pas !' },
      { word: 'dépendre', meaning: 'Depender', example: 'Ça dépend de la situation.' },
      { word: 'cependant', meaning: 'Sin embargo', example: 'C\'est cher, cependant c\'est bon.' },
      { word: 'grâce à', meaning: 'Gracias a', example: 'Grâce à toi, j\'ai réussi.' },
      { word: 'malgré', meaning: 'A pesar de', example: 'Malgré la pluie, nous sommes sortis.' },
      { word: 'améliorer', meaning: 'Mejorar', example: 'Je veux améliorer mon français.' },
      { word: 'profiter', meaning: 'Aprovechar/Disfrutar', example: 'Profitez de la vie !' },
    ],
    B1: [
      { word: 'néanmoins', meaning: 'No obstante', example: 'C\'est difficile, néanmoins possible.' },
      { word: 'en revanche', meaning: 'En cambio', example: 'Il pleut ici ; en revanche, là-bas il fait beau.' },
      { word: 'bouleversement', meaning: 'Trastorno', example: 'Un bouleversement dans sa vie.' },
      { word: 'épanouissement', meaning: 'Desarrollo personal', example: 'L\'épanouissement au travail est essentiel.' },
      { word: 'revendication', meaning: 'Reivindicación', example: 'Les revendications des travailleurs.' },
      { word: 'patrimoine', meaning: 'Patrimonio', example: 'Le patrimoine culturel de la France.' },
      { word: 'enjeu', meaning: 'Desafío/Lo que está en juego', example: 'C\'est un enjeu majeur.' },
      { word: 'davantage', meaning: 'Más/Todavía más', example: 'Il faudrait travailler davantage.' },
      { word: 'aboutir', meaning: 'Resultar en/Lograr', example: 'Les négociations ont abouti.' },
      { word: 'approfondir', meaning: 'Profundizar', example: 'Il faut approfondir cette question.' },
    ],
  },

  zh: {
    HSK1: [
      { word: '你好', reading: 'nǐ hǎo', meaning: 'Hola', example: '你好，你叫什么名字？' },
      { word: '谢谢', reading: 'xiè xie', meaning: 'Gracias', example: '谢谢你的帮助！' },
      { word: '再见', reading: 'zài jiàn', meaning: 'Adiós', example: '再见，明天见！' },
      { word: '水', reading: 'shuǐ', meaning: 'Agua', example: '我想喝水。' },
      { word: '饭', reading: 'fàn', meaning: 'Arroz/Comida', example: '吃饭了吗？' },
      { word: '学校', reading: 'xué xiào', meaning: 'Escuela', example: '我在学校学习。' },
      { word: '老师', reading: 'lǎo shī', meaning: 'Profesor', example: '老师好！' },
      { word: '朋友', reading: 'péng you', meaning: 'Amigo', example: '他是我的好朋友。' },
      { word: '大', reading: 'dà', meaning: 'Grande', example: '这个房间很大。' },
      { word: '小', reading: 'xiǎo', meaning: 'Pequeño', example: '我有一只小猫。' },
      { word: '好', reading: 'hǎo', meaning: 'Bueno', example: '今天天气很好。' },
      { word: '吃', reading: 'chī', meaning: 'Comer', example: '我吃苹果。' },
      { word: '喝', reading: 'hē', meaning: 'Beber', example: '我喝茶。' },
      { word: '看', reading: 'kàn', meaning: 'Ver/Mirar', example: '我在看书。' },
      { word: '今天', reading: 'jīn tiān', meaning: 'Hoy', example: '今天是星期一。' },
    ],
    HSK2: [
      { word: '已经', reading: 'yǐ jīng', meaning: 'Ya', example: '我已经吃了。' },
      { word: '准备', reading: 'zhǔn bèi', meaning: 'Preparar', example: '我准备好了。' },
      { word: '可能', reading: 'kě néng', meaning: 'Posible', example: '明天可能下雨。' },
      { word: '一起', reading: 'yì qǐ', meaning: 'Juntos', example: '我们一起去吧！' },
      { word: '帮助', reading: 'bāng zhù', meaning: 'Ayudar', example: '谢谢你帮助我。' },
      { word: '认为', reading: 'rèn wéi', meaning: 'Pensar/Opinar', example: '我认为他说得对。' },
      { word: '虽然', reading: 'suī rán', meaning: 'Aunque', example: '虽然累，但是很开心。' },
      { word: '而且', reading: 'ér qiě', meaning: 'Además', example: '他聪明，而且努力。' },
      { word: '比较', reading: 'bǐ jiào', meaning: 'Relativamente', example: '今天比较冷。' },
      { word: '影响', reading: 'yǐng xiǎng', meaning: 'Influencia', example: '这对我影响很大。' },
    ],
    HSK3: [
      { word: '丰富', reading: 'fēng fù', meaning: 'Rico/Abundante', example: '这里的文化很丰富。' },
      { word: '经验', reading: 'jīng yàn', meaning: 'Experiencia', example: '他有很多工作经验。' },
      { word: '适应', reading: 'shì yìng', meaning: 'Adaptarse', example: '你适应了新环境吗？' },
      { word: '改变', reading: 'gǎi biàn', meaning: 'Cambiar', example: '我想改变自己。' },
      { word: '发展', reading: 'fā zhǎn', meaning: 'Desarrollo', example: '经济在发展。' },
      { word: '提高', reading: 'tí gāo', meaning: 'Mejorar/Elevar', example: '我要提高中文水平。' },
      { word: '实际', reading: 'shí jì', meaning: 'Real/Práctico', example: '实际情况不一样。' },
      { word: '突然', reading: 'tū rán', meaning: 'De repente', example: '他突然回来了。' },
    ],
  },

  en: {
    A1: [
      { word: 'Hello', meaning: 'Hola', example: 'Hello, how are you?' },
      { word: 'Thank you', meaning: 'Gracias', example: 'Thank you very much!' },
      { word: 'Goodbye', meaning: 'Adiós', example: 'Goodbye, see you tomorrow!' },
      { word: 'Please', meaning: 'Por favor', example: 'A coffee, please.' },
      { word: 'House', meaning: 'Casa', example: 'My house is big.' },
      { word: 'Family', meaning: 'Familia', example: 'I love my family.' },
      { word: 'Friend', meaning: 'Amigo', example: 'She is my best friend.' },
      { word: 'School', meaning: 'Escuela', example: 'I go to school.' },
      { word: 'Work', meaning: 'Trabajo', example: 'I like my work.' },
      { word: 'Today', meaning: 'Hoy', example: 'Today is Monday.' },
      { word: 'Big', meaning: 'Grande', example: 'A big city.' },
      { word: 'Small', meaning: 'Pequeño', example: 'A small cat.' },
      { word: 'Good', meaning: 'Bueno', example: 'Good morning!' },
      { word: 'Eat', meaning: 'Comer', example: 'I eat breakfast.' },
      { word: 'Drink', meaning: 'Beber', example: 'I drink water.' },
    ],
    A2: [
      { word: 'Experience', meaning: 'Experiencia', example: 'It was a great experience.' },
      { word: 'Knowledge', meaning: 'Conocimiento', example: 'Knowledge is power.' },
      { word: 'Environment', meaning: 'Medio ambiente', example: 'Protect the environment.' },
      { word: 'Improve', meaning: 'Mejorar', example: 'I want to improve my English.' },
      { word: 'Achieve', meaning: 'Lograr', example: 'You can achieve your goals.' },
      { word: 'However', meaning: 'Sin embargo', example: 'It\'s hard; however, it\'s possible.' },
      { word: 'Although', meaning: 'Aunque', example: 'Although it rained, we went out.' },
      { word: 'Moreover', meaning: 'Además', example: 'Moreover, he speaks three languages.' },
      { word: 'Opportunity', meaning: 'Oportunidad', example: 'Don\'t miss this opportunity.' },
      { word: 'Development', meaning: 'Desarrollo', example: 'Economic development is important.' },
    ],
    B1: [
      { word: 'Nevertheless', meaning: 'No obstante', example: 'It was risky; nevertheless, he tried.' },
      { word: 'Furthermore', meaning: 'Además (formal)', example: 'Furthermore, the data supports our claim.' },
      { word: 'Acknowledge', meaning: 'Reconocer', example: 'I acknowledge my mistakes.' },
      { word: 'Consequence', meaning: 'Consecuencia', example: 'Every action has consequences.' },
      { word: 'Inevitable', meaning: 'Inevitable', example: 'Change is inevitable.' },
      { word: 'Reluctant', meaning: 'Reacio', example: 'She was reluctant to leave.' },
      { word: 'Thorough', meaning: 'Minucioso', example: 'A thorough investigation.' },
      { word: 'Comprehensive', meaning: 'Completo/Integral', example: 'A comprehensive guide.' },
    ],
  },

  pt: {
    A1: [
      { word: 'Olá', meaning: 'Hola', example: 'Olá, tudo bem?' },
      { word: 'Obrigado/a', meaning: 'Gracias', example: 'Muito obrigado!' },
      { word: 'Por favor', meaning: 'Por favor', example: 'Um café, por favor.' },
      { word: 'casa', meaning: 'Casa', example: 'Minha casa é grande.' },
      { word: 'família', meaning: 'Familia', example: 'Minha família é grande.' },
      { word: 'amigo/a', meaning: 'Amigo/a', example: 'Ele é meu melhor amigo.' },
      { word: 'escola', meaning: 'Escuela', example: 'Eu vou à escola.' },
      { word: 'trabalho', meaning: 'Trabajo', example: 'Eu gosto do meu trabalho.' },
      { word: 'comer', meaning: 'Comer', example: 'Eu como arroz.' },
      { word: 'beber', meaning: 'Beber', example: 'Eu bebo água.' },
      { word: 'grande', meaning: 'Grande', example: 'Uma cidade grande.' },
      { word: 'pequeno', meaning: 'Pequeño', example: 'Um gato pequeno.' },
      { word: 'hoje', meaning: 'Hoy', example: 'Hoje é segunda-feira.' },
      { word: 'saudade', meaning: 'Nostalgia', example: 'Tenho saudade do Brasil.' },
      { word: 'feliz', meaning: 'Feliz', example: 'Estou muito feliz!' },
    ],
    A2: [
      { word: 'experiência', meaning: 'Experiencia', example: 'Foi uma experiência incrível.' },
      { word: 'desenvolvimento', meaning: 'Desarrollo', example: 'O desenvolvimento econômico.' },
      { word: 'melhorar', meaning: 'Mejorar', example: 'Quero melhorar meu português.' },
      { word: 'conseguir', meaning: 'Conseguir/Lograr', example: 'Eu consegui o emprego!' },
      { word: 'entretanto', meaning: 'Sin embargo', example: 'É caro; entretanto, vale a pena.' },
      { word: 'além disso', meaning: 'Además', example: 'Além disso, ele fala três idiomas.' },
      { word: 'aproveitar', meaning: 'Aprovechar', example: 'Aproveite o momento!' },
      { word: 'conhecimento', meaning: 'Conocimiento', example: 'O conhecimento é importante.' },
      { word: 'ambiente', meaning: 'Ambiente', example: 'Precisamos cuidar do meio ambiente.' },
      { word: 'oportunidade', meaning: 'Oportunidad', example: 'Não perca essa oportunidade!' },
    ],
  },

  ko: {
    TOPIK1: [
      { word: '안녕하세요', reading: 'annyeonghaseyo', meaning: 'Hola (formal)', example: '안녕하세요, 잘 지내세요?' },
      { word: '감사합니다', reading: 'gamsahamnida', meaning: 'Gracias', example: '정말 감사합니다!' },
      { word: '물', reading: 'mul', meaning: 'Agua', example: '물을 마셔요.' },
      { word: '밥', reading: 'bap', meaning: 'Arroz/Comida', example: '밥 먹었어요?' },
      { word: '학교', reading: 'hakgyo', meaning: 'Escuela', example: '학교에 갑니다.' },
      { word: '학생', reading: 'haksaeng', meaning: 'Estudiante', example: '저는 학생입니다.' },
      { word: '선생님', reading: 'seonsaengnim', meaning: 'Profesor', example: '선생님, 감사합니다.' },
      { word: '친구', reading: 'chingu', meaning: 'Amigo', example: '제 친구는 한국 사람이에요.' },
      { word: '집', reading: 'jip', meaning: 'Casa', example: '집에 갈 거예요.' },
      { word: '오늘', reading: 'oneul', meaning: 'Hoy', example: '오늘 뭐 해요?' },
      { word: '내일', reading: 'naeil', meaning: 'Mañana', example: '내일 만나요.' },
      { word: '맛있다', reading: 'masitda', meaning: 'Delicioso', example: '이 음식이 맛있어요!' },
      { word: '좋다', reading: 'jota', meaning: 'Bueno', example: '한국어가 좋아요.' },
      { word: '크다', reading: 'keuda', meaning: 'Grande', example: '이 방이 커요.' },
      { word: '작다', reading: 'jakda', meaning: 'Pequeño', example: '이 가방이 작아요.' },
    ],
    TOPIK2: [
      { word: '경험', reading: 'gyeongheom', meaning: 'Experiencia', example: '좋은 경험이었어요.' },
      { word: '문화', reading: 'munhwa', meaning: 'Cultura', example: '한국 문화가 좋아요.' },
      { word: '관계', reading: 'gwangye', meaning: 'Relación', example: '좋은 관계를 유지해요.' },
      { word: '생각', reading: 'saenggak', meaning: 'Pensamiento', example: '좋은 생각이에요.' },
      { word: '발전', reading: 'baljeon', meaning: 'Desarrollo', example: '한국의 경제 발전.' },
      { word: '노력', reading: 'noryeok', meaning: 'Esfuerzo', example: '열심히 노력해요.' },
      { word: '성공', reading: 'seonggong', meaning: 'Éxito', example: '성공을 축하해요!' },
      { word: '그러나', reading: 'geureona', meaning: 'Sin embargo', example: '힘들었다. 그러나 해냈다.' },
      { word: '게다가', reading: 'gedaga', meaning: 'Además', example: '게다가 한국어도 잘해요.' },
      { word: '환경', reading: 'hwangyeong', meaning: 'Ambiente', example: '환경을 보호해야 해요.' },
    ],
  },

  ru: {
    A1: [
      { word: 'Привет', reading: 'privet', meaning: 'Hola (informal)', example: 'Привет, как дела?' },
      { word: 'Здравствуйте', reading: 'zdravstvuyte', meaning: 'Hola (formal)', example: 'Здравствуйте, как ваши дела?' },
      { word: 'Спасибо', reading: 'spasibo', meaning: 'Gracias', example: 'Большое спасибо!' },
      { word: 'Пожалуйста', reading: 'pozhaluysta', meaning: 'Por favor / De nada', example: 'Воду, пожалуйста.' },
      { word: 'вода', reading: 'voda', meaning: 'Agua', example: 'Я пью воду.' },
      { word: 'дом', reading: 'dom', meaning: 'Casa', example: 'Мой дом большой.' },
      { word: 'семья', reading: 'semya', meaning: 'Familia', example: 'У меня большая семья.' },
      { word: 'друг', reading: 'drug', meaning: 'Amigo', example: 'Он мой лучший друг.' },
      { word: 'работа', reading: 'rabota', meaning: 'Trabajo', example: 'Я иду на работу.' },
      { word: 'школа', reading: 'shkola', meaning: 'Escuela', example: 'Дети ходят в школу.' },
      { word: 'большой', reading: 'bolshoy', meaning: 'Grande', example: 'Москва — большой город.' },
      { word: 'маленький', reading: 'malenkiy', meaning: 'Pequeño', example: 'Маленькая квартира.' },
      { word: 'хороший', reading: 'khoroshiy', meaning: 'Bueno', example: 'Хорошая погода.' },
      { word: 'сегодня', reading: 'segodnya', meaning: 'Hoy', example: 'Сегодня понедельник.' },
      { word: 'завтра', reading: 'zavtra', meaning: 'Mañana', example: 'Завтра будет дождь.' },
    ],
    A2: [
      { word: 'опыт', reading: 'opyt', meaning: 'Experiencia', example: 'У него большой опыт.' },
      { word: 'развитие', reading: 'razvitie', meaning: 'Desarrollo', example: 'Развитие экономики.' },
      { word: 'улучшать', reading: 'uluchshat', meaning: 'Mejorar', example: 'Я хочу улучшить свой русский.' },
      { word: 'возможность', reading: 'vozmozhnost', meaning: 'Oportunidad', example: 'Это хорошая возможность.' },
      { word: 'однако', reading: 'odnako', meaning: 'Sin embargo', example: 'Дорого, однако красиво.' },
      { word: 'кроме того', reading: 'krome togo', meaning: 'Además', example: 'Кроме того, он говорит по-русски.' },
      { word: 'достижение', reading: 'dostizhenie', meaning: 'Logro', example: 'Это большое достижение.' },
      { word: 'окружающая среда', reading: 'okruzhayushchaya sreda', meaning: 'Medio ambiente', example: 'Защита окружающей среды.' },
    ],
  },

  ar: {
    A1: [
      { word: 'مرحبا', reading: 'marhaba', meaning: 'Hola', example: 'مرحبا، كيف حالك؟' },
      { word: 'السلام عليكم', reading: 'as-salamu alaykum', meaning: 'La paz sea contigo', example: 'السلام عليكم ورحمة الله' },
      { word: 'شكرا', reading: 'shukran', meaning: 'Gracias', example: 'شكرا جزيلا!' },
      { word: 'من فضلك', reading: 'min fadlak', meaning: 'Por favor', example: 'ماء، من فضلك.' },
      { word: 'ماء', reading: "ma'", meaning: 'Agua', example: 'أريد كوب ماء.' },
      { word: 'بيت', reading: 'bayt', meaning: 'Casa', example: 'بيتي قريب.' },
      { word: 'مدرسة', reading: 'madrasa', meaning: 'Escuela', example: 'أذهب إلى المدرسة.' },
      { word: 'صديق', reading: 'sadiq', meaning: 'Amigo', example: 'هو صديقي.' },
      { word: 'كبير', reading: 'kabir', meaning: 'Grande', example: 'البيت كبير.' },
      { word: 'صغير', reading: 'saghir', meaning: 'Pequeño', example: 'الطفل صغير.' },
      { word: 'جميل', reading: 'jamil', meaning: 'Hermoso', example: 'هذا مكان جميل.' },
      { word: 'اليوم', reading: 'al-yawm', meaning: 'Hoy', example: 'اليوم الطقس جميل.' },
      { word: 'كتاب', reading: 'kitab', meaning: 'Libro', example: 'أقرأ كتابا.' },
      { word: 'عائلة', reading: "a'ila", meaning: 'Familia', example: 'عائلتي كبيرة.' },
      { word: 'عمل', reading: 'amal', meaning: 'Trabajo', example: 'أحب عملي.' },
    ],
  },

  hi: {
    A1: [
      { word: 'नमस्ते', reading: 'namaste', meaning: 'Hola/Adiós', example: 'नमस्ते, कैसे हो?' },
      { word: 'धन्यवाद', reading: 'dhanyavaad', meaning: 'Gracias', example: 'बहुत धन्यवाद!' },
      { word: 'कृपया', reading: 'kripaya', meaning: 'Por favor', example: 'कृपया यहाँ बैठिए।' },
      { word: 'पानी', reading: 'pani', meaning: 'Agua', example: 'मुझे पानी चाहिए।' },
      { word: 'घर', reading: 'ghar', meaning: 'Casa', example: 'मेरा घर बड़ा है।' },
      { word: 'परिवार', reading: 'parivaar', meaning: 'Familia', example: 'मेरा परिवार बड़ा है।' },
      { word: 'दोस्त', reading: 'dost', meaning: 'Amigo', example: 'वह मेरा अच्छा दोस्त है।' },
      { word: 'काम', reading: 'kaam', meaning: 'Trabajo', example: 'मैं काम पर जाता हूँ।' },
      { word: 'किताब', reading: 'kitaab', meaning: 'Libro', example: 'यह किताब अच्छी है।' },
      { word: 'बड़ा', reading: 'bada', meaning: 'Grande', example: 'बड़ा शहर।' },
      { word: 'छोटा', reading: 'chhota', meaning: 'Pequeño', example: 'छोटा कमरा।' },
      { word: 'अच्छा', reading: 'achcha', meaning: 'Bueno', example: 'अच्छा मौसम।' },
      { word: 'आज', reading: 'aaj', meaning: 'Hoy', example: 'आज सोमवार है।' },
      { word: 'प्यार', reading: 'pyaar', meaning: 'Amor', example: 'मैं तुमसे प्यार करता हूँ।' },
      { word: 'ख़ुशी', reading: 'khushi', meaning: 'Felicidad', example: 'मुझे बहुत ख़ुशी है।' },
    ],
  },

  es: {
    A1: [
      { word: 'Hola', meaning: 'Hello', example: '¡Hola! ¿Cómo estás?' },
      { word: 'Gracias', meaning: 'Thank you', example: '¡Muchas gracias!' },
      { word: 'Por favor', meaning: 'Please', example: 'Un café, por favor.' },
      { word: 'Adiós', meaning: 'Goodbye', example: '¡Adiós, hasta mañana!' },
      { word: 'casa', meaning: 'House', example: 'Mi casa es tu casa.' },
      { word: 'familia', meaning: 'Family', example: 'Mi familia es grande.' },
      { word: 'amigo', meaning: 'Friend', example: 'Es mi mejor amigo.' },
      { word: 'trabajo', meaning: 'Work', example: 'Me gusta mi trabajo.' },
      { word: 'grande', meaning: 'Big', example: 'España es grande.' },
      { word: 'pequeño', meaning: 'Small', example: 'Un apartamento pequeño.' },
      { word: 'bueno', meaning: 'Good', example: 'Es un buen restaurante.' },
      { word: 'hoy', meaning: 'Today', example: 'Hoy es lunes.' },
      { word: 'mañana', meaning: 'Tomorrow', example: 'Mañana voy de viaje.' },
      { word: 'agua', meaning: 'Water', example: 'Quiero agua.' },
      { word: 'comida', meaning: 'Food', example: 'La comida es deliciosa.' },
    ],
    A2: [
      { word: 'experiencia', meaning: 'Experience', example: 'Fue una experiencia increíble.' },
      { word: 'opinión', meaning: 'Opinion', example: '¿Cuál es tu opinión?' },
      { word: 'oportunidad', meaning: 'Opportunity', example: 'No pierdas esta oportunidad.' },
      { word: 'desarrollo', meaning: 'Development', example: 'El desarrollo económico.' },
      { word: 'sin embargo', meaning: 'However', example: 'Es caro; sin embargo, vale la pena.' },
      { word: 'además', meaning: 'Moreover', example: 'Además, habla tres idiomas.' },
      { word: 'mejorar', meaning: 'To improve', example: 'Quiero mejorar mi español.' },
      { word: 'lograr', meaning: 'To achieve', example: 'Puedes lograr tus metas.' },
      { word: 'recomendar', meaning: 'To recommend', example: 'Te recomiendo este libro.' },
      { word: 'aprovechar', meaning: 'To take advantage', example: 'Hay que aprovechar el tiempo.' },
      { word: 'echar de menos', meaning: 'To miss', example: 'Te echo de menos.' },
      { word: 'darse cuenta', meaning: 'To realize', example: 'Me di cuenta del error.' },
    ],
    B1: [
      { word: 'no obstante', meaning: 'Nevertheless', example: 'Es difícil; no obstante, lo intentaré.' },
      { word: 'a pesar de', meaning: 'In spite of', example: 'A pesar de la lluvia, salimos.' },
      { word: 'ámbito', meaning: 'Field/Scope', example: 'En el ámbito profesional.' },
      { word: 'imprescindible', meaning: 'Essential', example: 'Es imprescindible estudiar.' },
      { word: 'desempeñar', meaning: 'To perform/carry out', example: 'Desempeña un papel importante.' },
      { word: 'fomentar', meaning: 'To promote/encourage', example: 'Fomentar la lectura.' },
      { word: 'abarcar', meaning: 'To encompass', example: 'El tema abarca muchos aspectos.' },
      { word: 'matiz', meaning: 'Nuance', example: 'Hay matices importantes.' },
    ],
  },
};

// Merge expanded data
Object.keys(GRAMMAR_EXPAND).forEach(lang => {
  if (!GRAMMAR_REF[lang]) GRAMMAR_REF[lang] = [];
  GRAMMAR_REF[lang] = [...GRAMMAR_REF[lang], ...GRAMMAR_EXPAND[lang]];
});

Object.keys(VOCAB_EXPAND).forEach(lang => {
  if (!VOCAB_REF[lang]) VOCAB_REF[lang] = {};
  Object.keys(VOCAB_EXPAND[lang]).forEach(level => {
    if (!VOCAB_REF[lang][level]) VOCAB_REF[lang][level] = [];
    VOCAB_REF[lang][level] = [...VOCAB_REF[lang][level], ...VOCAB_EXPAND[lang][level]];
  });
});
