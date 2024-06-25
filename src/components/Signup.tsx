import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle your signup logic here (e.g., API call)
    // On successful signup:
    setUser({ email });
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
