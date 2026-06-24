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
