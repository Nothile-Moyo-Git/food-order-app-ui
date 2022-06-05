import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import './Modal.scss';

const Modal = (props) => {
    
    // We're creating a portal to the root of the page so our overlay is based on that
    const pageRoot = document.getElementById('root');

    // Hide the modal if we click on the backdrop of the page
    const closeModal = () => { props.showModal(false); }

    // Create a copy of our cart modal here, since we want to show the checkout form if the user clicks on order
    const cart = <Cart showModal={ props.showModal }/>

    return(
        <>
            <div className="backdrop" onClick={ closeModal }></div>
            { ReactDOM.createPortal(cart, pageRoot) }
        </>
    );

}

export default Modal;