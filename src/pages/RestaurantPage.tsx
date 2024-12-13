import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { menuItems } from '../data/menu-items';
import MenuItem from '../components/MenuItem';
import { Clock, MapPin, Star } from 'lucide-react';

export default function RestaurantPage() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const restaurantMenu = menuItems.filter(item => item.restaurantId === id);
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const categories = ['all', ...new Set(restaurantMenu.map(item => item.category))];
  const filteredMenu = selectedCategory === 'all' 
    ? restaurantMenu 
    : restaurantMenu.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
          <p className="mt-2 text-gray-600">{restaurant.description}</p>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-400" />
              {restaurant.rating}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {restaurant.deliveryTime}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {restaurant.address}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto py-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium
                ${selectedCategory === category
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-orange-50'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}