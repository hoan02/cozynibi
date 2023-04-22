import React, { useState } from "react";
import { Menu } from "antd";
import "./App.css";

// import icon
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { TbNews } from "react-icons/tb";
import { FcAbout, FcGallery } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { FaHotel } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { BsMenuUp, BsNewspaper } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { MdTour } from "react-icons/md";

import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import toastService from "./utils/toastService";
import newRequest from "./utils/newRequest";

// import components
import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import AccountManagement from "./pages/AccountManagement";

// import layout
import AboutUsManagement from "./components/layout/AboutUsManagement";
import AccommodationManagement from "./components/layout/AccommodationManagement";
import ContactManagement from "./components/layout/ContactManagement";
import GalleryManagement from "./components/layout/GalleryManagement";
import MenuManagement from "./components/layout/MenuManagement";
import NewsManagement from "./components/layout/NewsManagement";
import ServiceManagement from "./components/layout/ServiceManagement";
import TourTravelManagement from "./components/layout/TourTravelManagement";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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
    <div className="sidebar-menu">
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
        defaultselectedpaths={[window.location.pathname]}
        items={[
          { label: "Home", key: "/", icon: <AiOutlineHome /> },
          {
            label: "Pages",
            key: "/pages-management",
            icon: <TbNews />,
            children: [
              {
                label: "About us",
                key: "/pages/about-us-management",
                icon: <FcAbout />,
              },
              {
                label: "Accommodation",
                key: "/pages/accommodation-management",
                icon: <FaHotel />,
              },
              {
                label: "Contact",
                key: "/pages/contact-management",
                icon: <AiOutlineContacts />,
              },
              {
                label: "Gallery",
                key: "/pages/gallery-management",
                icon: <GrGallery />,
              },
              {
                label: "Menu",
                key: "/pages/menu-management",
                icon: <BsMenuUp />,
              },
              {
                label: "News",
                key: "/pages/news-management",
                icon: <BsNewspaper />,
              },
              {
                label: "Service",
                key: "/pages/service-management",
                icon: <RiServiceFill />,
              },
              {
                label: "Tour Travel",
                key: "/pages/tour-travel-management",
                icon: <MdTour />,
              },
            ],
          },
          {
            label: "Account",
            key: "/account-management",
            icon: <MdAccountCircle />,
          },
          { label: "Logout", key: "logout", danger: true, icon: <CgDanger /> },
        ]}
      ></Menu>
    </div>
  );
}

function Content() {
  return (
    <div className="sidebar-content">
      <Routes>
        <Route path="/" element={<DashboardAdmin />} />
        <Route path="/page/about-us" element={<AboutUsManagement />} />
        <Route path="/page/contact" element={<ContactManagement />} />
        <Route
          path="/pages/about-us-management"
          element={<AboutUsManagement />}
        />
        <Route
          path="/pages/accommodation-management"
          element={<AccommodationManagement />}
        />
        <Route
          path="/pages/contact-management"
          element={<ContactManagement />}
        />
        <Route
          path="/pages/gallery-management"
          element={<GalleryManagement />}
        />
        <Route path="/pages/menu-management" element={<MenuManagement />} />
        <Route path="/pages/news-management" element={<NewsManagement />} />
        <Route
          path="/pages/service-management"
          element={<ServiceManagement />}
        />
        <Route
          path="/pages/tour-travel-management"
          element={<TourTravelManagement />}
        />
        <Route path="/account-management" element={<AccountManagement />} />
      </Routes>
    </div>
  );
}

export default App;
