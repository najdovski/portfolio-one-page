<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
$restJson = file_get_contents('php://input');
$_POST = json_decode($restJson, true);

if ($_POST['name'] && $_POST['email'] && $_POST['subject'] && $_POST['message']) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = '(XUNTA) '.$_POST['subject'].' - Email: '.$email;
    $message = $_POST['message'];

    mail('markarrow300@gmail.com', $subject ,$message);
    echo json_encode(['emailSent' => true]);
} else {
    echo json_encode(['emailSent' => false]); 
}
?>
