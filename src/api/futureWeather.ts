import axios from "axios";

const futureWeather = axios.create({
  baseURL: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
  headers: {
    "X-RapidAPI-Key": String(import.meta.env.VITE_GEO_KEY),
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
  params: {
    lang: "ru",
  },
});

export default futureWeather;
