import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBar from "../../components/SearchBar/SearchBar";
import DUMMY_DATA from "../../DUMMY_DATA/DUMMY_DATA";
import "./SearchPage.css";
import CountryCard from "../../components/CountryCard/CountryCard";

const SearchPage = () => {
  return (
    <div>
      <h1 className="title-searchPage">Word Search</h1>
      <Dropdown />
      <SearchBar />
      <div className="listcountry">
        {DUMMY_DATA.map((country) => {
          return (
            <CountryCard
              flag={country.flags.png}
              countryname={country.name.common}
              key={country.population}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
