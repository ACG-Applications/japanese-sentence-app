// ============================================================
// MASTER DICTIONARY - Complete Data for Japanese Study App
// ============================================================

var MasterDictionary = {
  version: "1.0.0",
  lastUpdated: "2026-06-27",
  description: "Complete Japanese Sentence Structure Dictionary",

  // ----------------------------------------------------------
  // 35 PATTERNS
  // ----------------------------------------------------------
  patterns: [
    {
      id: "p1",
      number: 1,
      name: "X は Y です / だ",
      category: "core",
      meaning: "X is Y",
      structure: "[Topic] は [Noun/Adj] です",
      particles: ["は"],
      examples: [
        {
          jp: "私は学生です",
          en: "I am a student",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です",
        },
        {
          jp: "この部屋は静かです",
          en: "This room is quiet",
          furigana:
            "この<ruby>部屋<rt>へや</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かです",
        },
        {
          jp: "この寿司は美味しいです",
          en: "This sushi is delicious",
          furigana:
            "この<ruby>寿司<rt>すし</rt></ruby>は<ruby>美味<rt>おい</rt></ruby>しいです",
        },
      ],
      conjugations: {
        polite: {
          aff: "です",
          past: "でした",
          neg: "じゃないです",
          neg_past: "じゃなかったです",
        },
        plain: {
          aff: "だ",
          past: "だった",
          neg: "じゃない",
          neg_past: "じゃなかった",
        },
      },
      notes: "Noun / Na-adj: + です or だ.  I-adj: + です only (never だ).",
      common_mistakes: [
        {
          mistake: "美味しいだ",
          correction: "美味しい",
          note: "No だ with i-adjectives",
        },
      ],
    },
    {
      id: "p2",
      number: 2,
      name: "X は Y を [V]ます / [V]る",
      category: "core",
      meaning: "X does [verb] to Y",
      structure: "[Topic] は [Object] を [Verb]",
      particles: ["は", "を"],
      examples: [
        {
          jp: "私は本を読みます",
          en: "I read a book",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます",
        },
        {
          jp: "私は寿司を食べます",
          en: "I eat sushi",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>寿司<rt>すし</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます",
        },
      ],
      conjugations: {
        polite: {
          aff: "ます",
          past: "ました",
          neg: "ません",
          neg_past: "ませんでした",
        },
        plain: { aff: "る", past: "た", neg: "ない", neg_past: "なかった" },
      },
      notes: "を ONLY marks the direct object of a transitive verb.",
      common_mistakes: [
        {
          mistake: "本を好き",
          correction: "本が好き",
          note: "好き uses が, not を",
        },
      ],
    },
    {
      id: "p3",
      number: 3,
      name: "[場所] に [もの] が あります / います",
      category: "core",
      meaning: "Y exists at X / There is Y at X",
      structure: "[Location] に [Thing] が あります/います",
      particles: ["の", "に", "が"],
      examples: [
        {
          jp: "机の上に本があります",
          en: "There is a book on the desk",
          furigana:
            "<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>があります",
        },
        {
          jp: "公園に友達がいます",
          en: "There is a friend at the park",
          furigana:
            "<ruby>公園<rt>こうえん</rt></ruby>に<ruby>友達<rt>ともだち</rt></ruby>がいます",
        },
      ],
      conjugations: {
        inanimate: {
          aff: "あります",
          past: "ありました",
          neg: "ありません",
          neg_past: "ありませんでした",
        },
        animate: {
          aff: "います",
          past: "いました",
          neg: "いません",
          neg_past: "いませんでした",
        },
      },
      notes:
        "ある = inanimate objects. いる = living things (people, animals).",
      common_mistakes: [
        {
          mistake: "本がいます",
          correction: "本があります",
          note: "本 is inanimate -> use ある",
        },
        {
          mistake: "友達があります",
          correction: "友達がいます",
          note: "友達 is animate -> use いる",
        },
      ],
    },
    {
      id: "p4",
      number: 4,
      name: "X は Y が 好きです / だ",
      category: "core",
      meaning: "X likes Y",
      structure: "[Topic] は [Thing] が 好きです",
      particles: ["は", "が"],
      examples: [
        {
          jp: "私は寿司が好きです",
          en: "I like sushi",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>寿司<rt>すし</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです",
        },
        {
          jp: "私は猫が好きです",
          en: "I like cats",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>猫<rt>ねこ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです",
        },
      ],
      conjugations: {
        polite: {
          aff: "好きです",
          past: "好きでした",
          neg: "好きじゃないです",
          neg_past: "好きじゃなかったです",
        },
        plain: {
          aff: "好きだ",
          past: "好きだった",
          neg: "好きじゃない",
          neg_past: "好きじゃなかった",
        },
      },
      notes:
        "好き is a NA-ADJECTIVE, not a verb. が marks the object of liking.",
      common_mistakes: [
        {
          mistake: "寿司を好き",
          correction: "寿司が好き",
          note: "好き uses が, not を",
        },
      ],
    },
    {
      id: "p5",
      number: 5,
      name: "X は Y が できます / できる",
      category: "core",
      meaning: "X can do Y / X is able to do Y",
      structure: "[Topic] は [Ability] が できます",
      particles: ["は", "が"],
      examples: [
        {
          jp: "私は日本語ができます",
          en: "I can speak Japanese",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>ができます",
        },
        {
          jp: "私はピアノができます",
          en: "I can play piano",
          furigana: "<ruby>私<rt>わたし</rt></ruby>はピアノができます",
        },
      ],
      conjugations: {
        polite: {
          aff: "できます",
          past: "できました",
          neg: "できません",
          neg_past: "できませんでした",
        },
        plain: {
          aff: "できる",
          past: "できた",
          neg: "できない",
          neg_past: "できなかった",
        },
      },
      notes: "できる is an irregular verb (する -> できる).",
      common_mistakes: [
        {
          mistake: "日本語をできます",
          correction: "日本語ができます",
          note: "できる uses が, not を",
        },
      ],
    },
    {
      id: "p6",
      number: 6,
      name: "[場所] へ / に 行きます / 来ます",
      category: "core",
      meaning: "Go to X / Come to X",
      structure: "[Place] へ/に 行きます/来ます",
      particles: ["へ", "の", "に"],
      examples: [
        {
          jp: "学校へ行きます",
          en: "I go to school",
          furigana:
            "<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます",
        },
        {
          jp: "私の家に来ます",
          en: "Come to my house",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます",
        },
      ],
      conjugations: {
        go: {
          aff: "行きます",
          past: "行きました",
          neg: "行きません",
          neg_past: "行きませんでした",
        },
        come: {
          aff: "来ます",
          past: "来ました",
          neg: "来ません",
          neg_past: "来ませんでした",
        },
      },
      notes: "へ emphasizes direction. に emphasizes destination.",
      common_mistakes: [
        {
          mistake: "学校を行きます",
          correction: "学校へ行きます",
          note: "Movement uses へ or に, not を",
        },
      ],
    },
    {
      id: "p7",
      number: 7,
      name: "[場所/手段] で [動作] を します / する",
      category: "core",
      meaning: "Do Y at X / Do Y by means of X",
      structure: "[Place/Means] で [Action] を します",
      particles: ["で", "を", "へ"],
      examples: [
        {
          jp: "公園で本を読みます",
          en: "I read a book at the park",
          furigana:
            "<ruby>公園<rt>こうえん</rt></ruby>で<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます",
        },
        {
          jp: "バスで学校へ行きます",
          en: "I go to school by bus",
          furigana:
            "バスで<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます",
        },
      ],
      conjugations: {
        polite: {
          aff: "します",
          past: "しました",
          neg: "しません",
          neg_past: "しませんでした",
        },
        plain: {
          aff: "する",
          past: "した",
          neg: "しない",
          neg_past: "しなかった",
        },
      },
      notes: "で marks location of action OR means/tool.",
      common_mistakes: [
        {
          mistake: "公園に本を読みます",
          correction: "公園で本を読みます",
          note: "Action location uses で, not に",
        },
      ],
    },
    {
      id: "p8",
      number: 8,
      name: "[Giver] は [Receiver] に [Thing] を あげます / あげる",
      category: "core",
      meaning: "Give Z to Y",
      structure: "[Giver] は [Receiver] に [Thing] を あげます",
      particles: ["は", "に", "を"],
      examples: [
        {
          jp: "私は友達に本をあげます",
          en: "I give a book to my friend",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>をあげます",
        },
        {
          jp: "私は妹にプレゼントをあげます",
          en: "I give a present to my little sister",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>妹<rt>いもうと</rt></ruby>にプレゼントをあげます",
        },
      ],
      conjugations: {
        polite: {
          aff: "あげます",
          past: "あげました",
          neg: "あげません",
          neg_past: "あげませんでした",
        },
        plain: {
          aff: "あげる",
          past: "あげた",
          neg: "あげない",
          neg_past: "あげなかった",
        },
      },
      notes:
        "あげる = giving OUTWARD (speaker -> others). くれる = giving INWARD (others -> speaker). もらう = receiving.",
      common_mistakes: [
        {
          mistake: "友達が本をくれました",
          correction: "友達に本をあげました",
          note: "Use あげる when the giver is you or your in-group",
        },
      ],
    },
    {
      id: "p9",
      number: 9,
      name: "X は Y が 欲しいです / だ",
      category: "core",
      meaning: "X wants Y",
      structure: "[Topic] は [Thing] が 欲しいです",
      particles: ["は", "が"],
      examples: [
        {
          jp: "私はコーヒーが欲しいです",
          en: "I want coffee",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>はコーヒーが<ruby>欲<rt>ほ</rt></ruby>しいです",
        },
        {
          jp: "私は新しい車が欲しい",
          en: "I want a new car",
          furigana:
            "<ruby>私<rt>わたし</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しい<ruby>車<rt>くるま</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しい",
        },
      ],
      conjugations: {
        polite: {
          aff: "欲しいです",
          past: "欲しかったです",
          neg: "欲しくないです",
          neg_past: "欲しくなかったです",
        },
        plain: {
          aff: "欲しい",
          past: "欲しかった",
          neg: "欲しくない",
          neg_past: "欲しくなかった",
        },
      },
      notes:
        "欲しい is an I-ADJECTIVE. ONLY for nouns (things you want to HAVE). For actions, use たい.",
      common_mistakes: [
        {
          mistake: "食べたいを欲しい",
          correction: "食べたい",
          note: "Use たい for actions, 欲しい for things",
        },
      ],
    },
    {
      id: "p10",
      number: 10,
      name: "[Statement] + か",
      category: "core",
      meaning: "Question?",
      structure: "[Statement] + か",
      particles: ["か"],
      examples: [
        {
          jp: "学生ですか？",
          en: "Are you a student?",
          furigana: "<ruby>学生<rt>がくせい</rt></ruby>ですか？",
        },
        {
          jp: "もう食べたか？",
          en: "Did you already eat?",
          furigana: "もう<ruby>食<rt>た</rt></ruby>べたか？",
        },
      ],
      conjugations: {
        polite: {
          aff: "ですか",
          past: "でしたか",
          neg: "じゃないですか",
          neg_past: "じゃなかったですか",
        },
        plain: {
          aff: "か",
          past: "だったか",
          neg: "じゃないか",
          neg_past: "じゃなかったか",
        },
      },
      notes:
        "No question mark needed in formal writing, but often used in casual text.",
      common_mistakes: [
        {
          mistake: "ですかか",
          correction: "ですか",
          note: "Only one か needed",
        },
      ],
    },
    {
      id: "p11",
      number: 11,
      name: "[Vて] ください",
      category: "requests",
      meaning: "Please do [verb]",
      structure: "[Verb て-form] + ください",
      particles: [],
      examples: [
        {
          jp: "見てください",
          en: "Please look",
          furigana: "<ruby>見<rt>み</rt></ruby>てください",
        },
        {
          jp: "書いてください",
          en: "Please write",
          furigana: "<ruby>書<rt>か</rt></ruby>いてください",
        },
      ],
      conjugations: {
        polite: { aff: "てください", neg: "ないでください" },
      },
      notes: "Negative request: ないでください (please don't...)",
      common_mistakes: [
        {
          mistake: "食べるください",
          correction: "食べてください",
          note: "Use て-form, not dictionary form",
        },
      ],
    },
    {
      id: "p12",
      number: 12,
      name: "[Vて] も いいです",
      category: "requests",
      meaning: "May I/you do [verb]? / It's okay to [verb]",
      structure: "[Verb て-form] + も いいです",
      particles: ["に", "も", "か"],
      examples: [
        {
          jp: "食べてもいいですか？",
          en: "May I eat?",
          furigana: "<ruby>食<rt>た</rt></ruby>べてもいいですか？",
        },
        {
          jp: "ここに座ってもいいです",
          en: "You may sit here",
          furigana: "ここに<ruby>座<rt>すわ</rt></ruby>ってもいいです",
        },
      ],
      conjugations: {
        polite: { aff: "てもいいです", neg: "てはいけません" },
      },
      notes: "てはいけません = must not do.",
      common_mistakes: [
        {
          mistake: "食べていいですか？",
          correction: "食べてもいいですか？",
          note: "Always include も",
        },
      ],
    },
    {
      id: "p13",
      number: 13,
      name: "[Vて] は いけません",
      category: "requests",
      meaning: "Must not do [verb]",
      structure: "[Verb て-form] + は いけません",
      particles: ["に", "を", "は"],
      examples: [
        {
          jp: "食べてはいけません",
          en: "You must not eat",
          furigana: "<ruby>食<rt>た</rt></ruby>べてはいけません",
        },
        {
          jp: "ここに車を止めてはいけません",
          en: "You must not park here",
          furigana:
            "ここに<ruby>車<rt>くるま</rt></ruby>を<ruby>止<rt>と</rt></ruby>めてはいけません",
        },
      ],
      conjugations: {
        polite: { aff: "てはいけません", past: "てはいけませんでした" },
      },
      notes: "Strong prohibition.",
      common_mistakes: [
        {
          mistake: "食べてはいきません",
          correction: "食べてはいけません",
          note: "It's いけません, not いきません",
        },
      ],
    },
    {
      id: "p14",
      number: 14,
      name: "[Vた] ことが あります",
      category: "requests",
      meaning: "Have done [verb] before",
      structure: "[Verb た-form] + ことが あります",
      particles: ["に", "が", "を", "か"],
      examples: [
        {
          jp: "日本に行ったことがあります",
          en: "I have been to Japan",
          furigana:
            "<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったことがあります",
        },
        {
          jp: "寿司を食べたことがありますか？",
          en: "Have you ever eaten sushi?",
          furigana:
            "<ruby>寿司<rt>すし</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたことがありますか？",
        },
      ],
      conjugations: {
        polite: {
          aff: "ことがあります",
          past: "ことがありました",
          neg: "ことがありません",
          neg_past: "ことがありませんでした",
        },
      },
      notes: "Used to talk about life experiences.",
      common_mistakes: [
        {
          mistake: "行くことがあります",
          correction: "行ったことがあります",
          note: "Use た-form for past experience",
        },
      ],
    },
    {
      id: "p15",
      number: 15,
      name: "[Vた] ほうが いい",
      category: "requests",
      meaning: "You'd better do [verb]",
      structure: "[Verb た-form] + ほうが いい",
      particles: ["が"],
      examples: [
        {
          jp: "行ったほうがいい",
          en: "You'd better go",
          furigana: "<ruby>行<rt>い</rt></ruby>ったほうがいい",
        },
        {
          jp: "早く寝たほうがいい",
          en: "You'd better sleep early",
          furigana:
            "<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>たほうがいい",
        },
      ],
      conjugations: {
        polite: { aff: "ほうがいいです", neg: "ほうがいいです" },
      },
      notes: "For negative advice: ないほうがいい (better not to).",
      common_mistakes: [
        {
          mistake: "行くほうがいい",
          correction: "行ったほうがいい",
          note: "Use た-form for advice",
        },
      ],
    },
    {
      id: "p16",
      number: 16,
      name: "[Vて] から [V]",
      category: "time_sequence",
      meaning: "After doing [A], do [B]",
      structure: "[Verb A て-form] + から + [Verb B]",
      particles: ["から", "を"],
      examples: [
        {
          jp: "食べてから行きます",
          en: "I'll go after eating",
          furigana:
            "<ruby>食<rt>た</rt></ruby>べてから<ruby>行<rt>い</rt></ruby>きます",
        },
        {
          jp: "宿題をしてから遊ぶ",
          en: "I'll play after doing homework",
          furigana:
            "<ruby>宿題<rt>しゅくだい</rt></ruby>をしてから<ruby>遊<rt>あそ</rt></ruby>ぶ",
        },
      ],
      notes: "から = after. The action before から happens FIRST.",
      common_mistakes: [
        {
          mistake: "食べたから行く",
          correction: "食べてから行く",
          note: "てから = after doing. たから = because.",
        },
      ],
    },
    {
      id: "p17",
      number: 17,
      name: "[V] ながら [V]",
      category: "time_sequence",
      meaning: "While doing [A], do [B]",
      structure: "[Verb A ます-stem] + ながら + [Verb B]",
      particles: ["を"],
      examples: [
        {
          jp: "音楽を聞きながら勉強します",
          en: "I study while listening to music",
          furigana:
            "<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら<ruby>勉強<rt>べんきょう</rt></ruby>します",
        },
        {
          jp: "テレビを見ながら食べる",
          en: "I eat while watching TV",
          furigana:
            "テレビを<ruby>見<rt>み</rt></ruby>ながら<ruby>食<rt>た</rt></ruby>べる",
        },
      ],
      notes:
        "Two actions happening at the same time. The SECOND action is the main one.",
      common_mistakes: [
        {
          mistake: "食べるながら見る",
          correction: "食べながら見る",
          note: "Use ます-stem, not dictionary form",
        },
      ],
    },
    {
      id: "p18",
      number: 18,
      name: "[Vて] しまう",
      category: "time_sequence",
      meaning: "Do completely / Do regretfully",
      structure: "[Verb て-form] + しまう",
      particles: ["を"],
      examples: [
        {
          jp: "食べてしまった",
          en: "I ate it all (oops)",
          furigana: "<ruby>食<rt>た</rt></ruby>べてしまった",
        },
        {
          jp: "宿題をしてしまいました",
          en: "I finished my homework",
          furigana: "<ruby>宿題<rt>しゅくだい</rt></ruby>をしてしまいました",
        },
      ],
      conjugations: {
        polite: { aff: "てしまいます", past: "てしまいました" },
        plain: { aff: "てしまう", past: "てしまった", neg: "てしまわない" },
      },
      notes:
        "Two meanings: (1) doing something completely, (2) regrettable action.",
      common_mistakes: [
        {
          mistake: "食べてしむ",
          correction: "食べちゃった",
          note: "Casual contraction: てしまう -> ちゃう",
        },
      ],
    },
    {
      id: "p19",
      number: 19,
      name: "[V] つもり です",
      category: "time_sequence",
      meaning: "I intend to do [verb]",
      structure: "[Verb dictionary form] + つもり です",
      particles: ["に", "は"],
      examples: [
        {
          jp: "日本に行くつもりです",
          en: "I intend to go to Japan",
          furigana:
            "<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>くつもりです",
        },
        {
          jp: "明日は勉強するつもりです",
          en: "I intend to study tomorrow",
          furigana:
            "<ruby>明日<rt>あした</rt></ruby>は<ruby>勉強<rt>べんきょう</rt></ruby>するつもりです",
        },
      ],
      conjugations: {
        polite: {
          aff: "つもりです",
          past: "つもりでした",
          neg: "つもりじゃないです",
          neg_past: "つもりじゃなかったです",
        },
      },
      notes: "つもり = intention/plan.",
      common_mistakes: [
        {
          mistake: "行くのつもり",
          correction: "行くつもり",
          note: "No の needed",
        },
      ],
    },
    {
      id: "p20",
      number: 20,
      name: "[V] 前に",
      category: "time_sequence",
      meaning: "Before doing [verb]",
      structure: "[Verb dictionary form] + 前に",
      particles: ["に", "を"],
      examples: [
        {
          jp: "行く前に食べます",
          en: "I eat before going",
          furigana:
            "<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に<ruby>食<rt>た</rt></ruby>べます",
        },
        {
          jp: "寝る前に本を読みます",
          en: "I read a book before sleeping",
          furigana:
            "<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます",
        },
      ],
      notes: "前に = before. The action AFTER 前に happens SECOND.",
      common_mistakes: [
        {
          mistake: "食べた前に",
          correction: "食べる前に",
          note: "Use dictionary form, not た-form",
        },
      ],
    },
    {
      id: "p21",
      number: 21,
      name: "[Vたい] と 思う",
      category: "desire",
      meaning: "I think I want to [verb]",
      structure: "[Verb たい-form] + と 思う",
      particles: ["と", "を"],
      examples: [
        {
          jp: "行きたいと思います",
          en: "I think I want to go",
          furigana:
            "<ruby>行<rt>い</rt></ruby>きたいと<ruby>思<rt>おも</rt></ruby>います",
        },
        {
          jp: "映画を見たいと思う",
          en: "I think I want to watch a movie",
          furigana:
            "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たいと<ruby>思<rt>おも</rt></ruby>う",
        },
      ],
      conjugations: {
        polite: {
          aff: "たいと思います",
          past: "たいと思いました",
          neg: "たいと思いません",
        },
        plain: {
          aff: "たいと思う",
          past: "たいと思った",
          neg: "たいと思わない",
        },
      },
      notes: "Softer, more indirect way to express desire.",
      common_mistakes: [
        {
          mistake: "行きたいを思う",
          correction: "行きたいと思う",
          note: "Use と, not を",
        },
      ],
    },
    {
      id: "p22",
      number: 22,
      name: "[Vた] ら どう？",
      category: "desire",
      meaning: "How about doing [verb]?",
      structure: "[Verb た-form] + ら どう？",
      particles: [],
      examples: [
        {
          jp: "行ったらどう？",
          en: "How about going?",
          furigana: "<ruby>行<rt>い</rt></ruby>ったらどう？",
        },
        {
          jp: "食べてみたらどう？",
          en: "How about trying to eat it?",
          furigana: "<ruby>食<rt>た</rt></ruby>べてみたらどう？",
        },
      ],
      notes: "Casual suggestion. Polite version: たらどうですか？",
      common_mistakes: [
        {
          mistake: "行くたらどう",
          correction: "行ったらどう",
          note: "Use た-form",
        },
      ],
    },
    {
      id: "p23",
      number: 23,
      name: "[V] ましょう",
      category: "desire",
      meaning: "Let's do [verb]",
      structure: "[Verb ます-stem] + ましょう",
      particles: [],
      examples: [
        {
          jp: "行きましょう",
          en: "Let's go",
          furigana: "<ruby>行<rt>い</rt></ruby>きましょう",
        },
        {
          jp: "食べましょう",
          en: "Let's eat",
          furigana: "<ruby>食<rt>た</rt></ruby>べましょう",
        },
      ],
      notes: "Invitation. Casual version: よう (行こう, 食べよう).",
      common_mistakes: [
        {
          mistake: "行きましょうか？",
          correction: "行きましょう",
          note: "Adding か makes it a question/offer",
        },
      ],
    },
    {
      id: "p24",
      number: 24,
      name: "[V] ませんか",
      category: "desire",
      meaning: "Won't you do [verb]?",
      structure: "[Verb ます-stem] + ませんか",
      particles: ["か", "を"],
      examples: [
        {
          jp: "行きませんか？",
          en: "Won't you go?",
          furigana: "<ruby>行<rt>い</rt></ruby>きませんか？",
        },
        {
          jp: "映画を見ませんか？",
          en: "Won't you watch a movie?",
          furigana:
            "<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ませんか？",
        },
      ],
      notes: "Polite invitation. More gentle than ましょう.",
      common_mistakes: [
        {
          mistake: "行くませんか",
          correction: "行きませんか",
          note: "Use ます-stem",
        },
      ],
    },
    {
      id: "p25",
      number: 25,
      name: "[Vて] あげる",
      category: "giving",
      meaning: "Do [verb] for someone",
      structure: "[Verb て-form] + あげる",
      particles: ["に", "を"],
      examples: [
        {
          jp: "教えてあげる",
          en: "I'll teach (for you)",
          furigana: "<ruby>教<rt>おし</rt></ruby>えてあげる",
        },
        {
          jp: "友達に本を貸してあげます",
          en: "I'll lend a book to my friend",
          furigana:
            "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してあげます",
        },
      ],
      conjugations: {
        polite: { aff: "てあげます", past: "てあげました" },
        plain: { aff: "てあげる", past: "てあげた" },
      },
      notes: "Doing something FOR someone (giver does action).",
      common_mistakes: [
        {
          mistake: "教えてくれる",
          correction: "教えてあげる",
          note: "Use あげる when you are the giver",
        },
      ],
    },
    {
      id: "p26",
      number: 26,
      name: "[Vて] くれる",
      category: "giving",
      meaning: "Do [verb] for me",
      structure: "[Verb て-form] + くれる",
      particles: ["が", "を"],
      examples: [
        {
          jp: "教えてくれた",
          en: "He taught me",
          furigana: "<ruby>教<rt>おし</rt></ruby>えてくれた",
        },
        {
          jp: "友達が本を貸してくれました",
          en: "My friend lent me a book",
          furigana:
            "<ruby>友達<rt>ともだち</rt></ruby>が<ruby>本<rt>ほん</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してくれました",
        },
      ],
      conjugations: {
        polite: { aff: "てくれます", past: "てくれました" },
        plain: { aff: "てくれる", past: "てくれた" },
      },
      notes: "Someone does something FOR THE SPEAKER.",
      common_mistakes: [
        {
          mistake: "教えてあげた",
          correction: "教えてくれた",
          note: "Use くれる when the receiver is you",
        },
      ],
    },
    {
      id: "p27",
      number: 27,
      name: "[Vて] もらう",
      category: "giving",
      meaning: "Receive [verb] from someone",
      structure: "[Verb て-form] + もらう",
      particles: ["に", "を"],
      examples: [
        {
          jp: "教えてもらった",
          en: "I had him teach me",
          furigana: "<ruby>教<rt>おし</rt></ruby>えてもらった",
        },
        {
          jp: "友達に本を貸してもらいました",
          en: "I had my friend lend me a book",
          furigana:
            "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してもらいました",
        },
      ],
      conjugations: {
        polite: { aff: "てもらいます", past: "てもらいました" },
        plain: { aff: "てもらう", past: "てもらった" },
      },
      notes: "The speaker receives the action.",
      common_mistakes: [
        {
          mistake: "教えてくれた",
          correction: "教えてもらった",
          note: "Use もらう when you are the receiver",
        },
      ],
    },
    {
      id: "p28",
      number: 28,
      name: "[V] かもしれない",
      category: "advanced",
      meaning: "Maybe [verb] / It might [verb]",
      structure: "[Verb plain form] + かもしれない",
      particles: ["は", "が"],
      examples: [
        {
          jp: "明日は雨が降るかもしれない",
          en: "It might rain tomorrow",
          furigana:
            "<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれない",
        },
        {
          jp: "彼は来るかもしれない",
          en: "He might come",
          furigana:
            "<ruby>彼<rt>かれ</rt></ruby>は<ruby>来<rt>く</rt></ruby>るかもしれない",
        },
      ],
      conjugations: {
        polite: { aff: "かもしれません", past: "かもしれませんでした" },
        plain: { aff: "かもしれない", past: "かもしれなかった" },
      },
      notes: "Expresses possibility/uncertainty.",
      common_mistakes: [
        {
          mistake: "雨が降りますかもしれない",
          correction: "雨が降るかもしれない",
          note: "Use plain form before かもしれない",
        },
      ],
    },
    {
      id: "p29",
      number: 29,
      name: "[V] はず です",
      category: "advanced",
      meaning: "It should [verb] / It is expected to [verb]",
      structure: "[Verb plain form] + はず です",
      particles: ["は", "に"],
      examples: [
        {
          jp: "彼は来るはずです",
          en: "He should come",
          furigana:
            "<ruby>彼<rt>かれ</rt></ruby>は<ruby>来<rt>く</rt></ruby>るはずです",
        },
        {
          jp: "今は家にいるはずだ",
          en: "He should be at home now",
          furigana:
            "<ruby>今<rt>いま</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>にいるはずだ",
        },
      ],
      conjugations: {
        polite: {
          aff: "はずです",
          past: "はずでした",
          neg: "はずじゃないです",
        },
        plain: { aff: "はずだ", past: "はずだった", neg: "はずじゃない" },
      },
      notes: "Expresses strong expectation based on reason/evidence.",
      common_mistakes: [
        {
          mistake: "来るはずがあります",
          correction: "来るはずです",
          note: "はず + です/だ, not があります",
        },
      ],
    },
    {
      id: "p30",
      number: 30,
      name: "[V] ように",
      category: "advanced",
      meaning: "So that [verb] / In order to [verb]",
      structure: "[Verb dictionary form] + ように",
      particles: ["が", "に"],
      examples: [
        {
          jp: "日本語が上手になるように勉強します",
          en: "I study so that I become good at Japanese",
          furigana:
            "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になるように<ruby>勉強<rt>べんきょう</rt></ruby>します",
        },
        {
          jp: "忘れないように書いておく",
          en: "I'll write it down so I don't forget",
          furigana:
            "<ruby>忘<rt>わす</rt></ruby>れないように<ruby>書<rt>か</rt></ruby>いておく",
        },
      ],
      notes: "Expresses purpose/goal. Often used with なる (become).",
      common_mistakes: [
        {
          mistake: "上手になるために",
          correction: "上手になるように",
          note: "ように = so that (state change). ために = for the purpose of (action).",
        },
      ],
    },
    {
      id: "p31",
      number: 31,
      name: "[V] すぎる",
      category: "advanced",
      meaning: "Too much [verb] / Overdo [verb]",
      structure: "[Verb ます-stem] + すぎる",
      particles: [],
      examples: [
        {
          jp: "食べすぎた",
          en: "I ate too much",
          furigana: "<ruby>食<rt>た</rt></ruby>べすぎた",
        },
        {
          jp: "飲みすぎないでください",
          en: "Please don't drink too much",
          furigana: "<ruby>飲<rt>の</rt></ruby>みすぎないでください",
        },
      ],
      conjugations: {
        polite: { aff: "すぎます", past: "すぎました", neg: "すぎません" },
        plain: { aff: "すぎる", past: "すぎた", neg: "すぎない" },
      },
      notes: "Also works with adjectives: 高すぎる (too expensive).",
      common_mistakes: [
        {
          mistake: "食べるすぎる",
          correction: "食べすぎる",
          note: "Use ます-stem, not dictionary form",
        },
      ],
    },
    {
      id: "p32",
      number: 32,
      name: "[Vて] おく",
      category: "advanced",
      meaning: "Do in advance",
      structure: "[Verb て-form] + おく",
      particles: ["を"],
      examples: [
        {
          jp: "準備しておく",
          en: "I'll prepare in advance",
          furigana: "<ruby>準備<rt>じゅんび</rt></ruby>しておく",
        },
        {
          jp: "宿題をやっておきます",
          en: "I'll do my homework in advance",
          furigana: "<ruby>宿題<rt>しゅくだい</rt></ruby>をやっておきます",
        },
      ],
      conjugations: {
        polite: { aff: "ておきます", past: "ておきました" },
        plain: { aff: "ておく", past: "ておいた" },
      },
      notes:
        "Doing something NOW in preparation for the future. Casual contraction: とく.",
    },
    {
      id: "p33",
      number: 33,
      name: "[Vて] ある",
      category: "advanced",
      meaning: "Has been done (state)",
      structure: "[Verb て-form] + ある",
      particles: ["が"],
      examples: [
        {
          jp: "ドアが開けてある",
          en: "The door has been opened (and remains open)",
          furigana: "ドアが<ruby>開<rt>あ</rt></ruby>けてある",
        },
        {
          jp: "準備がしてある",
          en: "The preparations have been made",
          furigana: "<ruby>準備<rt>じゅんび</rt></ruby>がしてある",
        },
      ],
      conjugations: {
        polite: {
          aff: "てあります",
          past: "てありました",
          neg: "てありません",
        },
        plain: { aff: "てある", past: "てあった", neg: "てない" },
      },
      notes: "Shows the RESULT of a completed action.",
      common_mistakes: [
        {
          mistake: "ドアが開いている",
          correction: "ドアが開けてある",
          note: "開いている = is open (state). 開けてある = has been opened (by someone).",
        },
      ],
    },
    {
      id: "p34",
      number: 34,
      name: "[V] ば (conditional)",
      category: "advanced",
      meaning: "If [verb]",
      structure: "[Verb ば-form]",
      particles: [],
      examples: [
        {
          jp: "行けばわかる",
          en: "If you go, you'll understand",
          furigana: "<ruby>行<rt>い</rt></ruby>けばわかる",
        },
        {
          jp: "食べれば太る",
          en: "If you eat, you'll get fat",
          furigana:
            "<ruby>食<rt>た</rt></ruby>べれば<ruby>太<rt>ふと</rt></ruby>る",
        },
      ],
      conjugations: {
        godan: { aff: "えば", past: "えば" },
        ichidan: { aff: "れば", past: "れば" },
        irregular: { aff: "すれば", past: "すれば" },
      },
      notes: "Conditional form. ば = if.",
      common_mistakes: [
        {
          mistake: "行くば",
          correction: "行けば",
          note: "Godan verbs: change う to え + ば",
        },
      ],
    },
    {
      id: "p35",
      number: 35,
      name: "[V] なら (conditional)",
      category: "advanced",
      meaning: "If [verb] (topic conditional)",
      structure: "[Verb plain form] + なら",
      particles: ["も", "が"],
      examples: [
        {
          jp: "行くなら、私も行く",
          en: "If you're going, I'll go too",
          furigana:
            "<ruby>行<rt>い</rt></ruby>くなら、<ruby>私<rt>わたし</rt></ruby>も<ruby>行<rt>い</rt></ruby>く",
        },
        {
          jp: "食べるなら、寿司がいい",
          en: "If you're going to eat, sushi is good",
          furigana:
            "<ruby>食<rt>た</rt></ruby>べるなら、<ruby>寿司<rt>すし</rt></ruby>がいい",
        },
      ],
      notes:
        "なら = if (focusing on the TOPIC). Used when the condition is already established.",
      common_mistakes: [
        {
          mistake: "行けば",
          correction: "行くなら",
          note: "なら is used when the condition is already being discussed",
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // VERBS
  // ----------------------------------------------------------
  verbs: {
    godan: [
      {
        id: "v_iku",
        kanji: "行く",
        kana: "いく",
        meaning: "to go",
        category: "movement",
      },
      {
        id: "v_kau",
        kanji: "買う",
        kana: "かう",
        meaning: "to buy",
        category: "daily",
      },
      {
        id: "v_nomu",
        kanji: "飲む",
        kana: "のむ",
        meaning: "to drink",
        category: "daily",
      },
      {
        id: "v_yomu",
        kanji: "読む",
        kana: "よむ",
        meaning: "to read",
        category: "activity",
      },
      {
        id: "v_kaku",
        kanji: "書く",
        kana: "かく",
        meaning: "to write",
        category: "activity",
      },
      {
        id: "v_kiku",
        kanji: "聞く",
        kana: "きく",
        meaning: "to listen/hear",
        category: "communication",
      },
      {
        id: "v_hanasu",
        kanji: "話す",
        kana: "はなす",
        meaning: "to speak",
        category: "communication",
      },
      {
        id: "v_kaeru",
        kanji: "帰る",
        kana: "かえる",
        meaning: "to return home",
        category: "movement",
      },
      {
        id: "v_modoru",
        kanji: "戻る",
        kana: "もどる",
        meaning: "to return/go back",
        category: "movement",
      },
    ],
    ichidan: [
      {
        id: "v_taberu",
        kanji: "食べる",
        kana: "たべる",
        meaning: "to eat",
        category: "daily",
      },
      {
        id: "v_miru",
        kanji: "見る",
        kana: "みる",
        meaning: "to see/watch",
        category: "activity",
      },
      {
        id: "v_neru",
        kanji: "寝る",
        kana: "ねる",
        meaning: "to sleep",
        category: "daily",
      },
      {
        id: "v_yaru",
        kanji: "やる",
        kana: "やる",
        meaning: "to do (casual)",
        category: "basic",
      },
      {
        id: "v_ageru",
        kanji: "あげる",
        kana: "あげる",
        meaning: "to give",
        category: "giving",
      },
      {
        id: "v_kureru",
        kanji: "くれる",
        kana: "くれる",
        meaning: "to give (to me)",
        category: "giving",
      },
    ],
    irregular: [
      {
        id: "v_suru",
        kanji: "する",
        kana: "する",
        meaning: "to do",
        category: "basic",
      },
      {
        id: "v_kuru",
        kanji: "来る",
        kana: "くる",
        meaning: "to come",
        category: "movement",
      },
    ],
  },

  // ----------------------------------------------------------
  // NOUNS
  // ----------------------------------------------------------
  nouns: {
    people: [
      { id: "n_gakusei", kanji: "学生", kana: "がくせい", meaning: "student" },
      { id: "n_tomodachi", kanji: "友達", kana: "ともだち", meaning: "friend" },
      {
        id: "n_otouto",
        kanji: "弟",
        kana: "おとうと",
        meaning: "younger brother",
      },
      {
        id: "n_imouto",
        kanji: "妹",
        kana: "いもうと",
        meaning: "younger sister",
      },
    ],
    objects: [
      { id: "n_hon", kanji: "本", kana: "ほん", meaning: "book" },
      { id: "n_sushi", kanji: "寿司", kana: "すし", meaning: "sushi" },
      {
        id: "n_koohii",
        kanji: "コーヒー",
        kana: "こーひー",
        meaning: "coffee",
      },
      { id: "n_kuruma", kanji: "車", kana: "くるま", meaning: "car" },
    ],
    places: [
      { id: "n_gakkou", kanji: "学校", kana: "がっこう", meaning: "school" },
      { id: "n_kouen", kanji: "公園", kana: "こうえん", meaning: "park" },
      { id: "n_nihon", kanji: "日本", kana: "にほん", meaning: "Japan" },
      { id: "n_ie", kanji: "家", kana: "いえ", meaning: "house/home" },
    ],
    time: [
      { id: "n_kinou", kanji: "昨日", kana: "きのう", meaning: "yesterday" },
      { id: "n_ashita", kanji: "明日", kana: "あした", meaning: "tomorrow" },
      { id: "n_kyou", kanji: "今日", kana: "きょう", meaning: "today" },
    ],
  },

  // ----------------------------------------------------------
  // ADJECTIVES
  // ----------------------------------------------------------
  adjectives: {
    i_adjectives: [
      {
        id: "adj_takai",
        kanji: "高い",
        kana: "たかい",
        meaning: "expensive/tall",
      },
      {
        id: "adj_oishii",
        kanji: "美味しい",
        kana: "おいしい",
        meaning: "delicious",
      },
      { id: "adj_atsui", kanji: "暑い/熱い", kana: "あつい", meaning: "hot" },
    ],
    na_adjectives: [
      { id: "adj_suki", kanji: "好き", kana: "すき", meaning: "like" },
      { id: "adj_kirai", kanji: "嫌い", kana: "きらい", meaning: "dislike" },
      {
        id: "adj_daisuki",
        kanji: "大好き",
        kana: "だいすき",
        meaning: "love/really like",
      },
      {
        id: "adj_daikirai",
        kanji: "大嫌い",
        kana: "だいきらい",
        meaning: "hate/really dislike",
      },
    ],
  },

  // ----------------------------------------------------------
  // ADVERBS
  // ----------------------------------------------------------
  adverbs: {
    intensity: [
      { id: "adv_totemo", kanji: "とても", kana: "とても", meaning: "very" },
      { id: "adv_sugoku", kanji: "すごく", kana: "すごく", meaning: "really" },
      {
        id: "adv_mechakucha",
        kanji: "めちゃくちゃ",
        kana: "めちゃくちゃ",
        meaning: "really, really",
      },
      {
        id: "adv_doushitemo",
        kanji: "どうしても",
        kana: "どうしても",
        meaning: "no matter what",
      },
    ],
    frequency: [
      { id: "adv_itsumo", kanji: "いつも", kana: "いつも", meaning: "always" },
      {
        id: "adv_tokidoki",
        kanji: "時々",
        kana: "ときどき",
        meaning: "sometimes",
      },
    ],
  },

  // ----------------------------------------------------------
  // PARTICLES
  // ----------------------------------------------------------
  particles: [
    {
      id: "p_wa",
      kana: "は",
      romaji: "wa",
      role: "Topic Marker",
      meaning: "Marks the topic of the sentence",
      example: {
        jp: "私は学生です",
        en: "I am a student",
        furigana:
          "<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です",
      },
      note: "Pronounced 'wa'",
    },
    {
      id: "p_ga",
      kana: "が",
      romaji: "ga",
      role: "Subject / Emotion / Ability",
      meaning: "Marks subject or object of emotion/ability",
      example: {
        jp: "猫がいます",
        en: "There is a cat",
        furigana: "<ruby>猫<rt>ねこ</rt></ruby>がいます",
      },
      note: "Used with 好き, できる",
    },
    {
      id: "p_wo",
      kana: "を",
      romaji: "o",
      role: "Direct Object",
      meaning: "Marks the direct object",
      example: {
        jp: "本を読みます",
        en: "I read a book",
        furigana:
          "<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます",
      },
      note: "Only for direct objects",
    },
    {
      id: "p_ni",
      kana: "に",
      romaji: "ni",
      role: "Destination / Time / Receiver",
      meaning: "Marks destination, time, or receiver",
      example: {
        jp: "学校に行きます",
        en: "I go to school",
        furigana:
          "<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます",
      },
      note: "Very versatile",
    },
    {
      id: "p_de",
      kana: "で",
      romaji: "de",
      role: "Location of Action / Means",
      meaning: "Marks where an action happens or the means",
      example: {
        jp: "公園で遊びます",
        en: "I play at the park",
        furigana:
          "<ruby>公園<rt>こうえん</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>びます",
      },
      note: "Not for existence",
    },
    {
      id: "p_e",
      kana: "へ",
      romaji: "e",
      role: "Direction",
      meaning: "Marks direction toward a place",
      example: {
        jp: "東京へ行きます",
        en: "I go toward Tokyo",
        furigana:
          "<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます",
      },
      note: "Pronounced 'e'",
    },
    {
      id: "p_ka",
      kana: "か",
      romaji: "ka",
      role: "Question",
      meaning: "Marks a question",
      example: {
        jp: "学生ですか？",
        en: "Are you a student?",
        furigana: "<ruby>学生<rt>がくせい</rt></ruby>ですか？",
      },
      note: "Question marker",
    },
  ],

  // ----------------------------------------------------------
  // LOCATION WORDS
  // ----------------------------------------------------------
  location_words: [
    { id: "loc_ue", kanji: "上", kana: "うえ", meaning: "on top, above" },
    { id: "loc_shita", kanji: "下", kana: "した", meaning: "under, below" },
    { id: "loc_naka", kanji: "中", kana: "なか", meaning: "inside" },
    { id: "loc_soto", kanji: "外", kana: "そと", meaning: "outside" },
    { id: "loc_mae", kanji: "前", kana: "まえ", meaning: "in front" },
    { id: "loc_ushiro", kanji: "後ろ", kana: "うしろ", meaning: "behind" },
    { id: "loc_tonari", kanji: "隣", kana: "となり", meaning: "next to" },
    { id: "loc_chikaku", kanji: "近く", kana: "ちかく", meaning: "near" },
  ],

  // ----------------------------------------------------------
  // EXPRESSIONS
  // ----------------------------------------------------------
  expressions: {
    tai_forms: [
      {
        id: "exp_tai_to_omou",
        jp: "たいと思う",
        en: "I think I want to...",
        note: "Softer, less direct",
      },
      {
        id: "exp_tai_ndesu",
        jp: "たいんです",
        en: "I want to... (explanatory)",
        note: "Gives reason/explanation",
      },
      {
        id: "exp_takute",
        jp: "たくて",
        en: "Because I want to...",
        note: "Connects two clauses",
      },
      {
        id: "exp_tai_mono_da",
        jp: "たいものだ",
        en: "I really want to...",
        note: "Strong wish",
      },
    ],
    giving_receiving: [
      {
        id: "exp_ageru",
        jp: "をあげる",
        en: "give (outward)",
        note: "Speaker -> others",
      },
      {
        id: "exp_kureru",
        jp: "をくれる",
        en: "give (inward)",
        note: "Others -> speaker",
      },
      {
        id: "exp_morau",
        jp: "をもらう",
        en: "receive",
        note: "Receive from someone",
      },
    ],
  },

  // ----------------------------------------------------------
  // DIALOGS
  // ----------------------------------------------------------
  dialogs: [
    {
      id: "dialog_making_plans",
      title: "Making Plans",
      lines: [
        {
          speaker: "A",
          jp: "今日、何がしたい？",
          en: "What do you want to do today?",
        },
        { speaker: "B", jp: "映画を見たい", en: "I want to watch a movie" },
        {
          speaker: "A",
          jp: "いいね！何が見たい？",
          en: "Nice! What do you want to watch?",
        },
        {
          speaker: "B",
          jp: "アクション映画が見たい",
          en: "I want to watch an action movie",
        },
      ],
    },
    {
      id: "dialog_lunch",
      title: "Lunch Decision",
      lines: [
        {
          speaker: "A",
          jp: "お昼、何が食べたい？",
          en: "What do you want to eat for lunch?",
        },
        { speaker: "B", jp: "ラーメンが食べたいな", en: "I want to eat ramen" },
        {
          speaker: "A",
          jp: "私も！どこに行く？",
          en: "Me too! Where should we go?",
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // COMMON MISTAKES
  // ----------------------------------------------------------
  common_mistakes: [
    {
      mistake: "彼は行きたい",
      correction: "彼は行きたがっている",
      furigana_mistake:
        "<ruby>彼<rt>かれ</rt></ruby>は<ruby>行<rt>い</rt></ruby>きたい",
      furigana_correction:
        "<ruby>彼<rt>かれ</rt></ruby>は<ruby>行<rt>い</rt></ruby>きたがっている",
      mistake_en: "He wants to go",
      correction_en: "He wants to go (third person)",
      explanation:
        "Using たい for others' desires is unnatural. Use たがっている for third person.",
    },
    {
      mistake: "食べたくないかった",
      correction: "食べたくなかった",
      furigana_mistake: "<ruby>食<rt>た</rt></ruby>べたくないかった",
      furigana_correction: "<ruby>食<rt>た</rt></ruby>べたくなかった",
      mistake_en: "I didn't want to eat (incorrect)",
      correction_en: "I didn't want to eat",
      explanation: "Wrong conjugation: たくない + かった = たくなかった",
    },
    {
      mistake: "食べますたい",
      correction: "食べたい",
      furigana_mistake: "<ruby>食<rt>た</rt></ruby>べますたい",
      furigana_correction: "<ruby>食<rt>た</rt></ruby>べたい",
      mistake_en: "I want to eat (incorrect - mixing forms)",
      correction_en: "I want to eat",
      explanation: "Don't mix ます-form with たい",
    },
    {
      mistake: "美味しいだ",
      correction: "美味しい",
      furigana_mistake: "<ruby>美味<rt>おい</rt></ruby>しいだ",
      furigana_correction: "<ruby>美味<rt>おい</rt></ruby>しい",
      mistake_en: "It's delicious (incorrect)",
      correction_en: "It's delicious",
      explanation: "No だ after i-adjectives",
    },
    {
      mistake: "本を好き",
      correction: "本が好き",
      furigana_mistake:
        "<ruby>本<rt>ほん</rt></ruby>を<ruby>好<rt>す</rt></ruby>き",
      furigana_correction:
        "<ruby>本<rt>ほん</rt></ruby>が<ruby>好<rt>す</rt></ruby>き",
      mistake_en: "I like books (incorrect - wrong particle)",
      correction_en: "I like books",
      explanation: "好き uses が, not を",
    },
  ],

  // ----------------------------------------------------------
  // QUIZ QUESTIONS
  // ----------------------------------------------------------
  quiz_questions: {
    pattern_match: [
      {
        question: "What does the pattern 「X は Y です / だ」 mean?",
        options: [
          "X is Y",
          "Give Z to Y",
          "You'd better do [verb]",
          "Has been done (state)",
        ],
        correct: 0,
        explanation: "[Topic] は [Noun/Adj] です — Noun / Na-adj: + です or だ.  I-adj: + です only (never だ).",
      },
      {
        question: "What does the pattern 「X は Y を [V]ます / [V]る」 mean?",
        options: [
          "How about doing [verb]?",
          "Give Z to Y",
          "X does [verb] to Y",
          "Have done [verb] before",
        ],
        correct: 2,
        explanation: "[Topic] は [Object] を [Verb] — を ONLY marks the direct object of a transitive verb.",
      },
      {
        question: "What does the pattern 「[場所] に [もの] が あります / います」 mean?",
        options: [
          "Y exists at X / There is Y at X",
          "X does [verb] to Y",
          "Let's do [verb]",
          "So that [verb] / In order to [verb]",
        ],
        correct: 0,
        explanation: "[Location] に [Thing] が あります/います — ある = inanimate objects. いる = living things (people, animals).",
      },
      {
        question: "What does the pattern 「X は Y が 好きです / だ」 mean?",
        options: [
          "Do completely / Do regretfully",
          "So that [verb] / In order to [verb]",
          "X likes Y",
          "While doing [A], do [B]",
        ],
        correct: 2,
        explanation: "[Topic] は [Thing] が 好きです — 好き is a NA-ADJECTIVE, not a verb. が marks the object of liking.",
      },
      {
        question: "What does the pattern 「X は Y が できます / できる」 mean?",
        options: [
          "X wants Y",
          "If [verb] (topic conditional)",
          "Receive [verb] from someone",
          "X can do Y / X is able to do Y",
        ],
        correct: 3,
        explanation: "[Topic] は [Ability] が できます — できる is an irregular verb (する -> できる).",
      },
      {
        question: "What does the pattern 「[場所] へ / に 行きます / 来ます」 mean?",
        options: [
          "Must not do [verb]",
          "Go to X / Come to X",
          "Before doing [verb]",
          "May I/you do [verb]? / It's okay to [verb]",
        ],
        correct: 1,
        explanation: "[Place] へ/に 行きます/来ます — へ emphasizes direction. に emphasizes destination.",
      },
      {
        question: "What does the pattern 「[場所/手段] で [動作] を します / する」 mean?",
        options: [
          "X likes Y",
          "While doing [A], do [B]",
          "Receive [verb] from someone",
          "Do Y at X / Do Y by means of X",
        ],
        correct: 3,
        explanation: "[Place/Means] で [Action] を します — で marks location of action OR means/tool.",
      },
      {
        question: "What does the pattern 「[Giver] は [Receiver] に [Thing] を あげます / あげる」 mean?",
        options: [
          "You'd better do [verb]",
          "While doing [A], do [B]",
          "Give Z to Y",
          "X likes Y",
        ],
        correct: 2,
        explanation: "[Giver] は [Receiver] に [Thing] を あげます — あげる = giving OUTWARD (speaker -> others). くれる = giving INWARD (others -> speaker). もらう = receiving.",
      },
      {
        question: "What does the pattern 「X は Y が 欲しいです / だ」 mean?",
        options: [
          "Do Y at X / Do Y by means of X",
          "X is Y",
          "After doing [A], do [B]",
          "X wants Y",
        ],
        correct: 3,
        explanation: "[Topic] は [Thing] が 欲しいです — 欲しい is an I-ADJECTIVE. ONLY for nouns (things you want to HAVE). For actions, use たい.",
      },
      {
        question: "What does the pattern 「[Statement] + か」 mean?",
        options: [
          "Question?",
          "Must not do [verb]",
          "Do [verb] for someone",
          "How about doing [verb]?",
        ],
        correct: 0,
        explanation: "[Statement] + か — No question mark needed in formal writing, but often used in casual text.",
      },
      {
        question: "What does the pattern 「[Vて] ください」 mean?",
        options: [
          "Receive [verb] from someone",
          "Must not do [verb]",
          "Have done [verb] before",
          "Please do [verb]",
        ],
        correct: 3,
        explanation: "[Verb て-form] + ください — Negative request: ないでください (please don't...)",
      },
      {
        question: "What does the pattern 「[Vて] も いいです」 mean?",
        options: [
          "Do [verb] for me",
          "If [verb] (topic conditional)",
          "May I/you do [verb]? / It's okay to [verb]",
          "How about doing [verb]?",
        ],
        correct: 2,
        explanation: "[Verb て-form] + も いいです — てはいけません = must not do.",
      },
      {
        question: "What does the pattern 「[Vて] は いけません」 mean?",
        options: [
          "Must not do [verb]",
          "It should [verb] / It is expected to [verb]",
          "Receive [verb] from someone",
          "Before doing [verb]",
        ],
        correct: 0,
        explanation: "[Verb て-form] + は いけません — Strong prohibition.",
      },
      {
        question: "What does the pattern 「[Vた] ことが あります」 mean?",
        options: [
          "Do in advance",
          "Have done [verb] before",
          "Won't you do [verb]?",
          "How about doing [verb]?",
        ],
        correct: 1,
        explanation: "[Verb た-form] + ことが あります — Used to talk about life experiences.",
      },
      {
        question: "What does the pattern 「[Vた] ほうが いい」 mean?",
        options: [
          "You'd better do [verb]",
          "X can do Y / X is able to do Y",
          "After doing [A], do [B]",
          "If [verb]",
        ],
        correct: 0,
        explanation: "[Verb た-form] + ほうが いい — For negative advice: ないほうがいい (better not to).",
      },
      {
        question: "What does the pattern 「[Vて] から [V]」 mean?",
        options: [
          "After doing [A], do [B]",
          "Let's do [verb]",
          "I intend to do [verb]",
          "Please do [verb]",
        ],
        correct: 0,
        explanation: "[Verb A て-form] + から + [Verb B] — から = after. The action before から happens FIRST.",
      },
      {
        question: "What does the pattern 「[V] ながら [V]」 mean?",
        options: [
          "While doing [A], do [B]",
          "May I/you do [verb]? / It's okay to [verb]",
          "Do [verb] for someone",
          "X likes Y",
        ],
        correct: 0,
        explanation: "[Verb A ます-stem] + ながら + [Verb B] — Two actions happening at the same time. The SECOND action is the main one.",
      },
      {
        question: "What does the pattern 「[Vて] しまう」 mean?",
        options: [
          "Do in advance",
          "Do completely / Do regretfully",
          "Please do [verb]",
          "X does [verb] to Y",
        ],
        correct: 1,
        explanation: "[Verb て-form] + しまう — Two meanings: (1) doing something completely, (2) regrettable action.",
      },
      {
        question: "What does the pattern 「[V] つもり です」 mean?",
        options: [
          "I intend to do [verb]",
          "X does [verb] to Y",
          "Too much [verb] / Overdo [verb]",
          "X wants Y",
        ],
        correct: 0,
        explanation: "[Verb dictionary form] + つもり です — つもり = intention/plan.",
      },
      {
        question: "What does the pattern 「[V] 前に」 mean?",
        options: [
          "If [verb] (topic conditional)",
          "Y exists at X / There is Y at X",
          "Before doing [verb]",
          "Go to X / Come to X",
        ],
        correct: 2,
        explanation: "[Verb dictionary form] + 前に — 前に = before. The action AFTER 前に happens SECOND.",
      },
      {
        question: "What does the pattern 「[Vたい] と 思う」 mean?",
        options: [
          "X is Y",
          "I think I want to [verb]",
          "So that [verb] / In order to [verb]",
          "You'd better do [verb]",
        ],
        correct: 1,
        explanation: "[Verb たい-form] + と 思う — Softer, more indirect way to express desire.",
      },
      {
        question: "What does the pattern 「[Vた] ら どう？」 mean?",
        options: [
          "How about doing [verb]?",
          "X likes Y",
          "X wants Y",
          "If [verb]",
        ],
        correct: 0,
        explanation: "[Verb た-form] + ら どう？ — Casual suggestion. Polite version: たらどうですか？",
      },
      {
        question: "What does the pattern 「[V] ましょう」 mean?",
        options: [
          "May I/you do [verb]? / It's okay to [verb]",
          "Must not do [verb]",
          "So that [verb] / In order to [verb]",
          "Let's do [verb]",
        ],
        correct: 3,
        explanation: "[Verb ます-stem] + ましょう — Invitation. Casual version: よう (行こう, 食べよう).",
      },
      {
        question: "What does the pattern 「[V] ませんか」 mean?",
        options: [
          "Won't you do [verb]?",
          "While doing [A], do [B]",
          "Maybe [verb] / It might [verb]",
          "Question?",
        ],
        correct: 0,
        explanation: "[Verb ます-stem] + ませんか — Polite invitation. More gentle than ましょう.",
      },
      {
        question: "What does the pattern 「[Vて] あげる」 mean?",
        options: [
          "If [verb]",
          "Have done [verb] before",
          "Do [verb] for someone",
          "Maybe [verb] / It might [verb]",
        ],
        correct: 2,
        explanation: "[Verb て-form] + あげる — Doing something FOR someone (giver does action).",
      },
      {
        question: "What does the pattern 「[Vて] くれる」 mean?",
        options: [
          "Won't you do [verb]?",
          "Do [verb] for me",
          "I intend to do [verb]",
          "You'd better do [verb]",
        ],
        correct: 1,
        explanation: "[Verb て-form] + くれる — Someone does something FOR THE SPEAKER.",
      },
      {
        question: "What does the pattern 「[Vて] もらう」 mean?",
        options: [
          "Give Z to Y",
          "If [verb] (topic conditional)",
          "Receive [verb] from someone",
          "How about doing [verb]?",
        ],
        correct: 2,
        explanation: "[Verb て-form] + もらう — The speaker receives the action.",
      },
      {
        question: "What does the pattern 「[V] かもしれない」 mean?",
        options: [
          "Please do [verb]",
          "Maybe [verb] / It might [verb]",
          "Do [verb] for someone",
          "X is Y",
        ],
        correct: 1,
        explanation: "[Verb plain form] + かもしれない — Expresses possibility/uncertainty.",
      },
      {
        question: "What does the pattern 「[V] はず です」 mean?",
        options: [
          "Do [verb] for me",
          "After doing [A], do [B]",
          "It should [verb] / It is expected to [verb]",
          "So that [verb] / In order to [verb]",
        ],
        correct: 2,
        explanation: "[Verb plain form] + はず です — Expresses strong expectation based on reason/evidence.",
      },
      {
        question: "What does the pattern 「[V] ように」 mean?",
        options: [
          "So that [verb] / In order to [verb]",
          "After doing [A], do [B]",
          "Have done [verb] before",
          "If [verb] (topic conditional)",
        ],
        correct: 0,
        explanation: "[Verb dictionary form] + ように — Expresses purpose/goal. Often used with なる (become).",
      },
      {
        question: "What does the pattern 「[V] すぎる」 mean?",
        options: [
          "Before doing [verb]",
          "Too much [verb] / Overdo [verb]",
          "After doing [A], do [B]",
          "Maybe [verb] / It might [verb]",
        ],
        correct: 1,
        explanation: "[Verb ます-stem] + すぎる — Also works with adjectives: 高すぎる (too expensive).",
      },
      {
        question: "What does the pattern 「[Vて] おく」 mean?",
        options: [
          "So that [verb] / In order to [verb]",
          "Has been done (state)",
          "X can do Y / X is able to do Y",
          "Do in advance",
        ],
        correct: 3,
        explanation: "[Verb て-form] + おく — Doing something NOW in preparation for the future. Casual contraction: とく.",
      },
      {
        question: "What does the pattern 「[Vて] ある」 mean?",
        options: [
          "Do [verb] for someone",
          "Has been done (state)",
          "So that [verb] / In order to [verb]",
          "Before doing [verb]",
        ],
        correct: 1,
        explanation: "[Verb て-form] + ある — Shows the RESULT of a completed action.",
      },
      {
        question: "What does the pattern 「[V] ば (conditional)」 mean?",
        options: [
          "If [verb] (topic conditional)",
          "X does [verb] to Y",
          "If [verb]",
          "How about doing [verb]?",
        ],
        correct: 2,
        explanation: "[Verb ば-form] — Conditional form. ば = if.",
      },
      {
        question: "What does the pattern 「[V] なら (conditional)」 mean?",
        options: [
          "X is Y",
          "Do completely / Do regretfully",
          "If [verb] (topic conditional)",
          "After doing [A], do [B]",
        ],
        correct: 2,
        explanation: "[Verb plain form] + なら — なら = if (focusing on the TOPIC). Used when the condition is already established.",
      },
    ],

    particle_fill: [
      {
        question: "Choose the missing particle: 机___上に本があります",
        options: [
          "の",
          "は",
          "で",
          "へ",
        ],
        correct: 0,
        explanation: "机の上に本があります — There is a book on the desk",
      },
      {
        question: "Choose the missing particle: 学校___行きます",
        options: [
          "か",
          "へ",
          "が",
          "で",
        ],
        correct: 1,
        explanation: "学校へ行きます — I go to school",
      },
      {
        question: "Choose the missing particle: 私___コーヒーが欲しいです",
        options: [
          "へ",
          "に",
          "の",
          "は",
        ],
        correct: 3,
        explanation: "私はコーヒーが欲しいです — I want coffee",
      },
      {
        question: "Choose the missing particle: 食べて___いいですか？",
        options: [
          "と",
          "が",
          "も",
          "から",
        ],
        correct: 2,
        explanation: "食べてもいいですか？ — May I eat?",
      },
      {
        question: "Choose the missing particle: 食べて___行きます",
        options: [
          "から",
          "か",
          "の",
          "へ",
        ],
        correct: 0,
        explanation: "食べてから行きます — I'll go after eating",
      },
      {
        question: "Choose the missing particle: 宿題___してしまいました",
        options: [
          "へ",
          "を",
          "で",
          "から",
        ],
        correct: 1,
        explanation: "宿題をしてしまいました — I finished my homework",
      },
      {
        question: "Choose the missing particle: 行く前___食べます",
        options: [
          "は",
          "を",
          "に",
          "で",
        ],
        correct: 2,
        explanation: "行く前に食べます — I eat before going",
      },
      {
        question: "Choose the missing particle: 行きたい___思います",
        options: [
          "から",
          "と",
          "を",
          "も",
        ],
        correct: 1,
        explanation: "行きたいと思います — I think I want to go",
      },
      {
        question: "Choose the missing particle: 行きません___？",
        options: [
          "か",
          "の",
          "に",
          "を",
        ],
        correct: 0,
        explanation: "行きませんか？ — Won't you go?",
      },
      {
        question: "Choose the missing particle: 友達___本を貸してもらいました",
        options: [
          "を",
          "と",
          "に",
          "の",
        ],
        correct: 2,
        explanation: "友達に本を貸してもらいました — I had my friend lend me a book",
      },
      {
        question: "Choose the missing particle: 日本語___上手になるように勉強します",
        options: [
          "が",
          "から",
          "で",
          "と",
        ],
        correct: 0,
        explanation: "日本語が上手になるように勉強します — I study so that I become good at Japanese",
      },
      {
        question: "Choose the missing particle: ドア___開けてある",
        options: [
          "から",
          "が",
          "か",
          "の",
        ],
        correct: 1,
        explanation: "ドアが開けてある — The door has been opened (and remains open)",
      },
    ],

    conjugation: [
      {
        question: "Which form is the polite negative of 「X は Y です / だ」?",
        options: [
          "じゃないです",
          "でした",
          "じゃなかった",
          "だ",
        ],
        correct: 0,
        explanation: "X は Y です / だ: polite negative = じゃないです",
      },
      {
        question: "Which form is the plain past of 「X は Y が 好きです / だ」?",
        options: [
          "好きじゃなかった",
          "好きじゃなかったです",
          "好きだった",
          "好きでした",
        ],
        correct: 2,
        explanation: "X は Y が 好きです / だ: plain past = 好きだった",
      },
      {
        question: "Which form is the polite past of 「[場所/手段] で [動作] を します / する」?",
        options: [
          "しなかった",
          "する",
          "しませんでした",
          "しました",
        ],
        correct: 3,
        explanation: "[場所/手段] で [動作] を します / する: polite past = しました",
      },
      {
        question: "Which form is the plain past of 「[Statement] + か」?",
        options: [
          "だったか",
          "じゃなかったか",
          "じゃないですか",
          "ですか",
        ],
        correct: 0,
        explanation: "[Statement] + か: plain past = だったか",
      },
      {
        question: "Which form is the polite negative of 「[V] つもり です」?",
        options: [
          "つもりじゃないです",
          "つもりです",
          "つもりでした",
          "つもりじゃなかったです",
        ],
        correct: 0,
        explanation: "[V] つもり です: polite negative = つもりじゃないです",
      },
      {
        question: "Which form is the plain affirmative of 「[Vて] あげる」?",
        options: [
          "てあげます",
          "てあげた",
          "てあげる",
          "てあげました",
        ],
        correct: 2,
        explanation: "[Vて] あげる: plain affirmative = てあげる",
      },
      {
        question: "Which form is the plain past of 「[V] かもしれない」?",
        options: [
          "かもしれません",
          "かもしれなかった",
          "かもしれませんでした",
          "かもしれない",
        ],
        correct: 1,
        explanation: "[V] かもしれない: plain past = かもしれなかった",
      },
    ],

    translation: [
      {
        question: "What does 「私は本を読みます」 mean?",
        options: [
          "I'll go after eating",
          "Let's go",
          "I read a book",
          "I study while listening to music",
        ],
        correct: 2,
        explanation: "私は本を読みます — pattern 2: X は Y を [V]ます / [V]る",
      },
      {
        question: "What does 「私は日本語ができます」 mean?",
        options: [
          "If you're going, I'll go too",
          "I'll do my homework in advance",
          "My friend lent me a book",
          "I can speak Japanese",
        ],
        correct: 3,
        explanation: "私は日本語ができます — pattern 5: X は Y が できます / できる",
      },
      {
        question: "What does 「私は友達に本をあげます」 mean?",
        options: [
          "I intend to go to Japan",
          "I ate too much",
          "I give a book to my friend",
          "I go to school",
        ],
        correct: 2,
        explanation: "私は友達に本をあげます — pattern 8: [Giver] は [Receiver] に [Thing] を あげます / あげる",
      },
      {
        question: "What does 「見てください」 mean?",
        options: [
          "I want a new car",
          "I'll lend a book to my friend",
          "I ate too much",
          "Please look",
        ],
        correct: 3,
        explanation: "見てください — pattern 11: [Vて] ください",
      },
      {
        question: "What does 「食べてはいけません」 mean?",
        options: [
          "You must not eat",
          "I like cats",
          "If you eat, you'll get fat",
          "This sushi is delicious",
        ],
        correct: 0,
        explanation: "食べてはいけません — pattern 13: [Vて] は いけません",
      },
      {
        question: "What does 「日本に行ったことがあります」 mean?",
        options: [
          "I had my friend lend me a book",
          "I have been to Japan",
          "If you're going, I'll go too",
          "I intend to go to Japan",
        ],
        correct: 1,
        explanation: "日本に行ったことがあります — pattern 14: [Vた] ことが あります",
      },
      {
        question: "What does 「行ったほうがいい」 mean?",
        options: [
          "You'd better go",
          "If you eat, you'll get fat",
          "I am a student",
          "My friend lent me a book",
        ],
        correct: 0,
        explanation: "行ったほうがいい — pattern 15: [Vた] ほうが いい",
      },
      {
        question: "What does 「音楽を聞きながら勉強します」 mean?",
        options: [
          "I study while listening to music",
          "This sushi is delicious",
          "I had him teach me",
          "I think I want to watch a movie",
        ],
        correct: 0,
        explanation: "音楽を聞きながら勉強します — pattern 17: [V] ながら [V]",
      },
      {
        question: "What does 「行ったらどう？」 mean?",
        options: [
          "How about going?",
          "I read a book at the park",
          "You must not eat",
          "I think I want to go",
        ],
        correct: 0,
        explanation: "行ったらどう？ — pattern 22: [Vた] ら どう？",
      },
      {
        question: "What does 「行きましょう」 mean?",
        options: [
          "I'll lend a book to my friend",
          "I want coffee",
          "I had my friend lend me a book",
          "Let's go",
        ],
        correct: 3,
        explanation: "行きましょう — pattern 23: [V] ましょう",
      },
      {
        question: "What does 「教えてくれた」 mean?",
        options: [
          "I like cats",
          "He taught me",
          "Won't you watch a movie?",
          "I intend to go to Japan",
        ],
        correct: 1,
        explanation: "教えてくれた — pattern 26: [Vて] くれる",
      },
      {
        question: "What does 「彼は来るはずです」 mean?",
        options: [
          "I want coffee",
          "You'd better sleep early",
          "He should come",
          "I give a book to my friend",
        ],
        correct: 2,
        explanation: "彼は来るはずです — pattern 29: [V] はず です",
      },
      {
        question: "What does 「食べすぎた」 mean?",
        options: [
          "May I eat?",
          "I ate too much",
          "I'll play after doing homework",
          "Come to my house",
        ],
        correct: 1,
        explanation: "食べすぎた — pattern 31: [V] すぎる",
      },
      {
        question: "What does 「準備しておく」 mean?",
        options: [
          "May I eat?",
          "You'd better go",
          "There is a friend at the park",
          "I'll prepare in advance",
        ],
        correct: 3,
        explanation: "準備しておく — pattern 32: [Vて] おく",
      },
      {
        question: "What does 「行けばわかる」 mean?",
        options: [
          "How about going?",
          "This sushi is delicious",
          "If you go, you'll understand",
          "I read a book",
        ],
        correct: 2,
        explanation: "行けばわかる — pattern 34: [V] ば (conditional)",
      },
      {
        question: "What does 「行くなら、私も行く」 mean?",
        options: [
          "I go to school",
          "This sushi is delicious",
          "If you're going, I'll go too",
          "There is a friend at the park",
        ],
        correct: 2,
        explanation: "行くなら、私も行く — pattern 35: [V] なら (conditional)",
      },
    ],
  },
};

if (typeof window !== "undefined") {
  window.MasterDictionary = MasterDictionary;
  console.log(
    "MasterDictionary loaded: " +
      MasterDictionary.patterns.length +
      " patterns",
  );
}
