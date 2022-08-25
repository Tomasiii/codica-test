import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as allCitiesActions } from "@/store/slices/allCities";
import * as fetchWeather from "@/store/thunks/fetchWeather";

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          ...fetchWeather,
          ...allCitiesActions,
        },
        dispatch
      ),
    [dispatch]
  );
};

export default useActions;
