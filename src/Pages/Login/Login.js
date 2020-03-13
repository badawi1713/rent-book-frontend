import React from "react";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section/Section";
import LoginForm from "../../Components/Login/LoginForm";
import "./Login.css";

const Login = () => {
  const Title = "Login";
  return (
    <div>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <div className="grid-container-index">
        <Section />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
