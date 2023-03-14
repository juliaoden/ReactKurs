import useInput from "../hooks/use-input";

function SimpleInput(props) {
  function validateName(enteredName) {
    return enteredName.trim() !== "";
  }

  function validateEmail(enteredEmail) {
    return enteredEmail.includes("@");
  }
  const {
    enteredInput: enteredName,
    inputIsValid: nameInputIsValid,
    enteredInputIsValid: enteredNameIsValid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput(validateName);

  const {
    enteredInput: enteredEmail,
    inputIsValid: emailInputIsValid,
    enteredInputIsValid: enteredEmailIsValid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  // const [enteredName, setEnteredName] = useState("");
  // const [nameTouched, setNameTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsValid = !enteredNameIsValid && nameTouched;

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailTouched, setEmailTouched] = useState(false);
  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const emailInputIsValid = !enteredEmailIsValid && emailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // function nameInputChangeHandler(e) {
  //   setEnteredName(e.target.value);
  // }

  // function nameInputBlurHandler(e) {
  //   setNameTouched(true);
  // }

  // function mailInputChangeHandler(e) {
  //   setEnteredEmail(e.target.value);
  // }

  // function mailInputBlurHandler(e) {
  //   setEmailTouched(true);
  // }

  function formSubmissionHandler(e) {
    e.preventDefault();

    // setNameTouched(true);
    // setEmailTouched(true);

    if (!enteredEmailIsValid && !enteredNameIsValid) return;

    console.log(enteredName, enteredEmail);

    // setEnteredName("");
    // setEnteredEmail("");
    // setNameTouched(false);
    // setEmailTouched(false);
    resetName();
    resetEmail();
  }

  const nameInputClasses = !nameInputIsValid
    ? "form-control"
    : "form-control invalid";

  const mailInputClasses = !emailInputIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={mailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsValid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
