<?php
declare(strict_types=1);

namespace App\Http;

use App\Config\Config;

class Response
{
    public static function json(array $data, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        header('Content-Type: application/json');

        // Basic CORS support
        $origin = Config::get('CORS_ALLOW_ORIGIN', '*');
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');

        // Handle preflight
        if (strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
            echo json_encode(['status' => 'ok']);
            return;
        }

        echo json_encode($data);
    }
}

