import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';
import { formatCurrency } from '../../utils/payment';

interface PaymentFormProps {
  total: number;
  onPaymentComplete: (paymentMethod: string) => void;
}

export default function PaymentForm({ total, onPaymentComplete }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPaymentComplete(paymentMethod);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
      
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`flex-1 py-3 px-4 rounded-lg border ${
              paymentMethod === 'card'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-300'
            }`}
          >
            <CreditCard className="inline-block mr-2 h-5 w-5" />
            Credit Card
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('cash')}
            className={`flex-1 py-3 px-4 rounded-lg border ${
              paymentMethod === 'cash'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-300'
            }`}
          >
            <DollarSign className="inline-block mr-2 h-5 w-5" />
            Cash on Delivery
          </button>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total to Pay:</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Pay Now
          </button>
        </form>
      )}

      {paymentMethod === 'cash' && (
        <div className="space-y-4">
          <p className="text-gray-600">
            You will pay {formatCurrency(total)} in cash upon delivery.
          </p>
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}