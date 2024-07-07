import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const collectData = () => {
    console.warn(name, emailid, password);
  };

  return (
    <div className="register">
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        type="text"
        value={emailid}
        onChange={(e) => setEmailId(e.target.value)}
        placeholder="Email Id"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={collectData} className="SignUPButton" type="button">
        Sign Up
      </button>

    </div>
  );
};

export default SignUp;