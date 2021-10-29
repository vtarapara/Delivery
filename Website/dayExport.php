<?php 


$file_name = "data.csv"; // My file name is 1_23.csv
$file_path = "./".$file_name;
$file_handle = fopen($file_path, "r");

$dateString = $_GET['date'];

$result = array();

if ($file_handle !== FALSE) {

$columns = array("Name","Descrip","Date","Time");

    while (($data = fgetcsv($file_handle)) !== FALSE) {


if(strcmp($data[2], $dateString) == 0) {
$arr = array($columns[0] => $data[0], 
            $columns[1] => $data[1], 
             $columns[2] => $data[2], 
             $columns[3] => $data[3]); 


	array_push($result,array($data[2] => $arr));
	}    
}


    fclose($file_handle);
}

// print_r($result); // I see all data(s) except the header

$json = json_encode($result);
$json = trim($json, '[]');
$json =  str_replace("},{",",",$json);
echo $json;

?>

