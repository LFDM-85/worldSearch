import "./SearchBar.css";

// TODO
// view correct types

interface Props {
  searchValueHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<Props> = ({ searchValueHandler, value }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Type A Country"
          onChange={searchValueHandler}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchBar;
