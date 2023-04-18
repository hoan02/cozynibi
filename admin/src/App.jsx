import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pages/DashboardAdmin";
import BannerAdmin from "./pages/BannerAdmin";
import Sidebar from "./components/Sidebar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/banner_admin" element={<BannerAdmin />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
