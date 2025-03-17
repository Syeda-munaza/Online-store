import React, { useEffect, useState } from "react";
import "./AllCategories.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaShoppingCart } from "react-icons/fa";

const AllCategories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log(updatedCart);
  };
  return (
    <>
      <div className="allCategoires">
        <h1>All Categories</h1>
        {loading ? (
          <div className="text-center">
            <div
              className="spinner-border text-success"
              role="status"
              style={{ marginTop: "150px" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="section">
              {products.map((product) => (
                <div
                  className="card"
                  style={{ width: "18rem" }}
                  key={product.id}
                >
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h4 className="title">
                      {product.title.length > 16
                        ? `${product.title.slice(0, 15)}...`
                        : product.title}
                    </h4>
                    <h4 className="price">${product.price.toLocaleString()}</h4>
                    <h6>
                      Category: <span>{product.category}</span>
                    </h6>
                    <img
                      src="/image/star-rating.jpg"
                      className="star-img"
                      alt="rating"
                    />
                    <div className="btns">
                      <a className="btn1" onClick={() => handleCart(product)}>
                        <FaShoppingCart />
                      </a>
                      <a
                        className="btn btn-outline-dark det"
                        href={`/detail/${product.id}`}
                      >
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllCategories;
