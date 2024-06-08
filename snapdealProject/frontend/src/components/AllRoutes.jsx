import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {Home }from "../pages/Home";
import {Login} from "../pages/Login";
import {Product} from "../pages/Product";
import {ProductDetails} from "../pages/ProductDetails";
import {Cart} from "../pages/Cart";
import { PrivateRoutes } from "./PrivateRoutes";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      
      </Routes>
    </div>
  );
}

export  {AllRoutes};
