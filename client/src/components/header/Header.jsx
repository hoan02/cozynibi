import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <Link to="/">
            <img src={logo} alt="Logo COZYNIBI HOTEL" />
          </Link>
        </div>
        <div className="headerRight">
          <div className="headerTop">
            {/* <div id="touchOpen">
              <span></span>
            </div> */}
            <div class="formSearch">
              <form action="">
                <input type="text" placeholder="Search" />
                <button></button>
              </form>
            </div>

            <div class="language">
              <div class="langActive">
                <span>Việt Nam</span>
              </div>
              <ul>
                <li>
                  <a href="">English</a>
                </li>
              </ul>
            </div>
            <div class="btnBook">
              <Link to="/" className="link linkBook">
                Book a room
              </Link>
            </div>
          </div>
          <div id="sticker">
            <ul>
              <li class="active">
                <Link className="link" to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/about-us">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/accommodation">
                  <span>Accommodation</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/menu">
                  <span>Menu</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/tour-travel">
                  <span>Tour travel</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/service">
                  <span>Service</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/news">
                  <span>News</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/gallery">
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
