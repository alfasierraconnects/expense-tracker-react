import "./App.css";
import Expense from "./Components/Expense";

function App() {
  return (
    <>
      <Expense
        date={new Date(2023, 7, 15)}
        title="Insurance"
        price="50"
        location="Bangalore"
      />
      <Expense
        date={new Date(2023, 3, 25)}
        title="Book"
        price="20"
        location="Delhi"
      />
      <Expense
        date={new Date(2023, 10, 11)}
        title="Pen"
        price="5"
        location="Hyderabad"
      />
      <Expense
        date={new Date(2023, 1, 14)}
        title="Laptop"
        price="200"
        location="Mumbai"
      />
    </>
  );
}

export default App;
