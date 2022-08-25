import { createSlice } from "@reduxjs/toolkit";

import { IWeather } from "@/store/slices/currentCity/types";

import { getCurrentWeather, updateWeather } from "../thunks/fetchWeather";

const initialState: Record<string, IWeather> = {};

const allCitiesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteCity(state, { payload }) {
      console.log("payload", payload);
      delete state[payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCurrentWeather.fulfilled, (state, { payload }) => {
        state[payload.name] = payload;
      })
      .addCase(updateWeather.fulfilled, (state, { payload }) => {
        state[payload.name] = payload;
      });
  },
});

export const { reducer, actions } = allCitiesSlice;
