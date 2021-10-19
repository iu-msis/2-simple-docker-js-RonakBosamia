<?php

// if (($_SERVER['REQUEST_METHOD'] ?? '') != 'POST') {
//     header($_SERVER["SERVER_PROTOCOL"] . " 405 Method Not Allowed");
//     exit;
// }

try { // basically like an if else -- tries first thing if 
    $_POST = json_decode( // super global which takes a JSON string and converts it into a PHP variable 
                file_get_contents('php://input'), //get all stuff from body of request
                true, //if true -- allow answers at depth 2 
                2,
                JSON_THROW_ON_ERROR //flag - sending exception to the catch if error found 
            );
} catch (Exception $e) { //will be run if above code throws an exception or erro "e" is just exception in catch block name- can be anything 
    header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request"); //shows to user that there was an error
    // print_r($_POST); -- prints the information about a variable in a more human-readable way.
    // echo file_get_contents('php://input'); - Reads entire file into a string
    exit; //closes out of try can also use die
}

require("class/DbConnection.php");

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection(); //makes connection w. database 

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare( //statement template for db server - execute sql query -calling prepare function into a pdo statement 
  'INSERT INTO offer (id, Title, Author, YrPublished, Publisher,PageCount,MSRP) 
  VALUES (?, ?, ?, ?, ?,?,?)' //placeholder for data - parameterized query // establishes the variabels which input will go into
);

$stmt->execute([ //carries out the input and works to pass to db  - run it 
  $_POST['id'], //data from "?" above is passed from here
  $_POST['Title'],
  $_POST['Author'],
  $_POST['YrPublished'],
  $_POST['Publisher'],
  $_POST['PageCount'],
  $_POST['MSRP']
  
]);

// Get auto-generated PK from DB
// https://www.php.net/manual/en/pdo.lastinsertid.php
// $pk = $db->lastInsertId();  - to get primary key ID back out after running query 

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other'); //and use a get
header('Location: ../offer/?student=' . $_POST['id']); //redirect to offer api to get all offers for student
