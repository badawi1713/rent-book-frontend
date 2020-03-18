import React from "react";
import Logo from "../../assets/images/bookshelf-logo.png";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  postLogin = () => {
    const { email, password } = this.state;
    const userData = { email, password };

    Axios.post("/api/v1/users/login", userData)
      .then(result => {
        console.log("token" + result.data.result.token);
        if (result.status === 200) {
          alert("Login Success");
          try {
            localStorage.setItem("KEY_TOKEN", result.data.result.token);
            this.props.history.push("/home");
          } catch (error) {
            alert("Email or Password is Wrong");
          }
        }
      })
      .catch(error => {
        console.log(error);
        alert("Please fill all the input on login form first!");
      });
  };

  render() {
    return (
      <div>
        {/* right section */}
        <section className="right-section">
          <div className="top-logo">
            <img src={Logo} alt="logo-cover" srcSet="" />
          </div>
          <div className="form-header">
            <header>Login</header>
            <p>Welcome Back, Please Login to your account</p>
          </div>
          <div className="login-form">
            <div className="login-form-body">
              {/* <form action=""> */}
              <div className="input-wrapper login">
                <div className="input-items">
                  <label htmlFor="">Email Address</label>
                  <br />
                  <input
                    required
                    type="email"
                    name=""
                    id=""
                    placeholder="Your email"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
                <div className="input-items password">
                  <label htmlFor="">Password</label>
                  <br />
                  <input
                    required
                    type="password"
                    name=""
                    id=""
                    placeholder="Your password"
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
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
                    <button type="submit" onClick={this.postLogin}>
                      Login
                    </button>
                  </li>
                  <li>
                    <Link to={"/register"}>
                      {/* eslint-disable-next-line */}

                      <button type="button">Sign Up</button>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* </form> */}
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
  }
}

export default withRouter(LoginForm);
