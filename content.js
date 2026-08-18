/* ============================================================
   ROCKETs ─ サイトの中身はこのファイルだけ編集すればOK
   ------------------------------------------------------------
   ・文字を変えたいときは「"」で囲まれた部分を書き換える
   ・行を増やしたいときは { ... }, をコピペして増やす
   ・保存したらブラウザを再読み込み（⌘R）すれば反映される
   ============================================================ */

window.CONTENT = {

  /* ---------- バンド基本情報 ---------- */
  band: {
    name: "ROCKETs",
    // トップの大きい文字の下に出る一言（短く。空欄 "" でも可）
    catch: "",
    // ページのタブに出る名前
    title: "ROCKETs ｜ Official Site"
  },

  /* ---------- SNS（バンド公式） ----------
     使わないものは url を "" にすれば非表示になる       */
  sns: {
    x:         "https://x.com/rocket_band04",              // ★連絡はここ、が基本導線
    instagram: "https://www.instagram.com/rockets_official",
    tiktok:    "https://www.tiktok.com/@rockets_band",
    youtube:   ""                          // 使うなら URL を入れる
  },

  /* ---------- 連絡について出す文章 ---------- */
  contactNote: "出演のご依頼・お問い合わせは X（旧Twitter）の DM にお願いします。",

  /* ---------- ライブ情報 ----------
     ・上から順に表示される（近い日付を上に）
     ・past: true を付けると「過去の公演」側に入る
     ・料金は price に自由に書ける（書かない場合は adv / door が使われる）
     ・ticket にURLを入れるとボタンが出る。ボタンの文字は ticketLabel で変えられる
     ・ticket を "" にするとボタンが消える                                */
  lives: [
    {
      date:   "2026.08.18",
      day:    "TUE",
      title:  "青春火花",
      venue:  "立川 BABEL",
      open:   "18:15",
      start:  "18:30",
      price:  "一般 ¥2,500 / 学生 ¥1,500（＋1D）",
      note:   "共演：THE METRON / LAULA LÖWE / meteorite / Daddy's Punk",
      ticket: "https://www.babel-rocktower.net/schedule/",
      ticketLabel: "会場サイト"
    },
    {
      date:   "2026.09.18",
      day:    "FRI",
      title:  "共鳴",
      venue:  "立川 COSMIC HALL",
      open:   "18:00",
      start:  "18:30",
      price:  "ADV / DOOR ¥2,500（＋1D）",
      note:   "共演：niwaka. / Hold my beer / nakanaori",
      ticket: "https://studiopenta.jp/cosmichall/",
      ticketLabel: "会場サイト"
    },
    {
      date:   "2026.09.24",
      day:    "THU",
      title:  "画零時",
      venue:  "大久保 HOT SHOT",
      open:   "18:10",
      start:  "18:30",
      price:  "ADV ¥2,000 / DOOR ¥2,500（＋1D）",
      note:   "共演：ぶらいかん / The April Fools / minami",
      ticket: "https://hotshot.tokyo/",
      ticketLabel: "会場サイト"
    }
  ],

  /* ---------- 映像 ----------
     YouTube の動画IDを入れる。
     例）https://www.youtube.com/watch?v=AbCdEfGhIjK  →  "AbCdEfGhIjK"
     まだ無ければ videos: [] にしておけばセクションごと消える     */
  videos: [
    // { id: "動画IDをここに", title: "ライブ映像 2026.06.21 渋谷" },
    // { id: "動画IDをここに", title: "スタジオ" }
  ],

  /* ---------- 音源（SOUND） ----------
     ★mp3をサイト上で鳴らしたくなったら：
       ① mp3 を assets/audio/ フォルダに入れる
       ② 下の file: "" に、そのファイル名を書く（例 file: "punk.mp3"）
       これだけで、その曲に再生バーが出ます。何もしなければEggsのボタンだけが出ます。 */
  sound: {
    // Eggs のアーティストページ（"" にするとEggsのボタンが消える）
    eggs:      "https://eggs.mu/artist/rockets_punk",
    eggsLabel: "Eggs で聴く",
    note:      "Eggsは登録なしでそのまま聴けます。"
  },

  tracks: [
    {
      title:  "パンクのススメ",
      note:   "作詞・作曲：ゴーザキ",
      jacket: "jacket-punk-no-susume.webp",   // assets/audio/ の中の画像
      file:   "punk-no-susume.m4a",           // ← assets/audio/ の中の音源ファイル
      // この曲だけのEggsページ（"" ならアーティストページに飛ぶ）
      eggs:   "https://eggs.mu/artist/rockets_punk/song/41c0eb8d-30a4-4e59-8bb6-ed8becf20c32"
    }
  ],

  /* ---------- 物販（SHOP） ----------
     ・items が空のあいだは「COMING SOON」の画面が出る
     ・商品を1つでも書いた瞬間、自動で商品一覧に切り替わる
     ・写真は website/assets/shop/ に入れて photo: "sticker.webp" と書く
     ・BASE / SUZURI などの外部ストアを使うなら url にそのURLを入れる  */
  shop: {
    note: "ステッカー・Tシャツなどを準備中です。\n出来上がりしだい、ここに並べます。",

    // 商品の上に出る帯。"" にすると帯ごと消える
    saleLabel: "LIVE VENUE ONLY",
    saleNote:  "いまはライブ会場でのみ販売しています。\n1枚 ¥200 ／ 白・黒の2枚セット ¥300",

    url:      "",                    // オンラインストアのURL（無ければ空でOK）
    urlLabel: "オンラインストアへ",
    items: [
      // photo は assets/shop/ の中の画像。size は商品名の下に小さく出ます
      // cutout: true ＝ 背景が透明な切り抜き画像（普通の商品写真なら消してください）
      // invert: true ＝ 白の画像を色反転して黒版として出す（画像は1枚で済みます）
      { name: "ロゴステッカー（白）", price: "¥200", photo: "sticker-white.webp", cutout: true,
        note: "白地 × 黒ロゴ／防水・屋外OK", size: "約 90 × 35 mm" },
      { name: "ロゴステッカー（黒）", price: "¥200", photo: "sticker-white.webp", cutout: true, invert: true,
        note: "黒地 × 白ロゴ／防水・屋外OK", size: "約 90 × 35 mm" }
    ]
  },

  /* ---------- メンバー ----------
     photo は members/○○.webp（メンバー写真）または p○○○.webp（ライブ写真）
     word  は名前の下に出る一言（空 "" にすればその人だけ非表示）
     x / instagram / tiktok に個人アカウントのURLを入れると、一言の下にリンクが出ます */
  members: [
    { name: "いまちま",       part: "Ba",      photo: "members/m1.webp",
      word: "やるしかねぇ!",
      x: "https://x.com/imymellsc",     instagram: "https://www.instagram.com/car666lose", tiktok: "" },

    { name: "ゴーザキ",       part: "Vo / Gt", photo: "members/m2.webp",
      word: "LET'S GO!! PUNK ROCK!!",
      x: "https://x.com/gorockets11",   instagram: "https://www.instagram.com/go._rockets", tiktok: "" },

    { name: "Koudai",         part: "Gt",      photo: "members/m3.webp",
      word: "Punks not dead",
      x: "https://x.com/k_rockets_",    instagram: "https://www.instagram.com/_k666yy._",  tiktok: "" },

    { name: "アダチ テツンド", part: "Dr",      photo: "members/m4.webp",
      word: "ろっくんろーる",
      x: "https://x.com/rockets_tetsu", instagram: "https://www.instagram.com/tetsu_kasakasa", tiktok: "" }
  ],

  /* ---------- バンド紹介文 ---------- */
  bio: "東京のパンクバンドROCKETs。",

  /* ---------- 演出の設定 ---------- */
  settings: {
    fadeSeconds: 6,      // 写真が切り替わる間隔（秒）　5〜7 くらいが目安
    crossfade: 2.4,      // フェードにかける時間（秒）　長いほどゆっくり
    kenBurns: true,      // 写真がごくゆっくり寄る動き（false で完全静止）
    tintStrength: 0.55   // 写真の色がページ全体に乗る強さ（0〜1）
  }
};

/* 最終更新: 2026-08-11 ライブ情報 */
