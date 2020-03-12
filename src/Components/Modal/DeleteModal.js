import React from "react";
import "./styles/DeleteModal.css";
import checkedLogo from "../../public/images/checked.png";

const DeleteModal = () => {
  return (
    <div id="deleteModal" className="delete-modal">
      <div className="delete-modal-content">
        <div className="delete-modal-header">
          <span className="close">&times;</span>
        </div>
        <div className="delete-modal-body">
          <div className="body-wrapper">
            <img src={checkedLogo} alt="" srcSet="" />
            <h2>
              Data <span>Dilan 1990</span> Berhasil Dihapus!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
