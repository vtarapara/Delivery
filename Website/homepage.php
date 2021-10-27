<?php
include 'calendar.php';

$row = 1;
$month = date('Y')."-".date('m');//Default to current month

if (isset($_POST['month'])) {
	$calendar = new Calendar($_POST['month']);
	$month = $_POST['month'];
}
else {
	$calendar = new Calendar($month);
}


if (($handle = fopen("data.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    $num = count($data);
	
	$time = $data[3];
	//$color explode(":",$time); //<--Make color dependant on time?? 
	
	
  	$calendar->add_event($data[0] . " -- " . $data[1], $data[2],1,$color);
   
 }
 
 
 
 
 
 
 fclose($handle);
}




?>

<html>
    
 
<head>
	<meta charset="utf-8">
	<title>Event Calendar</title>
	<link href="style.css" rel="stylesheet" type="text/css">
	<link href="calendar.css" rel="stylesheet" type="text/css">
</head>
<body>
    <nav class="navtop">
    	<div>
    		<h1>Event Calendar</h1>
			
		
			
    	</div>
    </nav> 
	
	<a href='form.php' id="NewButton">New Event + </a>
	

	
	<div id="calControls">
		
	
 	<form method='POST' id="MonthForm" action='homepage.php'>
	<?php echo "<input type='month' id='start' name='month' value=".$month.">";?> 
    <input type='submit' value='Change Month'>
	</form>
	</div>
	
	
	
	<div class="content home">
		<?=$calendar?>
	</div>
 
 
 
 <!-- The Modal -->
 <div id="myModal" class="modal">

   <!-- Modal content -->
   <div class="mmodal-content">
     <span class="close">&times;</span>
     <p>Some text in the Modal..</p>
   </div>

 </div>
 
 
 <script>
	 
	 
	 var modal = document.getElementById("myModal");

	 // Get the button that opens the modal

	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];

	 // When the user clicks on the button, open the modal
	 function display() {
	   modal.style.display = "block";
	 }

	 // When the user clicks on <span> (x), close the modal
	 function hide() {
	   modal.style.display = "none";
	 }

	 // When the user clicks anywhere outside of the modal, close it
	 window.onclick = function(event) {
	   if (event.target == modal) {
	     modal.style.display = "none";
	   }
	 }
	 
	 </script>
 
 
  </html>