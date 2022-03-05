import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import './Modal.scss';

const Modal = (props) => {

    // We're creating a portal to the root of the page so our overlay is based on that
    const pageRoot = document.getElementById('root');


    return(
        <div className="backdrop">
            { ReactDOM.createPortal(<Cart className="modal"/>, pageRoot) }
        </div>
    );

}

export default Modal;