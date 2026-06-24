// ============================================================
// Supabase 設定ファイル
// くみこが Supabase でプロジェクトを作ったら、ここに URL と anon key を貼り付け
// ============================================================

const SUPABASE_CONFIG = {
  // ↓ Supabase Dashboard → Settings → API からコピー
  url: '',           // 例: 'https://abcdefg.supabase.co'
  anonKey: '',       // 例: 'eyJhbGciOiJI...' (anon public key)

  // 接続が有効か（url/key 両方あれば true）
  get enabled(){ return !!(this.url && this.anonKey); }
};
