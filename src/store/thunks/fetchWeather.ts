import { createAsyncThunk } from "@reduxjs/toolkit";

import weather from "@/api/weater";
import { ICountryData } from "@/components/Header/components/Search/Search";
import { Coord, IWeather } from "@/store/slices/currentCity/types";

export const getCurrentWeather = createAsyncThunk<IWeather, ICountryData>(
  "currentCity/fetchByCoordinates",
  async (searchData, thunkAPI) => {
    const [lat, lon] = searchData.value.split(" ");
    try {
      const currentWeatherFetch = await weather.get("/weather", {
        params: { lat, lon },
      });
      return currentWeatherFetch.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateWeather = createAsyncThunk<IWeather, Coord>(
  "allCities/updateByCoordinates",
  async (coord, thunkAPI) => {
    const { lat, lon } = coord;
    console.log("coord", coord);
    try {
      const currentWeatherUpdate = await weather.get("/weather", {
        params: { lat, lon },
      });
      return currentWeatherUpdate.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
