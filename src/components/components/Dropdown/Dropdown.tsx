import "./Dropdown.css";

const Dropdown = (props: any) => {
  return (
    <div>
      <label htmlFor="continents">Select Continent:</label>
      <select
        name="continents"
        id="continents"
        defaultValue={props.selected}
        onChange={props.dropHandler}
        value={props.dropdownValue}
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
