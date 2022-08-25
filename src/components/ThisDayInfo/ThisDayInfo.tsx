import React from "react";

import cloud from "@/assets/images/cloud.png";
import { IWeather } from "@/store/slices/currentCity/types";
import { capitolize } from "@/utils/capitolize";

import s from "./ThisDayInfo.module.scss";
import { ThisDayItem } from "./ThisDayItem";

interface IProps {
  weatherData: IWeather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({ weatherData }: IProps) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(
        weatherData.main.temp
      )}° - ощущается как ${Math.floor(weatherData.main.feels_like)}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weatherData.main.pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: capitolize(weatherData.weather[0].description),
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weatherData.wind.speed} м/с юго-запад - легкий ветер`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
