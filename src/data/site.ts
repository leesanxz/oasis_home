// 株式会社オアシス情報システムズ — サイト共通データ
// 出典凡例:
//   [実] 旧サイト/法人公開情報/個人情報PDF に基づく確定情報
//   [案] 当方で作成した提案コピー（要確認・差し替え可）
// ※ 実在の取引先名・具体的な実績数値・認証(Pマーク等)・代表者個人の発言は
//   事実確認できないため記載していません。必要に応じてご提供ください。

export const SITE = {
  name: '株式会社オアシス情報システムズ',
  nameEn: 'Oasis Information Systems Inc.',
  brand: 'OiS',
  tagline: '情報技術で、ビジネスに潤いを。', // [案]
  description:
    '株式会社オアシス情報システムズは、ソフトウェア開発の受託、クラウドサービスの構築・提案、人材リソースサービスを通じて、お客様のビジネスを支えるITパートナーです。',
  url: 'https://oasisis.co.jp',
  locale: 'ja_JP',
} as const;

// ブランドカラー（旧ロゴ logo23.png から抽出）[実]
export const COLORS = {
  blue: '#2A86C0',
  green: '#98C727',
} as const;

export const COMPANY = {
  name: '株式会社オアシス情報システムズ',
  corporateNumber: '8010601051425', // [実]
  established: '2017年4月', // [実]
  establishedYear: 2017,
  capital: '600万円', // [実]
  representatives: [
    { title: '代表取締役', name: '李 雄' }, // [実]
    { title: '取締役', name: '車 光義' }, // [実]
  ],
  postalCode: '101-0051', // [実]
  address: '東京都千代田区神田神保町一丁目64番地 神保町ビル5F', // [実]
  addressLine1: '東京都千代田区神田神保町一丁目64番地',
  addressLine2: '神保町ビル5F',
  tel: '03-5577-4161', // [実]
  privacyEmail: 'privacy@oasisis.co.jp', // [実]
  facebook: 'https://www.facebook.com/oasis.info', // [実]
  access: '東京メトロ半蔵門線・都営三田線・新宿線「神保町駅」より徒歩圏内', // [案]
} as const;

// ヒーロー直下の指標ストリップ（事実ベースのみ）[実/案]
export const STATS = [
  { value: '2017', unit: '年', label: 'Founded', note: '設立' },
  { value: '3', unit: '領域', label: 'Business', note: '事業領域' },
  { value: '東京', unit: '神保町', label: 'Tokyo', note: '所在地' },
  { value: 'One', unit: 'Stop', label: 'Support', note: '一貫対応' },
] as const;

// 事業内容 [実(事業名)/案(説明)]
export const SERVICES = [
  {
    id: 'software',
    no: '01',
    title: 'ソフトウェア開発受託',
    titleEn: 'SOFTWARE DEVELOPMENT',
    summary:
      '業務システムからWebアプリケーションまで、要件定義・設計・開発・テスト・保守までを一貫してご提供。お客様の課題に寄り添い、確かな技術で形にします。',
    points: [
      '業務 / 基幹システム開発',
      'Web・クラウドアプリケーション開発',
      '要件定義から運用・保守までワンストップ',
      'アジャイル / ウォーターフォール両対応',
    ],
    illo: 'software',
  },
  {
    id: 'cloud',
    no: '02',
    title: 'クラウドサービス構築・提案',
    titleEn: 'CLOUD SOLUTIONS',
    summary:
      'クラウド環境の設計・構築から運用・最適化までを支援。コストと拡張性のバランスを見極め、お客様に最適なクラウド活用をご提案します。',
    points: [
      'クラウド設計・構築（AWS / Azure / GCP）',
      'オンプレミスからの移行支援',
      'インフラ運用・監視・コスト最適化',
      'セキュリティを考慮した基盤構築',
    ],
    illo: 'cloud',
  },
  {
    id: 'resource',
    no: '03',
    title: '人材リソースサービス',
    titleEn: 'IT RESOURCE',
    summary:
      '豊富な技術者ネットワークを活かし、プロジェクトに最適なITエンジニアをご紹介。体制づくりから増員まで、お客様の開発を人の面から支えます。',
    points: [
      'プロジェクトに最適なエンジニアの紹介',
      '開発体制の構築・増強支援',
      '幅広い技術領域・経験レベルに対応',
      '長期・短期いずれのニーズにも柔軟対応',
    ],
    illo: 'resource',
  },
] as const;

