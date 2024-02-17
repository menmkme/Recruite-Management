<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matansa extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'state', 'status', 'image', 'description', 'DOB', 'adadin_yara', 'DOD'];


    
}
