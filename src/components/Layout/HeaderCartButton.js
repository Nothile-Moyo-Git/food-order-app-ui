import React, { useContext, useEffect, useState } from 'react';
import './HeaderCartButton.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    // Setting our state so we animate our button once we update the cart only
    const [animateButton, setAnimateButton] = useState(false);
    
    // Importing our current cart context so we can share the data across the entire app
    const globalCartContext = useContext(CartContext);

    // Show our Cart modal on click
    const showModal = () => { props.showModal(true); }

    const { items } = globalCartContext ;

    const numberOfCartItems = globalCartContext.items.reduce((prevNumber, item) => {
        return prevNumber + item.amount;
    }, 0);

    useEffect( () => {

        // Do nothing if our cart is empty ( such as initialization )
        if( items.length === 0 ){ return; }

        setAnimateButton(true);

        // Remove the pulse animation by changing state after the animation ends
        const timer = setTimeout( () => {
            setAnimateButton(false);
        }, 1001);

        // Clean up our timer in case a new one is set
        return () => clearTimeout(timer);
        
    },[items]);


    return(
    <button className={ `header-cart ${ animateButton === true ? 'pulse' : '' }` } onClick={ showModal }>
        <CartIcon width="24" height="24"></CartIcon>
        <p> Your Cart </p>
        <div className="order-count"> { numberOfCartItems } </div>
    </button>);
}

export default HeaderCartButton;