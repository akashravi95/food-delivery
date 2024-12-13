import React from 'react';
import type { Order } from '../../types';

interface OrderSummaryProps {
  order: Order;
}

export default function OrderSummary({ order }: OrderSummaryProps) {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {order.items.map(({ menuItem, quantity, selectedOptions }) => (
          <li key={menuItem.id} className="py-4">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {quantity}x {menuItem.name}
                </p>
                {selectedOptions && selectedOptions.length > 0 && (
                  <p className="mt-1 text-sm text-gray-500">
                    {selectedOptions.join(', ')}
                  </p>
                )}
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${(menuItem.price * quantity).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <p className="text-gray-500">Delivery Fee</p>
          <p className="font-medium text-gray-900">$4.99</p>
        </div>
        <div className="flex justify-between text-base font-medium mt-4">
          <p className="text-gray-900">Total</p>
          <p className="text-gray-900">${(order.total + 4.99).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}