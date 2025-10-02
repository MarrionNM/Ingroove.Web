import axios from "axios";

// Base URL of your backend
const BASE_URL = "https://25fu3ry4x7cmb53s4qcov4n6p40ujktl.lambda-url.eu-west-1.on.aws/api"; // or your deployed API

// Get tokens from localStorage
const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

// Save tokens
const saveTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

// Remove tokens on logout
const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

// Create Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 & refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token");

        // Call refresh endpoint
        const res = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });
        saveTokens(res.data);

        // Retry original request with new token
        originalRequest.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
        return api(originalRequest);
      } catch (err) {
        clearTokens();
        window.location.href = "/login"; // Redirect to login if refresh fails
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
