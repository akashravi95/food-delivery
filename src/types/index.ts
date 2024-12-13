export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  priceRange: '$' | '$$' | '$$$';
  description: string;
  address: string;
  isOpen: boolean;
  minimumOrder: number;
  deliveryFee: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
  options: string[];
  popular: boolean;
}

export interface User {
  id: string;
  role: 'customer' | 'delivery' | 'admin';
  name: string;
  email: string;
  address?: string;
  phone?: string;
  preferences?: {
    favoriteRestaurants: string[];
    dietaryRestrictions: string[];
  };
}

export interface Order {
  id: string;
  items: Array<{
    menuItem: MenuItem;
    quantity: number;
    selectedOptions?: string[];
  }>;
  status: 'pending' | 'preparing' | 'delivering' | 'delivered';
  total: number;
  userId: string;
  restaurantId: string;
  createdAt: Date;
  estimatedDeliveryTime: string;
  deliveryAddress: string;
  paymentMethod: string;
  specialInstructions?: string;
}