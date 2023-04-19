import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";

import "react-toastify/dist/ReactToastify.css";

import DashboardAdmin from "./pages/DashboardAdmin";
import BannerAdmin from "./pages/BannerAdmin";
import Sidebar from "./components/Sidebar";
import "./App.css";

const routes = [
  {
    path: "/",
    element: <DashboardAdmin />,
    title: "Home",
  },
  {
    path: "/banner-admin",
    element: <BannerAdmin />,
    title: "Banner Admin",
  },
];

const App = () => {
  return (
    <div className="app">
      <Sidebar>
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
      </Sidebar>
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
