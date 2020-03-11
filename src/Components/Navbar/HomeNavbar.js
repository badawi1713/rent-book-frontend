import React from "react";

const HomeNavbar = () => {
  return (
    <div className="top-nav-container">
      <nav className="top-nav">
        <ul>
          <li id="openSidebar">
            <div className="topnav-btn">
              <i onClick="return openNav()" className="fas fa-bars"></i>
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
              style={{ fontFamily: "Arial" }}
              type="text"
              placeholder="&#xf002; Search book"
            />
          </li>
        </ul>
        <a>
          <img class=" logo" src="" alt="logo.png" />
        </a>
      </nav>
    </div>
  );
};

export default HomeNavbar;
