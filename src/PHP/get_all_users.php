<?php 
 
  $response = array();
  $_POST = json_decode(file_get_contents('php://input'), true);

 if (isset($_POST['users'])) {

 	$users = implode(',', $_POST['users']);
 	
	require 'db_config.php';
	$con = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
	$con->set_charset('utf8');
	
	$result = $con->query("SELECT * from users Where id IN ($users)");
 
	if ($result->num_rows > 0) {
	    $response["allUsers"] = array();
 
	  while ($row = $result->fetch_assoc()) {
        $row["id"] = intval($row["id"]);      		
        $row["mycompany"] = json_decode($row["mycompany"]);
		$row["account"] = intval($row["account"]); 
        $row["idGroup"] = json_decode($row["idGroup"]);
        $row["defaultGroup"] = intval($row["defaultGroup"]);      		
        $row["defaultKNP"] = intval($row["defaultKNP"]);      		
        $row["editProfile"] = boolval($row["editProfile"]);      		
        $row["esf"] = boolval($row["esf"]);      		
        $row["invoce"] = boolval($row["invoce"]);      		
        $row["idPoint"] = intval($row["idPoint"]);      		
        $row["idPointSelect"] = boolval($row["idPointSelect"]);         		
        $row["nakladnayAVR"] = boolval($row["nakladnayAVR"]);     
        $row["password"] = 0;   
        $row["userKey"] = 0;   

  	  array_push($response["allUsers"], $row);
 	  }

  	$response["success"] = 1; 	
  	$response["message"] = "OK"; 
 	echo json_encode($response);  
	} 
	else {
	    $response["success"] = 0;
	    $response["message"] = "No users found"; 
	    echo json_encode($response);
	}
	$con->close();
} else {
	    $response["success"] = 0;
	    $response["message"] = "Error"; 
	    echo json_encode($response);
	}
?>
