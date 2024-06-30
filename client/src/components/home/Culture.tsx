import { Link } from "react-router-dom";
import "../../assets/css/culture.css";
const Culture = () => {
  return (
    <div className="culture">
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
      <div className="content">
        <div className="head">Culture.</div>
        <div className="text">
          The Crime Company stands for culture and the community.<br></br>Our
          aim is to create a community for fashion, art and life. <br></br> Join
          us, meet us and let us bring true streetwear and fashion to India.
        </div>
        <div className="join-btn">
          <Link to="/join">Join</Link>
        </div>
      </div>
      <div className="strip">
        <div>STREETWEAR</div>
        <div>ETHNIC</div>
        <div>INDO WESTERN</div>
        <div>CASUAL</div>
      </div>
    </div>
  );
};

export default Culture;
