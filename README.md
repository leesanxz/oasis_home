# 株式会社オアシス情報システムズ コーポレートサイト

[oasisis.co.jp](https://oasisis.co.jp/) のリニューアル版。**Astro（静的サイトジェネレーター）** で構築し、旧WordPressサイトを置き換えます。

- ⚡ 静的サイト（高速・高セキュリティ・更新負担ゼロ）
- 📱 レスポンシブ（スマホ最適）
- 🔍 SEO対応（sitemap / canonical / OGP / 旧URL構造を踏襲）
- 🚀 `main` への push で XServer へ自動デプロイ（GitHub Actions）

---

## 技術スタック

| 項目 | 内容 |
| --- | --- |
| フレームワーク | [Astro](https://astro.build/) v5（出力: 静的HTML） |
| 言語 | TypeScript / Astro コンポーネント |
| スタイル | 素のCSS（`src/styles/global.css` にデザインシステム） |
| ホスティング | XServer（`public_html` に成果物を配置） |
| デプロイ | GitHub Actions → FTPS 自動アップロード |

ブランドカラー：青 `#2A86C0` ／ 緑 `#98C727`（旧ロゴ「OiS」から抽出）

---

## ローカル開発

```bash
npm install        # 依存関係のインストール
npm run dev        # 開発サーバー（http://localhost:4321）
npm run build      # 本番ビルド（dist/ に出力）
npm run preview    # ビルド結果をローカル確認
```

Node.js 20 以上を推奨。

---

## ディレクトリ構成

```
src/
  data/site.ts          会社情報・事業内容・ナビ・フォーム設定（中央データ）
  layouts/Base.astro    全ページ共通レイアウト（head/SEO/ヘッダー/フッター）
  components/            Header / Footer
  pages/
    index.astro                    トップ（ヒーロー / 会社概要 / 事業内容 / 採用CTA）
    company/history.astro          会社沿革        → /company/history/
    recruit_top/index.astro        採用情報        → /recruit_top/
    recruit_top/subscription.astro オンライン応募  → /recruit_top/subscription/
    privacy/index.astro            個人情報保護方針 → /privacy/
    404.astro                      404ページ
  styles/global.css     デザインシステム
public/
  assets/               ロゴ画像
  docs/                 個人情報関連PDF（旧サイトから移植）
  favicon.svg, robots.txt
```

URL構造は旧サイトを踏襲しSEO評価を維持しています。

---

## ⚠️ 公開前に対応が必要な項目

1. **採用応募フォームの送信先設定**
   `src/data/site.ts` の `FORM.endpoint` に送信先URL（Formspree等の外部フォーム、
   またはXServerメールフォームのエンドポイント）を設定してください。
   未設定の場合、フォームは送信を行わず設定を促すメッセージを表示します。

2. **デプロイ用 GitHub Secrets の登録**（自動デプロイを使う場合）
   リポジトリの Settings → Secrets and variables → Actions に以下を登録：
   - `FTP_SERVER` … XServerのFTPホスト（例: `svXXXX.xserver.jp`）
   - `FTP_USERNAME` … FTPアカウント名
   - `FTP_PASSWORD` … FTPパスワード
   - （任意）変数 `FTP_SERVER_DIR` … 公開ディレクトリ
     （デフォルト `/oasisis.co.jp/public_html/`）

3. **内容の最終確認（一部は要確認）**
   旧サイトの本文はWordPressのデータベース内にあり、今回のファイル一式
   （`public_html`）には含まれていませんでした。以下は**公開情報をもとに
   再構成**しているため、正式な文言・項目をご確認ください：
   - トップページのキャッチコピー／紹介文
   - 事業内容の説明文（`src/data/site.ts` の `SERVICES`）
   - 会社沿革（`src/data/site.ts` の `HISTORY`）
   - 採用情報ページの本文

   ※ 会社概要（法人番号・設立・資本金・代表者・所在地・TEL）と
   個人情報保護方針・取扱い（PDF由来）は実データに基づいています。

---

## デプロイ

`main` ブランチへ push すると `.github/workflows/deploy.yml` が
ビルド → FTPS で `public_html` へアップロードします。手動実行も可能です。

WordPress資産（`wp-*`）やメールフォーム等のリポジトリ管理外ファイルは
削除しないよう除外設定済みです。WordPressを完全撤廃する際は、
XServer側で旧ファイルの整理を別途行ってください。

---

## 旧サイトについて

旧サイトは WordPress（テーマ: TCD `nextage_tcd021`）+ XServer で運用されていました。
解析用エクスポート（`oasisis.co.jp_public_html.tar.gz`）は `main` ブランチに
ありますが、ビルド成果物には含めません（`.gitignore` で除外）。
