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
  const [countryIsLoaded, setCountyIsLoaded] = useState();
  const [countryIsClicked, setCountyIsClicked] = useState(false);

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

  const loadCountryInfo = (country: any) => {
    setCountyIsClicked(true);
    setCountyIsLoaded(() => country);
  };

  const unLoadCountryInfo = (country: any) => {
    setCountyIsClicked(false);
    setSearchValue(() => "");
    setDropdownValue(() => "");
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
                loadCountry={() => loadCountryInfo(country)}
                key={country["name"]["common"]}
              />
            );
          })}
    </div>
  );

  return (
    <div className="searchPage">
      <h1 className="title-searchPage">Word Search</h1>
      {countryIsClicked || <Dropdown dropHandler={dropdownFilterHandler} />}
      {countryIsClicked || (
        <SearchBar searchValueHandler={filterHandler} value={searchValue} />
      )}
      {countryIsClicked || <div>{listCountry} </div>}
      {countryIsClicked && (
        <CountryPage
          countryInfo={countryIsLoaded}
          unLoadCountry={unLoadCountryInfo}
        />
      )}
    </div>
  );
};

export default SearchPage;
