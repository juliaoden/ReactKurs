import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <div>
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
