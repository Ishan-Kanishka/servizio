import React, {useEffect, useState} from 'react';
import BreadCrumb from '../../Components/BradCrumb/BreadCrumb';
import {getOrders} from './Pages/Orders/utils';

const Dashboard = () => {
  const [orders, setOrders] = useState ([]);

  useEffect (() => {
    getOrders ('id').then (data => setOrders (data.data));
    console.log (orders);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        <BreadCrumb
          main_title={'admin'}
          sub_title={'dashboard'}
          main_to="/admin"
          sub_to="/admin"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 my-4 px-12">
        Dashboard Overview
      </h1>
      <div className="w-full px-12 grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <DashboardCard title="Total Orders" value={orders.length} />
        <DashboardCard title="Total Customers" value="75" />
        <DashboardCard
          title="Total Revenue"
          value={orders.reduce ((acc, order) => acc + order.price, 0)}
        />
        <DashboardCard
          title="Pending Orders"
          value={orders.filter (order => !order.status).length}
        />
      </div>
      <div>
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Order ID</th>
                <th className="py-3 px-6 text-left">Note</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {orders.length > 0
                ? orders.slice (0, 5).map (order => (
                    <tr
                      key={order.orderId}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {order.orderId}
                      </td>
                      <td className="py-3 px-6 text-left">
                        {order.note}
                      </td>
                      <td className="py-3 px-6 text-left">
                        {new Date (order.date).toLocaleDateString ()}
                      </td>
                      <td className="py-3 px-6 text-left">
                        {order.status ? 'Completed' : 'Pending'}
                      </td>
                      <td className="py-3 px-6 text-left">
                        ${order.price}
                      </td>
                    </tr>
                  ))
                : <tr>
                    <td colSpan="5" className="text-center py-4">
                      No orders found.
                    </td>
                  </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const DashboardCard = ({title, value}) => {
  return (
    <div className="card px-4 py-6 bg-green-300 my-4 rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-md text-gray-800 py-2">{title}</h2>
      <p className="text-4xl font-bold text-gray-800/80">{value}</p>
    </div>
  );
};
