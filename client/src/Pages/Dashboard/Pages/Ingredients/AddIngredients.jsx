import {useState} from 'react';
import {createIngredient} from './util';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';

const AddIngredients = () => {
  const [ingName, setingName] = useState ('');
  const handleAddIngredient = () => {
    createIngredient (ingName);
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="ingredients"
          main_to="/admin"
          sub_to="/admin/ingredients"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Ingredients
        </h1>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">

          <div className="p-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="ingredientName"
              >
                Ingredient Name
              </label>
              <input
                type="text"
                id="ingredientName"
                value={ingName}
                onChange={e => setingName (e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              onClick={handleAddIngredient}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Ingredient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIngredients;
