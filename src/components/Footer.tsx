import "../assets/css/footer.css";
import map from "../assets/images/map.png";
import { Link } from "react-router-dom";
import logoWhite from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo">
          <img className="footer-logo" src={logoWhite} alt="logo" />
        </div>
        <div className="info-col">
          <div className="col">
            <div className="contacts">
              <div className="head">Reach out to us</div>
              <div className="mail">
                <Link to="thecrimecompany@gmail.com">
                  thecrimecompany@gmail.com
                </Link>
              </div>
              <div className="instagram">
                <Link to="https://www.instagram.com/thecrimecompanywe/">
                  @thecrimecompanywe
                </Link>
              </div>
              <div className="linkedin">
                <Link to="#">thecrimecompany</Link>
              </div>
            </div>
            <div className="founders">
              <div className="head">People</div>
              <div className="yash">
                <Link to="yashkanjariyaa@gmail.com">Yash Kanjariya</Link>
              </div>
              <div className="nishu">
                <Link to="nishanthravichandran12@gmail.com">
                  Nishanth Ravichandran
                </Link>
              </div>
              <div className="vaibhav">
                <Link to="vaibhavpal675@gmail.com">Vaibhav Pal</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="quick-nav">
              <div className="head">Quick Navigation</div>
              <div className="shop">
                <div className="tshirts">
                  <Link to="#">T-shirts</Link>
                </div>
                <div className="hoodies">
                  <Link to="#">Hoodies</Link>
                </div>
                <div className="sweatshirts">
                  <Link to="#">Sweatshirts</Link>
                </div>
                <div className="crop-tops">
                  <Link to="#">Crop-tops</Link>
                </div>
                <div className="others">
                  <Link to="#">Others</Link>
                </div>
              </div>
              <div className="create-link">
                <div className="head">From reel to real</div>
                <Link to="#">Create</Link>
                <div className="description">Create your own apparels</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="email-list">
              <div className="head">Welcome to the community!</div>
              <Link to="#">Join</Link>
              <div className="description">
                Join our mail list to get updates on offers and new collections
              </div>
            </div>
            <div className="location">
              <div className="head">Where? Mumbai, India</div>
              <Link to="#">
                <img
                  style={{ height: "25vh", width: "auto" }}
                  src={map}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
