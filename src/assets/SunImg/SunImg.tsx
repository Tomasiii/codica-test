import React from "react";

export interface IProps {
  id: IIcon[keyof IIcon];
  width?: number;
  height?: number;
  removePrefix?: boolean;
}

export interface IIcon {
  id:
    | "hh"
    | "01d"
    | "01n"
    | "02d"
    | "02n"
    | "03d"
    | "03n"
    | "04d"
    | "04n"
    | "09d"
    | "09n"
    | "10d"
    | "10n"
    | "11d"
    | "11n"
    | "13d"
    | "13n"
    | "50d"
    | "50n";
}

export const SunImg = ({
  id,
  height = 150,
  width = 150,
  removePrefix = false,
}: IProps) => {
  // if (id === "01d") return <GlobalSvgSelector id={"sun"} />;
  const filename = `${removePrefix ? id.slice(1) : id}.png`; // Different APIs have different icon names
  console.log("filename", filename);
  return (
    <img
      src={`/icons/${filename}`}
      alt="Error"
      style={{
        height: height,
        width: width,
        transform: `scale(1.75) translateX(5%)`,
        pointerEvents: "none",
      }}
    />
  );
};
