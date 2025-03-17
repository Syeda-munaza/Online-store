
import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { Checkbox } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "./Utils";

const AllProducts = () => {
  const [input, setInput] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle category selection toggle
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleCart = (product) => {
    handleSuccess("Product added successfully");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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

  const handleCategory = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const result = await response.json();
      setCategories(result);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    handleFetch();
    handleCategory();
  }, []);

  // Filter products by search and selected categories
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(input.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="allProduct">
      <div className="filtered-cont">
        <h3>Filter by Category</h3>
        <div className="cont">
          {categories.map((category, index) => (
            <li key={index}>
              <Checkbox
                checked={selectedCategories.includes(category.slug)}
                onChange={() => handleCategoryChange(category.slug)}
              />
              {category.name}
            </li>
          ))}
        </div>
      </div>
      <div className="all">
        <h3>All Products</h3>
        <form>
          <input
            type="text"
            placeholder="Search the products..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
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
          <div className="card-cont">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              ))
            ) : (
              <h2 className="even" style={{ fontWeight: "400" }}>
                No Products Found...
              </h2>
            )}
          </div>
        )}
      </div>
      <ToastContainer style={{ zIndex: "1111111" }} />
    </div>
  );
};

export default AllProducts;
