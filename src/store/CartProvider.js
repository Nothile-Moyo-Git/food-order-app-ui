import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {

    // We're using concat to create new pointers in order to avoid mutation side effects
    if( action.type === 'add' ){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.amount + action.item.price * action.item.amount;
        return { items: updatedItems, amount: updatedAmount };
    }


    if( action.type === 'remove'){

    }
    return { items: [], amount: 0 };

};

const CartProvider = (props) => {

    const defaultCartState = {
        items: [],
        amount: 0,
    };

    // Add item to cart using the reducer above above, action will be of type "add"
    const addItemToCartHandler = (item) => {
        dispatcher({ item: item, type: 'add' });
    };

    // Add item to cart using the reducer above above, action will be of type "remove"
    const removeItemFromCartHandler = (id) => {
        dispatcher({ id: id, type: 'remove' });
    };

    // We're using a reducer to be able to add/remove items to our cart dynamically
    const [cartState, dispatcher] = useReducer(cartReducer, defaultCartState);

    // We're passing any child components through here with the data we're placing into value={}
    const cartContext = {
        items: cartState.items,
        amount: cartState.amount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;