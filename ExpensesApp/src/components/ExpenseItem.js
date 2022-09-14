import React from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={(e) => props.deleteItem()} className="button">
          Delete
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
