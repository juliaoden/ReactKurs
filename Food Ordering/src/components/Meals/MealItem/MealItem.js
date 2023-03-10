import {useContext} from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const ctx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}€`;

  function addToCartHandler(amount) {
    ctx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
    });
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
