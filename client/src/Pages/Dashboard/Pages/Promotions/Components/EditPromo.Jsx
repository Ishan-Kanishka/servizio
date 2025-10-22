import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getPromotionById, updatePromotionById} from '../Promotions/utils';

const EditPromo = () => {
  const {id} = useParams ();
  const [promotion, setPromotion] = useState ({
    name: '',
    startDate: '',
    endDate: '',
    discount: '',
  });

  const handleSubmit = e => {
    e.preventDefault ();
    updatePromotionById (id, {
      ...promotion,
      discount: Number (promotion.discount) / 100,
    }).then (data => {
      if (data.code === 200) {
        alert ('Promotion updated successfully!');
      } else {
        alert ('Error updating promotion: ' + data.message);
      }
    });
  };

  useEffect (() => {
    getPromotionById (id).then (data => {
      if (data) {
        setPromotion ({
          name: data.name,
          startDate: data.startDate,
          endDate: data.endDate,
          discount: data.discount * 100,
        });
      }
    });
  }, []);
  return (
    <div className="w-full bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow border"
      >
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
          Edit Promotion #{id}
        </h2>

        <div className="space-y-5">
          <div>

            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={promotion.name}
              onChange={e =>
                setPromotion ({...promotion, name: e.target.value})}
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2`}
              placeholder="e.g., Summer Sale"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-semibold text-gray-700"
              >
                Start Date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={promotion.startDate}
                onChange={e =>
                  setPromotion ({...promotion, startDate: e.target.value})}
                min={promotion.startDate}
                max={promotion.endDate || ''}
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2`}
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-semibold text-gray-700"
              >
                End Date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={promotion.endDate}
                onChange={e =>
                  setPromotion ({...promotion, endDate: e.target.value})}
                min={
                  promotion.startDate ||
                    new Date ().toISOString ().split ('T')[0]
                }
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2`}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="discount"
              className="block text-sm font-semibold text-gray-700"
            >
              Discount (%)
            </label>
            <input
              id="discount"
              name="discount"
              type="number"
              min="0"
              max="100"
              step="1"
              value={promotion.discount}
              onChange={e =>
                setPromotion ({
                  ...promotion,
                  discount: Number (e.target.value),
                })}
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2`}
              placeholder="e.g., 20"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="submit"
            onClick={handleSubmit}
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
