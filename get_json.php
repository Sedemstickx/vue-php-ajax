<?php
header('Content-Type: application/json');

// Establish database connection.
$dbconn = mysqli_connect('localhost', 'root', '', 'vms');// db credentials

if (!$dbconn) {
    //if connection is unsuccessful show connection error.
    die('Connection error: ' . mysqli_connect_error());
}


$sql = "SELECT * from users";
$result = mysqli_query($dbconn,$sql);//run sql query with selected db connection
if(mysqli_num_rows($result) > 0)//if number of db table rows are more than 0 display the list
{
while ($row = mysqli_fetch_assoc($result)) //fetch results from database and return them in the form of associative arrays and display them
 {
  $rows[] = $row; 
 } 
}
 else{
   $rows = array("error" => "There is no data."); 
 }

echo json_encode($rows);
?>