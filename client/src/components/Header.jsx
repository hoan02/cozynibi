// import { Link } from "react-router-dom";

// import logo from '../assets/images/logo.png';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="headerContainer">
//         <div className="headerLogo">
//           <Link to="/">
//             <img src={logo} alt="Logo COZYNIBI HOTEL" />
//           </Link>
//         </div>
//         <div className="headerRight">
//           <div className="headerTop">
//             {/* <div id="touchOpen">
//               <span></span>
//             </div> */}
//             <div class="formSearch">
//               <form action="">
//                 <input type="text" placeholder="Search" />
//                 <button></button>
//               </form>
//             </div>

//             <div class="language">
//               <div class="langActive">
//                 <span>Việt Nam</span>
//               </div>
//               <ul>
//                 <li>
//                   <a href="">English</a>
//                 </li>
//               </ul>
//             </div>
//             <div class="btnBook">
//               <Link to="/" className="link linkBook">
//                 Book a room
//               </Link>
//             </div>
//           </div>
//           <div id="sticker">
//             <ul>
//               <li class="active">
//                 <Link className="link" to="/">
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/about-us">
//                   <span>About Us</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/accommodation">
//                   <span>Accommodation</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/menu">
//                   <span>Menu</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/tour-travel">
//                   <span>Tour travel</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/service">
//                   <span>Service</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/news">
//                   <span>News</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/gallery">
//                   <span>Gallery</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/contact">
//                   <span>Contact</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

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

        <div className="nav-bottom">
          <ul className="nav-menu">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about-us"}>ABOUT US</Link>
            </li>
            <li>
              <Link to={"/accomodation"}>ACCOMMODATION</Link>
            </li>
            <li>
              <Link to={"/menu"}>MENU</Link>
            </li>
            <li>
              <Link to={"#"}>TOUR TRAVEL</Link>
            </li>
            <li>
              <Link to={"#"}>SERVICE</Link>
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

        {/* <button className="nav-btn">
          <i className="fa-solid fa-bars" />
        </button>

        <div className="nav-sm">
          <ul className="nav-menu">
            <li>
              <a href="../layout/index.html">HOME</a>
            </li>
            <li>
              <a href="../layout/about.html">ABOUT US</a>
            </li>
            <li>
              <a href="../layout/accommodation.html">ACCOMMODATION</a>
            </li>
            <li>
              <a href="../layout/menu.html">MENU</a>
            </li>
            <li>
              <a href="#">TOUR TRAVEL</a>
            </li>
            <li>
              <a href="#">SERVICE</a>
            </li>
            <li>
              <a href="../layout/news.html">NEWS</a>
            </li>
            <li>
              <a href="../layout/gallery.html">GALLERY</a>
            </li>
            <li>
              <a href="../layout/contact.html">CONTACT</a>
            </li>
          </ul>
          <div className="form-lang">
            <label htmlFor="language">Language</label>
            <br />
            <select name="language" className="lang-res">
              <option value="VN">Việt Nam</option>
              <option value="US">English</option>
            </select>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
