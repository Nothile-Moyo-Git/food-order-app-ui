import React from 'react';
import './HeaderCartButton.scss';
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {
    return(<div className="header-cart">
        <CartIcon width="24" height="24"></CartIcon>
        <h3> Your Cart </h3>
    </div>);
}

export default HeaderCartButton;