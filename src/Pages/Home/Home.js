import React from "react";
import { Helmet } from "react-helmet";
import HomeNavbar from "../../Components/Navbar/HomeNavbar";
import Carousel from "../../Components/Carousel/Carousel";
import HomeHeader from "../../Components/Header/HomeHeader";
import HomeCardList from "../../Components/Card/HomeCardList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AddModal from "../../Components/Modal/AddModal";
import "./Home.css";
const Home = () => {
  const Title = "Home";
  return (
    <div>
      <div>
        <Helmet>
          <title>{Title}</title>
        </Helmet>
      </div>
      <div className="grid-container" id="main">
        <HomeNavbar />
        <Carousel />
        <HomeHeader />
        <HomeCardList />
      </div>
      <Sidebar />
      <AddModal />
    </div>
  );
};

export default Home;
