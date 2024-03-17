import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

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
      {filteredExpenses.length === 0 ? (
        <p className="text-gray-200">No Expenses found</p>
      ) : (
        filteredExpenses.map((expense, index) => (
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
