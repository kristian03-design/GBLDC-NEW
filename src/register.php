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
if (!isset($_SESSION['otp']) || !isset($_SESSION['otp_expires']) || time() > $_SESSION['otp_expires']) {
    die("OTP expired or not set. Please request a new OTP.");
}

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
  unset($_SESSION['otp_expires']);
  unset($_SESSION['password']);
  unset($_SESSION['confirm_password']);
  unset($_SESSION['otp_email']);
  unset($_SESSION['otp']);
  
  // Redirect to login page or user landing page
  header("Location: user-landingpage.php");
  exit();
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
