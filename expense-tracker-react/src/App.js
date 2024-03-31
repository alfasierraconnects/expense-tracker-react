import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import dummy_expenses from "./DummyExpenses";
import ExpensesChart from "./Components/ExpensesChart/ExpensesChart";

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const [chartData, setChartData] = useState(["YYYY", []]);

  const dataFromNewExpenseHandler = (data) => {
    console.log(data);
    setExpenses((prevState) => [data, ...prevState]);
  };

  const dataForChartHandler = (data) => {
    // console.log(data);
    setChartData(data);
  };

  return (
    <div className="grid grid-cols-2 gap-8 p-10 bg-neutral-600 min-h-screen h-screen">
      <div className="flex flex-col gap-8">
        <ExpensesChart year={chartData[0]} list={chartData[1]} />
        <NewExpenses onSendDataToApp={dataFromNewExpenseHandler} />
      </div>
      <Expenses
        className="overflow-scroll h-full"
        expenses={expenses}
        dataForChart={dataForChartHandler}
      />
    </div>
  );
}

export default App;
