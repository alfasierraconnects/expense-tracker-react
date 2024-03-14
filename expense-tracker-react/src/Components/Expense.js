import React from "react";
import CurrentDate from "./Date";

export default function Expense(props) {
  const item = props.title;
  const price = props.price;
  const date = props.date;
  return (
    <div className="flex bg-neutral-600 text-white rounded-md p-2 font-medium gap-4 items-center my-2">
      <CurrentDate date={date} />
      <p className="w-24 italic text-yellow-200">{props.location}</p>
      <p className="grow font-bold text-2xl">{item}</p>
      <p className="bg-violet-950 py-4 px-6 border-2 rounded-xl font-bold text-2xl w-32">
        &#8377; {price}
      </p>
    </div>
  );
}
