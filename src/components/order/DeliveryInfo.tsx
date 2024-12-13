import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface DeliveryInfoProps {
  estimatedTime: string;
  address: string;
  instructions?: string;
}

export default function DeliveryInfo({ estimatedTime, address, instructions }: DeliveryInfoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-gray-900">Estimated Delivery Time</p>
          <p className="text-sm text-gray-500">{estimatedTime}</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-gray-900">Delivery Address</p>
          <p className="text-sm text-gray-500">{address}</p>
        </div>
      </div>

      {instructions && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-900">Special Instructions</p>
          <p className="mt-1 text-sm text-gray-500">{instructions}</p>
        </div>
      )}
    </div>
  );
}