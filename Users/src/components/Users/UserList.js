import styles from "./UserList.module.css";

import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.userData?.map((user) => (
          <li key={user.key}>
            {user.userName}, {user.userAge} year(s) old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
