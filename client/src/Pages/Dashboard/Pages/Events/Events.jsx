import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
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

  const [events, setEvents] = useState (data);

  const getEvents = async () => {
    let res = await fetch ('http://localhost:8080/api/v1/events/');
    res = await res.json ();
    setEvents (res);
  };

  useEffect (() => {
    getEvents ();
  }, []);

  const handleEdit = (id) => {
  navigate(`/admin/events/edit/${id}`);
 };

  const handleDelete = id => {
    console.log ('Delete event:', id);
  };
  const navigate = useNavigate ();
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

        {events.data.length === 0
          ? <div className="w-full h-96 flex flex-col items-center justify-center text-gray-400">
              No events found.
            </div>
          : <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Event Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Number of People
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {events.data.map (event => (
                  <tr
                    key={event.eventId}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {event.eventId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {event.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {new Date (event.eventDate).toLocaleDateString ()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {event.numOfPeople}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {new Date (event.updatedAt).toLocaleDateString ()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {event.status
                        ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Confirmed
                          </span>
                        : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Pending
                          </span>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end">
                      <button
                        onClick={() => handleEdit (event.eventId)}
                        className="text-blue-400 hover:text-white hover:bg-blue-400 px-3 py-2 border-2 border-blue-400 transition duration-75 rounded-lg mr-4 flex items-center gap-1"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete (event.eventId)}
                        className="text-red-400 hover:text-white hover:bg-red-400 px-3 py-2 border-2 border-red-400 rounded-lg flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
      </div>
    </div>
  );
};

export default Events;
