import React from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';

const EditMenu = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="menu"
          main_to="/admin"
          sub_to="/admin/menu"
        />
      </div>

      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Menu</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
