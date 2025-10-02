import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Calendar, BarChart2, Wallet } from "lucide-react";

const navItems = [
  { name: "Hubs", path: "/dashboard/hubs", icon: <Home size={18} /> },
  { name: "Events", path: "/dashboard/events", icon: <Calendar size={18} /> },
  { name: "Reports", path: "/dashboard/reports", icon: <BarChart2 size={18} /> },
  { name: "Wallet", path: "/dashboard/wallet", icon: <Wallet size={18} /> },
];

const HubDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    // <div className="flex justify-center py-10 px-4 bg-background min-h-screen">
    // <div className="fixed w-full z-50 shadow-md backdrop-blur-md bg-gradient-to-br from-background via-background/80 to-background">
      <div className="flex justify-center py-24 px-6  min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center overflow-hidden">
      <div className="flex w-full max-w-6xl rounded-xl p-4 gap-6">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } bg-gray-100 dark:bg-background transition-all duration-300 rounded-lg shadow-md flex flex-col items-stretch`}
        >
          {/* Top bar */}
          <div className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-primary">Ingroove</h1>
            )}
            <button
              className="p-2 rounded hover:bg-primary/10 transition"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <ChevronLeft size={20} className="text-primary" />
              ) : (
                <ChevronRight size={20} className="text-primary" />
              )}
            </button>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 p-3 rounded-lg transition text-sm group ${
                    isActive
                      ? "bg-primary/30 font-semibold text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:bg-primary/10"
                  }`
                }
              >
                {item.icon}
                {sidebarOpen && <span>{item.name}</span>}
                {!sidebarOpen && (
                  <span className="absolute left-full ml-2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-5 rounded-lg bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HubDashboard;
