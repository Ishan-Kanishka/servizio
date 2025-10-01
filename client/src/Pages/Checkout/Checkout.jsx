import React, { Fragment, useState } from 'react';
import { useCart } from '../../Contexts/useCart';

const menuItems = [
  { id: 1, name: 'Pizza', price: 15 },
  { id: 2, name: 'Burger', price: 10 },
  { id: 3, name: 'Pasta', price: 12 },
];

const Checkout = () => {
  const { orderItems } = useCart();

  const [note, setNote] = useState('');
  const [customerId, setCustomerId] = useState('');

  const enrichedItems = orderItems.map(item => {
    const menuItem = menuItems.find(menu => menu.id === item.menu_id);
    return {
      id: item.menu_id,
      name: menuItem?.name || 'Unknown Item',
      price: menuItem?.price || 0,
      quantity: item.quantity,
    };
  });

  // Calculate total price
  const total = enrichedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    if (!customerId) {
      alert('Please enter your Customer ID');
      return;
    }

    const payload = {
      customer_id: Number(customerId),
      note,
      orderItems: orderItems.map(({ menu_id, quantity }) => ({ menu_id, quantity })),
    };

    console.log('Order confirmed:', payload);
    alert('Order confirmed! Check console for details.');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {enrichedItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <Fragment>
          <table className="w-full mb-6 text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 px-4 font-semibold text-gray-700">Product</th>
                <th className="py-2 px-4 font-semibold text-gray-700">Quantity</th>
                <th className="py-2 px-4 font-semibold text-gray-700">Price</th>
                <th className="py-2 px-4 font-semibold text-gray-700">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {enrichedItems.map(({ id, name, quantity, price }) => (
                <tr
                  key={id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{name}</td>
                  <td className="py-3 px-4">{quantity}</td>
                  <td className="py-3 px-4">${price.toFixed(2)}</td>
                  <td className="py-3 px-4">${(price * quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mb-6">
            <div className="text-xl font-semibold">Total: ${total.toFixed(2)}</div>
          </div>

          {/* Customer ID input */}
          <div className="mb-4">
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
              onChange={e => setCustomerId(e.target.value)}
              placeholder="Enter your customer ID"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
              onChange={e => setNote(e.target.value)}
              placeholder="Add a note for your order (e.g. Please serve hot)"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows={3}
            />
          </div>

          <button
            onClick={handleConfirm}
            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Confirm Order
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Checkout;
