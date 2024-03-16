import React, { useState } from "react";

export default function ExpenseForm() {
  // Define common styling properties
  const formContainerClass =
    "Form grid grid-cols-2 bg-purple-400 p-6 rounded-lg shadow-lg gap-2";
  const labelClass = "font-bold text-lg";
  const inputClass = "p-1 rounded-lg";
  const buttonClass =
    "font-bold text-white col-span-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700";

  // const [itemName, setItemName] = useState("");
  // const [itemPrice, setItemPrice] = useState("");
  // const [itemDate, setItemDate] = useState("");

  const onItemNameChange = (event) => {
    console.log(event.target.value);
  };
  const onItemPriceChange = (event) => {
    console.log(event.target.value);
  };
  const onItemDateChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <form className={formContainerClass}>
        <label className={labelClass}>Item Purchased</label>
        <input
          onChange={onItemNameChange}
          className={inputClass}
          name="item-purchased"
          type="text"
          placeholder="Item Name"
          // value={itemName}
          required
        />
        <label className={labelClass}>Item Price</label>
        <input
          onChange={onItemPriceChange}
          className={inputClass}
          name="item-price"
          type="number"
          min={0}
          step={5}
          placeholder="₹ 100"
          // value={itemPrice}
          required
        />
        <label className={labelClass}>Purchase Date</label>
        <input
          onChange={onItemDateChange}
          className={inputClass}
          name="purchase-date"
          type="date"
          // value={itemDate}
          required
        />
        <button className={buttonClass} type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}
