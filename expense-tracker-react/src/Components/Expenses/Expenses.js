import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredList, setFilteredList] = useState(props.expenses);
  const [listForGraph, setListForGraph] = useState([]);
  const [yearOnGraph, setYearOnGraph] = useState("YYYY");

  useEffect(() => {
    props.dataForChart([yearOnGraph, listForGraph]);
    // eslint-disable-next-line
  }, [filteredList]);

  const filterHandler = (filterYear) => {
    if (filterYear === "" || filterYear.length < 4) {
      setFilteredList(props.expenses);
      setListForGraph([]);
      setYearOnGraph("YYYY");
    } else {
      const newList = props.expenses.filter((el) => {
        return el.date.getFullYear() === Number(filterYear);
      });
      setFilteredList(newList);
      setListForGraph(newList);
      setYearOnGraph(filterYear);
    }
  };

  useEffect(() => {
    filterHandler(yearOnGraph);
    // eslint-disable-next-line
  }, [props.expenses]);

  return (
    <div className="bg-slate-800 p-4">
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
            onDelete={props.deleteExpense}
          />
        ))
      )}
    </div>
  );
}
