<?php

// Retrieve data from the request body
$data = json_decode(file_get_contents("php://input"));

$response = "Hello ".$data->fullName." to the ".$data->site.". ";

// Set the response headers
header("Content-Type: application/json");

echo json_encode($response);

?>