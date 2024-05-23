import React, { useState } from "react";
import "./Product.css";
import { FaStar, FaCartPlus, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Products = ({ products, toggleWishlist, setWishlist,cart,setCart }) => {
  return (
    <div className="container">
      <div className="card_wrapper">
        {products?.map((product) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);

          const handleMouseEnter = () => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
            );
          };

          const handleMouseLeave = () => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
            );
          };

          return (
            <div className="card" key={product.id}>
              <div className="icons_container">
                {setWishlist.some((item) => item.id === product.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <CiHeart onClick={() => toggleWishlist(product)} />
                )}
                <FaCartPlus onClick={() => cart(product)} />
              </div>
              <div
                className="card_img"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className="img"
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                />
              </div>
              <div className="text_content">
                <p title={product.title}>{product.title}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <div key={i}>
                      <FaStar
                        className={i < product.rating ? "active" : "inactive"}
                      />
                    </div>
                  ))}
                  <span>{product.rating}</span>
                </div>
                <b className="price">${product.price}</b>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
