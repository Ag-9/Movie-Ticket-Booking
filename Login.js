import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.warn(`Logging in with email: ${email} and password: ${password}`);
    // Add login logic here, such as making an API request to authenticate the user
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <input
          className="input-box"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          className="input-box"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleLogin} className="login-button" type="button">
          Login
        </button>
        <p> New User   <NavLink to="/SignUP">SignUp</NavLink></p>
      </div>
    </div>
  );
};

export default Login;