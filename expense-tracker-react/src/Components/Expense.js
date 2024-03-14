import React from "react";
import CurrentDate from "./Date";

export default function Expense() {
  return (
    <div className="flex bg-neutral-600 text-white rounded-md p-2 font-medium gap-4 items-center">
      <CurrentDate />
      <p className="grow font-bold text-2xl">item</p>
      <p className="bg-violet-950 py-4 px-6 border-2 rounded-xl font-bold text-2xl">
        &#8377; 100.00
      </p>
    </div>
  );
}
