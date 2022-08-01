import React from "react";
import ProductBox from "../components/ProductBox";
import "./products.scss";

const Products = (props) => {
  const  item  = props;
  console.log(item.productlist);
  return (
    <div className="products">
      <div className="container products__container">
        <div className="row products__container__row">
          {
            item.productlist.map(item => {
              return(
                <ProductBox 
                  key={item.id}
                  product={item}
                />
              )
            })
          }
          {/* {x.productlist &&
            x.productlist.map(product => {
              return <ProductBox key={product.id} product={product} />;
            })} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
