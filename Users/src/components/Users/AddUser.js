import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredName.trim().length || !enteredAge.trim().length) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age! (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age! (>= 0)",
      });
      return;
    }

    props.onSubmitUser(enteredName, enteredAge);
    document.activeElement.blur();
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal
          onError={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button
            buttonText={"Add User"}
            type={"submit"}
            onClick={submitHandler}
          >
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
