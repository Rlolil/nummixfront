import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
export const api = axios.create({
   baseURL,
   credentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

console.log("API Base URL:", baseURL);
