import React from "react";

const BookContent = () => {
  return (
    <div>
      <section className="header-title-container">
        <div className="header-wrapper">
          <div className="genre-label">
            <div className="label-text">
              <p>Novel</p>
            </div>
          </div>
          <div className="main-header">
            <ul>
              <li>
                <h1>Dilan 1990</h1>
              </li>
              <li>
                <h3>Available</h3>
              </li>
            </ul>
          </div>
          <div className="date-header">
            <p>30 Juni 2019</p>
          </div>
        </div>
        <div className="content-wrapper">
          <main>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus,
              cursus egestas dui pulvinar. Proin sit amet accumsan lectus.
              Nullam auctor auctor consequat. Donec semper magna erat, sed
              fringilla lacus pretium eget. Cras porttitor, nibh sit amet
              interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus
              leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper
              efficitur. Pellentesque in euismod purus, sit amet ultrices
              tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod
              diam. Integer pellentesque massa nibh, ac eleifend odio malesuada
              sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis
              lacus. Nullam at elementum nibh, ac gravida felis. In sagittis
              rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae
              lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus
              non nulla ut ante imperdiet euismod quis nec massa.
            </p>
          </main>
        </div>
      </section>
    </div>
  );
};

export default BookContent;
