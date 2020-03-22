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
import "../../Components/Card/Pagination.css";

// const URL_STRING = "/api/v1/books";
class Home extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    library: [],
    pageNumber: 1
  };
  // }

  getAllBook = async () => {
    await this.props.dispatch(getAllBook(this.state.pageNumber));
    this.setState({
      library: this.props.book.book.bookData.data
    });
  };

  prevHandlerButton = async () => {
    if (this.state.pageNumber > 1) {
      const pageNumberState = this.state.pageNumber - 1;
      await this.setState({
        pageNumber: pageNumberState
      });
      this.props.dispatch(getAllBook(pageNumberState));
    }
  };

  nextHandlerButton = async () => {
    if (
      this.state.pageNumber <
      Math.ceil(
        this.props.book.book.bookData.pageDetail.total /
          this.props.book.book.bookData.pageDetail.per_page
      )
    ) {
      const pageNumberState = this.state.pageNumber + 1;
      await this.setState({
        pageNumber: pageNumberState
      });
      this.props.dispatch(getAllBook(pageNumberState));
    }
    console.log("page", this.state.pageNumber);
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
    // console.log("data", this.props.book.book.bookData.pageDetail.total);

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
          <HomeCardList
            data={library}
            page={this.state.pageNumber}
            nextPage={this.nextHandlerButton}
            prevPage={this.prevHandlerButton}
          />
        </div>

        <Sidebar />
        <AddModal />
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    book
  };
};

export default connect(mapStateToProps)(Home);
