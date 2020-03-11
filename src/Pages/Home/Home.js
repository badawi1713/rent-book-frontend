import React from "react";
import HomeNavbar from "../../Components/Navbar/HomeNavbar";
import Carousel from "../../Components/Carousel/Carousel";
import HomeHeader from "../../Components/Header/HomeHeader";
import HomeCardList from "../../Components/Card/HomeCardList";
import "./Home.css";
const Home = () => {
  return (
    <div class="grid-container" id="main">
      <HomeNavbar />
      <Carousel />
      <HomeHeader />
      <HomeCardList />
    </div>
  );
};

export default Home;
