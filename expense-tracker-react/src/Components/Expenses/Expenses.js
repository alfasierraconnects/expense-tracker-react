import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
    setFilteredExpenses(filteredExpenses);
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList list={filteredExpenses} />
    </div>
  );
}
