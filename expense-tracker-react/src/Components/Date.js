import React from "react";

export default function CurrentDate(props) {
  const date = props.date;

  // Extract year, month, and day separately
  const yearIST = date.getFullYear();
  const monthIST = date.toLocaleString("en-IN", { month: "long" });
  const dayIST = date.getDate();

  return (
    <div className="bg-slate-800 p-4 px-6 border-2 rounded-xl flex flex-col items-center">
      <p className="font-bold">{yearIST}</p>
      <p>{monthIST}</p>
      <p className="font-bold text-4xl">{dayIST}</p>
    </div>
  );
}
