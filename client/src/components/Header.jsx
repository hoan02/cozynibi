import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Accommodation from "../pages/Accommodation";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Menu from "../pages/Menu";
import News from "../pages/News";
import Service from "../pages/Service";
import TourTravel from "../pages/TourTravel";

const pages = [
  {
    path: "/",
    name: "HOME",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "ABOUT US",
    element: <AboutUs />,
  },
  {
    path: "/accommodation",
    name: "ACCOMMODATION",
    element: <Accommodation />,
  },
  {
    path: "/menu",
    name: "MENU",
    element: <Menu />,
  },
  {
    path: "/tour-travel",
    name: "TOUR TRAVEL",
    element: <TourTravel />,
  },
  {
    path: "/service",
    name: "SERVICE",
    element: <Service />,
  },
  {
    path: "/news",
    name: "NEWS",
    element: <News />,
  },
  {
    path: "/gallery",
    name: "GALLERY",
    element: <Gallery />,
  },
  {
    path: "/contact",
    name: "CONTACT",
    element: <Contact />,
  },
  {
    path: "/",
    name: "LOGIN",
    element: <Home />,
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} />
      </div>
      <div className="header-nav">
        <div className="nav-top">
          <div className="search-box">
            <input type="text" className="search" placeholder="Search" />
            <button className="search-btn" />
          </div>
          <div className="language">
            <select name="language" id="lang-list">
              <option value="VN">Việt Nam</option>
              <option value="US">English</option>
            </select>
          </div>
          <div className="btn-book">
            <Link to={"/"}>BOOK A ROOM</Link>
          </div>
        </div>

        <ul className="nav-menu">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about-us"}>ABOUT US</Link>
            </li>
            <li>
              <Link to={"/accommodation"}>ACCOMMODATION</Link>
            </li>
            <li>
              <Link to={"/menu"}>MENU</Link>
            </li>
            <li>
              <Link to={"/tour-travel"}>TOUR TRAVEL</Link>
            </li>
            <li>
              <Link to={"/service"}>SERVICE</Link>
            </li>
            <li>
              <Link to={"/news"}>NEWS</Link>
            </li>
            <li>
              <Link to={"/gallery"}>GALLERY</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
            <li>
              <Link to={'../../../admin/src/pages/Login'}>LOG IN</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
