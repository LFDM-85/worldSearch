import "./CountryCard.css";

const CountryCard = (props: any) => {
  return (
    <div className="countrycard">
      <img className="countryflag" src={props.flag} alt="flag" />
      <p>{props.countryname}</p>
      <button>Add to Favorits</button>
    </div>
  );
};

export default CountryCard;
