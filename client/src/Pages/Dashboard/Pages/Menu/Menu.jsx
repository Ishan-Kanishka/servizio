import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {ImageOff, Edit, Trash2} from 'lucide-react';

const Menu = () => {
  const handleEdit = menuId => {
    console.log ('Edit menu item:', menuId);
  };

  const handleDelete = menuId => {
    console.log ('Delete menu item:', menuId);
  };

  const data = {
    code: 200,
    message: 'OK',
    data: [
      {
        menuId: 1,
        name: 'Burger',
        description: 'Delicious beef burger',
        imgUrl: 'https://example.com/1.png',
        price: 1200,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 2,
        name: 'Pizza',
        description: 'Cheesy pepperoni pizza',
        imgUrl: 'https://example.com/2.png',
        price: 1500,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 3,
        name: 'Pasta',
        description: 'Creamy Alfredo pasta',
        imgUrl: 'https://example.com/3.png',
        price: 1300,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 4,
        name: 'Salad',
        description: 'Fresh garden salad',
        imgUrl: 'https://example.com/4.png',
        price: 800,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 5,
        name: 'Sushi',
        description: 'Assorted sushi platter',
        imgUrl: 'https://example.com/5.png',
        price: 2000,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 6,
        name: 'Steak',
        description: 'Grilled ribeye steak',
        imgUrl: 'https://example.com/6.png',
        price: 2500,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 7,
        name: 'Tacos',
        description: 'Spicy chicken tacos',
        imgUrl: 'https://example.com/7.png',
        price: 1100,
        menuIngredients: [],
        available: true,
      },
      {
        menuId: 8,
        name: 'Leaf',
        description: '1',
        imgUrl: 'https://example.com/8.jpg',
        price: 2000,
        menuIngredients: [],
        available: true,
      },
    ],
  };

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
          {data.data.map (menu => (
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
                    ${menu.price / 100}
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
