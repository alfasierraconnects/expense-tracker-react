import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const item = props.title;
  const price = props.price;
  const date = props.date;
  return (
    <div className="flex bg-neutral-600 text-white rounded-md p-2 font-medium gap-4 items-center my-2">
      <ExpenseDate date={date} />
      <p className="grow font-bold text-2xl">{item}</p>
      <p className="bg-violet-950 py-4 px-6 border-2 rounded-xl font-bold text-2xl w-32">
        &#8377; {price}
      </p>
    </div>
  );
}
