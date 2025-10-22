import React, {useEffect, useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {useParams} from 'react-router-dom';
import {getMenuById, updateMenu} from './util';

const EditMenu = () => {
  const {id} = useParams ();
  const [menu, setMenu] = useState ({
    menuId: '',
    name: '',
    description: '',
    imgUrl: null,
    price: 0,
    menuIngredients: [],
    available: false,
  });

  const handleUpdate = () => {
    updateMenu (id, menu).then (response => {
      console.log ('Update response:', response);
    });
  };

  useEffect (() => {
    getMenuById (id).then (response => {
      setMenu (response.data);
    });
  }, []);
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
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Edit Menu
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 mx-auto w-50">
              <img
                src={menu.imgUrl}
                alt={menu.name}
                className="w-full h-48 object-cover mb-4 rounded-xl"
              />
            </div>
            <input
              type="text"
              className="w-full border text-lg border-gray-300 p-2 rounded mb-4"
              value={menu.name}
              onChange={e => setMenu ({...menu, name: e.target.value})}
            />
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded mb-4"
              value={menu.description}
              onChange={e => setMenu ({...menu, description: e.target.value})}
            />
            <p className="text-lg font-semibold mb-4">
              Price: Rs.
              {' '}
              <input
                type="number"
                onChange={e => setMenu ({...menu, price: e.target.value})}
                value={menu.price}
              />
            </p>
            <p
              className={`mb-4 text-white w-fit py-1 px-2 rounded cursor-pointer ${menu.available ? 'bg-green-600' : 'bg-red-600'}`}
              onClick={() => setMenu ({...menu, available: !menu.available})}
            >
              {menu.available ? 'Available' : 'Not Available'}
            </p>
            <button
              onClick={handleUpdate}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Edit Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
