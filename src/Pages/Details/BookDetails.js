import React from "react";
import "./BookDetails.css";
import BookDetailNavbar from "../../Components/Navbar/BookDetailNavbar";
import BookContent from "../../Components/Book/BookContent";
import BorrowButton from "../../Components/Book/BorrowButton";
import EditModal from "../../Components/Modal/EditModal";
import DeleteModal from "../../Components/Modal/DeleteModal";
import Axios from "axios";
const URL_STRING = "/api/v1/books/";
class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: props.match.params.id
    };
  }

  getBookById = () => {
    Axios.get(URL_STRING + `${this.state.id}`)
      .then(({ data }) => {
        this.setState({
          book: data.result
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getBookById();
  };

  render() {
    const { book } = this.state;
    console.log(book);
    return (
      <div className="grid-container">
        {book &&
          book.map((item, index) => (
            <div key={index}>
              <BookDetailNavbar imageURL={item.imageURL} title={item.title} />
              <div className="grid-templates-content">
                <BookContent
                  description={item.description}
                  genre={item.genre}
                  title={item.title}
                  releasedDate={item.released_date}
                />
                <BorrowButton imageURL={item.imageURL} />
              </div>
              <EditModal />
              <DeleteModal id={item.id} title={item.title} />
            </div>
          ))}
        <div style={{ marginTop: "60px" }}></div>
      </div>
    );
  }
}

export default BookDetails;
