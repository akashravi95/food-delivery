import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Package, Clock, MapPin, Check } from 'lucide-react';
import OrderStatusTimeline from '../components/order/OrderStatusTimeline';
import DeliveryInfo from '../components/order/DeliveryInfo';
import OrderSummary from '../components/order/OrderSummary';
import { useOrder } from '../context/OrderContext';

const mapContainerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

export default function OrderTrackingPage() {
  const { id } = useParams<{ id: string }>();
  const { getOrder } = useOrder();
  const order = getOrder(id!);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Order not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Status and Map */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Status</h2>
            <OrderStatusTimeline status={order.status} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Tracking</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={13}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        {/* Order Details Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Delivery Details</h2>
            <DeliveryInfo
              estimatedTime={order.estimatedDeliveryTime}
              address={order.deliveryAddress}
              instructions={order.specialInstructions}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <OrderSummary order={order} />
          </div>
        </div>
      </div>
    </div>
  );
}