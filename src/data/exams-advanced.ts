import { Exam } from './types';

// Advanced exam levels for all languages
export const ADVANCED_EXAMS: Record<string, Record<string, Exam>> = {
  jp: {
    N3: {
      title: 'JLPT N3 — Simulacro',
      sections: [
        { name: 'Vocabulario', time: 20, qs: [
          { t: 'mc', q: '¿Qué significa 影響?', opts: ['Imagen', 'Influencia', 'Sombra', 'Reflejo'], ans: 1 },
          { t: 'mc', q: '¿Cómo se lee 届ける?', opts: ['とどける', 'つづける', 'つたえる', 'とめる'], ans: 0 },
          { t: 'mc', q: '¿Qué significa 適当?', opts: ['Exacto', 'Apropiado', 'Difícil', 'Incorrecto'], ans: 1 },
          { t: 'mc', q: '¿Significado de 反対?', opts: ['Acuerdo', 'Oposición', 'Apoyo', 'Neutro'], ans: 1 },
          { t: 'mc', q: '¿Qué es 景色?', opts: ['Clima', 'Paisaje', 'Edificio', 'Mapa'], ans: 1 },
          { t: 'mc', q: '¿"Reservar" en japonés?', opts: ['予約する', '注文する', '準備する', '計画する'], ans: 0 },
          { t: 'mc', q: '¿Significado de 比較?', opts: ['Competición', 'Comparación', 'Cooperación', 'Contradicción'], ans: 1 },
          { t: 'mc', q: '¿Qué significa 独立?', opts: ['Dependencia', 'Cooperación', 'Independencia', 'Unión'], ans: 2 },
          { t: 'tx', q: '¿Cómo se lee 複雑? (romaji)', ans: 'fukuzatsu' },
          { t: 'mc', q: '¿Qué es 環境?', opts: ['Transporte', 'Medio ambiente', 'Gobierno', 'Educación'], ans: 1 },
          { t: 'mc', q: '¿Significado de 技術?', opts: ['Arte', 'Técnica/Tecnología', 'Ciencia', 'Filosofía'], ans: 1 },
          { t: 'mc', q: '¿Qué significa 政治?', opts: ['Economía', 'Política', 'Sociedad', 'Religión'], ans: 1 },
          { t: 'mc', q: '¿"Aumentar" en japonés?', opts: ['減る', '増える', '変わる', '続く'], ans: 1 },
          { t: 'mc', q: '¿Significado de 期待?', opts: ['Decepción', 'Expectativa', 'Frustración', 'Memoria'], ans: 1 },
          { t: 'mc', q: '¿Qué es 関係?', opts: ['Diferencia', 'Relación', 'Separación', 'Distancia'], ans: 1 },
        ]},
        { name: 'Gramática', time: 25, qs: [
          { t: 'mc', q: '彼は社長に___。(ser promovido)', opts: ['なった', 'された', 'させた', 'くれた'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～ばかりだ?', opts: ['Acaba de hacer', 'Siempre hace', 'Nunca hace', 'Quiere hacer'], ans: 0 },
          { t: 'mc', q: '忙しい___、手伝ってくれた。', opts: ['のに', 'ので', 'から', 'けど'], ans: 0 },
          { t: 'mc', q: '¿Qué significa ～ようにする?', opts: ['Intentar hacer', 'Dejar de hacer', 'Empezar a hacer', 'Poder hacer'], ans: 0 },
          { t: 'mc', q: '新聞に___、事故があったそうだ。', opts: ['よると', 'ついて', 'たいして', 'かんして'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～わけがない?', opts: ['Debe ser', 'Es imposible que', 'Probablemente', 'Parece que'], ans: 1 },
          { t: 'mc', q: '勉強する___合格できる。', opts: ['ほど', 'くらい', 'だけ', 'しか'], ans: 0 },
          { t: 'mc', q: '¿Significado de ～ことにする?', opts: ['Decidir hacer', 'Se decidió que', 'Resulta que', 'Suele hacer'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～てしまう?', opts: ['Desafortunadamente/completar', 'Querer hacer', 'Poder hacer', 'Deber hacer'], ans: 0 },
          { t: 'mc', q: '彼女は泣き___笑った。', opts: ['ながら', 'つつ', 'がてら', 'かけ'], ans: 0 },
          { t: 'tx', q: '¿Qué partícula va con ～について? (romaji)', ans: 'ni' },
          { t: 'mc', q: '¿Qué expresa ～ことになる?', opts: ['Yo decido', 'Se decide que/resulta que', 'Quiero que', 'Espero que'], ans: 1 },
          { t: 'mc', q: '日本語は___ほど難しくない。', opts: ['思った', '思って', '思う', '思い'], ans: 0 },
          { t: 'mc', q: '¿Qué significa ～かもしれない?', opts: ['Definitivamente', 'Quizás/Puede que', 'Imposible', 'Ciertamente'], ans: 1 },
          { t: 'mc', q: '¿Diferencia entre ～は y ～って?', opts: ['って es más coloquial', 'は es más coloquial', 'Son iguales', 'って es más formal'], ans: 0 },
        ]},
        { name: 'Comprensión lectora', time: 30, qs: [
          { t: 'rd', title: 'Texto 1', passage: '最近、日本では外国人観光客が増えています。特に東京や京都が人気です。しかし、言葉の問題で困る外国人も多いそうです。そのため、多くのレストランやホテルでは英語のメニューやサインを用意するようになりました。', q: '¿Cuál es el problema principal mencionado?', opts: ['El costo', 'El idioma', 'El transporte', 'La comida'], ans: 1 },
          { t: 'rd', title: 'Texto 1', passage: '最近、日本では外国人観光客が増えています。特に東京や京都が人気です。しかし、言葉の問題で困る外国人も多いそうです。そのため、多くのレストランやホテルでは英語のメニューやサインを用意するようになりました。', q: '¿Qué están haciendo los negocios?', opts: ['Subir precios', 'Cerrar', 'Preparar menús en inglés', 'Contratar traductores'], ans: 2 },
          { t: 'rd', title: 'Texto 2', passage: '田中さんは大学を卒業した後、３年間会社で働いていましたが、もっと勉強したいと思って大学院に入りました。今は環境問題について研究しています。将来は、その知識を使って社会に貢献したいと考えています。', q: '¿Por qué dejó su trabajo?', opts: ['No le gustaba', 'Quería estudiar más', 'Estaba enfermo', 'Se jubiló'], ans: 1 },
          { t: 'rd', title: 'Texto 2', passage: '田中さんは大学を卒業した後、３年間会社で働いていましたが、もっと勉強したいと思って大学院に入りました。今は環境問題について研究しています。将来は、その知識を使って社会に貢献したいと考えています。', q: '¿Qué investiga ahora?', opts: ['Economía', 'Medicina', 'Medio ambiente', 'Tecnología'], ans: 2 },
          { t: 'rd', title: 'Texto 3', passage: '日本の四季はそれぞれ特徴があります。春は桜が咲き、多くの人がお花見をします。夏は暑くて、花火大会やお祭りがあります。秋は紅葉が美しく、冬は雪が降る地域もあります。', q: '¿Qué hacen los japoneses en primavera?', opts: ['Ver fuegos artificiales', 'Ver la nieve', 'Ver los cerezos (hanami)', 'Ver las hojas rojas'], ans: 2 },
        ]},
      ]
    },
    N2: {
      title: 'JLPT N2 — Simulacro',
      sections: [
        { name: 'Vocabulario y Kanji', time: 25, qs: [
          { t: 'mc', q: '¿Qué significa 貢献?', opts: ['Contribución', 'Competición', 'Construcción', 'Consumo'], ans: 0 },
          { t: 'mc', q: '¿Cómo se lee 矛盾?', opts: ['むじゅん', 'ほうめん', 'きょうそう', 'こうけん'], ans: 0 },
          { t: 'mc', q: '¿Significado de 把握?', opts: ['Rechazo', 'Comprensión/Dominio', 'Confusión', 'Abandono'], ans: 1 },
          { t: 'mc', q: '¿Qué es 概念?', opts: ['Detalle', 'Concepto', 'Opinión', 'Hecho'], ans: 1 },
          { t: 'mc', q: '¿"Asumir/Suponer"?', opts: ['想定する', '設定する', '決定する', '否定する'], ans: 0 },
          { t: 'mc', q: '¿Significado de 妥協?', opts: ['Conflicto', 'Compromiso', 'Resistencia', 'Victoria'], ans: 1 },
          { t: 'mc', q: '¿Qué es 偏見?', opts: ['Opinión', 'Prejuicio', 'Visión', 'Revisión'], ans: 1 },
          { t: 'tx', q: '¿Cómo se lee 抽象的? (romaji)', ans: 'chuushouteki' },
          { t: 'mc', q: '¿Significado de 維持?', opts: ['Cambio', 'Mantenimiento', 'Destrucción', 'Creación'], ans: 1 },
          { t: 'mc', q: '¿Qué significa 促進?', opts: ['Frenar', 'Promover', 'Prohibir', 'Ignorar'], ans: 1 },
          { t: 'mc', q: '¿"Contradicción"?', opts: ['対立', '矛盾', '反発', '混乱'], ans: 1 },
          { t: 'mc', q: '¿Significado de 膨大?', opts: ['Pequeño', 'Enorme', 'Moderado', 'Mínimo'], ans: 1 },
          { t: 'mc', q: '¿Qué es 傾向?', opts: ['Tendencia', 'Dirección', 'Inclinación física', 'Caída'], ans: 0 },
          { t: 'mc', q: '¿"Implementar"?', opts: ['実施する', '実現する', '実験する', '実感する'], ans: 0 },
          { t: 'mc', q: '¿Significado de 裁判?', opts: ['Elección', 'Juicio/Tribunal', 'Reunión', 'Debate'], ans: 1 },
        ]},
        { name: 'Gramática', time: 25, qs: [
          { t: 'mc', q: '¿Qué expresa ～に違いない?', opts: ['Puede que', 'Sin duda es', 'No debería', 'Ojalá'], ans: 1 },
          { t: 'mc', q: '努力した___、失敗した。', opts: ['にもかかわらず', 'おかげで', 'ために', 'ので'], ans: 0 },
          { t: 'mc', q: '¿Qué significa ～ざるを得ない?', opts: ['No se puede', 'No hay más remedio que', 'Se prohíbe', 'Se desea'], ans: 1 },
          { t: 'mc', q: '¿Diferencia entre ～上で y ～上に?', opts: ['上で=después de, 上に=además', '上で=además, 上に=después de', 'Son iguales', '上で=a pesar de'], ans: 0 },
          { t: 'mc', q: '彼の成功は努力の___だ。', opts: ['おかげ', 'せい', 'ため', 'わけ'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～っぽい?', opts: ['Tiende a/parece', 'Definitivamente es', 'Nunca es', 'Solía ser'], ans: 0 },
          { t: 'mc', q: '¿Significado de ～を通じて?', opts: ['A pesar de', 'A través de', 'En lugar de', 'Además de'], ans: 1 },
          { t: 'mc', q: '彼は医者で___、研究者でもある。', opts: ['あり', 'あって', 'ある', 'あれ'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～わけではない?', opts: ['Es que', 'No es que', 'Debe ser', 'Tiene que'], ans: 1 },
          { t: 'mc', q: '¿Uso de ～に限って?', opts: ['Solamente/Justo cuando', 'A veces', 'Generalmente', 'Nunca'], ans: 0 },
          { t: 'mc', q: '¿Qué significa ～つつある?', opts: ['Terminar', 'Estar en proceso de', 'Dejar de', 'Empezar'], ans: 1 },
          { t: 'mc', q: '¿Diferencia entre ～さえ y ～すら?', opts: ['すら es más literario', 'さえ es más literario', 'Son iguales', 'Diferentes significados'], ans: 0 },
          { t: 'tx', q: '¿Completar: 言う___もなく (ni que decir)?', ans: 'まで' },
          { t: 'mc', q: '¿Qué expresa ～からこそ?', opts: ['A pesar de', 'Precisamente porque', 'Sin embargo', 'Aunque'], ans: 1 },
          { t: 'mc', q: '¿Significado de ～に伴って?', opts: ['En lugar de', 'Junto con/Acompañado de', 'A pesar de', 'Sin relación'], ans: 1 },
        ]},
        { name: 'Comprensión lectora', time: 35, qs: [
          { t: 'rd', title: 'Texto 1', passage: '現代社会では、テクノロジーの発展により生活が便利になった一方で、人間関係が希薄になっているという指摘がある。SNSでのつながりは増えたが、深い人間関係を築くことが難しくなっているとも言われている。', q: '¿Cuál es el problema señalado?', opts: ['La tecnología es cara', 'Las relaciones humanas se debilitan', 'No hay internet', 'Las redes sociales no funcionan'], ans: 1 },
          { t: 'rd', title: 'Texto 1', passage: '現代社会では、テクノロジーの発展により生活が便利になった一方で、人間関係が希薄になっているという指摘がある。SNSでのつながりは増えたが、深い人間関係を築くことが難しくなっているとも言われている。', q: '¿Qué ha aumentado con las redes sociales?', opts: ['Relaciones profundas', 'Conexiones superficiales', 'Problemas técnicos', 'Costos'], ans: 1 },
          { t: 'rd', title: 'Texto 2', passage: '日本の少子高齢化は深刻な問題である。出生率の低下と平均寿命の延びにより、労働人口が減少し、社会保障費が増大している。政府は様々な対策を講じているが、根本的な解決には至っていない。', q: '¿Qué problema describe el texto?', opts: ['Contaminación', 'Envejecimiento y baja natalidad', 'Desempleo juvenil', 'Inmigración'], ans: 1 },
          { t: 'rd', title: 'Texto 2', passage: '日本の少子高齢化は深刻な問題である。出生率の低下と平均寿命の延びにより、労働人口が減少し、社会保障費が増大している。政府は様々な対策を講じているが、根本的な解決には至っていない。', q: '¿Qué resultado tiene la situación?', opts: ['Más empleos', 'Menos costos sociales', 'Menos trabajadores y más gastos', 'Mayor natalidad'], ans: 2 },
          { t: 'rd', title: 'Texto 3', passage: '異文化理解は、グローバル化が進む現代において不可欠な能力である。しかし、表面的な知識だけでは不十分で、相手の価値観や歴史的背景を深く理解する姿勢が求められる。偏見を持たず、開かれた心で接することが重要だ。', q: '¿Qué se necesita según el autor?', opts: ['Solo conocimiento superficial', 'Comprensión profunda de valores y contexto', 'Evitar otras culturas', 'Imponer la propia cultura'], ans: 1 },
        ]},
      ]
    },
    N1: {
      title: 'JLPT N1 — Simulacro',
      sections: [
        { name: 'Vocabulario y Kanji', time: 25, qs: [
          { t: 'mc', q: '¿Qué significa 恣意的?', opts: ['Sistemático', 'Arbitrario', 'Lógico', 'Objetivo'], ans: 1 },
          { t: 'mc', q: '¿Cómo se lee 齟齬?', opts: ['そご', 'さご', 'しご', 'せご'], ans: 0 },
          { t: 'mc', q: '¿Significado de 乖離?', opts: ['Unión', 'Divergencia', 'Acuerdo', 'Similitud'], ans: 1 },
          { t: 'mc', q: '¿Qué es 蓋然性?', opts: ['Certeza', 'Probabilidad', 'Imposibilidad', 'Necesidad'], ans: 1 },
          { t: 'mc', q: '¿"Deterioro"?', opts: ['改善', '劣化', '進化', '強化'], ans: 1 },
          { t: 'mc', q: '¿Significado de 逸脱?', opts: ['Seguimiento', 'Desviación', 'Conformidad', 'Sumisión'], ans: 1 },
          { t: 'mc', q: '¿Qué es 帰結?', opts: ['Origen', 'Proceso', 'Consecuencia', 'Predicción'], ans: 2 },
          { t: 'tx', q: '¿Cómo se lee 俯瞰? (romaji)', ans: 'fukan' },
          { t: 'mc', q: '¿Significado de 稀有?', opts: ['Común', 'Raro/Excepcional', 'Normal', 'Frecuente'], ans: 1 },
          { t: 'mc', q: '¿Qué significa 瑕疵?', opts: ['Perfección', 'Defecto', 'Belleza', 'Cualidad'], ans: 1 },
          { t: 'mc', q: '¿"Omnipresente"?', opts: ['遍在', '不在', '存在', '現在'], ans: 0 },
          { t: 'mc', q: '¿Significado de 恫喝?', opts: ['Elogio', 'Amenaza/Intimidación', 'Consejo', 'Petición'], ans: 1 },
          { t: 'mc', q: '¿Qué es 形骸化?', opts: ['Formalización', 'Volverse solo apariencia', 'Mejora', 'Renovación'], ans: 1 },
          { t: 'mc', q: '¿"Hacer una concesión"?', opts: ['主張する', '譲歩する', '抵抗する', '拒絶する'], ans: 1 },
          { t: 'mc', q: '¿Significado de 暗黙?', opts: ['Explícito', 'Tácito/Implícito', 'Verbal', 'Escrito'], ans: 1 },
        ]},
        { name: 'Gramática', time: 30, qs: [
          { t: 'mc', q: '¿Qué expresa ～ともなると?', opts: ['Cuando se trata de (alto nivel)', 'Aunque', 'Si no es', 'Independientemente'], ans: 0 },
          { t: 'mc', q: '彼の行動は理解に___。', opts: ['苦しむ', '苦しい', '苦しめる', '苦しんだ'], ans: 0 },
          { t: 'mc', q: '¿Qué significa ～をものともせず?', opts: ['Usando como', 'Sin dejarse intimidar por', 'Gracias a', 'Debido a'], ans: 1 },
          { t: 'mc', q: '¿Uso de ～たりとも…ない?', opts: ['Ni siquiera uno', 'Todos', 'A veces', 'Generalmente'], ans: 0 },
          { t: 'mc', q: '時代の変化___、新たな問題が生じている。', opts: ['に即して', 'をよそに', 'にひきかえ', 'をもって'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～にたえない?', opts: ['No poder soportar/Profundamente', 'Poder resistir', 'Sin relación', 'Con facilidad'], ans: 0 },
          { t: 'mc', q: '¿Significado de ～ないまでも?', opts: ['Aunque no llegue a', 'Definitivamente', 'Sin duda', 'Imposible'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～を禁じ得ない?', opts: ['Prohibir', 'No poder contener (emoción)', 'Evitar', 'Ignorar'], ans: 1 },
          { t: 'mc', q: '¿Uso de ～ごとき/～ごとく?', opts: ['Como/Al igual que (literario)', 'Cada', 'Sin', 'Contra'], ans: 0 },
          { t: 'mc', q: '¿Qué significa ～やいなや?', opts: ['Antes de', 'Tan pronto como', 'Después de', 'Sin hacer'], ans: 1 },
          { t: 'mc', q: '¿Diferencia entre ～ものの y ～とはいえ?', opts: ['Similares: aunque/sin embargo', 'Opuestos', 'Uno es causal', 'Uno es temporal'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa ～まじき?', opts: ['Deseado', 'Inaceptable/No debería', 'Posible', 'Probable'], ans: 1 },
          { t: 'tx', q: '¿Completar: 言わず___がな (no hace falta decir)?', ans: 'も' },
          { t: 'mc', q: '¿Significado de ～如何?', opts: ['Sin importar', 'Dependiendo de', 'A pesar de', 'Además de'], ans: 1 },
          { t: 'mc', q: '¿Qué expresa ～かたわら?', opts: ['Mientras que también (paralelo)', 'En vez de', 'Antes de', 'Sin hacer'], ans: 0 },
        ]},
        { name: 'Comprensión lectora', time: 40, qs: [
          { t: 'rd', title: 'Texto 1', passage: '言語の本質は単なるコミュニケーションの道具ではなく、思考そのものを形成する媒体であるという見方がある。サピア＝ウォーフの仮説によれば、我々の世界認識は母語の構造に少なからず影響を受けている。この考えに対する批判も多いが、完全に否定することもまた困難である。', q: '¿Cuál es la idea principal del texto?', opts: ['El idioma es solo comunicación', 'El idioma forma el pensamiento', 'Todos los idiomas son iguales', 'La traducción es perfecta'], ans: 1 },
          { t: 'rd', title: 'Texto 1', passage: '言語の本質は単なるコミュニケーションの道具ではなく、思考そのものを形成する媒体であるという見方がある。サピア＝ウォーフの仮説によれば、我々の世界認識は母語の構造に少なからず影響を受けている。この考えに対する批判も多いが、完全に否定することもまた困難である。', q: '¿Qué dice el autor sobre la crítica a esta hipótesis?', opts: ['Es completamente válida', 'Es difícil negar completamente la idea', 'No existe crítica', 'La hipótesis fue probada'], ans: 1 },
          { t: 'rd', title: 'Texto 2', passage: 'AIの発展は労働市場に根本的な変革をもたらしつつある。単純作業の自動化にとどまらず、かつては人間にしかできないと考えられていた創造的な分野にまで及んでいる。しかしながら、技術の進歩が必ずしも人間の幸福に直結するとは限らず、倫理的な枠組みの構築が急務とされている。', q: '¿Qué área está siendo afectada por la IA?', opts: ['Solo trabajo manual', 'También campos creativos', 'Solo transporte', 'Solo medicina'], ans: 1 },
          { t: 'rd', title: 'Texto 2', passage: 'AIの発展は労働市場に根本的な変革をもたらしつつある。単純作業の自動化にとどまらず、かつては人間にしかできないと考えられていた創造的な分野にまで及んでいる。しかしながら、技術の進歩が必ずしも人間の幸福に直結するとは限らず、倫理的な枠組みの構築が急務とされている。', q: '¿Qué considera urgente el autor?', opts: ['Más inversión en IA', 'Un marco ético', 'Prohibir la IA', 'Ignorar el cambio'], ans: 1 },
          { t: 'rd', title: 'Texto 3', passage: '日本文学における「もののあわれ」の概念は、平安時代に源氏物語を通じて体系化された美意識である。それは単なる悲哀ではなく、万物の移ろいに対する深い共感と、その儚さの中に美を見出す感性を指す。この概念は現代の日本文化にも脈々と受け継がれている。', q: '¿Qué es "mono no aware"?', opts: ['Tristeza simple', 'Sensibilidad ante lo efímero', 'Alegría pura', 'Indiferencia'], ans: 1 },
        ]},
      ]
    },
  },

  // CEFR B1/B2/C1 for French
  fr: {
    B1: {
      title: 'DELF B1 — Simulacro',
      sections: [
        { name: 'Comprensión escrita', time: 25, qs: [
          { t: 'rd', title: 'Texte 1', passage: "Le télétravail s'est considérablement développé ces dernières années. Si cette pratique offre plus de flexibilité aux employés, elle pose aussi des défis en termes d'isolement social et de séparation entre vie professionnelle et personnelle. Les entreprises doivent trouver un équilibre entre productivité et bien-être.", q: '¿Cuál es el desafío del teletrabajo?', opts: ['Los costos', 'El aislamiento y equilibrio vida-trabajo', 'La tecnología', 'Los horarios'], ans: 1 },
          { t: 'rd', title: 'Texte 1', passage: "Le télétravail s'est considérablement développé ces dernières années. Si cette pratique offre plus de flexibilité aux employés, elle pose aussi des défis en termes d'isolement social et de séparation entre vie professionnelle et personnelle.", q: '¿Qué ventaja del teletrabajo se menciona?', opts: ['Mejor salario', 'Más flexibilidad', 'Menos trabajo', 'Más vacaciones'], ans: 1 },
          { t: 'mc', q: 'Choisissez: "Il faut que tu ___ plus attention."', opts: ['fais', 'fasses', 'ferais', 'feras'], ans: 1 },
          { t: 'mc', q: 'Le subjonctif de "pouvoir" (je): que je ___', opts: ['peux', 'puisse', 'pouvais', 'pourrai'], ans: 1 },
          { t: 'mc', q: '"Si j\'avais su, je ___ venu."', opts: ['serais', 'serai', 'suis', 'étais'], ans: 0 },
          { t: 'mc', q: '¿Qué expresa "bien que"?', opts: ['Causa', 'Concesión', 'Consecuencia', 'Tiempo'], ans: 1 },
          { t: 'mc', q: '"Il a réussi ___ ses difficultés."', opts: ['grâce à', 'malgré', 'à cause de', 'en raison de'], ans: 1 },
          { t: 'mc', q: '¿Pronombre relativo para "donde"?', opts: ['qui', 'que', 'dont', 'où'], ans: 3 },
          { t: 'mc', q: '"Je cherche quelqu\'un qui ___ parler japonais."', opts: ['peut', 'puisse', 'pourrait', 'pouvait'], ans: 1 },
          { t: 'tx', q: 'Conjugar "aller" en subjonctif (il): qu\'il ___', ans: 'aille' },
        ]},
        { name: 'Expresión escrita', time: 20, qs: [
          { t: 'mc', q: '¿Cuál es un conector de oposición?', opts: ['Pourtant', 'Donc', 'Parce que', 'Ensuite'], ans: 0 },
          { t: 'mc', q: '"Avoir beau + infinitif" expresa:', opts: ['Éxito', 'Esfuerzo sin resultado', 'Duda', 'Sorpresa'], ans: 1 },
          { t: 'mc', q: '¿Pasado compuesto de "naître" (elle)?', opts: ['Elle a né', 'Elle est née', 'Elle a naître', 'Elle est naissée'], ans: 1 },
          { t: 'mc', q: '"En revanche" es sinónimo de:', opts: ['Ensuite', 'Par contre', 'En effet', 'Par exemple'], ans: 1 },
          { t: 'mc', q: '¿Cuál usa el subjuntivo?', opts: ['Je sais que', 'Il faut que', 'Je pense que', 'Il dit que'], ans: 1 },
          { t: 'tx', q: '¿Conector para "en conclusión"?', ans: 'en conclusion' },
          { t: 'mc', q: '"Dont" reemplaza un complemento con:', opts: ['à', 'de', 'pour', 'par'], ans: 1 },
          { t: 'mc', q: '¿Qué registro es "il convient de"?', opts: ['Familiar', 'Formal', 'Coloquial', 'Infantil'], ans: 1 },
          { t: 'mc', q: '"Quoique" va seguido de:', opts: ['Indicativo', 'Subjuntivo', 'Infinitivo', 'Condicional'], ans: 1 },
          { t: 'mc', q: '¿"À condition que" expresa?', opts: ['Causa', 'Condición', 'Tiempo', 'Oposición'], ans: 1 },
        ]},
      ]
    },
    B2: {
      title: 'DELF B2 — Simulacro',
      sections: [
        { name: 'Comprensión escrita', time: 30, qs: [
          { t: 'rd', title: 'Article', passage: "L'intelligence artificielle soulève des questions éthiques fondamentales. La capacité des algorithmes à prendre des décisions autonomes dans des domaines tels que la justice, la santé et l'emploi remet en cause nos conceptions traditionnelles de la responsabilité humaine. Il devient impératif d'établir un cadre réglementaire adapté.", q: '¿Qué problema central plantea la IA según el texto?', opts: ['Costo económico', 'Responsabilidad y ética', 'Falta de tecnología', 'Desempleo masivo'], ans: 1 },
          { t: 'rd', title: 'Article', passage: "L'intelligence artificielle soulève des questions éthiques fondamentales. La capacité des algorithmes à prendre des décisions autonomes dans des domaines tels que la justice, la santé et l'emploi remet en cause nos conceptions traditionnelles de la responsabilité humaine.", q: '¿Qué dominios menciona?', opts: ['Arte y deporte', 'Justicia, salud y empleo', 'Educación y turismo', 'Transporte y comercio'], ans: 1 },
          { t: 'mc', q: '"Quand bien même il pleuvrait, je ___."', opts: ['sortirai', 'sortirais', 'sors', 'sortais'], ans: 1 },
          { t: 'mc', q: '¿Qué expresa "force est de constater"?', opts: ['Hay que admitir', 'Es falso', 'Se espera', 'Se ignora'], ans: 0 },
          { t: 'mc', q: '"Non seulement... mais encore" expresa:', opts: ['Oposición', 'Adición enfática', 'Causa', 'Tiempo'], ans: 1 },
          { t: 'mc', q: '¿"Fût-ce" equivale a?', opts: ['Incluso si fuera', 'Nunca', 'Siempre', 'Antes de'], ans: 0 },
          { t: 'mc', q: '"Il n\'en demeure pas moins que" significa:', opts: ['Sin embargo', 'No obstante sigue siendo cierto que', 'Es falso que', 'Se duda de'], ans: 1 },
          { t: 'tx', q: '¿Sinónimo formal de "cependant"?', ans: 'néanmoins' },
          { t: 'mc', q: '¿Registro de "il appert que"?', opts: ['Familiar', 'Formal/Jurídico', 'Coloquial', 'Infantil'], ans: 1 },
          { t: 'mc', q: '"À l\'instar de" significa:', opts: ['A diferencia de', 'Al igual que', 'Antes de', 'Después de'], ans: 1 },
        ]},
        { name: 'Gramática avanzada', time: 25, qs: [
          { t: 'mc', q: '¿Subjuntivo pasado de "faire" (il)?', opts: ["qu'il ait fait", "qu'il a fait", "qu'il eut fait", "qu'il avait fait"], ans: 0 },
          { t: 'mc', q: '"Eût-il su, il serait parti." ¿Qué tiempo?', opts: ['Passé simple', 'Subjonctif plus-que-parfait', 'Conditionnel passé', 'Imparfait'], ans: 1 },
          { t: 'mc', q: '¿"D\'aucuns" significa?', opts: ['Nadie', 'Algunos/Ciertos', 'Todos', 'Pocos'], ans: 1 },
          { t: 'mc', q: '"En dépit de" es sinónimo de:', opts: ['Grâce à', 'Malgré', 'À cause de', 'Pour'], ans: 1 },
          { t: 'mc', q: '¿Qué es una "litote"?', opts: ['Exageración', 'Decir menos para decir más', 'Repetición', 'Comparación'], ans: 1 },
          { t: 'mc', q: '"Nul ne saurait ignorer" = ?', opts: ['Todos ignoran', 'Nadie puede ignorar', 'Algunos saben', 'Nadie sabe'], ans: 1 },
          { t: 'mc', q: '¿Voz pasiva de "On a construit ce pont"?', opts: ['Ce pont a été construit', 'Ce pont est construit', 'Ce pont se construit', 'Ce pont fut construit'], ans: 0 },
          { t: 'mc', q: '"Toujours est-il que" expresa:', opts: ['Duda', 'Hecho innegable', 'Posibilidad', 'Esperanza'], ans: 1 },
          { t: 'mc', q: '¿"Qui plus est" significa?', opts: ['Sin embargo', 'Es más/Además', 'Por otro lado', 'En resumen'], ans: 1 },
          { t: 'tx', q: '¿Completar: "Il s\'en ___ de peu" (estuvo a punto)?', ans: 'fallut' },
        ]},
      ]
    },
    C1: {
      title: 'DALF C1 — Simulacro',
      sections: [
        { name: 'Comprensión y análisis', time: 35, qs: [
          { t: 'rd', title: 'Essai', passage: "La postmodernité a profondément remis en question les grands récits fondateurs de la modernité. Là où les Lumières promettaient un progrès linéaire fondé sur la raison, les penseurs postmodernes ont mis en évidence la pluralité irréductible des perspectives et l'impossibilité d'un métarécit universel.", q: '¿Qué cuestionan los pensadores posmodernos?', opts: ['La ciencia', 'Los grandes relatos universales', 'La religión específicamente', 'La tecnología'], ans: 1 },
          { t: 'rd', title: 'Essai', passage: "La postmodernité a profondément remis en question les grands récits fondateurs de la modernité. Là où les Lumières promettaient un progrès linéaire fondé sur la raison, les penseurs postmodernes ont mis en évidence la pluralité irréductible des perspectives.", q: '¿Qué prometía la Ilustración?', opts: ['Regreso al pasado', 'Progreso lineal basado en la razón', 'Pluralidad de opiniones', 'Fin de la historia'], ans: 1 },
          { t: 'mc', q: '¿Qué es un "euphémisme"?', opts: ['Exageración', 'Atenuación de la expresión', 'Contradicción', 'Repetición'], ans: 1 },
          { t: 'mc', q: '"Il va sans dire que" expresa:', opts: ['Duda', 'Evidencia', 'Sorpresa', 'Negación'], ans: 1 },
          { t: 'mc', q: '¿Significado de "en l\'occurrence"?', opts: ['En general', 'En este caso', 'En el futuro', 'En el pasado'], ans: 1 },
          { t: 'mc', q: '"Fût-ce au prix de" significa:', opts: ['Sin costo', 'Incluso al precio de', 'Gratis', 'Con descuento'], ans: 1 },
          { t: 'mc', q: '¿"Ipso facto" equivale a?', opts: ['Quizás', 'Por ese mismo hecho', 'A largo plazo', 'En teoría'], ans: 1 },
          { t: 'mc', q: '"De prime abord" significa:', opts: ['Finalmente', 'A primera vista', 'En profundidad', 'En conclusión'], ans: 1 },
          { t: 'mc', q: '¿Registro de "il sied de"?', opts: ['Coloquial', 'Literario/Muy formal', 'Estándar', 'Infantil'], ans: 1 },
          { t: 'tx', q: '¿Sinónimo formal de "c\'est pourquoi"?', ans: 'c\'est la raison pour laquelle' },
          { t: 'mc', q: '"Eu égard à" significa:', opts: ['Sin considerar', 'En consideración a', 'A pesar de', 'Gracias a'], ans: 1 },
          { t: 'mc', q: '¿Qué es una "synecdoque"?', opts: ['Parte por el todo', 'Exageración', 'Repetición', 'Contradicción'], ans: 0 },
        ]},
      ]
    },
  },

  // Chinese HSK advanced
  zh: {
    HSK3: {
      title: 'HSK 3 — Simulacro',
      sections: [
        { name: 'Vocabulario', time: 20, qs: [
          { t: 'mc', q: '¿Qué significa 环境?', opts: ['Economía', 'Medio ambiente', 'Gobierno', 'Transporte'], ans: 1 },
          { t: 'mc', q: '¿Significado de 经验?', opts: ['Experimento', 'Experiencia', 'Resultado', 'Opinión'], ans: 1 },
          { t: 'mc', q: '¿Qué es 社会?', opts: ['Escuela', 'Sociedad', 'Hospital', 'Oficina'], ans: 1 },
          { t: 'mc', q: '¿"Influencia" en chino?', opts: ['影响', '印象', '阴影', '反映'], ans: 0 },
          { t: 'mc', q: '¿Significado de 丰富?', opts: ['Pobre', 'Rico/Abundante', 'Simple', 'Escaso'], ans: 1 },
          { t: 'mc', q: '¿Qué significa 研究?', opts: ['Estudiar', 'Investigar', 'Enseñar', 'Aprender'], ans: 1 },
          { t: 'mc', q: '¿"Comparar" en chino?', opts: ['比较', '北方', '毕业', '比赛'], ans: 0 },
          { t: 'tx', q: '¿Pinyin de 关系?', ans: 'guanxi' },
          { t: 'mc', q: '¿Significado de 提高?', opts: ['Bajar', 'Mejorar/Elevar', 'Mantener', 'Reducir'], ans: 1 },
          { t: 'mc', q: '¿Qué es 发展?', opts: ['Descubrimiento', 'Desarrollo', 'Destrucción', 'Distribución'], ans: 1 },
        ]},
        { name: 'Gramática y lectura', time: 25, qs: [
          { t: 'mc', q: '"把书放在桌子上" usa la estructura:', opts: ['被', '把', '让', '叫'], ans: 1 },
          { t: 'mc', q: '¿Qué expresa "越来越"?', opts: ['Cada vez más', 'De repente', 'A veces', 'Nunca'], ans: 0 },
          { t: 'mc', q: '"虽然...但是..." expresa:', opts: ['Causa', 'Condición', 'Concesión', 'Tiempo'], ans: 2 },
          { t: 'mc', q: '¿"被" marca qué voz?', opts: ['Activa', 'Pasiva', 'Imperativa', 'Subjuntiva'], ans: 1 },
          { t: 'mc', q: '"不但...而且..." significa:', opts: ['O...o', 'No solo...sino también', 'Aunque...pero', 'Si...entonces'], ans: 1 },
          { t: 'rd', title: '阅读', passage: '中国的教育制度正在不断改革。越来越多的学校开始注重学生的全面发展，不仅关注学习成绩，还重视体育和艺术教育。家长们也开始改变观念，认为孩子的快乐和健康比考试成绩更重要。', q: '¿Qué cambio se menciona?', opts: ['Más exámenes', 'Desarrollo integral del estudiante', 'Cerrar escuelas', 'Solo estudiar más'], ans: 1 },
          { t: 'rd', title: '阅读', passage: '中国的教育制度正在不断改革。越来越多的学校开始注重学生的全面发展，不仅关注学习成绩，还重视体育和艺术教育。家长们也开始改变观念，认为孩子的快乐和健康比考试成绩更重要。', q: '¿Qué piensan ahora los padres?', opts: ['Solo notas importan', 'Felicidad y salud son más importantes', 'La escuela no importa', 'Solo el deporte'], ans: 1 },
          { t: 'mc', q: '"除了...以外" significa:', opts: ['Excepto/Además de', 'Porque', 'Sin embargo', 'Aunque'], ans: 0 },
          { t: 'mc', q: '"只要...就..." expresa:', opts: ['Aunque', 'Con tal de que...entonces', 'Porque', 'Antes de'], ans: 1 },
          { t: 'tx', q: '¿Completar: 他___没有来 (todavía)?', ans: '还' },
        ]},
      ]
    },
    HSK4: {
      title: 'HSK 4 — Simulacro',
      sections: [
        { name: 'Vocabulario y gramática', time: 25, qs: [
          { t: 'mc', q: '¿Significado de 责任?', opts: ['Libertad', 'Responsabilidad', 'Autoridad', 'Derecho'], ans: 1 },
          { t: 'mc', q: '¿Qué es 竞争?', opts: ['Cooperación', 'Competencia', 'Negociación', 'Compromiso'], ans: 1 },
          { t: 'mc', q: '"即使...也..." expresa:', opts: ['Causa', 'Incluso si...también', 'Porque', 'Antes de'], ans: 1 },
          { t: 'mc', q: '¿Significado de 存在?', opts: ['Desaparecer', 'Existir', 'Aparecer', 'Cambiar'], ans: 1 },
          { t: 'mc', q: '"尽管" equivale a:', opts: ['Porque', 'A pesar de', 'Para que', 'Después de'], ans: 1 },
          { t: 'mc', q: '¿Qué significa 重视?', opts: ['Ignorar', 'Valorar/Dar importancia', 'Despreciar', 'Olvidar'], ans: 1 },
          { t: 'mc', q: '"无论...都..." expresa:', opts: ['Causa', 'Sin importar...siempre', 'Condición', 'Resultado'], ans: 1 },
          { t: 'mc', q: '¿Significado de 观念?', opts: ['Vista', 'Concepto/Idea', 'Paisaje', 'Espectáculo'], ans: 1 },
          { t: 'tx', q: '¿Pinyin de 制度?', ans: 'zhidu' },
          { t: 'mc', q: '"与其...不如..." significa:', opts: ['Tanto como', 'Mejor...que', 'Ni...ni', 'O...o'], ans: 1 },
        ]},
        { name: 'Comprensión lectora', time: 30, qs: [
          { t: 'rd', title: '阅读1', passage: '随着全球化的深入发展，跨文化交流变得越来越重要。然而，文化差异常常导致误解和冲突。要实现有效的跨文化沟通，不仅需要语言能力，还需要对不同文化的深入了解和尊重。', q: '¿Qué se necesita para la comunicación intercultural?', opts: ['Solo idiomas', 'Idiomas y comprensión cultural', 'Solo viajes', 'Solo tecnología'], ans: 1 },
          { t: 'rd', title: '阅读1', passage: '随着全球化的深入发展，跨文化交流变得越来越重要。然而，文化差异常常导致误解和冲突。', q: '¿Qué causan las diferencias culturales?', opts: ['Enriquecimiento', 'Malentendidos y conflictos', 'Unidad', 'Progreso'], ans: 1 },
          { t: 'rd', title: '阅读2', passage: '中国传统医学有几千年的历史。中医认为人体是一个整体，治疗疾病不仅要关注症状，还要找到根本原因。针灸、中药和推拿是最常见的治疗方法。近年来，越来越多的西方国家开始接受中医。', q: '¿Qué métodos de tratamiento se mencionan?', opts: ['Solo cirugía', 'Acupuntura, hierbas y masaje', 'Solo pastillas', 'Solo ejercicio'], ans: 1 },
          { t: 'rd', title: '阅读2', passage: '中国传统医学有几千年的历史。中医认为人体是一个整体，治疗疾病不仅要关注症状，还要找到根本原因。', q: '¿Qué enfoque tiene la medicina china?', opts: ['Solo síntomas', 'El cuerpo como un todo', 'Solo cirugía', 'Solo prevención'], ans: 1 },
          { t: 'mc', q: '"之所以...是因为..." expresa:', opts: ['Resultado-Causa', 'Tiempo', 'Condición', 'Concesión'], ans: 0 },
        ]},
      ]
    },
    HSK5: {
      title: 'HSK 5 — Simulacro',
      sections: [
        { name: 'Vocabulario avanzado', time: 25, qs: [
          { t: 'mc', q: '¿Significado de 抽象?', opts: ['Concreto', 'Abstracto', 'Simple', 'Complejo'], ans: 1 },
          { t: 'mc', q: '¿Qué es 偏见?', opts: ['Opinión', 'Prejuicio', 'Verdad', 'Experiencia'], ans: 1 },
          { t: 'mc', q: '¿"Contradecir"?', opts: ['赞同', '矛盾', '支持', '同意'], ans: 1 },
          { t: 'mc', q: '¿Significado de 趋势?', opts: ['Pasado', 'Tendencia', 'Accidente', 'Costumbre'], ans: 1 },
          { t: 'mc', q: '¿Qué es 贡献?', opts: ['Impuesto', 'Contribución', 'Deuda', 'Regalo'], ans: 1 },
          { t: 'mc', q: '¿"Implementar"?', opts: ['实施', '实验', '实现', '实际'], ans: 0 },
          { t: 'mc', q: '¿Significado de 维持?', opts: ['Cambiar', 'Mantener', 'Destruir', 'Crear'], ans: 1 },
          { t: 'tx', q: '¿Pinyin de 妥协?', ans: 'tuoxie' },
          { t: 'mc', q: '¿Qué es 倡导?', opts: ['Prohibir', 'Promover/Abogar', 'Criticar', 'Ignorar'], ans: 1 },
          { t: 'mc', q: '¿Significado de 紧迫?', opts: ['Relajado', 'Urgente', 'Lento', 'Normal'], ans: 1 },
          { t: 'mc', q: '¿"Perspectiva"?', opts: ['角度', '距离', '方向', '位置'], ans: 0 },
          { t: 'mc', q: '¿Significado de 启发?', opts: ['Confundir', 'Inspirar', 'Engañar', 'Olvidar'], ans: 1 },
        ]},
        { name: 'Lectura avanzada', time: 30, qs: [
          { t: 'rd', title: '阅读', passage: '人工智能的快速发展引发了关于伦理和社会责任的深入讨论。一方面，AI技术极大地提高了生产效率和生活便利性；另一方面，它也带来了隐私侵犯、就业替代和算法偏见等问题。如何在技术进步和人类福祉之间取得平衡，成为当代社会面临的重要课题。', q: '¿Cuál es el dilema central?', opts: ['Costo de la IA', 'Balance entre progreso tecnológico y bienestar humano', 'Falta de tecnología', 'Educación insuficiente'], ans: 1 },
          { t: 'rd', title: '阅读', passage: '人工智能的快速发展引发了关于伦理和社会责任的深入讨论。一方面，AI技术极大地提高了生产效率和生活便利性；另一方面，它也带来了隐私侵犯、就业替代和算法偏见等问题。', q: '¿Qué problemas trae la IA?', opts: ['Solo desempleo', 'Privacidad, empleo y sesgo algorítmico', 'Solo costos', 'Nada negativo'], ans: 1 },
          { t: 'mc', q: '"何况" expresa:', opts: ['Además/Cuánto más', 'Sin embargo', 'Porque', 'Aunque'], ans: 0 },
          { t: 'mc', q: '"不免" significa:', opts: ['Evitable', 'Inevitable', 'Imposible', 'Opcional'], ans: 1 },
          { t: 'mc', q: '"固然...但..." expresa:', opts: ['Causa', 'Admitir algo pero...', 'Tiempo', 'Resultado'], ans: 1 },
        ]},
      ]
    },
    HSK6: {
      title: 'HSK 6 — Simulacro',
      sections: [
        { name: 'Vocabulario y expresión', time: 30, qs: [
          { t: 'mc', q: '¿Significado de 悖论?', opts: ['Verdad', 'Paradoja', 'Ley', 'Teorema'], ans: 1 },
          { t: 'mc', q: '¿Qué es 范畴?', opts: ['Ejemplo', 'Categoría', 'Detalle', 'Resultado'], ans: 1 },
          { t: 'mc', q: '¿"Implicación"?', opts: ['含义', '含量', '含糊', '含蓄'], ans: 0 },
          { t: 'mc', q: '¿Significado de 衍生?', opts: ['Desaparecer', 'Derivar', 'Original', 'Básico'], ans: 1 },
          { t: 'mc', q: '¿Qué es 主观臆断?', opts: ['Análisis objetivo', 'Juicio subjetivo arbitrario', 'Decisión democrática', 'Conclusión científica'], ans: 1 },
          { t: 'mc', q: '¿"Disipar dudas"?', opts: ['释疑', '质疑', '怀疑', '猜疑'], ans: 0 },
          { t: 'mc', q: '¿Significado de 笼统?', opts: ['Detallado', 'Vago/General', 'Preciso', 'Específico'], ans: 1 },
          { t: 'tx', q: '¿Pinyin de 瑕疵?', ans: 'xiaci' },
          { t: 'mc', q: '¿Qué es 辩证?', opts: ['Simple', 'Dialéctico', 'Unilateral', 'Superficial'], ans: 1 },
          { t: 'mc', q: '¿"Integrar/Fusionar"?', opts: ['分裂', '融合', '分离', '排斥'], ans: 1 },
        ]},
        { name: 'Lectura académica', time: 35, qs: [
          { t: 'rd', title: '学术文章', passage: '全球化背景下的文化同质化现象引发了学术界的广泛关注。一种观点认为，强势文化的扩张正在侵蚀地方文化的独特性，导致文化多样性的衰退。然而，另一种观点则指出，文化交流并非零和博弈，本土文化在与外来文化的互动中同样具有主动选择和创造性转化的能力。', q: '¿Cuál es la segunda perspectiva?', opts: ['Las culturas locales desaparecen', 'Las culturas locales pueden transformarse creativamente', 'La globalización es negativa', 'Solo las culturas fuertes sobreviven'], ans: 1 },
          { t: 'rd', title: '学术文章', passage: '全球化背景下的文化同质化现象引发了学术界的广泛关注。一种观点认为，强势文化的扩张正在侵蚀地方文化的独特性，导致文化多样性的衰退。', q: '¿Qué fenómeno preocupa a los académicos?', opts: ['Crecimiento económico', 'Homogeneización cultural', 'Cambio climático', 'Migración'], ans: 1 },
          { t: 'mc', q: '"不置可否" significa:', opts: ['Estar de acuerdo', 'No pronunciarse', 'Rechazar', 'Aceptar'], ans: 1 },
          { t: 'mc', q: '"鉴于" equivale a:', opts: ['A pesar de', 'Considerando que', 'Sin importar', 'Después de'], ans: 1 },
          { t: 'mc', q: '"无可厚非" significa:', opts: ['Criticable', 'Comprensible/Justificable', 'Inaceptable', 'Perfecto'], ans: 1 },
        ]},
      ]
    },
  },

  // German advanced
  de: {
    B1: {
      title: 'Goethe B1 — Simulacro',
      sections: [
        { name: 'Lesen', time: 25, qs: [
          { t: 'rd', title: 'Text 1', passage: 'Die Digitalisierung verändert die Arbeitswelt grundlegend. Viele Berufe werden durch Automatisierung ersetzt, während gleichzeitig neue Tätigkeitsfelder entstehen. Lebenslanges Lernen wird zur Notwendigkeit, um auf dem Arbeitsmarkt bestehen zu können.', q: '¿Qué se vuelve necesario según el texto?', opts: ['Jubilarse temprano', 'Aprendizaje continuo', 'Cambiar de país', 'Trabajar más horas'], ans: 1 },
          { t: 'mc', q: '¿Konjunktiv II de "sein" (ich)?', opts: ['wäre', 'sei', 'bin', 'war'], ans: 0 },
          { t: 'mc', q: '¿Qué significa "obwohl"?', opts: ['Porque', 'Aunque', 'Cuando', 'Si'], ans: 1 },
          { t: 'mc', q: '"Nachdem er gegessen ___, ging er."', opts: ['hat', 'hatte', 'haben', 'hätte'], ans: 1 },
          { t: 'mc', q: '¿Relativo para dativo plural?', opts: ['die', 'der', 'denen', 'dessen'], ans: 2 },
          { t: 'mc', q: '"Je mehr man übt, ___ besser wird man."', opts: ['desto', 'dann', 'also', 'weil'], ans: 0 },
          { t: 'mc', q: '¿Pasiva con "werden": "Das Buch ___ gelesen."', opts: ['wird', 'ist', 'hat', 'war'], ans: 0 },
          { t: 'mc', q: '"Anstatt zu arbeiten, ___ er fern."', opts: ['sieht', 'sah', 'sehen', 'gesehen'], ans: 1 },
          { t: 'tx', q: '¿Konjunktiv II de "haben" (ich)?', ans: 'hätte' },
          { t: 'mc', q: '"Trotzdem" expresa:', opts: ['Causa', 'Sin embargo', 'Tiempo', 'Condición'], ans: 1 },
        ]},
      ]
    },
    B2: {
      title: 'Goethe B2 — Simulacro',
      sections: [
        { name: 'Lesen und Grammatik', time: 30, qs: [
          { t: 'rd', title: 'Artikel', passage: 'Die Debatte um künstliche Intelligenz ist in Deutschland besonders intensiv. Einerseits sehen Befürworter enormes Potenzial für Wirtschaft und Forschung. Andererseits warnen Kritiker vor den Risiken für Datenschutz und Arbeitsplätze. Die Bundesregierung versucht, einen Mittelweg zwischen Innovation und Regulierung zu finden.', q: '¿Qué busca el gobierno alemán?', opts: ['Prohibir la IA', 'Un equilibrio entre innovación y regulación', 'Invertir solo en IA', 'Ignorar el problema'], ans: 1 },
          { t: 'mc', q: '"Hätte ich das gewusst, ___ ich anders gehandelt."', opts: ['hätte', 'habe', 'werde', 'bin'], ans: 0 },
          { t: 'mc', q: '¿"Indem" expresa?', opts: ['A pesar de', 'Mientras/Al hacer', 'Después de', 'Antes de'], ans: 1 },
          { t: 'mc', q: '"Zumal" significa:', opts: ['Aunque', 'Sobre todo porque', 'Sin embargo', 'Antes de'], ans: 1 },
          { t: 'mc', q: '¿Qué es un "Partizip I" como adjetivo?', opts: ['Terminado', 'En proceso', 'Pasado', 'Futuro'], ans: 1 },
          { t: 'mc', q: '"Nichtsdestotrotz" equivale a:', opts: ['Por eso', 'No obstante', 'Porque', 'Finalmente'], ans: 1 },
          { t: 'mc', q: '"Es sei denn" significa:', opts: ['Porque', 'A menos que', 'Aunque', 'Cuando'], ans: 1 },
          { t: 'tx', q: '¿Genitivo de "das Buch des ___" (Kind)?', ans: 'Kindes' },
          { t: 'mc', q: '"Geschweige denn" expresa:', opts: ['Además', 'Y mucho menos', 'Sobre todo', 'Por ejemplo'], ans: 1 },
          { t: 'mc', q: '¿"Aufgrund" requiere qué caso?', opts: ['Akkusativ', 'Dativ', 'Genitiv', 'Nominativ'], ans: 2 },
        ]},
      ]
    },
    C1: {
      title: 'Goethe C1 — Simulacro',
      sections: [
        { name: 'Leseverstehen', time: 35, qs: [
          { t: 'rd', title: 'Wissenschaft', passage: 'Die epistemologische Frage nach der Objektivität wissenschaftlicher Erkenntnis bleibt ein zentrales Thema der Wissenschaftstheorie. Thomas Kuhns Konzept der Paradigmenwechsel hat gezeigt, dass wissenschaftlicher Fortschritt nicht linear verläuft, sondern durch revolutionäre Umbrüche gekennzeichnet ist.', q: '¿Qué mostró Thomas Kuhn?', opts: ['La ciencia es lineal', 'El progreso científico tiene revoluciones', 'Todo es objetivo', 'No hay progreso'], ans: 1 },
          { t: 'mc', q: '"Inwieweit" significa:', opts: ['De ninguna manera', 'En qué medida', 'Siempre', 'Nunca'], ans: 1 },
          { t: 'mc', q: '¿Qué es "Konjunktiv I" en discurso indirecto?', opts: ['Deseo', 'Reporte de lo dicho', 'Futuro', 'Pasado'], ans: 1 },
          { t: 'mc', q: '"Er sagte, er ___ krank." (Konj. I)', opts: ['ist', 'sei', 'wäre', 'war'], ans: 1 },
          { t: 'mc', q: '"Ungeachtet" requiere:', opts: ['Dativ', 'Akkusativ', 'Genitiv', 'Nominativ'], ans: 2 },
          { t: 'mc', q: '"Vermöge" significa:', opts: ['A pesar de', 'En virtud de', 'Sin', 'Contra'], ans: 1 },
          { t: 'mc', q: '¿Significado de "schlechterdings"?', opts: ['Parcialmente', 'Absolutamente', 'Apenas', 'Probablemente'], ans: 1 },
          { t: 'mc', q: '"Anhand" equivale a:', opts: ['Sin', 'A base de/Mediante', 'Contra', 'Antes de'], ans: 1 },
          { t: 'tx', q: '¿Konjunktiv I de "haben" (er)?', ans: 'habe' },
          { t: 'mc', q: '"Mittels" requiere qué caso:', opts: ['Dativ', 'Genitiv', 'Akkusativ', 'Nominativ'], ans: 1 },
        ]},
      ]
    },
  },

  // English advanced
  en: {
    B1: {
      title: 'Cambridge B1 (PET) — Simulacro',
      sections: [
        { name: 'Reading & Grammar', time: 25, qs: [
          { t: 'mc', q: '"If I ___ you, I would study harder."', opts: ['am', 'was', 'were', 'be'], ans: 2 },
          { t: 'mc', q: '¿Qué es un "phrasal verb"?', opts: ['Verbo + preposición con significado nuevo', 'Verbo regular', 'Adjetivo', 'Sustantivo'], ans: 0 },
          { t: 'mc', q: '"I wish I ___ speak Japanese."', opts: ['can', 'could', 'would', 'should'], ans: 1 },
          { t: 'mc', q: '"She ___ working here for five years."', opts: ['is', 'has been', 'was', 'had'], ans: 1 },
          { t: 'mc', q: '"The report ___ by the manager yesterday."', opts: ['wrote', 'was written', 'written', 'is written'], ans: 1 },
          { t: 'mc', q: '"He suggested ___ early."', opts: ['to leave', 'leaving', 'leave', 'left'], ans: 1 },
          { t: 'mc', q: '"Despite ___ tired, she continued."', opts: ['be', 'being', 'was', 'is'], ans: 1 },
          { t: 'mc', q: '"Had I known, I ___ come."', opts: ['would have', 'will have', 'had', 'have'], ans: 0 },
          { t: 'tx', q: '"He told me ___ he was leaving." (conjunción)', ans: 'that' },
          { t: 'mc', q: '"The more you practice, the ___ you get."', opts: ['good', 'best', 'better', 'well'], ans: 2 },
        ]},
      ]
    },
    B2: {
      title: 'Cambridge B2 (FCE) — Simulacro',
      sections: [
        { name: 'Use of English', time: 30, qs: [
          { t: 'mc', q: '"Not until he arrived ___ the truth."', opts: ['he learned', 'did he learn', 'he did learn', 'learned he'], ans: 1 },
          { t: 'mc', q: '"She couldn\'t help ___ at the joke."', opts: ['to laugh', 'laughing', 'laugh', 'laughed'], ans: 1 },
          { t: 'mc', q: '"It\'s high time we ___ a decision."', opts: ['make', 'made', 'making', 'to make'], ans: 1 },
          { t: 'mc', q: '"___ he rich, he would travel the world."', opts: ['If', 'Were', 'Was', 'Should'], ans: 1 },
          { t: 'mc', q: '"The company is ___ of going bankrupt."', opts: ['in danger', 'on the verge', 'at risk', 'Todas correctas'], ans: 3 },
          { t: 'mc', q: '"I\'d rather you ___ smoking."', opts: ['stop', 'stopped', 'to stop', 'stopping'], ans: 1 },
          { t: 'mc', q: '"Hardly ___ he arrived when it started raining."', opts: ['has', 'had', 'did', 'was'], ans: 1 },
          { t: 'mc', q: '"She\'s used to ___ early."', opts: ['wake', 'waking', 'woke', 'to wake'], ans: 1 },
          { t: 'tx', q: '"He denied ___ the window." (break, -ing)', ans: 'breaking' },
          { t: 'mc', q: '"Little ___ they know about the surprise."', opts: ['do', 'did', 'are', 'were'], ans: 1 },
        ]},
      ]
    },
    C1: {
      title: 'Cambridge C1 (CAE) — Simulacro',
      sections: [
        { name: 'Advanced Use of English', time: 35, qs: [
          { t: 'mc', q: '"___ should the need arise, contact us immediately."', opts: ['If', 'Should', 'Would', 'Could'], ans: 1 },
          { t: 'mc', q: '"He is nothing if not ___." (very determined)', opts: ['persistent', 'persisting', 'persistence', 'persisted'], ans: 0 },
          { t: 'mc', q: '"No sooner had she left ___ the phone rang."', opts: ['when', 'than', 'that', 'as'], ans: 1 },
          { t: 'mc', q: '"The proposal, ___ merits are obvious, was rejected."', opts: ['which', 'whose', 'that', 'whom'], ans: 1 },
          { t: 'mc', q: '"It beggars belief that" means:', opts: ['Es increíble que', 'Es lógico', 'Es posible', 'Es necesario'], ans: 0 },
          { t: 'mc', q: '"Be that as it may" expresa:', opts: ['Acuerdo total', 'Concesión/Sin embargo', 'Duda', 'Causa'], ans: 1 },
          { t: 'mc', q: '"She took umbrage at his comments" — "umbrage" means:', opts: ['Pleasure', 'Offense', 'Interest', 'Pride'], ans: 1 },
          { t: 'mc', q: '"Notwithstanding" is synonymous with:', opts: ['Because of', 'Despite', 'Due to', 'Thanks to'], ans: 1 },
          { t: 'tx', q: '"He was at a ___ for words." (no sabía qué decir)', ans: 'loss' },
          { t: 'mc', q: '"Inasmuch as" means:', opts: ['Although', 'In so far as / Because', 'Despite', 'Unless'], ans: 1 },
          { t: 'mc', q: '"The die is cast" means:', opts: ['It\'s time to gamble', 'The decision is irreversible', 'The game is over', 'Try again'], ans: 1 },
          { t: 'mc', q: '"Lest" is used with:', opts: ['Indicative', 'Subjunctive/Should', 'Past tense', 'Future'], ans: 1 },
        ]},
      ]
    },
  },

  // Korean advanced
  ko: {
    TOPIK3: {
      title: 'TOPIK II (3급) — Simulacro',
      sections: [
        { name: '어휘·문법', time: 25, qs: [
          { t: 'mc', q: '¿Qué significa 경험?', opts: ['Futuro', 'Experiencia', 'Sueño', 'Opinión'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ 수 있다" expresa:', opts: ['Obligación', 'Posibilidad', 'Pasado', 'Deseo'], ans: 1 },
          { t: 'mc', q: '¿Significado de 환경?', opts: ['Economía', 'Medio ambiente', 'Salud', 'Educación'], ans: 1 },
          { t: 'mc', q: '"-기 때문에" significa:', opts: ['Aunque', 'Porque', 'Si', 'Cuando'], ans: 1 },
          { t: 'mc', q: '¿Qué es 사회?', opts: ['Empresa', 'Sociedad', 'Escuela', 'Familia'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄴ 적이 있다" expresa:', opts: ['Haber hecho algo', 'Querer hacer', 'Deber hacer', 'Poder hacer'], ans: 0 },
          { t: 'mc', q: '¿"Desarrollo"?', opts: ['발견', '발전', '발명', '발표'], ans: 1 },
          { t: 'mc', q: '"-는 동안" significa:', opts: ['Después de', 'Durante/Mientras', 'Antes de', 'Sin hacer'], ans: 1 },
          { t: 'tx', q: '¿Romanización de 관계?', ans: 'gwangye' },
          { t: 'mc', q: '"-아/어야 하다" expresa:', opts: ['Posibilidad', 'Obligación/Deber', 'Deseo', 'Pasado'], ans: 1 },
        ]},
      ]
    },
    TOPIK4: {
      title: 'TOPIK II (4급) — Simulacro',
      sections: [
        { name: '읽기·문법', time: 30, qs: [
          { t: 'mc', q: '¿Significado de 경쟁?', opts: ['Cooperación', 'Competencia', 'Compromiso', 'Acuerdo'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ 뿐만 아니라" significa:', opts: ['Solo', 'No solo...sino también', 'Aunque', 'Porque'], ans: 1 },
          { t: 'mc', q: '¿Qué es 책임?', opts: ['Libertad', 'Responsabilidad', 'Derecho', 'Autoridad'], ans: 1 },
          { t: 'mc', q: '"-는 반면에" expresa:', opts: ['Causa', 'Contraste', 'Tiempo', 'Resultado'], ans: 1 },
          { t: 'rd', title: '읽기', passage: '한국의 교육 제도는 세계적으로 높은 수준으로 평가받고 있다. 그러나 과도한 경쟁과 사교육 비용은 사회적 문제로 지적되고 있다. 최근에는 학생들의 행복과 창의성을 중시하는 방향으로 교육 개혁이 진행되고 있다.', q: '¿Qué problema tiene la educación coreana?', opts: ['Baja calidad', 'Competencia excesiva y costos', 'Pocos estudiantes', 'Falta de escuelas'], ans: 1 },
          { t: 'rd', title: '읽기', passage: '한국의 교육 제도는 세계적으로 높은 수준으로 평가받고 있다. 그러나 과도한 경쟁과 사교육 비용은 사회적 문제로 지적되고 있다. 최근에는 학생들의 행복과 창의성을 중시하는 방향으로 교육 개혁이 진행되고 있다.', q: '¿Hacia dónde va la reforma?', opts: ['Más exámenes', 'Felicidad y creatividad', 'Menos escuelas', 'Solo tecnología'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ 수밖에 없다" significa:', opts: ['No poder', 'No tener más remedio que', 'Querer', 'Esperar'], ans: 1 },
          { t: 'mc', q: '"-는 한" expresa:', opts: ['Aunque', 'Mientras/En la medida que', 'Porque', 'Después'], ans: 1 },
          { t: 'mc', q: '¿Qué es 의견?', opts: ['Hecho', 'Opinión', 'Verdad', 'Mentira'], ans: 1 },
          { t: 'tx', q: '¿Romanización de 문화?', ans: 'munhwa' },
        ]},
      ]
    },
    TOPIK5: {
      title: 'TOPIK II (5급) — Simulacro',
      sections: [
        { name: '고급 읽기', time: 35, qs: [
          { t: 'mc', q: '¿Significado de 편견?', opts: ['Opinión objetiva', 'Prejuicio', 'Verdad', 'Perspectiva'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ지언정" expresa:', opts: ['Aunque sea así', 'Porque', 'Si', 'Cuando'], ans: 0 },
          { t: 'mc', q: '¿Qué es 추세?', opts: ['Resultado', 'Tendencia', 'Causa', 'Efecto'], ans: 1 },
          { t: 'mc', q: '"-는 셈이다" significa:', opts: ['Es como si/Viene a ser', 'No es', 'Quizás', 'Nunca'], ans: 0 },
          { t: 'rd', title: '학술', passage: '세계화 시대에 문화적 다양성의 보존은 중요한 과제가 되었다. 강대국의 문화가 전 세계로 확산되면서 소수 문화의 존립이 위협받고 있다. 그러나 이에 대한 반작용으로 지역 문화를 보존하고 활성화하려는 움직임도 활발해지고 있다.', q: '¿Qué amenaza las culturas minoritarias?', opts: ['La tecnología', 'La expansión cultural de potencias', 'La educación', 'El clima'], ans: 1 },
          { t: 'rd', title: '학술', passage: '세계화 시대에 문화적 다양성의 보존은 중요한 과제가 되었다. 강대국의 문화가 전 세계로 확산되면서 소수 문화의 존립이 위협받고 있다. 그러나 이에 대한 반작용으로 지역 문화를 보존하고 활성화하려는 움직임도 활발해지고 있다.', q: '¿Qué respuesta se da?', opts: ['Ignorar el cambio', 'Movimientos de preservación local', 'Prohibir culturas extranjeras', 'Solo globalizar'], ans: 1 },
          { t: 'mc', q: '"-다 보니" significa:', opts: ['Antes de', 'Al seguir haciendo, resultó que', 'Sin hacer', 'Aunque'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ 따름이다" expresa:', opts: ['Solo/Simplemente', 'Además', 'Sin embargo', 'Porque'], ans: 0 },
          { t: 'mc', q: '¿"Implementar"?', opts: ['시행', '시험', '시작', '시설'], ans: 0 },
          { t: 'mc', q: '"-기 마련이다" significa:', opts: ['Es poco probable', 'Es natural/inevitable que', 'Es imposible', 'Es raro'], ans: 1 },
        ]},
      ]
    },
    TOPIK6: {
      title: 'TOPIK II (6급) — Simulacro',
      sections: [
        { name: '최고급 읽기·어휘', time: 40, qs: [
          { t: 'mc', q: '¿Significado de 괴리?', opts: ['Unión', 'Discrepancia', 'Acuerdo', 'Cercanía'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ망정" expresa:', opts: ['Aunque eso sea aceptable', 'Porque', 'Si y solo si', 'Nunca'], ans: 0 },
          { t: 'mc', q: '¿Qué es 개연성?', opts: ['Certeza', 'Probabilidad', 'Imposibilidad', 'Necesidad'], ans: 1 },
          { t: 'mc', q: '"-는 바" en registro formal significa:', opts: ['Porque informal', 'Lo que/El hecho de que (formal)', 'Aunque', 'Si'], ans: 1 },
          { t: 'rd', title: '논문', passage: '현대 사회에서 개인의 자유와 공동체의 이익 사이의 균형은 철학적·법적으로 끊임없이 논의되는 주제이다. 자유주의 전통에서는 개인의 권리를 우선시하지만, 공동체주의자들은 개인이 사회적 맥락 속에서만 진정한 자아를 실현할 수 있다고 주장한다.', q: '¿Qué dice el comunitarismo?', opts: ['El individuo es primero', 'La verdadera identidad se realiza en sociedad', 'No hay comunidad', 'Solo importa la economía'], ans: 1 },
          { t: 'mc', q: '"-건대" (formal) expresa:', opts: ['Tiempo', 'Hablando de/Considerando', 'Oposición', 'Resultado'], ans: 1 },
          { t: 'mc', q: '¿Significado de 함축?', opts: ['Explicación directa', 'Implicación/Connotación', 'Traducción', 'Resumen'], ans: 1 },
          { t: 'mc', q: '"-(으)ㄹ진대" expresa:', opts: ['Dado que (formal)', 'A pesar de', 'Sin hacer', 'Después'], ans: 0 },
          { t: 'tx', q: '¿Romanización de 형이상학?', ans: 'hyeongisanghak' },
          { t: 'mc', q: '"-는 터에" significa:', opts: ['En la situación de', 'Sin razón', 'Quizás', 'Nunca'], ans: 0 },
        ]},
      ]
    },
  },

  // Italian advanced
  it: {
    B1: {
      title: 'CILS B1 — Simulacro',
      sections: [
        { name: 'Comprensione', time: 25, qs: [
          { t: 'mc', q: '¿Congiuntivo presente de "essere" (io)?', opts: ['sia', 'sono', 'ero', 'sarò'], ans: 0 },
          { t: 'mc', q: '"Benché" va seguido de:', opts: ['Indicativo', 'Congiuntivo', 'Infinito', 'Condizionale'], ans: 1 },
          { t: 'mc', q: '"Se avessi tempo, ___ in Italia."', opts: ['andrei', 'vado', 'andrò', 'andavo'], ans: 0 },
          { t: 'mc', q: '¿"Tuttavia" expresa?', opts: ['Causa', 'Sin embargo', 'Tiempo', 'Condición'], ans: 1 },
          { t: 'mc', q: '"Prima che" requiere:', opts: ['Indicativo', 'Congiuntivo', 'Infinito', 'Participio'], ans: 1 },
          { t: 'mc', q: '"Ci vuole" vs "ci vogliono":', opts: ['Singular vs plural', 'Son iguales', 'Formal vs informal', 'Pasado vs presente'], ans: 0 },
          { t: 'mc', q: '"Magari" expresa:', opts: ['Certeza', 'Deseo/Ojalá', 'Negación', 'Pasado'], ans: 1 },
          { t: 'mc', q: '¿Gerundio de "fare"?', opts: ['facendo', 'fando', 'farendo', 'faciendo'], ans: 0 },
          { t: 'tx', q: '¿Congiuntivo presente de "andare" (lui)?', ans: 'vada' },
          { t: 'mc', q: '"Affinché" expresa:', opts: ['Causa', 'Finalidad', 'Oposición', 'Tiempo'], ans: 1 },
        ]},
      ]
    },
    B2: {
      title: 'CILS B2 — Simulacro',
      sections: [
        { name: 'Analisi linguistica', time: 30, qs: [
          { t: 'mc', q: '¿Congiuntivo imperfetto de "sapere" (io)?', opts: ['sapessi', 'sappia', 'so', 'sapevo'], ans: 0 },
          { t: 'mc', q: '"Qualora" equivale a:', opts: ['Siempre que', 'En caso de que', 'Porque', 'Después de'], ans: 1 },
          { t: 'mc', q: '"Non fosse stato per lui, non ce l\'avrei fatta." ¿Estructura?', opts: ['Periodo ipotetico della realtà', 'Periodo ipotetico dell\'irrealtà', 'Periodo ipotetico della possibilità', 'Frase semplice'], ans: 1 },
          { t: 'mc', q: '"Pur essendo stanco, continuò." — "Pur" expresa:', opts: ['Causa', 'Concesión', 'Tiempo', 'Condición'], ans: 1 },
          { t: 'mc', q: '"A patto che" requiere:', opts: ['Indicativo', 'Congiuntivo', 'Infinito', 'Condizionale'], ans: 1 },
          { t: 'mc', q: '"Quand\'anche" significa:', opts: ['Cuando', 'Aunque/Incluso si', 'Porque', 'Después'], ans: 1 },
          { t: 'mc', q: '¿Passivo de "Il romanzo è stato scritto"?', opts: ['Pasado prossimo passivo', 'Imperfetto passivo', 'Futuro passivo', 'Presente passivo'], ans: 0 },
          { t: 'tx', q: '¿Congiuntivo trapassato de "essere" (io)?', ans: 'fossi stato' },
          { t: 'mc', q: '"Nondimeno" es sinónimo de:', opts: ['Perciò', 'Tuttavia', 'Inoltre', 'Dunque'], ans: 1 },
          { t: 'mc', q: '"Vuoi che io ___?" (venire)', opts: ['vengo', 'venga', 'venivo', 'verrò'], ans: 1 },
        ]},
      ]
    },
  },

  // Portuguese advanced
  pt: {
    B1: {
      title: 'CELPE-Bras B1 — Simulacro',
      sections: [
        { name: 'Compreensão e gramática', time: 25, qs: [
          { t: 'mc', q: '¿Subjuntivo presente de "ser" (eu)?', opts: ['seja', 'sou', 'era', 'serei'], ans: 0 },
          { t: 'mc', q: '"Embora" va seguido de:', opts: ['Indicativo', 'Subjuntivo', 'Infinitivo', 'Condicional'], ans: 1 },
          { t: 'mc', q: '"Se eu tivesse dinheiro, ___ uma casa."', opts: ['compro', 'compraria', 'comprei', 'comprarei'], ans: 1 },
          { t: 'mc', q: '"Contudo" expresa:', opts: ['Causa', 'Sin embargo', 'Tiempo', 'Adición'], ans: 1 },
          { t: 'mc', q: '"Para que" requiere:', opts: ['Indicativo', 'Subjuntivo', 'Infinitivo', 'Gerúndio'], ans: 1 },
          { t: 'mc', q: '"Caso" + subjuntivo expresa:', opts: ['Tiempo', 'Condición', 'Causa', 'Oposición'], ans: 1 },
          { t: 'mc', q: '"Conquanto" significa:', opts: ['Porque', 'Aunque', 'Cuando', 'Si'], ans: 1 },
          { t: 'mc', q: '"Outrossim" equivale a:', opts: ['Sin embargo', 'Además', 'Porque', 'Aunque'], ans: 1 },
          { t: 'tx', q: '¿Subjuntivo presente de "ir" (ele)?', ans: 'va' },
          { t: 'mc', q: '"Não obstante" expresa:', opts: ['Causa', 'No obstante', 'Condición', 'Resultado'], ans: 1 },
        ]},
      ]
    },
  },

  // Russian advanced
  ru: {
    B1: {
      title: 'ТРКИ B1 — Simulacro',
      sections: [
        { name: 'Грамматика', time: 25, qs: [
          { t: 'mc', q: '¿Qué caso usa "в" para ubicación?', opts: ['Nominativo', 'Genitivo', 'Prepositivo', 'Acusativo'], ans: 2 },
          { t: 'mc', q: '¿Aspecto perfectivo de "читать"?', opts: ['читаю', 'прочитать', 'читал', 'читающий'], ans: 1 },
          { t: 'mc', q: '"Несмотря на то что" expresa:', opts: ['Causa', 'Concesión', 'Tiempo', 'Condición'], ans: 1 },
          { t: 'mc', q: '¿"Хотя" va seguido de?', opts: ['Infinitivo', 'Indicativo', 'Imperativo', 'Participio'], ans: 1 },
          { t: 'mc', q: '¿Caso genitivo de "книга"?', opts: ['книгу', 'книги', 'книге', 'книгой'], ans: 1 },
          { t: 'mc', q: '"Если бы я знал, я бы ___."', opts: ['пришёл', 'пришёл бы', 'приду', 'прихожу'], ans: 0 },
          { t: 'mc', q: '¿Verbo de movimiento "ir a pie" (unidireccional)?', opts: ['ходить', 'идти', 'бежать', 'ездить'], ans: 1 },
          { t: 'mc', q: '"Тем не менее" equivale a:', opts: ['Porque', 'Sin embargo', 'Por lo tanto', 'Además'], ans: 1 },
          { t: 'tx', q: '¿Instrumental de "друг"?', ans: 'другом' },
          { t: 'mc', q: '"Чтобы" + pasado expresa:', opts: ['Tiempo', 'Finalidad/Deseo', 'Causa', 'Oposición'], ans: 1 },
        ]},
      ]
    },
  },

  // Arabic advanced
  ar: {
    B1: {
      title: 'Árabe B1 — Simulacro',
      sections: [
        { name: 'قواعد ومفردات', time: 25, qs: [
          { t: 'mc', q: '¿Qué es المصدر (al-masdar)?', opts: ['Verbo conjugado', 'Nombre verbal/Infinitivo', 'Adjetivo', 'Pronombre'], ans: 1 },
          { t: 'mc', q: '"على الرغم من" expresa:', opts: ['Causa', 'A pesar de', 'Condición', 'Tiempo'], ans: 1 },
          { t: 'mc', q: '¿Forma del مضارع منصوب (subjuntivo)?', opts: ['يكتبُ', 'يكتبَ', 'يكتبْ', 'كتبَ'], ans: 1 },
          { t: 'mc', q: '¿Qué partícula precede al subjuntivo?', opts: ['قد', 'أنْ', 'قال', 'هل'], ans: 1 },
          { t: 'mc', q: '"بالإضافة إلى" significa:', opts: ['A pesar de', 'Además de', 'En lugar de', 'Porque'], ans: 1 },
          { t: 'mc', q: '¿Qué es إعراب?', opts: ['Escritura', 'Declinación/Flexión', 'Dialecto', 'Traducción'], ans: 1 },
          { t: 'mc', q: '¿Plural fracto de كتاب?', opts: ['كتابات', 'كتب', 'كاتبون', 'مكتوبات'], ans: 1 },
          { t: 'mc', q: '"إذ" expresa:', opts: ['Condición', 'Causa/Cuando', 'Oposición', 'Futuro'], ans: 1 },
          { t: 'tx', q: '¿Dual de طالب (estudiante)?', ans: 'طالبان' },
          { t: 'mc', q: '"لا سيما" significa:', opts: ['Nunca', 'Especialmente', 'Sin embargo', 'Quizás'], ans: 1 },
        ]},
      ]
    },
  },

  // Turkish advanced
  tr: {
    B1: {
      title: 'TYS B1 — Simulacro',
      sections: [
        { name: 'Dilbilgisi', time: 25, qs: [
          { t: 'mc', q: '"-mış" sufijo indica:', opts: ['Futuro', 'Pasado evidencial/indirecto', 'Presente', 'Imperativo'], ans: 1 },
          { t: 'mc', q: '"Rağmen" significa:', opts: ['Porque', 'A pesar de', 'Si', 'Cuando'], ans: 1 },
          { t: 'mc', q: '¿Voz pasiva de "yazmak"?', opts: ['yazılmak', 'yazdırmak', 'yazışmak', 'yazınmak'], ans: 0 },
          { t: 'mc', q: '"-(y)Arak" expresa:', opts: ['Causa', 'Modo/Gerundio', 'Tiempo', 'Condición'], ans: 1 },
          { t: 'mc', q: '"Oysa" equivale a:', opts: ['Por eso', 'Sin embargo', 'Porque', 'Además'], ans: 1 },
          { t: 'mc', q: '¿Causativo de "öğrenmek"?', opts: ['öğrenilmek', 'öğretmek', 'öğrenişmek', 'öğrenmektir'], ans: 1 },
          { t: 'mc', q: '"Her ne kadar...olsa da" expresa:', opts: ['Causa', 'Aunque', 'Si', 'Cuando'], ans: 1 },
          { t: 'mc', q: '"-DIğI sürece" significa:', opts: ['Después de', 'Mientras/En tanto que', 'Antes de', 'Sin hacer'], ans: 1 },
          { t: 'tx', q: '¿Negación del aoristo de "gelmek" (o)?', ans: 'gelmez' },
          { t: 'mc', q: '"Dolayısıyla" expresa:', opts: ['Oposición', 'Por lo tanto', 'Aunque', 'A pesar de'], ans: 1 },
        ]},
      ]
    },
  },

  // Spanish advanced (for non-native speakers)
  es: {
    B1: {
      title: 'DELE B1 — Simulacro',
      sections: [
        { name: 'Comprensión y gramática', time: 25, qs: [
          { t: 'mc', q: '¿Subjuntivo presente de "tener" (yo)?', opts: ['tengo', 'tenga', 'tuve', 'tendré'], ans: 1 },
          { t: 'mc', q: '"Aunque" + subjuntivo expresa:', opts: ['Hecho real', 'Concesión hipotética', 'Causa', 'Tiempo'], ans: 1 },
          { t: 'mc', q: '"Si hubiera sabido, habría ___."', opts: ['vengo', 'vendré', 'venido', 'vine'], ans: 2 },
          { t: 'mc', q: '"No obstante" es sinónimo de:', opts: ['Porque', 'Sin embargo', 'Además', 'Entonces'], ans: 1 },
          { t: 'mc', q: '"Para que" requiere:', opts: ['Indicativo', 'Subjuntivo', 'Infinitivo', 'Imperativo'], ans: 1 },
          { t: 'mc', q: '"Cuyo/a" funciona como:', opts: ['Pronombre relativo posesivo', 'Pronombre personal', 'Adverbio', 'Conjunción'], ans: 0 },
          { t: 'mc', q: '"A pesar de que" va seguido de:', opts: ['Infinitivo', 'Indicativo o subjuntivo', 'Solo imperativo', 'Solo gerundio'], ans: 1 },
          { t: 'mc', q: '¿Diferencia entre "por" y "para"?', opts: ['Son iguales', 'Por=causa, Para=finalidad', 'Por=futuro, Para=pasado', 'No hay diferencia'], ans: 1 },
          { t: 'tx', q: '¿Subjuntivo imperfecto de "ir" (yo)?', ans: 'fuera' },
          { t: 'mc', q: '"De ahí que" requiere:', opts: ['Indicativo', 'Subjuntivo', 'Infinitivo', 'Condicional'], ans: 1 },
        ]},
      ]
    },
  },

  // Hindi advanced
  hi: {
    B1: {
      title: 'Hindi B1 — Simulacro',
      sections: [
        { name: 'व्याकरण और शब्दावली', time: 25, qs: [
          { t: 'mc', q: '¿Qué es el caso "कर्म कारक" (karma karak)?', opts: ['Nominativo', 'Acusativo', 'Instrumental', 'Locativo'], ans: 1 },
          { t: 'mc', q: '"हालांकि" expresa:', opts: ['Causa', 'Aunque/Sin embargo', 'Condición', 'Tiempo'], ans: 1 },
          { t: 'mc', q: '¿Qué es संधि (sandhi)?', opts: ['Separación', 'Unión de sonidos', 'Plural', 'Negación'], ans: 1 },
          { t: 'mc', q: '"ताकि" expresa:', opts: ['Causa', 'Para que/Finalidad', 'Oposición', 'Tiempo'], ans: 1 },
          { t: 'mc', q: '¿"Medio ambiente" en hindi?', opts: ['पर्यावरण', 'परिवार', 'परिणाम', 'प्रदूषण'], ans: 0 },
          { t: 'mc', q: '"यद्यपि...तथापि" expresa:', opts: ['Si...entonces', 'Aunque...sin embargo', 'Porque...por lo tanto', 'Cuando...entonces'], ans: 1 },
          { t: 'mc', q: '¿Qué es समास (samaas)?', opts: ['Verbo compuesto', 'Palabra compuesta', 'Pronombre', 'Adverbio'], ans: 1 },
          { t: 'mc', q: '¿"Responsabilidad" en hindi?', opts: ['जिम्मेदारी', 'जानकारी', 'ज़रूरत', 'जनसंख्या'], ans: 0 },
          { t: 'tx', q: '¿"Desarrollo" en hindi (devanagari)?', ans: 'विकास' },
          { t: 'mc', q: '"क्योंकि" expresa:', opts: ['Oposición', 'Porque', 'Condición', 'Finalidad'], ans: 1 },
        ]},
      ]
    },
  },
};
