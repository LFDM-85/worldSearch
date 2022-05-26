import "./SearchBar.css";
import useSearch from "../../hooks/use-search";

// TODO
// Continent validation
// view correct types

const SearchPage = () => {
  const {
    value: enteredContinent,
    isValid: enteredContinentIsValid,
    // hasError: enteredContinentHasError,
    valueChangeHandler: searchContinentHandler,
    reset: resetInput,
  } = useSearch((value: string) => value.trim() !== "");

  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    if (!enteredContinentIsValid) {
      return;
    }

    console.log(enteredContinent);

    resetInput();
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          className="input"
          placeholder="Type A Country"
          onChange={searchContinentHandler}
          value={enteredContinent}
        />
        {/* {!enteredContinentHasError && <p>Wrong Continent Name</p>} */}
      </form>
    </div>
  );
};

export default SearchPage;
