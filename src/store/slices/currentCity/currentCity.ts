import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { ICurrentCity } from "@/store/slices/currentCity/types";
import { getCurrentWeather } from "@/store/thunks/fetchWeather";

const initialState: ICurrentCity = {
  // @ts-ignore
  weather: {
    coord: {
      lat: 49.9925,
      lon: 36.2311,
    },
  },
  isLoading: true,
};

const currentCitiSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCurrentWeather.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentWeather.rejected, (state, { payload }) => {
        state.isLoading = false;
        // @ts-ignore
        toast.error(payload.message);
      });
  },
});

export const { reducer } = currentCitiSlice;
