<?php
/**
 * 採用オンライン応募 メール送信ハンドラ（XServer / PHP）
 * 送信先: info@oasisis.co.jp
 * フォーム(subscription.astro)から fetch でPOSTされ、JSONを返します。
 * ※ 静的ホスティング(GitHub Pages)ではPHPは実行されません。XServer公開後に動作します。
 */

mb_language('Japanese');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json; charset=UTF-8');

$TO   = 'info@oasisis.co.jp';            // 応募の届け先
$FROM = 'info@oasisis.co.jp';            // 差出人（同一ドメイン＝なりすまし扱い回避）

function respond(bool $ok, string $message, int $code = 200): void {
  http_response_code($code);
  echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  respond(false, '不正なリクエストです。', 405);
}

// --- スパム対策: ハニーポット（人間は空のまま。入っていたらボットとみなし破棄） ---
if (trim($_POST['company'] ?? '') !== '') {
  respond(true, '送信が完了しました。'); // ボットには成功を装って静かに破棄
}

// --- 入力取得 ---
$name     = trim($_POST['name'] ?? '');
$email    = trim($_POST['email'] ?? '');
$tel      = trim($_POST['tel'] ?? '');
$position = trim($_POST['position'] ?? '');
$message  = trim($_POST['message'] ?? '');
$agree    = $_POST['agree'] ?? '';

// --- バリデーション ---
$missing = [];
if ($name === '')  $missing[] = 'お名前';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $missing[] = '正しいメールアドレス';
if ($message === '') $missing[] = '志望動機・ご質問など';
if ($agree === '')   $missing[] = '個人情報の取扱いへの同意';
if (!empty($missing)) {
  respond(false, '入力内容をご確認ください（' . implode('・', $missing) . '）。', 422);
}

// --- メールヘッダインジェクション対策 ---
foreach ([$name, $email, $tel, $position] as $v) {
  if (preg_match('/[\r\n]/', $v)) respond(false, '不正な入力が含まれています。', 422);
}

// --- 本文 ---
$subject = '【採用応募】' . $name . ' 様より';
$body  = "採用オンライン応募フォームより、新しい応募がありました。\n\n";
$body .= "■ お名前\n{$name}\n\n";
$body .= "■ メールアドレス\n{$email}\n\n";
$body .= "■ 電話番号\n" . ($tel !== '' ? $tel : '（未入力）') . "\n\n";
$body .= "■ 応募職種\n" . ($position !== '' ? $position : '（未選択）') . "\n\n";
$body .= "■ 志望動機・ご質問など\n{$message}\n\n";
$body .= "--------------------------------------\n";
$body .= '送信日時: ' . date('Y-m-d H:i:s') . "\n";
$body .= 'IPアドレス: ' . ($_SERVER['REMOTE_ADDR'] ?? '不明') . "\n";

// --- ヘッダ ---
$headers  = 'From: ' . mb_encode_mimeheader('オアシス情報システムズ 採用係') . " <{$FROM}>\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";

// 第5引数: エンベロープFrom（SPF対策・XServer）
$ok = mb_send_mail($TO, $subject, $body, $headers, '-f ' . $FROM);

if ($ok) {
  respond(true, 'ご応募ありがとうございます。内容を送信しました。担当者より追ってご連絡いたします。');
} else {
  respond(false, '送信に失敗しました。お手数ですが時間をおいて再度お試しいただくか、お電話にてご連絡ください。', 500);
}
