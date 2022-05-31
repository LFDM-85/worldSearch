import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.css";
import CountryCard from "../../components/CountryCard/CountryCard";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("select");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () =>
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
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

  console.log(dropdownValue);

  return (
    <div>
      <h1 className="title-searchPage">Word Search</h1>
      <Dropdown dropHandler={dropdownFilterHandler} />
      <SearchBar searchValueHandler={filterHandler} value={searchValue} />
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
                  flag={country["flags"]["png"]}
                  countryname={country["name"]["common"]}
                  key={Math.random()}
                />
              );
            })}
      </div>
    </div>
  );
};

export default SearchPage;
