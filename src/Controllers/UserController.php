<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Http\Request;
use App\Http\Response;
use App\Models\UserModel;

class UserController
{
    private UserModel $users;

    public function __construct()
    {
        $this->users = new UserModel();
    }

    public function list(Request $request): void
    {
        $query = $request->getQueryParams();
        $limit = isset($query['limit']) ? max(1, min(200, (int)$query['limit'])) : 100;
        $offset = isset($query['offset']) ? max(0, (int)$query['offset']) : 0;

        $data = $this->users->listUsers($limit, $offset);
        Response::json(['data' => $data, 'limit' => $limit, 'offset' => $offset]);
    }

    public function get(Request $request, array $params): void
    {
        $id = (int)($params['id'] ?? 0);
        $user = $this->users->getUser($id);
        if ($user === null) {
            Response::json(['error' => 'User not found'], 404);
            return;
        }
        Response::json($user);
    }

    public function create(Request $request): void
    {
        $body = $request->getBody();
        $name = trim((string)($body['name'] ?? ''));
        $email = trim((string)($body['email'] ?? ''));
        if ($name === '' || $email === '') {
            Response::json(['error' => 'name and email are required'], 422);
            return;
        }
        $user = $this->users->createUser($name, $email);
        Response::json($user, 201);
    }

    public function update(Request $request, array $params): void
    {
        $id = (int)($params['id'] ?? 0);
        $body = $request->getBody();
        $name = isset($body['name']) ? trim((string)$body['name']) : null;
        $email = isset($body['email']) ? trim((string)$body['email']) : null;
        $user = $this->users->updateUser($id, $name, $email);
        if ($user === null) {
            Response::json(['error' => 'User not found'], 404);
            return;
        }
        Response::json($user);
    }

    public function delete(Request $request, array $params): void
    {
        $id = (int)($params['id'] ?? 0);
        $ok = $this->users->deleteUser($id);
        if (!$ok) {
            Response::json(['error' => 'Delete failed or user not found'], 404);
            return;
        }
        Response::json(['deleted' => true]);
    }
}

