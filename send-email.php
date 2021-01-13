<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
$restJson = file_get_contents('php://input');
$_POST = json_decode($restJson, true);

if ($_POST['name'] && $_POST['email'] && $_POST['subject'] && $_POST['message']) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = '(najdovski.dev) '.$_POST['subject'].' - From: '.$email;
    $message = $_POST['message'];

    mail('kristijannds@gmail.com', $subject ,$message);
    echo json_encode(['emailSent' => true]);
} else {
    echo json_encode(['emailSent' => false]); 
}
?>
