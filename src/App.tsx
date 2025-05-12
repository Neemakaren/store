import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import AllCategories from "./pages/AllCategories";
import SingleProduct from "./pages/SingleProduct";
import SingleCategory from "./pages/SingleCategory";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import LoginModal from "./components/LoginModal";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/category/:slug" element={<SingleCategory />} />
        <Route path="/wishlist" element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <footer />
      <Cart />
      <LoginModal />
      <ScrollToTopButton />
      <BannerPopup />
    </BrowserRouter>
  );
}

export default App;

// https://ui.shadcn.com/docs/installation/vite

// https://ui.shadcn.com/docs/cli
