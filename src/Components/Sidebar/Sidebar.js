import React from "react";
import Profile from "../../assets/images/profile.jpg";

const Sidebar = () => {
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openSidebar").style.display = "flex";

    return false;
  };

  const addModal = () => {
    // Get the modal
    let addModal = document.getElementById("addModal");

    // Get the button that opens the modal
    let addBtn = document.getElementById("add");

    // Get the <span> element that closes the modal
    let addSpan = document.getElementsByClassName("add-close")[0];

    // When the user clicks the button, open the modal
    addBtn.onclick = function() {
      addModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    addSpan.onclick = function() {
      addModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === addModal) {
        addModal.style.display = "none";
      }
    };
    return false;
  };
  return (
    <div>
      <aside id="mySidebar" className="aside-nav-container">
        <div className="menu-btn">
          <i onClick={closeNav} className="fas fa-bars"></i>
        </div>
        <div className="profile-container">
          <img src={Profile} width="100%" alt="profil.jpg" />
          <h3>Dzaky Badawi</h3>
        </div>
        <nav className="aside-nav">
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Explore</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">History</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a id="add" onClick={e => addModal(e.preventDefault)}>
                Add Book
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
