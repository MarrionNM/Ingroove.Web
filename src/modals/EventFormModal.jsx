import { useState, useEffect } from "react";

const EventFormModal = ({ isOpen, onClose, event, onSave }) => {
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [image, setImage] = useState(event?.image || "");
  const [price, setPrice] = useState(event?.price || 0);

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setImage(event.image);
      setPrice(event.price);
    }
  }, [event]);

  const handleSave = () => {
    const newEvent = { ...event, title, description, image, price };
    onSave(newEvent);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background p-6 rounded-2xl w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">{event ? "Edit Event" : "Create Event"}</h2>
        <div className="space-y-4">
          <input
            className="w-full p-3 rounded bg-overlay_rr text-text"
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full p-3 rounded bg-overlay_rr text-text"
            placeholder="Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w-full p-3 rounded bg-overlay_rr text-text"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="w-full p-3 rounded bg-overlay_rr text-text"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:opacity-90"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFormModal;
