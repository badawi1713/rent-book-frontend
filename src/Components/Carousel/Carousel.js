import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <section className="carousel-container">
        <div
          className="card-carousel-wrapper js-flickity"
          data-flickity-options='{ "freeScroll": true, "wrapAround": true }'
        >
          <div className="carousel-card">
            <div className="carousel-image-card">
              <img src="./public/images/carousel1.png" alt="carousel img" />
            </div>
            <div className="carousel-text">
              <h2>Dilan 1990</h2>
              <p>Pidi Baiq</p>
            </div>
          </div>

          <div className="carousel-card">
            <div className="carousel-image-card">
              <img src="./public/images/carousel2.png" alt="carousel img" />
            </div>
            <div className="carousel-text">
              <h2>Ubur-Ubur Lembur</h2>
              <p>Raditya Dika</p>
            </div>
          </div>

          <div className="carousel-card">
            <div className="carousel-image-card">
              <img src="./public/images/carousel3.png" alt="carousel img" />
            </div>
            <div className="carousel-text">
              <h2>Laskar Pelangi</h2>
              <p>Andrea hirata</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
