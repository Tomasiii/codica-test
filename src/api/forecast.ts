import axios from "axios";

const forecast = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com/forecast.json",
  headers: {
    "X-RapidAPI-Key": String(import.meta.env.VITE_GEO_KEY),
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
  params: {
    days: "1",
  },
});

export default forecast;
