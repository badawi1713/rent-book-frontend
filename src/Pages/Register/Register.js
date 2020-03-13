import React from "react";
import Section from "../../Components/Section/Section";
import RegisterForm from "../../Components/Register/RegisterForm";
import "./Register.css";

const Register = () => {
  return (
    <div className="grid-container">
      <Section />
      <RegisterForm />
    </div>
  );
};

export default Register;
