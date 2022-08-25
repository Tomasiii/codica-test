import axios from "axios";

const geo = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "X-RapidAPI-Key": String(import.meta.env.VITE_GEO_KEY),
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});

export default geo;
