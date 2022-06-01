import "./CountryCard.css";

const CountryCard = (props: any) => {
  return (
    <div className="countrycard">
      <img
        className="countryflag"
        src={props.country["flags"]["png"]}
        alt="flag"
      />
      <p className="countryNameCard">{props.country["name"]["common"]}</p>
      <button onClick={props.loadCountry}>&#x1F50D;</button>
    </div>
  );
};

export default CountryCard;
