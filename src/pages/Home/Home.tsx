import React, { useEffect } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

import Sceleton from "@/components/Sceleton/Sceleton";
import { ThisDay } from "@/components/ThisDay/ThisDay";
import { useAppSelector } from "@/hooks/hooksHelpers";
import useActions from "@/hooks/useActions";
import { selectAllCities } from "@/store/selectors/allCities.selector";
import {
  selectCurrentCityCoord,
  selectCurrentCityName,
  selectCurrentWeatherLoading,
} from "@/store/selectors/currentCity.selector";

import s from "./Home.module.scss";

const Home = () => {
  const { lon, lat } = useAppSelector(selectCurrentCityCoord);
  const isLoading = useAppSelector(selectCurrentWeatherLoading);
  const currentCityName = useAppSelector(selectCurrentCityName);
  const allCities = Object.values(useAppSelector(selectAllCities));
  const { getCurrentWeather } = useActions();

  useEffect(() => {
    getCurrentWeather({
      value: `${lat} ${lon}`,
      label: "",
    });
  }, [lon, lat, getCurrentWeather]);

  return (
    <div className={s.wrapper}>
      <div className={s.cities}>
        {allCities.map(citi => {
          if (currentCityName !== citi.name) {
            return (
              <div key={citi.name} className={s.city}>
                <ThisDay
                  makeButton
                  temp={citi.main.temp}
                  city={citi.name}
                  total={citi.weather[0].description}
                  icon={citi.weather[0].icon}
                  coord={{ lat, lon }}
                />
              </div>
            );
          }
        })}
      </div>
      {!isLoading ? (
        <iframe
          width="1200"
          height="450"
          src={`https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=52.382&detailLon=4.899&width=1200&height=450&zoom=4&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
              frameBorder="0"`}
        ></iframe>
      ) : (
        <Sceleton count={1} height="450px" width="100%" />
      )}
      {isLoading ? <TopBarProgress /> : null}
    </div>
  );
};

export default Home;
