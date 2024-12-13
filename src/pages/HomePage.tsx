import React, { useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import RestaurantList from '../components/RestaurantList';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {selectedCategory === 'all' ? 'Popular Restaurants' : `${selectedCategory} Restaurants`}
        </h2>
        <RestaurantList selectedCategory={selectedCategory} />
      </section>
    </main>
  );
}