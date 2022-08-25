import axios from "axios";

const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

weather.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    units: "metric",
    lang: "ru",
    appid: `${import.meta.env.VITE_OPEN_WEATHER_KEY}`,
  };

  return config;
});

export default weather;
