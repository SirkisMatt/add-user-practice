import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [users, setUser] = useState([]);

  const addUserHandler = (user) => {
    setUser((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(user);
      return updatedUsers;
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
