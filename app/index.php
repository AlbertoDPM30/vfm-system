<?php

/*=============================================
   MIDDLEWARES
=============================================*/
require_once "middlewares/routerMiddleware.php";

/*=============================================
CONTROLADORES
=============================================*/

require_once __DIR__ . '/middlewares/routerMiddleware.php';
session_start();

// Obtener la ruta de la petición
$requestUri = $_SERVER['REQUEST_URI'];

// Si la URL contiene /api/, se trata de una petición de API
if (strpos($requestUri, '/api/') !== false) {
    Router::apiHandle();
} else {
    // Si no, es una petición de vista web
    Router::mdwRouter();
}


// $vistas = new Router();
// $vistas->mdwRouter();
