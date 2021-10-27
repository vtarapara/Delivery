<?php 


$file_name = "data.csv"; // My file name is 1_23.csv
$file_path = "./".$file_name;
$file_handle = fopen($file_path, "r");

$result = array();

if ($file_handle !== FALSE) {

    while (($data = fgetcsv($file_handle)) !== FALSE) {

/*	for($i = 0;$i < $count($data); $i++) {
		//$data[$i] = $i . $data[$i];
		echo "hi";
	}

*/
	array_push($result, $data);

    }
    fclose($file_handle);
}

// print_r($result); // I see all data(s) except the header

$json = json_encode($result);
echo $json;

?>
