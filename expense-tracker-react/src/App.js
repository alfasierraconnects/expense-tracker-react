import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  ];

  return (
    <div className="flex flex-col gap-6 p-20 bg-neutral-600 ">
      <NewExpenses />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
