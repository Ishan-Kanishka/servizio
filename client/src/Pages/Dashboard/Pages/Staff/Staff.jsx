import {Pencil, Trash2, Users} from 'lucide-react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {useEffect, useState} from 'react';
import {deleteEmployee, getEmployees} from './utils';
import {useNavigate} from 'react-router-dom';

const Staff = () => {
  const default_data = {
    code: 200,
    message: 'OK',
    data: [
      {
        id: 2,
        name: 'Kevin',
        email: 'kev.in@example.com',
        password: 'mypassword',
        dateOfBirth: '2012-05-25',
        phoneNumbers: ['123-456-7890', '098-765-4321'],
        role: {
          roleId: 4,
          roleName: 'CASHIER',
        },
        hiredDate: '2020-01-01',
        salary: 50000,
      },
    ],
  };

  const [staff, setStaff] = useState (default_data);
  const navigate = useNavigate ();

  const getStaff = async () => {
    try {
      getEmployees ().then (res => {
        if (res) {
          setStaff (res);
        }
      });
    } catch (err) {
      console.error ('Failed to fetch staff:', err);
    }
  };

  useEffect (() => {
    getStaff ();
  }, []);

  const handleEdit = id => {
    console.log ('Edit staff', id);
    navigate (`/admin/staff/edit/${id}`);
  };

  const handleDelete = id => {
    console.log ('Delete staff', id);
    deleteEmployee (id).then (success => {
      if (success) {
        setStaff (prevStaff => ({
          ...prevStaff,
          data: prevStaff.data.filter (employee => employee.id !== id),
        }));
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="Staff"
          main_to="/admin"
          sub_to="/admin/staff"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-green-600 w-8 h-8" />
          <h1 className="text-4xl font-extrabold text-gray-800">Staff</h1>
        </div>

        {/* Table */}
        <div className="w-full bg-white rounded-xl shadow border overflow-x-auto">
          {staff.data.length > 0
            ? <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Hired Date
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Salary ($)
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {staff.data.map (employee => (
                    <tr
                      key={employee.id}
                      className="hover:bg-green-100 odd:bg-gray-50 even:bg-gray-100 transition"
                    >
                      <td className="px-6 py-4 text-gray-800">{employee.id}</td>
                      <td className="px-6 py-4 text-gray-800 capitalize">
                        {employee.name}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {employee.email}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {employee.phoneNumbers.join (', ')}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {employee.role.roleName}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {employee.hiredDate}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {employee.salary.toLocaleString ()}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEdit (employee.id)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md text-xs font-medium transition"
                          >
                            <Pencil className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete (employee.id)}
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
            : <p className="p-6 text-gray-600">No staff found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Staff;
