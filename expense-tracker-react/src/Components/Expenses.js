import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

export default function Expenses(props) {
  return (
    <Card>
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </Card>
  );
}
