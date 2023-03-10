import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Planty Kjöttbollar",
    description: "Best swedish meal",
    price: 15.4,
  },
  {
    id: "m2",
    name: "Vegan Schnitzel",
    description: "A german specialty but better!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "No Meat Burger",
    description: "vegan, healthy, delicious",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Nutritious and healthy bowl",
    price: 9.89,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
