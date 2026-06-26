const TOWN4 = {
  name: "交流の都 ルミナリア",
  description: "他の冒険者と出会い、お互いの異常値を照らし合わせ、高め合う最後の街。ここでの出会いが、あなたの旅の意味を完成させる。",

  map: [
    // 20×12タイル配列 (1=木, 2=家, 6=花, 7=道, 0=草, 4=水) - quest_v2.html共通タイルに合わせて修正
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,1,0,0,0,7,7,7,7,7,0,0,1,0,0,0,0,1],
    [1,0,6,1,6,0,0,7,0,7,4,7,0,0,1,0,6,6,0,1],
    [1,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,1],
    [1,1,0,2,0,0,0,7,0,0,0,7,0,0,2,0,0,1,0,1],
    [1,0,0,2,0,0,0,7,0,0,0,7,0,0,2,0,0,0,0,1],
    [1,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,1],
    [1,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,1],
    [1,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    [1,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,6,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ],

  spawnPos: { x: 10, y: 6 },

  // 街にいる5人の他Realizeメンバー（架空・多様な個性）
  // 架空ライバル削除済み（クラウドメンバーのみ表示）
  rivals: [],
  _legacy_rivals_disabled: [
    {
      id: "rival_hana",
      x: 8,
      y: 2,
      name: "花澄（はなすみ）",
      mbti: "ENFJ",
      animalKey: "neko",
      ijouchi: "どんな人の「本当にやりたいこと」も15分で引き出せる",
      strengths: ["共感力", "傾聴", "言語化サポート"],
      backstory: "「はじめまして！あなたのこと、もう少し教えてくれる？私ね、人の話を聞くのが大好きなの。あなたの旅、どんな発見があった？」",
      preBattle: "「一緒に強め合おう！私はあなたから何か学べる気がする。バトルって言っても、本当は対話だと思ってるから♪」",
      victorySpeech: "「あなたの言葉、すごく力強かった！でも私はあなたのこの一言が一番刺さったよ。大切にしてね。」",
      defeatSpeech: "「あなたの視点、私には全然なかった…！ありがとう、今日一番の学びだよ。次は私も磨いてくるね！」",
      difficulty: 2,
      currentGoal: "半年で「言葉にできない悩み」を抱える女性を50人サポート",
      reward: "共感の使い手"
    },
    {
      id: "rival_rei",
      x: 3,
      y: 4,
      name: "玲（れい）",
      mbti: "INTJ",
      animalKey: "fukurou",
      ijouchi: "複雑な問題の「本質」を3行で言語化できる",
      strengths: ["構造化思考", "長期視点", "パターン認識"],
      backstory: "「…来たんだね。私のこと、分析しに来た？ちょうどいい。私もあなたを観察しようと思ってたところ。」",
      preBattle: "「感情は邪魔しない。純粋に、お互いの思考の強さをぶつけよう。あなたの異常値、見せてみて。」",
      victorySpeech: "「…予想より深かった。私の分析が足りなかった。データを更新する。」",
      defeatSpeech: "「面白い。あなたの論理展開、私にはない跳躍がある。それが強みなんだね、記録しておく。」",
      difficulty: 4,
      currentGoal: "自分の戦略フレームワークを言語化し、本にまとめる",
      reward: "洞察の剣士"
    },
    {
      id: "rival_sora",
      x: 16,
      y: 7,
      name: "空（そら）",
      mbti: "ENFP",
      animalKey: "usagi",
      ijouchi: "「これって実はこういうことじゃん！」という発見で場を変えられる",
      strengths: ["発想転換", "熱量伝達", "巻き込み力"],
      backstory: "「わーっ！新しい人だ！ねえねえ、あなたって何が得意なの？私ね、みんなの良いところを組み合わせるのが好きで、あなたと話したらすごいコラボが生まれそう！」",
      preBattle: "「本気で行くよ！でも楽しんで！終わった後にお茶しようね。勝ち負けより話したいこといっぱいあるから！」",
      victorySpeech: "「すごい！あなたのアイデア、私の世界を広げてくれた！一緒にプロジェクトしたくなってきた！」",
      defeatSpeech: "「もーっ、やられた！でも超楽しかった！あなたの考え方、どこで身につけたの？教えて教えて！」",
      difficulty: 2,
      currentGoal: "異業種の人と50回ランチして「未知の組み合わせ」を発見する",
      reward: "創造の火種"
    },
    {
      id: "rival_miyo",
      x: 13,
      y: 4,
      name: "美世（みよ）",
      mbti: "ISFJ",
      animalKey: "shibainu",
      ijouchi: "「誰も気づいていない小さな変化」を最初に察知できる",
      strengths: ["細部観察", "継続力", "チーム安定化"],
      backstory: "「あ…こんにちは。えっと、私、目立つタイプじゃないんですけど。でも実は、みんなのこと、ちゃんと見てるんです。あなたのこと、さっきからちょっと気になってて…。」",
      preBattle: "「緊張してるけど…やってみます。私の強みって地味だけど、きっとあなたに気づいてもらえると思って。」",
      victorySpeech: "「やった…！私でも、ちゃんとできたんだ。ありがとうございます、自信になりました。」",
      defeatSpeech: "「やっぱりまだまだだな…でも、あなたの言葉で気づけたことがあります。少しずつ、磨いていきます。」",
      difficulty: 3,
      currentGoal: "毎日3つ「誰かのいいところ」を見つけて伝える習慣を確立",
      reward: "静かなる守護者"
    },
    {
      id: "rival_akane",
      x: 10,
      y: 9,
      name: "茜（あかね）",
      mbti: "ESTP",
      animalKey: "kitsune",
      ijouchi: "「場の空気を一瞬で読んで、最適解を即断できる」",
      strengths: ["瞬発力", "適応力", "実行速度"],
      backstory: "「おっ、見どころありそう！私ね、面白そうな人にはすぐ声かけちゃうの。あなた、なんか特別な雰囲気がある。一緒に何かやってみたくない？」",
      preBattle: "「難しいこと考えるより動いてみよう！バトルも人生も、やってみてから考えるタイプだから。あなたはどう？」",
      victorySpeech: "「やるじゃん！でもね、あなたの動き方、私と全然違うのにちゃんと機能してるのが面白かった。」",
      defeatSpeech: "「参ったな！あなたの芯の強さ、私の速さじゃ崩せなかった。そういう軸、私には必要かも。」",
      difficulty: 3,
      currentGoal: "思いついたらその場で動く「3秒ルール」を100日続ける",
      reward: "疾風の決断者"
    }
  ],

  battleSystem: {
    type: "non-realtime async",
    description: "相手の「保存されたデータ（強み・異常値・ストーリー）」と非同期で対話型バトル。勝敗は言語化の深さで決まる。",

    battleFlow: "省略（quest_v2.htmlでは questionsBank のみ使用）",
    _battleFlowReference: `
      async function startBattle(player, rival) {

        // === Phase 1: 登場演出 ===
        await showRivalEntrance(rival);
        // 相手の動物キャラがアニメーションして登場
        // rival.backstory をダイアログで表示
        // プレイヤーは「話しかける / バトルする / 見送る」を選択

        // === Phase 2: 相手の強み・異常値披露 ===
        await showRivalProfile(rival);
        // rival.ijouchi（異常値）を画面中央に大きく表示
        // rival.strengths をカード型で3枚展示
        // BGM: 静かな発見音
        // テキスト：「\${rival.name}の異常値を受け取った！」

        // === Phase 3: 応答型バトル（3〜5問） ===
        const selectedQuestions = selectQuestions(player, rival, questionsBank);
        // player.mbti と rival.mbti の組み合わせで相性問題を選択
        // rival の strengths に関連するシナリオを優先
        let totalScore = 0;

        for (const question of selectedQuestions) {
          // シーン提示（rival.nameが困っている状況）
          await displayScenario(question, rival);

          // プレイヤーの回答方式（2択）
          const mode = await askAnswerMode();
          // A: 自由記述（テキストボックス）→ キーワードマッチ採点
          // B: 選択肢型（4択）→ 即座に採点・解説付き

          const answer = await getPlayerAnswer(mode);
          const score = evaluateAnswer(answer, question.scoringHints);

          // スライダーで「自分の言語化、どのくらいできた感？」を自己評価
          const selfScore = await getSelfEvalSlider(); // 1〜5

          totalScore += (score * 0.6) + (selfScore * 0.4);

          // 相手の「補足」を毎問表示（負けても学べる）
          await showRivalHint(question, rival);
        }

        // === Phase 4: 勝敗判定 ===
        const winThreshold = rival.difficulty * 8; // 難易度×8点が合格ライン
        const win = totalScore >= winThreshold;

        if (win) {
          await playVictoryAnimation(player, rival);
          // rival.victorySpeech 表示
          // 称号付与: titleSystem から rival.id に対応する称号を取得
          const title = titleSystem.find(t => t.condition.includes(rival.id));
          await grantTitle(player, title);
          // 称号カードが光とともに出現するアニメーション
        } else {
          await playLearningAnimation(player, rival);
          // rival.defeatSpeech 表示
          // ダメージなし。「学びリスト」にこの対戦の気づきを自動追記
          await addToLearningList(player, {
            rivalName: rival.name,
            ijouchi: rival.ijouchi,
            missedPoints: question.scoringHints
          });
          // テキスト：「負けじゃない。\${rival.name}の異常値を1つ受け取った。」
        }

        // === Phase 5: 対戦後の交流 ===
        await postBattleExchange(player, rival);
        // rival.victorySpeech or rival.defeatSpeech のあとに
        // 「\${rival.name}に一言メッセージを残す？」→ exchangeBoard に追加
        // お互いの異常値カードを交換（コレクション機能）
      }

      function selectQuestions(player, rival, bank) {
        // rival の強みに関連する問題を優先（2問）
        // player の MBTI 役職が活きる問題を1問
        // 全員共通の「異常値披露」問題を1問（固定）
        // 合計3〜4問を返す
        const rivalRelated = bank.filter(q =>
          rival.strengths.some(s => q.tags && q.tags.includes(s))
        ).slice(0, 2);
        const mbtiRelated = bank.filter(q =>
          q.mbtiBoost && q.mbtiBoost.includes(player.mbti)
        ).slice(0, 1);
        const ijouchi = bank.find(q => q.type === "ijouchi");
        return [...rivalRelated, ...mbtiRelated, ijouchi].filter(Boolean);
      }

      function evaluateAnswer(answer, hints) {
        if (typeof answer === "string") {
          // 自由記述：ヒントキーワードのマッチ数で0〜10点
          return hints.reduce((score, hint) => {
            const keywords = hint.split(/[、。,]/);
            return score + keywords.filter(kw => answer.includes(kw)).length * 2;
          }, 0);
        } else {
          // 選択肢：正解なら10点、部分点は設問で定義
          return answer.score || 0;
        }
      }
    `,

    questionsBank: [
      {
        id: "q1",
        tags: ["共感力", "傾聴"],
        type: "scenario",
        scenario: "花澄（はなすみ）は、チームメンバーが「なぜ辛いのかわからないけど、なんとなく苦しい」と打ち明けてきた。言葉にできない感情を抱えている状況。",
        challenge: "あなたならこの瞬間、最初に何をしますか？あなたの強みを使ってどう関わりますか？",
        scoringHints: [
          "まず「聴く」「受け止める」姿勢を示している",
          "解決より共感を優先している",
          "相手のペースを尊重している"
        ],
        choices: [
          { text: "「それ、よくわかる。私も同じだったよ」と自分の経験を話す", score: 7 },
          { text: "「何が一番しんどい？」と小さな部分から聞き出す", score: 9 },
          { text: "「大丈夫、きっとうまくいく！」と励ます", score: 4 },
          { text: "「専門家に相談してみたら？」と具体的な行動を提案する", score: 5 }
        ]
      },
      {
        id: "q2",
        tags: ["構造化思考", "パターン認識", "長期視点"],
        type: "scenario",
        scenario: "玲（れい）のチームでプロジェクトが行き詰まっている。問題が複数あって、みんな何から手をつければいいかわからない状態。",
        challenge: "この状況を整理するために、あなたの強みをどう使いますか？",
        scoringHints: [
          "優先順位づけの方法を提示している",
          "原因と結果を分けて考えている",
          "全員が動けるよう具体化している"
        ],
        choices: [
          { text: "「まず問題を書き出して、つながりを図にしてみよう」と提案する", score: 10 },
          { text: "「全員で一番の課題に集中しよう」と一本化する", score: 7 },
          { text: "「やる気ある人から動こう」と自発性に任せる", score: 3 },
          { text: "「外部の人に相談しよう」と視点を変える", score: 5 }
        ]
      },
      {
        id: "q3",
        tags: ["発想転換", "巻き込み力"],
        type: "scenario",
        scenario: "空（そら）の企画が「面白いけど現実的じゃない」と却下されそうになっている。周りは保守的で、変化を恐れている。",
        challenge: "あなたなら、この場の空気をどう変えますか？",
        scoringHints: [
          "相手の懸念を否定せず受け止めている",
          "小さく始める提案をしている",
          "共通のメリットを見つけている"
        ],
        choices: [
          { text: "「まず小さく試してみようよ。失敗しても学べるから」と提案", score: 10 },
          { text: "「絶対うまくいく！信じて！」と熱量で押す", score: 5 },
          { text: "「わかった、現実的な部分だけ残そう」と修正する", score: 6 },
          { text: "「なぜ変化が怖いのか」を全員で話し合う時間を作る", score: 8 }
        ]
      },
      {
        id: "q4",
        tags: ["細部観察", "継続力"],
        type: "scenario",
        scenario: "美世（みよ）は、誰も気づいていないけれどチームのコミュニケーションが少しずつ減っていることに気づいた。まだ問題は表面化していない。",
        challenge: "この「予兆」に気づいたあなたは、どう動きますか？",
        scoringHints: [
          "早期に、小さなアクションを起こしている",
          "周囲を巻き込む前に自分でできることをしている",
          "問題化する前に関係を温めようとしている"
        ],
        choices: [
          { text: "「最近みんなで話す機会を作ろう」と軽い場を提案する", score: 9 },
          { text: "「問題が起きてから対処すれば大丈夫」と様子を見る", score: 2 },
          { text: "「コミュニケーション不足の原因を分析する」と調査を始める", score: 7 },
          { text: "「リーダーに報告して対応してもらう」と伝える", score: 5 }
        ]
      },
      {
        id: "q5",
        tags: ["瞬発力", "実行速度", "適応力"],
        type: "scenario",
        scenario: "茜（あかね）がイベント当日、スタッフが一人急病で来られなくなった。開始まで30分しかない。",
        challenge: "このピンチ、あなたはどう動きますか？まず何をしますか？",
        scoringHints: [
          "即座に役割の再配分を考えている",
          "パニックにならず現状から最善を引き出している",
          "チームに安心感を与える行動をしている"
        ],
        choices: [
          { text: "「できること・できないことを30秒で仕分けして、分担を組み直す」", score: 10 },
          { text: "「代わりを探す電話をかけ続ける」と外部補充を優先", score: 5 },
          { text: "「このままでも回せる部分に集中」とスコープを絞る", score: 8 },
          { text: "「全員に状況を共有して意見を聞く」と合意形成を優先", score: 4 }
        ]
      },
      {
        id: "q6",
        type: "scenario",
        tags: ["共感力", "継続力"],
        mbtiBoost: ["INFJ", "INFP", "ENFJ", "ENFP"],
        scenario: "大事な目標に向かって頑張ってきた仲間が「もうやめたい」と言い出した。本人は理由もうまく説明できていない。",
        challenge: "あなたの強みで、この人の「続ける理由」を一緒に見つけるとしたら？",
        scoringHints: [
          "相手の感情をそのまま受け取っている",
          "「なぜ続けてきたか」を思い出させようとしている",
          "答えを押し付けず、相手自身が気づくよう誘導している"
        ],
        choices: [
          { text: "「ここまで頑張れた自分、すごいと思わない？」と過去に光を当てる", score: 9 },
          { text: "「休んでいいよ。戻りたくなったらまた話して」と余白を与える", score: 8 },
          { text: "「あと少しだから、もう少し頑張ろう」と励ます", score: 4 },
          { text: "「やめた場合と続けた場合を整理してみよう」とロジカルに整理", score: 6 }
        ]
      },
      {
        id: "q7",
        type: "ijouchi",
        tags: ["異常値"],
        scenario: "Town3であなたは自分の「異常値」を発見した。今、目の前の相手があなたの異常値を聞いている。",
        challenge: "「あなたは何で世界一になれるか？」を30秒で、相手の目を見て話すとしたら？（自由記述）",
        scoringHints: [
          "具体的なエピソードや場面が含まれている",
          "他の人と違う自分だけの言い方をしている",
          "照れずに「これが自分だ」と言い切っている"
        ]
      },
      {
        id: "q8",
        type: "scenario",
        tags: ["構造化思考", "発想転換"],
        mbtiBoost: ["INTJ", "INTP", "ENTJ", "ENTP"],
        scenario: "あなたのチームが「毎回同じ失敗を繰り返している」という状況。原因はわかっているのに、なかなか変わらない。",
        challenge: "「わかってるのに変えられない」この状況、あなたならどう突破しますか？",
        scoringHints: [
          "「知っている」と「できている」のギャップに着目している",
          "仕組みや環境から変えようとしている",
          "小さく始めて確認するステップを提案している"
        ],
        choices: [
          { text: "「失敗の瞬間に自動でブレーキがかかる仕組みを作る」", score: 10 },
          { text: "「また話し合いの場を設けて、意識を高める」", score: 4 },
          { text: "「担当者を変えて、新しい目で見てもらう」", score: 6 },
          { text: "「一つだけ試して、うまくいったら広げる」", score: 8 }
        ]
      },
      {
        id: "q9",
        type: "scenario",
        tags: ["巻き込み力", "瞬発力"],
        scenario: "あなたが大事だと思っていることを、まわりの誰も重視していない。孤立感を感じながらも、これは大事だと確信している。",
        challenge: "あなたの「信念」を、プレッシャーなく伝える方法は？",
        scoringHints: [
          "自分の言葉と熱量で語っている",
          "相手のメリットに置き換えて話している",
          "強制でなく「一緒に確かめよう」という姿勢がある"
        ],
        choices: [
          { text: "「試しに一緒にやってみない？私が先に動いてみせるから」", score: 9 },
          { text: "「これがなぜ大事かを資料にまとめてプレゼンする」", score: 7 },
          { text: "「理解してくれる一人を先に見つけて、一緒に動く」", score: 10 },
          { text: "「多数決で決めよう」と民主的に進める", score: 3 }
        ]
      },
      {
        id: "q10",
        type: "scenario",
        tags: ["細部観察", "長期視点"],
        scenario: "半年後、今のあなたの「強みの使い方」はどう進化していると思う？",
        challenge: "具体的なシーンを一つ想像して、語ってください。（自由記述）",
        scoringHints: [
          "今の自分との差分が具体的に書かれている",
          "他者への影響が含まれている",
          "自分らしさが増している（強みが洗練されている）"
        ]
      }
    ],

    winLogic: `
      勝ち：totalScore が rival.difficulty × 8 以上
      → 称号獲得 + 「\${rival.name}の異常値カード」ゲット
      → 称号は player.titles[] に追加。重複なし。

      負け：totalScore が閾値未満
      → ダメージなし。HPも減らない。
      → player.learningList[] に以下を追加：
        { date: today, rival: rival.name, ijouchi: rival.ijouchi, hint: 不足していた観点 }
      → テキスト：「敗北じゃない。\${rival.name}の視点を1つ受け取った。」
      → 3日後に「学びの復習通知」がマップ上に出現（任意）

      どちらでも：
      → exchangeBoard にメッセージを残せる
      → rival の異常値カード（簡易版）はコレクションに追加
    `,

    titleSystem: [
      {
        titleId: "empath_friend",
        condition: "rival_hana に勝つ",
        name: "共感の使い手",
        description: "人の気持ちに深く潜り込み、言葉にできない感情を受け取れる人",
        icon: "heart_glow"
      },
      {
        titleId: "insight_knight",
        condition: "rival_rei に勝つ",
        name: "洞察の剣士",
        description: "複雑な混沌の中から本質の一点を切り出せる思考の持ち主",
        icon: "owl_eye"
      },
      {
        titleId: "spark_maker",
        condition: "rival_sora に勝つ",
        name: "創造の火種",
        description: "どんな場所でも可能性の火をつけ、周囲を動かしていく存在",
        icon: "flame_spark"
      },
      {
        titleId: "silent_guardian",
        condition: "rival_miyo に勝つ",
        name: "静かなる守護者",
        description: "誰も気づかない小さな変化を最初に見つけ、静かに場を守る人",
        icon: "shield_soft"
      },
      {
        titleId: "swift_decider",
        condition: "rival_akane に勝つ",
        name: "疾風の決断者",
        description: "状況を瞬時に読み取り、最適な一手を打てる行動の人",
        icon: "lightning_fox"
      },
      {
        titleId: "all_five_legend",
        condition: "全員に勝つ",
        name: "光の収束者",
        description: "5つの異なる強みと対話し、それぞれから光を受け取った旅人",
        icon: "star_five_rays"
      }
    ]
  },

  exchangeBoard: {
    description: "街の中心にある掲示板。他のRealize参加者たちが旅の途中で残したリアルな一言が貼られている。読むだけで力になる。",
    messages: [
      {
        from: "花澄（はなすみ）",
        animal: "neko",
        text: "「弱さを話せる場所があると、人は前に進める。あなたにとって、ここがそんな場所になれたら嬉しい。」"
      },
      {
        from: "玲（れい）",
        animal: "fukurou",
        text: "「感情は邪魔じゃない。データだ。あなたが今感じていることも、全部、次の答えへの入力になる。」"
      },
      {
        from: "空（そら）",
        animal: "usagi",
        text: "「「どうせ無理」って思った瞬間に、一番面白いことが始まる気がしてる。私はそれを信じて動き続けてる！」"
      },
      {
        from: "美世（みよ）",
        animal: "shibainu",
        text: "「目立たなくていい。でも、ちゃんと見ている。あなたの頑張り、誰かが必ず気づいてるよ。」"
      },
      {
        from: "茜（あかね）",
        animal: "kitsune",
        text: "「完璧に準備してから動こう、は幻想。動きながら完璧に近づくのが私のやり方。あなたはどう？」"
      },
      {
        from: "旅人（通過済み）",
        animal: null,
        text: "「Town3で自分の異常値を知った時、怖かった。でも今は、それが一番の武器だって思ってる。」"
      },
      {
        from: "名無しの参加者",
        animal: null,
        text: "「誰かと比べて落ち込んでた時期があったけど、ここで気づいた。比べるのは、昨日の自分だけでいい。」"
      },
      {
        from: "さくら（卒業生）",
        animal: null,
        text: "「Re:alizeを終えた今も、ここで出会った言葉たちが私の中で生きてる。あなたの旅もきっとそうなるよ。」"
      }
    ],
    // プレイヤーが書き込める仕様
    playerCanPost: true,
    postPrompt: "「次の旅人への一言」を残していきますか？"
  },

  // 街のBGM・演出設定
  atmosphere: {
    bgm: "luminaria_theme", // 温かく、少しエモーショナルなピアノ+ストリングス
    ambientSfx: ["fountain_water", "distant_birds", "soft_wind"],
    lightEffect: "golden_hour", // 午後の暖かい光の粒子演出
    weatherCycle: ["clear", "soft_rain", "rainbow_after_rain"] // ランダムローテーション
  },

  // クリア条件
  clearCondition: {
    minBattles: 3,
    requiredTitle: null, // 全員倒さなくていい
    clearMessage: "「5人との対話を終えたあなたは、自分の異常値の輪郭が、もっとはっきりと見えるようになった。旅はここで終わらない。あなたの異常値を世界に証明する場所へ—。」",
    postGameUnlock: "epilogue_scene" // エンドクレジット + 「あなたの称号集」表示
  }
};
