import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Sceleton from "@/components/Sceleton/Sceleton";
import { useAppSelector } from "@/hooks/hooksHelpers";
import useActions from "@/hooks/useActions";
import HourlyChart from "@/pages/WeatherDetail/components/HourlyChart/HourlyChart";
import {
  selectCurrentWeatherData,
  selectCurrentWeatherLoading,
} from "@/store/selectors/currentCity.selector";

import { Days } from "./components/Days/Days";
import s from "./WeatherDetail.module.scss";

const WeatherDetail = () => {
  const { getCurrentWeather } = useActions();
  const weatherData = useAppSelector(selectCurrentWeatherData);
  const isLoading = useAppSelector(selectCurrentWeatherLoading);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  useEffect(() => {
    getCurrentWeather({
      value: `${lat} ${lon}`,
      label: "",
    });
  }, [getCurrentWeather, lat, lon]);

  return (
    <div className={s.home}>
      {!isLoading ? (
        <HourlyChart coord={weatherData.coord} />
      ) : (
        <Sceleton count={1} height="200px" width="100%" />
      )}
      <Days />
    </div>
  );
};
export default WeatherDetail;
