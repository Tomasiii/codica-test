import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { GlobalSvgSelector } from "@/assets/icons/global/GlobalSvgSelector";
import Search from "@/components/Header/components/Search/Search";
import { Theme } from "@/context/ThemeContext";
import useActions from "@/hooks/useActions";
import { useTheme } from "@/hooks/useTheme";

import s from "./Header.module.scss";

const Header = () => {
  const { getCurrentWeather } = useActions();
  const theme = useTheme();
  const options = [
    { value: "46.4857 30.7438", label: "Одесса" },
    { value: "49.9925 36.2311", label: "Харьков" },
    { value: "49.8425 24.0322", label: "Львов" },
    { value: "48.4693 35.0423", label: "Днепр" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <Link to="/" className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </Link>
      <Search />
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          styles={colourStyles}
          options={options}
          onChange={e => (e ? getCurrentWeather(e) : null)}
        />
      </div>
    </header>
  );
};

export default Header;
