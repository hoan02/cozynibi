import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Banner from "./pages/banner/Banner";
import "./App.css";
import CreateBanner from "./components/createBanner/CreateBanner";
import UpdateBanner from "./components/updateBanner/UpdateBanner";

const App = () => {
  return (
    <div className="app">
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banners" element={<Banner />} />
          <Route path="/banners/create" element={<CreateBanner />} />
          <Route path="/banners/update/:id" element={<UpdateBanner />} />
        </Routes>
      </div>
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
