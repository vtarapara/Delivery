<?php
include 'Calendar.php';

$row = 1;
$calendar = new Calendar('2021-9');

echo "<h1> Calendar </h1>"; 
if (($handle = fopen("data.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    $num = count($data);
	   $calendar->add_event($data[0] . " -- " . $data[1], $data[2]);	   
   
 }
 
 
 
 echo $calendar;
 
 
 fclose($handle);
}

?>

<html>

  <link rel="stylesheet" href="calendar.css">
  </html>