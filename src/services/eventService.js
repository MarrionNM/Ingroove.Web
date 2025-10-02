import api from "./apiService";
import { getUserFromStorage } from "./authService";
import { getUserHubs } from "./hubService";

export const getEvents = async () => {
    // const data = await getUserHubs();

  const user = getUserFromStorage();
  if (!user) return [];
  
  try {
    const response = await api.get(`/event/hub?hubId=a1d9b661-3f4a-4c25-bb9b-7f51b4371c01`);
      const events = response.data.data.data.$values ?? response.data.data;
    return events;
  } catch (err) {
    console.error("Failed to fetch Events:", err);
    throw err;
  }
};


export const getEventById = async (id) => {
  const response = await api.get(`/Event/${id}`);
  return response.data;
};

export const createEvent = async (EventData) => {
  const response = await api.post("/Event", EventData);
  return response.data;
};

export const updateEvent = async (id, EventData) => {
  const response = await api.put(`/Event/${id}`, EventData);
  return response.data;
};
