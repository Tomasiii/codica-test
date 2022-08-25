import { IIcon } from "@/assets/SunImg/SunImg";

export interface ICurrentCity {
  weather: IWeather;
  isLoading: boolean;
}

export interface IWeather {
  coord: Coord;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  name: string;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  main: string;
  description: string;
  icon: IIcon[keyof IIcon];
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}
