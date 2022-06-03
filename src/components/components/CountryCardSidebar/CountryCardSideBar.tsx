import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import React from "react";
import "./CountryCardSideBar.css";
interface Props {
  country: Country;
  removeCountry: (country: Country) => void;
}

const CountryCardSideBar: React.FC<Props> = ({ country, removeCountry }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCountry = React.useCallback(
    (country: Country) => dispatch(removeCountry(country)),
    [dispatch, removeCountry]
  );
  return (
    <div className="countrycardSideBar">
      <img
        className="countryflagSideBar"
        src={country["flags"]["png"]}
        alt="flag"
      />
      <p className="countryNameCardSideBar">{country["name"]["common"]}</p>
      <button className="deletecountry" onClick={() => deleteCountry(country)}>
        &#128465;
      </button>
    </div>
  );
};

export default CountryCardSideBar;
