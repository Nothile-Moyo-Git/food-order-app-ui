import React from "react";

// Creating an empty jsx object we're referencing throughout the entire site for global state management
const CartContext = React.createContext({
    items: [],
    total: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;