import React, { useEffect } from 'react'
import Products from '../../components/products/Products'
import useProduct from '../../context/api/api';
import useWishlist from '../../context/like/wishlist';  
import  {useCart}  from '../../context/cart/cart';


const Home = () => {
  
     const toggleWishlist = useWishlist(state => state.toggleWishlist);
     const setWishlist = useWishlist(state => state.wishlist);

     const cart = useCart(state => state.addToCart);
     const setCart = useCart(state => state.cartItems);
     
    const { products, } = useProduct(state => state.products);
    const { fetchProducts } = useProduct();
     
      useEffect(() => {
        fetchProducts();
      }, [fetchProducts]);
    
  return (
    <>
     <Products products={products} toggleWishlist={toggleWishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}  />
    </>
  )
}

export default Home