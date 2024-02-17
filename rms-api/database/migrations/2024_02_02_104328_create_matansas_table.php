<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('matansas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('state')->nullable();
            $table->enum('status', ['Dead', 'Alive'])->default('Dead');
            $table->string('image')->default('http://localhost:8000/files/matansa/d.jpg');
            $table->string('description')->nullable();
            $table->string('DOB')->nullable();
            $table->string('adadin_yara')->nullable();
            $table->string('DOD')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matansas');
    }
};
