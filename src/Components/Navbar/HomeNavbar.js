import React from "react";

// import Truncate from "react-truncate";
// import { Link } from "react-router-dom";
import bookLogo from "../../assets/images/logo.png";
import HomeCardList from "../Card/HomeCardList";
import Axios from "axios";
class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: ""
    };
    this.cancel = "";
  }

  getSearchResults = query => {
    const searchURL = `/api/v1/books?search=${query}`;

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = Axios.CancelToken.source();

    Axios.get(searchURL, {
      cancelToken: this.cancel.token
    })
      .then(({ data }) => {
        // console.log(data.data);
        this.setState({
          results: data.data
        });
      })
      .catch(error => {
        if (Axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data. Data not found!"
          });
        }
      });
  };

  handleOnInputChange = event => {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" }, () => {
      this.getSearchResults(query);
    });
  };

  renderSearchResults = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      console.log("data:", results);
      return (
        <div>
          {results.map(result => {
            return <HomeCardList search={this.state.search} />;
          })}
        </div>
      );
    }
  };

  componentDidMount = () => {
    this.getSearchResults();
  };

  openNav = () => {
    // document.getElementById("mySidenav").style.width = "100%";
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
    const { query } = this.state;
    console.log(this.state);
    // console.log(this.renderSearchResults);
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
              All Categories <i className="fa fa-caret-down"></i>
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
                value={query}
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

export default HomeNavbar;
