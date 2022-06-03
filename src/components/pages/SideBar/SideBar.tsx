import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import "./SideBar.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryCardSideBar from "../../components/CountryCardSidebar/CountryCardSideBar";
import { removeCountry } from "../../../store/actionCreators";

const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const countries: readonly Country[] = useSelector(
    (state: CountryState) => state.countries,
    shallowEqual
  );

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => event.target.value);
  };

  return (
    <div className="favorites">
      <h1>Favorites &#128278;</h1>
      <div className="fav-searchbar">
        <SearchBar searchValueHandler={filterHandler} value={searchValue} />
      </div>
      <hr />
      <h2>List of Countries</h2>
      {countries
        .filter(
          (country: Country) =>
            country["name"]["common"].includes(searchValue) || !searchValue
        )
        .map((country: Country) => (
          <CountryCardSideBar
            removeCountry={removeCountry}
            country={country}
            key={Math.random()}
          />
        ))}
    </div>
  );
};

export default SideBar;
