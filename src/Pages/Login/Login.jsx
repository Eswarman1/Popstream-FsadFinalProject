// src/Pages/Login/Login.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", "true");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator"><span>or</span></p>
      <form className="login-form" onSubmit={handleSubmit}>
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        <a href="#" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>
      <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
