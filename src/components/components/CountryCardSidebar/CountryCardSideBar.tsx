import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import React from "react";
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
    <div className="countrycard">
      <img className="countryflag" src={country["flags"]["png"]} alt="flag" />
      <p className="countryNameCard">{country["name"]["common"]}</p>
      <button onClick={() => deleteCountry(country)}>&#128465;</button>
    </div>
  );
};

export default CountryCardSideBar;
