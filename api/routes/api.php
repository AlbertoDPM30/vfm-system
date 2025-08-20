<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\UsuarioController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\ClientesController;

// Ruta de prueba básica
Route::get('/ping', function () {
    return response()->json(['status' => 'OK', 'mensaje' => 'API funcionando correctamente']);
});

// Ruta para probar conexión a la base de datos
Route::get('/conexion', [Controller::class, 'pruebaConexion']);

// Rutas RESTful para usuarios
Route::apiResource('usuarios', UsuarioController::class);

// Rutas RESTful para roles
Route::apiResource('roles', RolesController::class);

// Rutas RESTful para clientes
Route::apiResource('clientes', ClientesController::class);
