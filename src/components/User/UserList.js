import React from "react";

import User from "./User";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["user-list"]}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} userName={user.userName} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
