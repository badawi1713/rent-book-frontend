import Axios from "axios";

export const getAllBook = () => {
  return {
    type: "GET_BOOK",
    payload: Axios.get("/api/v1/books/")
  };
};

export const getBookById = id => {
  return {
    type: "GET_BOOK_BY_ID",
    payload: Axios.get("/api/v1/books/" + id)
  };
};

export const postNewBook = data => {
  return {
    type: "POST_BOOK",
    payload: Axios.post("/api/v1/books/add", data)
  };
};

export const updateBookData = (id, newData) => {
  return {
    type: "EDIT_BOOK",
    payload: Axios.patch("/api/v1/books/update/" + id, newData)
  };
};

export const deleteBookData = id => {
  return {
    type: "DELETE_BOOK",
    payload: Axios.delete("/api/v1/books/delete/" + id)
  };
};
