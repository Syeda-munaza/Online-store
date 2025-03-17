import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleCategory = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const result = await response.json();
      setCategories(result);
    } catch (err) {}
  };

  useEffect(() => {
    handleCategory();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ position: "fixed" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand logo" to="/">
              <img src="shopping-cart.png" alt="" />
              Shopaholic's Haven
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu cat-down">
                  <li>
                    <Link className="dropdown-item" to="/all-categoires">
                      All Categories
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${category.name}`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About-us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact-us
                </Link>
              </li>
              <li className="nav-item position-relative abc">
                <Link className="nav-link" to="/cart">
                  <FaShoppingCart />
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge">
                  {cart.length ? cart.length : "0"}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
