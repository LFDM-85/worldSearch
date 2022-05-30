import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
// import DUMMY_DATA from "../../DUMMY_DATA/DUMMY_DATA";
import "./SearchPage.css";
import CountryCard from "../../components/CountryCard/CountryCard";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () => setIsLoading(true);
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      setIsLoading(false);
      return setCountries(data);
    });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchedcountries = countries.map((country) => country);

  return (
    <div>
      <h1 className="title-searchPage">Word Search</h1>
      <Dropdown />
      <SearchBar />
      <div className="listcountry">
        {isLoading && <p className="loading">Loading...</p>}

        {!isLoading &&
          fetchedcountries.map((country) => {
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
