import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getEmployeeById, updateEmployee} from './utils';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';

const EditStaff = () => {
  const {id} = useParams ();
  const [staff, setStaff] = useState (null);

  const handleSubmit = () => {
    updateEmployee (staff).then (res => {
      console.log ('staff updated successfully:', res);
      alert ('Staff updated successfully!');
    });
  };

  useEffect (() => {
    getEmployeeById (id).then (res => {
      setStaff (res.data);
      console.log (staff);
    });
    console.log ('staff ID from params:', id);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="staffs"
          main_to="/admin"
          sub_to="/admin/staff"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          staffs
        </h1>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
          {/*  */}
          {staff
            ? <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Edit staff: {staff.name}
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={staff.name}
                      onChange={e =>
                        setStaff ({...staff, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={staff.email}
                      onChange={e =>
                        setStaff ({...staff, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      salary
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={staff.salary}
                      onChange={e => {
                        setStaff ({
                          ...staff,
                          salary: parseFloat (e.target.value),
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      defaultValue={staff.role.roleName}
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
            : <div className="p-6">Loading staff data...</div>}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default EditStaff;
