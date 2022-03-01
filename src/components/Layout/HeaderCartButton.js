import React from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
    return(
    <button className="header-cart">
        <CartIcon width="24" height="24"></CartIcon>
        <p> Your Cart </p>
        <div className="order-count" > 0 </div>
    </button>);
}

export default HeaderCartButton;