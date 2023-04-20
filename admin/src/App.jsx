import React, { useState } from "react";
import { Menu } from "antd";
import "./App.css";

// import icon
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { TbNews } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

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
          if (key === "/logout") {
            console.log("ok");
            handleLogout();
            navigate("/");
          } else {
            navigate(key);
          }
        }}
        defaultSelectedpaths={[window.location.pathname]}
        items={[
          { label: "Home", key: "/", icon: <AiOutlineHome /> },
          {
            label: "Pages",
            key: "/page",
            icon: <TbNews />,
            children: [
              {
                label: "About us",
                key: "/page/about-us",
                icon: <FcAbout />,
              },
              {
                label: "Contact",
                key: "/page/contact",
                icon: <AiOutlineContacts />,
              },
            ],
          },
          {
            label: "Account",
            key: "/my-account",
            icon: <MdAccountCircle />,
          },
          {
            label: "Logout",
            key: "/logout",
            danger: true,
            icon: <CgDanger />,
          },
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
        <Route path="/page/about-us" element={<AboutUsManagement />} />
        <Route path="/page/contact" element={<ContactManagement />} />
      </Routes>
    </div>
  );
}

export default App;
