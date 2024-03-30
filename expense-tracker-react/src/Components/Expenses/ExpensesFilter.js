import React from "react";

export default function ExpensesFilter(props) {
  return (
    <div>
      <div className="flex items-center justify-between w-full my-4">
        <label className="text-white font-bold mb-2">Filter by year</label>
        <input
          className="font-bold p-3 rounded-lg"
          type="number"
          min="2010"
          max="2030"
          placeholder="YYYY"
          required
          onChange={(event) => {
            props.yearToFilter(event.target.value);
          }}
        />
      </div>
    </div>
  );
}
