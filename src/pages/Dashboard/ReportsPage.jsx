import { useEffect, useState } from "react";
import { getHubReports } from "../../services/reportService";
import HubReportCard from "../../components/Dashboard/HubReportCard";
import HubDetailReport from "../../components/Dashboard/HubDetailReport"; // create this component
import { motion, AnimatePresence } from "framer-motion";

const ReportsPage = () => {
  const [hubReports, setHubReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHub, setSelectedHub] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      const reports = await getHubReports();
      setHubReports(reports);
      setLoading(false);
    };
    fetchReports();
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white">
        Reports
      </h1>

      {/* Breadcrumbs */}
      {/* <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span
          className={`cursor-pointer ${!selectedHub && "font-bold"}`}
          onClick={() => setSelectedHub(null)}
        >
          Reports
        </span>
        {selectedHub && (
          <>
            <span>/</span>
            <span className="font-bold">{selectedHub.hubName}</span>
          </>
        )}
      </div> */}


      {loading ? (
        <p className="text-gray-500 dark:text-gray-300">Loading reports...</p>
      ) : hubReports.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No reports found.</p>
      ) : (
        <AnimatePresence mode="wait">
          {!selectedHub ? (
            // Hub list view
            <motion.div
              key="hub-list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {hubReports.map((hub) => (
                <div
                  key={hub.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedHub(hub)}
                >
                  <HubReportCard hub={hub} />
                </div>
              ))}
            </motion.div>
          ) : (
            // Hub detail view
            <motion.div
              key="hub-detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="mb-4 text-sm text-blue-500 hover:underline"
                onClick={() => setSelectedHub(null)}
              >
                ← Back to Reports
              </button>
              <HubDetailReport hub={selectedHub} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default ReportsPage;
