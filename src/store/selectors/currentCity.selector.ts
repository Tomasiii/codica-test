// import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/index";

export const selectCurrentWeatherData = (state: RootState) => {
  return state.currentCity.weather;
};
export const selectCurrentWeatherLoading = (state: RootState) => {
  return state.currentCity.isLoading;
};

export const selectCurrentCityCoord = (state: RootState) => {
  return state.currentCity.weather.coord;
};

export const selectCurrentCityName = (state: RootState) => {
  return state.currentCity.weather.name;
};

// export const processReSelector = createSelector(
//   processSelector,
//   process => process
// );
