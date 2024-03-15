import React from "react";

export default function Card(props) {
  return (
    <div className="bg-slate-400 p-4 rounded-lg shadow-lg">
      {props.children}
    </div>
  );
}
