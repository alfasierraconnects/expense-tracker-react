import ExpenseItem from "./ExpenseItem.js";

export default function Expenses(props) {
  return props.expenses.map((expense, index) => {
    return (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.price}
      ></ExpenseItem>
    );
  });
}
