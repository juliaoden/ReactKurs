import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Bracelet",
    amount: 42.69,
    date: new Date(2023, 2, 3),
  },
  {
    id: "e2",
    title: "Flowers",
    amount: 12.21,
    date: new Date(2023, 2, 22),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 24.25,
    date: new Date(2023, 1, 15),
  },
  {
    id: "e4",
    title: "Clothing",
    amount: 73.26,
    date: new Date(2023, 0, 28),
  },
  {
    id: "e5",
    title: "Geschirr",
    amount: 54.86,
    date: new Date(2022, 6, 17),
  },
  {
    id: "e6",
    title: "Brot",
    amount: 1.5,
    date: new Date(2022, 9, 5),
  },
  {
    id: "e7",
    title: "Hair Color",
    amount: 73.26,
    date: new Date(2024, 3, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
