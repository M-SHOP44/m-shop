import React from 'react'
import thankyou from "../../../images/lottie/thankyou.json"
import Lottie from "react-lottie";
import './style.css'



    const Modal = ({ handleClose, show, children }) => {
        const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
    <section className="modal-main">
      {children}
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </section>  
  </div>
  );
};

export default Popup
