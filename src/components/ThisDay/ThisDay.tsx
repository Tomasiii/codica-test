import React, { memo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import canselSvg from "@/assets/cancel-button.svg";
import { IIcon, SunImg } from "@/assets/SunImg/SunImg";
import updateSvg from "@/assets/update.svg";
import useActions from "@/hooks/useActions";

import s from "./ThisDay.module.scss";

interface IProps {
  temp: number;
  city: string;
  total: string;
  icon: IIcon[keyof IIcon];
  coord: { lat: number; lon: number };
  makeButton?: boolean;
}

const ThisDay_ = ({
  temp,
  city,
  total,
  icon,
  coord,
  makeButton = false,
}: IProps) => {
  const { updateWeather, deleteCity } = useActions();
  return (
    <div className={s.this__day}>
      {makeButton ? (
        <div className={s.buttons}>
          <img
            src={updateSvg}
            alt="update"
            onClick={() => {
              // @ts-ignore
              toast.promise(updateWeather(coord), {
                pending: "Обновляем погоду",
                success: "Обновлена успешно 👌",
                error: "Произошла ошибка 🤯",
              });
            }}
          />
          <img src={canselSvg} alt="close" onClick={() => deleteCity(city)} />
        </div>
      ) : null}
      <Link
        to={`detail?lat=${coord.lat}&lon=${coord.lon}`}
        style={{ textDecoration: "none" }}
      >
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>{Math.floor(temp)}°</div>
            {makeButton ? null : (
              <div className={s.this__day_name}>Сегодня</div>
            )}
          </div>
          <SunImg id={icon} height={120} width={120} />
        </div>
        <div className={s.bottom__block}>
          <div className={s.this__city}>
            Город: <span>{city}</span>
          </div>
          <div className={s.this__time}>
            Погода: <span>{total}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ThisDay = memo(ThisDay_);
