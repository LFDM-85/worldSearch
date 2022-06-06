import React from "react";
import "./Dropdown.css";

interface Props {
  selected: string;
  dropHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  dropdownValue: string;
}

const Dropdown: React.FC<Props> = ({
  selected,
  dropHandler,
  dropdownValue,
}) => {
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
        <option value="">Select...</option>
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
