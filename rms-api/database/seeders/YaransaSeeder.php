<?php

namespace Database\Seeders;

use App\Models\yaransa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YaransaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('yaransas')->insert([
            'name' => "Hajiya Anty",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Jos",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/1.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '14',
            'DOD' => '21/03/1578',
            'matansa_id' => '1'

        ]);
        
        DB::table('yaransas')->insert([
            'name' => "Me Recee",
            'sunan_mahaifiya' => "Aisha",
            'state' => "Abuja",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/2.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '0',
            'DOD' => '21/03/1578',
            'matansa_id' => '2'

        ]);
        
        DB::table('yaransas')->insert([
            'name' => "Baba Sala",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Kaduna",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/3.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '3',
            'DOD' => '21/03/1578',
            'matansa_id' => '1'

        ]);
        
        DB::table('yaransas')->insert([
            'name' => "Baba Larai",
            'sunan_mahaifiya' => "Aisha",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/4.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '7',
            'DOD' => '21/03/1578',
            'matansa_id' => '3'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Ado",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/5.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '9',
            'DOD' => '21/03/1578',
            'matansa_id' => '2'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Ibrahim",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/6.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '11',
            'DOD' => '21/03/1578',
            'matansa_id' => '1'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Audu",
            'sunan_mahaifiya' => "Khaltum",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/7.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '5',
            'DOD' => '21/03/1578',
            'matansa_id' => '3'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Azumi",
            'sunan_mahaifiya' => "Aisha Shatu",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/1.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '12',
            'DOD' => '21/03/1578',
            'matansa_id' => '4'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Mama Dunbulun",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/2.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '2',
            'DOD' => '21/03/1578',
            'matansa_id' => '4'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Sa'a",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Kano",
            'status' => 'Alive',
            'image' => 'http://localhost:8000/files/yaransa/3.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '6',
            'DOD' => '21/03/1578',
            'matansa_id' => '4'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Umbo",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Jos",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/yaransa/4.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '9',
            'DOD' => '21/03/1578',
            'matansa_id' => '3'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Aminu",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Jos",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/yaransa/5.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '8',
            'DOD' => '21/03/1578',
            'matansa_id' => '4'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Baba Hama",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Jos",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/yaransa/6.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '0',
            'DOD' => '21/03/1578',
            'matansa_id' => '2'

        ]);

        DB::table('yaransas')->insert([
            'name' => "Yawo",
            'sunan_mahaifiya' => "Habiba",
            'state' => "Jos",
            'status' => 'Dead',
            'image' => 'http://localhost:8000/files/yaransa/7.jpg',
            'description' => 'Dayace daga cikin yaran sa',
            'DOB' => '21/03/1478',
            'adadin_yara' => '6',
            'DOD' => '21/03/1578',
            'matansa_id' => '3'

        ]);
        yaransa::factory(3)->create();
    }
}
