import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800',
    priceRange: '$$',
    description: 'Authentic Italian pizzas made in wood-fired ovens',
    address: '123 Main St, Foodville',
    isOpen: true,
    minimumOrder: 15,
    deliveryFee: 3.99
  },
  {
    id: '2',
    name: 'Burger Bliss',
    cuisine: 'American',
    rating: 4.3,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=800',
    priceRange: '$',
    description: 'Gourmet burgers with fresh, local ingredients',
    address: '456 Oak Ave, Foodville',
    isOpen: true,
    minimumOrder: 12,
    deliveryFee: 2.99
  },
  {
    id: '3',
    name: 'Sushi Select',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: '40-50 min',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800',
    priceRange: '$$$',
    description: 'Premium sushi and Japanese specialties',
    address: '789 Maple Rd, Foodville',
    isOpen: true,
    minimumOrder: 25,
    deliveryFee: 4.99
  }
];