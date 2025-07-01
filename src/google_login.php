<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Google_Client;

// Use environment variable or config for client ID
$googleClientId = getenv('Test Account') ?: '528123102514-o8vap3bmgnogbgvtfuipgkgea739ov3c.apps.googleusercontent.com';

header('Content-Type: application/json');

// Check if credential is set
if (empty($_POST['credential'])) {
    echo json_encode(['success' => false, 'error' => 'Missing credential']);
    exit;
}
// Initialize Google Client
// Ensure you have set the correct Google Client ID in your environment or config
$client = new \Google_Client(['client_id' => $googleClientId]);

try {
    $payload = $client->verifyIdToken($_POST['credential']);
    if ($payload) {
        // Example: $payload['email'], $payload['name'], etc.
        // TODO: Log in or register the user in your database

        echo json_encode(['success' => true, 'user' => [
            'email' => $payload['email'] ?? null,
            'name' => $payload['name'] ?? null,
            'sub' => $payload['sub'] ?? null
        ]]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid token']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>