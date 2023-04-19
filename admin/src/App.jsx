// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { Helmet } from "react-helmet";

// import "react-toastify/dist/ReactToastify.css";

// import DashboardAdmin from "./pages/DashboardAdmin";
// import PagesManagement from "./pages/PagesManagement";
// import Sidebar from "./components/Sidebar";
// import "./App.css";

// const routes = [
//   {
//     path: "/",
//     element: <DashboardAdmin />,
//     title: "Home",
//   },
//   {
//     path: "/pages_management",
//     element: <PagesManagement />,
//     title: "Pages Management",
//   },
// ];

// const App = () => {
//   return (
//     <div className="app">
//       <Sidebar>
//         <Routes>
//           {routes.map((route) => (
//             <Route
//               key={route.path}
//               exact
//               path={route.path}
//               element={
//                 <>
//                   <Helmet>
//                     <title>{route.title}</title>
//                   </Helmet>
//                   {route.element}
//                 </>
//               }
//             />
//           ))}
//         </Routes>
//       </Sidebar>
//       <ToastContainer autoClose={2000} draggablePercent={60} />
//     </div>
//   );
// };

// export default App;

import React from "react";
// import 'antd/dist/antd.css'
import { Menu } from "antd";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import Dashboard from "./pages/DashboardAdmin";
import DashboardAdmin from "./pages/DashboardAdmin";
import AboutUsManagement from './components/layout/AboutUsManagement'
import ContactManagement from './components/layout/ContactManagement'
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: '100vh',
    }}>
      <Header/>
      <div className="sidebar-container">
        <SideMenu />
        <Content />
      </div>
      <Footer/>
    </div>
  );
};

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/" },
          { label: "Pages", key: "/pages_management", children: [
            {label: 'About us', key: '/about_us_management'},
            {label: 'Contact', key: '/contact_management'},
          ]},
          { label: "Account", key: "" },
          { label: "Logout", danger: true },
        ]}
      ></Menu>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardAdmin />}/>
        <Route path="/about_us_management" element={<AboutUsManagement />}/>
        <Route path="/contact_management" element={<ContactManagement />}/>
        <Route path="/" element={<DashboardAdmin />}/>
      </Routes>
    </div>
  );
}

export default App;
