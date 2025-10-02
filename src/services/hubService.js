import api from "./apiService";
import { getUserId } from "./authService";
import { Hub } from "../modals/Hub";

/**
 * @typedef {Object} Hub
 * @property {string} id
 * @property {string} name
 * @property {string} bio
 * @property {string} [image]
 * @property {string} userId
 * @property {Object} [address]
 */

/**
 * Get hubs for the logged-in user
 * @returns {Promise<Hub[]>}
 */
export const getUserHubs = async () => {
  const userId = getUserId();
  if (!userId) return [];

  try {
    const response = await api.get(`/hub/user/${userId}`);
    if (response.data.isSuccess) {
      // unwrap $values if present
      const hubs = response.data.data.$values ?? response.data.data;
        console.log("hubs   ", response.data.data);

      return hubs;
    } else {
      console.warn("Failed to fetch hubs:", response.data.Message);
      return [];
    }
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};
