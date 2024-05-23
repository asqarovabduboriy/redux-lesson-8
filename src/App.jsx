import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Like from "./pages/like/Like";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/wishlist" element={<Like/>}></Route>
    </Routes>
    </>
  );
}

export default App;
