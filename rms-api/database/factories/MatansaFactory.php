<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Matansa>
 */
class MatansaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'state' => fake()->state(),
            //'status' => fake()->status(),
            'image' => $this->faker->randomElement(['http://localhost:8000/files/matansa/a.jpg','http://localhost:8000/files/matansa/b.jpg',
                                                    'http://localhost:8000/files/matansa/c.jpg','http://localhost:8000/files/matansa/d.jpg'])
            //'description' => fake()->description(),
            //'DOB' => fake()->DOB(),

            
        ];
    }
}
