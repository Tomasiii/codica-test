import React from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Sceleton from "@/components/Sceleton/Sceleton";
import { ThisDay } from "@/components/ThisDay/ThisDay";
import { ThisDayInfo } from "@/components/ThisDayInfo/ThisDayInfo";
import { useAppSelector } from "@/hooks/hooksHelpers";
import s from "@/pages/WeatherDetail/WeatherDetail.module.scss";
import {
  selectCurrentWeatherData,
  selectCurrentWeatherLoading,
} from "@/store/selectors/currentCity.selector";

const MainLayout = () => {
  const isLoading = useAppSelector(selectCurrentWeatherLoading);
  const weatherData = useAppSelector(selectCurrentWeatherData);

  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <div className={s.wrapper}>
          {!isLoading ? (
            <>
              <ThisDay
                temp={weatherData.main.temp}
                city={weatherData.name}
                total={weatherData.weather[0].description}
                icon={weatherData.weather[0].icon}
                coord={weatherData.coord}
              />
              <ThisDayInfo weatherData={weatherData} />
            </>
          ) : (
            <>
              <Sceleton count={1} height="305px" width="400px" />
              <Sceleton count={1} height="305px" width="750px" />
            </>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
