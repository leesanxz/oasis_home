// 株式会社オアシス情報システムズ — サイト共通データ
// 出典: 旧サイト公開情報 / 法人公開情報 / 個人情報関連PDF（リポジトリ public/docs/）
// ※「会社沿革」「採用」など一部の本文は旧サイトDBから取得できなかったため、
//   公開情報をもとに再構成しています（要確認: src/data/site.ts のコメント参照）。

export const SITE = {
  name: '株式会社オアシス情報システムズ',
  nameEn: 'Oasis Information Systems Inc.',
  brand: 'OiS',
  // oasis = 砂漠の中の水と緑。情報技術で企業に「潤い（成長の源）」を届ける。
  tagline: '情報技術で、ビジネスに潤いを。',
  description:
    '株式会社オアシス情報システムズは、ソフトウェア開発の受託、クラウドサービスの構築・提案、人材リソースサービスを通じて、お客様のビジネスを支えるITパートナーです。',
  url: 'https://oasisis.co.jp',
  locale: 'ja_JP',
} as const;

// ブランドカラー（旧ロゴ logo23.png から抽出）
export const COLORS = {
  blue: '#2A86C0',
  green: '#98C727',
} as const;

export const COMPANY = {
  name: '株式会社オアシス情報システムズ',
  corporateNumber: '8010601051425', // 法人番号
  established: '2017年4月',
  capital: '600万円',
  representatives: [
    { title: '代表取締役', name: '李 雄' },
    { title: '取締役', name: '車 光義' },
  ],
  postalCode: '101-0051',
  address: '東京都千代田区神田神保町一丁目64番地 神保町ビル5F',
  tel: '03-5577-4161',
  privacyEmail: 'privacy@oasisis.co.jp',
  facebook: 'https://www.facebook.com/oasis.info',
} as const;

// 事業内容（出典: 旧サイト公開情報）
export const SERVICES = [
  {
    id: 'software',
    title: 'ソフトウェア開発受託',
    summary:
      '業務システムからWebアプリケーションまで、要件定義・設計・開発・保守までを一貫してご提供します。',
    points: ['業務システム開発', 'Webアプリケーション開発', '要件定義〜保守の一貫対応'],
    icon: 'code',
  },
  {
    id: 'cloud',
    title: 'クラウドサービス構築・提案',
    summary:
      'クラウド環境の設計・構築から運用までを支援し、お客様に最適なクラウド活用をご提案します。',
    points: ['クラウド設計・構築', 'インフラ運用支援', '最適なクラウド活用の提案'],
    icon: 'cloud',
  },
  {
    id: 'resource',
    title: '人材リソースサービス',
    summary:
      '豊富な技術者ネットワークを活かし、プロジェクトに最適なITエンジニアをご紹介します。',
    points: ['ITエンジニアの紹介', 'プロジェクト体制の支援', '技術者ネットワークの活用'],
    icon: 'people',
  },
] as const;

// 会社沿革（要確認: 旧サイトDBから取得不可。公開情報をもとに再構成）
export const HISTORY = [
  { year: '2017年4月', text: '株式会社オアシス情報システムズ 設立' },
  { year: '2017年', text: 'ソフトウェア開発受託事業を開始' },
  { year: '2019年', text: 'クラウドサービスの構築・提案、人材リソースサービスを拡充' },
  { year: '2023年', text: '個人情報保護方針を改定（2023年6月7日制定）' },
] as const;

// 採用オンライン応募フォームの送信先（要設定）
// 送信処理が必要なため、外部フォームサービス（Formspree等）または
// XServerメールフォームのエンドポイントをここに設定してください。
// 未設定（空文字）の場合、フォームは送信を行わず設定を促すメッセージを表示します。
export const FORM = {
  // 例: 'https://formspree.io/f/xxxxxxxx'
  endpoint: '',
} as const;

// グローバルナビゲーション（URLは旧サイト構造を踏襲しSEOを維持）
export const NAV = [
  { label: '会社概要', href: '/#company' },
  { label: '事業内容', href: '/#services' },
  { label: '会社沿革', href: '/company/history/' },
  { label: '採用情報', href: '/recruit_top/' },
  { label: 'お問い合わせ', href: '/#contact' },
] as const;
