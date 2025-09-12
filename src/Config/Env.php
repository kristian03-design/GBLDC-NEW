<?php
declare(strict_types=1);

namespace App\Config;

class Env
{
    public static function load(string $envFilePath): void
    {
        if (!file_exists($envFilePath)) {
            return;
        }

        $lines = file($envFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            return;
        }

        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }
            $parts = explode('=', $line, 2);
            if (count($parts) !== 2) {
                continue;
            }
            $key = trim($parts[0]);
            $value = trim($parts[1]);

            if ($value !== '' && ($value[0] === '"' || $value[0] === '\'')) {
                $value = trim($value, "\"' ");
            }

            $_ENV[$key] = $value;
            putenv($key . '=' . $value);
        }
    }
}

