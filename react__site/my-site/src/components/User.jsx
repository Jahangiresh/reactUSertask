import React from "react";
import "./user.scss";
import { Link } from "react-router-dom";
const User = (props) => {
  const { userlist } = props;
  return (
    <>
      {userlist &&
        userlist.map((user, i) => {
          return (
            <div key={user.id} className="user col-3">
              <div className="user__image row">
                <img src={user.image} alt="" />
              </div>
              <div className="user__title row">
                <Link className="link" to={`/userdetails/${user.id}`}>
                  <h4>
                    {user.name} {user.surname}
                  </h4>
                </Link>

                <span>{user.email}</span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default User;
