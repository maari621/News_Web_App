import { isJwtExpired } from 'jwt-check-expiration';
import axios from 'axios';

const base_url = "http://localhost:8080/api/user";

// Create axios instance
const axiosObject = axios.create({
  baseURL: base_url,
  timeout: 150000, 
});

// Request interceptor
axiosObject.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('id_token');

    if (!token) {
      console.error("No token found, redirecting to login...");
      window.location.replace("/Login");
      return Promise.reject("No token found");
    }

    if (isJwtExpired(token)) {
      console.error("Token expired. Redirecting to login...");
      localStorage.removeItem("id_token"); // Remove expired token
      window.location.replace("/Login");
      return Promise.reject("Token expired");
    }

    console.log("Token attached:", token);
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject("Error");
  }
);

export default axiosObject;
