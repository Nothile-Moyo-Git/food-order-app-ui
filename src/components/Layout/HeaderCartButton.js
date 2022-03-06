import React from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {

    // Show our Cart modal on click
    const showModal = () => { props.showModal(true); }

    return(
    <button className="header-cart" onClick={ showModal }>
        <CartIcon width="24" height="24"></CartIcon>
        <p> Your Cart </p>
        <div className="order-count" > 0 </div>
    </button>);
}

export default HeaderCartButton;