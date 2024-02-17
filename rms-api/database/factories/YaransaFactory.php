<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\yaransa>
 */
class YaransaFactory extends Factory
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
            'sunan_mahaifiya' => fake()->randomElement(['Khalthum','Habiba','Aisha', 'Aisha Shatu']),
            'state' => fake()->state(),
            //'status' => fake()->status(),
            'image' => 'default.png'
        ];
    }
}
