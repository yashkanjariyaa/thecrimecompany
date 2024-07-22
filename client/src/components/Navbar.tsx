import { useState } from "react";
import "../assets/css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationDot,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../assets/images/logo-white.png";
import auth from "../api/auth";
import { useUser } from "../context/UserContext";

const NavBar = () => {
  const { user, logout, isLoggedIn } = useUser();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    auth.logout(user, logout);
    navigate("/");
    console.log("User logged out");
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img
              style={{ height: "3rem", width: "auto" }}
              src={logoWhite}
              alt="Logo"
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
          {isLoggedIn ? (
            <div className="user-menu" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} />
              {dropdownVisible && (
                <div className="dropdown">
                  <Link to="/user">Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link className="signin" to="/auth">
              <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
