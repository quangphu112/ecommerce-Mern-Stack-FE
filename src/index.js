import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./modules/auth/login/login";
import PageNotFoundFound from "./modules/pagenotfound/page_not_found";
import Register from "./modules/auth/register/register";
import Home from "./modules/home/home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./modules/cart/cart";
import DetailProduct from "./modules/detailproduct/detailproduct";
import Contact from "./modules/contact/contact";
import About from "./modules/about/about";
import CategoryProduct from "./modules/categoryproduct/categoryproducts";
import Products from "./modules/products/products";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:name" element={<CategoryProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFoundFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
