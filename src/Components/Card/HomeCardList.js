import React from "react";
import Truncate from "react-truncate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { render } from "@testing-library/react";

class HomeCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      library: this.props.data
    };
  }

  render() {
    let cardListData;

    if (this.props.data.length > 1) {
      cardListData = (
        <section className="content-container">
          {this.props.book.isRejected ? (
            <div className="data-empty">
              <h1>Data is Not Found!</h1>
            </div>
          ) : (
            this.props.book.bookData.data.map((item, index) => (
              <div key={index} className="card-container">
                <Link to={{ pathname: `/books/${item.id}`, book: item }}>
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
                </Link>
              </div>
            ))
          )}
        </section>
      );
    } else {
      cardListData = (
        <section className="content-container">
          <div className="data-empty">
            <h1>Library is empty!</h1>
          </div>
        </section>
      );
    }
    return <div>{cardListData}</div>;
  }
}

function mapStateToProps({ book }) {
  return {
    book
  };
}

export default connect(mapStateToProps)(HomeCardList);
