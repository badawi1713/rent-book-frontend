import React, { Component } from "react";
import { Helmet } from "react-helmet";
// import Axios from "axios";

import { connect } from "react-redux";
import { getAllBook } from "../../Redux/actions/books";

import HomeNavbar from "../../Components/Navbar/HomeNavbar";
import Carousel from "../../Components/Carousel/Carousel";
import HomeHeader from "../../Components/Header/HomeHeader";
import HomeCardList from "../../Components/Card/HomeCardList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AddModal from "../../Components/Modal/AddModal";
import "./Home.css";
// const URL_STRING = "/api/v1/books";
class Home extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    library: []
  };
  // }

  getAllBook = async () => {
    await this.props.dispatch(getAllBook());
    this.setState({
      library: this.props.data.book.bookData.data
    });
  };

  componentDidMount = () => {
    this.getAllBook();

    const token = localStorage.getItem("KEY_TOKEN");
    if (!token) {
      this.props.history.push("/login");
    }
  };

  render() {
    const Title = "Home";
    const { library } = this.state;
    // console.log(library);
    return (
      <div>
        <div>
          <Helmet>
            <title>{Title}</title>
            <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
          </Helmet>
        </div>
        <div className="grid-container" id="main">
          <HomeNavbar />
          <Carousel />
          <HomeHeader />
          <HomeCardList data={library} />
        </div>
        <Sidebar />
        <AddModal />
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    data: book
  };
};

export default connect(mapStateToProps)(Home);
