import api from "./apiService";
import { getUserFromStorage } from "./authService";


export const getHubWallet = async () => {
  try {
    // const response = await api.get(`/wallet/${id}`);
    const response = await api.get(`/wallet/b2f0c672-2f75-469c-92f7-8c64a0a82b12`); 
    return response.data?.data;
  } catch (err) {
    console.error("Failed to fetch Events:", err);
    throw err;
  }
};

export const getHubTransactions = async () => {
  try {
    const response = await api.get(`/wallet/transactions/cc49848b-f790-4b9c-9e92-469d475d1c88`);
    const events = response.data.data.$values ?? response.data.data;
    return events;
  } catch (err) {
    console.error("Failed to fetch Events:", err);
    throw err;
  }
};
