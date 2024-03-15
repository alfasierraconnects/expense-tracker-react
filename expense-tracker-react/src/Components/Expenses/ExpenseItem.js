import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  const item = props.title;
  const date = props.date;

  const [price, setPrice] = useState(props.price);

  let handleUpdate = () => {
    setPrice(price + 100);
  };

  return (
    <div className="shadow-current flex bg-neutral-600 text-white rounded-md p-2 font-medium gap-4 items-center my-2">
      <ExpenseDate date={date} />
      <p className="grow font-bold text-2xl">{item}</p>
      <p className="bg-violet-950 py-4 px-6 border-2 rounded-xl font-bold text-2xl w-32 shadow-lg ">
        &#8377; {price}
      </p>
      <button
        onClick={handleUpdate}
        className="border-2 p-2 border-lime-100 rounded hover:bg-lime-100 hover:text-black active:bg-lime-500"
      >
        Update
      </button>
    </div>
  );
}
