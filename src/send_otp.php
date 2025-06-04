<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo "Database connection failed. Please try again later.";
    exit;
}

// Validate input
if (!isset($_POST['email']) || empty($_POST['email'])) {
    echo "Please provide an email address.";
    exit;
}

$email = trim($_POST['email']);

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Please enter a valid email address.";
    exit;
}

// Check if email already exists
$check_sql = "SELECT email FROM users WHERE email = ?";
$check_stmt = $conn->prepare($check_sql);
$check_stmt->bind_param("s", $email);
$check_stmt->execute();
$result = $check_stmt->get_result();

if ($result->num_rows > 0) {
    echo "This email is already registered. Please use a different email.";
    $check_stmt->close();
    $conn->close();
    exit;
}
$check_stmt->close();

// Generate 4-digit OTP
$otp = sprintf('%04d', mt_rand(1000, 9999));

// Save OTP in session with expiration
$_SESSION['otp'] = $otp;
$_SESSION['otp_email'] = $email;
$_SESSION['otp_expires'] = time() + 300; // 5 minutes expiration

// For development/testing - display OTP directly
echo "OTP sent successfully! Your verification code is: $otp";

// Also log it for debugging
error_log("OTP generated for $email: $otp");

$conn->close();
?>