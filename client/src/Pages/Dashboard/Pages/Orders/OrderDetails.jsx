import {useEffect, useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {useParams} from 'react-router-dom';

const OrderDetails = () => {
  const orderId = useParams ();
  const [orders, setOrders] = useState ([]);
  const getOrderDetails = async () => {
    const res = await fetch (
      'http://localhost:8080/api/v1/order-items/by-order/1'
    );
    const data = await res.json ();
    if (res.ok) {
      setOrders (data.data);
      console.log (data);
    }
  };
  useEffect (() => {
    getOrderDetails ();
  }, []);
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="orders"
          main_to="/admin"
          sub_to="/admin/orders"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Ingredients
        </h1>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
          {orders && orders.length > 0
            ? <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Item ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Menu
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map ((order, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        OID-{order.orderItemId.orderId}-{idx + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.orderItemId.menuId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Rs. {order.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            : <div className="p-6 text-center text-gray-500">
                No order details available.
              </div>}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
