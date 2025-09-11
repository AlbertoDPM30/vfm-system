<?php

namespace App\Http\Controllers\Api;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

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
            $usuario = Usuarios::where('id', $id)->first();
        }

        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        return response()->json($usuario);
    }

    // Crear un nuevo usuario
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'id_rol' => 'required|integer',
                'nombres' => 'required|string',
                'apellidos' => 'required|string',
                'edad' => 'required|integer',
                'ci' => 'required|integer|min:8|unique:usuarios,ci',
                'username' => 'required|string|unique:usuarios,username',
                'password' => 'required|string|min:3',
                'ultimo_inicio' => 'nullable|date',
            ]);

            $validated['password'] = bcrypt($validated['password']);

            $usuario = Usuarios::create($validated);

            return response()->json([
                'message' => 'usuario registrado exitosamente',
                'data' => $usuario
            ], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Error al crear el usuario: ' . $th->getMessage()], 500);
        }
    }

    // Actualizar un usuario existente
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $usuario = Usuarios::findOrFail($id);

            // Validar solo los campos presentes
            $validated = $request->validate([
                'id_rol' => 'sometimes|integer',
                'nombres' => 'sometimes|string',
                'apellidos' => 'sometimes|string',
                'edad' => 'sometimes|integer',
                'ci' => [
                    'sometimes',
                    'integer',
                    Rule::unique('usuarios', 'ci')->ignore($id)
                ],
                'username' => [
                    'sometimes',
                    'string',
                    Rule::unique('usuarios', 'username')->ignore($id)
                ],
                'password' => 'sometimes|string|min:8',
                'ultimo_inicio' => 'sometimes|date',
            ]);

            // Encriptar password si viene
            if (isset($validated['password'])) {
                $validated['password'] = bcrypt($validated['password']);
            }

            // Agregar fecha_actualizacion
            $validated['fecha_actualizacion'] = Carbon::now();

            // Actualizar solo los campos enviados
            $usuario->update($validated);

            return response()->json([
                'message' => 'Usuario actualizado exitosamente',
                'data' => $usuario
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Error al actualizar el usuario: ' . $th->getMessage()
            ], 500);
        }
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
