<?php

namespace App\Http\Controllers\Api;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class UsuarioController extends Controller
{
    // Listar todos los usuarios
    public function index(): JsonResponse
    {
        $usuarios = Usuarios::all();
        return response()->json($usuarios);
    }

    // Mostrar un usuario por ID
    public function show($id): JsonResponse
    {
        $usuario = Usuarios::find($id);

        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        return response()->json($usuario);
    }

    // Crear un nuevo usuario
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'id_rol' => 'required|integer',
            'nombres' => 'required|string',
            'apellidos' => 'required|string',
            'edad' => 'required|integer',
            'ci' => 'required|integer|unique:usuarios,ci',
            'username' => 'required|string|unique:usuarios,username',
            'password' => 'required|string|min:3',
        ]);

        $validated['password'] = bcrypt($validated['password']);

        $usuario = Usuarios::create($validated);

        return response()->json($usuario, 201);
    }

    // Actualizar un usuario existente
    public function update(Request $request, $id): JsonResponse
    {
        $usuario = Usuarios::find($id);

        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $validated = $request->validate([
            'id_rol' => 'required|integer',
            'nombres' => 'required|string',
            'apellidos' => 'required|string',
            'edad' => 'required|integer',
            'ci' => 'required|integer|unique:usuarios,ci,' . $id,
            'username' => 'required|string|unique:usuarios,username,' . $id,
            'password' => 'required|string|min:8',
            'ultimo_inicio' => 'nullable|date',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        $usuario->update($validated);

        return response()->json($usuario);
    }

    // Eliminar un usuario
    public function destroy($id): JsonResponse
    {
        $usuario = Usuarios::find($id);

        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $usuario->delete();

        return response()->json(['mensaje' => 'Usuario eliminado correctamente']);
    }
}
