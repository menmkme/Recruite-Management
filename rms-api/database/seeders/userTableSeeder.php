<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;


class userTableSeeder extends Seeder
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'slug' => str::slug(Str::random(20)),
            'name' => "Ahmad",
            'email' => "iahmad9963@gmail.com",
            'password' => static::$password ??= Hash::make('password'),
            'is_admin' => true,
            'image' => 'default.png',
            'status' => 'active',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        User::factory(10)->create();
    }
}
