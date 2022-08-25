import React, { useEffect, useState } from "react";

import futureWeather from "@/api/futureWeather";
import { useAppSelector } from "@/hooks/hooksHelpers";
import { selectCurrentCityCoord } from "@/store/selectors/currentCity.selector";

import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

export interface Day {
  datetime: string;
  max_temp: number;
  min_temp: number;
  weather: {
    icon: string;
    description: string;
  };
}

export const Days = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [visibleDay, setVisibleDay] = useState(7);
  const { lat, lon } = useAppSelector(selectCurrentCityCoord);

  useEffect(() => {
    futureWeather
      .get("", { params: { lat, lon } })
      .then(res => setDays(res.data.data));
  }, [lat, lon]);

  return (
    <>
      <Tabs visibleDay={visibleDay} setVisibleDay={setVisibleDay} />
      <div className={s.days}>
        {days.map((day: Day, i) => {
          if (i < visibleDay) {
            return <Card key={day.datetime} day={day} />;
          }
        })}
      </div>
    </>
  );
};
