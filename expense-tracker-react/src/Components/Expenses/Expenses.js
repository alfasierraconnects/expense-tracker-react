import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredList, setFilteredList] = useState(props.expenses);

  const filterHandler = (filterYear) => {
    // console.log(filterYear);
    if (filterYear === "") {
      return setFilteredList(props.expenses);
    }
    const newList = props.expenses.filter((el) => {
      console.log(el.date.getFullYear());
      return el.date.getFullYear() === Number(filterYear);
    });
    setFilteredList(newList);
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
      <ExpensesFilter yearToFilter={filterHandler} />
      {filteredList.length === 0 ? (
        <p className="text-gray-200">No Expenses found</p>
      ) : (
        filteredList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          />
        ))
      )}
    </div>
  );
}
