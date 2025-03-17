import React, { useEffect, useState } from "react";
import "./FeaturedProduct.css";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "./Utils";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=4&select=title,price,category,thumbnail"
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

  const handleCart = (product) => {
    handleSuccess("Product added successfully");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(updatedCart);
  };
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <div className="card-cont">
        {products.map((product) => (
          <div className="card" style={{ width: "18rem" }} key={product.id}>
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="title">
                {product.title.length > 16
                  ? `${product.title.slice(0, 15)}...`
                  : product.title}
              </h4>
              <h4 className="price">${product.price}</h4>
              <h6>
                Category: <span>{product.category}</span>
              </h6>
              <img src="/image/star-rating.jpg" className="star-img" alt="" />
              <div className="btns">
                <a className="btn1" onClick={() => handleCart(product)}>
                  <FaShoppingCart />
                </a>
                <a
                  href={`/detail/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer style={{ zIndex: "1111111111" }} />
    </div>
  );
};

export default FeaturedProduct;
