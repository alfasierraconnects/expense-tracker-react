import React from "react";
import CurrentDate from "./Date";

export default function Expense() {
  const item = "Book";
  const price = 100;
  const date = new Date(2021, 5, 10);
  return (
    <div className="flex bg-neutral-600 text-white rounded-md p-2 font-medium gap-4 items-center">
      <CurrentDate date={date} />
      <p className="grow font-bold text-2xl">{item}</p>
      <p className="bg-violet-950 py-4 px-6 border-2 rounded-xl font-bold text-2xl">
        &#8377; {price}
      </p>
    </div>
  );
}
