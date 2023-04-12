import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
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
import "./App.scss";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <div className="header">
          <Navbar />
        </div>
        <div className="body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/accommodation" element={<Accommodation />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/tour-travel" element={<TourTravel />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default App;
