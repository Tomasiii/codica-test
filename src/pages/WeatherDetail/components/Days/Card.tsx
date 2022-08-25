import React from "react";

import { SunImg } from "@/assets/SunImg/SunImg";
import { capitolize } from "@/utils/capitolize";

import { Day } from "./Days";
import s from "./Days.module.scss";

interface Props {
  day: Day;
}

export const Card = ({ day }: Props) => {
  const timeFormater = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
  const currentDate = timeFormater.format(Date.parse(day.datetime));
  const [weekDay, dayAndMonth] = currentDate.split(",");

  return (
    <div className={s.card}>
      <div className={s.day}>{capitolize(weekDay)}</div>
      <div className={s.day__info}>{dayAndMonth}</div>
      <div className={s.img}>
        <SunImg removePrefix height={80} width={80} id={day.weather.icon} />
      </div>
      <div className={s.temp__day}>{day.max_temp + "°"}</div>
      <div className={s.temp__night}>{day.min_temp + "°"}</div>
      <div className={s.info}>{day.weather.description}</div>
    </div>
  );
};
