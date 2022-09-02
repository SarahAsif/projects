import React, { useContext, useEffect, useState } from "react";
import Users from "./users";

const UseEffectAPI = () => {
  const context = useContext("context");
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      console.log("hi" + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <UseEffectAPI />
      {users.map((e) => {
        return (
          <div key={e}>
            <div>{e.id}</div>
            <div>{e.login}</div>
            <div>{e.url}</div>
            <div>{e.type}</div>
          </div>
        );
      })}
    </div>
  );
};
export default UseEffectAPI;
