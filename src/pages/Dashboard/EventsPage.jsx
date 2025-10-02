import { useEffect, useState } from "react";
import api from "../../services/apiService";
import { getEvents } from "../../services/eventService"; 

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();

      setEvents(response);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Events</h1>

      {loading ? (
        <p className="text-secondaryText">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-secondaryText">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.image || "https://via.placeholder.com/400"}
                alt={event.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-6">
                  {event.description}
                </p>
                <div className="flex justify-between mt-4">
                  <button className="bg-primary text-white py-1 px-3 rounded-md hover:opacity-90 text-sm">
                    View
                  </button>
                  <button className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white py-1 px-3 rounded-md hover:opacity-80 text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:opacity-90 text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
