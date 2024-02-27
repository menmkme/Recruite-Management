<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class yaransa extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'sunan_mahaifiya', 'state', 'status', 'image', 'description', 'DOB', 'adadin_yara', 'DOD', 'matansa_id'];

    
    public function matansas() {
        return $this->belongsTo(Yaransa::class, 'matansa_id');
    }
    
}
