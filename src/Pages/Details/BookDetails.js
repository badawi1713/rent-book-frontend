import React from "react";
import "./BookDetails.css";
import BookDetailNavbar from "../../Components/Navbar/BookDetailNavbar";
import BookContent from "../../Components/Book/BookContent";
import BorrowButton from "../../Components/Book/BorrowButton";
import EditModal from "../../Components/Modal/EditModal";
import DeleteModal from "../../Components/Modal/DeleteModal";
// import Axios from "axios";
import { connect } from "react-redux";
import { getBookById } from "../../Redux/actions/books";
class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: props.match.params.id
    };
  }

  getBookById = async () => {
    await this.props.dispatch(getBookById(this.state.id));
    // console.log(this.props.data);
    this.setState({
      book: this.props.data.book.bookData.result
    });
  };

  componentDidMount = () => {
    this.getBookById();
  };

  render() {
    const { book } = this.state;
    // console.log(book);
    return (
      <div className="grid-container">
        {book &&
          book.map((item, index) => (
            <div key={index}>
              <BookDetailNavbar data={item} />
              <div className="grid-templates-content">
                <BookContent data={item} />
                <BorrowButton data={item} />
              </div>
              <EditModal data={item} />
              <DeleteModal data={item} />
            </div>
          ))}
        <div style={{ marginTop: "60px" }}></div>
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    data: book
  };
};

export default connect(mapStateToProps)(BookDetails);
