import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/banners">
        Banner
      </Link>
    </div>
  );
};

export default Header;
