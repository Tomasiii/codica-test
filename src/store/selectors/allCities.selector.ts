import { RootState } from "@/store/index";

export const selectAllCities = (state: RootState) => {
  return state.allCities;
};
