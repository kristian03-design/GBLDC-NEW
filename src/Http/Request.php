<?php
declare(strict_types=1);

namespace App\Http;

class Request
{
    private string $method;
    private string $path;
    private array $headers;
    private array $queryParams;
    private array $bodyParams;

    public function __construct(string $method, string $path, array $headers, array $queryParams, array $bodyParams)
    {
        $this->method = strtoupper($method);
        $this->path = $path;
        $this->headers = $headers;
        $this->queryParams = $queryParams;
        $this->bodyParams = $bodyParams;
    }

    public static function fromGlobals(): self
    {
        $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
        $uri = $_SERVER['REQUEST_URI'] ?? '/';
        $path = parse_url($uri, PHP_URL_PATH) ?: '/';

        $headers = function_exists('getallheaders') ? (getallheaders() ?: []) : [];

        $rawBody = file_get_contents('php://input') ?: '';
        $contentType = $headers['Content-Type'] ?? $headers['content-type'] ?? '';
        $bodyParams = [];
        if (stripos($contentType, 'application/json') !== false) {
            $decoded = json_decode($rawBody, true);
            if (is_array($decoded)) {
                $bodyParams = $decoded;
            }
        } else {
            $bodyParams = $_POST ?? [];
        }

        return new self($method, $path, $headers, $_GET ?? [], $bodyParams);
    }

    public function getMethod(): string
    {
        return $this->method;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function getQueryParams(): array
    {
        return $this->queryParams;
    }

    public function getBody(): array
    {
        return $this->bodyParams;
    }
}

