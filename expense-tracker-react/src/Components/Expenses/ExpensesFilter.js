import React from "react";

export default function ExpensesFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full my-4">
        <label className="text-white font-bold mb-2">Filter by year</label>
        <select
          className="font-bold py-2 px-12 rounded-lg"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}
