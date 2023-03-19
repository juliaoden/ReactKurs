import classes from "./Header.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.authenticated);

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  const nav = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && nav}
    </header>
  );
};

export default Header;
