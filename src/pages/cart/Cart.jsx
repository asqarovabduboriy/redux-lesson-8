import React from "react";
import { useCart } from "../../context/cart/cart";
import "./Cart.css";

const Cart = () => {
  const cartItems = useCart((state) => state.cartItems);
  let cart = cartItems?.map((item) => (
    <div className="cart_big" key={item.id}>
      <img src={item.images[0]} alt={item.title} />
      <div className="cart_small">
        <h3>{item.title}</h3>
        <p className="price_small">${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className="btn_quantity">
        <button>+</button>   
        <span>{item.quantity}</span>
        <button>-</button>     
      </div>
      <div>
        <button className="btn_remove">Remove</button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
      <h2 className="title" style={{ textAlign: "center", margin: "20px", fontWeight: "bold" }}>Products cart</h2>
       <div className="cart_wrapper">
        {cart}
       </div>
      </div>
    </>
  );
};

export default Cart;
