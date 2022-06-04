import "./Dropdown.css";

//TODO Types

const Dropdown = ({ selected, dropHandler, dropdownValue }: any) => {
  return (
    <div>
      <label htmlFor="continents">Select Continent:</label>
      <select
        name="continents"
        id="continents"
        defaultValue={selected}
        onChange={dropHandler}
        value={dropdownValue}
      >
        <option value="select">Select...</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
};

export default Dropdown;
