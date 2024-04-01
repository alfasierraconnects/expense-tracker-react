import React from "react";

export default function DeleteExpenseModal(props) {
  // console.log(props.id);
  return (
    <div className="absolute inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className="relative text-gray-200 p-10 text-center transition duration-300 transform bg-gray-900 rounded hover:scale-105 md:shadow-xl hover:shadow-2xl">
        <p className="font-semibold ">Confirm to delete the expense</p>
        <button
          onClick={() => props.confirmDelete(props.id)}
          className="px-4 py-1 mt-4 rounded-md bg-sky-800 hover:shadow-lg hover:bg-gradient-to-br from-cyan-600 to-sky-800"
        >
          Confirm
        </button>
        <button
          onClick={() => props.modalActive()}
          className="absolute right-0 top-0 m-1 px-1 pt-1 rounded-md bg-sky-800 hover:shadow-lg hover:bg-gradient-to-br from-cyan-600 to-sky-800 text-2xl"
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
