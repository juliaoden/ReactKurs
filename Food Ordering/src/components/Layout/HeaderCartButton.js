import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnAnimation, setButtonAnimation] = useState(false);
  const ctx = useContext(CartContext);

  const {items} = ctx;

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnAnimation ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimation(true);

    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
