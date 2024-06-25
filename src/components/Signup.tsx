import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { signup } from "../utils/SignUp";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      // Handling signup logic here 
      const response = signup({email, password});
      // On successful signup:
      setUser({ email });
      console.log("Sign Up Successful:", response);
      navigate('/form');
    }catch(err){
      console.error('Sign up error:', err);
    }
    // Optionally, save the user info to local storage or cookies
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
