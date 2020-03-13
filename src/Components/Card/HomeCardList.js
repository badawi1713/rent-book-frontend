import React, { Component } from "react";
import Axios from "axios";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";
const URL_STRING = "/api/v1/books/";
class HomeCardList extends Component {
  state = {
    library: []
  };

  getBookData = () => {
    Axios.get(URL_STRING)
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          library: data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.getBookData();
  };
  render() {
    const { library } = this.state;
    console.log(library);
    return (
      <div>
        <section className="content-container">
          {library.length < 1 ? (
            <div className="data-empty">
              <h1>Data is empty</h1>
            </div>
          ) : (
            library &&
            library.map((item, index) => (
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
                    {/* <p>{}</p> */}
                  </div>
                  {/* </a> */}
                </div>
              </Link>
            ))
          )}
        </section>
      </div>
    );
  }
}

export default HomeCardList;
