import React from "react";
import "./Modal.scss";

function Modal({ setOpenModal }) {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modal-box">
            <div className="modal-item"  onClick={() => {
                setOpenModal(false);
              }}>
              <i class="fas fa-moon dark-icon" onClick={() => {
                setOpenModal(false);
              }}></i>
              <h4> Modifier </h4>
            </div>
            <div className="modal-item">
              <i class="fas fa-moon dark-icon" onClick={() => {
                setOpenModal(false);
              }}></i>
              <h4> Supprimer </h4>
            </div>
            <div className="modal-item">
              <i class="fas fa-moon dark-icon" onClick={() => {
                setOpenModal(false);
              }}></i>
              <h4> Créer utilisateur </h4>
            </div>
            <div className="modal-item">
              <i class="fas fa-moon dark-icon" onClick={() => {
                setOpenModal(false);
              }}></i>
              <h4> Annuler </h4>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default Modal;
