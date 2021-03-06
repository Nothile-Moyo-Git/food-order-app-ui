import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import CheckoutForm from "../forms/CheckoutForm";
import './Cart.scss';
import CartItem from "./CartItem";

const Cart = (props) => {

    const [clickedOrderButton, setClickedOrderButton] = useState(false);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const hideModal = () => { props.showModal(false); }

    // We're getting our global items here so we can reference out updated cart and output the information
    const globalCartContext = useContext(CartContext);
    
    const totalAmount = `£${Number(globalCartContext.amount).toFixed(2)}`;

    const hasItems = globalCartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        globalCartContext.removeItem(id);
    };

    const cartAddItemHandler = (item) => {
        globalCartContext.addItem({...item, amount: 1});
    };
    
    // Creating a dynamic list of all the items in our cart, we will reference this with context later
    const cartItems =   
    <ul className="cart-items"> 
        {
            globalCartContext.items.map( (item) => {
                return(
                    <CartItem 
                        key={ item.id } 
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price} 
                        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                        onAdd={cartAddItemHandler.bind(null, item)} 
                    />
                );
            })
        }
    </ul> 

    const orderButtonHandler = () => {

        // setShowCheckoutForm(true);
 
        // Add the class to our element in order to animate it
        setClickedOrderButton(true);

        // Remove the animation class 1ms after the animation ends in order to allow it to be clickable again
        setTimeout(() => { setClickedOrderButton(false); }, 301);

    }

    const checkoutForm = <CheckoutForm showCheckout={setShowCheckoutForm} className="checkout-form"/>;

    const cartContent =             
        <div>
            { cartItems }
            <div className="total total__amount">               
                <span> Total Amount </span>
                <span> { totalAmount } </span>               
            </div>
            <div className="actions"> 
                <button className="button--alt" onClick={ hideModal }> Close </button>
                { hasItems && <button className={ `button ${clickedOrderButton ? 'click-order-button' : '' }`  } onClick={ orderButtonHandler }> Order </button> }
                {   clickedOrderButton &&
                    <div className="order-reject">
                        <span className="order-reject__bar order-reject__bar--one"></span>
                        <span className="order-reject__bar order-reject__bar--two"></span>
                    </div> 
                }
            </div>
        </div>;

    return(
        <section className="modal">
            { !showCheckoutForm ? cartContent : checkoutForm }
        </section>
    );
}


export default Cart;