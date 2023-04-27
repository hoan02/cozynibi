import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import Banners from "./pages/banners/Banners";
import MyAccount from "./pages/myAccount/MyAccount";
import CreateRoom from "./components/roomControl/CreateRoom.jsx";
import UpdateRoom from "./components/roomControl/UpdateRoom.jsx";
import { listPage } from "./contexts/listPage.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="left">
        <Sidebar />
      </div>

      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/banners"
            element={
              <RequireAuth loginPath="/login">{<Banners />}</RequireAuth>
            }
          />
          <Route
            path="/my-account"
            element={
              <RequireAuth loginPath="/login">{<MyAccount />}</RequireAuth>
            }
          />
          <Route
            path="/pages/accommodation/create"
            element={
              <RequireAuth loginPath="/login">{<CreateRoom />}</RequireAuth>
            }
          />
          <Route
            path="/pages/accommodation/update/:id"
            element={
              <RequireAuth loginPath="/login">{<UpdateRoom />}</RequireAuth>
            }
          />
          {listPage.map((page, index) => {
            return (
              <Route
                key={index}
                path={`pages/${page.slug}`}
                element={
                  <RequireAuth loginPath="/login">{page.component}</RequireAuth>
                }
              />
            );
          })}
        </Routes>
      </div>
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
