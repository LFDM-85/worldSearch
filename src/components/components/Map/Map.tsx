import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

interface Props {
  countryInfo: Country | undefined;

  lat: number;
  lng: number;
}

const Map: React.FC<Props> = ({ lat, lng, countryInfo }) => {
  return (
    <div>
      <MapContainer center={[lat, lng]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>{countryInfo?.name.common}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
