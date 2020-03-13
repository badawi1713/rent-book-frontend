import React from "react";

const BookContent = props => {
  return (
    <div>
      <section className="header-title-container">
        <div className="header-wrapper">
          <div className="genre-label">
            <div className="label-text">
              <p>{props.genre}</p>
            </div>
          </div>
          <div className="main-header">
            <ul>
              <li>
                <h1>{props.title}</h1>
              </li>
              <li>
                <h3>Available</h3>
              </li>
            </ul>
          </div>
          <div className="date-header">
            <p>{props.releasedDate}</p>
          </div>
        </div>
        <div className="content-wrapper">
          <main>
            <p>{props.description}</p>
          </main>
        </div>
      </section>
    </div>
  );
};

export default BookContent;
