const EventCard = ({ event }) => {
  return (
    <div className="bg-overlay_rr p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-primary mb-2">{event.title}</h2>
      <p className="text-secondaryText mb-2">{event.date}</p>
      <p className="text-secondaryText mb-4">{event.location}</p>
      <div className="flex gap-2">
        <button className="bg-primary text-white px-3 py-1 rounded hover:opacity-90 transition">
          Details
        </button>
        <button className="bg-red-600 text-white px-3 py-1 rounded hover:opacity-90 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
