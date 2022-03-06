import React from "react";
import './Cart.scss';

const Cart = (props) => {

    const hideModal = () => { props.showModal(false); }

    // Creating a dynamic list of all the items in our cart, we will reference this with context later
    const cartItems =   
    <ul className="cart-items"> 
        { [{id: 'm1', name: 'SFC', amount: 2, price: 2.99 }].map(
            (item) => <li> {item.name} </li> 
        )} 
    </ul>

    return(
        <div className={props.className}>
            {cartItems}
            <div className="total"> 
                <span> Total Amount </span>
                <span> £9.99 </span>
            </div>
            <div className="actions"> 
                <button className="button--alt" onClick={ hideModal }> Close </button>
                <button className="button"> Checkout </button>
            </div>
        </div>
    );
}


export default Cart;