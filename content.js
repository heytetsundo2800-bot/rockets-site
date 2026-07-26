/* ============================================================
   ROCKETS ─ サイトの中身はこのファイルだけ編集すればOK
   ------------------------------------------------------------
   ・文字を変えたいときは「"」で囲まれた部分を書き換える
   ・行を増やしたいときは { ... }, をコピペして増やす
   ・保存したらブラウザを再読み込み（⌘R）すれば反映される
   ============================================================ */

window.CONTENT = {

  /* ---------- バンド基本情報 ---------- */
  band: {
    name: "ROCKETS",
    // トップの大きい文字の下に出る一言（短く。空欄 "" でも可）
    catch: "",
    // ページのタブに出る名前
    title: "ROCKETS ｜ Official Site"
  },

  /* ---------- SNS（バンド公式） ----------
     使わないものは url を "" にすれば非表示になる       */
  sns: {
    x:         "https://x.com/rocket_band04",              // ★連絡はここ、が基本導線
    instagram: "https://www.instagram.com/rockets_official",
    tiktok:    "",                         // TikTokのURLが決まったらここに入れる
    youtube:   ""                          // 使うなら URL を入れる
  },

  /* ---------- 連絡について出す文章 ---------- */
  contactNote: "出演のご依頼・お問い合わせは X（旧Twitter）の DM にお願いします。",

  /* ---------- ライブ情報 ----------
     ・上から順に表示される（新しい順に並べておく）
     ・past: true を付けると「過去の公演」側に入る
     ・ticket の URL を空 "" にするとボタンが消える          */
  lives: [
    {
      date:   "2026.08.15",
      day:    "SAT",
      title:  "ここにイベント名を入れる",
      venue:  "下北沢◯◯◯◯",
      open:   "18:00",
      start:  "18:30",
      adv:    "¥2,500",
      door:   "¥3,000",
      note:   "＋1D",           // 補足（空欄 "" でも可）
      ticket: ""                // 予約フォームやチケットのURL
    },
    {
      date:   "2026.09.06",
      day:    "SUN",
      title:  "ここにイベント名を入れる",
      venue:  "新宿◯◯◯◯",
      open:   "17:30",
      start:  "18:00",
      adv:    "¥2,500",
      door:   "¥3,000",
      note:   "＋1D",
      ticket: ""
    },
    {
      date:   "2026.06.21",
      day:    "SAT",
      title:  "（過去公演のサンプル）",
      venue:  "渋谷◯◯◯◯",
      open:   "18:00",
      start:  "18:30",
      adv:    "¥2,500",
      door:   "¥3,000",
      note:   "",
      ticket: "",
      past:   true
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

  /* ---------- 音源 ----------
     website/assets/audio/ フォルダに mp3 を入れて、
     file にそのファイル名を書く（例 "take1.mp3"）           */
  tracks: [
    // { title: "曲名", file: "take1.mp3", note: "スタジオ録音 2026.05" }
  ],

  /* ---------- メンバー ----------
     photo は members/○○.webp（メンバー写真）または p○○○.webp（ライブ写真）
     x / instagram / tiktok に個人アカウントのURLを入れると、名前の下にリンクが出ます */
  members: [
    { name: "いまちま",       part: "BA",      photo: "members/m1.webp", x: "", instagram: "", tiktok: "" },
    { name: "ゴーザキ",       part: "VO / GT", photo: "members/m2.webp", x: "", instagram: "", tiktok: "" },
    { name: "Koudai",         part: "LEAD GT", photo: "members/m3.webp", x: "", instagram: "", tiktok: "" },
    { name: "アタチ テツンド", part: "DR",      photo: "members/m4.webp", x: "", instagram: "", tiktok: "" }
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
