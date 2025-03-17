import React, { useEffect, useState } from "react";
import "./FeaturedCategory.css";

const FeaturedCategory = () => {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=4&skip=12&select=title,category,thumbnail"
      );
      const result = await response.json();
      console.log(result);
      setProducts(result.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);
  return (
    <div>
      <div className="categories">
        <h1>Featured Category</h1>
        <div className="card-cont">
          {products.map((category) => (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={category.thumbnail}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href={`/category/${category.category}`} className="btn">
                  {category.category}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
