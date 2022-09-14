import React from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          deleteItem={() => {
            props.deleteItem(expense.id);
          }}
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
