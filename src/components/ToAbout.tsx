import { Link } from "react-router-dom";
import logo from "../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faStar,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/css/toAbout.css";
const ToAbout = () => {
  return (
    <div>
      <div className="tail">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
      <div className="to-about-container">
        {/* <TextCarousel text="CULTURE MUMBAI HUMOUR FASHION STREETWEAR MUSIC ART"/> */}
        <div className="sub-container">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="info-container">
          <div className="shipping info">
            <div className="text">
              <div className="head">Shipping</div>
              <div className="para">
                We ship around India with minimum delivery time, and our charges
                are optimal too.
              </div>
            </div>
            <FontAwesomeIcon className="icon truck" icon={faTruckFast} />
          </div>
          <div className="quality info">
            <div className="text">
              <div className="head">Quality</div>
              <div className="text">
                Best quality products with hand picked material for every
                specific item. Our materials are skin-friendly and has best
                comfort.
              </div>
            </div>
            <FontAwesomeIcon className="icon star" icon={faStar} />
          </div>
          <div className="designing info">
            <div className="text">
              <div className="head">Designing</div>
              <div className="text">
                We have a team of designers with natural eye for beauty and
                fashion.
              </div>
            </div>
            <FontAwesomeIcon className="icon pen" icon={faPenNib} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"5vh"}}>
            <div className="head">WANT TO KNOW MORE ABOUT US?</div>
            <button className="button-to-about">
              <div className="bg-container">
                <div className="bg-circle"></div>
              </div>
              <div className="front">
                <Link to="/about">YES</Link>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="tail">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
    </div>
  );
};

export default ToAbout;
