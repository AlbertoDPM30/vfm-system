<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Usuarios extends Authenticatable
{

    use HasApiTokens;

    protected $table = 'usuarios';
    protected $primaryKey = 'id';

    public $timestamps = true;

    const CREATED_AT = 'fecha_creacion';
    const UPDATED_AT = 'fecha_actualizacion';

    protected $fillable = [
        'id_rol',
        'nombres',
        'apellidos',
        'edad',
        'ci',
        'username',
        'password',
        'ultimo_inicio',
    ];

    protected $hidden = [
        'password',
    ];
}

