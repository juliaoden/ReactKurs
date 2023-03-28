import {FC, useContext, useRef} from "react";
import {TodosContext} from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
