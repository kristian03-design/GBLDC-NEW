<?php
declare(strict_types=1);

namespace App\Config;

class Config
{
    public static function get(string $key, ?string $default = null): ?string
    {
        $value = $_ENV[$key] ?? getenv($key) ?: null;
        if ($value === null) {
            return $default;
        }
        return $value;
    }
}

