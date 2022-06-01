import { useState, useEffect } from "react";

import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryCard from "../../components/CountryCard/CountryCard";
import CountryPage from "../ContryPage/CountryPage";

import "./SearchPage.css";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countryIsCliked, setCountyIsCliked] = useState(false);

  const fetchData = () =>
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false); // View two sets countries
        setCountries(data);
      });

  useEffect(() => {
    fetchData();
  }, []);

  const filterHandler = (event: any) => {
    setSearchValue(() => event.target.value);
  };

  const dropdownFilterHandler = (event: any) => {
    setDropdownValue(() => event.target.value);
  };

  const loadCountryInfo = () => {
    setCountyIsCliked(true);
  };

  const unLoadCountryInfo = () => {
    setCountyIsCliked(false);
  };

  const listCountry = (
    <div className="listcountry">
      {isLoading && <p className="loading">Loading...</p>}

      {!isLoading &&
        countries
          .filter(
            (country: any) =>
              (country["continents"].includes(dropdownValue) &&
                country["name"]["common"].includes(searchValue)) ||
              (country["continents"].includes(dropdownValue) && !searchValue)
          )
          .map((country) => {
            return (
              <CountryCard
                country={country}
                loadCountry={() => loadCountryInfo()}
                key={country["name"]["common"]}
              />
            );
          })}
    </div>
  );

  return (
    <div>
      <h1 className="title-searchPage">Word Search</h1>
      {countryIsCliked || <Dropdown dropHandler={dropdownFilterHandler} />}
      {countryIsCliked || (
        <SearchBar searchValueHandler={filterHandler} value={searchValue} />
      )}
      {countryIsCliked || <div>{listCountry} </div>}
      {countryIsCliked && <CountryPage unLoadCountry={unLoadCountryInfo} />}
    </div>
  );
};

export default SearchPage;
