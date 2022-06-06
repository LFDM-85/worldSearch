import CountryCard from "../../components/CountryCard/CountryCard";
import "./ListCountry.css";

interface Props {
  countries: Country[];
  dropdownValue: string;
  searchValue: string;
  loadCountryInfo: (country: Country) => void;
}

const ListCountry: React.FC<Props> = ({
  countries,
  dropdownValue,
  searchValue,
  loadCountryInfo,
}) => {
  return (
    <div className="listcountry">
      {!countries && <p className="loading">Loading...</p>}

      {countries &&
        countries
          .filter(
            (country: Country) =>
              (dropdownValue === "" ||
                country["continents"].includes(dropdownValue)) &&
              (!searchValue || country["name"]["common"].includes(searchValue))
          )
          .map((country: Country) => {
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
};

export default ListCountry;
