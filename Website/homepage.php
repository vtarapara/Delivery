<?php
include 'Calendar.php';

$row = 1;
$transdate = date('m-d-Y', time());
$month = date('m', strtotime($transdate));

if (isset($_POST['month'])) {
	$calendar = new Calendar($_POST['month']);
	$month = $_POST['month'];
}
else {
	$calendar = new Calendar($month);
}

echo "<h1> Calendar </h1>"; 
if (($handle = fopen("data.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    $num = count($data);
	   $calendar->add_event($data[0] . " -- " . $data[1], $data[2]);	   
   
 }
 
 
 
 
 
 
 echo "<form method='POST' action='homepage.php'>";
 echo "<input type='month' id='start' name='month' value='".$month."'>";
 echo "<input type='submit' value='Change Month'>";
 echo "</form>";
 echo $calendar;
 
 
 fclose($handle);
}




?>

<html>

  <link rel="stylesheet" href="calendar.css">
  
  
  
  <script>
	  function popup() {
		  alert("hi");
	  }
	 </script>
  </html>