import React, { useContext } from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    
    // Importing our current cart context so we can share the data across the entire app
    const globalCartContext = useContext(CartContext);

    // Show our Cart modal on click
    const showModal = () => { props.showModal(true); }

    const numberOfCartItems = globalCartContext.items.reduce((prevNumber, item) => {
        return prevNumber + item.amount;
    }, 0);

    return(
    <button className="header-cart" onClick={ showModal }>
        <CartIcon width="24" height="24"></CartIcon>
        <p> Your Cart </p>
        <div className="order-count"> { numberOfCartItems } </div>
    </button>);
}

export default HeaderCartButton;