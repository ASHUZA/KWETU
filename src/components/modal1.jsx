import React from "react";
import "./Modal.scss";

function Modal({ setOpenModal }) {
  return (
      <>   
     
       <div className="modalBackground">

      <div className="modalContainer">
      <div className="modal-box">

<div className="modal-item">
<i class="fas fa-moon dark-icon"></i>
<h4> Nouvel utilisateur </h4>          
</div>
<div className="modal-item">
<i class="fas fa-moon dark-icon"></i>
<h4> Nouvel utilisateur </h4>          
</div>

</div>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
    </>

  );
}

export default Modal;
