import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventDetailReport } from "../../services/reportService";
import { format } from "date-fns";
import { Ticket, User, DollarSign } from "lucide-react";

const EventDetailsPage = () => {
  const { eventId } = useParams(); // URL param
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      const data = await getEventDetailReport(eventId);
      setEvent(data);
      setLoading(false);
    };
    fetchEvent();
  }, [eventId]);

  if (loading) return <p>Loading event details...</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Event Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">{event.title}</h1>
        <span className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow-md">
          Event Details
        </span>
      </div>

      {/* Event Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard icon={<Ticket className="w-5 h-5 text-green-500" />} label="Tickets Sold" value={`${event.ticketsSold} / ${event.ticketsAvailable}`} />
        <InfoCard icon={<DollarSign className="w-5 h-5 text-yellow-500" />} label="Ticket Revenue" value={`R ${event.ticketRevenue.toLocaleString()}`} />
        <InfoCard icon={<DollarSign className="w-5 h-5 text-pink-500" />} label="Extras Revenue" value={`R ${event.extrasRevenue.toLocaleString()}`} />
      </div>

      {/* Event Details */}
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <p className="text-gray-700 dark:text-gray-100">{event.description}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {format(new Date(event.date), "dd MMM yyyy @ HH:mm")}
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Hosted by: {event.hubName}</p>
      </div>

      {/* Attendees List */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Attendee</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Phone</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Ticket</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Extras</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {event.attendees.map((att) => (
              <tr key={att.userId}>
                <td className="px-4 py-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  {att.name} {att.surname}
                </td>
                <td className="px-4 py-2">{att.email}</td>
                <td className="px-4 py-2">{att.phone}</td>
                <td className="px-4 py-2">{att.ticketTitle} - R {att.ticketPrice}</td>
                <td className="px-4 py-2">
                  {att.extras.map((ex, idx) => (
                    <span key={idx} className="inline-block bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-xs mr-1">
                      {ex.name} ({ex.price})
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Info card component
const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
    {icon}
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
      <p className="text-lg font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default EventDetailsPage;
