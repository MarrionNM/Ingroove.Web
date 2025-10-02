import React from "react";

/**
 * OverallPerformance component shows total revenue, total tickets sold, and total events
 * @param {Object} props
 * @param {number} props.totalRevenue
 * @param {number} props.totalTickets
 * @param {number} props.totalEvents
 */
const OverallPerformance = ({ totalRevenue, totalTickets, totalEvents }) => {
  const metrics = [
    { label: "Total Revenue", value: `R ${totalRevenue.toLocaleString()}`, color: "text-primary" },
    { label: "Total Tickets Sold", value: totalTickets.toLocaleString(), color: "text-green-500" },
    { label: "Total Events", value: totalEvents.toLocaleString(), color: "text-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex flex-col items-center justify-center"
        >
          <span className="text-sm font-medium text-gray-500">{metric.label}</span>
          <span className={`mt-2 text-xl font-bold ${metric.color}`}>{metric.value}</span>
        </div>
      ))}
    </div>
  );
};

export default OverallPerformance;
