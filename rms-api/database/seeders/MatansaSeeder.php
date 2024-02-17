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
            'image' => 'http://localhost:8000/files/matansa/a.jpg',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '8',
            'DOD' => '21/03/1578'

        ]);
        
        DB::table('matansas')->insert([
            'name' => "Aisha(Shatu)",
            'state' => "Abuja",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/matansa/b.jpg',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '3',
            'DOD' => '21/03/1578'

        ]);
        
        DB::table('matansas')->insert([
            'name' => "Aisha",
            'state' => "Kaduna",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/matansa/c.jpg',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '13',
            'DOD' => '21/03/1578'

        ]);
        
        DB::table('matansas')->insert([
            'name' => "Habiba",
            'state' => "Kano",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/matansa/d.jpg',
            'description' => 'Dayace daga cikin matan sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '10',
            'DOD' => '21/03/1578',
            

        ]);

        Matansa::factory(0)->create();
    }
}
