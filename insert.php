<?php

header('Content-Type: application/json'); 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers , Content-Type ,Access-Control-Allow-Methods , Authorization , X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['sname'];
$age = $data['sage'];
$city = $data['scity'];


include "config.php";

$sql = "INSERT INTO `student` (`student_name`, `age`, `city`) VALUES ('{$name}', '{$age}', '{$city}');";



if(mysqli_query($conn, $sql)) {

echo json_encode(array('message' => '🤩 डेटाबेस में सफलतापूर्वक डाला गया 💾', 'status' => true));

}else{

echo json_encode(array('message' => '😔 डेटाबेस में सफलतापूर्वक सम्मिलित नहीं किया  गया 😭',  'status' => false));

}
?>
