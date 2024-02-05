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
            'image' => 'default.png',
            //'description' => fake()->description(),
            //'DOB' => fake()->DOB(),

            
        ];
    }
}
