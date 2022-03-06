import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import './Modal.scss';

const Modal = (props) => {

    // We're creating a portal to the root of the page so our overlay is based on that
    const pageRoot = document.getElementById('root');

    // Hide the modal if we click on the backdrop of the page
    const closeModal = () => { props.showModal(false); }

    return(
        <>
            <div className="backdrop" onClick={ closeModal }></div>
            { ReactDOM.createPortal(<Cart className="modal" showModal={ props.showModal }/>, pageRoot) }
        </>
    );

}

export default Modal;