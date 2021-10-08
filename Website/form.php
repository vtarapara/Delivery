<?php



if (isset($_POST['submit'])) {
	
	$name = $_POST['name'];
	$descrip = $_POST['descrip'];
	$date = $_POST['date'];
	
	$fp = fopen('data.csv', 'a+');
	fputcsv($fp, array($name,$descrip,$date));
	fclose($fp);


}








?>


<html>

<form method="post" name="form" enctype="multipart/form-data">
    <input type="text" name="name" id="name" placeholder="Company Name" required/>
    <input type="text" name="descrip" id="descrip" placeholder="Delivery Description" required/>
    <input type="text" name="date" id="date" placeholder="Delivery Date" required/>
    <input type="submit" name="submit" value="Send" onclick="myFunction()"/>
</form>


<script>
	
	
</script>




<html>


