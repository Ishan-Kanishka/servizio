import React, {useState} from 'react';

const EventRequest = () => {
  const [data, setData] = useState ({
    type: '',
    description: '',
    eventDate: '',
    numOfPeople: '',
  });

  const types = ['Birthday', 'Anniversary', 'Corporate', 'Other'];

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('Form submitted:', data);
    submitData (data);
  };

  const submitData = async data => {
    try {
      let res = await fetch ('http://localhost:8080/api/v1/events/add_event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify ({...data, userId: 1}),
      });
      let result = await res.json ();
      console.log ('Success:', result);
      alert ('Event request submitted successfully!');
    } catch (error) {
      console.error ('Error:', error);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-xl p-8 md:p-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🎉 Event Request Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <select
              value={data.type}
              onChange={e => setData ({...data, type: e.target.value})}
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            >
              <option value="">Select Type</option>
              {types.map (type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              value={data.description}
              onChange={e => setData ({...data, description: e.target.value})}
              placeholder="Tell us about your event..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <input
              type="date"
              value={data.eventDate}
              min={new Date ().toISOString ().split ('T')[0]}
              onChange={e => setData ({...data, eventDate: e.target.value})}
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of People
            </label>
            <input
              type="number"
              value={data.numOfPeople}
              onChange={e => setData ({...data, numOfPeople: e.target.value})}
              placeholder="e.g. 50"
              className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition active:scale-95"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRequest;
