import {useEffect, useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {CheckSquare, XSquare, RefreshCcw} from 'lucide-react';
import {deleteTable, getTables, releaseTable, reserveTable} from './util';

const Tables = () => {
  const default_data = {
    code: 200,
    message: 'OK',
    data: [
      {
        id: null,
        capacity: 0,
        available: false,
      },
    ],
  };

  const [tables, setTables] = useState (default_data);

  useEffect (() => {
    getTables (setTables, default_data);
  }, []);

  const handleReserve = id => {
    reserveTable (id, setTables);
    console.log ('Reserve clicked for table ID:', id);
  };

  const handleRelease = id => {
    releaseTable (id, setTables);
    console.log ('Release clicked for table ID:', id);
  };

  const handleDelete = id => {
    deleteTable (id, setTables);
    console.log ('Delete clicked for table ID:', id);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="tables"
          main_to="/admin"
          sub_to="/admin/tables"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Tables
        </h1>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
          {tables.data && tables.data.length > 0
            ? <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Capacity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Availability
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {tables.data.map (table => (
                    <tr key={table.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {table.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {table.capacity}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 capitalize">
                        {table.available
                          ? <span className="flex items-center gap-1 text-green-600">
                              <CheckSquare className="w-4 h-4" />
                              Available
                            </span>
                          : <span className="flex items-center gap-1 text-red-600">
                              <XSquare className="w-4 h-4" />
                              Reserved
                            </span>}
                      </td>
                      <td className="px-6 py-4 text-sm text-right">
                        <div className="flex justify-end gap-3">
                          {table.available
                            ? <button
                                onClick={() => handleReserve (table.id)}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                              >
                                Reserve
                              </button>
                            : <button
                                onClick={() => handleRelease (table.id)}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition"
                              >
                                Release
                              </button>}
                          <button
                            onClick={() => handleDelete (table.id)}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            : <div className="p-6 text-center text-gray-500">
                No tables found.
              </div>}
        </div>
      </div>
    </div>
  );
};

export default Tables;
