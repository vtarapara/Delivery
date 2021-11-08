<?php


if (isset($_POST['submit'])) {
	
	$name = $_POST['name'];
	$descrip = $_POST['descrip'];
	$date = $_POST['date'];
	$time = $_POST['time'];
	
	$toAdd = array($name,$descrip,$date,$time);
	
	$dupe = FALSE;
	if (($handle = fopen("data.csv", "r")) !== FALSE) {
	    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			if($data == $toAdd) {
				$dupe = TRUE;
			}
			
		}
	}
	
	if(!$dupe) {
	$fp = fopen('data.csv', 'a+');
	fputcsv($fp, $toAdd);
	fclose($fp);
	}
	else {
		echo "DID NOT ADD ITEM SINCE DUPLICATE ALREADY EXISTS";
	}
	
	header('Location: homepage.php');
	

}

?>


<html>
  <link rel="stylesheet" href="form.css">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Skanska.svg/1280px-Skanska.svg.png" alt="Skanska" class = "logo">
<h1> Schedule New Delivery: </h1>
<form method="post" name="form" enctype="multipart/form-data">
    <input type="text" name="name" id="name" placeholder="Company Name" required/>
    <input type="text" name="descrip" id="descrip" placeholder="Delivery Description" required/>
    <input type="date" name="date" id="date" placeholder="Delivery Date" required/>
    <input type="time" name="time" id="time" required/>
	
    <input type="submit" name="submit" value="Send" onclick="myFunction()"/>
</form>



<html>


