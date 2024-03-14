import React from "react";

export default function CurrentDate() {
  const trailDate = new Date("2017-02-13");

  const options = { month: "long" };
  const monthString = trailDate.toLocaleDateString(undefined, options);

  return (
    <div className="bg-slate-800 p-4 px-6 border-2 rounded-xl flex flex-col items-center">
      <p className="font-bold">{monthString}</p>
      <p>{trailDate.getFullYear()}</p>
      <p className="font-bold text-4xl">{trailDate.getDate()}</p>
    </div>
  );
}
