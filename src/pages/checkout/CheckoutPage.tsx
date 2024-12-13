import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import PaymentForm from '../../components/checkout/PaymentForm';
import { calculateTotal, calculateTax } from '../../utils/payment';
import { useOrderManagement } from '../../hooks/useOrderManagement';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { user } = useAuth();
  const { items, total: subtotal } = useCart();
  const [address, setAddress] = useState('');
  const { processOrder, error, isProcessing } = useOrderManagement();

  const deliveryFee = 4.99;
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, deliveryFee, tax);

  const handlePaymentComplete = async (paymentMethod: string) => {
    if (!user) return;
    await processOrder(address, paymentMethod, user.id);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Add some items to your cart to proceed with checkout.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {error && (
        <div className="mb-6 rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Details</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your delivery address"
                required
                disabled={isProcessing}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {items.map(({ item, quantity }) => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                </div>
                <p className="font-medium">${(item.price * quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-2 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
          <PaymentForm
            total={total}
            onPaymentComplete={handlePaymentComplete}
          />
        </div>
      </div>
    </div>
  );
}