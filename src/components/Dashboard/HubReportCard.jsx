import { DollarSign, Ticket, Calendar, ShoppingBag, TrendingUp, Download } from "lucide-react";

const HubReportCard = ({ hub }) => {
  const handleDownload = async (hubId) => {
  try {
    const response = await fetch(`/api/reports/hub/${hubId}/pdf`, {
      method: "GET",
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${hub.hubName}-report.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Failed to download report:", error);
  }
};

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-5 border border-gray-100 dark:border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {hub.hubName}
        </h2>

        {/* Download button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            handleDownload(hub.id);
          }}
          className="p-2 rounded-full bg-primary hover:bg-primary/80 text-white transition-colors"
          title="Download Report"
        >
          <Download className="w-4 h-4" />
        </button>
      </div>


      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <MetricCard
          icon={<Calendar className="w-4 h-4 text-blue-500" />}
          label="Total Events"
          value={hub.totalEvents}
        />
        <MetricCard
          icon={<Ticket className="w-4 h-4 text-green-500" />}
          label="Tickets Sold"
          value={`${hub.totalTicketsSold} / ${hub.totalTicketsAvailable}`}
        />
        <MetricCard
          icon={<DollarSign className="w-4 h-4 text-yellow-500" />}
          label="Ticket Revenue"
          value={`R ${hub.totalTicketRevenue.toLocaleString()}`}
        />
        <MetricCard
          icon={<ShoppingBag className="w-4 h-4 text-pink-500" />}
          label="Extras Sold"
          value={hub.totalExtrasSold}
        />
        <MetricCard
          icon={<DollarSign className="w-4 h-4 text-purple-500" />}
          label="Extras Revenue"
          value={`R ${hub.totalExtrasRevenue.toLocaleString()}`}
        />
        <MetricCard
          icon={<TrendingUp className="w-4 h-4 text-indigo-500" />}
          label="Total Revenue"
          value={`R ${hub.totalRevenue.toLocaleString()}`}
          highlight
        />
      </div>

      {/* Ticket Sale Progress */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Ticket Sales Progress</span>
          <span>{hub.ticketSaleProgress}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-3 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${hub.ticketSaleProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, highlight }) => (
  <div
    className={`flex flex-col gap-1 p-3 rounded-lg ${
      highlight ? "bg-indigo-50 dark:bg-indigo-900/40" : "bg-gray-50 dark:bg-gray-800"
    }`}
  >
    <div className="flex items-center gap-2 text-gray-500 text-xs">
      {icon} {label}
    </div>
    <div
      className={`text-base font-bold ${
        highlight ? "text-indigo-600 dark:text-indigo-300" : "text-gray-700 dark:text-gray-100"
      }`}
    >
      {value}
    </div>
  </div>
);

export default HubReportCard;
