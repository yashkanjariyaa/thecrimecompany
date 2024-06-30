import { useState } from "react";
import "../assets/css/auth.css";
import LoginComponent from "../components/Login";
import SignupComponent from "../components/Signup";

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? <LoginComponent /> : <SignupComponent />}
      {isLogin ? (
        <div>Do not have an account?</div>
      ) : (
        <div>Already have an account?</div>
      )}
      <button className="switch" onClick={toggleAuth}>{isLogin ? "Signup" : "Login"}</button>
    </div>
  );
};

export default AuthComponent;
