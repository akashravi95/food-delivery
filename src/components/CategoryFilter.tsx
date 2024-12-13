import React from 'react';
import { categories } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto py-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap
                    flex items-center space-x-2 transition-colors
                    ${selectedCategory === category.id 
                      ? 'bg-orange-100 text-orange-600' 
                      : 'bg-gray-100 text-gray-800 hover:bg-orange-50 hover:text-orange-600'}
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}