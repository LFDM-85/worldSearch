import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.css";
import CountryCard from "../../components/CountryCard/CountryCard";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = () =>
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        setIsLoading(true);

        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        return setCountries(data);
      });

  useEffect(() => {
    fetchData();
  }, []);

  let fetchedcountries = countries.map((place) => place);

  const filterHandler = (event: any) => {
    setSearchValue(() => event.target.value);
    if (searchValue) {
      fetchedcountries = countries
        .filter((country: any, index: number) =>
          country[index]["name"].includes(searchValue)
        )
        .map((place) => place);
    }
    console.log(searchValue);
    return fetchedcountries;
  };

  console.log(fetchedcountries);

  return (
    <div>
      <h1 className="title-searchPage">Word Search</h1>
      <Dropdown />
      <SearchBar searchValueHandler={filterHandler} value={searchValue} />
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
