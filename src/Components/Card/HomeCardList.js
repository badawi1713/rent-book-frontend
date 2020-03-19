import React from "react";
import Truncate from "react-truncate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomeCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      currentlyDisplayed: this.props.data
    };

    // console.log("data:", this.state.currentlyDisplayed);
  }

  render() {
    return (
      <div>
        <section className="content-container">
          {this.props.data.length < 1 ? (
            <div className="data-empty">
              <h1>Data is empty</h1>
            </div>
          ) : (
            // props.data.filter(props.search => item.title.includes(props.search))
            this.props.data.map((item, index) => (
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
      </div>
    );
  }
}

function mapStateToProps({ bookData }) {
  return {
    bookData: bookData
  };
}

export default connect(mapStateToProps)(HomeCardList);
