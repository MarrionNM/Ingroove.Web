import { useEffect, useState } from "react";
import { getHubDetailReport } from "../../services/reportService";
import { motion } from "framer-motion";
import { Ticket, DollarSign, ShoppingBag, Download } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const HubDetailReport = ({ hub }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchHubDetail = async () => {
      const detail = await getHubDetailReport(hub.hubId); 
      setEvents(detail.events.$values);
    };
    fetchHubDetail();
  }, [hub.id]);

  const revenueData = events.map((e) => ({
    name: e.title,
    revenue: e.ticketRevenue + (e.extrasRevenue || 0),
  }));

  const handleDownload = async (hubId) => {
  try {
    const response = await fetch(`/api/reports/hub/${hubId}/pdf`, {
      method: "GET",
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${hub.hubName}-detail-report.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Failed to download hub report:", error);
  }
};

  return (
    <div className="space-y-8">
      {/* Hub Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
    {hub.hubName}
  </h2>

  {/* Download button */}
  <button
    onClick={() => handleDownload(hub.id)}
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md transition-colors"
    title="Download Hub Detail Report"
  >
    <Download className="w-4 h-4" />
    <span>Download Report</span>
  </button>
</div>

      {/* Combined Revenue Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Total Revenue Per Event</h3>
            <div className="w-full h-48">

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={events}
                margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                barSize={18} // thinner bars
                >
                    <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
                <XAxis
                    dataKey="title"
                    tick={{ fill: "#9CA3AF", fontSize: 12 }}
                    axisLine={{ stroke: "#D1D5DB" }}
                    tickLine={false}
                />
                <YAxis
                    tick={{ fill: "#4B5563", fontSize: 12 }}
                    axisLine={{ stroke: "#D1D5DB" }}
                    tickLine={false}
                />
                <Tooltip
                    contentStyle={{
                    backgroundColor: "#111827",
                    border: "none",
                    borderRadius: "6px",
                    color: "#fff",
                    }}
                    cursor={{ fill: "transparent" }}
                />
                <Bar
                    dataKey="ticketRevenue"
                    fill="#6366F1"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={true}
                    activeShape={(props) => <rect {...props} fill="#6366F1" />}
                />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>

      {/* Event Detail Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {events.map((event, index) => {
          const ticketProgress = Math.min((event.ticketsSold / event.totalTickets) * 100, 100);

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4"
            >
            {/* Event Header */}
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {event.title}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(event.date).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    }).replace(",", " @")}
                </span>
            </div>

              {/* Tickets Sold Progress */}
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <div className="flex items-center gap-1"><Ticket className="w-4 h-4 text-green-500" /> Tickets Sold</div>
                  <div>{event.ticketsSold} / {event.totalTickets}</div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${ticketProgress}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>

              {/* Revenue & Extras */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-yellow-500" /> Tickets: R {event.ticketRevenue.toLocaleString()}
                </div>

                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-pink-500" /> Extras: R {event.extrasRevenue.toLocaleString()}
                  </div>
              </div>
            </motion.div>
          );
        })}
      </div>
   
    </div>
  );
};

export default HubDetailReport;
