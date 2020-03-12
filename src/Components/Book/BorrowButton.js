import React from "react";

const BorrowButton = () => {
  return (
    <div>
      <section className="borrow-button-container">
        <aside className="aside-items">
          <div className="book-cover-img">
            <img
              src="https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png"
              alt="book-cover.img"
            />
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
