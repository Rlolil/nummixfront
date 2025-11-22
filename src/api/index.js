import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
export const api = axios.create({
   baseURL,
   credentials: true,
});
console.log("API Base URL:", baseURL);
