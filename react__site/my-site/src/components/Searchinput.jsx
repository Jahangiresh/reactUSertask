import React from "react";
import { HiSearch } from "react-icons/hi";
import "./searchinput.scss";

const Searchinput = () => {
  return (
    <div className="search col-4">
      <input type="text" placeholder="search user" />
      <button>
        <HiSearch />
      </button>
    </div>
  );
};

export default Searchinput;
