<?php

// Asegúrate de que solo se pueda acceder a este archivo mediante una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Método no permitido
    echo json_encode(['success' => false, 'message' => 'Método de petición no válido.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

// Iniciar sesión PHP
session_start();

// Establecer la cabecera de la respuesta como JSON
header('Content-Type: application/json');

// Leer y decodificar el cuerpo de la petición JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true); // El 'true' convierte el objeto a un array asociativo

// Verificar si la decodificación fue exitosa
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'message' => 'JSON de entrada no válido.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

// Definir una variable para la acción
$action = $data['action'] ?? '';

switch ($action) {
    case 'login':
        // Lógica para iniciar sesión
        
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';

        // Validar que los campos no estén vacíos
        if (empty($username) || empty($password)) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Nombre de usuario y contraseña son obligatorios.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            exit;
        }

        // --- Lógica de autenticación real (ejemplo básico) ---
        // **IMPORTANTE**: En un sistema real, no uses credenciales hardcoded.
        // Debes consultar una base de datos y verificar la contraseña hasheada.
        $dbUsername = 'admin';
        $dbPassword = 'password123';

        if ($username === $dbUsername && $password === $dbPassword) {
            
            // Credenciales válidas
            $_SESSION['user'] = $username;
            http_response_code(200); // OK
            echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

        } else {
            
            // Credenciales inválidas
            http_response_code(401); // Unauthorized
            echo json_encode(['success' => false, 'message' => 'Credenciales incorrectas.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        }
        break;

    case 'logout':
        // Lógica para cerrar sesión
        
        // Destruir todas las variables de sesión y la sesión misma
        $_SESSION = array();
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
        
        http_response_code(200); // OK
        echo json_encode(['success' => true, 'message' => 'Sesión cerrada correctamente.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        break;

    default:
        // Acción no reconocida
        http_response_code(400); // Bad Request
        echo json_encode(['success' => false, 'message' => 'Acción no válida.'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        break;
}

exit;