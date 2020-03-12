import React from "react";

const BookNavbar = () => {
  const editModal = () => {
    // Get the modal
    let editModal = document.getElementById("editModal");

    // Get the button that opens the modal
    let editBtn = document.getElementById("edit");

    // Get the <span> element that closes the modal
    let editSpan = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    editBtn.onclick = function() {
      editModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    editSpan.onclick = function() {
      editModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === editModal) {
        editModal.style.display = "none";
      }
    };
    return false;
  };

  const deleteModal = () => {
    // Get the modal
    let deleteModal = document.getElementById("deleteModal");

    // Get the button that opens the modal
    let deleteBtn = document.getElementById("delete");

    // Get the <span> element that closes the modal
    let deleteSpan = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal
    deleteBtn.onclick = function() {
      deleteModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    deleteSpan.onclick = function() {
      deleteModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === deleteModal) {
        deleteModal.style.display = "none";
      }
    };
    return false;
  };

  return (
    <div>
      <section className="cover-image-container">
        <img
          src="https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png"
          alt="book-cover"
        />
        <nav className="top-navbar">
          <div className="back-button">
            <a href="/home">
              <i className="fa fa-arrow-circle-left"></i>
            </a>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <a
                  onClick={editModal}
                  id="edit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  src="#"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  onClick={deleteModal}
                  id="delete"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  src="#"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default BookNavbar;
