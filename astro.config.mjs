import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 本番(XServer)は site=oasisis.co.jp / base=/ がデフォルト。
// プレビュー(GitHub Pages)はワークフローから環境変数で上書きする。
//   SITE_URL  例: https://leesanxz.github.io
//   SITE_BASE 例: /oasis_home
const site = process.env.SITE_URL || 'https://oasisis.co.jp';
const base = process.env.SITE_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  // 末尾スラッシュ付きURL（/company/history/）を生成し旧サイト構造を踏襲
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  compressHTML: true,
});
