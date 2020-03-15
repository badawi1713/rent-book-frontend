import React from "react";
import Axios from "axios";
class BorrowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.data.id,
      // available: "",
      imageURL: props.data.imageURL,
      available: props.data.available,
      loading: false
    };
  }

  rentBookData = () => {
    // const { available } = this.state;
    const rentBook = {
      available: "false"
    };

    Axios.patch(`/api/v1/books/rent/${this.state.id}`, rentBook)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  returnBookData = () => {
    // const { available } = this.state;
    const rentBook = {
      available: "true"
    };

    Axios.patch(`/api/v1/books/return/${this.state.id}`, rentBook)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const bookAvailable = this.state.available;
    let buttonStatus;
    if (bookAvailable === "true") {
      buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;
    } else {
      buttonStatus = (
        <button
          style={{ backgroundColor: "#596A55" }}
          onClick={this.returnBookData}
        >
          Return
        </button>
      );
    }
    return (
      <div>
        <section className="borrow-button-container">
          <aside className="aside-items">
            <div className="book-cover-img">
              <img src={this.state.imageURL} alt="book-cover.img" />
            </div>
            <form>
              <div className="borrow-btn">{buttonStatus}</div>
            </form>
          </aside>
        </section>
      </div>
    );
  }
}

export default BorrowButton;
