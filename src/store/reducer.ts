import * as actionTypes from "./actionTypes";

const initialState: CountryState = {
  countries: [],
};

const reducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  switch (action.type) {
    case actionTypes.ADD_COUNTRY:
      const newCountry: Country = {
        id: Math.random(),
        name: action.country.name,
        flags: action.country.flags,
        capital: action.country.capital,
        area: action.country.area,
        continents: action.country.continents,
        latlng: action.country.latlng,
        population: action.country.population,
      };
      return {
        ...state,
        countries: state.countries.concat(newCountry),
      };
    case actionTypes.REMOVE_COUNTRY:
      const updatedCountries: Country[] = state.countries.filter(
        (country) => country.id !== action.country.id
      );
      return {
        ...state,
        countries: updatedCountries,
      };
  }
  return state;
};
export default reducer;
