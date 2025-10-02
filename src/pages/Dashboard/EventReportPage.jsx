import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EventReportPage = ({ event }) => {
  // Example: calculate ticket sales by ticket type
  const labels = event.tickets.map((t) => t.name);
  const data = event.tickets.map((t) => t.salesCount || 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Tickets Sold",
        data,
        backgroundColor: "#139679",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Event Ticket Sales" },
    },
  };

  return (
    <div className="bg-overlay_rr p-6 rounded-xl shadow-lg mt-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Reports</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default EventReportPage;
