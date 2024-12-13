import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(item.options[0]);
  const { addItem } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    addItem(item, quantity, [selectedOption]);
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.popular && (
          <span className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-orange-600 font-medium">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        
        {item.options.length > 0 && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Options
            </label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
            >
              {item.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Minus className="h-5 w-5 text-gray-600" />
            </button>
            <span className="text-gray-900 font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <Plus className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}