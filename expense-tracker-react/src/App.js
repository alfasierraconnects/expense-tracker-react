import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const dummy_expenses = [
  { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
  { id: "2", date: new Date(2022, 3, 25), title: "Book", price: 10 },
  { id: "3", date: new Date(2022, 10, 11), title: "Pen", price: 1 },
  { id: "4", date: new Date(2021, 1, 14), title: "Laptop", price: 200 },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const dataFromNewExpenseHandler = (data) => {
    console.log(data);
    setExpenses((prevState) => [data, ...prevState]);
  };

  return (
    <div className="flex flex-col gap-6 p-20 bg-neutral-600 min-h-screen">
      <NewExpenses onSendDataToApp={dataFromNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
