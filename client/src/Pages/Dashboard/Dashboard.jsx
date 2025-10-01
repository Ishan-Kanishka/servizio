import React from 'react';
import BreadCrumb from '../../Components/BradCrumb/BreadCrumb';

const Dashboard = () => {
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
        <DashboardCard title="Total Orders" value="150" />
        <DashboardCard title="Total Customers" value="75" />
        <DashboardCard title="Total Revenue" value="$12,500" />
        <DashboardCard title="Pending Orders" value="20" />
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
                <th className="py-3 px-6 text-left">Customer</th>
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  #1001
                </td>
                <td className="py-3 px-6 text-left">John Doe</td>
                <td className="py-3 px-6 text-left">2024-06-01</td>
                <td className="py-3 px-6 text-left">Completed</td>
                <td className="py-3 px-6 text-left">$250.00</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  #1002
                </td>
                <td className="py-3 px-6 text-left">Jane Smith</td>
                <td className="py-3 px-6 text-left">2024-06-02</td>
                <td className="py-3 px-6 text-left">Pending</td>
                <td className="py-3 px-6 text-left">$150.00</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">#1003</td>
                <td className="py-3 px-6 text-left">Alice Johnson</td>
                <td className="py-3 px-6 text-left">2024-06-03</td>
                <td className="py-3 px-6 text-left">Shipped</td>
                <td className="py-3 px-6 text-left">$300.00</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">#1004</td>
                <td className="py-3 px-6 text-left">Bob Brown</td>
                <td className="py-3 px-6 text-left">2024-06-04</td>
                <td className="py-3 px-6 text-left">Cancelled</td>
                <td className="py-3 px-6 text-left">$0.00</td>
              </tr>
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
