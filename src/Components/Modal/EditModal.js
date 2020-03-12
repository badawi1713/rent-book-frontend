import React from "react";
import "./styles/EditModal.css";

const URL_STRING = "/api/v1/";

const editModal = () => {
  return (
    <div id="editModal" className="edit-modal">
      <div className="edit-modal-content">
        <div className="edit-modal-header">
          <span className="close">&times;</span>
          <p>Edit Data</p>
        </div>
        <div className="edit-modal-body">
          <div className="form-wrapper">
            <form action="">
              <div className="row">
                <div className="col-20">
                  <label htmlFor="image-url">URL Image</label>
                </div>
                <div className="col-80">
                  <input
                    type="text"
                    id="imageURL"
                    name="imageURL"
                    placeholder="URL Image.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-20">
                  <label htmlFor="book-title">Title</label>
                </div>
                <div className="col-80">
                  <input
                    type="text"
                    id="bookTitle"
                    name="bookTitle"
                    placeholder="Title.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-20">
                  <label htmlFor="book-description">Description</label>
                </div>
                <div className="col-80">
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description.."
                    style={{ height: "200px" }}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editModal;
