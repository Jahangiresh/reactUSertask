import React from "react";
import { FaReact } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span>copywrite 2022</span>
      <span>
        made by Jahangir with react <FaReact />
      </span>
    </div>
  );
};

export default Footer;
