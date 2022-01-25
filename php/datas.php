<?php

$servername = "localhost";
$username = "gogo";
$password = "gogo";
$dbname = "gogo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM datas";
$result = $conn->query($sql);
$rows = array();

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $rows[] = $row; 
  }
} else {
  echo "0 results";
}

echo json_encode($rows);
$conn->close();