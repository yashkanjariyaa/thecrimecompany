import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../assets/images/logo-white.png";
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img
              style={{ height: "3rem", width: "auto" }}
              src={logoWhite}
              alt=""
            />
          </Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/create">Create</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="buttons-container">
          <Link className="cart" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link className="location" to="/footer">
            <FontAwesomeIcon icon={faLocationDot} />
          </Link>
          <Link className="signin" to="/auth">
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
