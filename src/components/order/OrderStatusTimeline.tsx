import React from 'react';
import { Check } from 'lucide-react';
import type { Order } from '../../types';

const statuses = [
  { key: 'pending', label: 'Order Placed' },
  { key: 'preparing', label: 'Preparing' },
  { key: 'delivering', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' }
];

interface OrderStatusTimelineProps {
  status: Order['status'];
}

export default function OrderStatusTimeline({ status }: OrderStatusTimelineProps) {
  const currentStatusIndex = statuses.findIndex(s => s.key === status);

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="h-0.5 w-full bg-gray-200"></div>
      </div>
      <ul className="relative flex justify-between">
        {statuses.map((step, index) => {
          const isCompleted = index <= currentStatusIndex;
          const isCurrent = index === currentStatusIndex;

          return (
            <li key={step.key} className="flex flex-col items-center">
              <div className={`relative flex h-8 w-8 items-center justify-center rounded-full
                ${isCompleted ? 'bg-orange-600' : 'bg-gray-200'}
                ${isCurrent ? 'ring-2 ring-orange-600 ring-offset-2' : ''}`}>
                {isCompleted && <Check className="h-5 w-5 text-white" />}
              </div>
              <p className={`mt-2 text-sm font-medium
                ${isCompleted ? 'text-orange-600' : 'text-gray-500'}`}>
                {step.label}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}