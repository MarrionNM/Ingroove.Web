import api from "./apiService";

export const login = async (email, password) => {
  const response = await api.post("/authentication", { email, password });
  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};

export const loginn = async (email, password) => {
  try {
    const response = await api.post("/authentication", { email, password });
    return response.data;
  } catch (err) {
    console.error("Login failed:", err);
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

// src/services/userService.js
export const getUserFromStorage = () => {
  try {
    const userJson = localStorage.getItem("user");
    if (!userJson) return null;
    return JSON.parse(userJson);
  } catch (err) {
    console.error("Failed to parse user from storage:", err);
    return null;
  }
};

export const getUserId = () => {
  const user = getUserFromStorage();
  return user?.id || null;
};

export const getToken = () => localStorage.getItem("token") || null;

export const getRefreshToken = () => localStorage.getItem("refreshToken") || null;

export const isLoggedIn = () => !!getToken();
