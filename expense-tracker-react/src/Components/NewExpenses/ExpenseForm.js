import React, { useState } from "react";

export default function ExpenseForm(props) {
  // Define common styling properties
  const formContainerClass =
    "Form grid grid-cols-2 bg-purple-400 p-6 rounded-lg shadow-lg gap-2";
  const labelClass = "font-bold text-lg";
  const inputClass = "p-1 rounded-lg";
  const buttonClass =
    "font-bold text-white col-span-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700";

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDate, setItemDate] = useState("");

  // const [userInput, setuserInput] = useState({
  //   itemName: "",
  //   itemPrice: "",
  //   itemDate: "",
  // });

  const itemNameChangeHandler = (event) => {
    setItemName(event.target.value);
    // setuserInput({ ...userInput, itemName: event.target.value });
    // setuserInput((prevState) => {
    //   return { ...prevState, itemName: event.target.value };
    // });
    //setuserInput is a callback function. It schedules the function to be invoked at later point in time.
    // The advantage of above method is that prevState holds the snap of latest changes in a state and at time of invoke it sends the latest state.
  };
  const itemPriceChangeHandler = (event) => {
    setItemPrice(event.target.value);
    // setuserInput({ ...userInput, itemPrice: event.target.value });
  };
  const itemDateChangeHandler = (event) => {
    setItemDate(event.target.value);
    // setuserInput({ ...userInput, itemDate: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expense = {
      title: itemName,
      price: itemPrice,
      date: new Date(itemDate),
    };

    console.log(expense);

    props.onSendDataToNewExpenses(expense);

    setItemName("");
    setItemPrice("");
    setItemDate("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className={formContainerClass}>
        <label className={labelClass}>Item Purchased</label>
        <input
          onChange={itemNameChangeHandler}
          className={inputClass}
          name="item-purchased"
          type="text"
          placeholder="Item Name"
          value={itemName}
          required
        />
        <label className={labelClass}>Item Price</label>
        <input
          onChange={itemPriceChangeHandler}
          className={inputClass}
          name="item-price"
          type="number"
          min={0}
          step={5}
          placeholder="₹ 100"
          value={itemPrice}
          required
        />
        <label className={labelClass}>Purchase Date</label>
        <input
          onChange={itemDateChangeHandler}
          className={inputClass}
          name="purchase-date"
          type="date"
          value={itemDate}
          required
        />
        <button className={buttonClass} type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}