// 選ばれる理由 [案]
export const STRENGTHS = [
  {
    icon: 'flow',
    title: '一貫対応のワンストップ体制',
    text: '開発・クラウド・人材の3領域を自社で完結。上流から運用まで切れ目なく伴走し、窓口の一本化でスピードと品質を両立します。',
  },
  {
    icon: 'shield',
    title: '情報セキュリティへの徹底',
    text: '個人情報保護方針・各種規程を策定し、組織的・人的・物理的・技術的の各面で安全管理措置を徹底。安心してお任せいただける体制です。',
  },
  {
    icon: 'spark',
    title: '技術と人を大切にする姿勢',
    text: '“オアシス”の名のとおり、人と技術の力を信じ、丁寧な対話を重視。お客様の事業に長く寄り添うパートナーを目指します。',
  },
] as const;

// 開発の進め方 [案]
export const PROCESS = [
  { no: '01', title: 'ヒアリング・ご相談', text: '課題やご要望を丁寧にお伺いし、目的とゴールを明確にします。' },
  { no: '02', title: '要件定義・ご提案', text: '最適な技術・体制・スケジュールをご提案。お見積りを提示します。' },
  { no: '03', title: '設計・開発', text: '設計から実装・テストまで、品質を担保しながら開発を進めます。' },
  { no: '04', title: '納品・運用保守', text: 'リリース後も継続的に運用・保守を支援し、改善を続けます。' },
] as const;

// 対応技術（カテゴリ別）[案] ※実際の対応範囲に合わせて調整してください
export const TECH_GROUPS = [
  { category: '言語', items: ['Java', 'Python', 'PHP', 'JavaScript', 'TypeScript', 'C# / .NET'] },
  { category: 'フレームワーク / ライブラリ', items: ['React', 'Vue.js', 'Node.js', 'Spring', 'Laravel'] },
  { category: 'クラウド / インフラ', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Linux'] },
  { category: 'データベース', items: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'] },
  {
    category: 'AI / データ活用',
    items: ['生成AI・LLM活用', '機械学習（ML）', '自然言語処理（NLP）', 'RAG / AIエージェント', 'データ分析'],
  },
] as const;

// 採用: 働く環境・カルチャー [案]
export const CULTURE = [
  { icon: 'growth', title: '成長できる環境', text: '幅広い技術領域のプロジェクトに挑戦でき、エンジニアとしてのスキルを着実に伸ばせます。' },
  { icon: 'team', title: '人を大切にする文化', text: '“オアシス”の名のとおり、人を大切にし、相談しやすい風通しのよい環境を重視しています。' },
  { icon: 'balance', title: '多様な働き方', text: 'プロジェクトや個々の事情に応じた柔軟な働き方を大切にし、長く活躍できる環境を整えています。' },
] as const;

// 会社沿革（要確認: 旧サイトDBから取得不可。公開情報をもとに再構成）[案/実]
export const HISTORY = [
  { year: '2017', month: '4月', text: '株式会社オアシス情報システムズを設立（東京都千代田区神田神保町）' },
  { year: '2017', month: '', text: 'ソフトウェア開発受託事業を開始' },
  { year: '2019', month: '', text: 'クラウドサービスの構築・提案、人材リソースサービスを拡充' },
  { year: '2023', month: '6月', text: '個人情報保護方針を改定（2023年6月7日制定）' },
] as const;

// 採用オンライン応募フォーム（XServer上のPHPメール送信ハンドラ）
// ※ public/form/apply.php が処理。送信先は apply.php 内の $TO（info@oasisis.co.jp）。
//   XServer公開後に動作（GitHub PagesではPHPが動かないため送信テスト不可）。
export const FORM = {
  endpoint: '/form/apply.php',
} as const;

// グローバルナビゲーション（URLは旧サイト構造を踏襲しSEOを維持）
export const NAV = [
  { label: '私たちについて', href: '/#about' },
  { label: '事業内容', href: '/#services' },
  { label: '選ばれる理由', href: '/#strengths' },
  { label: '会社情報', href: '/#company' },
  { label: '採用情報', href: '/recruit_top/' },
] as const;
