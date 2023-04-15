import React from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Accommodation from "./pages/accommodation/Accommodation";
import Menu from "./pages/menu/Menu";
import TourTravel from "./pages/tourTravel/TourTravel";
import Service from "./pages/service/Service";
import News from "./pages/news/News";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import "./App.css";

const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    title: "About Us",
  },
  {
    path: "/accommodation",
    element: <Accommodation />,
    title: "Accommodation",
  },
  {
    path: "/menu",
    element: <Menu />,
    title: "Menu",
  },
  {
    path: "/tour-travel",
    element: <TourTravel />,
    title: "Tour Travel",
  },
  {
    path: "/service",
    element: <Service />,
    title: "Service",
  },
  {
    path: "/news",
    element: <News />,
    title: "News",
  },
  {
    path: "/gallery",
    element: <Gallery />,
    title: "Gallery",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
  // {
  //   path: "*",
  //   element: <Home />,
  //   title: "Home",
  // },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={
                <>
                  <Helmet>
                    <title>{route.title}</title>
                  </Helmet>
                  {route.element}
                </>
              }
            />
          ))}
        </Routes>
      </div>
      <Footer />
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
