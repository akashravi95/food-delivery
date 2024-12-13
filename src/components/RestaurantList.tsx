import React from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurants } from '../data/restaurants';
import type { Restaurant } from '../types';

interface RestaurantListProps {
  selectedCategory: string;
}

export default function RestaurantList({ selectedCategory }: RestaurantListProps) {
  const filteredRestaurants: Restaurant[] = selectedCategory === 'all'
    ? restaurants
    : restaurants.filter(restaurant => 
        restaurant.cuisine.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}