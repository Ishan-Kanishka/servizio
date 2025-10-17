import React, {Fragment, useEffect, useState} from 'react';
import {useCart} from '../../Contexts/useCart';
import {getMenu} from '../../utils/Menu';
import {createOrder} from '../../utils/Order';
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
  const {orderItems, clearCart} = useCart ();
  const navigate = useNavigate ();
  const [note, setNote] = useState ('');
  const customerId = 1; //:TODO: Hardcoded customer ID for demonstration
  const [enrichedItems, setEnrichedItems] = useState ([]);
  useEffect (
    () => {
      const fetchMenus = async () => {
        const menus = await Promise.all (
          orderItems.map (async item => {
            const res = await getMenu (item.menu_id);
            return {...res.data, quantity: item.quantity};
          })
        );
        setEnrichedItems (menus);
      };

      if (orderItems.length > 0) fetchMenus ();
    },
    [orderItems]
  );

  const total = enrichedItems.reduce (
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    if (!customerId) {
      alert ('Please enter your Customer ID');
      return;
    }

    const payload = {
      customer_id: Number (customerId),
      note,
      orderItems: orderItems.map (({menu_id, quantity}) => ({
        menu_id,
        quantity,
      })),
    };

    let res = createOrder (payload);
    if (!res) {
      alert ('Failed to create order. Please try again.');
      return;
    }

    clearCart ();
    setTimeout (() => {
      navigate ('/successful');
    }, 2000);
    console.log ('Order confirmed:', payload);
    alert ('Order confirmed! Check console for details.');
  };

  return (
    <div className="p-32 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {enrichedItems.length === 0
        ? <p className="text-gray-600">Your cart is empty.</p>
        : <Fragment>
            <table className="w-full mb-6 text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Product Image
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Product
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Quantity
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Price
                  </th>
                  <th className="py-2 px-4 font-semibold text-gray-700">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {enrichedItems.map (
                  ({menuId, imgUrl, name, quantity, price}) => (
                    <tr
                      key={menuId}
                      className="border-b border-gray-200 hover:bg-gray-50 group"
                    >
                      <td className="py-3 px-4">
                        <img
                          src={imgUrl}
                          alt={name}
                          className="w-16 h-16 object-cover rounded-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                      </td>
                      <td className="py-3 px-4">{name}</td>
                      <td className="py-3 px-4">{quantity}</td>
                      <td className="py-3 px-4">${price.toFixed (2)}</td>
                      <td className="py-3 px-4">
                        ${(price * quantity).toFixed (2)}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>

            <div className="flex justify-end mb-6">
              <div className="text-xl font-semibold">
                Total: Rs.{total.toFixed (2)}
              </div>
            </div>

            {/* Customer ID input */}
            <div className="mb-4 hidden">
              <label
                htmlFor="customerId"
                className="block mb-1 font-semibold text-gray-700"
              >
                Customer ID
              </label>
              <input
                type="number"
                id="customerId"
                value={customerId}
                disabled
                placeholder="Enter your customer ID"
                className="w-full disabled:bg-gray-50 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 hover:cursor-not-allowed"
              />
            </div>

            {/* Note input */}
            <div className="mb-6">
              <label
                htmlFor="note"
                className="block mb-1 font-semibold text-gray-700"
              >
                Order Note
              </label>
              <textarea
                id="note"
                value={note}
                onChange={e => setNote (e.target.value)}
                placeholder="Add a note for your order (e.g. Please serve hot)"
                className="w-full text-green-800 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                rows={3}
              />
            </div>

            <button
              onClick={handleConfirm}
              className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              Confirm Order
            </button>
          </Fragment>}
    </div>
  );
};

export default Checkout;
