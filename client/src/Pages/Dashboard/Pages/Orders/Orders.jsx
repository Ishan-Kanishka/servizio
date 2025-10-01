import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {Edit, Trash2} from 'lucide-react';

const Orders = () => {
  const data = {
    code: 202,
    message: 'Accepted',
    data: [
      {
        orderId: 1,
        price: 3900,
        note: 'Please serve hot.',
        orderDate: '2025-10-01',
        status: true,
      },
      {
        orderId: 2,
        price: 2500,
        note: 'No onions, please.',
        orderDate: '2025-10-02',
        status: false,
      },
    ],
  };

  const handleEdit = id => {
    console.log ('Edit order:', id);
  };

  const handleDelete = id => {
    console.log ('Delete order:', id);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="Orders"
          main_to="/admin"
          sub_to="/admin/orders"
        />
      </div>

      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Orders</h1>

        {data.data.length === 0
          ? <div className="w-full h-96 flex flex-col items-center justify-center text-gray-400">
              No orders found.
            </div>
          : <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {data.data.map (order => (
                <div
                  key={order.orderId}
                  className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Order #{order.orderId}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${order.status ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                      >
                        {order.status ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">Price:</span> $
                      {(order.price / 100).toFixed (2)}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">Note:</span> {order.note}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Order Date:</span>{' '}
                      {new Date (order.orderDate).toLocaleDateString ()}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 flex gap-3">
                    <button
                      onClick={() => handleEdit (order.orderId)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm font-medium rounded-lg transition duration-200"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete (order.orderId)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium rounded-lg transition duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>}
      </div>
    </div>
  );
};

export default Orders;
