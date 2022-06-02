import * as actionTypes from "./actionTypes";

export function addCountry(country: Country) {
  const action: CountryAction = {
    type: actionTypes.ADD_COUNTRY,
    country,
  };
  return action;
}

export function removeCountry(country: Country) {
  const action: CountryAction = {
    type: actionTypes.REMOVE_COUNTRY,
    country,
  };
  return action;
}
