<?php

header('Content-Type: application/json'); 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers , Content-Type ,Access-Control-Allow-Methods , Authorization , X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['sid'];
$name = $data['sname'];
$age = $data['sage'];
$city = $data['scity'];


include "config.php";

$sql = "UPDATE student SET student_name =  '{$name}', age = '{$age}', city = '{$city}' WHERE id = '{$id}'";



if(mysqli_query($conn, $sql)) {

echo json_encode(array('message' => '🥰 सफलतपूर्वक बदला गया 📝', 'status' => true));

}else{

echo json_encode(array('message' => 'कुछ तो गड़बड़ है जी', 'status' => false));

}
?>
