import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses";
import axios from "axios";
import "./App.css";

let DUMMY_EXPENSE = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const fetchData = () => {
    axios
      .get("https://json.nitroxis.com/expenses/")
      .then(({ data, status }) => {
        setExpenses(data);
      });
  };
  const addExpenseHandler = (expense) => {
    axios.post("https://json.nitroxis.com/expenses/", expense, {
      headers: {
        "content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete("https://json.nitroxis.com/expenses/" + id);
    fetchData();
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
