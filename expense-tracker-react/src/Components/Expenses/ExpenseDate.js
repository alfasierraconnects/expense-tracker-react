import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ExpenseDate(props) {
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = props.date.getDate();

  return (
    <div className="bg-slate-800 p-4 px-6 border-2 rounded-xl flex flex-col items-center w-28 shadow-lg">
      <div>{month}</div>
      <div className="font-bold">{year}</div>
      <div className="font-bold text-4xl">{date}</div>
    </div>
  );
}
