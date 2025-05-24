import axios from "axios";
const BASE_URL = "https://your-api-url.com/api"; 
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});




