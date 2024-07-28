import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../context/UserContext";
import auth from "../../api/auth";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = auth.signup(email, password, setUser);
      setUser({ email });
      console.log("Sign Up Successful:", response);
      navigate("/user-form");
    } catch (err) {
      console.error("Sign up error:", err);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div>Sign Up</div>
      <div className="input">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
