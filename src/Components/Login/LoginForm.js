import React from "react";
import Logo from "../../assets/images/bookshelf-logo.png";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div>
      {/* right section */}
      <section class="right-section">
        <div class="top-logo">
          <img src={Logo} alt="logo-cover" srcset="" />
        </div>
        <div class="form-header">
          <header>Login</header>
          <p>Welcome Back, Please Login to your account</p>
        </div>
        <div class="login-form">
          <div class="login-form-body">
            <form action="" method="post">
              <div class="input-wrapper login">
                <div class="input-items">
                  <label for="">Email Address</label>
                  <br />
                  <input type="email" name="" id="" placeholder="Your email" />
                </div>
                <div class="input-items password">
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

              <div class="forgot-password">
                <ul>
                  <li>
                    <input type="checkbox" />
                    <label>Remember Me</label>
                  </li>
                  <li>
                    <a href="#">Forgot Password</a>
                  </li>
                </ul>
              </div>

              <div class="form-btn">
                <ul>
                  <li>
                    <button type="submit">Login</button>
                  </li>
                  <li>
                    <Link to={"/register"}>
                      <a href="register.html">
                        <button type="button">Sign Up</button>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div class="footer login-footer">
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
