<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class AuthController extends Controller
{
    // Inicio de sesión.
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($request->only('username', 'password'))) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        $usuario = Usuarios::where('username', $request->username)->firstOrFail();
        $token = $usuario->createToken('auth_token')->plainTextToken;

        // Agregar fecha_actualizacion
        $usuario->fecha_actualizacion = Carbon::now();
        $usuario->save();

        return response()->json(['token' => $token, 'usuarios' => $usuario]);
    }

    /**
     * Cierre de sesión de usuario.
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Sesión cerrada exitosamente']);
    }
}