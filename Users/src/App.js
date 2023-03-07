import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import {useState} from "react";

function App() {
  const [users, setUsers] = useState([]);
  function submitUserHandler(uName, uAge) {
    setUsers((prevUsers) => {
      return [
        {userName: uName, userAge: uAge, key: Math.random()},
        ...prevUsers,
      ];
    });
  }
  return (
    <>
      <AddUser onSubmitUser={submitUserHandler} />
      <UserList userData={users} />
    </>
  );
}

export default App;
