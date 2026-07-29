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
      date:   "2026.08.04",
      day:    "TUE",
      title:  "elephance",
      venue:  "吉祥寺 NEPO",
      open:   "18:00",
      start:  "18:30",
      price:  "ADV ¥2,200（＋1D）",
      note:   "",
      ticket: "https://nepo.co.jp/schedules/view/3249",
      ticketLabel: "会場サイト"
    },
    {
      date:   "2026.08.18",
      day:    "TUE",
      title:  "青春火花",
      venue:  "立川 BABEL",
      open:   "18:15",
      start:  "18:30",
      price:  "一般 ¥2,500 / 学生 ¥1,500（＋1D）",
      note:   "",
      ticket: "https://www.babel-rocktower.net/schedule/202608.html",
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

  /* ---------- 音源（DEMO） ----------
     website/assets/audio/ フォルダに mp3 を入れて、
     file にそのファイル名を書く（例 "take1.mp3"）           */
  tracks: [
    // { title: "曲名", file: "take1.mp3", note: "スタジオ録音 2026.05" }
  ],

  /* ---------- 物販（SHOP） ----------
     ・items が空のあいだは「COMING SOON」の画面が出る
     ・商品を1つでも書いた瞬間、自動で商品一覧に切り替わる
     ・写真は website/assets/shop/ に入れて photo: "sticker.webp" と書く
     ・BASE / SUZURI などの外部ストアを使うなら url にそのURLを入れる  */
  shop: {
    note: "ステッカー・Tシャツなどを準備中です。\n出来上がりしだい、ここに並べます。",
    url:      "",                    // オンラインストアのURL（無ければ空でOK）
    urlLabel: "オンラインストアへ",
    items: [
      // { name: "ステッカー", price: "¥500", photo: "sticker.webp",
      //   url: "https://ここに購入ページのURL", note: "5枚セット" }
    ]
  },

  /* ---------- メンバー ----------
     photo は members/○○.webp（メンバー写真）または p○○○.webp（ライブ写真）
     word  は名前の下に出る一言（空 "" にすればその人だけ非表示）
     x / instagram / tiktok に個人アカウントのURLを入れると、一言の下にリンクが出ます */
  members: [
    { name: "いまちま",       part: "Ba",      photo: "members/m1.webp",
      word: "",
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
  bio: "ここにバンドの紹介文を書く。\n改行したいところで \\n と書けば行が変わる。",

  /* ---------- 演出の設定 ---------- */
  settings: {
    fadeSeconds: 6,      // 写真が切り替わる間隔（秒）　5〜7 くらいが目安
    crossfade: 2.4,      // フェードにかける時間（秒）　長いほどゆっくり
    kenBurns: true,      // 写真がごくゆっくり寄る動き（false で完全静止）
    tintStrength: 0.55   // 写真の色がページ全体に乗る強さ（0〜1）
  }
};
