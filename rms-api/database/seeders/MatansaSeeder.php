<?php

namespace Database\Seeders;

use App\Models\Matansa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MatansaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('matansas')->insert([
            'name' => "Khatume",
            'state' => "Jos",
            'status' => 'Dead',
            'image' => 'default.png',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478'

        ]);
        
        DB::table('matansas')->insert([
            'name' => "Aisha(Shatu)",
            'state' => "Abuja",
            'status' => 'Alive',
            'image' => 'default.png',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478'

        ]);
        
        DB::table('matansas')->insert([
            'name' => "Aisha",
            'state' => "Kaduna",
            'status' => 'Dead',
            'image' => 'default.png',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478'

        ]);
        
        DB::table('matansas')->insert([
            'name' => "Habiba",
            'state' => "Kano",
            'status' => 'Dead',
            'image' => 'default.png',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478'

        ]);

        Matansa::factory(5)->create();
    }
}
