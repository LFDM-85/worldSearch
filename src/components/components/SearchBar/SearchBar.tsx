import "./SearchBar.css";

// TODO
// view correct types

const SearchPage = (props: any) => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Type A Country"
          onChange={props.filterHandler}
          value={props.searchValue}
        />
        {/* {!enteredContinentHasError && <p>Wrong Continent Name</p>} */}
      </div>
    </div>
  );
};

export default SearchPage;
