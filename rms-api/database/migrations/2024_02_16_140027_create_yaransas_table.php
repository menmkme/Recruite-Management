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
        Schema::create('yaransas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sunan_mahaifiya')->nullable();
            $table->string('adadin_yara')->nullable();
            $table->string('state')->nullable();
            $table->enum('status', ['Dead', 'Alive'])->default('Dead');
            $table->string('image')->default('http://localhost:8000/files/yaransa/1.jpg');
            $table->string('description')->nullable();
            $table->string('DOB')->nullable();
            $table->string('DOD')->nullable();
            $table->string('phone_num')->nullable();
            $table->string('home_address')->nullable();
            $table->unsignedBigInteger('matansa_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();

            $table->foreign('matansa_id')->references('id')->on('matansas')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('SET NULL');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yaransas');
    }
};
