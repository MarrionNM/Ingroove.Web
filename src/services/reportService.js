import api from "./apiService";
import { getUserId } from "./authService";

/**
 * Fetch overall hub reports for logged-in user
 * @returns {Promise<HubReport[]>}
 */
export const getHubReports = async () => {
  const userId = getUserId();
  if (!userId) return [];

  try {
    const response = await api.get(`/report/hubs/${userId}`);
    
    if (response.data.isSuccess && response.data.data?.$values) {
      // Flatten $values
      return response.data.data.$values;
    }
    return [];
  } catch (err) {
    console.error("Error fetching hub reports:", err);
    return [];
  }
};

export const getHubDetailReport = async (id) => {
  try {
    const response = await api.get(`/report/hub/${id}`);
    
    
    if (response.data.isSuccess) {
        // Flatten $values        
      return response.data.data;
    }
    return [];
  } catch (err) {
    console.error("Error fetching hub reports:", err);
    return [];
  }
};



const downloadPdf = async () => {
    const userId = getUserId();
    if (!userId) return [];

    const response = await fetch(`/report/hub-reports/pdf?userId=${userId}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "HubReports.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
};
