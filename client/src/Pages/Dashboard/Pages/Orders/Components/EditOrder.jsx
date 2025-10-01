import {useParams} from 'react-router-dom';
import BreadCrumb from '../../../../../Components/BradCrumb/BreadCrumb';

const EditOrder = () => {
  const {id} = useParams ();
  const [loading, setLoading] = useState (true);
  const getOrderById = () => {
    fetch (`http://localhost:8080/api/v1/orders/${id}`)
      .then (response => response.json ())
      .then (data => console.log (data))
      .catch (error => console.error ('Error fetching order:', error));
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
        {/*  */}
        {loading
          ? <div className="w-full h-96 flex flex-col items-center justify-center text-gray-400">
              Loading...
            </div>
          : <div className="w-full h-96 flex flex-col items-center justify-center text-gray-400">
              No orders found.
            </div>}
      </div>
    </div>
  );
};

export default EditOrder;
