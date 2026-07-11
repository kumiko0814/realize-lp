// ============================================================
// Supabase 設定ファイル
// くみこが Supabase でプロジェクトを作ったら、ここに URL と anon key を貼り付け
// ============================================================

const SUPABASE_CONFIG = {
  url: 'https://inrvprlyobghviklulcv.supabase.co',
  anonKey: 'sb_publishable_ZrCNcsRHMci-l7Fns8QtIA_X22XZGJp',

  // 接続が有効か（url/key 両方あれば true）
  get enabled(){ return !!(this.url && this.anonKey); }
};

// ============================================================
// Re:alize OKR → スプレッドシート 自動同期
// ============================================================
// GAS Web App の URL をここに貼る（デプロイ後に更新）
// くみこの手順：
//  1. scripts/realize-okr-sync/gas_webhook.gs を https://script.google.com に貼る
//  2. デプロイ → ウェブアプリ → アクセス「全員」→ URL取得
//  3. その URL を下の gasWebhookUrl に貼る
const OKR_SYNC_CONFIG = {
  gasWebhookUrl: '', // ← ここに GAS URL を貼る（空だと同期しない）
  get enabled(){ return !!this.gasWebhookUrl; }
};
