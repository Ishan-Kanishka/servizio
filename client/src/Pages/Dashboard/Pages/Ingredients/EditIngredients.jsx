import React, {useEffect, useState} from 'react';
import {getIngredientById, updateIngredient} from './util';
import {useParams} from 'react-router-dom';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';

const EditIngredients = () => {
  const [ingName, setIngName] = useState ('');
  const {id} = useParams ();

  useEffect (
    () => {
      getIngredientById (id).then (res => {
        setIngName (res.data.name);
        console.log ('Ingredient data:', res.data.name);
      });
      console.log ('Loaded ingredient:', id);
    },
    [id]
  );

  const handleUpdate = async () => {
    try {
      const res = await updateIngredient (id, ingName);
      console.log ('Ingredient updated:', res);
    } catch (error) {
      console.error ('Update failed:', error);
    }
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
          <div>
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
                  defaultValue={ingName}
                  onChange={e => setIngName (e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleUpdate}
                >
                  Update Ingredient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditIngredients;
