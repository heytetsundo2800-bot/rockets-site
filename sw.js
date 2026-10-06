/* ============================================================
   ROCKETs — Service Worker（最小構成）

   目的はひとつだけ。
   Androidの Chrome が「ホーム画面に追加」を1タップで出せる条件として
   「fetchハンドラを持つService Workerが登録されていること」を求めるため、
   その条件だけを満たしている。

   ★ キャッシュは一切しない。
     写真や動画をキャッシュすると、更新が届かなくなったり
     Rangeリクエスト（動画のシーク）が壊れたりするため。
     ページ遷移だけをそのままネットに流し、それ以外は素通しする。
   ============================================================ */

/* プッシュ通知（OneSignal）の受け取り役。これが無いと通知が届かない */
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
  // ページ遷移以外（画像・動画・音源・CSS・JS）はブラウザに任せる
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request));
});
