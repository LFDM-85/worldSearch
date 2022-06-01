import "./CountryPage.css";

const CountryPage = ({ countryInfo, unLoadCountry }: any) => {
  console.log("Props", countryInfo);
  return (
    <div>
      <button className="backbutton" onClick={unLoadCountry}>
        &#128281;
      </button>

      <div className="infoCountry">
        <div className="countrycard">
          <img className="countryflag" src={countryInfo.flags.png} alt="flag" />
          <p className="countryNameCard">{countryInfo.name.common}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
