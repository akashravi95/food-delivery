import React from 'react';
import DashboardStats from '../../components/admin/DashboardStats';
import OrdersTable from '../../components/admin/OrdersTable';
import { useOrder } from '../../context/OrderContext';

export default function AdminDashboard() {
  const { orders, updateOrderStatus } = useOrder();
  
  // Calculate dashboard statistics
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const activeDeliveries = orders.filter(order => order.status === 'delivering').length;
  const totalCustomers = new Set(orders.map(order => order.userId)).size;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <DashboardStats
        totalOrders={totalOrders}
        totalRevenue={totalRevenue}
        activeDeliveries={activeDeliveries}
        totalCustomers={totalCustomers}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Orders</h2>
        <OrdersTable
          orders={orders}
          onUpdateStatus={updateOrderStatus}
        />
      </div>
    </div>
  );
}