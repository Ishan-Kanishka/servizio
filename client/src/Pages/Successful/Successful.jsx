import {CheckCircle2} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

const Successful = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <CheckCircle2 className="mx-auto mb-6 text-green-500" size={64} />
        <Link
          to="/"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Successful;
