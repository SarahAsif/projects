import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const AvailableMeals = () => {
  const [data, setdata] = useState([]);
  useEffect(async () => {
    const resp = await axios.get("http://localhost:3004/products");
    setdata(resp.data);
  }, []);

  let mealsList = null;
  if (Array.isArray(data)) {
    mealsList = data.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  return (
    <React.Fragment>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default AvailableMeals;
