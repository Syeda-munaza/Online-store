import React from "react";
import "./Shop.css";
import AllProducts from "../components/AllProducts";

const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="head">
          <h1>#SHOP-NOW</h1>
        </div>
        <AllProducts />
      </div>
    </>
  );
};

export default Shop;
