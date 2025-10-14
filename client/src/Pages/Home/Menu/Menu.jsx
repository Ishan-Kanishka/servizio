import React, {useEffect, useState} from 'react';
import {useCart} from '../../../Contexts/useCart';
import {getAllMenus} from '../../../utils/Menu';

const Menu = () => {
  const menu = [
    {
      name: 'Dosa',
      price: 50,
      description: 'A crispy South Indian delicacy...',
      imgUrl: 'https://picsum.photos/seed/dosa/400/300',
    },
    {
      name: 'Idli',
      price: 30,
      description: 'Steamed rice cakes...',
      imgUrl: 'https://picsum.photos/seed/idli/400/300',
    },
    {
      name: 'Vada',
      price: 40,
      description: 'A savory fried snack...',
      imgUrl: 'https://picsum.photos/seed/vada/400/300',
    },
    {
      name: 'Sambar',
      price: 60,
      description: 'A flavorful lentil-based stew...',
      imgUrl: 'https://picsum.photos/seed/sambar/400/300',
    },
    {
      name: 'Chutney',
      price: 20,
      description: 'A variety of condiments...',
      imgUrl: 'https://picsum.photos/seed/chutney/400/300',
    },
    {
      name: 'Uttapam',
      price: 70,
      description: 'A thick pancake topped with vegetables...',
      imgUrl: 'https://picsum.photos/seed/uttapam/400/300',
    },
  ];

  const [data, setData] = useState ({data: menu});
  const {addToCart} = useCart ();
  // const getMenus = async () => {
  //   let res = await fetch ('http://localhost:8080/api/v1/menus/');
  //   let data = await res.json ();
  //   console.log (data);
  //   setData (data);
  // };

  useEffect (() => {
    getAllMenus ()
      .then (res => setData (res))
      .catch (err => console.error (err));
  }, []);

  return (
    <section className="px-4 md:px-12 py-10 bg-gradient-to-br from-white via-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-md">
          🍽️ Our Menu
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.data.map (item => (
            <div
              key={item.name}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 group"
            >
              <figure className="overflow-hidden">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="h-60 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </figure>

              <div className="p-6">
                <h3 className="text-2xl text-green-700 font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-md mb-4 h-20 overflow-hidden line-clamp-3">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <span className="text-lg font-bold text-green-600">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => addToCart (item.menuId)}
                    className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 active:scale-95 transition duration-200 shadow-md"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow-sm text-gray-700 font-medium">
                🌶️ South Indian
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
