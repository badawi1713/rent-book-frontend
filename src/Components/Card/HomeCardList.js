import React from "react";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";

const HomeCardList = props => {
  return (
    <div>
      <section className="content-container">
        {props.data.length < 1 ? (
          <div className="data-empty">
            <h1>Data is empty</h1>
          </div>
        ) : (
          // props.data.filter(props.search => item.title.includes(props.search))
          props.data.map((item, index) => (
            <Link to={{ pathname: `/books/${item.id}`, book: item }}>
              <div key={index} className="card-container">
                {/* <a href="#"> */}
                <img src={item.imageURL} alt="book-cover" />
                <div className="card-text-container">
                  <h3>
                    <Truncate lines={1}>{item.title}</Truncate>
                  </h3>
                  <p>
                    <Truncate
                      lines={2}
                      ellipsis={
                        <span>
                          ...{" "}
                          <span style={{ color: "gray", fontSize: "16px" }}>
                            Read more
                          </span>
                        </span>
                      }
                    >
                      {item.description}
                    </Truncate>
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
};
// }

export default HomeCardList;
