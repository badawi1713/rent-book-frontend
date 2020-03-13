import React from "react";

const BorrowButton = props => {
  return (
    <div>
      <section className="borrow-button-container">
        <aside className="aside-items">
          <div className="book-cover-img">
            <img src={props.imageURL} alt="book-cover.img" />
          </div>
          <div className="borrow-btn">
            <button>Borrow</button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BorrowButton;
