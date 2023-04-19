import React, { useState } from "react";
import { Menu } from "antd";
import "./App.css";

// import icon
import { AiOutlineHome, AiOutlineContacts } from 'react-icons/ai'
import { TbNews } from 'react-icons/tb'
import { FcAbout } from 'react-icons/fc'
import { MdAccountCircle } from 'react-icons/md'
import { CgDanger } from 'react-icons/cg'


import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import toastService from "./utils/toastService";
import newRequest from "./utils/newRequest";

// import components
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
          { label: "Home", key: "/", icon: <AiOutlineHome/> },
          { label: "Pages", key: "/pages_management", icon: <TbNews/>,  children: [
            {label: 'About us', key: '/about_us_management', icon: <FcAbout/>},
            {label: 'Contact', key: '/contact_management', icon: <AiOutlineContacts/>},
          ]},
          { label: "Account", key: "", icon: <MdAccountCircle/> },
          { label: "Logout", danger: true, icon: <CgDanger/>},
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
