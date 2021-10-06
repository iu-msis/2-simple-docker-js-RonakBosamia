<?php
// require 'common.php';
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM books';
$vars = [];

//if (isset($_GET['books'])) {
// This is an example of a parameterized query
//$sql = 'SELECT * FROM __ WHERE id = ?'; //offer and studentID should be changed for book table if studnet var passed - only that one else all of them
//$vars = [ $_GET['student'] ]; //in browser realting to ^ whatever you type in the url ...8080/api/offer/?student=2
//}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT); //patients/ whwat we are printing

// Step 4: Output
header('Content-Type: application/json');
echo $json;