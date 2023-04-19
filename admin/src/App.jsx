import React, { useState } from "react";
// import 'antd/dist/antd.css'
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import toastService from "./utils/toastService";
import newRequest from "./utils/newRequest";
import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import AboutUsManagement from "./components/layout/AboutUsManagement";
import ContactManagement from "./components/layout/ContactManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Header />

      {currentUser ? (
        <div className="sidebar-container">
          <SideMenu />
          <Content />
        </div>
      ) : (
        <Login />
      )}
      <Footer />
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

function SideMenu() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("auth/logout");
      localStorage.setItem("currentUser", null);
      window.location.reload();
    } catch (err) {
      toastService.error(err);
    }
  };

  return (
    <div>
      <Menu
        onClick={({ key }) => {
          if (key === "logout") {
            handleLogout();
            navigate("/");
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/" },
          {
            label: "Pages",
            key: "/pages_management",
            children: [
              { label: "About us", key: "/about_us_management" },
              { label: "Contact", key: "/contact_management" },
            ],
          },
          { label: "Account", key: "" },
          { label: "Logout", key: "logout", danger: true },
        ]}
      ></Menu>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardAdmin />} />
        <Route path="/about_us_management" element={<AboutUsManagement />} />
        <Route path="/contact_management" element={<ContactManagement />} />
      </Routes>
    </div>
  );
}

export default App;
