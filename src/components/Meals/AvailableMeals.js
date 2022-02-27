import React, { useContext } from "react";
import './AvailableMeals.scss';
import MealsContext from './DummyMeals.js';

const AvailableMeals = (props) => {

    const context = useContext(MealsContext);
    console.log(context);

    const mealList = [];

    context.meals.forEach((meal,index) => {
        mealList.push(
        <li key={ meal.id }>
            <div className="text-align-left">
                {meal.name}
                <br/>
                {meal.description}
                <br/>
                {meal.price}
            </div>

            <div>
                Add to cart button
            </div>

        </li>); 
    }); 

    return(
        <div className="available-meals">
            <ul>
                {mealList}
            </ul>
        </div>
    );
} 

export default AvailableMeals;