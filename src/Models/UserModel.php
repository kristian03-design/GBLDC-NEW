<?php
declare(strict_types=1);

namespace App\Models;

use App\Database\Database;
use PDO;

class UserModel
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = Database::connection();
    }

    public function listUsers(int $limit = 100, int $offset = 0): array
    {
        $stmt = $this->pdo->prepare('SELECT id, name, email, created_at, updated_at FROM users ORDER BY id DESC LIMIT :limit OFFSET :offset');
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function getUser(int $id): ?array
    {
        $stmt = $this->pdo->prepare('SELECT id, name, email, created_at, updated_at FROM users WHERE id = :id');
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        $row = $stmt->fetch();
        return $row !== false ? $row : null;
    }

    public function createUser(string $name, string $email): array
    {
        $stmt = $this->pdo->prepare('INSERT INTO users (name, email, created_at, updated_at) VALUES (:name, :email, NOW(), NOW())');
        $stmt->execute([':name' => $name, ':email' => $email]);
        $id = (int)$this->pdo->lastInsertId();
        $user = $this->getUser($id);
        return $user ?? ['id' => $id, 'name' => $name, 'email' => $email];
    }

    public function updateUser(int $id, ?string $name, ?string $email): ?array
    {
        $fields = [];
        $params = [':id' => $id];
        if ($name !== null) { $fields[] = 'name = :name'; $params[':name'] = $name; }
        if ($email !== null) { $fields[] = 'email = :email'; $params[':email'] = $email; }
        if (empty($fields)) {
            return $this->getUser($id);
        }
        $sql = 'UPDATE users SET ' . implode(', ', $fields) . ', updated_at = NOW() WHERE id = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $this->getUser($id);
    }

    public function deleteUser(int $id): bool
    {
        $stmt = $this->pdo->prepare('DELETE FROM users WHERE id = :id');
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }
}

