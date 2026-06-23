// Town2: 強み発掘の街
// Re:alize Quest — 30代女性向け自己発見RPG
// 他者3人から各2つの強みを収集し、ジムリーダーに挑む街

const TOWN2 = {
  name: "強み発掘の街",
  description: "ここでは3人の住人があなたの輝きを見つけてくれる。集めた言葉を武器に、ジムリーダーに挑もう！",

  // 20列×12行のタイルマップ
  // 0=草, 1=木, 2=家, 3=ジム(特殊建物), 5=ジムリーダー部屋, 6=花, 7=道, 8=町長/博士の家
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 6, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 6, 0, 0, 1],
    [1, 0, 2, 0, 0, 0, 0, 0, 6, 0, 0, 6, 0, 0, 0, 0, 0, 2, 0, 1],
    [1, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 1],
    [1, 6, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 6, 1],
    [1, 0, 0, 0, 7, 0, 2, 0, 0, 3, 0, 0, 0, 2, 0, 7, 0, 0, 0, 1],
    [1, 0, 2, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 2, 0, 1],
    [1, 0, 0, 0, 7, 0, 0, 6, 0, 0, 0, 0, 6, 0, 0, 7, 0, 0, 0, 1],
    [1, 6, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 6, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 6, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 0, 6, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  spawnPos: { x: 9, y: 9 },   // 南の入口（道の上）
  exitPos:   { x: 9, y: 3 },  // 北の出口（ジム勝利後解放）

  npcs: [
    // ---- NPC1: アカリ（カフェにいる温かい女性） ----
    {
      id: "npc1",
      x: 6,
      y: 5,
      name: "アカリ",
      portrait: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <!-- 肌 -->
  <rect x="5" y="2" width="6" height="6" fill="#FDDBB4"/>
  <!-- 髪（暖かいオレンジブラウン） -->
  <rect x="4" y="1" width="8" height="3" fill="#C97D3A"/>
  <rect x="3" y="2" width="2" height="4" fill="#C97D3A"/>
  <rect x="11" y="2" width="2" height="4" fill="#C97D3A"/>
  <rect x="5" y="7" width="6" height="2" fill="#C97D3A"/>
  <!-- 目 -->
  <rect x="6" y="4" width="1" height="1" fill="#3D2B1F"/>
  <rect x="9" y="4" width="1" height="1" fill="#3D2B1F"/>
  <!-- 口 -->
  <rect x="7" y="6" width="2" height="1" fill="#E07070"/>
  <!-- 服（ピーチ色ブラウス） -->
  <rect x="4" y="9" width="8" height="5" fill="#F5A98E"/>
  <rect x="3" y="10" width="2" height="4" fill="#F5A98E"/>
  <rect x="11" y="10" width="2" height="4" fill="#F5A98E"/>
  <!-- 首 -->
  <rect x="7" y="8" width="2" height="1" fill="#FDDBB4"/>
</svg>`,
      greeting: "あら、あなたが新しく来た子ね！ここのカフェのコーヒー、飲んでいく？",
      dialog: [
        "私、ずっと見てたんだけど…あなたって本当に人の話をちゃんと聞くよね。",
        "話していると、自分の気持ちがするするほぐれていく感じがするの。それって才能だと思う。"
      ],
      strengths: ["傾聴力の深さ", "人の感情を言語化する力"],
      followUp: "その優しさ、大切にしてね。あなたに話しかけてよかった。応援してるよ！"
    },

    // ---- NPC2: ミドリ（本屋の静かな知識人） ----
    {
      id: "npc2",
      x: 13,
      y: 5,
      name: "ミドリ",
      portrait: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <!-- 肌 -->
  <rect x="5" y="2" width="6" height="6" fill="#FDDBB4"/>
  <!-- 髪（深いエメラルドグリーン＝象徴的） -->
  <rect x="4" y="1" width="8" height="3" fill="#2D7D5A"/>
  <rect x="3" y="2" width="2" height="5" fill="#2D7D5A"/>
  <rect x="11" y="2" width="2" height="5" fill="#2D7D5A"/>
  <rect x="4" y="7" width="8" height="1" fill="#2D7D5A"/>
  <!-- 眼鏡フレーム -->
  <rect x="5" y="4" width="3" height="2" fill="none" stroke="#555" stroke-width="0.3"/>
  <rect x="8" y="4" width="3" height="2" fill="none" stroke="#555" stroke-width="0.3"/>
  <rect x="7" y="5" width="2" height="1" fill="#888"/>
  <!-- 目 -->
  <rect x="6" y="4" width="1" height="1" fill="#2A2A5A"/>
  <rect x="9" y="4" width="1" height="1" fill="#2A2A5A"/>
  <!-- 口（控えめ） -->
  <rect x="7" y="6" width="2" height="1" fill="#C09090"/>
  <!-- 服（深緑のシャツ） -->
  <rect x="4" y="9" width="8" height="5" fill="#3A7D6A"/>
  <rect x="3" y="10" width="2" height="4" fill="#3A7D6A"/>
  <rect x="11" y="10" width="2" height="4" fill="#3A7D6A"/>
  <!-- 首 -->
  <rect x="7" y="8" width="2" height="1" fill="#FDDBB4"/>
</svg>`,
      greeting: "いらっしゃい。ゆっくり見ていってね。本は急いで読むものじゃないから。",
      dialog: [
        "あなたって、物事の細かいところに気づくでしょう？他の人が見落とすことを自然につかまえてる。",
        "それと、一つのことを掘り下げる粘り強さ。表面だけで満足しないところが素敵だと思う。"
      ],
      strengths: ["観察眼の鋭さ", "深掘りする探究心"],
      followUp: "その感性は、あなただけのもの。どうか大切に育ててね。"
    },

    // ---- NPC3: ハナ（元気な花屋のお姉さん） ----
    {
      id: "npc3",
      x: 7,
      y: 7,
      name: "ハナ",
      portrait: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <!-- 肌 -->
  <rect x="5" y="2" width="6" height="6" fill="#FDDBB4"/>
  <!-- 髪（明るいサクラピンク、ポニーテール） -->
  <rect x="4" y="1" width="8" height="2" fill="#E8789C"/>
  <rect x="3" y="2" width="2" height="3" fill="#E8789C"/>
  <rect x="11" y="2" width="2" height="3" fill="#E8789C"/>
  <rect x="11" y="4" width="3" height="4" fill="#E8789C"/>
  <!-- 頭頂のお花飾り -->
  <rect x="7" y="0" width="2" height="1" fill="#FF9DC6"/>
  <!-- 目（大きくキラキラ） -->
  <rect x="6" y="4" width="1" height="2" fill="#3D1A3D"/>
  <rect x="9" y="4" width="1" height="2" fill="#3D1A3D"/>
  <rect x="6" y="4" width="1" height="1" fill="#FF9DC6" opacity="0.4"/>
  <rect x="9" y="4" width="1" height="1" fill="#FF9DC6" opacity="0.4"/>
  <!-- 口（笑顔） -->
  <rect x="6" y="6" width="4" height="1" fill="#E07090"/>
  <rect x="7" y="7" width="2" height="1" fill="#E07090"/>
  <!-- 服（イエロー×ピンク） -->
  <rect x="4" y="9" width="8" height="5" fill="#F9E06A"/>
  <rect x="3" y="10" width="2" height="4" fill="#F9E06A"/>
  <rect x="11" y="10" width="2" height="4" fill="#F9E06A"/>
  <!-- 首 -->
  <rect x="7" y="8" width="2" height="1" fill="#FDDBB4"/>
</svg>`,
      greeting: "きゃー！新顔さん！うちのお花、全部あなたみたいに個性的でかわいいよ！",
      dialog: [
        "あなた、ちょっとしたことで周りをパッと明るくする力があるよね。いるだけで場の空気が変わる！",
        "それと行動力！考えすぎずにとりあえず動いてみるスタイル、すごく好き。私には真似できない。"
      ],
      strengths: ["場を明るくする存在感", "考えより先に動く行動力"],
      followUp: "また遊びに来てね！あなたといると楽しいから、絶対また来てよ！"
    }
  ],

  gym: {
    door: { x: 9, y: 5 },
    leaderPos: { x: 9, y: 4 },

    trainer: {
      name: "ゲート番・リク",
      portrait: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" shape-rendering="crispEdges">
  <!-- 肌 -->
  <rect x="5" y="2" width="6" height="6" fill="#FDDBB4"/>
  <!-- 髪（黒・短髪） -->
  <rect x="4" y="1" width="8" height="3" fill="#2A2A2A"/>
  <rect x="3" y="2" width="2" height="2" fill="#2A2A2A"/>
  <rect x="11" y="2" width="2" height="2" fill="#2A2A2A"/>
  <!-- 目 -->
  <rect x="6" y="4" width="2" height="1" fill="#1A1A3A"/>
  <rect x="9" y="4" width="2" height="1" fill="#1A1A3A"/>
  <!-- 口（引き締まった表情） -->
  <rect x="7" y="6" width="2" height="1" fill="#B07060"/>
  <!-- 制服（ネイビー） -->
  <rect x="4" y="9" width="8" height="5" fill="#2A3A5A"/>
  <rect x="3" y="10" width="2" height="4" fill="#2A3A5A"/>
  <rect x="11" y="10" width="2" height="4" fill="#2A3A5A"/>
  <!-- 首 -->
  <rect x="7" y="8" width="2" height="1" fill="#FDDBB4"/>
  <!-- 胸バッジ -->
  <rect x="5" y="10" width="2" height="2" fill="#FFD700"/>
</svg>`,
      greeting: "ここから先はジムだ。入りたければ、あなたの強みを証明してもらおう。",
      challengePrompt: "3人の住人から聞いた強みを含む、あなたの強みを合計9個答えてほしい。住人から聞いた6つ＋自分で考えた3つでもいい。じっくり思い出して入力してくれ。",
      requiredAnswers: 9,
      successMessage: "すばらしい…！あなたには確かな自己理解がある。ジムの扉を開けよう。",
      failMessage: "まだ強みが揃っていないようだ。住人たちに話しかけてみてくれ。アカリ、ミドリ、ハナの3人があなたの言葉を待っている。"
    },

    leader: {
      name: "ユヅキ",
      title: "強み発掘の戦士",
      portrait: `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 32 32" shape-rendering="crispEdges">
  <!-- 背景なし（透明） -->

  <!-- 髪（ラベンダー〜ライトパープル、ツインテール） -->
  <!-- 前髪 -->
  <rect x="8" y="3" width="16" height="4" fill="#C9A8E8"/>
  <rect x="7" y="4" width="2" height="6" fill="#C9A8E8"/>
  <rect x="23" y="4" width="2" height="6" fill="#C9A8E8"/>
  <!-- ツインテール左 -->
  <rect x="4" y="7" width="4" height="10" fill="#B890D8"/>
  <rect x="5" y="17" width="3" height="4" fill="#B890D8"/>
  <!-- ツインテール右 -->
  <rect x="24" y="7" width="4" height="10" fill="#B890D8"/>
  <rect x="24" y="17" width="3" height="4" fill="#B890D8"/>
  <!-- 後ろ髪 -->
  <rect x="8" y="6" width="16" height="2" fill="#B890D8"/>

  <!-- 顔（肌色） -->
  <rect x="9" y="6" width="14" height="12" fill="#FDDBB4"/>

  <!-- 目（大きく、水色のハイライト） -->
  <!-- 左目 -->
  <rect x="10" y="10" width="4" height="4" fill="#4A2A7A"/>
  <rect x="11" y="10" width="2" height="2" fill="#8A60C8"/>
  <rect x="11" y="11" width="1" height="1" fill="#FFFFFF"/>
  <!-- 右目 -->
  <rect x="18" y="10" width="4" height="4" fill="#4A2A7A"/>
  <rect x="19" y="10" width="2" height="2" fill="#8A60C8"/>
  <rect x="19" y="11" width="1" height="1" fill="#FFFFFF"/>

  <!-- まつ毛 -->
  <rect x="10" y="9" width="4" height="1" fill="#3A1A5A"/>
  <rect x="18" y="9" width="4" height="1" fill="#3A1A5A"/>

  <!-- 鼻 -->
  <rect x="15" y="14" width="2" height="1" fill="#E8A090"/>

  <!-- 口（笑顔） -->
  <rect x="12" y="16" width="8" height="1" fill="#E07090"/>
  <rect x="13" y="17" width="6" height="1" fill="#E07090"/>

  <!-- ほっぺ（チーク） -->
  <rect x="10" y="15" width="3" height="2" fill="#FFB8C8" opacity="0.5"/>
  <rect x="19" y="15" width="3" height="2" fill="#FFB8C8" opacity="0.5"/>

  <!-- 首 -->
  <rect x="13" y="18" width="6" height="2" fill="#FDDBB4"/>

  <!-- 服（ミスティックパープル×水色のローブ） -->
  <rect x="8" y="20" width="16" height="10" fill="#6A3DA8"/>
  <rect x="5" y="22" width="4" height="8" fill="#6A3DA8"/>
  <rect x="23" y="22" width="4" height="8" fill="#6A3DA8"/>
  <!-- 衿（水色） -->
  <rect x="12" y="20" width="8" height="3" fill="#70C8E8"/>
  <rect x="13" y="23" width="6" height="2" fill="#5AAED8"/>
  <!-- 袖の装飾（ゴールド） -->
  <rect x="5" y="28" width="4" height="2" fill="#FFD700"/>
  <rect x="23" y="28" width="4" height="2" fill="#FFD700"/>
  <!-- 胸のエンブレム（星型） -->
  <rect x="14" y="24" width="4" height="4" fill="#FFD700"/>
  <rect x="13" y="25" width="6" height="2" fill="#FFD700"/>

  <!-- 頭の飾り（ティアラ） -->
  <rect x="11" y="3" width="10" height="2" fill="#FFD700"/>
  <rect x="15" y="1" width="2" height="3" fill="#FFD700"/>
  <rect x="14" y="2" width="4" height="1" fill="#FF80B0"/>
</svg>`,
      catchphrase: "あたしはユヅキ。強み発掘の戦士。あなたが自分のことを「ふつう」だと思っているなら、今日それを打ち砕いてあげる！",
      battle: {
        question: "さあ、勝負！時間内に答えなさい。あなたの一番の強みは何？一言で答えてみせて！",
        timeLimitSec: 30,
        hints: [
          "ヒント①：住人たちが言ってくれた言葉を思い出して。アカリは何て言ってくれた？",
          "ヒント②：ミドリが気づいたあなたの細かいところ…何かひとつ浮かんだ？",
          "ヒント③：ハナが「真似できない」って言ったこと、覚えてる？自分の言葉に直してみて！"
        ],
        winMessage: "やった…！あなたは自分の強みをちゃんと持ってる。その言葉を忘れないで。あなたは本物だよ。Town3への道を開けるね！",
        retryMessage: "時間切れ！でも大丈夫。強みはすぐに言えなくていい。また住人の言葉を聞き直して、もう一度挑んできて。あたしは逃げないから！",
        rewardItem: "強みのバッジ"
      }
    }
  }
};
