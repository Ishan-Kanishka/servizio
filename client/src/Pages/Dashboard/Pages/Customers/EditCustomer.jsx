import React, {useEffect, useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {getCustomerById, updateCustomer} from './utils';
import {useParams} from 'react-router-dom';

const EditCustomer = () => {
  const {id} = useParams ();
  const [customer, setCustomer] = useState (null);

  useEffect (() => {
    getCustomerById (id).then (res => setCustomer (res.data));
    console.log ('Customer ID from params:', id);
    console.log (customer);
  }, []);

  const handleSubmit = () => {
    updateCustomer (customer).then (res => {
      console.log ('Customer updated successfully:', res);
    });
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="customers"
          main_to="/admin"
          sub_to="/admin/customers"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Customers
        </h1>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
          {/*  */}
          {customer
            ? <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Edit Customer: {customer.name}
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={customer.name}
                      onChange={e =>
                        setCustomer ({...customer, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={customer.email}
                      onChange={e =>
                        setCustomer ({...customer, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={customer.address}
                      onChange={e =>
                        setCustomer ({...customer, address: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={customer.role.roleName}
                      disabled
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={e => {
                        e.preventDefault ();
                        handleSubmit ();
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            : <div className="p-6">Loading customer data...</div>}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
