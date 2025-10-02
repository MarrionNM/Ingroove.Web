import { useEffect, useState } from "react";
import HubCard from "../../components/Dashboard/HubCard";
import Modal from "../../components/Dashboard/Modal";
import { getUserHubs } from "../../services/hubService";

const HubsPage = () => {
  const [hubs, setHubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHub, setSelectedHub] = useState(null);
  const [modalType, setModalType] = useState(null); // "view" | "edit" | "delete"

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const data = await getUserHubs();
        setHubs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHubs();
  }, []);

  const handleCloseModal = () => {
    setSelectedHub(null);
    setModalType(null);
  };

  const handleView = (hub) => {
    setSelectedHub(hub);
    setModalType("view");
  };

  const handleEdit = (hub) => {
    setSelectedHub(hub);
    setModalType("edit");
  };

  const handleDelete = (hub) => {
    setSelectedHub(hub);
    setModalType("delete");
  };

  const handleConfirmDelete = () => {
    console.log("Deleted hub:", selectedHub);
    setHubs((prev) => prev.filter((h) => h.id !== selectedHub.id));
    handleCloseModal();
  };

  return (
    <div className="flex justify-center py-10 px-4 min-h-screen">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-primary mb-6">Your Hubs</h1>

        {loading ? (
          <p className="text-gray-500 dark:text-gray-300">Loading hubs...</p>
        ) : hubs.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">No hubs found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => (
              <HubCard
                key={hub.id}
                hub={hub}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Modals */}
        <Modal
          isOpen={modalType === "view"}
          onClose={handleCloseModal}
          title="View Hub"
        >
          {selectedHub && (
            <div>
              <img
                src={selectedHub.image || "https://via.placeholder.com/400"}
                alt={selectedHub.name}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{selectedHub.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {selectedHub.bio}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Address: {selectedHub.address?.fullAddress || "Not available"}
              </p>
            </div>
          )}
        </Modal>

        <Modal
          isOpen={modalType === "edit"}
          onClose={handleCloseModal}
          title="Edit Hub"
        >
          {selectedHub && (
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                defaultValue={selectedHub.name}
                className="w-full p-3 rounded mb-4 bg-background text-text_Dark border border-border_Dark placeholder-secondary_Text_Dark"
              />
    
              <label className="block text-sm mb-1">Bio</label>
              <textarea
                defaultValue={selectedHub.bio}
                className="w-full p-2 rounded mb-4 bg-background border border-gray-300 dark:background"
                rows={4}
              />
              <button className="bg-primary text-white px-4 py-2 rounded hover:opacity-90">
                Save
              </button>
            </div>
          )}
        </Modal>

        <Modal
          isOpen={modalType === "delete"}
          onClose={handleCloseModal}
          title="Delete Hub"
        >
          {selectedHub && (
            <div>
              <p>
                Are you sure you want to delete <strong>{selectedHub.name}</strong>?
              </p>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-500 text-white hover:opacity-90"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default HubsPage;
