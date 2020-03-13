import React from "react";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section/Section";
import RegisterForm from "../../Components/Register/RegisterForm";
import "./Register.css";

const Register = () => {
  const Title = "Register";
  return (
    <div>
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <div className="grid-container-index">
        <Section />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
