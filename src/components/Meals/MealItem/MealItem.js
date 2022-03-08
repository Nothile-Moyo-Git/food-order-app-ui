import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import './MealItem.scss'
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    const globalCartContext = useContext(CartContext);

    const price = `${props.price.toFixed(2)}`;

    // On form submissionm add this jsx object to the context to be referenced by the cart
    const addToCartHandler = (amount) => {
        globalCartContext.addItem({id: props.id, name: props.name, amount: amount, price: price});
    }

    return( 
        <li key={props.id} className="meal">
            <div className="text-align-left meal-item">
                <h3 className="title"> {props.name}: </h3>
                <p className="description"> {props.description} </p>
                <p className="price"> £{props.price} </p> 
            </div>

            <div className="add-to-cart">
                <MealItemForm id={props.id} label={props.label} type="number" onAddToCart={ addToCartHandler }></MealItemForm>
            </div>
        </li> 
    );

}

export default MealItem;