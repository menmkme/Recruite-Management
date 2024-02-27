<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Matansa extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'state', 'status', 'image', 'description', 'DOB', 'adadin_yara', 'DOD'];

    public function yaransas() {
        return $this->hasMany(yaransa::class);
    }
    
}
