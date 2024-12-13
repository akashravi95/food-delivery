import React, { createContext, useContext, useState } from 'react';
import type { MenuItem } from '../types';

interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOptions?: string[];
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity: number, options?: string[]) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: MenuItem, quantity: number, options?: string[]) => {
    setItems(current => {
      const existingItem = current.find(i => i.item.id === item.id);
      if (existingItem) {
        return current.map(i => 
          i.item.id === item.id 
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...current, { item, quantity, selectedOptions: options }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems(current => current.filter(i => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setItems(current =>
      current.map(i =>
        i.item.id === itemId ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, { item, quantity }) => sum + item.price * quantity,
    0
  );

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart, 
      total 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}