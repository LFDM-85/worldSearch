import "./SearchBar.css";

// TODO
// view correct types

const SearchBar = (props: any) => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Type A Country"
          onChange={props.searchValueHandler}
          value={props.searchValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;
