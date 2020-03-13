import React from "react";
import Section from "../../Components/Section/Section";
import LoginForm from "../../Components/Login/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="grid-container">
      <Section />
      <LoginForm />
    </div>
  );
};

export default Login;
