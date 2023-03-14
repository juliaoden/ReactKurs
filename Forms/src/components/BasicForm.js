import useInput from "../hooks/use-input";

function BasicForm(props) {
  const {
    enteredInput: enteredFirstName,
    inputIsValid: firstNameIsValid,
    enteredInputIsValid: enteredFirstNameIsValid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredInput: enteredLastName,
    inputIsValid: lastNameIsValid,
    enteredInputIsValid: enteredLastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredInput: enteredEmail,
    inputIsValid: emailIsValid,
    enteredInputIsValid: enteredEmailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }
  function submitHandler(e) {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClasses = firstNameIsValid
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameIsValid
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailIsValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsValid && <p>Please enter a first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsValid && <p>Please enter a last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsValid && <p>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default BasicForm;
