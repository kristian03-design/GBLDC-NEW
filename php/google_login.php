<?php
require_once __DIR__ . '/../vendor/autoload.php';

// Set your Google Client ID here
$googleClientId = '528123102514-o8vap3bmgnogbgvtfuipgkgea739ov3c.apps.googleusercontent.com';

header('Content-Type: application/json');

// Check if credential is set
if (empty($_POST['credential'])) {
    echo json_encode(['success' => false, 'error' => 'Missing credential']);
    exit;
}

// Initialize Google Client
$client = new Google_Client();
$client->setClientId($googleClientId);

try {
    $payload = $client->verifyIdToken($_POST['credential']);
    if ($payload) {
        $email = $payload['email'] ?? null;
        $name = $payload['name'] ?? null;
        $sub = $payload['sub'] ?? null;

        // --- Example DB logic here ---

        echo json_encode([
            'success' => true,
            'user' => [
                'email' => $email,
                'name' => $name,
                'sub' => $sub
            ]
        ]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid token']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>