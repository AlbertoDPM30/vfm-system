<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\UsuarioController;

// Ruta de prueba básica
Route::get('/ping', function () {
    return response()->json(['status' => 'OK', 'mensaje' => 'API funcionando correctamente']);
});

// Ruta para probar conexión a la base de datos
Route::get('/conexion', [Controller::class, 'pruebaConexion']);

// Rutas RESTful para usuarios
Route::apiResource('usuarios', UsuarioController::class);
