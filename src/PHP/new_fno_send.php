<?php

 $_POST = json_decode(file_get_contents('php://input'), true);

 if (isset($_POST)) {
    $recepient = "info@finup.kz";
    $sitename = "FinUP.kz";

    $email = trim($_POST["email"]);
    $firstName = trim($_POST["firstName"]);
    $lastName = trim($_POST["lastName"]);
    $phone = trim($_POST["phone"]);
    $fno = trim($_POST["fno"]);

    $pagetitle = "Новая заявка с сайта \"$sitename\", сдать налоговую форму!";
    $message = "Имя: $firstName \n Фамилия: $lastName \n ФНО: $fno \n Телефон: $phone \n Почта: $email ";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

    echo json_encode('OK'); 
 }
?>