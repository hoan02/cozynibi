import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiKnightBanner } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      submenu: [],
    },
    {
      path: "/banner_admin",
      name: "Banner",
      icon: <GiKnightBanner />,
      submenu: [
        {
          path: "/banner_admin/about_us",
          name: "About us",
        },
        {
          path: "/banner_admin/accommodation",
          name: "Accommodation",
        },
        {
          path: "/banner_admin/menu",
          name: "Menu",
        },
        {
          path: "/banner_admin/tour_travel",
          name: "Tour Travel",
        },
        {
          path: "/banner_admin/service",
          name: "Service",
        },
        {
          path: "/banner_admin/news",
          name: "News",
        },
        {
          path: "/banner_admin/gallery",
          name: "Gallery",
        },
        {
          path: "/banner_admin/contact",
          name: "Contact",
        },
      ],
    },
  ];
  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => {
          return item.submenu.length === 0 ? (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ) : (
            <NavLink
              to={item.path}
              key={index}
              className="link link-submenu"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "" : "none" }}
                className="link_text"
              >
                {item.name} <AiOutlineDown/>
              </div>
              <ul className="submenu">
                {item.submenu.map((submenuItem) => {
                    return (
                        <li className="submenu-item" key={submenuItem.index}>
                            <NavLink to={submenuItem.path}>{submenuItem.name}</NavLink>
                        </li>
                    )
                })}
              </ul>
            </NavLink>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
