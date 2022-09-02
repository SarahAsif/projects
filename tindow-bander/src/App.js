import React, { useState, useEffect } from "react";

import NewExpense from "./components/NewExpenses/NewExpense";

import Expenses from "./components/Expenses";
import axios from "axios";

let DUMMY_EXPENSE = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function fetchData() {
    axios.get("http://localhost:8000/expenses").then(({ data, status }) => {
      setExpenses(data);
    });
  }

  const addExpenseHandler = (expense) => {
    axios
      .post("http://localhost:8000/expenses", expense, {
        headers: {
          "content-Type": "application/json",
        },
      })
      .then(({ data, status }) => {
        fetchData();
      });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
