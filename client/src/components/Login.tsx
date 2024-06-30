// Login.tsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { login } from "../utils/LogIn";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      // Handle your login logic here 
      const response = login({email, password});
      console.log(response);
      // On successful login:
      setUser({ email });
    }catch(err){
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>Login</div>
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

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
