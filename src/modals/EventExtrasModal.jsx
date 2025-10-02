import { useState, useEffect } from "react";

const EventExtrasModal = ({ isOpen, onClose, extras = [], onSave }) => {
  const [localExtras, setLocalExtras] = useState(extras);

  useEffect(() => {
    setLocalExtras(extras);
  }, [extras]);

  const handleAddExtra = () => {
    setLocalExtras([...localExtras, { name: "", description: "", price: 0, quantity: 1 }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...localExtras];
    updated[index][field] = value;
    setLocalExtras(updated);
  };

  const handleRemove = (index) => {
    const updated = localExtras.filter((_, i) => i !== index);
    setLocalExtras(updated);
  };

  const handleSave = () => {
    onSave(localExtras);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background p-6 rounded-2xl w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Manage Extras</h2>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {localExtras.map((extra, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Name"
                value={extra.name}
                className="p-2 rounded bg-overlay_rr text-text flex-1"
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                value={extra.description}
                className="p-2 rounded bg-overlay_rr text-text flex-1"
                onChange={(e) => handleChange(index, "description", e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                value={extra.price}
                className="p-2 rounded bg-overlay_rr text-text w-24"
                onChange={(e) => handleChange(index, "price", parseFloat(e.target.value))}
              />
              <input
                type="number"
                placeholder="Qty"
                value={extra.quantity}
                className="p-2 rounded bg-overlay_rr text-text w-20"
                onChange={(e) => handleChange(index, "quantity", parseInt(e.target.value))}
              />
              <button
                className="px-2 py-1 bg-red-600 text-white rounded hover:opacity-90"
                onClick={() => handleRemove(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:opacity-90"
            onClick={handleAddExtra}
          >
            Add Extra
          </button>
          <div className="flex gap-2">
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
    </div>
  );
};

export default EventExtrasModal;
