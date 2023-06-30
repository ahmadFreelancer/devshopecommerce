import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Products from "./AllProducts";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



const App = () => {

  return (
    <>

      <BrowserRouter>
        <PayPalScriptProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/singleProduct/:id" element={<SingleProduct />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="*" element={<div className="fs-1 text-center">No Page Found <br /> <NavLink to={'/'}>Home</NavLink></div>} />
          </Routes>
          <Footer />
        </PayPalScriptProvider>
      </BrowserRouter>
    </>
  )
};

export default App;
