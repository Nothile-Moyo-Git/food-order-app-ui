import React, { useReducer } from "react";
import CartContext from "./cart-context";


const cartReducer = (state, action) => {

    if( action.type === 'add' ){

        // Calculate the total amount to be paid
        const updatedAmount = state.amount + action.item.price * action.item.amount;

        // Check if an item already exists in our array
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        // Reference it so we can add more items instead of rendering it repeatedly
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        // If we already have the item, then add the new amount to the previous amount at that point in the array, or push it at the end
        if (existingCartItem){
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItem = state.item;
            updatedItems = state.items.concat(action.item);
        }
 
        // Return the updated context
        return { items: updatedItems, amount: updatedAmount };
    }


    if( action.type === 'remove'){
        
        // Check if an item already exists in our array
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingItem = state.items[existingCartItemIndex];
        
        // Get new amount with removed item
        const updatedAmount  = (state.amount - Number(existingItem.price)).toFixed(2);

        let updatedItems;

        // If we have only item item left, then remove it, otherwise, remove one from the amount and calculator it 
        if (existingItem.amount === 1 ){
            updatedItems = state.items.filter((item) => { console.log(item); return(item.id !== action.id); } );
        }else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        // Return our data with an item removed from the array
        return { items: updatedItems, amount: updatedAmount  };
    }

    // Default return for our inital render
    return { items: [], amount: 0};

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