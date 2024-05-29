<?php 
  $response = array();
  $_POST = json_decode(file_get_contents('php://input'), true);

 if (isset($_POST['chat_id'])) {

 	$chat_id = $_POST['chat_id'];

	require 'db_config.php';
	$con = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
	$con->set_charset('utf8');
	
	$result = $con->query("SELECT * from messagesChat Where `chat_id`=$chat_id");

	if ($result->num_rows > 0) {
	    $response["messeges"] = array();
	
		while ($row = $result->fetch_assoc()) {
				$row["id"] = intval($row["id"]);
				$row["chat_id"] = intval($row["chat_id"]);
				$row["user_id"] = intval($row["user_id"]);
				$row["type"] = intval($row["type"]);
							
				array_push($response["messeges"], $row);
		}

		$response["success"] = 1;
	    $response["message"] = "OK"; 
	    $response["messageRows"] = $chat_id; 
	    echo json_encode($response);
		}
	else {
	    $response["success"] = 0;
	    $response["message"] = "No chats found"; 
	    echo json_encode($response);
	}
	$con->close();
} else {
	    $response["success"] = 0;
	    $response["message"] = "Error"; 
	    echo json_encode($response);
	}
?>
