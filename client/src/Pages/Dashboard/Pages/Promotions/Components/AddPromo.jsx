import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

const initialValues = {
  name: '',
  startDate: '',
  endDate: '',
  discount: '',
};

const AddPromo = () => {
  const [values, setValues] = React.useState (initialValues);
  const [errors, setErrors] = React.useState ({});
  const navigate = useNavigate ();

  const handleChange = e => {
    const {name, value} = e.target;
    setValues (prev => ({...prev, [name]: value}));
  };

  const validate = () => {
    const err = {};
    if (!values.name.trim ()) err.name = 'Name is required';
    if (!values.startDate) err.startDate = 'Start date is required';
    if (!values.endDate) err.endDate = 'End date is required';

    if (values.startDate && values.endDate) {
      const s = new Date (values.startDate);
      const e = new Date (values.endDate);
      if (e < s) err.endDate = 'End date must be after start date';
    }

    const discount = Number (values.discount);
    if (values.discount === '' || Number.isNaN (discount)) {
      err.discount = 'Valid discount is required';
    } else if (discount < 0 || discount > 100) {
      err.discount = 'Discount must be between 0 and 100';
    }

    return err;
  };

  const handleSubmit = e => {
    e.preventDefault ();
    const formErrors = validate ();
    if (Object.keys (formErrors).length > 0) {
      setErrors (formErrors);
      return;
    }
    const payload = {
      ...values,
      discount: Number (values.discount) / 100,
    };

    console.log ('Submitted:', payload);
    submitData (payload);

    // setValues (initialValues);
    navigate ('/admin/promotions');
  };
  const submitData = async data => {
    try {
      const response = await fetch (
        'http://localhost:8080/api/v1/promotions/save_promotion',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify (data),
        }
      );
      if (!response.ok) {
        throw new Error ('Network response was not ok');
      }
      const result = await response.json ();
      console.log ('Success:', result);
    } catch (error) {
      console.error ('Error:', error);
    }
  };

  const handleCancel = () => {
    setValues (initialValues);
    setErrors ({});
  };

  return (
    <div className="w-full bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow border"
      >
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
          Add Promotion
        </h2>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              placeholder="e.g., Winter Sale"
            />
            {errors.name &&
              <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Start & End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-semibold text-gray-700"
              >
                Start Date
              </label>
              <input
                name="startDate"
                type="date"
                value={values.startDate}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.startDate ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              />
              {errors.startDate &&
                <p className="text-xs text-red-600 mt-1">{errors.startDate}</p>}
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-semibold text-gray-700"
              >
                End Date
              </label>
              <input
                name="endDate"
                type="date"
                value={values.endDate}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.endDate ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              />
              {errors.endDate &&
                <p className="text-xs text-red-600 mt-1">{errors.endDate}</p>}
            </div>
          </div>

          {/* Discount */}
          <div>
            <label
              htmlFor="discount"
              className="block text-sm font-semibold text-gray-700"
            >
              Discount (%)
            </label>
            <input
              name="discount"
              type="number"
              value={values.discount}
              min="0"
              max="100"
              step="1"
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.discount ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              placeholder="e.g., 25"
            />
            {errors.discount &&
              <p className="text-xs text-red-600 mt-1">{errors.discount}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow transition"
          >
            Save Promotion
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPromo;
