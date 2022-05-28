import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div>
      <label htmlFor="continents">Select Continent:</label>
      <select name="continents" id="continents" defaultValue="all">
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="antarctica">Antarctica</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="namerica">North America</option>
        <option value="samerica">South America</option>
      </select>
    </div>
  );
};

export default Dropdown;
