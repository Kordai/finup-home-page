<?php 
  $response = array();
  $_POST = json_decode(file_get_contents('php://input'), true);

 if (isset($_POST['mycompany'])) {

 	$mycompany = implode(',', $_POST['mycompany']);
 	$idUser = $_POST['id'];
	require 'db_config.php';
	$con = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
	$con->set_charset('utf8');
	
	$resultChats = $con->query("SELECT * from chats Where client_id IN ($mycompany)");
 
	if ($resultChats->num_rows > 0) {
	    $response["chats"] = array();
	    $response["users"] = array();
	    $response["messeges"] = array();
	    $response["status"] = array();
		$chatId = 0;

	  while ($row = $resultChats->fetch_assoc()) {
		$row["chat_id"] = intval($row["chat_id"]);
		$row["client_id"] = intval($row["client_id"]);
		$chatId = $row["chat_id"];
  	  	array_push($response["chats"], $row);
 	  }

	   $resultUsers = $con->query("SELECT * from usersChats Where chat_id IN ($chatId)");
	   
	   if ($resultUsers->num_rows > 0) {
	
			while ($row = $resultUsers->fetch_assoc()) {
				$row["id"] = intval($row["id"]);
				$row["chat_id"] = intval($row["chat_id"]);
				$row["user_id"] = intval($row["user_id"]);
				$users = $row["user_id"];
				$resultUser = $con->query("SELECT * from users Where id IN ($users)");
				if ($resultUser->num_rows > 0) {
					while ($row2 = $resultUser->fetch_assoc()) {
						$row["firstName"] = $row2["firstName"];
						$row["lastName"] = $row2["lastName"];
					}
				}

				array_push($response["users"], $row);
			}
		}

		$resultMessages = $con->query("SELECT * from messagesChat Where chat_id IN ($chatId)");
		$messagesId = array();

	   if ($resultMessages->num_rows > 0) {
	
			while ($row = $resultMessages->fetch_assoc()) {
				$row["id"] = intval($row["id"]);
				$row["chat_id"] = intval($row["chat_id"]);
				$row["user_id"] = intval($row["user_id"]);
				$row["content"] = json_decode($row["content"]);
				$mesId = $row["id"];
				array_push($messagesId, $mesId);
				array_push($response["messeges"], $row);
			}
		}

		$messagesId = implode(',', $messagesId);

		$resultStatus = $con->query("SELECT * from messageStatus Where message_id IN ($messagesId)");

	   if ($resultStatus->num_rows > 0) {
	
			while ($row = $resultStatus->fetch_assoc()) {
				$row["id"] = intval($row["id"]);
				$row["message_id"] = intval($row["message_id"]);
				$row["user_id"] = intval($row["user_id"]);
				$row["status"] = intval($row["status"]);
				
				array_push($response["status"], $row);
			}
		}

  	$response["success"] = 1; 	
  	$response["message"] = $messagesId; 
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
