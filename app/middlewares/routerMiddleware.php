<?php

require_once __DIR__ . '/envConfigMiddleware.php'; // Cargar las variables de entorno

// Autoload de Composer para cargar las dependencias
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Router{
private static $secret_key; // Clave secreta para firmar el token
    private static $algoritmo; // Algoritmo de firma

    public static function init() {
        self::$secret_key = $GLOBALS['env']['SECRET_KEY']; // Clave secreta del JWT
        self::$algoritmo = $GLOBALS['env']['JWT_ALGORITHM']; // Algoritmo de firma del JWT
    }

    public static function generarToken($userId) {
        self::init();
        $payload = [
            "iat" => time(), // Tiempo de emisión
            "exp" => time() + 18000, // Expira en 5 hora
            "user_id" => $userId // ID del usuario
        ];
        return JWT::encode($payload, self::$secret_key, self::$algoritmo);
    }

    public static function validarToken($token) {
        self::init();
        try {
            // Decodificar el token
            $decoded = JWT::decode($token, new Key(self::$secret_key, self::$algoritmo));
            return (array) $decoded;
        } catch (Exception $e) {
            return false;
        }
    }

     public static function handle() {
        // Obtener el token del encabezado authorization
        $headers = apache_request_headers();
        $authHeader = $headers['Authorization'] ?? '';

        // Verificar si existe el encabezado
        if (empty($authHeader)) {
            http_response_code(401);
            echo json_encode(['error' => 'Token no proporcionado']);
            exit;
        }

        // Extraer el token del formato "Bearer <token>"
        if (!preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            http_response_code(401);
            echo json_encode(['error' => 'Formato de token inválido']);
            exit;
        }

        $token = $matches[1];

        // Validar el token
        $tokenData = validarToken($token);
        
        if (!$tokenData) {
            http_response_code(401);
            echo json_encode(['error' => 'Token inválido o expirado']);
            exit;
        }

        // Guardar datos del token para uso posterior
        $GLOBALS['user_id'] = $tokenData['user_id'];
    }

	static public function mdwRouter(){ ?>

        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="public/assets/css/style.css">
            <link rel="stylesheet" href="public/assets/css/output.css">
            <title>VFM System</title>
        </head>
        <body>
            
        <?php if (isset($_SESSION["iniciarSesion"]) && $_SESSION["iniciarSesion"] == "ok") : ?>

            <div class="container">

            <!-- HEADER -->
            <?php include "app/views/components/header.html"; ?>

            <!-- CONTENIDO -->
            <?php if (isset($_GET["ruta"])) {

                if (
        
                    $_GET["ruta"] == "dashboard" 
                ) {

                include "app/views/" . $_GET["ruta"] . ".html";
                } else {

                include "app/views/404.html";
                }
            } else {

                include "app/views/dashboard.html";
            }

            /*=============================================
            FOOTER
            =============================================*/

            include "app/views/footer.html"; ?>

            </div>

        <?php else : ?>

            <?php include "views/auth/login.html"; ?>

        <?php endif; ?>

        <script type="module" src="public/assets/js/auth.js"></script>

        </body>
        </html>
	<?php }	
}?>
