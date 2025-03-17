import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailProduct.css";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../components/Utils";

const DetailProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [rating, setRating] = useState([]);
  const { id } = useParams();

  const handleDetail = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result.reviews);
      setSingleProduct(result);
      setRating(result.reviews);
    } catch (err) {
      console.error("Error fetching product details:", err);
    }
  };

  useEffect(() => {
    if (id) {
      handleDetail();
    }
  }, [id]);

  const handleCart = (product) => {
    handleSuccess("Product added successfully");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("Updated Cart:", updatedCart);
  };

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail">
        <h1>Product Details</h1>
        <div className="detail">
          <img
            src={singleProduct.thumbnail}
            className="card-img-top"
            alt={singleProduct.title}
          />
          <div className="card-body">
            <h4 className="title">
              <span>Name:</span> {singleProduct.title}
            </h4>
            <h4 style={{ fontWeight: "400" }} className="description">
              <span style={{ fontWeight: "bold" }}>Description: </span>
              {singleProduct.description}{" "}
            </h4>
            <h4 className="price">
              <span>Price:</span> {singleProduct.price.toLocaleString()} Rs
            </h4>
            <h4 className="brand" style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "bold" }}>Brand:</span>{" "}
              {singleProduct.brand ? singleProduct.brand : "None"}
            </h4>
            <h4 className="stock" style={{ fontWeight: "400" }}>
              <span style={{ fontWeight: "bold" }}>Stock:</span>{" "}
              {singleProduct.stock} products
            </h4>
            <h6>
              Category: <span>{singleProduct.category}</span>
            </h6>
            <button className="btn1" onClick={() => handleCart(singleProduct)}>
              Add to Cart <FaShoppingCart />
            </button>
          </div>
        </div>
        <div className="ratings-cont">
          <h2>Ratings and Reviews</h2>
          <h3>{singleProduct.rating}/5</h3>
          <img src="/image/star-rating.jpg" className="star-img" />
          <div className="reviews">
            {rating.map((rate) => (
              <>
                <div className="rev">
                  <div className="cont">
                    <h5 style={{ fontWeight: "bold" }} className="name">
                      {rate.reviewerName}
                    </h5>
                    <p className="date">{rate.date.toLocaleString()}</p>
                  </div>
                  <div className="cont">
                    <h6>{rate.reviewerEmail}</h6>
                    <h6>Rating: {rate.rating}/5</h6>
                  </div>
                  <p className="message">{rate.comment}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer style={{ zIndex: "111111111111" }} />
    </>
  );
};

export default DetailProduct;
