import React from "react";
import "./Home.css";
import FeaturedCategory from "../components/FeaturedCategory";
import FeaturedProduct from "../components/FeaturedProduct";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="head">
          <div className="text">
            <h1>Shop your favourite products from one place.</h1>
            <p>
              We are offering over 15k+ items with amazing deals and discounts
              for limited account only.
            </p>
            <button>Explore Now</button>
          </div>
          <img src="/image/main-img.webp" alt="" />
        </div>
        <FeaturedCategory />
        <div className="first-section">
          <h1>20% Sale for all accessories</h1>
          <a href="/shop" style={{ textDecoration: "none" }}>
            <button>Shop Now</button>
          </a>
        </div>
        <FeaturedProduct />
      </div>
    </>
  );
};

export default Home;
