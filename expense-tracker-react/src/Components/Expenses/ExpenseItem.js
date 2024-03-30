import React from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <div className="shadow-current flex bg-neutral-600 text-white rounded-md p-2 font-medium gap-4 items-center my-2">
      <ExpenseDate date={props.date} />
      <p className="grow font-bold text-2xl">{props.title}</p>
      <p className="py-4 px-6 border-2 rounded-xl font-bold text-2xl w-32 shadow-lg bg-gradient-to-br from-purple-900 to-pink-700">
        &#8377; {props.price}
      </p>
      <button className="m-2 text-2xl hover:text-3xl">
        <ion-icon name="trash-sharp"></ion-icon>
      </button>
    </div>
  );
}
