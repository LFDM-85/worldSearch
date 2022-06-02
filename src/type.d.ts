interface Country {
  capital: string[];
  area: number;
  continents: string[];
  flags: Flags;
  latlng: [number, number];
  name: Name;
  population: number;
}

type ICountry = {
  country: Country;
};

interface Flags {
  png: string;
}

interface Name {
  common: string;
}

type Data = {
  data: Country[];
};

type LoadCountry = {
  loadCountry: () => void;
};
type CountryState = {
  country: Country;
};
type CountryAction = {
  type: string;
  country: Country;
};

type DispatchType = (args: CountryAction) => CountryAction;
