import {Award, Pencil, Plus, Trash2} from 'lucide-react';
import BreadCrumb from '../../../../../Components/BradCrumb/BreadCrumb';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {deletePromotionById} from './utils';

const Promotions = () => {
  const defaultPromotions = [
    {
      id: 1,
      name: 'Summer Sale',
      startDate: '2024-06-01',
      endDate: '2024-06-30',
      discount: '20%',
    },
  ];

  const [promotions, setPromotions] = useState (defaultPromotions);
  const navigate = useNavigate ();

  const getPromotions = async () => {
    try {
      let res = await fetch ('http://localhost:8080/api/v1/promotions/');
      let data = await res.json ();
      if (data.code === 200) {
        setPromotions (data.data);
      }
    } catch (error) {
      console.error ('Error fetching promotions:', error);
    }
  };

  const addNewPromotion = () => {
    navigate ('/admin/promotions/new');
  };

  const editPromotion = id => {
    navigate (`/admin/promotions/edit/${id}`);
  };

  const deletePromotion = id => {
    console.log (`Delete promotion with ID: ${id}`);
    deletePromotionById (id).then (data => {
      if (data.code === 200) {
        getPromotions (); // Refresh the promotions list after deletion
      } else {
        console.error ('Error deleting promotion:', data.message);
      }
    });
  };

  useEffect (() => {
    getPromotions ();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="Promotions"
          main_to="/admin"
          sub_to="/admin/promotions"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-3">
            <Award className="text-green-600 w-8 h-8" />
            <h1 className="text-4xl font-extrabold text-gray-800">
              Promotions
            </h1>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={addNewPromotion}
              className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 font-bold rounded-md shadow transition-all duration-300 hover:text-white group"
            >
              <Plus className="w-6 h-6 border-1 border-green-600 rounded-full p-1 group-hover:border-white group-hover:text-white" />
              Add Promotion
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="w-full bg-white rounded-xl shadow border overflow-x-auto">
          {promotions.length > 0
            ? <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      End Date
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Discount
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {promotions.map (promotion => (
                    <tr
                      key={promotion.promotionId || promotion.id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 text-gray-800">
                        {promotion.promotionId || promotion.id}
                      </td>
                      <td className="px-6 py-4 text-gray-800 capitalize">
                        {promotion.name}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {promotion.startDate}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {promotion.endDate}
                      </td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">
                        {promotion.discount * 100 + '%'}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              editPromotion (promotion.promotionId)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md text-xs transition"
                          >
                            <Pencil className="w-4 h-4" />
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              deletePromotion (promotion.promotionId)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 border border-red-500 text-red-500 hover:bg-red-50 rounded-md text-xs font-medium transition"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            : <p className="p-6 text-gray-600">No promotions available.</p>}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
