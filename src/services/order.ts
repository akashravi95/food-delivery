import type { Order } from '../types';

export const createOrder = (orderData: Omit<Order, 'id' | 'createdAt'>): Order => {
  return {
    ...orderData,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date()
  };
};

export const validateOrder = (order: Partial<Order>): boolean => {
  if (!order.items || order.items.length === 0) return false;
  if (!order.deliveryAddress) return false;
  if (!order.userId) return false;
  if (!order.restaurantId) return false;
  return true;
};