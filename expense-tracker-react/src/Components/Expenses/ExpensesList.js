import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  return (
    <div>
      {props.list.length === 0 ? (
        <p className="text-gray-200">No Expenses found</p>
      ) : (
        props.list.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          />
        ))
      )}
    </div>
  );
}
