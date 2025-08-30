<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get Facebook data
$email = $_POST['email'] ?? '';
$name = $_POST['name'] ?? '';

if (!$email || !$name) {
  die("Missing Facebook data.");
}

// Check if user already exists and fetch name if exists
$sql = "SELECT id, name FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
  // User exists, log them in (set session, etc.)
  $stmt->bind_result($id, $db_name);
  $stmt->fetch();
  $_SESSION['email'] = $email;
  $_SESSION['user_id'] = $id;
  $_SESSION['user_name'] = $db_name ?: $name; // Use DB name if available, else Facebook name
  echo "Welcome back! Logged in with Facebook.";
} else {
  // Create new user (no password, since Facebook handles auth)
  $sql = "INSERT INTO users (email, name, password) VALUES (?, ?, '')";
  $insert_stmt = $conn->prepare($sql);
  $insert_stmt->bind_param("ss", $email, $name);
  if ($insert_stmt->execute()) {
    $_SESSION['email'] = $email;
    $_SESSION['user_id'] = $insert_stmt->insert_id;
    $_SESSION['user_name'] = $name;
    echo "Account created and logged in with Facebook!";
  } else {
    echo "Error: " . $insert_stmt->error;
  }
  $insert_stmt->close();
}

$stmt->close();
$conn->close();
?>