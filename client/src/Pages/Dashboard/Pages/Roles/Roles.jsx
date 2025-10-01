import {
  ShieldCheck,
  CreditCard,
  ChefHat,
  User,
  CalendarDays,
  Smile,
  Briefcase,
} from 'lucide-react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {useEffect, useState} from 'react';

const Roles = () => {
  const default_data = {
    code: 202,
    message: 'Accepted',
    data: [
      {roleId: 1, roleName: 'ADMIN'},
      {roleId: 4, roleName: 'CASHIER'},
      {roleId: 3, roleName: 'CHEF'},
      {roleId: 2, roleName: 'CUSTOMER'},
      {roleId: 6, roleName: 'EVENT_COORDINATOR'},
      {roleId: 7, roleName: 'GUEST'},
      {roleId: 5, roleName: 'MANAGER'},
    ],
  };

  const [roles, setRoles] = useState (default_data);

  const getRoles = async () => {
    try {
      const response = await fetch ('http://localhost:8080/api/v1/role/');
      const jsonData = await response.json ();
      setRoles (jsonData);
    } catch (error) {
      console.error ('Error fetching roles:', error);
    }
  };

  useEffect (() => {
    getRoles ();
  }, []);

  const roleIcons = {
    ADMIN: (
      <ShieldCheck className="w-8 h-8 text-indigo-500 group-hover:text-indigo-600" />
    ),
    CASHIER: (
      <CreditCard className="w-8 h-8 text-green-500 group-hover:text-green-600" />
    ),
    CHEF: (
      <ChefHat className="w-8 h-8 text-orange-500 group-hover:text-orange-600" />
    ),
    CUSTOMER: (
      <User className="w-8 h-8 text-blue-500 group-hover:text-blue-600" />
    ),
    EVENT_COORDINATOR: (
      <CalendarDays className="w-8 h-8 text-purple-500 group-hover:text-purple-600" />
    ),
    GUEST: (
      <Smile className="w-8 h-8 text-yellow-500 group-hover:text-yellow-600" />
    ),
    MANAGER: (
      <Briefcase className="w-8 h-8 text-red-500 group-hover:text-red-600" />
    ),
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-6 flex items-center justify-between">
        <BreadCrumb
          main_title="admin"
          sub_title="roles"
          main_to="/admin"
          sub_to="/admin/roles"
        />
      </div>

      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Roles</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {roles.data.map (role => (
            <div
              key={role.roleId}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 transition hover:scale-[1.02] hover:shadow-lg duration-300 ease-in-out group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {roleIcons[role.roleName]}
                  <h2 className="text-xl font-semibold text-gray-800 capitalize tracking-wide">
                    {role.roleName.replace ('_', ' ').toLowerCase ()}
                  </h2>
                </div>
              </div>
              <p className="text-md text-gray-500">Role ID: {role.roleId}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;
