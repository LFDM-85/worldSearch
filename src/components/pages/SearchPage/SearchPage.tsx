import React, { useState, useEffect, useRef } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addCountry } from "../../../store/actionCreators";

import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryPage from "../ContryPage/CountryPage";
import ListCountry from "../../components/ListCountry/ListCountry";

import "./SearchPage.css";

const SearchPage: React.FC = () => {
  const [searchedValues, setSearchedValues] = useState({
    searchValue: "",
    dropdownValue: "",
  });

  const [countries, setCountries] = useState<[]>([]);
  const [countryIsLoaded, setCountryIsLoaded] = useState();

  const isCountryCliked = useRef(false);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data: []) => {
        setCountries(() => data);
      });
  }, []);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValues({
      ...searchedValues,
      searchValue: event.target.value,
    });
  };

  const dropdownFilterHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchedValues({ ...searchedValues, dropdownValue: event.target.value });
  };

  const saveCountry = React.useCallback(
    (country: Country) => dispatch(addCountry(country)),
    [dispatch]
  );

  const loadCountryInfo = (country: any) => {
    // TODO Types
    setCountryIsLoaded(() => country);
    isCountryCliked.current = true;
  };

  const unLoadCountryInfo = () => {
    setSearchedValues({ ...searchedValues });
    isCountryCliked.current = false;
  };

  return (
    <div className="searchPage">
      {isCountryCliked.current || (
        <h1 className="title-searchPage">Word Search</h1>
      )}
      {isCountryCliked.current || (
        <Dropdown
          dropHandler={dropdownFilterHandler}
          selected={searchedValues.dropdownValue}
        />
      )}
      {isCountryCliked.current || (
        <SearchBar
          searchValueHandler={filterHandler}
          value={searchedValues.searchValue}
        />
      )}
      {isCountryCliked.current || (
        <ListCountry
          countries={countries}
          dropdownValue={searchedValues.dropdownValue}
          searchValue={searchedValues.searchValue}
          loadCountryInfo={loadCountryInfo}
        />
      )}
      {isCountryCliked.current && (
        <CountryPage
          saveCountry={saveCountry}
          countryInfo={countryIsLoaded}
          unLoadCountry={unLoadCountryInfo}
        />
      )}
    </div>
  );
};

export default SearchPage;
