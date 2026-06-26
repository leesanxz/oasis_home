import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oasisis.co.jp',
  // 末尾スラッシュ付きURL（/company/history/）を生成し旧サイト構造を踏襲
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  compressHTML: true,
});
