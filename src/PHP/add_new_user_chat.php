<?php 
    $response = array();
    $user = array();
   
	$date = date('d-m-Y');
	
    require 'db_config.php';
    $con = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
    $con->set_charset('utf8');
	
	//создаем пользователя	
	$result = $con->query("INSERT INTO users(date) VALUES('$date')"); 
	$user_id = mysqli_insert_id($con);
	$user["id"] = $user_id;

	//создаем чат	
	$resultChat = $con->query("INSERT INTO chats(user_id, date) VALUES('$user_id', '$date')"); 
	$chat_id = mysqli_insert_id($con);
	$user["chat_id"] = $chat_id;

	$response["user"] = $user;
	echo json_encode($response);
?>