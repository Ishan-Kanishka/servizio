import {useEffect, useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {ImageOff, Edit, Trash2} from 'lucide-react';
import {deleteMenu} from './util';
import {useNavigate} from 'react-router-dom';

const Menu = () => {
  const data = {
    code: 200,
    message: 'OK',
    data: [
      {
        menuId: 1,
        name: 'None',
        description: 'None None',
        imgUrl: 'https://example.com/null.png',
        price: 0,
        menuIngredients: [],
        available: false,
      },
    ],
  };
  const [menus, setMenus] = useState (data);
  const navigator = useNavigate ();

  const getMenus = async () => {
    let res = await fetch ('http://localhost:8080/api/v1/menus/');
    let data = await res.json ();
    setMenus (data);
  };

  const handleEdit = menuId => {
    console.log ('Edit menu item:', menuId);
    navigator (`/admin/menu/edit/${menuId}`);
  };

  const handleDelete = menuId => {
    console.log ('Delete menu item:', menuId);
    deleteMenu (menuId).then (response => {
      console.log ('Delete response:', response);
      setMenus (prevMenus => ({
        ...prevMenus,
        data: prevMenus.data.filter (menu => menu.menuId !== menuId),
      }));
    });
  };

  useEffect (() => {
    getMenus ();
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
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Menu</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menus.data.map (menu => (
            <div
              key={menu.menuId}
              className="group bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition duration-300 ease-in-out overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={menu.imgUrl}
                  alt={menu.name}
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none';
                  }}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                  {menu.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {menu.description}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">
                    Rs.{menu.price}
                  </span>

                  {menu.available
                    ? <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                        Available
                      </span>
                    : <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-700">
                        Unavailable
                      </span>}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit (menu.menuId)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm font-medium rounded-lg transition duration-200"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete (menu.menuId)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium rounded-lg transition duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
