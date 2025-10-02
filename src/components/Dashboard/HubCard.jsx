import { Eye, Edit2, Trash2 } from "lucide-react";

const HubCard = ({ hub, onView, onEdit, onDelete }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex flex-col h-[400px]">
      <img
        src={hub.image || "https://via.placeholder.com/400"}
        alt={hub.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold mb-2">{hub.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-6">
          {hub.bio}
        </p>

        <div className="mt-auto flex justify-center gap-4 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => onView(hub)}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            <Eye className="text-primary" size={18} />
          </button>
          <button
            onClick={() => onEdit(hub)}
            className="p-2 rounded-full bg-yellow-200 hover:bg-yellow-300 transition"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(hub)}
            className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition text-white"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HubCard;
