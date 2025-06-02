<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root"; // Change this if needed
$password = "";     // Change this if needed
$dbname = "gbldc_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: {$conn->connect_error}");
}

// Get form data safely
$email = trim($_POST['email']);
$password = $_POST['password'];

// Validate email and password
if (empty($email) || empty($password)) {
    echo "Please fill in both email and password.";
    exit;
}

// Prepare and execute query
$stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// Check user existence
if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    
    // Verify password
    if (password_verify($password, $user['password'])) {
        // Set session or redirect as needed
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $email;
        
        // Redirect to dashboard or homepage
        header("Location: landingpage.html");
        exit;
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No account found with that email.";
}

$stmt->close();
$conn->close();
