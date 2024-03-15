import React from "react";

export default function ExpenseForm() {
  // Define common styling properties
  const formContainerClass =
    "Form grid grid-cols-2 bg-purple-400 p-6 rounded-lg shadow-lg gap-2";
  const labelClass = "font-bold text-lg";
  const inputClass = "p-1 rounded-lg";
  const buttonClass =
    "font-bold text-white col-span-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700";

  return (
    <div>
      <div className={formContainerClass}>
        <label className={labelClass}>Item Purchased</label>
        <input
          className={inputClass}
          name="item-purchased"
          type="text"
          placeholder="Item Name"
          required
        />
        <label className={labelClass}>Item Price</label>
        <input
          className={inputClass}
          name="item-price"
          type="number"
          min={0}
          step={5}
          placeholder="₹ 100"
          required
        />
        <label className={labelClass}>Purchase Date</label>
        <input
          className={inputClass}
          name="purchase-date"
          type="date"
          required
        />
        <button className={buttonClass} type="submit">
          Add Expense
        </button>
      </div>
    </div>
  );
}
