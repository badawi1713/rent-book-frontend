import React from "react";
import "./BookDetails.css";
import BookDetailNavbar from "../../Components/Navbar/BookDetailNavbar";
import BookContent from "../../Components/Book/BookContent";
import BorrowButton from "../../Components/Book/BorrowButton";
import EditModal from "../../Components/Modal/EditModal";
import DeleteModal from "../../Components/Modal/DeleteModal";

const BookDetails = props => {
  return (
    <div className="grid-container">
      <BookDetailNavbar data={props.item} />
      <div className="grid-templates-content">
        <BookContent data={props.item} />
        <BorrowButton data={props.item} />
      </div>
      <EditModal />
      <DeleteModal />
    </div>
  );
};

export default BookDetails;
