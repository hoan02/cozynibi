import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Banner from "./pages/banner/Banner";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banners" element={<Banner />} />
        </Routes>
      </div>
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
