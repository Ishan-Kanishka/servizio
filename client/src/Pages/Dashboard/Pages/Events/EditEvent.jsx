import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumb from "../../../../Components/BradCrumb/BreadCrumb";

const EditEvent = () => {
  const { id } = useParams(); // eventId from the URL
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    description: "",
    eventDate: "",
    numOfPeople: "",
    status: false,
  });

  // Fetch existing event data
  const fetchEvent = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/events/${id}`);
      const data = await res.json();
      if (data && data.data) {
        setEventData({
          description: data.data.description,
          eventDate: data.data.eventDate,
          numOfPeople: data.data.numOfPeople,
          status: data.data.status,
        });
      }
    } catch (err) {
      console.error("Error fetching event:", err);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle save/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/api/v1/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (res.ok) {
        alert("Event updated successfully!");
        navigate("/admin/events");
      } else {
        alert("Failed to update event");
      }
    } catch (err) {
      console.error("Error updating event:", err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="Edit Event"
          main_to="/admin"
          sub_to="/admin/events"
        />
      </div>

      <div className="px-12 py-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          Edit Event #{id}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={eventData.eventDate}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of People
            </label>
            <input
              type="number"
              name="numOfPeople"
              value={eventData.numOfPeople}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              min="1"
              required
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="status"
              checked={eventData.status}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label className="text-gray-700 text-sm">
              Confirmed (checked = true)
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/events")}
              className="px-5 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
