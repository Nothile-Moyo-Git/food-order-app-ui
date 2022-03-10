import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import './Cart.scss';

const Cart = (props) => {

    const hideModal = () => { props.showModal(false); }

    // We're getting our global items here so we can reference out updated cart and output the information
    const globalCartContext = useContext(CartContext);
    
    const totalAmount = `£${globalCartContext.amount.toFixed(2)}`;

    /* 
    // Creating a dynamic list of all the items in our cart, we will reference this with context later
    const cartItems =   
    <ul className="cart-items"> 
        { [{id: 'm1', name: 'SFC', amount: 2, price: 2.99 }].map(
            (item) => <li> {item.name} </li> 
        )} 
    </ul> */

    const cartItems = 
    <ul className="cart-items">
        {
            globalCartContext.items.map(
                (item) => { 

                    let total = Number(item.price * item.amount).toFixed(2);

                    return(
                        <li>
                            <p> { `${item.name} (${item.amount})` } </p>
                            <div className="total">
                                <span> Price: </span>
                                <span> { `£${total}` } </span>
                            </div>                            
                        </li>
                    ); 
                }
            )
        }
    </ul>

    return(
        <div className={props.className}>
            {   /* cartItems */   }
            { 
                globalCartContext.items.length > 0 ? cartItems : <h3 className="empty-text"> Cart Empty </h3> 
            }
            <div className="total total__amount">               
                <span> Total Amount </span>
                <span> { totalAmount } </span>               
            </div>
            <div className="actions"> 
                <button className="button--alt" onClick={ hideModal }> Close </button>
                <button className="button"> Checkout </button>
            </div>
        </div>
    );
}


export default Cart;