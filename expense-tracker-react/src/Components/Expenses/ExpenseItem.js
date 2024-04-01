import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <div className="flex bg-neutral-600 text-white rounded-md p-1.5 font-medium gap-4 items-center my-2">
      <ExpenseDate date={props.date} />
      <p className="grow font-semibold text-xl">{props.title}</p>
      <p className="py-4 px-6 rounded-xl font-semibold text-xl w-32 shadow-lg bg-gradient-to-br from-cyan-600 to-sky-800">
        &#8377; {props.price}
      </p>
      <button
        className="m-2 text-xl hover:text-2xl"
        onClick={() => props.onDelete(props.id)}
      >
        <ion-icon name="trash-sharp"></ion-icon>
      </button>
    </div>
  );
}
