import React, { useState, useRef } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
import dummy_expenses from "./DummyExpenses";
import ExpensesChart from "./Components/ExpensesChart/ExpensesChart";
import DeleteExpenseModal from "./Components/Modal/DeleteExpenseModal";

function App() {
  // State variables
  const [expenses, setExpenses] = useState(dummy_expenses);
  const [chartData, setChartData] = useState(["YYYY", []]);
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  // Ref for the ID of the expense to be deleted
  let idToDelete = useRef(null);

  // Handler for receiving new expense data
  const dataFromNewExpenseHandler = (data) => {
    setExpenses((prevState) => [data, ...prevState]);
  };

  // Handler to toggle delete modal
  const modalActiveHandler = () => {
    setDeleteModalActive(!deleteModalActive);
  };

  // Handler to confirm delete and update expenses list
  const confirmDeleteHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((el) => el.id !== id));
    modalActiveHandler();
    idToDelete.current = null;
  };

  // Handler to set the ID of the expense to be deleted and activate delete modal
  const expenseToDeleteHandler = (id) => {
    idToDelete.current = id;
    modalActiveHandler();
  };

  // Handler to update chart data
  const dataForChartHandler = (data) => {
    setChartData(data);
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-neutral-600 min-h-screen relative">
      <div className="flex flex-col gap-6">
        {/* Display ExpensesChart and NewExpenses components */}
        <ExpensesChart year={chartData[0]} list={chartData[1]} />
        <NewExpenses onSendDataToApp={dataFromNewExpenseHandler} />
      </div>
      {/* Display Expenses component */}
      <Expenses
        expenses={expenses}
        dataForChart={dataForChartHandler}
        deleteExpense={expenseToDeleteHandler}
      />
      {/* Conditionally render DeleteExpenseModal */}
      {deleteModalActive && (
        <DeleteExpenseModal
          modalActive={modalActiveHandler}
          confirmDelete={confirmDeleteHandler}
          id={idToDelete.current}
        />
      )}
    </div>
  );
}

export default App;
