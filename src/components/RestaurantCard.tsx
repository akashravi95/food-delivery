import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import type { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link 
      to={`/restaurant/${restaurant.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium text-lg">Currently Closed</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
          <span className="inline-flex items-center px-2 py-1 rounded-lg bg-green-100 text-green-800">
            <Star className="h-4 w-4 mr-1" />
            {restaurant.rating}
          </span>
        </div>
        <p className="mt-1 text-gray-600">{restaurant.cuisine}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600">{restaurant.priceRange}</span>
            {restaurant.minimumOrder > 0 && (
              <span className="ml-2 text-sm text-gray-500">
                Min. ${restaurant.minimumOrder}
              </span>
            )}
          </div>
        </div>
        {restaurant.deliveryFee > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            Delivery fee: ${restaurant.deliveryFee.toFixed(2)}
          </p>
        )}
      </div>
    </Link>
  );
}