import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/imgs/image.png";
import logo1 from "../../assets/imgs/123.png";

import useWishlist from "../../context/like/wishlist";
import { useCart } from "../../context/cart/cart";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const wishlist = useWishlist((state) => state.wishlist);

  const cart = useCart((state) => state.cartItems);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <header className={`navbar__wrapper  ${active ? "shrink" : ""}`}>
        <div className="container">
          <nav className="navbar">
            <NavLink to={"/"} className="navbar__logo">
              <img src={active ? logo1 : logo} alt="" width={80} />
            </NavLink>
            <button
              className={` navbar__category-btn ${active ? "white" : ""}`}
            >
              <IoMenu />
              <span>Katalog</span>
            </button>
            <div className="navbar__search">
              <input type="text" placeholder="Search..." />
              <button className={`${active ? "search_btn_nn" : ""}`}>
                <IoSearch />
              </button>
            </div>
            <div className="navbar__collection">
              <NavLink
                to={"/"}
                className={`navbar__item ${active ? "color" : ""}`}
              >
                <IoHome />
                <span>Home</span>
              </NavLink>
              <NavLink
                to={"/admin"}
                className={`navbar__item ${active ? "color" : ""}`}
              >
                <FaRegUser />
                <span className={` ${active ? "none" : ""}`}>Account</span>
              </NavLink>
              <NavLink
                to={"/wishlist"}
                className={`navbar__item ${active ? "color" : ""}`}
              >
                <FaRegHeart />
                <span className={` ${active ? "none" : ""}`}>Wishlist</span>
                <div className={`like_leng ${active ? "leng_like" : ""}`}>
                  {wishlist.length}
                </div>
              </NavLink>
              <NavLink
                to={"/cart"}
                className={`navbar__item ${active ? "color" : ""}`}
              >
                <FiShoppingCart />
                <span className={` ${active ? "none" : ""}`}>Cart</span>
                <div className={`like_leng ${active ? "leng_like" : ""}`}>
                  {cart.length}
                </div>
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
