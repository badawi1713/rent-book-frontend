import React from "react";
import Logo from "../../assets/images/bookshelf-logo.png";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div>
      {/* right section */}
      <section className="right-section">
        <div className="top-logo">
          <img src={Logo} alt="logo-cover" srcset="" />
        </div>
        <div className="form-header">
          <header>Login</header>
          <p>Welcome Back, Please Login to your account</p>
        </div>
        <div className="login-form">
          <div className="login-form-body">
            <form action="" method="post">
              <div className="input-wrapper login">
                <div className="input-items">
                  <label for="">Email Address</label>
                  <br />
                  <input type="email" name="" id="" placeholder="Your email" />
                </div>
                <div className="input-items password">
                  <label for="">Password</label>
                  <br />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Your password"
                  />
                </div>
              </div>

              <div className="forgot-password">
                <ul>
                  <li>
                    <input type="checkbox" />
                    <label>Remember Me</label>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">Forgot Password</a>
                  </li>
                </ul>
              </div>

              <div className="form-btn">
                <ul>
                  <li>
                    <button type="submit">Login</button>
                  </li>
                  <li>
                    <Link to={"/register"}>
                      {/* eslint-disable-next-line */}
                      <a href="#">
                        <button type="button">Sign Up</button>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="footer login-footer">
          <footer>
            <p>By signing up, you agree to Book’s</p>
            <p>
              <span>Terms and Conditions</span> & <span>Privacy Policy</span>
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
