import {useState} from "react";

function useInput(validation) {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const enteredInputIsValid = validation(enteredInput);
  const inputIsValid = !enteredInputIsValid && inputTouched;

  function inputChangeHandler(e) {
    setEnteredInput(e.target.value);
  }

  function inputBlurHandler(e) {
    setInputTouched(true);
  }

  function reset() {
    setEnteredInput("");
    setInputTouched(false);
  }

  return {
    enteredInput,
    inputIsValid,
    enteredInputIsValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
