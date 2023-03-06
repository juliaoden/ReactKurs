import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

function NewExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);
  function saveExpenseDataHandler(enteredData) {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setAddNewExpense(false);
  }

  function addNewExpenseHandler() {
    setAddNewExpense(true);
  }

  function cancelHandler() {
    setAddNewExpense(false);
  }

  return (
    <div className="new-expense">
      {!addNewExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {addNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
