import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpenses(props) {
  const [formActive, setFormActive] = useState(false);

  const formVisibilityHandler = () => {
    setFormActive(!formActive);
  };

  const datafromExpenseFormHandler = (data) => {
    const newExpense = { ...data, id: Math.random().toString() };
    // console.log(newExpense);

    props.onSendDataToApp(newExpense);
  };

  return (
    <>
      {formActive && (
        <button
          onClick={formVisibilityHandler}
          className="font-bold text-white col-span-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          Add Expenses
        </button>
      )}
      {formActive || (
        <ExpenseForm
          onSendDataToNewExpenses={datafromExpenseFormHandler}
          closeForm={formVisibilityHandler}
        />
      )}
    </>
  );
}
