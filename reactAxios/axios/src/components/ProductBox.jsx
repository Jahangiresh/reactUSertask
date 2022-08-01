import React from "react";
import "./productBox.scss";
const ProductBox = (props) => {
  const { product } = props;
  return (
    <div className="productbox col-3">
      <div className="row productbox__image">
        <img
          src="https://cdn.dribbble.com/users/60166/screenshots/15010083/sunset_sunrise_1_4x.jpg"
          alt="prod jpeg"
        />
      </div>
      <div className="productbox__title">
        <h3>title:{product.title}</h3>
      </div>
    </div>
  );
};

export default ProductBox;
