import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import dummy_expenses from "./DummyExpenses";

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
