<?php 
        $response = array();
        $_POST = json_decode(file_get_contents('php://input'), true);

    if (isset($_POST)) {

        $chat_id = $_POST['chat_id']; 
        $user_id = $_POST['user_id'];   
        $content = $_POST['content'];
        $type = $_POST['type'];
        $time = $_POST['time'];                
        $date = $_POST['date'];
    
        require 'db_config.php';
        $con = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
        $con->set_charset('utf8');

        $result = $con->query("INSERT INTO messagesChat(chat_id, user_id, content, type, time, date) 
                    VALUES('$chat_id', '$user_id', '$content', '$type', '$time', '$date')"); 

        if ($result) {
            $response["success"] = 1;
            $response["message"] = "Message successfully created.";     
            echo json_encode($response);
        } else {
            $response["success"] = 0;
            $response["message"] = "Oops! An error occurred.";     
            echo json_encode($response);
        }
    } else {
        $response["success"] = 0;
        $response["message"] = "Required field(s) is missing";    
        echo json_encode($response);
    }
    
?>