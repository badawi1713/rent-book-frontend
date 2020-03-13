import React from "react";
import Logo from "../../assets/images/bookshelf-logo.png";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div>
      <div class="right-section">
        <div class="top-logo">
          <img src={Logo} alt="logo-cover" srcset="" />
        </div>
        <div class="form-header header-register">
          <header>Register</header>
          <p>Welcome Back, Please Register to create account</p>
        </div>
        <div class="login-form">
          <div class="login-form-body">
            <form action="" method="post">
              <div class="input-wrapper register-form-input">
                <div class="input-items">
                  <label for="">Username</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Input username"
                  />
                </div>
                <div class="input-items">
                  <label for="">Fullname</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Input fullname"
                  />
                </div>
                <div class="input-items">
                  <label for="">Email Address</label>
                  <br />
                  <input type="email" name="" id="" placeholder="Input email" />
                </div>
                <div class="input-items">
                  <label for="">Password</label>
                  <br />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Input password"
                  />
                </div>
              </div>
              <div class="form-btn">
                <ul>
                  <li>
                    <button type="submit">Sign Up</button>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <a href="index.html">
                        <button type="button">Sign In</button>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div class="footer">
          <footer>
            <p>By signing up, you agree to Book’s</p>
            <p>
              <span>Terms and Conditions</span> & <span>Privacy Policy</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
