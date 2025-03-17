import React, { useEffect, useState } from "react";
import "./Cart.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "../components/Utils";

const Cart = () => {
  const [savedCart, setSavedCart] = useState([]);
 

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setSavedCart(cart);
    console.log(cart);
  }, []);

  const handleRemove = (id) => {
    handleSuccess("Product deleted from cart");
    const updatedCart = savedCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSavedCart(updatedCart);
  };



 
  return (
    <>
      <div className="cart">
        <div className="head">
          <h1>#CART</h1>
        </div>
        <h2>
          You have only {savedCart.length} {savedCart.length ? "items" : "item"}{" "}
          in your cart
        </h2>
        {savedCart.length ? (
          <div className="header">
            <h5>Image</h5>
            <h5>Name</h5>
            <h5>Price</h5>
            <h5>Remove</h5>
          </div>
        ) : (
          <></>
        )}
        {Array.from(savedCart).map((c) => (
          <>
            <div className="cart-cont" key={c.id}>
              <img src={c.images} className="img1" alt="" />
              <h6 className="title">{c.title}</h6>
              <h6>{c.price}Rs</h6>
              <button onClick={() => handleRemove(c.id)}>
                <MdDelete />
              </button>
            </div>
          </>
        ))}
      </div>

    

      <ToastContainer style={{ zIndex: "11111111" }} />
    </>
  );
};

export default Cart;
