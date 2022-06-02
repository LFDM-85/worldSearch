import "./SearchBar.css";

// TODO
// view correct types

interface Props {
  searchValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Type A Country"
          onChange={props.searchValueHandler}
          value={props.value}
        />
      </div>
    </div>
  );
};

export default SearchBar;
