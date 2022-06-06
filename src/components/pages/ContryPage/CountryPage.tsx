import { useSelector } from "react-redux";
import Map from "../../components/Map/Map";

import "./CountryPage.css";

interface Props {
  countryInfo: Country;

  saveCountry: (country: Country) => void;
  unLoadCountry: () => void;
}

const CountryPage: React.FC<Props> = ({
  countryInfo,
  unLoadCountry,
  saveCountry,
}) => {
  const lat = Number(countryInfo?.latlng[0].toFixed(3));
  const lng = Number(countryInfo?.latlng[1].toFixed(3));
  // const [exists, setExists] = useState(false);

  const countries: readonly Country[] = useSelector(
    (state: CountryState) => state.countries
  );

  const exists =
    countries !== undefined &&
    countries.some(
      (country) => country.name.common === countryInfo.name.common!
    );

  const addNewCountry = () => {
    saveCountry(countryInfo);
  };

  return (
    <>
      <button className="backbutton" onClick={unLoadCountry}>
        &#128281;
      </button>

      <div className="infoCountry">
        <div className="countrycardInfo">
          <img
            className="countryflagInfo"
            src={countryInfo.flags.png}
            alt="flag"
          />
          <p className="countryNameCard">{countryInfo.name.common}</p>
          {!exists && (
            <button className="add-buttonInfo" onClick={addNewCountry}>
              {" "}
              &#128278;
            </button>
          )}

          <div className="infodetails">
            <p className="countryNameCard">
              Population: {countryInfo?.population}
            </p>
            <p className="countryNameCard">Capital: {countryInfo.capital}</p>
            <p className="countryNameCard">Area: {countryInfo.area} km²</p>
            <p className="countryNameCard">
              Coordenates (lat, lng): {lat},{lng}
            </p>
            <Map lat={lat} lng={lng} countryInfo={countryInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
