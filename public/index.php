<?php
declare(strict_types=1);

// Project root
$projectRoot = dirname(__DIR__);

// Simple PSR-4 style autoloader for the App\ namespace
spl_autoload_register(function (string $class): void {
    $prefix = 'App\\';
    $baseDir = __DIR__ . '/../src/';
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }
    $relativeClass = substr($class, $len);
    $file = $baseDir . str_replace('\\', '/', $relativeClass) . '.php';
    if (file_exists($file)) {
        require $file;
    }
});

use App\Config\Env;
use App\Config\Config;
use App\Http\Request;
use App\Http\Response;
use App\Http\Router;
use App\Controllers\HealthController;
use App\Controllers\UserController;

// Load environment variables
Env::load($projectRoot . '/.env');

// Initialize Router
$router = new Router();

// Routes
$router->get('/health', [HealthController::class, 'index']);

$router->get('/users', [UserController::class, 'list']);
$router->post('/users', [UserController::class, 'create']);
$router->get('/users/{id}', [UserController::class, 'get']);
$router->put('/users/{id}', [UserController::class, 'update']);
$router->delete('/users/{id}', [UserController::class, 'delete']);

// Dispatch the request
$request = Request::fromGlobals();

// Handle CORS preflight early
if ($request->getMethod() === 'OPTIONS') {
    Response::json(['status' => 'ok']);
    exit;
}

try {
    $match = $router->match($request->getMethod(), $request->getPath());
    if ($match === null) {
        Response::json(['error' => 'Not Found'], 404);
        exit;
    }

    [$controllerClass, $method] = $match['handler'];
    $params = $match['params'];

    $controller = new $controllerClass();
    $result = call_user_func([$controller, $method], $request, $params);

    if ($result === null) {
        // Controller already sent the response
        exit;
    }

    Response::json($result, 200);
} catch (Throwable $e) {
    $status = 500;
    $message = Config::get('APP_ENV', 'production') === 'development' ? $e->getMessage() : 'Internal Server Error';
    Response::json(['error' => $message], $status);
}

