import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </div>
  );
}
