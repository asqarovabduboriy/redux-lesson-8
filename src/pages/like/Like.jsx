import React from "react";
import useWishlist  from "../../context/like/wishlist";
import Product from "../../components/products/Products";

const Like = () => {
    const wishlist = useWishlist(state => state.wishlist);
  return (
    <>
      <div className="container">
        <h2>Wishlist like</h2>
        <Product products={wishlist} setWishlist={wishlist}/>
      </div>
    </>
  );
};

export default Like;
