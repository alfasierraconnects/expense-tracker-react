import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

export default function Expenses(props) {
  const [filteredList, setFilteredList] = useState(props.expenses);
  const [listForGraph, setListForGraph] = useState([]);
  const [yearOnGraph, setYearOnGraph] = useState("YYYY");

  const filterHandler = (filterYear) => {
    // console.log(filterYear);
    if (filterYear === "" || filterYear.length < 4) {
      setFilteredList(props.expenses);
      setListForGraph([]);
      setYearOnGraph("YYYY");
      return;
    }
    const newList = props.expenses.filter((el) => {
      return el.date.getFullYear() === Number(filterYear);
    });
    setFilteredList(newList);
    setListForGraph(newList);
    setYearOnGraph(filterYear);
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
      <ExpensesFilter yearToFilter={filterHandler} />
      <ExpensesChart year={yearOnGraph} list={listForGraph} />
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
