<?php
/**
 * お問い合わせ メール送信ハンドラ（XServer / PHP）
 * 送信先: info@oasisis.co.jp
 * /contact/ のフォームから fetch でPOSTされ、JSONを返します。
 * ※ 静的ホスティング(GitHub Pages)ではPHPは実行されません。XServer公開後に動作します。
 */

mb_language('Japanese');
mb_internal_encoding('UTF-8');
header('Content-Type: application/json; charset=UTF-8');

$TO   = 'info@oasisis.co.jp';
$FROM = 'info@oasisis.co.jp';

function respond(bool $ok, string $message, int $code = 200): void {
  http_response_code($code);
  echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  respond(false, '不正なリクエストです。', 405);
}

// スパム対策: ハニーポット
if (trim($_POST['company'] ?? '') !== '') {
  respond(true, '送信が完了しました。');
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');
$agree   = $_POST['agree'] ?? '';

$missing = [];
if ($name === '')  $missing[] = 'お名前';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $missing[] = '正しいメールアドレス';
if ($subject === '') $missing[] = '表題';
if ($message === '') $missing[] = 'お問い合わせ内容';
if ($agree === '')   $missing[] = '個人情報の取扱いへの同意';
if (!empty($missing)) {
  respond(false, '入力内容をご確認ください（' . implode('・', $missing) . '）。', 422);
}

foreach ([$name, $email, $subject] as $v) {
  if (preg_match('/[\r\n]/', $v)) respond(false, '不正な入力が含まれています。', 422);
}

$mailSubject = '【お問い合わせ】' . $subject;
$body  = "ホームページのお問い合わせフォームより、お問い合わせがありました。\n\n";
$body .= "■ お名前\n{$name}\n\n";
$body .= "■ メールアドレス\n{$email}\n\n";
$body .= "■ 表題\n{$subject}\n\n";
$body .= "■ お問い合わせ内容\n{$message}\n\n";
$body .= "--------------------------------------\n";
$body .= '送信日時: ' . date('Y-m-d H:i:s') . "\n";
$body .= 'IPアドレス: ' . ($_SERVER['REMOTE_ADDR'] ?? '不明') . "\n";

$headers  = 'From: ' . mb_encode_mimeheader('オアシス情報システムズ お問い合わせ') . " <{$FROM}>\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";

$ok = mb_send_mail($TO, $mailSubject, $body, $headers, '-f ' . $FROM);

if ($ok) {
  respond(true, 'お問い合わせありがとうございます。内容を送信しました。担当者より追ってご連絡いたします。');
} else {
  respond(false, '送信に失敗しました。お手数ですが時間をおいて再度お試しいただくか、お電話にてご連絡ください。', 500);
}
