import React from "react";
import "./header.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__container__row row">
          <div className="header__container__row__logo col-4">
            <h1>logo</h1>
          </div>
          <div className="header__container__row__nav col-4">
            <ul>
              <li>
                <Link className="link" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className="link" to="/products">
                  products
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  about
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__container__row__inputs col-4">
            <input
              className="header__input"
              type="text"
              placeholder="seaarch"
            />
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
