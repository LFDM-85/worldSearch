import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./CountryPage.css";

const CountryPage = ({ countryInfo, unLoadCountry }: any) => {
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
          <button className="add-buttonInfo"> &#128278;</button>
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
            <div>
              <MapContainer
                center={[
                  countryInfo.latlng[0].toFixed(3),
                  countryInfo.latlng[1].toFixed(3),
                ]}
                zoom={5}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                  position={[
                    countryInfo.latlng[0].toFixed(3),
                    countryInfo.latlng[1].toFixed(3),
                  ]}
                >
                  <Popup>{countryInfo.name.common}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
