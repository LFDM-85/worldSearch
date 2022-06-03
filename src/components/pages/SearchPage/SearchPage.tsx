import React, { useState, useEffect } from "react";

import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
// import CountryCard from "../../components/CountryCard/CountryCard";
import CountryPage from "../ContryPage/CountryPage";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addCountry } from "../../../store/actionCreators";

import "./SearchPage.css";
import ListCountry from "../../components/ListCountry/ListCountry";

const SearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [countries, setCountries] = useState<[]>([]);
  const [countryIsLoaded, setCountryIsLoaded] = useState();
  const [countryIsClicked, setCountryIsClicked] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();

  const fetchData = () =>
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data: []) => {
        setCountries(() => data);
      });

  useEffect(() => {
    fetchData();
  }, []);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => event.target.value);
  };

  const dropdownFilterHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDropdownValue(() => event.target.value);
  };

  const saveCountry = React.useCallback(
    (country: Country) => dispatch(addCountry(country)),
    [dispatch]
  );

  const loadCountryInfo = (country: any) => {
    setCountryIsClicked(true);
    setCountryIsLoaded(() => country);
  };

  const unLoadCountryInfo = () => {
    setCountryIsClicked(false);
    setSearchValue(() => "");
    setDropdownValue(() => "");
  };

  return (
    <div className="searchPage">
      {countryIsClicked || <h1 className="title-searchPage">Word Search</h1>}
      {countryIsClicked || <Dropdown dropHandler={dropdownFilterHandler} />}
      {countryIsClicked || (
        <SearchBar searchValueHandler={filterHandler} value={searchValue} />
      )}
      {countryIsClicked || (
        <ListCountry
          countries={countries}
          dropdownValue={dropdownValue}
          searchValue={searchValue}
          loadCountryInfo={loadCountryInfo}
        />
      )}
      {countryIsClicked && (
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
