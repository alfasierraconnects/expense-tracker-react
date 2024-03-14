import "./App.css";
import Expense from "./Components/Expense";

function App() {
  const expenses = [
    {
      id: "1",
      location: "Bangalore",
      date: new Date(2023, 7, 15),
      title: "Insurance",
      price: 100,
    },
    {
      id: "2",
      location: "Delhi",
      date: new Date(2023, 3, 25),
      title: "Book",
      price: 10,
    },
    {
      id: "3",
      location: "Hyderabad",
      date: new Date(2023, 10, 11),
      title: "Pen",
      price: 1,
    },
    {
      id: "4",
      location: "Mumbai",
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: 200,
    },
  ];
  return (
    <>
      {expenses.map((expense, index) => {
        return (
          <Expense
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          />
        );
      })}
    </>
  );
}

export default App;
