import React from "react";
import User from "../components/User";
import "./users.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const apiEndPoint = "http://localhost:3000/users";

  useEffect(() => {
    const getUsers = async () => {
      const resp = await axios.get(apiEndPoint);
      setUsers(resp.data);
    };
    getUsers();
  }, []);
  return (
    <div className="users">
      <div className="container users__container">
        <div className="users__container__row row">
          <User userlist={users} />
        </div>
      </div>
    </div>
  );
};

export default Users;
