<?php

namespace App\Http\Controllers\Api;

use App\Models\Roles;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class RolesController extends Controller
{
    // Listar todos los Roles
    public function index(): JsonResponse
    {
        $roles = Roles::all();
        return response()->json($roles);
    }

    // Mostrar un rol por ID
    public function show($id): JsonResponse
    {
        $rol = Roles::find($id);

        if (!$rol) {
            return response()->json(['error' => 'Rol no encontrado'], 404);
        }

        return response()->json($rol);
    }

    // Crear un nuevo rol
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'rol' => 'required|string',
                'descripcion' => 'required|string',
            ]);

            $rol = Roles::create($validated);

            return response()->json([
                'message' => 'rol registrado exitosamente',
                'data' => $rol
            ], 201);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Error al crear el rol: ' . $th->getMessage()], 500);
        }
    }

    // Actualizar un rol existente
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $rol = Roles::findOrFail($id);

            // Validar solo los campos presentes
            $validated = $request->validate([
                'rol' => 'sometimes|string',
                'descripcion' => 'sometimes|string',
            ]);

            // Agregar fecha_actualizacion
            $validated['fecha_actualizacion'] = Carbon::now();

            // Actualizar solo los campos enviados
            $rol->update($validated);

            return response()->json([
                'message' => 'Rol actualizado exitosamente',
                'data' => $rol
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Error al actualizar el rol: ' . $th->getMessage()
            ], 500);
        }
    }

    // Eliminar un rol
    public function destroy($id): JsonResponse
    {
        $rol = Roles::find($id);

        if (!$rol) {
            return response()->json(['error' => 'Rol no encontrado'], 404);
        }

        $rol->delete();

        return response()->json(['mensaje' => 'Rol eliminado correctamente']);
    }
}
