import "./CountryPage.css";

const CountryPage = (props: any) => {
  return (
    <div>
      <button className="backbutton" onClick={props.unLoadCountry}>
        &#128281;
      </button>

      <div className="infoCountry"></div>
    </div>
  );
};

export default CountryPage;
