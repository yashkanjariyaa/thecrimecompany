import { useState } from "react";
import "../assets/css/auth.css";
import LoginComponent from "../components/auth/Login";
import SignupComponent from "../components/auth/Signup";
import loginBg from "../assets/images/login-bg.jpg";
import signupBg from "../assets/images/signup-bg.jpg";

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const bgStyle = {
    backgroundImage: `url(${isLogin ? loginBg : signupBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="auth-container" style={bgStyle}>
      {isLogin ? <LoginComponent /> : <SignupComponent />}
      <div className="auth-switch">
        {isLogin ? "Do not have an account?" : "Already have an account?"}
        <button className="switch" onClick={toggleAuth}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;
