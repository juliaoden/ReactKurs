import mealsImage from "../../assets/vegetable-skewer-3317055__340.jpg";

import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Healthy salad" />
      </div>
    </>
  );
}

export default Header;
