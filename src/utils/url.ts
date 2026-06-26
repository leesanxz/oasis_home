// 内部リンク/アセットを base（/ または /oasis_home/）対応に変換するヘルパー。
// 外部URL・tel:・mailto:・ページ内アンカー(#...)はそのまま返す。
const BASE = import.meta.env.BASE_URL; // 例: '/' または '/oasis_home/'

export function url(path: string): string {
  if (/^(https?:|tel:|mailto:|#|data:)/.test(path)) return path;
  const clean = path.replace(/^\/+/, '');
  return (BASE.endsWith('/') ? BASE : BASE + '/') + clean;
}
