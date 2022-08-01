import React from "react";
import "./main.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="container main__container">
        <div className="row main__container__row ">
          <div className="main__container__row__inp col-6">
            <input type="text" placeholder="type your name" />
            <input type="text" placeholder="type your price" />
            <input type="text" placeholder="type your image" />

            <button>add user</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
