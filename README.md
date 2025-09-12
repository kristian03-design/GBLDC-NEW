# GBLDC-NEW Project Documentation

## Project Overview

**GBLDC-NEW** is a repository created for my capstone project. This project aims to demonstrate my skills and knowledge in web development by building a comprehensive application that incorporates various technologies and best practices. The project serves as a platform for learning, experimentation, and showcasing my capabilities in creating a functional and user-friendly web application.

## Tech Stack

Here are the technologies used in this project, along with their respective icons:

- **HTML** ![HTML5](https://img.icons8.com/color/48/000000/html-5.png)
- **CSS** ![CSS3](https://img.icons8.com/color/48/000000/css3.png)
- **JavaScript** ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png)
- **PHP** ![PHP](https://img.icons8.com/color/48/000000/php.png)
- **Node.js** ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png)
- **Tailwind CSS** ![Tailwind CSS](https://img.icons8.com/color/48/000000/tailwindcss.png)

## Project Structure

The project is organized into the following directories and files:

- **`src/`**: Contains the source code for the application.
- **`dist/`**: Contains the distribution files for deployment.
- **`node_modules/`**: Contains the Node.js packages.
- **`vendor/`**: Contains third-party libraries.
- **`LICENSE`**: The license file for the project.
- **`README.md`**: This documentation file.
- **`composer.json`**: PHP dependencies.
- **`package.json`**: Node.js dependencies.
- **`postcss.config.js`**: Configuration for PostCSS.
- **`tailwind.config.js`**: Configuration for Tailwind CSS.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kristian03-design/GBLDC-NEW.git
2. Navigate to the project directory:
    ```bash
   cd GBLDC-NEW
3. Install the dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm run start

## Backend (PHP + MySQL)

This repository now includes a minimal backend built with PHP 8 + PDO + MySQL. It exposes JSON endpoints with a tiny router, controllers, and models.

### Features

- Health check: `GET /health`
- Users CRUD:
  - `GET /users` (query: `limit`, `offset`)
  - `POST /users` (JSON `{ name, email }`)
  - `GET /users/{id}`
  - `PUT /users/{id}` (JSON `{ name?, email? }`)
  - `DELETE /users/{id}`
- Env-based configuration via `.env`
- Basic CORS headers

### Structure

```
public/
  index.php
  .htaccess
src/
  Config/
    Config.php
    Env.php
  Controllers/
    HealthController.php
    UserController.php
  Database/
    Database.php
  Http/
    Request.php
    Response.php
    Router.php
  Models/
    UserModel.php
sql/
  schema.sql
.env.example
```

### Setup

1. Copy environment config:

```bash
cp .env.example .env
```

2. Create database and tables (adjust credentials per `.env`):

```bash
mysql -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS $DB_NAME < sql/schema.sql
```

If database `$DB_NAME` doesn't exist, create it first:

```sql
CREATE DATABASE app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Serve the app (Apache suggested):
- Point the DocumentRoot to `public/`.
- Ensure `mod_rewrite` is enabled for routing via `.htaccess`.

Nginx FastCGI example:

```
location / {
  try_files $uri /index.php?$query_string;
}

location ~ \.php$ {
  include fastcgi_params;
  fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
  fastcgi_pass 127.0.0.1:9000;
}
```

### Testing

- Health: `curl -s http://localhost/health`
- Create: `curl -s -X POST http://localhost/users -H 'Content-Type: application/json' -d '{"name":"Alice","email":"alice@example.com"}'`
- List: `curl -s http://localhost/users`
- Get: `curl -s http://localhost/users/1`
- Update: `curl -s -X PUT http://localhost/users/1 -H 'Content-Type: application/json' -d '{"name":"A. Smith"}'`
- Delete: `curl -s -X DELETE http://localhost/users/1`

### Notes

- Errors return JSON with appropriate HTTP status codes.
- CORS defaults to `*`. Set `CORS_ALLOW_ORIGIN` in `.env` for production.
