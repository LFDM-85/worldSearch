import "./CountryCard.css";

const CountryCard = (props: any) => {
  return (
    <div className="countrycard">
      <img className="countryflag" src={props.flag} alt="flag" />
      <p className="countryNameCard">{props.countryname}</p>
      <button className="addcountryfavorite">Add to Favorites</button>
    </div>
  );
};

export default CountryCard;
