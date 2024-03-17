import React from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpenses(props) {
  const datafromExpenseFormHandler = (data) => {
    const newExpense = { ...data, id: Math.random().toString() };
    console.log(newExpense);

    props.onSendDataToApp(newExpense);
  };

  return <ExpenseForm onSendDataToNewExpenses={datafromExpenseFormHandler} />;
}
