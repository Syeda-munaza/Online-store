import React, { useEffect, useState } from "react";
import "./CategoryProduct.css";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(false);

  const handleCategoryWise = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/category/${name}`
      );
      const result = await response.json();
      setProducts(result.products || []);
    } catch (Err) {
      console.error("Error fetching products:", Err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCategoryWise();
  }, [name]);

  return (
    <div className="categoryProduct" style={{ minHeight: "42vh" }}>
      <h1>
        Category: <span>{name}</span>
      </h1>
      {loading ? (
        <div className="text-center">
          <div
            className="spinner-border text-success"
            role="status"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="category-cont">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div className="card" style={{ width: "18rem" }} key={product.id}>
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
                    <button className="btn1">
                      <FaShoppingCart />
                    </button>
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
            <h3
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              No Products Found
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
