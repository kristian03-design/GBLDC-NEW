<?php
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

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
$otp = $_POST['otp'];

// Check if passwords match
if ($password !== $confirm_password) {
  die("Passwords do not match!");
}

// Verify OTP
if ($otp !== $_SESSION['otp']) {
  die("Invalid OTP!");
}

// Hash password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert data
$sql = "INSERT INTO users (email, password, otp) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $email, $hashed_password, $otp);

if ($stmt->execute()) {
  // Clear OTP session data
  unset($_SESSION['otp']);
  unset($_SESSION['email']);

  // Redirect to user landing page
  header("Location: /src/user-landingpage.html");
  exit();
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
