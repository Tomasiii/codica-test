import { useEffect, useState } from "react";

import forecast from "@/api/forecast";

import s from "./HourlyChart.module.scss";

interface IProps {
  coord: {
    lon: number;
    lat: number;
  };
}

const HourlyChart = ({ coord }: IProps) => {
  const [hourlyData, setHourlyData] = useState([]);
  const hourlyDataAvarage =
    hourlyData.reduce((sum, curr) => sum + curr, 0) / hourlyData.length;
  const { lat, lon } = coord;

  useEffect(() => {
    const fetchData = async () => {
      const res = await forecast.get("", { params: { q: `${lat},${lon}` } });
      const allHoursForecast = res.data.forecast.forecastday[0].hour;
      const hoursForecast = allHoursForecast.filter(
        (_: any, i: any) => i % 3 === 0
      );
      const hoursForecastTemp = hoursForecast.map((item: any) => item.temp_c);
      setHourlyData(hoursForecastTemp);
    };
    fetchData();
  }, [lon, lat]);

  return (
    <div>
      <div className={s.chart__wrapper}>
        {hourlyData.map((temp, i) => {
          const diff = temp - hourlyDataAvarage;
          const verticalPosition = 50 - diff * 2;
          const bgColor =
            diff == 0
              ? "rgb(255, 255, 0)"
              : diff < 0
              ? `rgb(${255 - Math.abs(diff) * 20}, 255, 0)`
              : `rgb(255, ${255 - Math.abs(diff) * 20}, 0)`;
          return (
            <div key={`${temp}_${i}`} className={s.chart__item}>
              <div
                className={s.chart__temp}
                style={{
                  top: `${verticalPosition}%`,
                  backgroundColor: bgColor,
                }}
              >
                {(temp > 0 ? `+${temp}` : temp) + "°"}
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.chart__time}>
        {hourlyData.map((temp, i) => (
          <div key={`${i}__${temp}`} className={s.chart__hour}>
            {i * 3}:00
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyChart;
