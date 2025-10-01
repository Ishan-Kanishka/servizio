import {Pencil, Trash2, User} from 'lucide-react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {useEffect, useState} from 'react';

const Customers = () => {
  const data = {
    code: 202,
    message: 'Accepted',
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'mypassword',
        dateOfBirth: '1990-05-25',
        phoneNumbers: ['123-456-7890', '098-765-4321'],
        role: {
          roleId: 2,
          roleName: 'CUSTOMER',
        },
        address: '123 Main St',
        zipCode: '12345',
        city: 'New York',
        country: 'USA',
        events: [],
        orders: [],
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.s@info.com',
        password: 'securepass',
        dateOfBirth: '1985-10-15',
        phoneNumbers: ['555-123-4567'],
        role: {
          roleId: 2,
          roleName: 'CUSTOMER',
        },
        address: '456 Elm St',
        zipCode: '67890',
        city: 'Los Angeles',
        country: 'USA',
        events: [],
        orders: [],
      },
    ],
  };

  const [customers, setCustomers] = useState (data);

  const getCustomers = async () => {
    let res = await fetch ('http://localhost:8080/api/v1/customer/');
    res = await res.json ();
    setCustomers (res);
    console.log (res);
  };
  useEffect (() => {
    getCustomers ();
  }, []);

  const handleEdit = customerId => {
    console.log ('Edit customer', customerId);
    // Navigate to edit page or open modal
  };

  const handleDelete = customerId => {
    console.log ('Delete customer', customerId);
    // Confirm and delete logic
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="Customers"
          main_to="/admin"
          sub_to="/admin/customers"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <User className="text-green-600 w-8 h-8" />
          <h1 className="text-4xl font-extrabold text-gray-800">Customers</h1>
        </div>

        {/* Table */}
        <div className="w-full bg-white rounded-xl shadow border overflow-x-auto">
          {customers.data.length > 0
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
                      Address
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {customers.data.map (customer => (
                    <tr
                      key={customer.id}
                      className="hover:bg-green-100 odd:bg-gray-50 even:bg-gray-100 transition"
                    >
                      <td className="px-6 py-4 text-gray-800">{customer.id}</td>
                      <td className="px-6 py-4 text-gray-800 capitalize">
                        {customer.name}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {customer.email}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {customer.phoneNumbers.join (', ')}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {customer.address}
                        ,
                        {' '}
                        {customer.city}
                        ,
                        {' '}
                        {customer.country}
                        ,
                        {' '}
                        {customer.zipCode}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {customer.role.roleName}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleEdit (customer.id)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md text-xs font-medium transition"
                          >
                            <Pencil className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete (customer.id)}
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
            : <p className="p-6 text-gray-600">No customers found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Customers;
