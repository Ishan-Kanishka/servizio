import React from 'react';

const validate = values => {
  const errors = {};
  if (!values.name || !values.name.trim ()) errors.name = 'Name is required';
  if (!values.startDate) errors.startDate = 'Start date is required';
  if (!values.endDate) errors.endDate = 'End date is required';
  if (values.startDate && values.endDate) {
    const s = new Date (values.startDate);
    const e = new Date (values.endDate);
    if (e < s) errors.endDate = 'End date must be after start date';
  }
  const d = Number (values.discount);
  if (values.discount === '' || Number.isNaN (d)) {
    errors.discount = 'Valid discount is required';
  } else if (d < 0 || d > 100) {
    errors.discount = 'Discount must be between 0 and 100';
  }
  return errors;
};

const EditPromo = ({initialValues, onSubmit, onCancel}) => {
  const [values, setValues] = React.useState (
    initialValues || {name: '', startDate: '', endDate: '', discount: ''}
  );
  const [touched, setTouched] = React.useState ({});
  const errors = React.useMemo (() => validate (values), [values]);
  const hasError = key => touched[key] && errors[key];

  const handleChange = e => {
    const {name, value} = e.target;
    setValues (v => ({...v, [name]: value}));
  };

  const handleBlur = e => {
    const {name} = e.target;
    setTouched (t => ({...t, [name]: true}));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    setTouched ({name: true, startDate: true, endDate: true, discount: true});
    const cur = validate (values);
    if (Object.keys (cur).length) return;
    const payload = {
      name: values.name.trim (),
      startDate: values.startDate,
      endDate: values.endDate,
      discount: Number (values.discount),
    };
    if (onSubmit) onSubmit (payload);
  };

  return (
    <div className="w-full bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow border">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Edit Promotion</h2>

        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${hasError ('name') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              placeholder="e.g., Summer Sale"
            />
            {hasError ('name') && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700">Start Date</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={values.startDate}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${hasError ('startDate') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              />
              {hasError ('startDate') && (
                <p className="mt-1 text-xs text-red-600">{errors.startDate}</p>
              )}
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700">End Date</label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={values.endDate}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${hasError ('endDate') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              />
              {hasError ('endDate') && (
                <p className="mt-1 text-xs text-red-600">{errors.endDate}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="discount" className="block text-sm font-semibold text-gray-700">Discount (%)</label>
            <input
              id="discount"
              name="discount"
              type="number"
              min="0"
              max="100"
              step="1"
              value={values.discount}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${hasError ('discount') ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-green-200'}`}
              placeholder="e.g., 20"
            />
            {hasError ('discount') && (
              <p className="mt-1 text-xs text-red-600">{errors.discount}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => onCancel && onCancel ()}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPromo;

