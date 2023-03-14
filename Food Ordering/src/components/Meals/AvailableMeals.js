import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useState, useEffect} from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://react-http-63b57-default-rtdb.firebaseio.com/food.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const loadedMeals = [];

      for (const meal in data) {
        loadedMeals.push({
          id: meal,
          key: meal,
          name: data[meal].name,
          description: data[meal].description,
          price: data[meal].price,
        });
      }

      const mealsList = loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          title={meal.name}
          description={meal.description}
          price={meal.price}
        ></MealItem>
      ));

      setMeals(mealsList);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  });

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
