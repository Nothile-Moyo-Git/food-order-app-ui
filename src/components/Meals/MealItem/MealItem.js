import React from "react";
import './MealItem.scss'
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

    return( 
        <li key={props.id} className="meal">
            <div className="text-align-left meal-item">
                <h3 className="title"> {props.name}: </h3>
                <p className="description"> {props.description} </p>
                <p className="price"> £{props.price} </p> 
            </div>

            <div className="add-to-cart">
                <MealItemForm id={props.id} label={props.label} type="number"></MealItemForm>
            </div>
        </li> 
    );

}

export default MealItem;