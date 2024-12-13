import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    category: 'Pizza',
    restaurantId: '1',
    options: ['Small', 'Medium', 'Large'],
    popular: true
  },
  {
    id: '2',
    name: 'Classic Cheeseburger',
    description: 'Angus beef patty with cheddar, lettuce, tomato, and special sauce',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    category: 'Burger',
    restaurantId: '2',
    options: ['Regular', 'Double'],
    popular: true
  },
  {
    id: '3',
    name: 'Dragon Roll',
    description: 'Shrimp tempura, eel, avocado, and spicy mayo',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    category: 'Sushi',
    restaurantId: '3',
    options: ['6 pcs', '8 pcs'],
    popular: true
  }
];