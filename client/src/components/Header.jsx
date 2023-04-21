import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

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
        </ul>
      </div>
    </div>
  );
};

export default Header;
