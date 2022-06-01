import "./CountryPage.css";

//TODO
// Add map

const CountryPage = ({ countryInfo, unLoadCountry }: any) => {
  return (
    <div>
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
          <div className="infodetails">
            <p className="countryNameCard">
              Population: {countryInfo.population}
            </p>
            <p className="countryNameCard">Capital: {countryInfo.capital}</p>
            <p className="countryNameCard">Area: {countryInfo.area} km²</p>
            <p className="countryNameCard">
              Coordenates (lat, lng): {countryInfo.latlng[0].toFixed(3)},{" "}
              {countryInfo.latlng[1].toFixed(3)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
