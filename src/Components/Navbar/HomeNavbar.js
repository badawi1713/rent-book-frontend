import React from "react";
import bookLogo from "../../assets/images/logo.png";
import { connect } from "react-redux";
import { searchBookTitle } from "../../Redux/actions/books";
class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: ""
    };
  }

  getSearchResults = async () => {
    await this.props.dispatch(searchBookTitle(this.state.query));
  };

  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" }, () => {
      this.getSearchResults(query);
    });
  };

  openNav = () => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      document.getElementById("mySidebar").style.width = "100%";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("openSidebar").style.display = "none";
    } else {
      document.getElementById("mySidebar").style.width = "300px";
      document.getElementById("main").style.marginLeft = "300px";
      document.getElementById("openSidebar").style.display = "none";
    }

    return false;
  };
  render() {
    return (
      <div className="top-nav-container">
        <nav className="top-nav">
          <ul>
            <li id="openSidebar">
              <div className="topnav-btn">
                <i onClick={this.openNav} className="fas fa-bars"></i>
              </div>
            </li>
            <li>
              <div>
                All Categories{" "}
                <i className="fa fa-caret-down">
                  <li></li>
                  <li></li>
                  <li></li>
                </i>
              </div>
            </li>
            <li>
              All Time <i className="fa fa-caret-down"></i>
            </li>
            <li>
              <input
                onChange={this.handleOnInputChange}
                style={{ fontFamily: "Arial, FontAwesome" }}
                type="text"
                placeholder="&#xf002; Search book"
              />
            </li>
          </ul>
          <a href="/home">
            <img className="logo" src={bookLogo} alt="logo.png" />
          </a>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(mapStateToProps)(HomeNavbar);
