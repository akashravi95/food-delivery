import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { createOrder, validateOrder } from '../services/order';
import type { Order } from '../types';

export const useOrderManagement = () => {
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { addOrder } = useOrder();

  const processOrder = async (
    deliveryAddress: string,
    paymentMethod: string,
    userId: string
  ) => {
    setError(null);
    setIsProcessing(true);

    try {
      if (items.length === 0) {
        throw new Error('Cart is empty');
      }

      const orderData = {
        items: items.map(({ item, quantity, selectedOptions }) => ({
          menuItem: item,
          quantity,
          selectedOptions
        })),
        status: 'pending' as const,
        total,
        userId,
        restaurantId: items[0].item.restaurantId,
        estimatedDeliveryTime: '30-40 minutes',
        deliveryAddress,
        paymentMethod,
      };

      if (!validateOrder(orderData)) {
        throw new Error('Invalid order data');
      }

      const newOrder = createOrder(orderData);
      addOrder(newOrder);
      clearCart();
      navigate(`/order/${newOrder.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process order');
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    processOrder,
    error,
    isProcessing
  };
};