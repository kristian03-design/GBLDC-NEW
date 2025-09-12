<?php
declare(strict_types=1);

namespace App\Http;

class Router
{
    private array $routes = [
        'GET' => [],
        'POST' => [],
        'PUT' => [],
        'DELETE' => [],
    ];

    public function get(string $path, array $handler): void { $this->addRoute('GET', $path, $handler); }
    public function post(string $path, array $handler): void { $this->addRoute('POST', $path, $handler); }
    public function put(string $path, array $handler): void { $this->addRoute('PUT', $path, $handler); }
    public function delete(string $path, array $handler): void { $this->addRoute('DELETE', $path, $handler); }

    private function addRoute(string $method, string $path, array $handler): void
    {
        $this->routes[$method][] = [
            'path' => $path,
            'handler' => $handler,
            'regex' => $this->compilePathToRegex($path),
        ];
    }

    public function match(string $method, string $path): ?array
    {
        $method = strtoupper($method);
        $routes = $this->routes[$method] ?? [];

        foreach ($routes as $route) {
            if (preg_match($route['regex'], $path, $matches)) {
                $params = [];
                foreach ($matches as $key => $value) {
                    if (!is_int($key)) {
                        $params[$key] = $value;
                    }
                }
                return [
                    'handler' => $route['handler'],
                    'params' => $params,
                ];
            }
        }
        return null;
    }

    private function compilePathToRegex(string $path): string
    {
        $pattern = preg_replace('#\{([a-zA-Z_][a-zA-Z0-9_]*)\}#', '(?P<$1>[^/]+)', $path);
        return '#^' . $pattern . '$#';
    }
}

