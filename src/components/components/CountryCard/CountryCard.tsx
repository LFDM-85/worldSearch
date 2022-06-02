import "./CountryCard.css";

interface Props {
  country: Country;
  loadCountry: () => void;
}

const CountryCard: React.FC<Props> = ({ country, loadCountry }) => {
  return (
    <div className="countrycard">
      <img className="countryflag" src={country["flags"]["png"]} alt="flag" />
      <p className="countryNameCard">{country["name"]["common"]}</p>
      <button onClick={loadCountry}>&#x1F50D;</button>
    </div>
  );
};

export default CountryCard;
