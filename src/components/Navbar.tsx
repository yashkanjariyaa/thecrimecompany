import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../assets/images/logo-white.png";
const NavBar = () => {
  return (
    <div className="nav-container">
      <Link className="logo" to="/">
        <img style={{ height: "3rem", width: "auto" }} src={logoWhite} alt="" />
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Link className="cart" to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
      <Link className="location" to="/footer">
        <FontAwesomeIcon icon={faLocationDot} />
      </Link>
    </div>
  );
};

export default NavBar;
