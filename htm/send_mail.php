<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp-mail.outlook.com';
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->Username = 'profile.glad.so@outlook.com';
$mail->Password = 'so1glad0Pro2File';


$subject = $_POST['subject'];
$mail->Subject = ($subject == "" ? "Vistor From Gear Profile" : $subject);
$mail->From = $_POST['email'];
$mail->FromName = $_POST['name'];
$mail->addAddress('m@cheku.co', 'Cartoon Daemon');

$mail->Body = $_POST['message']."\n\n\n==============================================\n\n".$_POST['name']."<".$_POST['email'].">";
if(!$mail->send()) {
    echo '{result:failed}';
    echo "Error:".$mail->ErrorInfo;
} else {
    echo '{result:success}';
}
