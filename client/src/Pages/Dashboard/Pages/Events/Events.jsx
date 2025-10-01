import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {Edit, Trash2} from 'lucide-react';

const Events = () => {
  const data = {
    code: 200,
    message: 'OK',
    data: [
      {
        eventId: 1,
        description: 'Company Annual Dinner',
        eventDate: '2025-10-16',
        numOfPeople: 50,
        updatedAt: '2025-10-01',
        status: false,
      },
      {
        eventId: 2,
        description: 'Product Launch Event',
        eventDate: '2025-11-05',
        numOfPeople: 100,
        updatedAt: '2025-10-10',
        status: true,
      },
    ],
  };

  const handleEdit = id => {
    console.log ('Edit event:', id);
  };

  const handleDelete = id => {
    console.log ('Delete event:', id);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="events"
          main_to="/admin"
          sub_to="/admin/events"
        />
      </div>

      <div className="px-12 py-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Events</h1>

        {data.data.length === 0
          ? <div className="w-full h-96 flex flex-col items-center justify-center text-gray-400">
              No events found.
            </div>
          : <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.data.map (event => (
                <div
                  key={event.eventId}
                  className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      {event.description}
                    </h2>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Event Date:</span>{' '}
                      {new Date (event.eventDate).toLocaleDateString ()}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Number of People:</span>
                      {' '}
                      {event.numOfPeople}
                    </p>
                    <p className="text-gray-600 mb-3">
                      <span className="font-semibold">Last Updated:</span>{' '}
                      {new Date (event.updatedAt).toLocaleDateString ()}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${event.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                    >
                      {event.status ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => handleEdit (event.eventId)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 text-sm font-medium rounded-lg transition duration-200"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete (event.eventId)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium rounded-lg transition duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>}
      </div>
    </div>
  );
};

export default Events;
