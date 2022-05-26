import { useState } from "react";

const useSearch = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid;

  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    reset,
  };
};

export default useSearch;
