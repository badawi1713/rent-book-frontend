import React from "react";

const HomeCardList = () => {
  return (
    <div>
      <section className="content-container">
        <div className="card-container">
          <a href="book_details.html">
            <img src="./public/images/buku1.png" alt="book-cover" />
            <div className="card-text-container">
              <h3>Dilan 1990</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                convallis lacus mi, sit amet vehicula nisl consequat id.
              </p>
            </div>
          </a>
        </div>
        <div className="card-container">
          <img src="./public/images/buku2.png" alt="book-cover" />
          <div className="card-text-container">
            <h3>Sebuah Seni untuk ...</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              convallis lacus mi, sit amet vehicula nisl consequat id.
            </p>
          </div>
        </div>
        <div className="card-container">
          <img src="./public/images/buku3.png" alt="book-cover" />
          <div className="card-text-container">
            <h3>React Native</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              convallis lacus mi, sit amet vehicula nisl consequat id.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCardList;
