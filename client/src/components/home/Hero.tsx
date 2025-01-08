import "../../assets/css/hero.css";
import { Link } from "react-router-dom";
// import Carousel from "./Carousel.tsx";
import img1 from "../../assets/images/3.png";
import img2 from "../../assets/images/ethnic blue.png";

const Hero = () => {
  return (
    <>
      <div className="hero-head">THE CRIME COMPANY</div>
      {/* hero section */}
      <div className="hero">
        {/* Name, Call to action and the images */}
        <div className="lower-container">
          <div className="hero-intro">
            <div className="upper-half-intro">
              <div className="name">
                THE क्राइम <br></br>COMPANY/<br></br>सिंस 2023.
              </div>
              <div className="description">Something to do with Apparels.</div>
            </div>
            <div className="call-to-action">
              <div className="text">
                We make content based and <br></br>customized streetwear
              </div>
              {/* call to actiom buttons */}
              <div className="btn-container">
                <button className="button">
                  <div className="bg-container">
                    <div className="bg-circle"></div>
                  </div>
                  <div className="front">
                    <span>Explore</span>
                  </div>
                </button>
                <button className="button" id="sign-up">
                  <div className="bg-container">
                    <div className="bg-circle"></div>
                  </div>
                  <div className="front">
                    <span>SignUp</span>
                  </div>
                </button>
              </div>
              <div className="create">
                <div className="text">Create your own apparels!</div>
                <div className="link">
                  <Link to="/create">Create Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="images">
              <img src={img1} alt="" />
            </div>
            <div className="images">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        {/* <Carousel images={images} interval={3000}/> */}
      </div>
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
    </>
  );
};

export default Hero;
