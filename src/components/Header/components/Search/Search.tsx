import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import geo from "@/api/geo";
import useActions from "@/hooks/useActions";

export interface ICountryData {
  value: string;
  label: string;
}

const Search = () => {
  const [search, setSearch] = useState<null | ICountryData>(null);
  const { getCurrentWeather } = useActions();

  const loadOptions = (inputValue: string) => {
    return geo
      .get(`/cities`, {
        params: { namePrefix: inputValue, minPopulation: 100000 },
      })
      .then(res => {
        res = res.data;
        return {
          options: res.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData: ICountryData) => {
    setSearch(searchData);
    getCurrentWeather(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={1000}
      value={search}
      loadOptions={loadOptions}
      loadOptionsOnMenuOpen={false}
      styles={{
        menu: provided => ({ ...provided, zIndex: 9999 }),
      }}
      // @ts-ignore
      onChange={handleOnChange}
    />
  );
};

export default Search;
