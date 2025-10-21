import {UtensilsCrossed, Pencil, Plus, Trash2} from 'lucide-react';
import BreadCrumb from '../../../../../Components/BradCrumb/BreadCrumb';
import {useNavigate} from 'react-router-dom';

const Tables = () => {
  const navigate = useNavigate();

  // Sample data (you can later replace with an API call)
  const tables = [
    { id: 1, capacity: 2, isAvailable: true },
    { id: 2, capacity: 4, isAvailable: false },
    { id: 3, capacity: 6, isAvailable: true },
    { id: 4, capacity: 8, isAvailable: false },
  ];

  // Handlers
  const addNewTable = () => {
    navigate('/admin/tables/new');
  };

  const editTable = (id) => {
    navigate(`/admin/tables/edit/${id}`);
  };

  const deleteTable = (id) => {
    console.log(`Delete table with ID: ${id}`);
    // Later: API call to delete
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="Tables"
          main_to="/admin"
          sub_to="/admin/tables"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="text-green-600 w-8 h-8" />
            <h1 className="text-4xl font-extrabold text-gray-800">
              Restaurant Tables
            </h1>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={addNewTable}
              className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-600 hover:bg-green-600 font-bold rounded-md shadow transition-all duration-300 hover:text-white group"
            >
              <Plus className="w-6 h-6 border-1 border-green-600 rounded-full p-1 group-hover:border-white group-hover:text-white" />
              Add Table
            </button>
          </div>
        </div>

        {/* Table List */}
        <div className="w-full bg-white rounded-xl shadow border overflow-x-auto">
          {tables.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                    Availability
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {tables.map((table) => (
                  <tr key={table.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-gray-800">{table.id}</td>
                    <td className="px-6 py-4 text-gray-800">{table.capacity}</td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      {table.isAvailable ? (
                        <span className="text-green-600">Available</span>
                      ) : (
                        <span className="text-red-500">Occupied</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => editTable(table.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md text-xs transition"
                        >
                          <Pencil className="w-4 h-4" />
                          Edit
                        </button>

                        <button
                          onClick={() => deleteTable(table.id)}
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
          ) : (
            <p className="p-6 text-gray-600">No tables available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tables;
