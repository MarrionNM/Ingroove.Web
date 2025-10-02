import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventDetails } from "../../services/apiService";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventDetails(eventId);
        setEvent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);

  if (loading) return <p className="text-secondaryText">Loading event...</p>;
  if (!event) return <p className="text-secondaryText">Event not found.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-4">{event.title}</h1>
      <img src={event.image} alt={event.title} className="w-full rounded-xl mb-4" />
      <p className="text-secondaryText mb-4">{event.description}</p>
      <p className="text-primary font-bold mb-4">Price: ${event.price}</p>

      <h2 className="text-2xl font-semibold text-primary mb-2">Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {event.tickets.map((ticket) => (
          <div key={ticket.id} className="bg-overlay_rr p-4 rounded-xl shadow-md">
            <p className="font-semibold">{ticket.name}</p>
            <p className="text-secondaryText">{ticket.description}</p>
            <p className="text-primary font-bold">${ticket.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
