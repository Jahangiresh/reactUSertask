import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Searchinput from "./Searchinput";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__container__row row">
          <div className="header__container__row__logo col-4">
            <h1>logo</h1>
          </div>
          <div className="header__container__row__navs col-4">
            <ul>
              <li>
                <Link className="link" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="link" to="/users">
                  users
                </Link>
              </li>
            </ul>
          </div>
          <Searchinput />
        </div>
      </div>
    </div>
  );
};

export default Header;
