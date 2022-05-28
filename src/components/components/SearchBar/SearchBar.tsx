import { useState } from "react";

import "./SearchBar.css";

// TODO
// view correct types

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchValueHandler = (event: any) => {
    setSearchValue(() => event.target.value);
  };

  console.log(searchValue);

  return (
    <div>
      <form>
        <input
          type="text"
          className="input"
          placeholder="Type A Country"
          onChange={searchValueHandler}
          value={searchValue}
        />
        {/* {!enteredContinentHasError && <p>Wrong Continent Name</p>} */}
      </form>
    </div>
  );
};

export default SearchPage;
